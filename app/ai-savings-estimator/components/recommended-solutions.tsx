import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { aiSolutions } from "../data/form-options"

interface RecommendedSolutionsProps {
  results: any
  businessData: any
}

export default function RecommendedSolutions({ results, businessData }: RecommendedSolutionsProps) {
  // Get the selected solutions
  const selectedSolutions = aiSolutions.filter((solution) => businessData.aiSolutions.includes(solution.id))

  // Sort by savings amount (from results.savingsByCategory)
  const sortedSolutions = [...selectedSolutions].sort((a, b) => {
    const aSavings = results.savingsByCategory.find((item: any) => item.id === a.id)?.savings || 0
    const bSavings = results.savingsByCategory.find((item: any) => item.id === b.id)?.savings || 0
    return bSavings - aSavings
  })

  return (
    <div className="card-gradient border border-blue-500/30 dark:border-blue-500/30 rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Recommended AI Solutions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedSolutions.map((solution) => {
          const solutionSavings = results.savingsByCategory.find((item: any) => item.id === solution.id)?.savings || 0

          return (
            <Card key={solution.id} className="bg-white/50 dark:bg-neutral-800/50 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{solution.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 mb-3">{solution.description}</p>

                <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                  <Check className="h-4 w-4 mr-1" />
                  <span>${solutionSavings.toLocaleString()} annual savings</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-medium text-neutral-900 dark:text-white mb-2">Implementation Considerations</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
          The estimated implementation cost for these solutions is approximately $
          {results.implementationCost.toLocaleString()}. With an annual savings of $
          {results.annualSavings.toLocaleString()}, you can expect to recoup your investment in
          {Math.round(results.implementationCost / results.monthlySavings)} months.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Neural Command offers flexible implementation options to minimize disruption to your business operations.
        </p>
      </div>
    </div>
  )
}
