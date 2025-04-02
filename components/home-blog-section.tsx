import Link from "next/link"
import { ArrowRight } from "lucide-react"
import NetworkAnimation from "@/components/network-animation"
import RevealOnScroll from "@/components/reveal-on-scroll"

export default function HomeBlogSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
      {blogPosts.map((post, index) => (
        <RevealOnScroll key={index} delay={index * 0.1}>
          <div className="card-gradient border border-indigo-500/20 rounded-lg overflow-hidden h-full hover-glow-blue transition-all duration-300">
            <div className="h-48 relative overflow-hidden">
              <div className="absolute inset-0">
                <NetworkAnimation dense={index % 2 === 0} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/30"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-indigo-400 mb-2">{post.date}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-indigo-300 hover:text-indigo-200 flex items-center">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  )
}

const blogPosts = [
  {
    title: "Predictive Analytics in Supply Chain Management",
    slug: "predictive-analytics-supply-chain-management",
    date: "March 10, 2024",
    excerpt:
      "Discover how our neural network-powered predictive analytics solutions are helping businesses reduce costs and improve efficiency in their supply chain operations.",
  },
  {
    title: "AI Security Protocols in Financial Services",
    slug: "ai-security-protocols-financial-services-case-study",
    date: "February 28, 2024",
    excerpt:
      "Learn how a leading financial institution leveraged our neural security systems to detect and prevent sophisticated fraud attempts in real-time.",
  },
  {
    title: "Neural Networks in Healthcare Diagnostics",
    slug: "neural-networks-healthcare-diagnostics-future",
    date: "February 15, 2024",
    excerpt:
      "Explore how advanced neural architectures are transforming medical diagnostics, improving accuracy, and enabling early detection of conditions.",
  },
]

