import Link from "next/link"
import { ChevronRight } from "lucide-react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import AgenticServiceCard from "./components/agentic-service-card"
import AgenticHero from "./components/agentic-hero"
import ClientsSection from "./components/clients-section"
import ProcessSection from "./components/process-section"
import TestimonialsSection from "./components/testimonials-section"
import FaqSection from "./components/faq-section"
import EnhancedBackground from "@/components/enhanced-background"
import ResponsiveContainer from "@/components/responsive-container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agentic Search Services | Neural Command",
  description:
    "Cutting-edge AI-powered Agentic Search solutions for enterprise automation, research, business intelligence, and decision-making.",
  keywords:
    "agentic search, AI research assistants, enterprise AI search, market intelligence, AI customer support, LLM consulting",
}

export default function AgenticSearchServicesPage() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-[#070914]">
      <EnhancedBackground variant="blue" density="high" />

      <div className="relative overflow-hidden">
        <AgenticHero />

        <ResponsiveContainer className="py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">OUR AGENTIC SEARCH SERVICES</h2>
                <p className="text-xl text-gray-300">
                  Leverage the power of autonomous AI agents to transform how your business discovers, analyzes, and
                  utilizes information.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {agenticServices.map((service, index) => (
                <RevealOnScroll key={index} delay={index * 75} direction={index % 2 === 0 ? "left" : "right"}>
                  <AgenticServiceCard
                    id={`service-${index}`}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                    offerings={service.offerings}
                    pricing={service.pricing}
                  />
                </RevealOnScroll>
              ))}
            </div>

            <ClientsSection />
            <ProcessSection />
            <TestimonialsSection />
            <FaqSection />

            <RevealOnScroll>
              <div className="bg-[#0a1029]/50 border border-indigo-500/30 p-8 rounded-lg shadow-lg mb-16">
                <h2 className="text-2xl font-bold mb-4 text-white">READY TO HARNESS THE POWER OF AGENTIC SEARCH?</h2>
                <p className="text-gray-300 mb-6">
                  Take the first step towards transforming how your organization discovers, analyzes, and utilizes
                  information with our advanced Agentic Search solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all"
                >
                  CONTACT US <ChevronRight className="ml-2 w-4 h-4 text-white" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const agenticServices = [
  {
    title: "AI-Powered Research & Data Retrieval",
    icon: "📊",
    description: "Build AI-driven autonomous research assistants that retrieve, analyze, and synthesize complex data.",
    offerings: [
      "AI Research Assistants – Automate data collection from multiple sources, summarizing insights in real-time",
      "Legal & Financial AI Search Tools – Automate contract analysis, due diligence, and financial reporting",
      "Academic Research AI – LLMs that synthesize academic papers, helping researchers and institutions like Notre Dame",
    ],
    pricing: [
      "Custom AI research assistant development ($10k - $50k per project)",
      "SaaS-based subscription for AI-powered research dashboards",
    ],
  },
  {
    title: "Enterprise AI-Powered Search & Knowledge Management",
    icon: "🏢",
    description: "Help businesses organize, retrieve, and make sense of vast internal data with AI-powered search.",
    offerings: [
      "LLM-Enhanced Internal Search Systems – AI-powered document and database search",
      "AI Compliance & Risk Monitoring – Automate compliance checks across regulations and internal documents",
      "Smart Enterprise Knowledge Bases – AI-powered company-wide search engines for instant information retrieval",
    ],
    pricing: [
      "Custom AI search system integration ($20k - $100k per project)",
      "AI-powered enterprise search SaaS model",
    ],
  },
  {
    title: "Automated Market & Competitive Intelligence",
    icon: "📈",
    description: "Build AI-driven market intelligence tools that track competitors, trends, and industry shifts.",
    offerings: [
      "Real-Time Competitive Monitoring AI – AI agents track pricing, trends, and competitor activity",
      "AI-Powered News & Social Sentiment Analysis – Automatically extract market insights from news and social media",
      "Predictive AI Market Analysis – Use AI to predict business trends based on historical data",
    ],
    pricing: [
      "Custom AI tracking system setup ($10k - $50k per client)",
      "Subscription-based market intelligence dashboards",
    ],
  },
  {
    title: "AI-Powered Personalized Search Engines",
    icon: "🔍",
    description: "Develop custom AI search engines that offer tailored results based on user behavior.",
    offerings: [
      "LLM-Powered Personalized Search – AI adjusts search rankings based on user intent",
      "E-commerce AI Search Optimization – AI-driven product search that improves conversions",
      "AI Recommendation Engines – Deliver smarter search suggestions with personalized ranking models",
    ],
    pricing: [
      "AI search engine development ($25k - $100k per client)",
      "Performance-based pricing (% of increased sales from AI search improvements)",
    ],
  },
  {
    title: "Agentic AI for Automated Customer Support",
    icon: "💬",
    description:
      "Implement AI-powered autonomous customer service agents that understand and execute multi-step requests.",
    offerings: [
      "AI Chatbots with Agentic Search – Intelligent bots that retrieve documents, schedule tasks, and solve problems",
      "AI-Powered Helpdesk Automation – AI agents search knowledge bases to provide human-like answers",
      "Voice-Enabled AI Assistants – Custom-built AI voice search solutions for businesses",
    ],
    pricing: ["AI chatbot development ($10k - $50k per bot)", "AI-powered customer support SaaS"],
  },
  {
    title: "AI Search for Smart Cities & Government",
    icon: "🏙️",
    description:
      "Help local governments use AI for searchable public data, crime monitoring, and infrastructure optimization.",
    offerings: [
      "AI-Powered Crime Prediction & Reporting Tools",
      "Government Data Retrieval Systems – AI-enhanced open data platforms",
      "AI for Smart City Traffic Optimization",
    ],
    pricing: [
      "Government contracts ($50k - $250k per AI implementation)",
      "Subscription-based AI-powered public data tools",
    ],
  },
  {
    title: "LLM-Based Agentic AI Consulting & Development",
    icon: "🤖",
    description:
      "Provide custom-built AI agent development and consulting for organizations integrating Agentic Search.",
    offerings: [
      "Custom Agentic AI Model Development",
      "AI-Powered Multi-Step Search & Reasoning Systems",
      "Fine-Tuning LLMs for Specific Business Needs",
    ],
    pricing: [
      "Custom AI agent development ($50k - $200k per project)",
      "AI consulting retainers ($5k - $15k per month)",
    ],
  },
  {
    title: "Healthcare AI Search & Analysis",
    icon: "🏥",
    description:
      "Specialized AI search solutions for healthcare providers to improve patient care and operational efficiency.",
    offerings: [
      "Medical Research AI Assistants – Synthesize clinical studies and medical literature",
      "Patient Data Analysis – AI-powered search across patient records for improved diagnosis",
      "Healthcare Compliance Monitoring – Automated regulatory compliance checking",
    ],
    pricing: [
      "Healthcare AI implementation ($75k - $200k per solution)",
      "Subscription model for ongoing AI healthcare tools",
    ],
  },
  {
    title: "Manufacturing & Supply Chain AI Search",
    icon: "🏭",
    description:
      "AI-powered search and analysis tools for optimizing manufacturing processes and supply chain operations.",
    offerings: [
      "Predictive Maintenance AI – Search and analyze equipment data to predict failures",
      "Supply Chain Optimization – AI agents that search for inefficiencies and suggest improvements",
      "Quality Control AI – Automated inspection and defect detection systems",
    ],
    pricing: [
      "Manufacturing AI implementation ($50k - $150k)",
      "Performance-based pricing tied to efficiency improvements",
    ],
  },
]
