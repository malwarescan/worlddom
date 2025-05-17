"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  service: string
  message?: string
}

export async function sendContactEmail(data: EmailData) {
  try {
    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${data.service} Service`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
        <p>This email was sent from the Neural Command website contact form.</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
