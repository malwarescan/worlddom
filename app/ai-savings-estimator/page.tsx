"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import EstimatorForm from "./components/estimator-form"
import EstimatorHeader from "./components/estimator-header"
import NetworkAnimation from "@/components/network-animation"

export default function AISavingsEstimator() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (formData: any) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/calculate-savings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Store results in localStorage to access on results page
        localStorage.setItem("savingsResults", JSON.stringify(data))
        localStorage.setItem("businessData", JSON.stringify(formData))

        // Navigate to results page
        router.push("/ai-savings-estimator/results")
      } else {
        throw new Error(data.error || "Failed to calculate savings")
      }
    } catch (error) {
      console.error("Error calculating savings:", error)
      alert("There was an error calculating your savings. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-30">
        <NetworkAnimation />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <EstimatorHeader />

          <div className="card-gradient border border-blue-500/30 dark:border-blue-500/30 rounded-lg shadow-lg p-6 md:p-8 mt-8">
            <EstimatorForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>
      </div>
    </div>
  )
}

