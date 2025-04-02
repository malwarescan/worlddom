import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PricingTier from "@/components/pricing-tier"
import GlassGlowText from "@/components/glass-glow-text"
import RevealOnScroll from "@/components/reveal-on-scroll"

export const metadata: Metadata = {
  title: "Pricing | Neural Command",
  description: "Choose the right AI-powered web hosting plan for your business needs.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-[#070b1a] to-[#0d1338]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
              <GlassGlowText text="Simple, Transparent Pricing" />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our AI-powered optimization and zero
              technical headaches.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <RevealOnScroll delay={0}>
              <PricingTier
                name="Starter"
                price={99}
                description="Perfect for small businesses just getting started with their online presence."
                features={[
                  "1 Website (up to 10 pages)",
                  "Weekly AI Optimization Pass",
                  "SEO Monitoring + Tag Enhancements",
                  "Up to 25,000 Visits/Month",
                  "Monthly Performance Report",
                ]}
                idealFor="Small businesses, freelancers, local service providers."
                ctaText="Get Started"
                ctaLink="/checkout?plan=starter"
                popular={false}
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <PricingTier
                name="Growth"
                price={199}
                description="For growing businesses that need more advanced features and optimization."
                features={[
                  "1 Website (up to 30 pages)",
                  "Bi-Weekly AI Optimization Pass",
                  "Advanced SEO & Content Optimization",
                  "Up to 100,000 Visits/Month",
                  "Weekly Performance Reports",
                  "A/B Testing & Conversion Optimization",
                  "Priority Support",
                ]}
                idealFor="Growing businesses, e-commerce stores, and marketing agencies."
                ctaText="Get Started"
                ctaLink="/checkout?plan=growth"
                popular={true}
              />
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <PricingTier
                name="Pro"
                price={299}
                description="Enterprise-grade features for businesses that demand the best performance."
                features={[
                  "1 Website (up to 60 pages)",
                  "Daily AI Optimization Pass",
                  "Enterprise-grade SEO & Analytics",
                  "Unlimited Visits",
                  "Real-time Performance Dashboard",
                  "Advanced AI Content Generation",
                  "Dedicated Account Manager",
                  "Custom Integrations",
                ]}
                idealFor="Established businesses, high-traffic sites, and enterprise clients."
                ctaText="Get Started"
                ctaLink="/checkout?plan=pro"
                popular={false}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Need a Custom Solution?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
                For websites with 60+ pages or advanced functionality requirements, we offer custom Enterprise solutions
                tailored to your specific needs.
              </p>
              <Link href="/contact">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 md:py-24 bg-indigo-900/10 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                <GlassGlowText text="Frequently Asked Questions" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our pricing and plans.
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 w-full">
            {faqs.map((faq, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="bg-[#0a1029]/50 border border-indigo-500/20 rounded-lg p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{faq.question}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{faq.answer}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Ready to Transform Your Website Experience?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Join businesses that have eliminated developer headaches and are seeing real results with our AI-powered
                platform.
              </p>
              <Link href="/checkout?plan=growth">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 mt-4">
                No technical knowledge required. 30-day satisfaction guarantee.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "How do you determine website size?",
    answer:
      "Website size is based on the number of unique pages on your site. Each page with unique content counts toward your total. Dynamic content generated from databases (like product listings) counts as a single template page.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes! You can upgrade your plan at any time as your business grows. Your billing will be prorated so you only pay the difference for the remainder of your billing cycle.",
  },
  {
    question: "What happens if I exceed my monthly visits?",
    answer:
      "We won't cut off your traffic if you exceed your monthly visit limit. We'll notify you when you're approaching your limit and recommend an upgrade if the trend continues. Short-term traffic spikes are accommodated without additional charges.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. All our plans are month-to-month with no long-term commitment required. You can cancel at any time without penalty.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No. There are no hidden fees or setup costs. The price you see is the price you pay.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards and PayPal. For Enterprise plans, we can also accommodate invoicing and purchase orders.",
  },
]

