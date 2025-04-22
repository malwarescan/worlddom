import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Web2ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "green" | "orange" | "purple" | "red"
  size?: "sm" | "md" | "lg"
  href?: string
  className?: string
  children: React.ReactNode
}

export function Web2Button({ variant = "blue", size = "md", href, className, children, ...props }: Web2ButtonProps) {
  // Color variants
  const colorStyles = {
    blue: "bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white border-blue-300",
    green:
      "bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white border-green-300",
    orange:
      "bg-gradient-to-b from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white border-orange-300",
    purple:
      "bg-gradient-to-b from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white border-purple-300",
    red: "bg-gradient-to-b from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white border-red-300",
  }

  // Size variants
  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  }

  // Base styles for the chunky Web 2.0 look
  const baseStyles = `
    font-bold rounded-md border-2 border-white shadow-md 
    transition-all active:translate-y-0.5 active:shadow-sm
    relative overflow-hidden
  `

  // Combined styles
  const buttonStyles = cn(baseStyles, colorStyles[variant], sizeStyles[size], className)

  // Glossy overlay effect
  const glossyOverlay = (
    <>
      <span className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-40"></span>
      <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-30 rounded-t-sm"></span>
      <span className="absolute bottom-0 left-0 right-0 h-1/4 bg-black opacity-10"></span>
    </>
  )

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {glossyOverlay}
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <button className={buttonStyles} {...props}>
      {glossyOverlay}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
