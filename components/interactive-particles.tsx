"use client"

import { useEffect, useRef, useState } from "react"

interface InteractiveParticlesProps {
  count?: number
  color?: string
  speed?: number
  size?: number
  maxDistance?: number
  className?: string
}

export default function InteractiveParticles({
  count = 50,
  color = "#5c6cf5",
  speed = 0.5,
  size = 1.5,
  maxDistance = 150,
  className = "",
}: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      originalSize: number
    }>
  >([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height

      // Reinitialize particles on resize
      initializeParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => {
      setIsMouseInCanvas(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInCanvas(false)
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Initial setup
    handleResize()

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize particles
    const initializeParticles = () => {
      const particles = []
      const actualCount = Math.min(count, Math.floor((canvas.width * canvas.height) / 10000))

      for (let i = 0; i < actualCount; i++) {
        const particleSize = Math.random() * size + size / 2
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: particleSize,
          originalSize: particleSize,
        })
      }

      particlesRef.current = particles
    }

    // Animation function
    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Reset size if mouse is not in canvas
        if (!isMouseInCanvas) {
          particle.size = particle.originalSize
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Mouse interaction
        if (isMouseInCanvas) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Increase size when near mouse
            particle.size = particle.originalSize * (1 + (maxDistance - distance) / maxDistance)

            // Draw connections between nearby particles
            for (let j = i + 1; j < particlesRef.current.length; j++) {
              const otherParticle = particlesRef.current[j]
              const dx2 = particle.x - otherParticle.x
              const dy2 = particle.y - otherParticle.y
              const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

              if (distance2 < maxDistance / 2) {
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                const opacity = (1 - distance2 / (maxDistance / 2)) * 0.5
                ctx.strokeStyle = color.replace(")", `, ${opacity})`)
                ctx.stroke()
              }
            }
          }
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [count, color, speed, size, maxDistance, isMouseInCanvas, mousePosition])

  return <canvas ref={canvasRef} className={`${className} pointer-events-auto`} aria-hidden="true" />
}

