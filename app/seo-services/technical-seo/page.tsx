import Link from "next/link"
import { ArrowRight, ArrowLeft, Settings, Zap, Shield, BarChart, Smartphone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical SEO Services | Website Performance Optimization | Neural Command",
  description:
    "Improve your website's technical foundation with our expert Technical SEO services. Boost page speed, fix crawlability issues, and enhance user experience.",
  keywords:
    "technical SEO, website performance, page speed optimization, crawlability, indexability, mobile optimization",
}

export default function TechnicalSEOPage() {
  const benefits = [
    {
      title: "Improved Crawlability",
      description: "Ensure search engines can efficiently discover and index all important pages on your website.",
      icon: Spider,
    },
    {
      title: "Faster Page Speed",
      description: "Accelerate your website's loading time for better user experience and higher rankings.",
      icon: Zap,
    },
    {
      title: "Enhanced Mobile Experience",
      description: "Optimize your site for mobile users, who now account for the majority of web traffic.",
      icon: Smartphone,
    },
    {
      title: "Stronger Security",
      description: "Implement proper security protocols that search engines reward with better rankings.",
      icon: Shield,
    },
  ]

  const services = [
    {
      title: "Technical SEO Audit",
      description:
        "Comprehensive analysis of your website's technical health, identifying issues that impact search performance.",
      icon: Search,
    },
    {
      title: "Site Architecture Optimization",
      description:
        "Restructuring your website's information architecture for optimal crawling and indexing efficiency.",
      icon: Layers,
    },
    {
      title: "Page Speed Optimization",
      description: "Implementing advanced techniques to reduce load times and improve Core Web Vitals metrics.",
      icon: Zap,
    },
    {
      title: "Schema Markup Implementation",
      description:
        "Adding structured data to help search engines better understand your content and display rich results.",
      icon: Code,
    },
    {
      title: "Mobile Optimization",
      description: "Ensuring your website provides an excellent experience across all devices, especially mobile.",
      icon: Smartphone,
    },
    {
      title: "Technical Monitoring",
      description:
        "Ongoing monitoring of technical health metrics to catch and fix issues before they impact rankings.",
      icon: BarChart,
    },
  ]

  const faqs = [
    {
      question: "What is Technical SEO?",
      answer:
        "Technical SEO refers to the optimization of your website's infrastructure to help search engines efficiently crawl, index, and render your pages. It focuses on improving the technical aspects of your website such as site speed, mobile-friendliness, indexability, crawlability, site architecture, structured data, and security protocols. Strong technical SEO creates the foundation that allows your content and link-building efforts to be fully effective.",
    },
    {
      question: "How does Technical SEO impact search rankings?",
      answer:
        "Technical SEO directly impacts how search engines access, interpret, and index your website. Poor technical SEO can prevent search engines from properly crawling your site, understanding your content, or delivering a good user experience—all of which can significantly harm your rankings. Google's algorithm increasingly emphasizes technical factors like page speed, mobile-friendliness, and secure connections (HTTPS) as ranking signals.",
    },
    {
      question: "How often should Technical SEO be performed?",
      answer:
        "Technical SEO isn't a one-time task but an ongoing process. A comprehensive technical audit should be conducted at least every 6-12 months, but continuous monitoring is essential. Websites constantly evolve with new content, design changes, and functionality updates—each potentially introducing technical issues. Our service includes regular audits and real-time monitoring to catch and address issues promptly.",
    },
    {
      question: "Can Technical SEO help with Core Web Vitals?",
      answer:
        "Core Web Vitals are a set of specific factors that Google considers important for user experience, including loading performance, interactivity, and visual stability. Our Technical SEO services directly address these metrics through specialized optimizations for Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS), helping your site meet or exceed Google's benchmarks.",
    },
    {
      question: "How is your Technical SEO approach different?",
      answer:
        "Our Technical SEO services combine traditional best practices with AI-powered analysis and automation. We use machine learning to identify patterns and issues that manual audits might miss, predict potential technical problems before they impact your site, and automate routine monitoring tasks. This approach delivers more comprehensive results and allows our experts to focus on strategic improvements rather than repetitive checks.",
    },
    {
      question: "Will Technical SEO improvements affect my website's design?",
      answer:
        "Most Technical SEO improvements happen \"behind the scenes\" and don't affect your website's visual design. However, some recommendations might involve adjustments to how certain elements load or display to improve performance. We always balance technical optimization with maintaining your brand identity and user experience, and any visible changes are implemented with your approval.",
    },
  ]

  const caseStudies = [
    {
      business: "E-commerce Platform",
      industry: "Retail",
      result: "143% increase in organic traffic",
      description:
        "Resolved critical crawling issues, implemented advanced schema markup, and optimized page speed, resulting in significantly improved visibility and conversion rates.",
    },
    {
      business: "Media Publication",
      industry: "News & Entertainment",
      result: "67% reduction in bounce rate",
      description:
        "Comprehensive Core Web Vitals optimization and mobile experience enhancement led to better user engagement metrics and higher ad revenue.",
    },
    {
      business: "SaaS Company",
      industry: "Technology",
      result: "94% increase in indexed pages",
      description:
        "Restructured site architecture and fixed indexation issues, dramatically increasing the number of pages receiving organic traffic and leads.",
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
                <Link
                  href="/seo-services"
                  className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to SEO Services
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  Technical SEO: <span className="envato-gradient">Building Strong Foundations</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Optimize your website's technical infrastructure to improve crawlability, indexability, and user
                  experience. Our Technical SEO services help search engines better understand and rank your content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#services" className="envato-button inline-flex items-center">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Get a Free Technical Audit
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl animate-float"></div>
                  <div className="relative z-10 w-full h-full rounded-2xl bg-[rgb(var(--envato-dark))] border border-gray-800 flex items-center justify-center p-8">
                    <Settings className="w-32 h-32 text-[rgb(var(--envato-green))]" />
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
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">47%</div>
                <p className="text-gray-600">Of Users Abandon Sites That Load in Over 3 Seconds</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">68%</div>
                <p className="text-gray-600">Of Top-Ranking Sites Use HTTPS</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">70%</div>
                <p className="text-gray-600">Of Sites Have Technical SEO Issues</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Technical SEO Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Technical SEO creates the foundation that allows your content and link-building efforts to reach their
                full potential.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technical SEO Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive technical optimization solutions to improve your website's search performance.
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

        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical SEO Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how our Technical SEO strategies have transformed website performance across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-1">{study.business}</h3>
                  <p className="text-gray-600 mb-3">{study.industry}</p>
                  <p className="text-[rgb(var(--envato-green))] font-medium mb-4">{study.result}</p>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technical SEO Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a systematic approach to identify and resolve technical issues affecting your search
                performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Technical Audit</h3>
                <p className="text-gray-600">
                  We conduct a comprehensive analysis of your website's technical health and infrastructure.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Issue Prioritization</h3>
                <p className="text-gray-600">
                  We identify and prioritize technical issues based on their impact on search performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Implementation</h3>
                <p className="text-gray-600">
                  Our team executes the necessary technical fixes and optimizations to resolve identified issues.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Monitoring & Maintenance</h3>
                <p className="text-gray-600">
                  We continuously monitor your site's technical health and address new issues as they arise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our Technical SEO services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
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
                <h2 className="text-3xl font-bold text-white mb-2">Ready to fix your technical SEO issues?</h2>
                <p className="text-white text-opacity-90">
                  Get a free Technical SEO audit and discover how we can improve your website's performance.
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Get Your Free Technical Audit <ArrowRight className="ml-2 h-4 w-4" />
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
              name: "Technical SEO Services",
              provider: {
                "@type": "Organization",
                name: "Neural Command",
                url: "https://neuralcommand.com",
              },
              description:
                "Technical SEO services that improve website crawlability, indexability, and performance for better search rankings.",
              serviceType: "Technical Search Engine Optimization",
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
                  description: "Free Technical SEO Audit",
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
function Spider(props: any) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7" />
    </svg>
  )
}

function Search(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function Layers(props: any) {
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function Code(props: any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
