"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AgenticServiceCardProps {
  id: string
  title: string
  icon: string
  description: string
  offerings: string[]
  pricing: string[]
}

export default function AgenticServiceCard({
  id,
  title,
  icon,
  description,
  offerings,
  pricing,
}: AgenticServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-[#0a1029]/50 border border-indigo-500/20 rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-blue-500/40">
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{icon}</span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <p className="text-gray-300 mb-4">{description}</p>

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            <div>
              <h4 className="font-semibold text-white mb-2">What We Offer:</h4>
              <ul className="space-y-2">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-gray-300">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Pricing:</h4>
              <ul className="space-y-2">
                {pricing.map((price, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-300">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-indigo-500/20 bg-indigo-900/10">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors"
          aria-expanded={isExpanded}
          aria-controls={`${id}-content`}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              <span>Learn More</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
