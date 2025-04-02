import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ResponsiveContainer from "@/components/responsive-container"
import ResponsiveGradientText from "@/components/responsive-gradient-text"
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
    <div className="min-h-screen bg-[#050914] text-white">
      <ResponsiveContainer maxWidth="lg" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold mb-8 text-center">
            <ResponsiveGradientText text="ABOUT NEURAL COMMAND" size="3xl" gradient="indigo-purple" />
          </h1>

          <div className="space-y-12">
            <div className="bg-gradient-to-br from-[#0a1029]/50 to-[#170b29]/50 p-6 md:p-8 rounded-xl border border-indigo-500/20">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Neural Command was founded in 2022 with a singular vision: to harness the power of artificial
                intelligence to transform how businesses operate online. Our team of AI specialists, web developers, and
                business strategists came together to create a platform that makes advanced neural network technology
                accessible to businesses of all sizes.
              </p>
            </div>

            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 z-10"></div>
              <div className="absolute inset-0 bg-[#0a0e1f] flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-indigo-500/20 flex items-center justify-center animate-pulse">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/40"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#0a1029]/50 to-[#170b29]/50 p-6 md:p-8 rounded-xl border border-indigo-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
                <p className="text-gray-300">
                  We're on a mission to democratize access to cutting-edge AI technology. By making neural networks
                  accessible and practical for everyday business applications, we're helping companies of all sizes
                  leverage the power of AI to improve efficiency, drive innovation, and gain competitive advantages.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0a1029]/50 to-[#170b29]/50 p-6 md:p-8 rounded-xl border border-indigo-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
                <p className="text-gray-300">
                  We believe in practical AI solutions that deliver real business value. Our approach combines
                  state-of-the-art neural network architectures with intuitive interfaces and clear, actionable
                  insights. We focus on solving specific business problems rather than implementing technology for its
                  own sake.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a1029]/50 to-[#170b29]/50 p-6 md:p-8 rounded-xl border border-indigo-500/20">
              <h2 className="text-2xl font-bold mb-4 text-white">Ethical AI Commitment</h2>
              <p className="text-gray-300 mb-4">
                At Neural Command, we're committed to developing and deploying AI in an ethical, transparent, and
                responsible manner. We prioritize data privacy, algorithmic fairness, and explainability in all our
                solutions. Our team stays at the forefront of AI ethics discussions and implements best practices to
                ensure our technology benefits society.
              </p>
              <p className="text-gray-300">
                We believe that the most powerful AI solutions are those that augment human capabilities rather than
                replace them. Our goal is to create technology that empowers people to work more effectively, make
                better decisions, and focus on the creative and strategic aspects of their work.
              </p>
            </div>

            <div className="text-center">
              <Link href="/technology">
                <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-6 py-3">
                  Explore Our Technology <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}

