import Link from "next/link"
import { ArrowRight, Brain, Search, BarChart, LineChart, Settings, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Neural SEO Services | AI-Powered Search Engine Optimization | Neural Command",
  description:
    "Boost your organic traffic by up to 280% with our AI-driven Neural SEO services. We combine machine learning with content optimization for unprecedented growth.",
  keywords:
    "neural SEO, AI SEO, search engine optimization, organic traffic growth, SEO services, machine learning SEO",
}

export default function SEOServicesPage() {
  const benefits = [
    {
      title: "280% Average Traffic Growth",
      description:
        "Our clients experience significant organic traffic increases through our AI-powered optimization techniques.",
      icon: LineChart,
    },
    {
      title: "73% Conversion Rate Increase",
      description: "We don't just drive traffic—we attract qualified visitors who are more likely to convert.",
      icon: BarChart,
    },
    {
      title: "First Page Rankings",
      description: "Our neural SEO architecture helps your content rank higher for competitive keywords.",
      icon: Trophy,
    },
    {
      title: "Algorithm-Proof Strategy",
      description: "Our AI models predict and adapt to search algorithm changes before they impact your rankings.",
      icon: Shield,
    },
  ]

  const services = [
    {
      title: "Neural SEO Audit",
      description:
        "Comprehensive analysis of your site's SEO performance using advanced AI tools to identify opportunities and issues.",
      icon: Search,
    },
    {
      title: "AI Content Optimization",
      description:
        "Machine learning-powered content enhancement that improves relevance and semantic richness for better rankings.",
      icon: Brain,
    },
    {
      title: "Technical SEO",
      description:
        "Advanced technical optimization to ensure search engines can effectively crawl, index, and render your site.",
      icon: Settings,
    },
    {
      title: "Predictive Keyword Research",
      description: "AI-driven identification of high-potential keywords before they become highly competitive.",
      icon: TrendingUp,
    },
    {
      title: "Autonomous SEO Agents",
      description: "AI agents that continuously monitor your site's performance and make real-time optimizations.",
      icon: Bot,
    },
    {
      title: "Accelerated Results",
      description:
        "Our neural approach delivers faster results than traditional SEO methods through predictive modeling.",
      icon: Zap,
    },
  ]

  const faqs = [
    {
      question: "What is Neural SEO?",
      answer:
        "Neural SEO is our proprietary approach that combines traditional search engine optimization with advanced artificial intelligence and machine learning. It analyzes patterns across millions of search results to predict algorithm changes and optimize content in ways that traditional SEO cannot achieve.",
    },
    {
      question: "How is Neural SEO different from traditional SEO?",
      answer:
        "Traditional SEO relies on known best practices and manual optimization. Neural SEO uses machine learning to identify patterns in successful content, predict algorithm changes, and automatically optimize for factors that humans might miss. This results in more comprehensive optimization and better resistance to algorithm updates.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "While SEO is generally a long-term strategy, our Neural SEO approach typically delivers initial improvements within 30-60 days, with significant results visible within 3-4 months. Our predictive models and AI-driven optimizations accelerate results compared to traditional methods.",
    },
    {
      question: "Do you guarantee first page rankings?",
      answer:
        "While no ethical SEO company can guarantee specific rankings (as search algorithms are controlled by search engines), our Neural SEO approach has a proven track record of achieving first page rankings for our clients across various industries and competitive keywords.",
    },
    {
      question: "Is Neural SEO suitable for my industry?",
      answer:
        "Yes! Our Neural SEO methodology has been successfully applied across diverse industries including e-commerce, SaaS, healthcare, finance, education, and more. We customize our approach based on your specific industry dynamics and competitive landscape.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "We track comprehensive metrics beyond just rankings, including organic traffic growth, conversion rates, keyword visibility, click-through rates, and ultimately, your ROI. Our dashboard provides transparent reporting on all key performance indicators.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[rgb(var(--envato-darker))] py-16 md:py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 hero-pattern opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  Neural SEO: <span className="envato-gradient">Beyond Traditional Optimization</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Achieve up to 280% organic traffic growth with our AI-powered SEO services. We combine advanced
                  machine learning with proven SEO strategies to deliver unprecedented results in today's competitive
                  search landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#services" className="envato-button inline-flex items-center">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Get a Free SEO Audit
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl animate-float"></div>
                  <div className="relative z-10 w-full h-full rounded-2xl bg-[rgb(var(--envato-dark))] border border-gray-800 flex items-center justify-center p-8">
                    <Brain className="w-32 h-32 text-[rgb(var(--envato-green))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">280%</div>
                <p className="text-gray-600">Average Traffic Growth</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">73%</div>
                <p className="text-gray-600">Conversion Rate Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">6x</div>
                <p className="text-gray-600">ROI Compared to Traditional SEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Neural SEO?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI-powered approach delivers superior results compared to traditional SEO methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SEO Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive SEO solutions powered by artificial intelligence to drive sustainable organic growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Neural SEO Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a data-driven methodology to ensure maximum organic growth for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Comprehensive Audit</h3>
                <p className="text-gray-600">
                  We analyze your site, competitors, and industry using our proprietary AI tools.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Strategic Planning</h3>
                <p className="text-gray-600">
                  We develop a customized SEO strategy based on predictive modeling and data analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Implementation</h3>
                <p className="text-gray-600">
                  Our team executes technical optimizations, content enhancements, and off-page strategies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Continuous Optimization</h3>
                <p className="text-gray-600">
                  Our AI agents monitor performance and make real-time adjustments to maximize results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our Neural SEO services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[rgb(var(--envato-green))]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Ready to grow your organic traffic?</h2>
                <p className="text-white text-opacity-90">
                  Get a free SEO audit and discover how Neural SEO can transform your search visibility.
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Get Your Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Neural SEO Services",
              provider: {
                "@type": "Organization",
                name: "Neural Command",
                url: "https://neuralcommand.com",
              },
              description:
                "AI-powered search engine optimization services that deliver up to 280% organic traffic growth.",
              serviceType: "Search Engine Optimization",
              areaServed: "Worldwide",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                validFrom: "2023-01-01",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Free SEO Audit",
                },
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  )
}

// Missing component definitions
function Trophy(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function Shield(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function TrendingUp(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

function Bot(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="10" x="3" y="11" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" x2="8" y1="16" y2="16" />
      <line x1="16" x2="16" y1="16" y2="16" />
    </svg>
  )
}
