import { NextResponse } from "next/server"
import { transporter } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Format the data for the email
    const emailContent = `
      <h2>New Order Received</h2>
      
      <h3>Plan Details:</h3>
      <p><strong>Plan:</strong> ${data.plan}</p>
      <p><strong>Price:</strong> $${data.price}/month</p>
      
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${data.customerInfo.name}</p>
      <p><strong>Email:</strong> ${data.customerInfo.email}</p>
      <p><strong>Company:</strong> ${data.customerInfo.company || "Not provided"}</p>
      <p><strong>Website:</strong> ${data.customerInfo.website}</p>
      <p><strong>Additional Info:</strong> ${data.customerInfo.additionalInfo || "None"}</p>
      
      <h3>Hosting Information:</h3>
      ${
        typeof data.hostingInfo === "string"
          ? `<p>${data.hostingInfo}</p>`
          : `
          <p><strong>Provider:</strong> ${data.hostingInfo.provider || "Not provided"}</p>
          <p><strong>Username:</strong> ${data.hostingInfo.username || "Not provided"}</p>
          <p><strong>Password:</strong> ${data.hostingInfo.password || "Not provided"}</p>
        `
      }
      
      <h3>Payment Information:</h3>
      <p><strong>Card Number:</strong> ${data.paymentInfo.cardNumber}</p>
      <p><strong>Name on Card:</strong> ${data.paymentInfo.cardName}</p>
      <p><strong>Expiry Date:</strong> ${data.paymentInfo.cardExpiry}</p>
      <p><strong>CVC:</strong> ${data.paymentInfo.cardCvc}</p>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "info@neuralcommandllc.com",
      to: "info@neuralcommandllc.com",
      subject: `New Order: ${data.plan} Plan - ${data.customerInfo.name}`,
      html: emailContent,
    })

    // In a real application, you would also store the order in a database

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing order:", error)
    return NextResponse.json({ success: false, error: "Failed to process order" }, { status: 500 })
  }
}
