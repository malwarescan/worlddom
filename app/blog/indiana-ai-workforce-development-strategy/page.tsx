import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import NetworkAnimation from "@/components/network-animation"
import { Button } from "@/components/ui/button"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indiana's AI Workforce Development Strategy | Neural Command",
  description:
    "An overview of Indiana's comprehensive strategy to develop AI talent through educational partnerships, training programs, and industry collaborations.",
  keywords:
    "Indiana AI workforce, AI talent development, tech skills training, Indiana workforce development, AI education, tech talent pipeline, Midwest AI talent",
}

export default function IndianaWorkforcePost() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white flex flex-col">
      <div className="relative overflow-hidden">
        {/* Neural Network Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <NetworkAnimation />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
            >
              <ChevronLeft className="mr-1 w-4 h-4" /> BACK TO ALL POSTS
            </Link>

            <div className="text-sm text-blue-600/60 dark:text-blue-400/60 mb-2">
              February 10, 2024 • Workforce Development
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
              Indiana's AI Workforce Development Strategy: Preparing for the Jobs of Tomorrow
            </h1>

            <div className="h-64 border border-blue-500/30 dark:border-blue-500/30 rounded-sm overflow-hidden relative mb-8">
              <div className="absolute inset-0">
                <NetworkAnimation dense />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/40"></div>
                </div>
              </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                As artificial intelligence continues to transform industries across the globe, Indiana is taking
                proactive steps to ensure its workforce is prepared for the technological revolution. The state has
                recently unveiled a comprehensive AI workforce development strategy that aims to position Indiana as a
                leader in AI talent and innovation in the Midwest. This initiative represents a collaborative effort
                between government agencies, educational institutions, and private sector partners to build a robust
                pipeline of AI-skilled professionals.
              </p>

              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                At Neural Command, we've been closely involved in shaping this strategy and are committed to supporting
                its implementation. This article provides an overview of Indiana's approach to AI workforce development
                and highlights the opportunities it presents for businesses and individuals across the state.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white">
                The Current State of Indiana's Tech Workforce
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Indiana's technology sector has been growing steadily over the past decade, with a 21% increase in tech
                jobs since 2015. However, the state faces several challenges when it comes to AI-specific talent:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    A significant skills gap in advanced AI technologies, with employers reporting difficulty finding
                    qualified candidates for AI-related positions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Competition from tech hubs on the coasts, leading to "brain drain" of AI talent educated in Indiana
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Uneven access to AI education and training opportunities, particularly in rural areas
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Limited awareness among traditional industries about the potential applications and benefits of AI
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white">
                Indiana's Four-Pillar Approach to AI Workforce Development
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                To address these challenges, Indiana has developed a comprehensive strategy built around four key
                pillars:
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2 text-neutral-900 dark:text-white">
                1. K-12 AI Education Initiatives
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Recognizing that building an AI-ready workforce begins with early education, Indiana is implementing
                several initiatives aimed at K-12 students:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>AI Curriculum Integration:</strong> Developing age-appropriate AI and machine learning
                    concepts that will be integrated into existing STEM curricula across all grade levels
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Teacher Training Programs:</strong> Providing educators with professional development
                    opportunities to build their AI literacy and teaching capabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>AI Clubs and Competitions:</strong> Supporting extracurricular activities that engage
                    students in hands-on AI projects and competitions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Industry Partnerships:</strong> Connecting K-12 schools with local technology companies for
                    mentorship programs, site visits, and real-world project opportunities
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2 text-neutral-900 dark:text-white">
                2. Higher Education and Research
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Indiana's colleges and universities are playing a central role in developing advanced AI talent:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>AI Degree Programs:</strong> Expanding AI-focused degree and certificate programs at
                    institutions across the state, including new offerings at Purdue University, Indiana University, and
                    Notre Dame
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Research Centers:</strong> Establishing dedicated AI research centers that bring together
                    academic researchers, industry partners, and government agencies to advance AI innovation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Industry-Academic Partnerships:</strong> Creating collaborative research initiatives that
                    address real-world AI challenges faced by Indiana businesses
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Talent Retention Incentives:</strong> Implementing scholarship and loan forgiveness programs
                    for students who pursue AI-related degrees and remain in Indiana after graduation
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2 text-neutral-900 dark:text-white">
                3. Workforce Reskilling and Upskilling
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Recognizing that AI will transform existing jobs across industries, Indiana is investing in programs to
                help current workers adapt:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>AI Skills Bootcamps:</strong> Short-term, intensive training programs focused on practical
                    AI skills that can be immediately applied in the workplace
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Online Learning Platforms:</strong> Partnerships with online education providers to offer
                    flexible, accessible AI training options for working professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Industry-Specific AI Training:</strong> Customized programs that focus on AI applications
                    relevant to Indiana's key industries, including manufacturing, agriculture, healthcare, and
                    logistics
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Employer Training Grants:</strong> Financial incentives for businesses that invest in AI
                    training for their employees
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2 text-neutral-900 dark:text-white">4. Ecosystem Development</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Building a supportive ecosystem for AI talent and innovation:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>AI Innovation Hubs:</strong> Establishing physical spaces across the state where
                    entrepreneurs, researchers, students, and industry professionals can collaborate on AI projects
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>AI Startup Support:</strong> Providing funding, mentorship, and resources for AI startups
                    through accelerator programs and venture funds
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Community AI Literacy:</strong> Developing programs to increase general AI awareness and
                    literacy among all Indiana residents
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>AI Ethics Framework:</strong> Establishing guidelines and best practices for the responsible
                    development and use of AI technologies
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white">
                South Bend's Role as an AI Education Hub
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                South Bend is positioned to play a central role in Indiana's AI workforce development strategy,
                leveraging its unique assets:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>University of Notre Dame's AI Initiative:</strong> The university is establishing a new AI
                    research center and expanding its computer science and data science programs with a focus on AI
                    applications
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>South Bend Code School:</strong> Expanding its curriculum to include AI and machine learning
                    courses for students of all ages
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Renaissance District:</strong> The former Studebaker factory complex is being developed as
                    an innovation hub with dedicated space for AI startups and training programs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Industry Partnerships:</strong> Collaboration between local manufacturers, healthcare
                    providers, and technology companies to create AI apprenticeship and internship opportunities
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white">
                Funding and Implementation Timeline
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Indiana's AI workforce development strategy is supported by a combination of state funding, federal
                grants, and private sector investments:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>State Funding:</strong> $25 million allocated over five years from the state's Next Level
                    Jobs initiative
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Federal Grants:</strong> $12 million from the National Science Foundation and Department of
                    Labor for AI education and workforce development
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>Private Sector Commitments:</strong> Over $30 million pledged by Indiana-based companies and
                    foundations to support AI education and training initiatives
                  </span>
                </li>
              </ul>

              <p className="text-neutral-600 dark:text-neutral-300 mb-4">The implementation timeline includes:</p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>2024:</strong> Launch of initial K-12 AI curriculum pilots and establishment of AI research
                    centers at key universities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>2025:</strong> Statewide rollout of AI bootcamps and industry-specific training programs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>2026:</strong> Opening of AI innovation hubs in key regions across the state
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    <strong>2028:</strong> Full implementation of K-12 AI curriculum across all Indiana schools
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-white">
                Opportunities for Businesses and Individuals
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Indiana's AI workforce development strategy creates numerous opportunities for both businesses and
                individuals across the state:
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2 text-neutral-900 dark:text-white">For Businesses:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Access to training grants and resources to upskill existing employees in AI technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Opportunities to partner with educational institutions on research projects and talent development
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Participation in industry consortia focused on AI applications for specific sectors
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Access to a growing pipeline of AI-skilled talent from Indiana's educational institutions
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2 text-neutral-900 dark:text-white">For Individuals:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Access to affordable, high-quality AI education and training programs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Opportunities to participate in AI research and innovation projects
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Pathways to high-paying, future-proof careers in AI and related fields
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Support for entrepreneurship and startup creation in the AI space
                  </span>
                </li>
              </ul>

              <div className="border border-blue-500/30 dark:border-blue-500/30 p-6 rounded-sm bg-blue-500/5 dark:bg-blue-500/5 mt-12">
                <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">
                  Partner with Neural Command for AI Workforce Development
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  Neural Command is actively involved in Indiana's AI workforce development initiatives, offering
                  training programs, consulting services, and partnership opportunities for businesses and educational
                  institutions. Our team can help you navigate the evolving AI landscape and develop the skills and
                  capabilities needed to thrive in the AI-powered future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-gradient-primary text-white hover:opacity-90">
                      DISCUSS AI TRAINING NEEDS
                    </Button>
                  </Link>
                  <Link href="/indiana">
                    <Button variant="outline" className="border-blue-500/30 hover:bg-blue-500/10">
                      LEARN ABOUT INDIANA PARTNERSHIPS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-500/30 dark:border-blue-500/30 pt-8 mt-12">
              <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-blue-500/30 dark:border-blue-500/30 p-4 rounded-sm hover:border-blue-400 dark:hover:border-blue-400 transition-colors">
                  <div className="text-sm text-blue-600/60 dark:text-blue-400/60 mb-1">March 15, 2024</div>
                  <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">
                    Indiana's $15M AI Innovation Fund: What It Means for Local Businesses
                  </h4>
                  <Link
                    href="/blog/indiana-ai-innovation-fund-local-businesses"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    READ MORE <ChevronLeft className="ml-1 w-4 h-4 rotate-180" />
                  </Link>
                </div>
                <div className="border border-blue-500/30 dark:border-blue-500/30 p-4 rounded-sm hover:border-blue-400 dark:hover:border-blue-400 transition-colors">
                  <div className="text-sm text-blue-600/60 dark:text-blue-400/60 mb-1">February 28, 2024</div>
                  <h4 className="font-bold mb-2 text-neutral-900 dark:text-white">
                    Case Study: How South Bend Manufacturers Are Leveraging AI for Competitive Advantage
                  </h4>
                  <Link
                    href="/blog/south-bend-manufacturers-ai-competitive-advantage"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    READ MORE <ChevronLeft className="ml-1 w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD structured data */}
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Indiana's AI Workforce Development Strategy: Preparing for the Jobs of Tomorrow",
          "description": "An overview of Indiana's comprehensive strategy to develop AI talent through educational partnerships, training programs, and industry collaborations.",
          "image": "https://dominatethe.world/api/og?title=Indiana%27s%20AI%20Workforce%20Development%20Strategy%3A%20Preparing%20for%20the%20Jobs%20of%20Tomorrow",
          "datePublished": "2024-02-10T11:00:00+00:00",
          "author": {
            "@type": "Organization",
            "name": "Neural Command",
            "url": "https://dominatethe.world"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Neural Command",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dominatethe.world/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dominatethe.world/blog/indiana-ai-workforce-development-strategy"
          },
          "keywords": "Indiana AI workforce, AI talent development, tech skills training, Indiana workforce development, AI education, tech talent pipeline, Midwest AI talent"
        }
      `,
        }}
      />
    </div>
  )
}
