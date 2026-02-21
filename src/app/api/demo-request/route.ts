import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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
    const body = await req.json();
    const data = demoSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "hello@thepilcherrules.com";

    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.log("[Demo Request]", data);
      return NextResponse.json({ success: true, dev: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "The Pilcher Rules <noreply@thepilcherrules.com>",
        to: [toEmail],
        reply_to: data.email,
        subject: `🎯 Demo Request: ${data.firstName} ${data.lastName} — ${data.company}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:24px;border-radius:12px;">
            <h2 style="color:#1e3a5f;margin-bottom:4px;">New Demo Request</h2>
            <p style="color:#64748b;margin-top:0;">Someone wants to see The Pilcher Rules in action.</p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Name</td><td style="padding:8px 0;font-weight:600;color:#1e293b;">${data.firstName} ${data.lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#3b82f6;">${data.email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Company</td><td style="padding:8px 0;font-weight:600;color:#1e293b;">${data.company}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Revenue</td><td style="padding:8px 0;color:#1e293b;">${data.revenue ?? "Not specified"}</td></tr>
            </table>
            ${data.painPoint ? `
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
            <h3 style="color:#1e293b;margin-bottom:8px;">Biggest pain point</h3>
            <p style="color:#374151;background:#fff;padding:16px;border-radius:8px;border:1px solid #e2e8f0;">${data.painPoint}</p>
            ` : ""}
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
            <p style="color:#94a3b8;font-size:12px;">Reply directly to this email to respond to ${data.firstName}.</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    // Send confirmation to the requester
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Steve at The Pilcher Rules <hello@thepilcherrules.com>",
        to: [data.email],
        subject: "Got your demo request — talk soon.",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#1e3a5f;">We got your request, ${data.firstName}.</h2>
            <p style="color:#374151;line-height:1.6;">
              We'll reach out within 1 business day to schedule your 30-minute demo.
              No slides. No runaround. Just live product with your data.
            </p>
            <p style="color:#374151;line-height:1.6;">
              In the meantime, explore what each agent does at
              <a href="https://thepilcherrules.com/agents" style="color:#3b82f6;">thepilcherrules.com/agents</a>.
            </p>
            <p style="color:#374151;">— Steve</p>
          </div>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0]?.message ?? "Invalid input" }, { status: 400 });
    }
    console.error("Demo request route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
