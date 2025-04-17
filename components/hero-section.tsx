import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassGlowText from "@/components/glass-glow-text"
import SavingsCalculator from "@/components/savings-calculator"

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block mb-4 md:mb-6">
            <div className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
              No More Developer Headaches
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
            <GlassGlowText text="Your Website Should Work For You" />
            <span className="block text-xl sm:text-2xl md:text-3xl mt-2 text-indigo-300">Not The Other Way Around</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            Tired of endless back-and-forth with developers? Our AI-powered platform eliminates the frustration and
            delivers
            <span className="text-indigo-300 font-medium"> results that grow your business</span>, with zero technical
            knowledge required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout?plan=business">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <SavingsCalculator />
      </div>
    </section>
  )
}
