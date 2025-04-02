import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import ResponsiveContainer from "@/components/responsive-container"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Enterprise AI & Neural Network Services | Neural Command",
  description:
    "Comprehensive AI services including custom neural network solutions, machine learning implementation, predictive analytics, and AI strategy consulting for businesses of all sizes.",
  keywords:
    "AI services, neural network implementation, machine learning consulting, predictive analytics, enterprise AI solutions, custom AI development, Neural Command",
  openGraph: {
    title: "Enterprise AI & Neural Network Services | Neural Command",
    description: "Transform your business with our comprehensive AI and neural network services.",
    images: [
      {
        url: "https://dominatethe.world/api/og?title=Neural%20Command%20Services",
        width: 1200,
        height: 630,
        alt: "Neural Command Services",
      },
    ],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070914]">
      <ResponsiveContainer maxWidth="xl" className="py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">OUR SERVICES</h1>
            <p className="text-xl text-gray-300">Cutting-edge AI solutions designed to transform your business</p>
          </div>

          <div className="bg-[#0a1029]/50 border border-indigo-500/30 p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-4 text-white">FEATURED: AGENTIC SEARCH SERVICES</h2>
            <p className="text-gray-300 mb-6">
              Discover our cutting-edge Agentic Search solutions that help enterprises automate research, enhance
              knowledge management, and deliver intelligent insights through autonomous AI agents.
            </p>
            <Link
              href="/agentic-search-services"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all"
            >
              EXPLORE AGENTIC SEARCH <ChevronRight className="ml-2 w-4 h-4 text-white" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0a1029]/50 border border-indigo-500/20 p-6 rounded-lg shadow-lg h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-indigo-600/20 rounded-md mr-3">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="mt-auto space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#0a1029]/50 border border-indigo-500/20 p-6 rounded-lg shadow-lg h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-indigo-600/20 rounded-md mr-3">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="mt-auto space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">READY TO TRANSFORM YOUR BUSINESS WITH AI?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement cutting-edge AI solutions tailored to your specific
              needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all"
            >
              CONTACT US <ChevronRight className="ml-2 w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </ResponsiveContainer>
      <section className="py-16 bg-gradient-to-b from-transparent to-[#0a0e1f]/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto p-8 bg-[#0c1225] rounded-xl border border-indigo-900/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Viontra</h2>
            <p className="text-lg text-gray-300 mb-8">
              Command your digital presence with our AI-powered platform. One interface to control your website, SEO,
              Google Business, ads, and CRM.
            </p>
            <a href="https://viontra.io" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-md text-base font-medium">
                Visit Viontra.io
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Custom AI Solutions",
    description: "Tailored AI applications designed to address your specific business challenges",
    icon: "🤖",
    features: [
      "Personalized AI development",
      "Integration with existing systems",
      "Scalable architecture",
      "Ongoing support and maintenance",
    ],
  },
  {
    title: "Machine Learning Implementation",
    description: "Harness the power of machine learning to extract insights from your data",
    icon: "🧠",
    features: ["Predictive analytics", "Pattern recognition", "Anomaly detection", "Automated decision-making"],
  },
  {
    title: "Natural Language Processing",
    description: "Enable your systems to understand and generate human language",
    icon: "💬",
    features: [
      "Text analysis and classification",
      "Sentiment analysis",
      "Chatbot development",
      "Automated content generation",
    ],
  },
  {
    title: "Computer Vision Solutions",
    description: "Give your systems the ability to interpret and understand visual information",
    icon: "👁️",
    features: ["Image recognition", "Object detection", "Facial recognition", "Visual inspection automation"],
  },
]

const additionalServices = [
  {
    title: "AI Strategy Consulting",
    description: "Develop a comprehensive AI roadmap aligned with your business objectives",
    icon: "📊",
    features: ["AI readiness assessment", "Technology selection", "Implementation planning", "ROI analysis"],
  },
  {
    title: "Data Analytics & Visualization",
    description: "Transform raw data into actionable insights through advanced analytics",
    icon: "📈",
    features: ["Data preprocessing", "Statistical analysis", "Interactive dashboards", "Automated reporting"],
  },
  {
    title: "AI-Powered Website Optimization",
    description: "Enhance your website's performance and user experience with AI",
    icon: "🌐",
    features: [
      "Automated A/B testing",
      "Personalized content delivery",
      "User behavior analysis",
      "Conversion rate optimization",
    ],
  },
  {
    title: "Intelligent Automation",
    description: "Streamline your business processes with intelligent automation solutions",
    icon: "⚙️",
    features: ["Workflow automation", "Document processing", "Intelligent form filling", "Process optimization"],
  },
  {
    title: "AI-Enhanced Customer Experience",
    description: "Create personalized and engaging customer experiences with AI",
    icon: "👥",
    features: [
      "Customer journey mapping",
      "Personalized recommendations",
      "Intelligent customer support",
      "Sentiment analysis",
    ],
  },
  {
    title: "Predictive Maintenance",
    description: "Anticipate equipment failures and optimize maintenance schedules",
    icon: "🔧",
    features: [
      "Failure prediction models",
      "Maintenance scheduling optimization",
      "Real-time monitoring",
      "Cost reduction analysis",
    ],
  },
  {
    title: "AI for Healthcare",
    description: "Leverage AI to improve patient outcomes and healthcare operations",
    icon: "🏥",
    features: [
      "Diagnostic assistance",
      "Treatment recommendation",
      "Patient monitoring",
      "Healthcare operations optimization",
    ],
  },
  {
    title: "AI for Manufacturing",
    description: "Optimize manufacturing processes and quality control with AI",
    icon: "🏭",
    features: ["Quality control automation", "Production optimization", "Supply chain management", "Defect detection"],
  },
]

