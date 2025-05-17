"use client"

import { Check } from "lucide-react"
import ContactForm from "./contact-form"

export default function HeroSection() {
  return (
    <section className="bg-[rgb(var(--envato-darker))] py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Intelligent systems for the <span className="envato-gradient">creatively obsessed</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              From neural SEO architectures to immersive ROBLOX campaigns, build bridges between your brand and audience
              at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[rgb(var(--envato-green))] mr-2" />
                <span className="text-gray-300">+280% Traffic Growth</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[rgb(var(--envato-green))] mr-2" />
                <span className="text-gray-300">215% ROI in ROBLOX</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-[rgb(var(--envato-green))] mr-2" />
                <span className="text-gray-300">Fortune 500 Clients</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
