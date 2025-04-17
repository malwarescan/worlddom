"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { submitContactForm } from "@/app/actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isPending, startTransition] = useTransition()
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset errors
    setFormErrors({})

    // Create FormData object from the form
    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    startTransition(async () => {
      const result = await submitContactForm(formDataObj)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: result.message,
        })

        // Set success state to true
        setIsSubmitSuccess(true)

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })

        // Automatically hide the success message after 5 seconds
        setTimeout(() => {
          setIsSubmitSuccess(false)
        }, 5000)
      } else {
        // Reset success state on error
        setIsSubmitSuccess(false)

        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })

        // Set form errors if any
        if (result.errors) {
          const errors: Record<string, string> = {}
          result.errors.forEach((err: any) => {
            if (err.path && err.path[0]) {
              errors[err.path[0]] = err.message
            }
          })
          setFormErrors(errors)
        }
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col pt-16 bg-gradient-to-b from-[#070b1a] to-[#0d1338]">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">CONTACT US</h1>

          <p className="text-xl text-gray-300 mb-12">
            Ready to transform your business with advanced neural network solutions? Get in touch with our team to
            discuss your needs.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">GET IN TOUCH</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-indigo-400" />
                  <a href="tel:+18445684624" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    (844) 568-4624
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-indigo-400" />
                  <a
                    href="mailto:info@neuralcommandllc.com"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    info@neuralcommandllc.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-indigo-400" />
                  <div className="text-gray-300">
                    <p className="font-semibold">Neural Command Headquarters</p>
                    <p className="text-gray-400">1639 11th St. Santa Monica</p>
                    <div className="mt-3">
                      <p className="font-semibold">South Bend Branch</p>
                      <p className="text-gray-400">Downtown South Bend, Indiana</p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">OFFICE HOURS</h3>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p className="text-gray-300">Saturday - Sunday: Closed</p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">CONNECT WITH US</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/neuralcommand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-indigo-500/30 rounded-full flex items-center justify-center hover:bg-indigo-500/10 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/neural-command-llc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-indigo-500/30 rounded-full flex items-center justify-center hover:bg-indigo-500/10 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/neuralcommand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-indigo-500/30 rounded-full flex items-center justify-center hover:bg-indigo-500/10 transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-white">SEND US A MESSAGE</h2>

              {/* Success message overlay */}
              {isSubmitSuccess && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#070b1a]/90 z-10 rounded-md animate-in fade-in duration-300">
                  <div className="text-center p-8 max-w-md">
                    <div className="mx-auto w-16 h-16 mb-4 text-indigo-500 flex items-center justify-center">
                      <CheckCircle className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">Thank you for contacting us. We'll get back to you shortly.</p>
                    <Button
                      onClick={() => setIsSubmitSuccess(false)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`bg-[#0a1029]/50 border ${formErrors.name ? "border-red-500" : "border-indigo-500/30"} focus-visible:border-indigo-400`}
                  />
                  {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`bg-[#0a1029]/50 border ${formErrors.email ? "border-red-500" : "border-indigo-500/30"} focus-visible:border-indigo-400`}
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1 text-gray-300">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`bg-[#0a1029]/50 border ${formErrors.company ? "border-red-500" : "border-indigo-500/30"} focus-visible:border-indigo-400`}
                  />
                  {formErrors.company && <p className="mt-1 text-sm text-red-500">{formErrors.company}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`bg-[#0a1029]/50 border ${formErrors.message ? "border-red-500" : "border-indigo-500/30"} focus-visible:border-indigo-400`}
                  />
                  {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {isPending ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      SENDING...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4 text-white" />
                      SEND MESSAGE
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">OUR LOCATIONS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0a1029]/50 border border-indigo-500/30 p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/50 to-purple-500/50 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-indigo-400"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Santa Monica, California</h3>
                <p className="text-gray-300 mb-2">Main Headquarters</p>
                <p className="text-gray-300 mb-4">
                  Our primary office where our core team develops cutting-edge neural network solutions.
                </p>
              </div>

              <div className="bg-[#0a1029]/50 border border-indigo-500/30 p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/50 to-indigo-500/50 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-purple-400"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">South Bend, Indiana</h3>
                <p className="text-gray-300 mb-2">Midwest Satellite Office</p>
                <p className="text-gray-300 mb-4">
                  Our Midwest operations center focused on serving clients throughout the region with specialized AI
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1029]/50 border border-indigo-500/30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">LOOKING FOR A CAREER?</h2>
            <p className="text-gray-300 mb-6">
              Interested in joining our team? Check out our current job openings and apply today.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">VIEW CAREERS</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
