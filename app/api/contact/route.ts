import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export async function POST(req: Request) {
  try {
    const { name, email, phone, projectType, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Email service not configured yet — log the inquiry so it isn't lost
      // during local development, and tell the visitor to email directly.
      console.log("[CONTACT FORM — RESEND_API_KEY not set]", {
        name,
        email,
        phone,
        projectType,
        message,
      });
      return NextResponse.json(
        {
          error:
            "The email service is not configured yet. Please email us directly.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // "onboarding@resend.dev" works out of the box on Resend's free plan.
      // Replace with your own verified domain later for nicer branding.
      from: "Arash Web Studio <onboarding@resend.dev>",
      to: [siteConfig.email],
      replyTo: email,
      subject: `New project inquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#7c5cff">New Project Inquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888">Name</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Phone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Project type</td><td style="padding:8px 0">${projectType || "—"}</td></tr>
          </table>
          <h3 style="margin-top:24px;color:#7c5cff">Message</h3>
          <p style="white-space:pre-wrap;line-height:1.6">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send the email right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
