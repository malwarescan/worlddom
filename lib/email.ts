import nodemailer from "nodemailer"

// Create a transporter object using SMTP transport
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mail.neuralcommandllc.com",
  port: Number.parseInt(process.env.EMAIL_PORT || "465"), // Changed to 465 for SSL
  secure: true, // Changed to true for SSL
  auth: {
    user: process.env.EMAIL_USER || "info@neuralcommandllc.com",
    pass: process.env.EMAIL_PASSWORD || "",
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false,
  },
})

export async function sendContactEmail(data: {
  name: string
  email: string
  company?: string
  message: string
}) {
  const { name, email, company, message } = data

  // Email to the site owner
  const mailOptions = {
    from: process.env.EMAIL_FROM || "info@neuralcommandllc.com",
    to: process.env.EMAIL_TO || "info@neuralcommandllc.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || "Not provided"}
      
      Message:
      ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  }

  // Send email
  return transporter.sendMail(mailOptions)
}
