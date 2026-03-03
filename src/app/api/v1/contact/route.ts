import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, message" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #7c3aed;">📬 New Contact Message</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #666;">Name</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #666;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #666;">Subject</td><td style="padding: 8px;">${subject}</td></tr>
        </table>
        <h3 style="margin-top: 20px;">Message</h3>
        <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
      </div>
    `;

    await sendEmail({
      subject: `[Contact] ${subject}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ success: true, message: "Message sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
