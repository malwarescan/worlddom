"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowRight, ArrowLeft, Check, CreditCard, Globe, Server, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import EnhancedBackground from "@/components/enhanced-background"
import GlassGlowText from "@/components/glass-glow-text"

// Define the steps in the checkout process
const STEPS = [
  { id: "plan", title: "Plan Selection" },
  { id: "website", title: "Website Details" },
  { id: "hosting", title: "Hosting Information" },
  { id: "addons", title: "Add-Ons" },
  { id: "payment", title: "Payment" },
  { id: "confirmation", title: "Confirmation" },
]

// Update the pricing plans to be based on website size rather than number of websites
const PLANS = {
  starter: {
    name: "Starter",
    price: 99,
    pageLimit: 10,
    features: [
      "Up to 10 pages",
      "Weekly AI Optimization Pass",
      "SEO Monitoring + Tag Enhancements",
      "Up to 25,000 Visits/Month",
      "Monthly Performance Report",
    ],
  },
  growth: {
    name: "Growth",
    price: 199,
    pageLimit: 30,
    features: [
      "Twice Weekly AI Optimization Pass",
      "Advanced SEO & Content Optimization",
      "Up to 100,000 Visits/Month",
      "Weekly Performance Reports",
      "A/B Testing & Conversion Optimization",
      "Priority Support",
    ],
  },
  pro: {
    name: "Pro",
    price: 299,
    pageLimit: 60,
    features: [
      "Up to 60 pages",
      "Daily AI Optimization Pass",
      "Enterprise-grade SEO & Analytics",
      "Unlimited Visits",
      "Real-time Performance Dashboard",
      "Advanced AI Content Generation",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: 0,
    pageLimit: 100,
    features: [
      "60+ pages or advanced logic",
      "Real-time AI Optimization",
      "Custom Enterprise Solutions",
      "Unlimited Visits",
      "Advanced Analytics Dashboard",
      "Custom AI Model Training",
      "Dedicated Account Team",
      "Custom Integrations & API Access",
      "Contact for Custom Pricing",
    ],
  },
}

// Define add-ons
const ADDONS = [
  {
    id: "extraPages10",
    name: "Extra 10 Pages",
    price: 25,
    description: "Add 10 additional pages to your plan limit",
    recurring: true,
  },
  {
    id: "extraPages20",
    name: "Extra 20 Pages",
    price: 45,
    description: "Add 20 additional pages to your plan limit (save $5/month)",
    recurring: true,
  },
  {
    id: "extraPages50",
    name: "Extra 50 Pages",
    price: 100,
    description: "Add 50 additional pages to your plan limit (save $25/month)",
    recurring: true,
  },
  {
    id: "blogImport",
    name: "Blog Import",
    price: 49,
    description: "Bring in up to 50 blog posts with metadata",
    recurring: false,
  },
  {
    id: "ecommerceSync",
    name: "Ecommerce Sync",
    price: 99,
    description: "Set up product pages with AI-friendly structure",
    recurring: false,
  },
  {
    id: "analyticsSetup",
    name: "Analytics Setup",
    price: 99,
    description: "GA4, Heatmaps, Event Tracking configured",
    recurring: false,
  },
  {
    id: "customDomainMigration",
    name: "Custom Domain Migration",
    price: 149,
    description: "Full DNS + SSL setup with fallback security routing",
    recurring: false,
  },
]

// Credit card validation functions
const validateCreditCard = (number) => {
  // Remove all non-digit characters
  const cardNumber = number.replace(/\D/g, "")

  // Check if the card number is empty or not a number
  if (!cardNumber || isNaN(Number.parseInt(cardNumber))) return false

  // Check length (most cards are between 13-19 digits)
  if (cardNumber.length < 13 || cardNumber.length > 19) return false

  // Luhn algorithm (checksum)
  let sum = 0
  let shouldDouble = false

  // Loop through values starting from the rightmost digit
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = Number.parseInt(cardNumber.charAt(i))

    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }

    sum += digit
    shouldDouble = !shouldDouble
  }

  return sum % 10 === 0
}

const validateExpiryDate = (expiry) => {
  // Check format (MM/YY)
  if (!/^\d{2}\/\d{2}$/.test(expiry)) return false

  const [month, year] = expiry.split("/").map((part) => Number.parseInt(part, 10))
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear() % 100 // Get last 2 digits
  const currentMonth = currentDate.getMonth() + 1 // 1-12

  // Check if month is valid
  if (month < 1 || month > 12) return false

  // Check if the card is expired
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false
  }

  return true
}

