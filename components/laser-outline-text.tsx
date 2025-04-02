"use client"

import { useEffect, useRef } from "react"

interface LaserOutlineTextProps {
  text: string
  className?: string
}

export default function LaserOutlineText({ text, className = "" }: LaserOutlineTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This effect runs after the component mounts
    const container = containerRef.current
    if (!container) return

    // Create the laser outline effect
    const laserElement = document.createElement("div")
    laserElement.className = "laser-outline-effect"
    container.appendChild(laserElement)

    return () => {
      // Clean up when component unmounts
      if (container.contains(laserElement)) {
        container.removeChild(laserElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`laser-outline-text relative inline-block ${className}`} data-text={text}>
      {text}
    </div>
  )
}

