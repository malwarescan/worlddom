"use client"

import { useState } from "react"
import { ArrowRight, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SavingsCalculator() {
  const [monthlyWebDevCost, setMonthlyWebDevCost] = useState(2500)
  const [monthlyHostingCost, setMonthlyHostingCost] = useState(150)
  const [monthlySecurity, setMonthlySecurity] = useState(300)
  const [showResults, setShowResults] = useState(false)

  const calculateSavings = () => {
    setShowResults(true)
  }

  const totalMonthlyCost = monthlyWebDevCost + monthlyHostingCost + monthlySecurity
  const ourMonthlyCost = 299 // Pro plan
  const monthlySavings = totalMonthlyCost - ourMonthlyCost
  const annualSavings = monthlySavings * 12
  const savingsPercentage = Math.round((monthlySavings / totalMonthlyCost) * 100)

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0a1029]/50 border border-indigo-500/30 rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-indigo-400 mr-3" />
        <h3 className="text-2xl font-bold text-white">Website Cost Savings Calculator</h3>
      </div>

      <p className="text-gray-300 mb-6">
        See how much you could save by switching to our AI-powered platform compared to traditional web development,
        hosting, and security costs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <Label htmlFor="webdev-cost" className="text-white mb-2 block">
            Monthly Web Development
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <Input
              id="webdev-cost"
              type="number"
              value={monthlyWebDevCost}
              onChange={(e) => setMonthlyWebDevCost(Number(e.target.value))}
              className="pl-8 bg-[#0d1338] border-indigo-500/30 text-white"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Average monthly cost for web developers, maintenance, and updates
          </p>
        </div>

        <div>
          <Label htmlFor="hosting-cost" className="text-white mb-2 block">
            Monthly Hosting
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <Input
              id="hosting-cost"
              type="number"
              value={monthlyHostingCost}
              onChange={(e) => setMonthlyHostingCost(Number(e.target.value))}
              className="pl-8 bg-[#0d1338] border-indigo-500/30 text-white"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Monthly cost for web hosting, CDN, and related services</p>
        </div>

        <div>
          <Label htmlFor="security-cost" className="text-white mb-2 block">
            Monthly Security
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <Input
              id="security-cost"
              type="number"
              value={monthlySecurity}
              onChange={(e) => setMonthlySecurity(Number(e.target.value))}
              className="pl-8 bg-[#0d1338] border-indigo-500/30 text-white"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Monthly cost for security monitoring, updates, and compliance</p>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Button onClick={calculateSavings} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6">
          Calculate Savings <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {showResults && (
        <div className="border border-indigo-500/30 rounded-lg p-6 bg-indigo-500/10">
          <h4 className="text-xl font-bold text-white mb-4">Your Potential Savings</h4>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-300 mb-2">Current Monthly Costs:</p>
              <p className="text-3xl font-bold text-white">${totalMonthlyCost.toLocaleString()}</p>
            </div>

            <div>
              <p className="text-gray-300 mb-2">Our Pro Plan:</p>
              <p className="text-3xl font-bold text-indigo-400">$299</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0d1338] p-4 rounded-lg">
              <p className="text-gray-300 mb-1">Monthly Savings:</p>
              <p className="text-2xl font-bold text-green-400">${monthlySavings.toLocaleString()}</p>
            </div>

            <div className="bg-[#0d1338] p-4 rounded-lg">
              <p className="text-gray-300 mb-1">Annual Savings:</p>
              <p className="text-2xl font-bold text-green-400">${annualSavings.toLocaleString()}</p>
            </div>

            <div className="bg-[#0d1338] p-4 rounded-lg">
              <p className="text-gray-300 mb-1">Cost Reduction:</p>
              <p className="text-2xl font-bold text-green-400">{savingsPercentage}%</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/checkout?plan=pro">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

