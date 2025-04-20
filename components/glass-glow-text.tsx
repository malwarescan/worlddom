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
    textElement.className = "relative z-10 text-transparent bg-clip-text whitespace-nowrap"
    textElement.style.backgroundImage = "linear-gradient(to right, #4b5563, #1f2937, #4b5563)"
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
    glowElement.style.textShadow = "0 0 10px rgba(75, 85, 99, 0.5)"
    glowElement.style.webkitTextStroke = "0.2px rgba(75, 85, 99, 0.3)"
    container.appendChild(glowElement)
  }, [text])

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {text}
    </div>
  )
}
