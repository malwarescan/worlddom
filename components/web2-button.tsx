import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface Web2ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "orange"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Web2Button({ children, color = "blue", size = "md", className, ...props }: Web2ButtonProps) {
  const colorMap = {
    blue: "bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white",
    green: "bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white",
    red: "bg-gradient-to-b from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white",
    yellow: "bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-gray-800",
    purple: "bg-gradient-to-b from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white",
    orange: "bg-gradient-to-b from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white",
  }

  const sizeMap = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  }

  return (
    <button
      className={cn(
        "font-bold rounded-md border-2 border-white shadow-md relative overflow-hidden transition-transform hover:scale-105 active:scale-95",
        colorMap[color],
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {/* Glossy overlay */}
      <span className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30 pointer-events-none"></span>
      {children}
    </button>
  )
}
