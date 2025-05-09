import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

interface DesignFeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  link?: {
    text: string
    href: string
  }
  className?: string
  variant?: "default" | "featured" | "minimal"
}

export function DesignFeatureCard({
  title,
  description,
  icon,
  link,
  className,
  variant = "default",
}: DesignFeatureCardProps) {
  const variantStyles = {
    default: "bg-white border border-gray-100 hover:border-gray-200",
    featured: "bg-black text-white",
    minimal: "bg-transparent hover:bg-gray-50",
  }

  const iconStyles = {
    default: "text-black",
    featured: "text-white",
    minimal: "text-black",
  }

  const titleStyles = {
    default: "text-black",
    featured: "text-white",
    minimal: "text-black",
  }

  const descriptionStyles = {
    default: "text-gray-600",
    featured: "text-gray-300",
    minimal: "text-gray-600",
  }

  const linkStyles = {
    default: "text-black hover:text-gray-700",
    featured: "text-white hover:text-gray-200",
    minimal: "text-black hover:text-gray-700",
  }

  return (
    <div className={cn("rounded-xl p-8 transition-all duration-300", variantStyles[variant], className)}>
      {icon && <div className={cn("mb-6", iconStyles[variant])}>{icon}</div>}

      <h3 className={cn("text-xl font-bold mb-3", titleStyles[variant])}>{title}</h3>

      <p className={cn("mb-6 text-base leading-relaxed", descriptionStyles[variant])}>{description}</p>

      {link && (
        <Link
          href={link.href}
          className={cn("inline-flex items-center text-sm font-medium transition-colors", linkStyles[variant])}
        >
          {link.text} <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )
}
