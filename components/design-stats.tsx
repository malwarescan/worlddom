import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface Stat {
  value: string
  label: string
  icon?: ReactNode
}

interface DesignStatsProps {
  stats: Stat[]
  className?: string
  variant?: "default" | "minimal"
}

export function DesignStats({ stats, className, variant = "default" }: DesignStatsProps) {
  const variantStyles = {
    default: "bg-white border border-gray-100 rounded-xl p-8",
    minimal: "bg-transparent p-4",
  }

  const valueStyles = {
    default: "text-3xl font-bold text-black",
    minimal: "text-3xl font-bold text-black",
  }

  const labelStyles = {
    default: "text-sm text-gray-500",
    minimal: "text-sm text-gray-500",
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {stats.map((stat, i) => (
        <div key={i} className={variantStyles[variant]}>
          <div className="flex flex-col items-center text-center">
            {stat.icon && <div className="mb-4">{stat.icon}</div>}
            <p className={valueStyles[variant]}>{stat.value}</p>
            <p className={labelStyles[variant]}>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
