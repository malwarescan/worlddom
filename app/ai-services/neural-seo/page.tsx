import Link from "next/link"
import { ArrowRight, ArrowLeft, Check, Brain, TrendingUp, Bot } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NeuralSEOPage() {
  const features = [
    "AI-powered content optimization that adapts to algorithm changes",
    "Predictive modeling for identifying high-potential keywords",
    "Autonomous marketing agents that optimize in real-time",
    "Natural language processing for semantic content analysis",
    "Competitor analysis and gap identification",
    "Automated content generation and optimization",
  ]

  const caseStudies = [
    {
      company: "E-commerce Retailer",
      result: "312% increase in organic traffic within 6 months",
      description:
        "Implemented neural SEO architecture to optimize product descriptions and category pages, resulting in significant traffic growth and revenue increase.",
    },
    {
      company: "SaaS Platform",
      result: "247% more qualified leads from organic search",
      description:
        "Deployed AI-driven content strategy targeting high-intent keywords, dramatically improving lead quality and conversion rates.",
    },
    {
      company: "Healthcare Provider",
      result: "185% growth in patient inquiries",
      description:
        "Utilized neural SEO to optimize medical content for both search engines and patient understanding, increasing visibility and trust.",
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
                  href="/ai-services"
                  className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to AI Services
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  Neural SEO: <span className="envato-gradient">Beyond Traditional Optimization</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Traditional SEO is being revolutionized by AI. Our neural SEO architecture combines machine learning
                  with content optimization to drive unprecedented organic growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#case-studies" className="envato-button inline-flex items-center">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Get a Free Audit
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl animate-float"></div>
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

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our neural SEO approach leverages cutting-edge AI to deliver results that traditional SEO cannot match.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center">
                      <Check className="h-4 w-4 text-[rgb(var(--envato-green))]" />
                    </div>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Neural SEO Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our proprietary approach combines multiple AI technologies to create a comprehensive SEO solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI Content Analysis</h3>
                <p className="text-gray-600">
                  Our neural networks analyze millions of search results to identify patterns and predict algorithm
                  changes before they impact your rankings.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Predictive Modeling</h3>
                <p className="text-gray-600">
                  Advanced machine learning models forecast keyword trends and identify high-potential opportunities
                  before your competitors.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Autonomous Agents</h3>
                <p className="text-gray-600">
                  AI-powered agents continuously monitor your site's performance and make real-time optimizations to
                  maximize results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how our neural SEO approach has transformed businesses across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                  <p className="text-[rgb(var(--envato-green))] font-medium mb-4">{study.result}</p>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[rgb(var(--envato-green))]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Ready to revolutionize your SEO strategy?</h2>
                <p className="text-white text-opacity-90">
                  Get a free SEO audit and discover how neural SEO can transform your organic traffic.
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
