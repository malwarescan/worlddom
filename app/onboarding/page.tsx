"use client"

import Link from "next/link"
import { Check, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassGlowText from "@/components/glass-glow-text"
import RevealOnScroll from "@/components/reveal-on-scroll"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen relative bg-[#0a0e1f]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                Neural Command
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <GlassGlowText text="Smart Site Onboarding" />
              <span className="block text-2xl md:text-3xl mt-2 text-indigo-300">One-Time Setup, Lifetime Benefits</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Before your website can start evolving with AI, we replicate it into our intelligent optimization
              engine—securely and precisely. This one-time setup ensures your site is ready for continuous updates,
              performance tuning, and automated growth.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <GlassGlowText text="What's Included in the Onboarding Fee" />
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    Full site cloning & migration
                  </h3>
                  <p className="text-gray-300">
                    We create an exact replica of your website in our system, ensuring every element is preserved and
                    optimized.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    Initial SEO & speed audit
                  </h3>
                  <p className="text-gray-300">
                    We analyze your site's current performance, identifying opportunities for immediate and long-term
                    improvements.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    AI behavior model setup
                  </h3>
                  <p className="text-gray-300">
                    We configure our AI to understand your specific website structure, content patterns, and business
                    goals.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    Baseline UX optimization
                  </h3>
                  <p className="text-gray-300">
                    We establish performance benchmarks and implement initial improvements to user experience and
                    conversion paths.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    Domain pointing & SSL configuration
                  </h3>
                  <p className="text-gray-300">
                    We handle all technical aspects of connecting your domain to our platform and ensuring secure HTTPS
                    connections.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    Pre-launch performance test
                  </h3>
                  <p className="text-gray-300">
                    We conduct comprehensive testing to ensure your site is functioning perfectly before going live on
                    our platform.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    AI strategy personalization
                  </h3>
                  <p className="text-gray-300">
                    We tailor our AI's optimization approach to your specific industry, audience, and business
                    objectives.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl text-gray-300 mb-6">
                  Think of it as handing your site to a team of elite developers, data scientists, and marketers—who
                  never sleep.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 bg-indigo-900/10">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="card-gradient border border-indigo-500/30 rounded-lg p-8 md:p-10 glow-border-blue">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-white">Standard Onboarding Fee</h2>
                    <p className="text-xl text-gray-300">Scales with your website size</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="flex items-center">
                      <span className="text-2xl text-gray-400 line-through mr-3">$199</span>
                      <span className="text-4xl font-bold text-white">$99</span>
                    </div>
                    <span className="text-indigo-300 font-medium">50% OFF Limited Time</span>
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Covers up to 10 pages</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Scales for most business sites</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        Add-ons available for blog import, ecommerce syncing, and complex apps
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Scaling for Larger Sites:</h3>
                  <p className="text-gray-300 mb-4">
                    For websites with more than 60 pages, our onboarding fee scales to accommodate the additional
                    complexity:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Up to 60 pages: $99 (standard fee)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">61-110 pages: $149</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">111-160 pages: $199</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">161+ pages: Custom quote</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-6 mb-8">
                  <div className="flex items-start">
                    <AlertCircle className="h-6 w-6 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Special Offer: 50% OFF</h3>
                      <p className="text-gray-300">
                        For early adopters who sign up this month. No coupons. No tricks. Automatically applied at
                        checkout.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/checkout?onboarding=true">
                    <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6 text-lg">
                      Get AI Setup For Just $99 <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why We Charge Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <GlassGlowText text="Why We Charge (And Why It's Worth It)" />
                </h2>
              </div>

              <p className="text-xl text-gray-300 mb-8 text-center">
                While our AI takes care of your site long-term, we manually oversee the initial setup to guarantee:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    No bugs or broken links
                  </h3>
                  <p className="text-gray-300">
                    Our team meticulously tests every aspect of your site to ensure flawless functionality.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    Perfect styling & layout
                  </h3>
                  <p className="text-gray-300">
                    We ensure your brand's visual identity is preserved and enhanced in every detail.
                  </p>
                </div>

                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 hover-glow-blue transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                    <Check className="h-5 w-5 text-indigo-400 mr-2" />
                    Flawless performance tuning
                  </h3>
                  <p className="text-gray-300">
                    We optimize your site's speed and responsiveness before it goes live on our platform.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl text-gray-300 mb-8">
                  Your site doesn't just get copied.
                  <br />
                  <span className="text-indigo-300 font-medium">It gets strategically prepared for automation.</span>
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Add-On Options */}
      <section className="relative py-16 bg-indigo-900/10">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <GlassGlowText text="Add-On Options" />
                </h2>
                <p className="text-xl text-gray-300">Optional enhancements available during checkout</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-4 px-6 bg-indigo-900/30 text-white font-bold rounded-tl-lg">
                        Add-On
                      </th>
                      <th className="text-center py-4 px-6 bg-indigo-900/30 text-white font-bold">Price</th>
                      <th className="text-left py-4 px-6 bg-indigo-900/30 text-white font-bold rounded-tr-lg">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-indigo-500/20">
                      <td className="py-4 px-6 text-white">Blog Import</td>
                      <td className="py-4 px-6 text-center text-white">$49</td>
                      <td className="py-4 px-6 text-gray-300">Bring in up to 50 blog posts with metadata</td>
                    </tr>
                    <tr className="border-b border-indigo-500/20">
                      <td className="py-4 px-6 text-white">Ecommerce Sync</td>
                      <td className="py-4 px-6 text-center text-white">$99</td>
                      <td className="py-4 px-6 text-gray-300">Set up product pages with AI-friendly structure</td>
                    </tr>
                    <tr className="border-b border-indigo-500/20">
                      <td className="py-4 px-6 text-white">Analytics Setup</td>
                      <td className="py-4 px-6 text-center text-white">$99</td>
                      <td className="py-4 px-6 text-gray-300">GA4, Heatmaps, Event Tracking configured</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-white rounded-bl-lg">Custom Domain Migration</td>
                      <td className="py-4 px-6 text-center text-white">$149</td>
                      <td className="py-4 px-6 text-gray-300 rounded-br-lg">
                        Full DNS + SSL setup with fallback security routing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                <GlassGlowText text="Start smarter. Launch faster. Grow automatically." />
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your onboarding is the only manual step—after that, your website runs itself.
              </p>
              <Link href="/checkout?onboarding=true">
                <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6 text-lg">
                  Start For $99 Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}

