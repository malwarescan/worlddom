import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, Clock, BarChart } from "lucide-react"

interface SavingsResultsProps {
  results: any
  businessData: any
}

export default function SavingsResults({ results, businessData }: SavingsResultsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="card-gradient border border-blue-500/30 dark:border-blue-500/30 rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Key Savings Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white/50 dark:bg-neutral-800/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Annual Savings</h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {formatCurrency(results.annualSavings)}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {formatCurrency(results.monthlySavings)} per month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 dark:bg-neutral-800/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">ROI</h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-1">{results.firstYearROI}%</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">First year return on investment</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 dark:bg-neutral-800/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Time Savings</h3>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-1">
                  {results.timeSavingsHours.toLocaleString()}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Hours saved per month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 dark:bg-neutral-800/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-4">
                <BarChart className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Productivity</h3>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mt-1">
                  +{results.productivityImprovement}%
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  Estimated productivity improvement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          <strong>5-Year Projection:</strong> Your business could save up to {formatCurrency(results.fiveYearSavings)}{" "}
          over the next 5 years by implementing these AI solutions.
        </p>
      </div>
    </div>
  )
}

