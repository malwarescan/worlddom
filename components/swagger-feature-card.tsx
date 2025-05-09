import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface SwaggerFeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  link?: {
    text: string
    href: string
  }
  className?: string
  variant?: "default" | "accent" | "dark"
}

export function SwaggerFeatureCard({
  title,
  description,
  icon,
  link,
  className,
  variant = "default",
}: SwaggerFeatureCardProps) {
  const variantStyles = {
    default: "bg-white border border-gray-200 hover:border-gray-300",
    accent: "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-200",
    dark: "bg-gray-900 border border-gray-800 text-white hover:border-gray-700",
  }

  const iconStyles = {
    default: "bg-gray-100 text-blue-600",
    accent: "bg-blue-100 text-blue-600",
    dark: "bg-gray-800 text-blue-400",
  }

  const titleStyles = {
    default: "text-black",
    accent: "text-black",
    dark: "text-white",
  }

  const descriptionStyles = {
    default: "text-gray-600",
    accent: "text-gray-600",
    dark: "text-gray-300",
  }

  const linkStyles = {
    default: "text-blue-600 hover:text-blue-700",
    accent: "text-blue-600 hover:text-blue-700",
    dark: "text-blue-400 hover:text-blue-300",
  }

  return (
    <div
      className={cn(
        "rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group",
        variantStyles[variant],
        className,
      )}
    >
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", iconStyles[variant])}>
        {icon}
      </div>

      <h3 className={cn("text-xl font-bold mb-3", titleStyles[variant])}>{title}</h3>

      <p className={cn("mb-6", descriptionStyles[variant])}>{description}</p>

      {link && (
        <Link
          href={link.href}
          className={cn("inline-flex items-center font-medium transition-colors", linkStyles[variant])}
        >
          {link.text} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )
}
