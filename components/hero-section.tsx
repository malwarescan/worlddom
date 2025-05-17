"use client"

import { ArrowRight, Check } from "lucide-react"

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

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="envato-button flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

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
            <div className="bg-[rgb(var(--envato-dark))] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Ready to scale your digital presence?</h3>
              <p className="text-gray-300 mb-6">
                Get a free consultation and discover how our AI-driven solutions can transform your business.
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--envato-green))] text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--envato-green))] text-white"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--envato-green))] text-white">
                    <option value="">Select Service</option>
                    <option value="seo">Neural SEO</option>
                    <option value="roblox">ROBLOX Marketing</option>
                    <option value="ai">AI Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="envato-button w-full">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
