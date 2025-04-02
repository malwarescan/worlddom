import Link from "next/link"
import { ChevronRight } from "lucide-react"
import NetworkAnimation from "@/components/network-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Insights & Industry Expertise | Neural Command Blog",
  description:
    "Explore the latest insights on neural networks, AI implementation strategies, and industry-specific applications from Neural Command's team of AI experts.",
  keywords:
    "AI blog, neural network insights, artificial intelligence trends, business AI applications, machine learning expertise, Neural Command",
  openGraph: {
    title: "AI Insights & Industry Expertise | Neural Command Blog",
    description:
      "Explore the latest insights on neural networks, AI implementation strategies, and industry-specific applications.",
    images: [
      {
        url: "https://dominatethe.world/api/og?title=Neural%20Command%20Blog",
        width: 1200,
        height: 630,
        alt: "Neural Command Blog",
      },
    ],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <div className="relative overflow-hidden">
        {/* Neural Network Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <NetworkAnimation />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">INSIGHTS & USE CASES</h1>

            <p className="text-xl text-neutral-300 mb-12">
              Explore our latest insights, use cases, and innovations in artificial intelligence and neural networks.
            </p>

            <div className="grid gap-8 mb-16">
              {/* New Healthcare AI Blog Posts */}
              <div className="card-gradient border border-neutral-800 p-6 rounded-lg shadow-lg hover:border-blue-700 transition-colors bg-neutral-900/50">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 h-48 card-gradient border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0">
                      <NetworkAnimation dense={true} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-purple-500/30"></div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-sm text-blue-400/80 mb-2">March 27, 2025</div>
                    <h2 className="text-2xl font-bold mb-3 text-white">
                      How Health Systems Are Using AI to Automate Patient Intake Without Disrupting EHRs
                    </h2>
                    <p className="text-neutral-300 mb-4">
                      Discover how health systems use intelligent onboarding to automate intake and reduce admin
                      workload — without replacing your EHR.
                    </p>
                    <Link
                      href="/blog/ai-patient-intake-ehr-integration"
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      READ MORE <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card-gradient border border-neutral-800 p-6 rounded-lg shadow-lg hover:border-blue-700 transition-colors bg-neutral-900/50">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 h-48 card-gradient border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0">
                      <NetworkAnimation dense={false} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-purple-500/30"></div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-sm text-blue-400/80 mb-2">March 27, 2025</div>
                    <h2 className="text-2xl font-bold mb-3 text-white">
                      Redesigning the Digital Front Door: AI-Powered Patient Onboarding That Works
                    </h2>
                    <p className="text-neutral-300 mb-4">
                      Improve your digital front door with AI-powered patient onboarding. Reduce no-shows, automate
                      engagement, and personalize care.
                    </p>
                    <Link
                      href="/blog/ai-patient-experience-onboarding"
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      READ MORE <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Existing Healthcare AI Blog Post */}
              <div className="card-gradient border border-neutral-800 p-6 rounded-lg shadow-lg hover:border-blue-700 transition-colors bg-neutral-900/50">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 h-48 card-gradient border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0">
                      <NetworkAnimation dense={true} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-purple-500/30"></div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-sm text-blue-400/80 mb-2">March 31, 2024</div>
                    <h2 className="text-2xl font-bold mb-3 text-white">
                      Implementing AI Into Health Systems: How Artificial Intelligence Is Transforming Modern Healthcare
                    </h2>
                    <p className="text-neutral-300 mb-4">
                      Discover how AI is transforming modern health systems — from intelligent patient onboarding to
                      predictive analytics. Learn how to implement AI in healthcare today.
                    </p>
                    <Link
                      href="/blog/implementing-ai-into-health-systems"
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      READ MORE <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="card-gradient border border-neutral-800 p-6 rounded-lg shadow-lg hover:border-blue-700 transition-colors bg-neutral-900/50"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 h-48 card-gradient border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg overflow-hidden relative">
                      <div className="absolute inset-0">
                        <NetworkAnimation dense={index % 2 === 0} />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-purple-500/30"></div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="text-sm text-blue-400/80 mb-2">{post.date}</div>
                      <h2 className="text-2xl font-bold mb-3 text-white">{post.title}</h2>
                      <p className="text-neutral-300 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        READ MORE <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-gradient border border-neutral-800 p-8 rounded-lg shadow-lg bg-neutral-900/50">
              <h2 className="text-2xl font-bold mb-4 text-white">SUBSCRIBE TO OUR NEWSLETTER</h2>
              <p className="text-neutral-300 mb-6">
                Stay updated with the latest insights and innovations in neural network technology and AI applications.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-all shadow-md shadow-blue-500/10"
              >
                SUBSCRIBE NOW <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const blogPosts = [
  {
    title: "How Predictive Analytics is Revolutionizing Supply Chain Management",
    slug: "predictive-analytics-supply-chain-management",
    date: "March 10, 2024",
    excerpt:
      "Discover how our neural network-powered predictive analytics solutions are helping businesses reduce costs and improve efficiency in their supply chain operations.",
    category: "Use Case",
  },
  {
    title: "Implementing AI Security Protocols: A Case Study in Financial Services",
    slug: "ai-security-protocols-financial-services-case-study",
    date: "February 28, 2024",
    excerpt:
      "Learn how a leading financial institution leveraged our neural security systems to detect and prevent sophisticated fraud attempts in real-time.",
    category: "Case Study",
  },
  {
    title: "The Future of Neural Networks in Healthcare Diagnostics",
    slug: "neural-networks-healthcare-diagnostics-future",
    date: "February 15, 2024",
    excerpt:
      "Explore how advanced neural architectures are transforming medical diagnostics, improving accuracy, and enabling early detection of conditions.",
    category: "Insight",
  },
  {
    title: "Automating Quality Control in Manufacturing with Neural Networks",
    slug: "automating-quality-control-manufacturing-neural-networks",
    date: "January 30, 2024",
    excerpt:
      "See how our automation systems are helping manufacturers reduce defects, improve product quality, and optimize production processes.",
    category: "Use Case",
  },
  {
    title: "Building an Effective AI Strategy: Key Considerations for Business Leaders",
    slug: "effective-ai-strategy-business-leaders-guide",
    date: "January 15, 2024",
    excerpt:
      "Our AI consulting experts share essential considerations for business leaders looking to develop and implement a successful AI strategy.",
    category: "Guide",
  },
]

