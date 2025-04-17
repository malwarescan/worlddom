"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-blue-900/20 border border-blue-500/30 px-4 py-2 focus:outline-none focus:border-blue-400 text-white"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 font-medium hover:opacity-90 transition-colors"
      >
        {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
      </Button>
    </form>
  )
}
