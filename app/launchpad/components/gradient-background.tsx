"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
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

    // Create gradient points
    const gradientPoints = []
    for (let i = 0; i < 5; i++) {
      gradientPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 100,
        color: [
          Math.floor(Math.random() * 100) + 50,
          Math.floor(Math.random() * 100) + 50,
          Math.floor(Math.random() * 255),
        ],
        speed: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
      })
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with a slight fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw gradient points
      gradientPoints.forEach((point) => {
        // Move point
        point.x += point.speed.x
        point.y += point.speed.y

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.speed.x *= -1
        if (point.y < 0 || point.y > canvas.height) point.speed.y *= -1

        // Draw gradient
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)
        gradient.addColorStop(0, `rgba(${point.color[0]}, ${point.color[1]}, ${point.color[2]}, 0.2)`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
