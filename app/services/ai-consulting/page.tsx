import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Consulting Services | Neural Command",
  description:
    "Expert AI consulting services to help your business leverage artificial intelligence for growth, efficiency, and innovation.",
}

export default function AIConsultingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        AI Consulting Services
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-300 mb-8 text-center">
          Expert guidance to transform your business with cutting-edge AI solutions.
        </p>

        {/* Content will be added here */}
        <div className="prose prose-invert max-w-none">
          <p>
            Our AI consulting services help businesses identify opportunities for AI implementation, develop strategic
            roadmaps, and execute AI initiatives that drive measurable results.
          </p>

          <p>
            This page is under construction. Please check back soon for more detailed information about our AI
            consulting services.
          </p>
        </div>
      </div>
    </div>
  )
}
