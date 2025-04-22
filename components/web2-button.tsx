"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface Web2ButtonProps {
  children: React.ReactNode
  variant?: "blue" | "green" | "orange" | "purple" | "red" | "yellow"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function Web2Button({
  children,
  variant = "blue",
  size = "md",
  href,
  onClick,
  className,
  disabled = false,
}: Web2ButtonProps) {
  // Color variants
  const colorStyles = {
    blue: "bg-gradient-to-b from-blue-400 to-blue-600 text-white border-blue-300 hover:from-blue-500 hover:to-blue-700",
    green:
      "bg-gradient-to-b from-green-400 to-green-600 text-white border-green-300 hover:from-green-500 hover:to-green-700",
    orange:
      "bg-gradient-to-b from-orange-400 to-orange-600 text-white border-orange-300 hover:from-orange-500 hover:to-orange-700",
    purple:
      "bg-gradient-to-b from-purple-400 to-purple-600 text-white border-purple-300 hover:from-purple-500 hover:to-purple-700",
    red: "bg-gradient-to-b from-red-400 to-red-600 text-white border-red-300 hover:from-red-500 hover:to-red-700",
    yellow:
      "bg-gradient-to-b from-yellow-400 to-yellow-600 text-white border-yellow-300 hover:from-yellow-500 hover:to-yellow-700",
  }

  // Size variants
  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  }

  // Base styles for the chunky Web 2.0 look
  const baseStyles = `
    font-bold rounded-lg border-2 border-white shadow-md 
    inline-flex items-center justify-center
    relative overflow-hidden
    transition-all duration-200 transform hover:-translate-y-1
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  // Combined styles
  const buttonStyles = cn(baseStyles, colorStyles[variant], sizeStyles[size], className)

  const content = (
    <>
      {/* Glossy overlay effect */}
      <span className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-40"></span>
      <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-30"></span>
      <span className="absolute bottom-0 left-0 right-0 h-1/4 bg-black opacity-10"></span>

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonStyles} disabled={disabled}>
      {content}
    </button>
  )
}
