"use client"

import { useEffect, useRef } from "react"

interface StreamingOutlineTextProps {
  text: string
  className?: string
}

export default function StreamingOutlineText({ text, className = "" }: StreamingOutlineTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing content
    container.innerHTML = ""

    // Create a wrapper to ensure single line
    const wrapper = document.createElement("div")
    wrapper.className = "flex justify-center whitespace-nowrap"
    container.appendChild(wrapper)

    // Create a span for each letter with streaming outline effect
    text.split("").forEach((letter, index) => {
      if (letter === " ") {
        // Handle spaces
        const space = document.createElement("span")
        space.innerHTML = "&nbsp;"
        space.className = "mx-1"
        wrapper.appendChild(space)
        return
      }

      const letterContainer = document.createElement("div")
      letterContainer.className = "relative inline-block"

      // Main visible letter with gradient
      const mainLetter = document.createElement("span")
      mainLetter.textContent = letter
      mainLetter.className =
        "relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"
      letterContainer.appendChild(mainLetter)

      // Create the streaming outline effect
      const outlineElement = document.createElement("span")
      outlineElement.textContent = letter
      outlineElement.className = "streaming-outline absolute top-0 left-0"
      outlineElement.style.setProperty("--index", index.toString())
      letterContainer.appendChild(outlineElement)

      wrapper.appendChild(letterContainer)
    })
  }, [text])

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text}
    </div>
  )
}

