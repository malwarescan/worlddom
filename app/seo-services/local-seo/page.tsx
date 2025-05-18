import Link from "next/link"
import { ArrowRight, ArrowLeft, MapPin, Star, Store, Users, BarChart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Local SEO Services | Dominate Local Search Results | Neural Command",
  description:
    "Boost your local business visibility with our AI-powered Local SEO services. Rank higher in Google Maps, attract nearby customers, and outperform local competitors.",
  keywords:
    "local SEO, Google Maps optimization, local search, business listings, local rankings, Google Business Profile",
}

export default function LocalSEOPage() {
  const benefits = [
    {
      title: "Increased Local Visibility",
      description:
        "Appear prominently in local search results and Google Maps when nearby customers search for your products or services.",
      icon: MapPin,
    },
    {
      title: "Higher Quality Leads",
      description: "Attract customers who are actively searching for businesses like yours in your specific area.",
      icon: Users,
    },
    {
      title: "Improved Reputation",
      description: "Build trust with potential customers through positive reviews and consistent online information.",
      icon: Star,
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from local competitors with optimized listings and targeted local content.",
      icon: Trophy,
    },
  ]

  const services = [
    {
      title: "Google Business Profile Optimization",
      description:
        "Complete optimization of your Google Business Profile to improve visibility in local search and Google Maps.",
      icon: Store,
    },
    {
      title: "Local Citation Building",
      description:
        "Creation and management of consistent business listings across directories, review sites, and data aggregators.",
      icon: List,
    },
    {
      title: "Review Management",
      description:
        "Strategic approach to generating, monitoring, and responding to customer reviews across multiple platforms.",
      icon: MessageSquare,
    },
    {
      title: "Local Content Strategy",
      description:
        "Development of location-specific content that resonates with your local audience and improves relevance.",
      icon: FileText,
    },
    {
      title: "Local Link Building",
      description:
        "Acquisition of high-quality backlinks from relevant local businesses, organizations, and publications.",
      icon: Link2,
    },
    {
      title: "Local SEO Analytics",
      description: "Comprehensive tracking and reporting on local search performance, customer behavior, and ROI.",
      icon: BarChart,
    },
  ]

  const faqs = [
    {
      question: "What is Local SEO?",
      answer:
        "Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. These searches take place on Google and other search engines, with a specific geographic component such as city, neighborhood, or 'near me' searches. Local SEO focuses on improving visibility in Google Maps, local pack results, and organic search results for location-based queries.",
    },
    {
      question: "How is Local SEO different from regular SEO?",
      answer:
        "While traditional SEO focuses on improving visibility nationally or globally, Local SEO specifically targets searches with local intent. Local SEO emphasizes factors like Google Business Profile optimization, local citations, reviews, and location-specific content. It's particularly important for businesses with physical locations or those serving specific geographic areas.",
    },
    {
      question: "How long does it take to see results from Local SEO?",
      answer:
        "Most businesses begin to see improvements in local search visibility within 30-60 days of implementing Local SEO strategies. However, significant results typically take 3-6 months, depending on your location, industry competitiveness, and starting point. Our AI-powered approach often accelerates results compared to traditional methods.",
    },
    {
      question: "Do I need Local SEO if I already rank well organically?",
      answer:
        "Yes! Even if you rank well in organic search results, Local SEO targets a different aspect of search visibility. Local pack results and Google Maps listings often appear above organic results for location-based searches, capturing a significant portion of clicks. Without Local SEO, you're missing out on valuable local traffic, even with strong organic rankings.",
    },
    {
      question: "How do you measure Local SEO success?",
      answer:
        "We track comprehensive metrics including Google Business Profile insights, local pack rankings, website traffic from local searches, phone calls, direction requests, local keyword rankings, review quantity and quality, and ultimately, conversions from local search. Our dashboard provides transparent reporting on all key performance indicators.",
    },
    {
      question: "Is Local SEO important for e-commerce businesses?",
      answer:
        "Yes, Local SEO is valuable even for e-commerce businesses, especially those with physical locations or those targeting specific geographic markets. Local SEO can help drive foot traffic to physical stores, improve regional brand awareness, and increase online sales from local customers who prefer to shop from nearby businesses.",
    },
  ]

  const caseStudies = [
    {
      business: "Family Dental Practice",
      location: "Chicago, IL",
      result: "187% increase in appointment bookings",
      description:
        "Implemented comprehensive Local SEO strategy including Google Business Profile optimization, review management, and local content creation, resulting in top 3 rankings for key local dental search terms.",
    },
    {
      business: "Boutique Fitness Studio",
      location: "Austin, TX",
      result: "215% growth in class registrations",
      description:
        "Developed location-specific landing pages, optimized local citations, and implemented a review generation strategy that boosted visibility in local fitness searches.",
    },
    {
      business: "Independent Hardware Store",
      location: "Portland, OR",
      result: "163% increase in store visits",
      description:
        "Optimized Google Business Profile with product inventory, created neighborhood-specific content, and built local backlinks that significantly improved visibility against big-box competitors.",
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
                  Local SEO: <span className="envato-gradient">Dominate Your Local Market</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Attract more nearby customers with our AI-enhanced Local SEO services. We help your business stand out
                  in Google Maps and local search results, driving foot traffic and local leads to your business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#services" className="envato-button inline-flex items-center">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Get a Free Local SEO Audit
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl animate-float"></div>
                  <div className="relative z-10 w-full h-full rounded-2xl bg-[rgb(var(--envato-dark))] border border-gray-800 flex items-center justify-center p-8">
                    <MapPin className="w-32 h-32 text-[rgb(var(--envato-green))]" />
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
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">46%</div>
                <p className="text-gray-600">Of All Google Searches Have Local Intent</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">88%</div>
                <p className="text-gray-600">Of Local Searches Visit or Call Within 24 Hours</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">78%</div>
                <p className="text-gray-600">Of Local Mobile Searches Result in Offline Purchases</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Local SEO Matters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                In today's mobile-first world, local search is more important than ever for businesses with physical
                locations or service areas.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Local SEO Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive local search optimization solutions to help your business stand out in your community.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Local SEO Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how our Local SEO strategies have helped businesses across different industries and locations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-1">{study.business}</h3>
                  <p className="text-gray-600 mb-3">{study.location}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Local SEO Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure maximum local visibility for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Local Audit</h3>
                <p className="text-gray-600">
                  We analyze your local presence, competitors, and identify opportunities for improvement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Local Strategy</h3>
                <p className="text-gray-600">
                  We develop a customized Local SEO plan tailored to your specific location and industry.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Implementation</h3>
                <p className="text-gray-600">
                  Our team executes the strategy, optimizing your local presence across all relevant platforms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Ongoing Optimization</h3>
                <p className="text-gray-600">
                  We continuously monitor performance and refine your strategy to maximize local visibility.
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
                Get answers to common questions about our Local SEO services.
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
                <h2 className="text-3xl font-bold text-white mb-2">Ready to dominate local search?</h2>
                <p className="text-white text-opacity-90">
                  Get a free Local SEO audit and discover how we can help your business stand out in your community.
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Get Your Free Local SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
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
              name: "Local SEO Services",
              provider: {
                "@type": "Organization",
                name: "Neural Command",
                url: "https://neuralcommand.com",
              },
              description:
                "AI-powered local search engine optimization services that help businesses dominate local search results.",
              serviceType: "Local Search Engine Optimization",
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
                  description: "Free Local SEO Audit",
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

function List(props: any) {
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
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}

function MessageSquare(props: any) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function FileText(props: any) {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function Link2(props: any) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
