"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Chart from "chart.js/auto"

interface SavingsChartsProps {
  results: any
}

export default function SavingsCharts({ results }: SavingsChartsProps) {
  const yearlyChartRef = useRef<HTMLCanvasElement>(null)
  const categoryChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let yearlyChart: Chart | null = null
    let categoryChart: Chart | null = null

    try {
      if (yearlyChartRef.current) {
        const ctx = yearlyChartRef.current.getContext("2d")
        if (ctx) {
          // Destroy existing chart if it exists
          if (yearlyChart) yearlyChart.destroy()

          // Create yearly savings chart
          yearlyChart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
              datasets: [
                {
                  label: "Cumulative Savings",
                  data: [
                    results.annualSavings - results.implementationCost,
                    results.annualSavings * 2 - results.implementationCost,
                    results.annualSavings * 3 - results.implementationCost,
                    results.annualSavings * 4 - results.implementationCost,
                    results.annualSavings * 5 - results.implementationCost,
                  ],
                  backgroundColor: "rgba(92, 108, 245, 0.7)",
                  borderColor: "rgba(92, 108, 245, 1)",
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => "$" + value.toLocaleString(),
                  },
                },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) => "$" + context.parsed.y.toLocaleString(),
                  },
                },
              },
            },
          })
        }
      }

      if (categoryChartRef.current && results.savingsByCategory) {
        const ctx = categoryChartRef.current.getContext("2d")
        if (ctx) {
          // Destroy existing chart if it exists
          if (categoryChart) categoryChart.destroy()

          // Create category savings chart
          categoryChart = new Chart(ctx, {
            type: "doughnut",
            data: {
              labels: results.savingsByCategory.map((item: any) => item.name),
              datasets: [
                {
                  data: results.savingsByCategory.map((item: any) => item.savings),
                  backgroundColor: [
                    "rgba(92, 108, 245, 0.7)",
                    "rgba(139, 92, 246, 0.7)",
                    "rgba(59, 130, 246, 0.7)",
                    "rgba(16, 185, 129, 0.7)",
                    "rgba(245, 158, 11, 0.7)",
                    "rgba(239, 68, 68, 0.7)",
                    "rgba(99, 102, 241, 0.7)",
                    "rgba(20, 184, 166, 0.7)",
                  ],
                  borderColor: [
                    "rgba(92, 108, 245, 1)",
                    "rgba(139, 92, 246, 1)",
                    "rgba(59, 130, 246, 1)",
                    "rgba(16, 185, 129, 1)",
                    "rgba(245, 158, 11, 1)",
                    "rgba(239, 68, 68, 1)",
                    "rgba(99, 102, 241, 1)",
                    "rgba(20, 184, 166, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      const label = context.label || ""
                      const value = context.parsed || 0
                      return label + ": $" + value.toLocaleString()
                    },
                  },
                },
              },
            },
          })
        }
      }
    } catch (error) {
      console.error("Error creating charts:", error)
      // Provide a fallback display for the data if charts fail to render
    }

    // Cleanup function
    return () => {
      try {
        if (yearlyChart) yearlyChart.destroy()
        if (categoryChart) categoryChart.destroy()
      } catch (error) {
        console.error("Error cleaning up charts:", error)
      }
    }
  }, [results])

  return (
    <div className="card-gradient border border-blue-500/30 dark:border-blue-500/30 rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Savings Visualization</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/50 dark:bg-neutral-800/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">5-Year Savings Projection</h3>
            <div className="h-64">
              <canvas ref={yearlyChartRef}></canvas>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 dark:bg-neutral-800/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">Savings by Solution</h3>
            <div className="h-64">
              <canvas ref={categoryChartRef}></canvas>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

