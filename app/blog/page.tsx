import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Neural Command",
  description:
    "Explore the latest insights on AI, machine learning, and neural networks from Neural Command's expert team.",
  openGraph: {
    title: "Blog | Neural Command",
    description:
      "Explore the latest insights on AI, machine learning, and neural networks from Neural Command's expert team.",
    url: "https://dominatethe.world/blog",
    siteName: "Neural Command",
    images: [
      {
        url: "https://dominatethe.world/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function BlogPage() {
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Predictive Analytics in Supply Chain Management",
      slug: "predictive-analytics-supply-chain-management",
      excerpt:
        "How AI-driven predictive analytics is revolutionizing supply chain efficiency and reducing operational costs.",
      date: "April 15, 2023",
      category: "AI Applications",
    },
    {
      id: 2,
      title: "AI Security Protocols in Financial Services: A Case Study",
      slug: "ai-security-protocols-financial-services-case-study",
      excerpt:
        "An in-depth look at how financial institutions are implementing AI-enhanced security measures to protect sensitive data.",
      date: "May 22, 2023",
      category: "Security",
    },
    {
      id: 3,
      title: "Neural Networks in Healthcare Diagnostics: The Future is Now",
      slug: "neural-networks-healthcare-diagnostics-future",
      excerpt: "Exploring how neural networks are transforming medical diagnostics and improving patient outcomes.",
      date: "June 10, 2023",
      category: "Healthcare",
    },
    {
      id: 4,
      title: "Agentic Search: Revolutionizing Business Efficiency",
      slug: "agentic-search-revolutionizing-business-efficiency",
      excerpt: "Discover how agentic search technology is transforming how businesses find and utilize information.",
      date: "July 5, 2023",
      category: "Agentic AI",
    },
    {
      id: 5,
      title: "Indiana AI Innovation Fund for Local Businesses",
      slug: "indiana-ai-innovation-fund-local-businesses",
      excerpt: "Learn about the new AI innovation fund helping Indiana businesses implement cutting-edge AI solutions.",
      date: "August 12, 2023",
      category: "Regional News",
    },
    {
      id: 6,
      title: "South Bend Manufacturers Gain Competitive Advantage with AI",
      slug: "south-bend-manufacturers-ai-competitive-advantage",
      excerpt: "How South Bend manufacturing companies are leveraging AI to stay ahead in a competitive market.",
      date: "September 3, 2023",
      category: "Manufacturing",
    },
    {
      id: 7,
      title: "Indiana's AI Workforce Development Strategy",
      slug: "indiana-ai-workforce-development-strategy",
      excerpt: "An overview of Indiana's comprehensive strategy to develop an AI-ready workforce for the future.",
      date: "October 18, 2023",
      category: "Education",
    },
    {
      id: 8,
      title: "Implementing AI into Health Systems",
      slug: "implementing-ai-into-health-systems",
      excerpt: "A comprehensive guide to integrating AI solutions into existing healthcare infrastructure.",
      date: "November 7, 2023",
      category: "Healthcare",
    },
    {
      id: 9,
      title: "AI-Powered Patient Intake and EHR Integration",
      slug: "ai-patient-intake-ehr-integration",
      excerpt:
        "How AI is streamlining patient intake processes and seamlessly integrating with electronic health records.",
      date: "December 15, 2023",
      category: "Healthcare",
    },
    {
      id: 10,
      title: "Enhancing Patient Experience with AI Onboarding",
      slug: "ai-patient-experience-onboarding",
      excerpt: "Strategies for using AI to improve patient onboarding and overall healthcare experience.",
      date: "January 22, 2024",
      category: "Healthcare",
    },
    {
      id: 11,
      title: "Exoticz AI-Enhanced Shopping Platform",
      slug: "exoticz-ai-enhanced-shopping-platform",
      excerpt: "Technical analysis of the sophisticated AI-enhanced shopping experience implemented by Exoticz.",
      date: "March 30, 2024",
      category: "E-commerce",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050813] to-[#0B1026]">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              Neural Command Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, research, and perspectives on artificial intelligence, neural networks, and the future of
            technology.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <div className="bg-[#0A0F1F] border border-indigo-900/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-indigo-400 mb-2">
                      {post.category} • {post.date}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with Our Newsletter</h2>
              <p className="text-gray-300 mb-8">
                Subscribe to receive the latest insights on AI, neural networks, and technological advancements directly
                to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-[#0A0F1F] border border-indigo-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
