"use client"

import { useEffect, useRef } from "react"

export default function CosmicElement() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 200
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create static stars
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
    }))

    // Draw the cosmic element
    const drawElement = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient - making it more transparent
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(92, 108, 245, 0.05)") // More transparent
      gradient.addColorStop(1, "rgba(139, 92, 246, 0.15)") // More transparent

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)" // Slightly more transparent
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Draw once
    drawElement()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Change to a lower z-index to ensure it stays behind all content
  // Use a wrapper div with a dark background to prevent white overlay
  return (
    <div className="fixed bottom-0 left-0 w-full h-[200px] z-[-20] bg-black/50">
      <canvas ref={canvasRef} className="w-full h-full pointer-events-none" aria-hidden="true" />
    </div>
  )
}
