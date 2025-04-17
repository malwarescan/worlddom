import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import GlossyText from "@/components/glossy-text"

export default function EstimatorHeader() {
  return (
    <div className="text-center">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
      >
        <ChevronLeft className="mr-1 w-4 h-4" /> BACK TO HOME
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
        <GlossyText text="AI SAVINGS ESTIMATOR" />
      </h1>

      <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
        Discover how much your South Bend business could save with Neural Command's AI solutions. Enter your details
        below to receive a personalized savings projection.
      </p>
    </div>
  )
}
