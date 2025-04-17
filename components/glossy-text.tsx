"use client"

import { useEffect, useRef } from "react"

interface GlossyTextProps {
  text: string
  className?: string
}

export default function GlossyText({ text, className = "" }: GlossyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing content
    container.innerHTML = ""

    // Create the glass text element
    const glassText = document.createElement("div")
    glassText.className = "glass-text"
    glassText.textContent = text
    glassText.setAttribute("data-text", text)

    // Add a very thin outline/glow effect
    glassText.style.textShadow = "0 0 1px rgba(255, 255, 255, 0.7), 0 0 2px rgba(92, 108, 245, 0.5)"

    // Add a subtle text stroke for the outline effect
    glassText.style.webkitTextStroke = "0.2px rgba(92, 108, 245, 0.3)"

    container.appendChild(glassText)
  }, [text])

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text}
    </div>
  )
}
