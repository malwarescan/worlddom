import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Analysis Services | Neural Command",
  description:
    "Advanced data analysis services to extract actionable insights and drive data-informed decision making.",
}

export default function DataAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        Data Analysis Services
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-300 mb-8 text-center">
          Transform raw data into actionable business intelligence.
        </p>

        {/* Content will be added here */}
        <div className="prose prose-invert max-w-none">
          <p>
            Our data analysis services help businesses make sense of complex data sets, identify patterns and trends,
            and extract actionable insights that drive strategic decision-making.
          </p>

          <p>
            This page is under construction. Please check back soon for more detailed information about our data
            analysis services.
          </p>
        </div>
      </div>
    </div>
  )
}
