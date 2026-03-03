import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ subject, html, replyTo }: EmailOptions) {
  return transporter.sendMail({
    from: `"Conduit Software" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject,
    html,
    replyTo,
  });
}
