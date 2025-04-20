"use client"

import { useEffect, useRef } from "react"

export default function HexBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Hex grid properties
    const hexSize = 40
    const hexHeight = hexSize * Math.sqrt(3)
    const hexWidth = hexSize * 2
    const hexVerticalSpacing = hexHeight
    const hexHorizontalSpacing = hexWidth * 0.75

    // Animation properties
    let time = 0

    // Draw a single hexagon
    const drawHexagon = (x: number, y: number, size: number, color: string) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const xPos = x + size * Math.cos(angle)
        const yPos = y + size * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(xPos, yPos)
        } else {
          ctx.lineTo(xPos, yPos)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / hexHorizontalSpacing) + 2
      const rows = Math.ceil(canvas.height / hexVerticalSpacing) + 2

      // Draw hex grid
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * hexHorizontalSpacing + (row % 2 === 0 ? 0 : hexHorizontalSpacing / 2)
          const y = row * hexVerticalSpacing

          // Calculate distance from center for color variation
          const centerX = canvas.width / 2
          const centerY = canvas.height / 2
          const dx = x - centerX
          const dy = y - centerY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Pulse effect
          const pulse = Math.sin(time + distance * 0.01) * 0.5 + 0.5
          const alpha = 0.05 + pulse * 0.1

          // Color based on position
          const hue = (distance * 0.1 + time * 20) % 360
          const color = `hsla(${hue}, 70%, 60%, ${alpha})`

          drawHexagon(x, y, hexSize, color)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
