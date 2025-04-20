"use client"

import { useEffect, useRef } from "react"

export default function HexGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawHexGrid()
    }

    const drawHexagon = (x: number, y: number, size: number, color: string) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
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
      ctx.lineWidth = 1
      ctx.stroke()
    }

    const drawHexGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const hexSize = 30
      const hexHeight = hexSize * Math.sqrt(3)
      const hexWidth = hexSize * 2
      const columns = Math.ceil(canvas.width / (hexWidth * 0.75)) + 1
      const rows = Math.ceil(canvas.height / hexHeight) + 1

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const x = col * hexWidth * 0.75
          const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2)

          // Randomize colors for a more dynamic effect
          const opacity = Math.random() * 0.1 + 0.05
          const hue = Math.random() > 0.7 ? 270 : Math.random() > 0.5 ? 210 : 170
          const color = `hsla(${hue}, 70%, 60%, ${opacity})`

          drawHexagon(x, y, hexSize, color)
        }
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
