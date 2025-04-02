"use client"

import { useEffect, useRef } from "react"

export default function SpaceBackground() {
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
    const nodeCount = 100
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      connections: [] as number[],
    }))

    // Establish connections between nodes
    nodes.forEach((node, index) => {
      // Each node connects to 2-4 other nodes
      const connectionCount = Math.floor(Math.random() * 3) + 2

      // Find the closest nodes to connect to
      const distances: { index: number; distance: number }[] = []

      for (let i = 0; i < nodes.length; i++) {
        if (i !== index) {
          const dx = node.x - nodes[i].x
          const dy = node.y - nodes[i].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          distances.push({ index: i, distance })
        }
      }

      // Sort by distance and take the closest ones
      distances.sort((a, b) => a.distance - b.distance)

      // Connect to the closest nodes
      for (let i = 0; i < Math.min(connectionCount, distances.length); i++) {
        node.connections.push(distances[i].index)
      }
    })

    // Animation loop
    const animate = () => {
      // Clear canvas with a dark blue background
      ctx.fillStyle = "#070b1a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections first (so they appear behind nodes)
      ctx.strokeStyle = "rgba(100, 150, 255, 0.15)"
      ctx.lineWidth = 0.5

      nodes.forEach((node, index) => {
        node.connections.forEach((connectedIndex) => {
          const connectedNode = nodes[connectedIndex]

          // Calculate distance for opacity
          const dx = node.x - connectedNode.x
          const dy = node.y - connectedNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw connections within a certain distance
          const maxConnectionDistance = 200
          if (distance < maxConnectionDistance) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / maxConnectionDistance) * 0.2

            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw and update nodes
      nodes.forEach((node) => {
        // Draw node
        ctx.beginPath()
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
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

