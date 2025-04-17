import Link from "next/link"
import { ChevronRight } from "lucide-react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import NetworkAnimation from "@/components/network-animation"

export default function IndianaBlogSection() {
  return (
    <div className="mb-16">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
          LATEST INSIGHTS ON INDIANA AI INITIATIVES
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
          Stay updated with our latest articles, case studies, and insights on AI developments in Indiana and how
          they're shaping the future of business and government in the Hoosier State.
        </p>
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {indianaBlogPosts.map((post, index) => (
          <RevealOnScroll key={index} delay={150 + index * 75} direction="up">
            <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg shadow-lg h-full flex flex-col hover-glow">
              <div className="h-40 card-gradient border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg overflow-hidden relative mb-4">
                <div className="absolute inset-0">
                  <NetworkAnimation dense={index % 2 === 0} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/40"></div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-blue-600/60 dark:text-blue-400/60 mb-2">
                {post.date} • {post.category}
              </div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white">{post.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-grow">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-auto"
              >
                READ MORE <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={400}>
        <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-8 rounded-lg shadow-lg glow-border">
          <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">EXPLORE MORE INSIGHTS</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Visit our blog for more articles, case studies, and insights on artificial intelligence, neural networks,
            and how they're transforming businesses and communities across Indiana and beyond.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-md hover:opacity-90 transition-all shadow-md shadow-blue-500/10"
          >
            VIEW ALL BLOG POSTS <ChevronRight className="ml-2 w-4 h-4 text-white" />
          </Link>
        </div>
      </RevealOnScroll>
    </div>
  )
}

const indianaBlogPosts = [
  {
    title: "Agentic Search: Revolutionizing Business Efficiency in South Bend",
    slug: "agentic-search-revolutionizing-business-efficiency",
    date: "March 17, 2025",
    category: "Technology Insight",
    excerpt:
      "Discover how Agentic Search and autonomous AI agents are transforming how South Bend businesses retrieve information, make decisions, and automate complex tasks.",
  },
  {
    title: "Indiana's $15M AI Innovation Fund: What It Means for Local Businesses",
    slug: "indiana-ai-innovation-fund-local-businesses",
    date: "March 15, 2024",
    category: "Government Initiative",
    excerpt:
      "An analysis of Indiana's new $15 million AI Innovation Fund and how local businesses can leverage this opportunity to accelerate their AI adoption and innovation efforts.",
  },
  {
    title: "Case Study: How South Bend Manufacturers Are Leveraging AI for Competitive Advantage",
    slug: "south-bend-manufacturers-ai-competitive-advantage",
    date: "February 28, 2024",
    category: "Case Study",
    excerpt:
      "Discover how traditional manufacturing companies in South Bend are implementing neural network solutions to optimize operations and gain a competitive edge in global markets.",
  },
]
