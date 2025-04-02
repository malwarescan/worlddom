"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Mail, Phone } from "lucide-react"
import { submitContactForm } from "@/app/actions"

interface ContactFormProps {
  businessData: any
}

export default function ContactForm({ businessData }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: businessData.businessName || "",
    email: businessData.email || "",
    phone: businessData.phone || "",
    message: `I'm interested in learning more about how Neural Command's AI solutions can help my ${businessData.industry} business.`,
    preferredContact: "email",
    scheduleDemo: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success: boolean
    message: string
    errors?: any[]
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create a FormData object
      const formDataObj = new FormData()
      formDataObj.append("name", formData.name)
      formDataObj.append("email", formData.email)
      formDataObj.append("company", businessData.company || "")

      // Add additional context to the message
      const enhancedMessage = `
${formData.message}

Additional Information:
- Industry: ${businessData.industry || "Not specified"}
- Company Size: ${businessData.employees || "Not specified"} employees
- Preferred Contact Method: ${formData.preferredContact}
- Interested in Demo: ${formData.scheduleDemo ? "Yes" : "No"}
- Phone: ${formData.phone || "Not provided"}
      `.trim()

      formDataObj.append("message", enhancedMessage)

      // Submit the form using the server action
      const response = await submitContactForm(formDataObj)
      setFormResponse(response)

      if (response.success) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormResponse({
        success: false,
        message: "There was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Thank You!</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          {formResponse?.message ||
            "Your message has been sent. A Neural Command representative will contact you shortly to discuss your AI implementation options."}
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-blue-500/30 hover:bg-blue-500/10"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">Ready to Transform Your Business?</h2>
      <p className="text-neutral-600 dark:text-neutral-300 mb-6">
        Contact us to discuss how we can implement these AI solutions for your business.
      </p>

      {formResponse && !formResponse.success && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
          {formResponse.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Business Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="organization"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required />
        </div>

        <div className="space-y-2">
          <Label>Preferred Contact Method</Label>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="email-contact"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === "email"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-neutral-300 focus:ring-blue-500"
              />
              <Label htmlFor="email-contact" className="cursor-pointer flex items-center">
                <Mail className="h-4 w-4 mr-1 text-blue-500" /> Email
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="phone-contact"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === "phone"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-neutral-300 focus:ring-blue-500"
              />
              <Label htmlFor="phone-contact" className="cursor-pointer flex items-center">
                <Phone className="h-4 w-4 mr-1 text-blue-500" /> Phone
              </Label>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="scheduleDemo"
            checked={formData.scheduleDemo}
            onCheckedChange={(checked) => handleCheckboxChange("scheduleDemo", checked as boolean)}
          />
          <Label htmlFor="scheduleDemo" className="cursor-pointer">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>I'd like to schedule a personalized demo</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              See how these AI solutions would work specifically for your business
            </p>
          </Label>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary">
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">Request Consultation</span>
          )}
        </Button>
      </form>
    </div>
  )
}

