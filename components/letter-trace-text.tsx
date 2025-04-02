"use client"

import { useEffect, useRef } from "react"

interface LetterTraceTextProps {
  text: string
  className?: string
}

export default function LetterTraceText({ text, className = "" }: LetterTraceTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing content
    container.innerHTML = ""

    // Create a span for each letter with its own animation delay
    text.split("").forEach((letter, index) => {
      const span = document.createElement("span")
      span.className = "letter-trace"
      span.textContent = letter
      span.setAttribute("data-letter", letter)
      span.style.setProperty("--index", index.toString())
      container.appendChild(span)
    })
  }, [text])

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text}
    </div>
  )
}

