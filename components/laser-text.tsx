"use client"

import { useEffect, useRef } from "react"

interface LaserTextProps {
  text: string
  className?: string
}

export default function LaserText({ text, className = "" }: LaserTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing spans
    container.innerHTML = ""

    // Create a span for each character with its own animation delay
    text.split("").forEach((char, index) => {
      const span = document.createElement("span")
      span.textContent = char
      span.className = "laser-glow"
      span.style.setProperty("--char-index", index.toString())
      container.appendChild(span)
    })

    // Add the streaming laser effect to the container
    container.classList.add("laser-stream")
  }, [text])

  return (
    <div ref={containerRef} className={`laser-text inline-block ${className}`} data-text={text}>
      {text}
    </div>
  )
}
