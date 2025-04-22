import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface Web2BadgeProps {
  children: ReactNode
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "orange"
  className?: string
}

export function Web2Badge({ children, color = "blue", className }: Web2BadgeProps) {
  const colorMap = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-400 text-gray-800",
    purple: "bg-purple-500 text-white",
    orange: "bg-orange-500 text-white",
  }

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full font-bold text-sm border-2 border-white shadow-sm",
        colorMap[color],
        className,
      )}
    >
      {children}
    </span>
  )
}
