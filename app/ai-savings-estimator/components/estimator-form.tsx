"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, ArrowLeft, Calculator, Check } from "lucide-react"
import { industries, aiSolutions } from "../data/form-options"

interface EstimatorFormProps {
  onSubmit: (data: any) => void
  isSubmitting: boolean
}

export default function EstimatorForm({ onSubmit, isSubmitting }: EstimatorFormProps) {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    employees: 10,
    annualRevenue: 100000,
    monthlyCosts: 10000,
    aiSolutions: [] as string[],
    email: "",
    phone: "",
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const toggleAiSolution = (solutionId: string) => {
    setFormData((prev) => {
      const solutions = [...prev.aiSolutions]
      if (solutions.includes(solutionId)) {
        return { ...prev, aiSolutions: solutions.filter((s) => s !== solutionId) }
      } else {
        return { ...prev, aiSolutions: [...solutions, solutionId] }
      }
    })

    // Clear AI solutions error
    if (errors.aiSolutions) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.aiSolutions
        return newErrors
      })
    }
  }

  const nextStep = () => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = "Business name is required"
      }
      if (!formData.industry) {
        newErrors.industry = "Please select your industry"
      }
    }

    if (step === 3) {
      if (formData.aiSolutions.length === 0) {
        newErrors.aiSolutions = "Please select at least one AI solution"
      }
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}

    if (formData.aiSolutions.length === 0) {
      newErrors.aiSolutions = "Please select at least one AI solution"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {step === 1 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Business Information</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">Tell us about your business to get started.</p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={(e) => updateFormData("businessName", e.target.value)}
                placeholder="Enter your business name"
                className={errors.businessName ? "border-red-500" : ""}
                autoComplete="organization"
              />
              {errors.businessName && <p className="text-sm text-red-500 mt-1">{errors.businessName}</p>}
            </div>

            <div>
              <Label htmlFor="industry">Industry</Label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={(e) => updateFormData("industry", e.target.value)}
                className={`w-full h-10 px-3 py-2 rounded-md border ${
                  errors.industry ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
                } bg-white dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="">Select your industry</option>
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
              {errors.industry && <p className="text-sm text-red-500 mt-1">{errors.industry}</p>}
            </div>

            <div>
              <Label htmlFor="email">Business Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="(555) 555-5555"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="button" onClick={nextStep} className="bg-gradient-primary">
              Next Step <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Business Metrics</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Provide some basic financial and operational information to help us calculate potential savings.
          </p>

          <div className="space-y-6">
            <div>
              <Label htmlFor="employees" className="mb-1 block">
                Number of Employees: {formData.employees}
              </Label>
              <Slider
                id="employees"
                min={1}
                max={500}
                step={1}
                value={[formData.employees]}
                onValueChange={(value) => updateFormData("employees", value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                <span>1</span>
                <span>100</span>
                <span>250</span>
                <span>500+</span>
              </div>
            </div>

            <div>
              <Label htmlFor="annualRevenue" className="mb-1 block">
                Annual Revenue: ${formData.annualRevenue.toLocaleString()}
              </Label>
              <Slider
                id="annualRevenue"
                min={50000}
                max={10000000}
                step={50000}
                value={[formData.annualRevenue]}
                onValueChange={(value) => updateFormData("annualRevenue", value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                <span>$50K</span>
                <span>$1M</span>
                <span>$5M</span>
                <span>$10M+</span>
              </div>
            </div>

            <div>
              <Label htmlFor="monthlyCosts" className="mb-1 block">
                Monthly Operating Costs: ${formData.monthlyCosts.toLocaleString()}
              </Label>
              <Slider
                id="monthlyCosts"
                min={1000}
                max={1000000}
                step={1000}
                value={[formData.monthlyCosts]}
                onValueChange={(value) => updateFormData("monthlyCosts", value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                <span>$1K</span>
                <span>$100K</span>
                <span>$500K</span>
                <span>$1M+</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className="border-blue-500/30 hover:bg-blue-500/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button type="button" onClick={nextStep} className="bg-gradient-primary">
              Next Step <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">AI Solutions</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Select the AI solutions you're interested in implementing at your business.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {aiSolutions.map((solution) => {
              const isSelected = formData.aiSolutions.includes(solution.id)
              return (
                <div
                  key={solution.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                  onClick={() => toggleAiSolution(solution.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 mt-1 rounded border ${
                        isSelected
                          ? "bg-blue-500 border-blue-500 flex items-center justify-center"
                          : "border-neutral-300 dark:border-neutral-600"
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <div>
                      <label
                        htmlFor={`solution-${solution.id}`}
                        className="font-medium text-neutral-900 dark:text-white cursor-pointer"
                      >
                        {solution.name}
                      </label>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{solution.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {errors.aiSolutions && <p className="text-sm text-red-500 mt-2">{errors.aiSolutions}</p>}

          <div className="pt-4 flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className="border-blue-500/30 hover:bg-blue-500/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-gradient-primary">
              {isSubmitting ? (
                <>Calculating...</>
              ) : (
                <>
                  Calculate Savings <Calculator className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </form>
  )
}

