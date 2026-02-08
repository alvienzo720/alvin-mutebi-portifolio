// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required fields" },
        { status: 400 },
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mutebialvinalvienzo@gmail.com",
      subject: `Portfolio Contact: ${subject || "New message"}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "N/A"}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
  
  <div style="margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || "N/A"}</p>
  </div>
  
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
    <p style="margin-top: 0;"><strong>Message:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  </div>
  
  <p style="margin-top: 20px; font-size: 12px; color: #666;">This email was sent from your portfolio contact form.</p>
</div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
