import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // 1. Try saving to MongoDB (non-blocking if DB is down)
    try {
      await Contact.create({ name, email, message });
    } catch (dbErr) {
      console.warn("MongoDB save skipped:", dbErr.message);
    }

    // 2. Send email notification to you
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Gmail App Password (not your real password)
        },
      });

      // Email you receive
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // sends to yourself
        replyTo: email,             // so you can reply directly to the sender
        subject: `📩 New message from ${name} — Portfolio`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h2 style="color: #1a1a2e; margin-bottom: 4px;">New Portfolio Message</h2>
            <p style="color: #6b7280; font-size: 14px; margin-top: 0;">Someone reached out via your portfolio contact form.</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <table style="width:100%; font-size: 14px; color: #374151;">
              <tr><td style="padding: 6px 0; font-weight: 600; width: 80px;">Name</td><td>${name}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600;">Email</td><td><a href="mailto:${email}" style="color:#059669;">${email}</a></td></tr>
            </table>
            <div style="margin-top: 16px; background: #f9fafb; border-radius: 8px; padding: 16px; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #9ca3af;">Hit Reply to respond directly to ${name}.</p>
          </div>
        `,
      });

      // Auto-reply to sender
      await transporter.sendMail({
        from: `"Harsh Verma" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}!`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h2 style="color: #1a1a2e;">Hey ${name}, thanks for reaching out!</h2>
            <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
              I've received your message and will get back to you within <strong style="color:#059669;">24 hours</strong>.
            </p>
            <div style="margin-top: 16px; background: #f9fafb; border-radius: 8px; padding: 16px; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;"><strong>Your message:</strong><br/>${message}</div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 14px; color: #374151;">
              — <strong>Harsh Verma</strong><br/>
              <a href="https://www.linkedin.com/in/harshverma2608/" style="color:#059669;">LinkedIn</a> &nbsp;·&nbsp;
              <a href="https://github.com/Harshverma2608" style="color:#059669;">GitHub</a>
            </p>
          </div>
        `,
      });
    }

    res.json({ success: true, message: "Message received! I'll get back to you soon." });
  } catch (err) {
    console.error("Contact error:", err.message);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
