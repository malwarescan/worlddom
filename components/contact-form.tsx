"use client"

import type React from "react"

import { useState } from "react"
import { sendContactEmail } from "@/lib/email"
import { ArrowRight, Check, AlertCircle, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  })

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error"
    message: string
  }>({
    type: "idle",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      })
      return
    }

    setStatus({
      type: "loading",
      message: "Sending your message...",
    })

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setStatus({
          type: "success",
          message: result.message,
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          service: "",
        })
      } else {
        setStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
    }
  }

  return (
    <div className="bg-[rgb(var(--envato-dark))] p-6 rounded-lg border border-gray-800">
      <h3 className="text-xl font-bold mb-4">Ready to scale your digital presence?</h3>
      <p className="text-gray-300 mb-6">
        Get a free consultation and discover how our AI-driven solutions can transform your business.
      </p>

      {status.type === "success" ? (
        <div className="bg-green-900/30 border border-green-800 rounded-md p-4 mb-6 flex items-start">
          <Check className="text-green-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-green-300">{status.message}</p>
            <button
              onClick={() => setStatus({ type: "idle", message: "" })}
              className="text-green-400 hover:text-green-300 text-sm mt-2 underline"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status.type === "error" && (
            <div className="bg-red-900/30 border border-red-800 rounded-md p-4 flex items-start">
              <AlertCircle className="text-red-400 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-red-300">{status.message}</p>
            </div>
          )}

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--envato-green))] text-white"
              disabled={status.type === "loading"}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--envato-green))] text-white"
              disabled={status.type === "loading"}
            />
          </div>
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--envato-green))] text-white"
              disabled={status.type === "loading"}
            >
              <option value="">Select Service</option>
              <option value="Neural SEO">Neural SEO</option>
              <option value="ROBLOX Marketing">ROBLOX Marketing</option>
              <option value="AI Integration">AI Integration</option>
              <option value="Dating Ecosystem">Dating Ecosystem</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="envato-button w-full flex justify-center items-center"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Sending...
              </>
            ) : (
              <>
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
