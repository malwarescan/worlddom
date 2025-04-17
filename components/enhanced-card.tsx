"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface EnhancedCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "purple" | "blue" | "teal"
  glowIntensity?: "low" | "medium" | "high"
  hoverEffect?: boolean
  onClick?: () => void
}

export default function EnhancedCard({
  children,
  className = "",
  variant = "default",
  glowIntensity = "medium",
  hoverEffect = true,
  onClick,
}: EnhancedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Base classes
  const baseClasses = "card-gradient border rounded-lg shadow-lg transition-all duration-300"

  // Variant classes
  let variantClasses = "border-neutral-200 dark:border-neutral-800"
  let glowClasses = ""

  // Set variant-specific classes
  switch (variant) {
    case "purple":
      variantClasses =
        isHovered && hoverEffect
          ? "border-purple-400 dark:border-purple-500"
          : "border-neutral-200 dark:border-neutral-800"
      glowClasses = "glow-border-purple"
      break
    case "blue":
      variantClasses =
        isHovered && hoverEffect ? "border-blue-400 dark:border-blue-500" : "border-neutral-200 dark:border-neutral-800"
      glowClasses = "glow-border-blue"
      break
    case "teal":
      variantClasses =
        isHovered && hoverEffect ? "border-teal-400 dark:border-teal-500" : "border-neutral-200 dark:border-neutral-800"
      glowClasses = "glow-border-teal"
      break
    default:
      variantClasses =
        isHovered && hoverEffect ? "border-blue-400 dark:border-blue-500" : "border-neutral-200 dark:border-neutral-800"
      glowClasses = "glow-border"
  }

  // Set glow intensity
  let intensityClasses = ""
  if (isHovered && hoverEffect) {
    switch (glowIntensity) {
      case "low":
        intensityClasses = "shadow-md"
        break
      case "high":
        intensityClasses = "shadow-xl"
        break
      default:
        intensityClasses = "shadow-lg"
    }
  }

  return (
    <div
      className={cn(baseClasses, variantClasses, glowClasses, intensityClasses, hoverEffect && "hover-glow", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transform: isHovered && hoverEffect ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      {children}
    </div>
  )
}
