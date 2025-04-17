import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingTierProps {
  name: string
  price: number
  description: string
  features: string[]
  idealFor: string
  ctaText: string
  ctaLink: string
  popular?: boolean
}

export default function PricingTier({
  name,
  price,
  description,
  features,
  idealFor,
  ctaText,
  ctaLink,
  popular = false,
}: PricingTierProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${
        popular ? "border-2 border-indigo-500 shadow-lg shadow-indigo-500/20" : "border border-gray-800"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="bg-gray-900/80 backdrop-blur-sm p-6 h-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{name}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl sm:text-4xl font-bold text-white">${price}</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          <p className="text-gray-300 text-sm sm:text-base">{description}</p>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <p className="text-gray-400 text-sm mb-4">
            <span className="font-medium">Ideal for:</span> {idealFor}
          </p>
          <Link href={ctaLink}>
            <Button
              className={`w-full ${
                popular ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