const validateCVC = (cvc) => {
  // CVC should be 3-4 digits
  return /^\d{3,4}$/.test(cvc)
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const initialPlan = searchParams.get("plan") || "starter"
  const includeOnboarding = searchParams.get("onboarding") === "true"

  const [currentStep, setCurrentStep] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(initialPlan)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [selectedAddons, setSelectedAddons] = useState([])
  const [includeSetupFee, setIncludeSetupFee] = useState(includeOnboarding)
  const [estimatedPageCount, setEstimatedPageCount] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    hostingProvider: "",
    hostingUsername: "",
    hostingPassword: "",
    additionalInfo: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvc: "",
    skipHostingInfo: false,
  })

  const [validationErrors, setValidationErrors] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  })

  // Calculate onboarding fee based on estimated page count
  const calculateOnboardingFee = () => {
    // Base fee is $99 (discounted from $199)
    let fee = 99

    // If estimated page count is provided and exceeds 60 pages, add scaling fee
    if (estimatedPageCount > 60) {
      // Add $50 for every 50 pages beyond 60
      const extraPages = estimatedPageCount - 60
      const extraFee = Math.ceil(extraPages / 50) * 50
      fee += extraFee
    }

    return fee
  }

  // Calculate total price
  const calculateTotal = () => {
    // Base monthly price from selected plan
    let monthlyTotal = selectedPlan && PLANS[selectedPlan] ? PLANS[selectedPlan].price : 0

    // Add monthly fees from recurring add-ons
    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId)
      if (addon && addon.recurring) {
        monthlyTotal += addon.price
      }
    })

    // Calculate one-time fees
    let oneTimeTotal = 0

    // Add onboarding fee if selected
    if (includeSetupFee) {
      oneTimeTotal += calculateOnboardingFee()
    }

    // Add one-time fees from non-recurring add-ons
    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId)
      if (addon && !addon.recurring) {
        oneTimeTotal += addon.price
      }
    })

    return {
      monthly: monthlyTotal,
      oneTime: oneTimeTotal,
      total: monthlyTotal + oneTimeTotal,
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear validation errors when user types
    if (name === "cardNumber" || name === "cardExpiry" || name === "cardCvc") {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }))
    }

    // Format credit card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    }

    // Format expiry date with slash
    if (name === "cardExpiry") {
      let formatted = value.replace(/\D/g, "")
      if (formatted.length > 2) {
        formatted = formatted.substring(0, 2) + "/" + formatted.substring(2, 4)
      }
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    }

    // Update estimated page count
    if (name === "estimatedPageCount") {
      const pageCount = Number.parseInt(value) || 0
      setEstimatedPageCount(pageCount)
    }
  }

  const handlePlanChange = (plan) => {
    if (PLANS[plan]) {
      setSelectedPlan(plan)
    }
  }

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) => {
      if (prev.includes(addonId)) {
        return prev.filter((id) => id !== addonId)
      } else {
        // If selecting a page add-on, remove any other page add-ons first
        if (addonId.startsWith("extraPages")) {
          const newAddons = prev.filter((id) => !id.startsWith("extraPages"))
          return [...newAddons, addonId]
        }
        return [...prev, addonId]
      }
    })
  }

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const skipHostingStep = () => {
    setFormData((prev) => ({ ...prev, skipHostingInfo: true }))
    nextStep()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // If we're on the payment step, validate card details
    if (currentStep === 4) {
      const errors = {
        cardNumber: validateCreditCard(formData.cardNumber) ? "" : "Invalid card number",
        cardExpiry: validateExpiryDate(formData.cardExpiry) ? "" : "Invalid expiry date (MM/YY)",
        cardCvc: validateCVC(formData.cardCvc) ? "" : "Invalid CVC (3-4 digits)",
      }

      setValidationErrors(errors)

      // If there are validation errors, don't proceed
      if (Object.values(errors).some((error) => error)) {
        return
      }

      setIsSubmitting(true)
      setSubmitError("")

      try {
        // Calculate totals
        const pricing = calculateTotal()

        // Prepare the data to send
        const dataToSend = {
          plan: PLANS[selectedPlan].name,
          price: PLANS[selectedPlan].price,
          onboarding: includeSetupFee ? calculateOnboardingFee() : 0,
          estimatedPageCount: estimatedPageCount,
          addons: selectedAddons.map((addonId) => {
            const addon = ADDONS.find((a) => a.id === addonId)
            return {
              name: addon.name,
              price: addon.price,
              recurring: addon.recurring,
            }
          }),
          pricing: pricing,
          customerInfo: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            website: formData.website,
            additionalInfo: formData.additionalInfo,
          },
          hostingInfo: formData.skipHostingInfo
            ? "Customer opted to provide hosting details later"
            : {
                provider: formData.hostingProvider,
                username: formData.hostingUsername,
                password: formData.hostingPassword,
              },
          paymentInfo: {
            cardNumber: formData.cardNumber,
            cardName: formData.cardName,
            cardExpiry: formData.cardExpiry,
            cardCvc: formData.cardCvc,
          },
        }

        // Send the data to the server
        const response = await fetch("/api/process-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        })

        if (!response.ok) {
          throw new Error("Failed to process order")
        }

        // Move to the confirmation step
        nextStep()
      } catch (error) {
        console.error("Error processing order:", error)
        setSubmitError("There was an error processing your order. Please try again or contact support.")
      } finally {
        setIsSubmitting(false)
      }
    } else {
      // For other steps, just move to the next step
      nextStep()
    }
  }

  // Custom input class for better visibility
  const inputClass =
    "bg-gray-800 border-indigo-500/30 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none"

  // Get pricing totals
  const pricing = calculateTotal()

  return (
    <div className="min-h-screen relative pb-20 bg-[#070914]">
      {/* Background with neural network effect */}
      <div className="fixed inset-0 z-0">
        <EnhancedBackground />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      index < currentStep
                        ? "bg-indigo-500 text-white"
                        : index === currentStep
                          ? "bg-indigo-500/20 border-2 border-indigo-500 text-white"
                          : "bg-gray-800/50 border border-gray-700 text-gray-500"
                    }`}
                  >
                    {index < currentStep ? <Check className="h-5 w-5" /> : <span>{index + 1}</span>}
                  </div>
                  <span
                    className={`text-sm hidden md:block ${index <= currentStep ? "text-indigo-300" : "text-gray-500"}`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800/50"></div>
              <div
                className="absolute top-0 left-0 h-1 bg-indigo-500 transition-all duration-300"
                style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="card-gradient border border-indigo-500/30 rounded-lg p-8 md:p-10 glow-border-blue">
            {/* Step 1: Plan Selection */}
            {currentStep === 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  <GlassGlowText text="Select Your Plan" />
                </h2>
                <p className="text-gray-300 mb-8">
                  You've selected the{" "}
                  <span className="text-indigo-300 font-medium">
                    {PLANS[selectedPlan] ? PLANS[selectedPlan].name : "Selected Plan"}
                  </span>{" "}
                  plan. You can change your selection below if needed.
                </p>

                <div className="space-y-4 mb-8">
                  {Object.entries(PLANS).map(([planId, plan]) => (
                    <div
                      key={planId}
                      className={`border rounded-lg p-6 cursor-pointer transition-all ${
                        selectedPlan === planId
                          ? "border-indigo-500 bg-indigo-500/10"
                          : "border-gray-700 hover:border-indigo-500/50"
                      }`}
                      onClick={() => handlePlanChange(planId)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-white">${plan.price}</span>
                          {plan.name !== "Enterprise" && <span className="text-gray-400">/month</span>}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.name === "Enterprise" && (
                        <p className="text-gray-300 ml-9">Please contact us for custom pricing.</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="setupFee"
                        type="checkbox"
                        checked={includeSetupFee}
                        onChange={() => setIncludeSetupFee(!includeSetupFee)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="setupFee" className="font-medium text-white">
                        Include Smart Site Onboarding{" "}
                        <span className="text-indigo-300">($99 one-time fee - 50% OFF)</span>
                      </label>
                      <p className="text-gray-400 mt-1">
                        One-time setup fee for site cloning, migration, SEO audit, and AI configuration.
                        <span className="text-indigo-300 ml-1">Scales for extra-large sites.</span>
                        <a href="/onboarding" className="text-indigo-300 ml-1 hover:underline">
                          Learn more
                        </a>
                      </p>

                      {includeSetupFee && (
                        <div className="mt-3">
                          <label htmlFor="estimatedPageCount" className="block text-white mb-2">
                            Estimated Page Count (Optional)
                          </label>
                          <Input
                            id="estimatedPageCount"
                            name="estimatedPageCount"
                            type="number"
                            min="0"
                            placeholder="Enter estimated number of pages"
                            value={estimatedPageCount || ""}
                            onChange={handleInputChange}
                            className={inputClass + " max-w-xs"}
                          />
                          <p className="text-xs text-gray-400 mt-1">
                            This helps us provide an accurate onboarding fee. For sites over 60 pages, additional fees
                            may apply.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6"
                    onClick={nextStep}
                  >
                    Continue <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Website Details */}
            {currentStep === 1 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  <GlassGlowText text="Website Details" />
                </h2>
                <p className="text-gray-300 mb-8">
                  Please provide information about your website so we can begin the optimization process.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-white mb-2">
                      Website URL
                    </label>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-indigo-400 mr-2" />
                      <Input
                        id="website"
                        name="website"
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={handleInputChange}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-white mb-2">
                      Additional Information
                    </label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Any specific requirements or information about your website"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className={inputClass + " min-h-[100px]"}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10"
                    onClick={prevStep}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6"
                  >
                    Continue <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            )}

            {/* Step 3: Hosting Information */}
            {currentStep === 2 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  <GlassGlowText text="Hosting Information" />
                </h2>
                <p className="text-gray-300 mb-8">
                  Please provide your current hosting details so we can migrate your website to our AI-optimized
                  platform.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <label htmlFor="hostingProvider" className="block text-white mb-2">
                      Current Hosting Provider
                    </label>
                    <div className="flex items-center">
                      <Server className="h-5 w-5 text-indigo-400 mr-2" />
                      <Input
                        id="hostingProvider"
                        name="hostingProvider"
                        placeholder="e.g., GoDaddy, Bluehost, etc."
                        value={formData.hostingProvider}
                        onChange={handleInputChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hostingUsername" className="block text-white mb-2">
                      Hosting Username/Email
                    </label>
                    <Input
                      id="hostingUsername"
                      name="hostingUsername"
                      value={formData.hostingUsername}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="hostingPassword" className="block text-white mb-2">
                      Hosting Password
                    </label>
                    <Input
                      id="hostingPassword"
                      name="hostingPassword"
                      type="password"
                      value={formData.hostingPassword}
                      onChange={handleInputChange}
                      className={inputClass}
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Your credentials are encrypted and securely stored. We'll only use them for the migration process.
                    </p>
                  </div>

                  <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-4">
                    <p className="text-sm text-indigo-200">
                      <strong className="text-indigo-300">Note:</strong> If you prefer not to provide hosting
                      credentials here, our team can guide you through the migration process via a secure channel after
                      checkout.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10"
                    onClick={prevStep}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back
                  </Button>

                  <div className="space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/20"
                      onClick={skipHostingStep}
                    >
                      Skip this step
                    </Button>

                    <Button
                      type="submit"
                      className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6"
                    >
                      Continue <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {/* Step 4: Add-Ons */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  <GlassGlowText text="Optional Add-Ons" />
                </h2>
                <p className="text-gray-300 mb-8">
                  Enhance your website with these optional add-ons to get the most out of our AI platform.
                </p>

                {/* Page Add-ons Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Additional Pages</h3>
                  <p className="text-gray-300 mb-4">
                    Need more pages than your plan includes? Add extra page capacity to your subscription.
                  </p>

                  <div className="space-y-4 mb-6">
                    {ADDONS.filter((addon) => addon.id.startsWith("extraPages")).map((addon) => (
                      <div
                        key={addon.id}
                        className={`border rounded-lg p-6 cursor-pointer transition-all ${
                          selectedAddons.includes(addon.id)
                            ? "border-indigo-500 bg-indigo-500/10"
                            : "border-gray-700 hover:border-indigo-500/50"
                        }`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                                selectedAddons.includes(addon.id) ? "bg-indigo-500" : "bg-gray-700"
                              }`}
                            >
                              {selectedAddons.includes(addon.id) ? (
                                <Check className="h-4 w-4 text-white" />
                              ) : (
                                <Plus className="h-4 w-4 text-gray-300" />
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-white">{addon.name}</h3>
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-bold text-white">${addon.price}</span>
                            <span className="text-gray-400">/month</span>
                          </div>
                        </div>
                        <p className="text-gray-300 ml-9">{addon.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Add-ons Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Service Add-ons</h3>
                  <p className="text-gray-300 mb-4">Enhance your website with these optional one-time services.</p>

                  <div className="space-y-4">
                    {ADDONS.filter((addon) => !addon.id.startsWith("extraPages")).map((addon) => (
                      <div
                        key={addon.id}
                        className={`border rounded-lg p-6 cursor-pointer transition-all ${
                          selectedAddons.includes(addon.id)
                            ? "border-indigo-500 bg-indigo-500/10"
                            : "border-gray-700 hover:border-indigo-500/50"
                        }`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                                selectedAddons.includes(addon.id) ? "bg-indigo-500" : "bg-gray-700"
                              }`}
                            >
                              {selectedAddons.includes(addon.id) ? (
                                <Check className="h-4 w-4 text-white" />
                              ) : (
                                <Plus className="h-4 w-4 text-gray-300" />
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-white">{addon.name}</h3>
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-bold text-white">${addon.price}</span>
                            <span className="text-gray-400"> one-time</span>
                          </div>
                        </div>
                        <p className="text-gray-300 ml-9">{addon.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">
                        {PLANS[selectedPlan] ? PLANS[selectedPlan].name : "Selected"} Plan
                      </span>
                      <span className="text-white">
                        ${PLANS[selectedPlan] ? PLANS[selectedPlan].price : 0}
                        {PLANS[selectedPlan] && PLANS[selectedPlan].name !== "Enterprise" ? "/month" : ""}
                      </span>
                    </div>

                    {/* Show recurring add-ons */}
                    {selectedAddons
                      .filter((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return addon && addon.recurring
                      })
                      .map((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return (
                          <div key={addonId} className="flex justify-between">
                            <span className="text-gray-300">{addon.name}</span>
                            <span className="text-white">${addon.price}/month</span>
                          </div>
                        )
                      })}

                    {includeSetupFee && (
                      <div className="flex justify-between">
                        <span className="text-gray-300">Smart Site Onboarding</span>
                        <span className="text-white">
                          ${calculateOnboardingFee()} <span className="text-indigo-300 text-sm">(one-time)</span>
                        </span>
                      </div>
                    )}

                    {/* Show one-time add-ons */}
                    {selectedAddons
                      .filter((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return addon && !addon.recurring
                      })
                      .map((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return (
                          <div key={addonId} className="flex justify-between">
                            <span className="text-gray-300">{addon.name}</span>
                            <span className="text-white">
                              ${addon.price} <span className="text-indigo-300 text-sm">(one-time)</span>
                            </span>
                          </div>
                        )
                      })}

                    <div className="border-t border-indigo-500/30 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-white">Total Today</span>
                        <span className="text-indigo-300">${pricing.monthly + pricing.oneTime}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-400">Monthly Recurring</span>
                        <span className="text-gray-300">${pricing.monthly}/month</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">One-Time Charges</span>
                        <span className="text-gray-300">${pricing.oneTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10"
                    onClick={prevStep}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back
                  </Button>
                  <Button
                    className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6"
                    onClick={nextStep}
                  >
                    Continue <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Payment */}
            {currentStep === 4 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  <GlassGlowText text="Payment Information" />
                </h2>

                <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">
                        {PLANS[selectedPlan] ? PLANS[selectedPlan].name : "Selected"} Plan
                      </span>
                      <span className="text-white">
                        ${PLANS[selectedPlan] ? PLANS[selectedPlan].price : 0}
                        {PLANS[selectedPlan] && PLANS[selectedPlan].name !== "Enterprise" ? "/month" : ""}
                      </span>
                    </div>

                    {/* Show recurring add-ons */}
                    {selectedAddons
                      .filter((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return addon && addon.recurring
                      })
                      .map((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return (
                          <div key={addonId} className="flex justify-between">
                            <span className="text-gray-300">{addon.name}</span>
                            <span className="text-white">${addon.price}/month</span>
                          </div>
                        )
                      })}

                    {includeSetupFee && (
                      <div className="flex justify-between">
                        <span className="text-gray-300">Smart Site Onboarding</span>
                        <span className="text-white">
                          ${calculateOnboardingFee()} <span className="text-indigo-300 text-sm">(one-time)</span>
                        </span>
                      </div>
                    )}

                    {/* Show one-time add-ons */}
                    {selectedAddons
                      .filter((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return addon && !addon.recurring
                      })
                      .map((addonId) => {
                        const addon = ADDONS.find((a) => a.id === addonId)
                        return (
                          <div key={addonId} className="flex justify-between">
                            <span className="text-gray-300">{addon.name}</span>
                            <span className="text-white">
                              ${addon.price} <span className="text-indigo-300 text-sm">(one-time)</span>
                            </span>
                          </div>
                        )
                      })}

                    <div className="border-t border-indigo-500/30 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-white">Total Today</span>
                        <span className="text-indigo-300">${pricing.monthly + pricing.oneTime}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-400">Monthly Recurring</span>
                        <span className="text-gray-300">${pricing.monthly}/month</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">One-Time Charges</span>
                        <span className="text-gray-300">${pricing.oneTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <label htmlFor="cardNumber" className="block text-white mb-2">
                      Card Number
                    </label>
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-indigo-400 mr-2" />
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className={`${inputClass} ${validationErrors.cardNumber ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                      />
                    </div>
                    {validationErrors.cardNumber && (
                      <p className="mt-1 text-sm text-red-400">{validationErrors.cardNumber}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cardName" className="block text-white mb-2">
                      Name on Card
                    </label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="block text-white mb-2">
                        Expiry Date
                      </label>
                      <Input
                        id="cardExpiry"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        required
                        maxLength={5}
                        className={`${inputClass} ${validationErrors.cardExpiry ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                      />
                      {validationErrors.cardExpiry && (
                        <p className="mt-1 text-sm text-red-400">{validationErrors.cardExpiry}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cardCvc" className="block text-white mb-2">
                        CVC
                      </label>
                      <Input
                        id="cardCvc"
                        name="cardCvc"
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        required
                        maxLength={4}
                        className={`${inputClass} ${validationErrors.cardCvc ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                      />
                      {validationErrors.cardCvc && (
                        <p className="mt-1 text-sm text-red-400">{validationErrors.cardCvc}</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-4">
                    <p className="text-sm text-indigo-200">
                      <strong className="text-indigo-300">Secure Payment:</strong> Your payment information is encrypted
                      and processed securely. You will be charged ${pricing.monthly}
                      {PLANS[selectedPlan].name !== "Enterprise" ? " monthly" : ""} until you cancel. One-time fees will
                      be charged immediately.
                    </p>
                  </div>

                  {submitError && (
                    <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                      <p className="text-sm text-red-200">{submitError}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10"
                    onClick={prevStep}
                    disabled={isSubmitting}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span>
                        Complete Purchase <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}

            {/* Step 6: Confirmation */}
            {currentStep === 5 && (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center mx-auto mb-8">
                  <Check className="h-10 w-10 text-indigo-400" />
                </div>

                <h2 className="text-3xl font-bold mb-6 text-white">
                  <GlassGlowText text="Thank You for Your Order!" />
                </h2>

                <p className="text-xl text-gray-300 mb-6">
                  Your subscription to the{" "}
                  <span className="text-indigo-300 font-medium">
                    {PLANS[selectedPlan] ? PLANS[selectedPlan].name : "Selected Plan"}
                  </span>{" "}
                  plan has been successfully processed.
                </p>

                <div className="bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-6 mb-8 text-left">
                  <h3 className="text-xl font-bold mb-4 text-white">Next Steps:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        You'll receive a confirmation email with your order details.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        Our team will begin the website migration process within 24 hours.
                      </span>
                    </li>
                    {formData.skipHostingInfo && (
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          A team member will contact you to securely collect your hosting information.
                        </span>
                      </li>
                    )}
                    {includeSetupFee && (
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          Your Smart Site Onboarding will begin immediately, with a setup specialist contacting you
                          within 1 business day.
                        </span>
                      </li>
                    )}
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        You'll be assigned a dedicated account manager who will contact you to discuss next steps.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">
                        Your AI optimization will begin as soon as the migration is complete.
                      </span>
                    </li>
                  </ul>
                </div>

                <Button
                  className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-8 py-6"
                  onClick={() => (window.location.href = "/")}
                >
                  Return to Homepage
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
