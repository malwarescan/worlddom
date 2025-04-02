"use client"

import { useEffect, useRef } from "react"

interface GlassGlowTextProps {
  text: string
  className?: string
}

export default function GlassGlowText({ text, className = "" }: GlassGlowTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing content
    container.innerHTML = ""

    // Create the main text with gradient
    const textElement = document.createElement("div")
    textElement.className =
      "relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 whitespace-nowrap"
    textElement.textContent = text
    container.appendChild(textElement)

    // Create the shine effect overlay
    const shineElement = document.createElement("div")
    shineElement.className = "absolute inset-0 shine-effect"
    container.appendChild(shineElement)

    // Create the glow effect
    const glowElement = document.createElement("div")
    glowElement.className = "absolute inset-0 glow-effect"
    glowElement.textContent = text
    container.appendChild(glowElement)
  }, [text])

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {text}
    </div>
  )
}

