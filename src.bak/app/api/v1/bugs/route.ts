import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { project, title, severity, description, steps, expected, actual, environment, email } = body;

    // Validation
    if (!project || !title || !description) {
      return NextResponse.json(
        { error: "Missing required fields: project, title, description" },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #7c3aed;">🐛 New Bug Report</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; color: #666;">Project</td><td style="padding: 8px;">${project}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #666;">Severity</td><td style="padding: 8px;">${severity || "medium"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #666;">Reporter</td><td style="padding: 8px;">${email || "Anonymous"}</td></tr>
          ${environment ? `<tr><td style="padding: 8px; font-weight: bold; color: #666;">Environment</td><td style="padding: 8px;">${environment}</td></tr>` : ""}
        </table>
        <h3 style="margin-top: 20px;">Title</h3>
        <p>${title}</p>
        <h3>Description</h3>
        <p>${description}</p>
        ${steps ? `<h3>Steps to Reproduce</h3><pre style="background: #f5f5f5; padding: 12px; border-radius: 6px;">${steps}</pre>` : ""}
        ${expected ? `<h3>Expected Behavior</h3><p>${expected}</p>` : ""}
        ${actual ? `<h3>Actual Behavior</h3><p>${actual}</p>` : ""}
      </div>
    `;

    await sendEmail({
      subject: `[Bug] [${severity?.toUpperCase() || "MEDIUM"}] ${title}`,
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: "Bug report received" });
  } catch (error) {
    console.error("Bug report error:", error);
    return NextResponse.json(
      { error: "Failed to submit bug report" },
      { status: 500 }
    );
  }
}
