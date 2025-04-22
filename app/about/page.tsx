import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Web2Header } from "@/components/web2-header"
import { Web2Footer } from "@/components/web2-footer"
import { Web2FeatureBox } from "@/components/web2-feature-box"
import { Web2Badge } from "@/components/web2-badge"
import { Web2Button } from "@/components/web2-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Neural Command | AI Innovation Leaders",
  description:
    "Learn about Neural Command's mission to transform businesses through cutting-edge neural network technology, our expert team, and our approach to responsible AI implementation.",
  keywords:
    "about Neural Command, AI company, neural network experts, artificial intelligence team, AI innovation, responsible AI, Neural Command mission",
  openGraph: {
    title: "About Neural Command | AI Innovation Leaders",
    description: "Learn about our mission to transform businesses through cutting-edge neural network technology.",
    images: [
      {
        url: "https://dominatethe.world/api/og?title=About%20Neural%20Command",
        width: 1200,
        height: 630,
        alt: "About Neural Command",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Web2Header />

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Page Title */}
        <div className="web2-panel p-6 bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center mb-8 rounded-xl border-4 border-white shadow-lg">
          <h1 className="text-4xl font-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">ABOUT NEURAL COMMAND</h1>
          <div className="h-1 bg-white bg-opacity-30 rounded-full my-4 mx-auto w-1/2"></div>
          <Web2Badge color="yellow" className="mx-auto">
            Est. 2022
          </Web2Badge>
        </div>

        {/* Company Intro */}
        <div className="web2-panel p-8 bg-white rounded-xl border-2 border-gray-300 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Neural Command was founded in 2022 with a singular vision: to harness the power of artificial
                intelligence to transform how businesses operate online. Our team of AI specialists, web developers, and
                business strategists came together to create a platform that makes advanced neural network technology
                accessible to businesses of all sizes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that AI shouldn't be limited to tech giants and enterprises with massive budgets. By creating
                intuitive tools and services, we're democratizing access to cutting-edge technology that can drive
                growth and innovation for companies at every level.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="web2-panel p-4 bg-gradient-to-b from-blue-100 to-white rounded-xl border-2 border-blue-300 shadow-md">
                <div className="relative w-full aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border-4 border-white shadow-lg flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-b from-blue-300 to-blue-500 border-2 border-white flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-200 to-blue-400 border-2 border-white flex items-center justify-center text-white font-black text-2xl">
                          NC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-sm text-gray-500">Neural Command Logo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Web2FeatureBox title="Our Mission" icon={<span className="text-lg">🚀</span>} color="blue">
            <p className="text-gray-700 leading-relaxed mb-4">
              We're on a mission to democratize access to cutting-edge AI technology. By making neural networks
              accessible and practical for everyday business applications, we're helping companies of all sizes leverage
              the power of AI to improve efficiency, drive innovation, and gain competitive advantages.
            </p>
            <div className="web2-panel p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                  !
                </div>
                <p className="text-sm text-blue-700 font-bold">Our goal: AI for everyone, not just tech giants.</p>
              </div>
            </div>
          </Web2FeatureBox>

          <Web2FeatureBox title="Our Approach" icon={<span className="text-lg">💡</span>} color="green">
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe in practical AI solutions that deliver real business value. Our approach combines
              state-of-the-art neural network architectures with intuitive interfaces and clear, actionable insights. We
              focus on solving specific business problems rather than implementing technology for its own sake.
            </p>
            <ul className="space-y-2">
              {["User-friendly interfaces", "Practical applications", "Measurable results"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Web2FeatureBox>
        </div>

        {/* Ethical AI */}
        <div className="web2-panel p-8 bg-gradient-to-b from-purple-100 to-white rounded-xl border-2 border-purple-300 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Ethical AI Commitment</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed mb-4">
                At Neural Command, we're committed to developing and deploying AI in an ethical, transparent, and
                responsible manner. We prioritize data privacy, algorithmic fairness, and explainability in all our
                solutions. Our team stays at the forefront of AI ethics discussions and implements best practices to
                ensure our technology benefits society.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that the most powerful AI solutions are those that augment human capabilities rather than
                replace them. Our goal is to create technology that empowers people to work more effectively, make
                better decisions, and focus on the creative and strategic aspects of their work.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="web2-panel p-4 bg-white rounded-lg border-2 border-purple-200 h-full">
                <h3 className="text-lg font-bold text-purple-700 mb-3">Our Ethics Pillars</h3>
                <div className="space-y-3">
                  {[
                    { title: "Privacy First", desc: "Your data remains yours" },
                    { title: "Transparency", desc: "No black box algorithms" },
                    { title: "Human-Centered", desc: "AI that serves people" },
                    { title: "Fairness", desc: "Unbiased algorithms" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xs border-2 border-white">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold text-purple-700">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="web2-panel p-8 bg-white rounded-xl border-2 border-gray-300 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Dr. Sarah Chen", role: "Chief AI Officer", img: "/confident-leader.png" },
              { name: "Michael Rodriguez", role: "CEO & Founder", img: "/confident-businessman.png" },
              { name: "David Kim", role: "CTO", img: "/coding-collaborators.png" },
            ].map((person, i) => (
              <div
                key={i}
                className="web2-panel p-4 bg-gradient-to-b from-gray-100 to-white rounded-lg border-2 border-gray-200 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-3 rounded-full border-4 border-white shadow-md overflow-hidden relative">
                  <Image src={person.img || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-blue-700">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
                <div className="h-1 w-16 bg-blue-200 mx-auto my-2 rounded-full"></div>
                <Web2Button size="sm" className="mt-2">
                  View Profile
                </Web2Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="web2-panel p-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-xl border-4 border-white shadow-lg text-center text-white">
          <h2 className="text-2xl font-black mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Discover how Neural Command's cutting-edge technology can help your business achieve new levels of
            efficiency and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/technology">
              <Web2Button color="blue" size="lg">
                Explore Our Technology <ArrowRight className="ml-2 h-4 w-4" />
              </Web2Button>
            </Link>
            <Link href="/contact">
              <Web2Button color="green" size="lg">
                Contact Us Today
              </Web2Button>
            </Link>
          </div>
        </div>
      </div>

      <Web2Footer />
    </div>
  )
}
