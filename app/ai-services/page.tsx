import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, BarChart, Bot, Zap, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AIServicesPage() {
  const aiServices = [
    {
      id: "neural-seo",
      title: "Neural SEO",
      description: "AI-powered content optimization that adapts to algorithm changes",
      icon: Brain,
      stats: "+280% Traffic Growth",
      link: "/ai-services/neural-seo",
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      description: "Forecast market trends and customer behavior with machine learning",
      icon: TrendingUp,
      stats: "93% Prediction Accuracy",
      link: "/ai-services/predictive-analytics",
    },
    {
      id: "autonomous-agents",
      title: "Autonomous Agents",
      description: "Marketing agents that optimize campaigns in real-time",
      icon: Bot,
      stats: "24/7 Optimization",
      link: "/ai-services/autonomous-agents",
    },
    {
      id: "content-generation",
      title: "AI Content Generation",
      description: "Create engaging, SEO-optimized content at scale",
      icon: Zap,
      stats: "890% More Shares",
      link: "/ai-services/content-generation",
    },
    {
      id: "competitive-analysis",
      title: "AI Competitive Analysis",
      description: "Uncover competitor strategies and market opportunities",
      icon: BarChart,
      stats: "12x Faster Insights",
      link: "/ai-services/competitive-analysis",
    },
    {
      id: "security-protocols",
      title: "AI Security Protocols",
      description: "Protect your data and systems with advanced AI security",
      icon: Shield,
      stats: "99.8% Threat Detection",
      link: "/ai-services/security-protocols",
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                AI-Driven <span className="envato-gradient">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to transform your business, optimize operations, and drive
                unprecedented growth.
              </p>
              <Link href="#services" className="envato-button inline-flex items-center">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">450%</div>
                <p className="text-gray-600">Engagement Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">12x</div>
                <p className="text-gray-600">ROI on AI Investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how our AI-powered solutions can help your business achieve unprecedented growth and
                efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[rgb(var(--envato-green))] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[rgb(var(--envato-green))]">{service.stats}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[rgb(var(--envato-green))] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Implementation Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful AI integration and maximum ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Discovery</h3>
                <p className="text-gray-600">Analyze your business needs and identify AI opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Strategy</h3>
                <p className="text-gray-600">Develop a customized AI implementation roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Implementation</h3>
                <p className="text-gray-600">Deploy AI solutions with minimal disruption</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Optimization</h3>
                <p className="text-gray-600">Continuously improve performance and ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[rgb(var(--envato-green))]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Ready to transform your business with AI?</h2>
                <p className="text-white text-opacity-90">Let's build intelligent systems that drive real results.</p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
