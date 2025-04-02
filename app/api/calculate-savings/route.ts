import { type NextRequest, NextResponse } from "next/server"
import { aiSolutions } from "@/app/ai-savings-estimator/data/form-options"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { industry, monthlyCosts, employees, annualRevenue, aiSolutions: selectedSolutions } = data

    // Calculate savings based on selected solutions and industry
    const results = calculateSavings(industry, monthlyCosts, employees, annualRevenue, selectedSolutions)

    return NextResponse.json(results)
  } catch (error) {
    console.error("Error calculating savings:", error)
    return NextResponse.json({ error: "Failed to calculate savings" }, { status: 500 })
  }
}

function calculateSavings(
  industry: string,
  monthlyCosts: number,
  employees: number,
  annualRevenue: number,
  selectedSolutions: string[],
) {
  // Get the selected AI solutions with their savings factors
  const selectedAiSolutions = aiSolutions.filter((solution) => selectedSolutions.includes(solution.id))

  // Calculate total savings factor based on industry and selected solutions
  let totalSavingsFactor = 0

  selectedAiSolutions.forEach((solution) => {
    const industrySavingsFactor = solution.savingsFactors[industry as keyof typeof solution.savingsFactors] || 0.1
    totalSavingsFactor += industrySavingsFactor
  })

  // Apply diminishing returns for multiple solutions
  if (selectedSolutions.length > 1) {
    totalSavingsFactor = totalSavingsFactor * (1 - (selectedSolutions.length - 1) * 0.1)
  }

  // Cap the maximum savings at 40%
  totalSavingsFactor = Math.min(totalSavingsFactor, 0.4)

  // Calculate monthly and annual savings
  const monthlySavings = monthlyCosts * totalSavingsFactor
  const annualSavings = monthlySavings * 12

  // Calculate ROI (Return on Investment)
  // Assume implementation cost is roughly 6 months of savings
  const implementationCost = monthlySavings * 6
  const firstYearROI = ((annualSavings - implementationCost) / implementationCost) * 100

  // Calculate productivity improvement
  const productivityImprovement = totalSavingsFactor * 1.5 * 100 // 1.5x multiplier for productivity vs cost savings

  // Calculate time savings (hours per month)
  const hoursPerEmployee = 160 // 40 hours per week * 4 weeks
  const totalMonthlyHours = employees * hoursPerEmployee
  const timeSavingsHours = totalMonthlyHours * totalSavingsFactor

  // Calculate potential revenue increase (conservative estimate)
  const revenueIncreaseFactor = totalSavingsFactor * 0.5 // 50% of cost savings factor
  const potentialRevenueIncrease = annualRevenue * revenueIncreaseFactor

  return {
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    fiveYearSavings: Math.round(annualSavings * 5),
    implementationCost: Math.round(implementationCost),
    firstYearROI: Math.round(firstYearROI),
    productivityImprovement: Math.round(productivityImprovement),
    timeSavingsHours: Math.round(timeSavingsHours),
    potentialRevenueIncrease: Math.round(potentialRevenueIncrease),
    savingsByCategory: selectedAiSolutions.map((solution) => {
      const industrySavingsFactor = solution.savingsFactors[industry as keyof typeof solution.savingsFactors] || 0.1
      const categorySavings = monthlyCosts * industrySavingsFactor * 12
      return {
        id: solution.id,
        name: solution.name,
        savings: Math.round(categorySavings),
      }
    }),
  }
}

