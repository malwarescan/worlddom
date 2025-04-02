"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import NetworkAnimation from "@/components/network-animation"
import GlossyText from "@/components/glossy-text"
import SavingsResults from "../components/savings-results"
import SavingsCharts from "../components/savings-charts"
import RecommendedSolutions from "../components/recommended-solutions"
import ContactForm from "../components/contact-form"

export default function ResultsPage() {
  const router = useRouter()
  const [results, setResults] = useState<any>(null)
  const [businessData, setBusinessData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      // Get results from localStorage
      const savedResults = localStorage.getItem("savingsResults")
      const savedBusinessData = localStorage.getItem("businessData")

      if (savedResults && savedBusinessData) {
        setResults(JSON.parse(savedResults))
        setBusinessData(JSON.parse(savedBusinessData))
        setLoading(false)
      } else {
        // If no results, redirect to estimator page
        router.push("/ai-savings-estimator")
      }
    } catch (error) {
      console.error("Error loading saved results:", error)
      router.push("/ai-savings-estimator")
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col relative">
        <div className="absolute inset-0 opacity-30">
          <NetworkAnimation />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-blue-500 border-b-purple-500 border-l-transparent border-r-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-neutral-600 dark:text-neutral-300">Loading your savings report...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!results || !businessData) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-30">
        <NetworkAnimation />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ai-savings-estimator"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
          >
            <ChevronLeft className="mr-1 w-4 h-4" /> BACK TO ESTIMATOR
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              <GlossyText text="YOUR AI SAVINGS REPORT" />
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              Based on your business profile, here's how Neural Command's AI solutions could impact your bottom line.
            </p>
          </div>

          {/* Key Results Summary */}
          <SavingsResults results={results} businessData={businessData} />

          {/* Charts */}
          <div className="mt-12">
            <SavingsCharts results={results} />
          </div>

          {/* Recommended Solutions */}
          <div className="mt-12">
            <RecommendedSolutions results={results} businessData={businessData} />
          </div>

          {/* Contact Form */}
          <div className="mt-12 card-gradient border border-blue-500/30 dark:border-blue-500/30 rounded-lg shadow-lg p-6 md:p-8">
            <ContactForm businessData={businessData} />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => window.print()}
              variant="outline"
              className="border-blue-500/30 hover:bg-blue-500/10"
            >
              Save Report as PDF
            </Button>

            <Link href="/ai-savings-estimator">
              <Button variant="default" className="bg-gradient-primary w-full sm:w-auto">
                Start a New Estimate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

