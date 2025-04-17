"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  link: string
  detailedDescription?: string
  benefits?: string[]
  useCases?: string[]
  cta?: string
}

export default function ServiceCard({
  title,
  description,
  link,
  detailedDescription,
  benefits,
  useCases,
  cta,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`card-gradient border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg shadow-lg transition-all duration-300 h-full flex flex-col justify-between ${
        isExpanded
          ? "border-blue-400 dark:border-blue-500 glow-border"
          : "hover:border-blue-300 dark:hover:border-blue-700"
      } ${!isExpanded ? "hover-glow" : ""}`}
      style={{
        transform: isExpanded ? "scale(1.02)" : "scale(1)",
        transition: "all 0.3s ease",
      }}
    >
      <div>
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 shadow-md shadow-blue-500/10">
          <div className="w-6 h-6 rounded-md bg-white/80 flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">{description}</p>

        {detailedDescription ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-4"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "SHOW LESS" : "LEARN MORE"}
            {isExpanded ? (
              <ChevronDown className="ml-1 w-4 h-4 text-blue-600 dark:text-blue-400" />
            ) : (
              <ChevronRight className="ml-1 w-4 h-4 text-blue-600 dark:text-blue-400" />
            )}
          </button>
        ) : (
          <Link
            href={link}
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            LEARN MORE <ChevronRight className="ml-1 w-4 h-4 text-blue-600 dark:text-blue-400" />
          </Link>
        )}
      </div>

      {isExpanded && detailedDescription && (
        <div className="mt-4 animate-in fade-in duration-300">
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 mb-4">
            <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Overview</h4>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">{detailedDescription}</p>

            {benefits && (
              <>
                <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Key Benefits</h4>
                <ul className="space-y-2 mb-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0 rounded-full"></div>
                      <span className="text-neutral-600 dark:text-neutral-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {useCases && (
              <>
                <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Use Cases</h4>
                <ul className="space-y-2 mb-6">
                  {useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 mr-3 mt-2 flex-shrink-0 rounded-full"></div>
                      <span className="text-neutral-600 dark:text-neutral-300">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {cta && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-100 dark:border-blue-800/30">
                <p className="text-blue-700 dark:text-blue-300 font-medium mb-3">{cta}</p>
                <Link href="/contact">
                  <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate">Contact Us</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
