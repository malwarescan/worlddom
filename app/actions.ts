"use server"

import { z } from "zod"
import { sendContactEmail } from "@/lib/email"

// Define the schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = ContactFormSchema.parse(data)

    try {
      // Send email using nodemailer
      await sendContactEmail(validatedData)

      // Return success response
      return {
        success: true,
        message: "Your message has been sent! We'll get back to you shortly.",
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return {
        success: false,
        message: "There was an error sending your email. Please try again or contact us directly.",
      }
    }
  } catch (error) {
    console.error("Form submission error:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your form inputs.",
        errors: error.errors,
      }
    }

    // Return generic error
    return {
      success: false,
      message: "There was an error sending your message. Please try again.",
    }
  }
}

