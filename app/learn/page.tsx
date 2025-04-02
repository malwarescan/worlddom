import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Check, X, MessageSquare, Zap, Clock, BarChart3, Repeat2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnhancedBackground from "@/components/enhanced-background"
import GlassGlowText from "@/components/glass-glow-text"
import RevealOnScroll from "@/components/reveal-on-scroll"

export const metadata: Metadata = {
  title: "How AI-Optimized Web Hosting Works | Neural Command",
  description:
    "Discover how our AI-powered web hosting eliminates developer headaches, delivers faster results, and grows your business with zero technical knowledge required.",
  keywords:
    "AI web hosting, no-code website, website without developers, automated web optimization, AI website improvement, business website solution",
}

export default function LearnPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#070914]">
      {/* Background with neural network effect */}
      <div className="fixed inset-0 z-0">
        <EnhancedBackground />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 md:mb-6">
              <div className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                No More Developer Headaches
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
              <GlassGlowText text="Your Website Should Work For You" />
              <span className="block text-xl sm:text-2xl md:text-3xl mt-2 text-indigo-300">
                Not The Other Way Around
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
              Tired of endless back-and-forth with developers? Our AI-powered platform eliminates the frustration and
              delivers
              <span className="text-indigo-300 font-medium"> results that grow your business</span>, with zero technical
              knowledge required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout?plan=business">
                <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                <GlassGlowText text="The Old Way Is Broken" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                If you've ever worked with web developers, this probably sounds familiar...
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {painPoints.map((point, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="card-gradient border border-red-500/20 rounded-lg p-6 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                    <X className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{point.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{point.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                <GlassGlowText text="Introducing The AI-Powered Way" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Our conversational AI platform eliminates the middleman and delivers results, not excuses.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {solutionPoints.map((point, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 h-full hover-glow-blue transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                    <point.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{point.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{point.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-12 md:py-24 bg-indigo-900/10 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                <GlassGlowText text="How It Works" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started is simple. No coding, no technical knowledge required.
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-5xl mx-auto w-full">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="relative mb-8 md:mb-12 flex flex-col items-center">
                  <div className="flex flex-col md:flex-row items-start w-full">
                    <div className="flex flex-col items-center mr-0 md:mr-6 mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-300 font-bold">{index + 1}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block h-full w-0.5 bg-indigo-500/20 my-2"></div>
                      )}
                    </div>
                    <div className="card-gradient border border-indigo-500/20 rounded-lg p-4 sm:p-6 flex-grow text-center md:text-left">
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4">{step.description}</p>
                      {step.features && (
                        <ul className="space-y-2 mx-auto md:mx-0 max-w-md text-left">
                          {step.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                <GlassGlowText text="What Our Customers Say" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Business owners just like you are already seeing results.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="card-gradient border border-indigo-500/20 rounded-lg p-4 sm:p-6 h-full hover-glow-blue transition-all duration-300 flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-indigo-300 font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{testimonial.business}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
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
                Everything you need to know about our AI-powered web platform.
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 w-full">
            {faqs.map((faq, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="card-gradient border border-indigo-500/20 rounded-lg p-4 sm:p-6 text-center">
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
            <div className="max-w-4xl mx-auto text-center bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 sm:p-8 md:p-12 glow-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                Ready to Stop Fighting With Your Website?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Join businesses that have eliminated developer headaches and are seeing real results with our AI-powered
                platform.
              </p>
              <Link href="/checkout?plan=business">
                <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
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

const painPoints = [
  {
    title: "Endless Back-and-Forth",
    description: "Weeks of emails, calls, and meetings just to make simple changes to your website.",
  },
  {
    title: "Technical Jargon",
    description: "Developers speaking in code that might as well be a foreign language.",
  },
  {
    title: "Missed Deadlines",
    description: '"It\'ll be done next week" turns into next month, then next quarter.',
  },
  {
    title: "Budget Overruns",
    description: "What started as a simple project somehow costs 3x your initial budget.",
  },
  {
    title: "Constant Maintenance",
    description: "Your site breaks every time there's an update, requiring more developer time.",
  },
  {
    title: "Poor Results",
    description: "After all the time and money spent, your website still isn't bringing in business.",
  },
]

const solutionPoints = [
  {
    title: "Conversational Interface",
    description: "Simply tell our AI what you want, in plain English. No technical knowledge required.",
    icon: MessageSquare,
  },
  {
    title: "Instant Implementation",
    description: "Changes happen in real-time, not after weeks of developer back-and-forth.",
    icon: Zap,
  },
  {
    title: "Continuous Optimization",
    description: "Your site automatically improves based on visitor behavior and performance data.",
    icon: Repeat2,
  },
  {
    title: "Fixed Monthly Cost",
    description: "One predictable subscription fee. No surprise bills or hourly developer rates.",
    icon: Clock,
  },
  {
    title: "Results-Driven Approach",
    description: "We measure success by your business outcomes, not technical metrics.",
    icon: BarChart3,
  },
  {
    title: "Zero Technical Debt",
    description: "No outdated code or systems to maintain. Everything stays current automatically.",
    icon: Check,
  },
]

const steps = [
  {
    title: "Tell Us About Your Current Website",
    description: "We'll clone your existing site or create a new one based on your business needs.",
    features: [
      "Provide your current website URL or describe what you need",
      "No need to transfer hosting or domain immediately",
      "We handle all the technical details",
    ],
  },
  {
    title: "Our AI Analyzes and Optimizes",
    description: "Our proprietary AI engine examines your site and makes immediate improvements.",
    features: [
      "Performance optimization for faster loading",
      "Mobile responsiveness enhancements",
      "SEO improvements for better visibility",
      "User experience refinements",
    ],
  },
  {
    title: "Your Site Evolves Automatically",
    description: "Unlike traditional websites that stagnate, yours continuously improves.",
    features: [
      "AI monitors visitor behavior and makes adjustments",
      "Regular content and design refreshes",
      "Automatic technical updates and security patches",
      "Ongoing SEO optimization based on search trends",
    ],
  },
  {
    title: "You Focus on Your Business, Not Your Website",
    description: "While your website works for you, you can concentrate on what matters most.",
    features: [
      "Regular performance reports show your results",
      "Request changes through simple conversation",
      "No more developer dependencies or technical headaches",
      "Predictable monthly cost with no surprises",
    ],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    business: "Bloom Boutique",
    quote:
      "After years of frustration with developers, Neural Command's platform was a breath of fresh air. My site is faster, looks better, and I'm getting more customers without any technical headaches.",
  },
  {
    name: "Michael Rodriguez",
    initials: "MR",
    business: "Rodriguez Consulting",
    quote:
      "I was skeptical about an AI-powered website, but the results speak for themselves. My lead generation is up 43% and I haven't had to talk to a developer in months.",
  },
  {
    name: "Jennifer Williams",
    initials: "JW",
    business: "Coastal Properties",
    quote:
      "As a real estate agent, my website is crucial. Neural Command's platform automatically optimizes my listings and has dramatically improved my conversion rate. Worth every penny!",
  },
]

const faqs = [
  {
    question: "Do I need any technical knowledge to use this?",
    answer:
      "Absolutely not. Our platform is designed specifically for business owners with zero technical background. If you can use email, you can use our platform.",
  },
  {
    question: "What happens to my existing website?",
    answer:
      "We'll clone your current website into our platform, preserving its look and feel while enhancing its performance and capabilities. Your original site can remain active until you're ready to switch over.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most customers see immediate improvements in site speed and appearance. SEO and conversion improvements typically begin showing results within 2-4 weeks as search engines index your optimized site.",
  },
  {
    question: "Can I still make changes to my website?",
    answer:
      "Yes! You can request changes through our conversational interface at any time. Simply describe what you want in plain English, and our AI will implement the changes.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "You can cancel your subscription at any time. We'll provide an export of your website that you can take to any standard hosting provider.",
  },
  {
    question: "Is there a limit to how many changes I can request?",
    answer:
      "No. All plans include unlimited change requests. Our AI handles the implementation, so you're never charged extra for modifications.",
  },
]

