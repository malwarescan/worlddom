import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import EnhancedBackground from "@/components/enhanced-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Viontra | Neural Command",
  description:
    "The Operating System for Your Digital Presence - Control your website, SEO, Google Business, ads, and CRM from one interface.",
}

export default function ViontraPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#070914]">
      {/* Enhanced Background with stars */}
      <EnhancedBackground
        particleCount={100}
        particleSize={2}
        particleColor="#ffffff"
        speed={0.5}
        className="absolute inset-0 z-0"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md transform rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl md:text-2xl">
                V
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
            Viontra by Neural Command
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            The Operating System for Your Digital Presence
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16"></div>
        </div>
      </section>

      {/* What Is Viontra Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Is Viontra?</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Viontra is Neural Command's flagship AI-powered platform built to centralize, automate, and optimize a
              business's entire online footprint. From website generation and SEO to CRM integration, social presence,
              and advertising — Viontra delivers a unified, intelligent interface to control it all.
            </p>

            <p className="text-lg md:text-xl text-gray-300">
              Whether you're a service-based business, digital agency, or solo operator, Viontra eliminates friction and
              simplifies complexity, empowering users to launch fully optimized funnels and web infrastructure with
              minimal effort.
            </p>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-16"></div>
        </div>
      </section>

      {/* Why We Built It Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why We Built It</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300">
              Neural Command is focused on intelligent systems that reduce operational drag. We created Viontra to solve
              a persistent problem: business owners juggling disconnected tools, agencies, and subscriptions — just to
              maintain an online presence. Viontra removes those barriers through smart automation and seamless
              integration.
            </p>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-16"></div>
        </div>
      </section>

      {/* Key Use Cases Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Use Case 1 */}
            <div className="bg-[#0c1225] p-8 rounded-xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group cursor-pointer transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300">
                Intelligent Onboarding
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Viontra's Smart Forms transform basic submissions into actionable marketing assets. The system scrapes
                SEO data and social metadata in real time, then auto-generates CRM profiles, landing pages, and
                pre-filled funnels—all personalized from the very first input.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-[#0c1225] p-8 rounded-xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group cursor-pointer transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300">
                Funnel Automation
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                By connecting to GoHighLevel's API, Viontra programmatically clones and deploys funnel templates based
                on industry, goals, and user data. This allows your business to move from interest to conversion faster,
                with less manual setup.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-[#0c1225] p-8 rounded-xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group cursor-pointer transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300">
                Centralized Marketing Control
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Viontra functions as a digital operations hub. Users can manage their website, CRM, SEO, ad presence,
                and business profiles—all from a single dashboard designed for clarity, speed, and scale.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-[#0c1225] p-8 rounded-xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group cursor-pointer transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300">
                AI-Powered Content Scraping
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Through automated crawling of public business websites and social pages, Viontra intelligently gathers
                relevant headlines, descriptions, images, and metadata to enhance copywriting, page optimization, and
                campaign assets.
              </p>
            </div>

            {/* Use Case 5 */}
            <div className="bg-[#0c1225] p-8 rounded-xl border border-indigo-900/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group cursor-pointer transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300">
                Niche-Specific Funnel Matching
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Viontra not only deploys funnels—it selects the right one. Based on scraped input and business logic,
                the platform identifies and populates the most appropriate funnel template, reducing friction and
                increasing relevance at launch.
              </p>
            </div>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-16"></div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built For</h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start group cursor-pointer">
              <CheckCircle className="text-indigo-500 mr-3 h-6 w-6 flex-shrink-0 mt-1 group-hover:text-indigo-400 transition-colors duration-300 transform group-hover:scale-110" />
              <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                Digital agencies managing multiple clients
              </p>
            </div>

            <div className="flex items-start group cursor-pointer">
              <CheckCircle className="text-indigo-500 mr-3 h-6 w-6 flex-shrink-0 mt-1 group-hover:text-indigo-400 transition-colors duration-300 transform group-hover:scale-110" />
              <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                SaaS resellers looking to automate onboarding
              </p>
            </div>

            <div className="flex items-start group cursor-pointer">
              <CheckCircle className="text-indigo-500 mr-3 h-6 w-6 flex-shrink-0 mt-1 group-hover:text-indigo-400 transition-colors duration-300 transform group-hover:scale-110" />
              <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                Coaches, consultants, and local service providers
              </p>
            </div>

            <div className="flex items-start group cursor-pointer">
              <CheckCircle className="text-indigo-500 mr-3 h-6 w-6 flex-shrink-0 mt-1 group-hover:text-indigo-400 transition-colors duration-300 transform group-hover:scale-110" />
              <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                Marketing teams needing speed, consistency, and control
              </p>
            </div>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-16"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn More</h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Viontra is transforming the way businesses build, launch, and manage their online presence—intelligently and
            instantly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://viontra.io" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-md text-lg font-medium transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                Visit viontra.io
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>

            <Link href="/contact">
              <Button
                variant="outline"
                className="border-indigo-500 text-white hover:bg-indigo-950 px-8 py-6 rounded-md text-lg font-medium transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Contact Neural Command
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Command Your Digital Presence Section */}
      <section className="py-20 relative bg-[#0a0e1f] border-t border-indigo-900/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            COMMAND YOUR
            <br />
            DIGITAL PRESENCE
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            One interface to control your website, SEO, Google Business, ads, and CRM.
          </p>

          <p className="text-lg text-emerald-400 mb-10">Powered by AI. Built for scale.</p>

          <a href="https://viontra.io" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 rounded-md text-lg font-medium transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
              Launch Control Panel
            </Button>
          </a>

          <div className="mt-20 max-w-4xl mx-auto p-8 bg-[#0c1225] rounded-xl border border-indigo-900/30">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 text-yellow-400 mr-2">💡</div>
              <h3 className="text-2xl font-bold">Smart Onboarding™ — Let AI Set You Up for Success</h3>
            </div>

            <p className="text-gray-300 mb-6">
              Skip the guesswork. Viontra's Smart Onboarding™ captures your business info, connects your digital assets,
              and instantly begins building your SEO-optimized website, funnel pages, and marketing stack — powered by
              AI.
            </p>

            <p className="text-emerald-400 italic mb-8">"It's not a form — it's your launch sequence."</p>

            <a href="https://viontra.io" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-indigo-600 to-emerald-500 hover:from-indigo-700 hover:to-emerald-600 text-white px-8 py-4 rounded-md text-lg font-medium transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                <span className="mr-2">🚀</span> Start Smart. Launch Fast.
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
