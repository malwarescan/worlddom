"use client"

import { useEffect, useRef } from "react"

export default function EnhancedNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Get context
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create nodes
    const nodeCount = 120
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      // Add properties for pulsing effect
      pulseSize: 0,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseDirection: 1,
      maxPulse: Math.random() * 3 + 2,
    }))

    // Animation loop
    const animate = () => {
      // Clear canvas with a dark blue background
      ctx.fillStyle = "#070b1a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw connections within a certain distance
          if (distance < 150) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / 150) * 0.2

            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw and update nodes
      nodes.forEach((node) => {
        // Update pulse effect
        node.pulseSize += node.pulseSpeed * node.pulseDirection
        if (node.pulseSize > node.maxPulse || node.pulseSize < 0) {
          node.pulseDirection *= -1
        }

        // Draw node glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size + node.pulseSize)
        gradient.addColorStop(0, "rgba(100, 150, 255, 0.8)")
        gradient.addColorStop(0.5, "rgba(100, 150, 255, 0.3)")
        gradient.addColorStop(1, "rgba(100, 150, 255, 0)")

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(node.x, node.y, node.size + node.pulseSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw node core
        ctx.beginPath()
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.arc(node.x, node.y, node.size * 0.5, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })

      // Request next frame
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true" />
  )
}
