import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "mutebialvinalvienzo@gmail.com",
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\nMessage: ${message}`,
    })

    return NextResponse.json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ message: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}