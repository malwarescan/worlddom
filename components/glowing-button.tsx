"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface GlowingButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

export default function GlowingButton({ href, children, className = "", variant = "primary" }: GlowingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const primaryClasses = `
    px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-md hover:opacity-90 transition-all flex items-center justify-center shadow-lg shadow-blue-500/20 group relative overflow-hidden z-20
  `

  const secondaryClasses = `
    px-8 py-3 border border-blue-500/30 rounded-md hover:bg-blue-500/10 transition-colors flex items-center justify-center text-blue-100 z-20 relative overflow-hidden
  `

  const baseClasses = variant === "primary" ? primaryClasses : secondaryClasses

  return (
    <Link
      href={href}
      className={`${baseClasses} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      {isHovered && (
        <div className={`absolute inset-0 ${variant === "primary" ? "bg-white/10" : "bg-blue-500/10"} rounded-md`} />
      )}

      {/* Background animation for primary variant */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children} {variant === "primary" && <ChevronRight className="ml-2 w-4 h-4 text-white" />}
      </span>
    </Link>
  )
}
