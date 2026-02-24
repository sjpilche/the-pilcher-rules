import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db, isDbConfigured } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";

/**
 * Escape HTML special characters to prevent injection in email templates
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

const demoSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  company: z.string().min(1).max(100),
  revenue: z.string().optional(),
  painPoint: z.string().max(2000).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    // Rate limiting: 5 requests per 15 minutes per IP
    const rateLimitResult = checkRateLimit(ip, "/api/demo-request");
    if (!rateLimitResult.allowed) {
      const resetTime = new Date(rateLimitResult.resetAt).toISOString();
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          resetAt: resetTime,
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const data = demoSchema.parse(body);

    // 1. Persist to database (source of truth — do this first)
    if (isDbConfigured()) {
      try {
        await db.query(
          `INSERT INTO demo_requests
             (first_name, last_name, email, company, revenue, pain_point, ip_address)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [
            data.firstName,
            data.lastName,
            data.email,
            data.company,
            data.revenue ?? null,
            data.painPoint ?? null,
            ip,
          ]
        );
      } catch (dbErr) {
        // Log but don't block — still try to send the email
        console.error("[Demo Request] DB write failed:", dbErr);
      }
    }

    // 2. Send email notification
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "hello@jakecfo.com";
    const toEmails = [toEmail, "steve.j.pilcher@gmail.com"];

    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.log("[Demo Request - dev mode]", data);
      return NextResponse.json({ success: true, dev: true });
    }

    // Admin notification
    const adminRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jake CFO <noreply@jakecfo.com>",
        to: toEmails,
        reply_to: data.email,
        subject: `🎯 Demo Request: ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)} — ${escapeHtml(data.company)}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:24px;border-radius:12px;">
            <h2 style="color:#1e3a5f;margin-bottom:4px;">New Demo Request</h2>
            <p style="color:#64748b;margin-top:0;">Someone wants to see Jake in action.</p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Name</td><td style="padding:8px 0;font-weight:600;color:#1e293b;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#3b82f6;">${escapeHtml(data.email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Company</td><td style="padding:8px 0;font-weight:600;color:#1e293b;">${escapeHtml(data.company)}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Revenue</td><td style="padding:8px 0;color:#1e293b;">${data.revenue ? escapeHtml(data.revenue) : "Not specified"}</td></tr>
            </table>
            ${data.painPoint ? `
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
            <h3 style="color:#1e293b;margin-bottom:8px;">Biggest pain point</h3>
            <p style="color:#374151;background:#fff;padding:16px;border-radius:8px;border:1px solid #e2e8f0;">${escapeHtml(data.painPoint)}</p>
            ` : ""}
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
            <p style="color:#94a3b8;font-size:12px;">Reply directly to this email to respond to ${escapeHtml(data.firstName)}.</p>
          </div>
        `,
      }),
    });

    if (!adminRes.ok) {
      const err = await adminRes.text();
      console.error("[Demo Request] Resend admin email error:", err);
      // Lead is already saved — return success
      return NextResponse.json({ success: true });
    }

    // Confirmation to requester
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jake CFO <hello@jakecfo.com>",
        to: [data.email],
        subject: "Got your demo request — talk soon.",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#1e3a5f;">We got your request, ${escapeHtml(data.firstName)}.</h2>
            <p style="color:#374151;line-height:1.6;">
              We'll reach out within 1 business day to schedule your 30-minute demo.
              No slides. No runaround. Just live product with your data.
            </p>
            <p style="color:#374151;line-height:1.6;">
              In the meantime, explore what each agent does at
              <a href="https://jakecfo.com/agents" style="color:#3b82f6;">jakecfo.com/agents</a>.
            </p>
            <p style="color:#374151;">— Steve</p>
          </div>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }
    console.error("[Demo Request] Route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
