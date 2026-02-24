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

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    // Rate limiting: 5 requests per 15 minutes per IP
    const rateLimitResult = checkRateLimit(ip, "/api/contact");
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
    const data = contactSchema.parse(body);

    // 1. Persist to database (source of truth — do this first)
    if (isDbConfigured()) {
      try {
        await db.query(
          `INSERT INTO contact_submissions (name, email, message, ip_address)
           VALUES ($1, $2, $3, $4)`,
          [data.name, data.email, data.message, ip]
        );
      } catch (dbErr) {
        // Log but don't block — still try to send the email
        console.error("[Contact] DB write failed:", dbErr);
      }
    }

    // 2. Send email notification
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "hello@jakecfo.com";
    const toEmails = [toEmail, "steve.j.pilcher@gmail.com"];

    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.log("[Contact Form - dev mode]", data);
      return NextResponse.json({ success: true, dev: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jake CFO <noreply@jakecfo.com>",
        to: toEmails,
        reply_to: data.email,
        subject: `Contact: ${data.name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#1e3a5f;">New Contact Message</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
            <hr/>
            <p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[Contact] Resend error:", err);
      // Lead is already saved in DB — return success anyway
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }
    console.error("[Contact] Route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
