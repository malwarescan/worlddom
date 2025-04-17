import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

export default function ResponsiveContainer({ children, className, maxWidth = "xl" }: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  }

  return (
    <div className={cn("w-full px-4 sm:px-6 md:px-8 mx-auto overflow-x-hidden", maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  )
}
