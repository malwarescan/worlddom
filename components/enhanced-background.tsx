"use client"

import { useEffect, useRef } from "react"

interface EnhancedBackgroundProps {
  variant?: "default" | "purple" | "blue" | "teal"
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
  interactive?: boolean
}

export default function EnhancedBackground({
  variant = "default",
  density = "medium",
  speed = "medium",
  interactive = true,
}: EnhancedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Set colors based on variant
    let primaryColor: string
    let secondaryColor: string

    switch (variant) {
      case "purple":
        primaryColor = "rgba(139, 92, 246, 0.2)"
        secondaryColor = "rgba(139, 92, 246, 0.05)"
        break
      case "blue":
        primaryColor = "rgba(59, 130, 246, 0.2)"
        secondaryColor = "rgba(59, 130, 246, 0.05)"
        break
      case "teal":
        primaryColor = "rgba(20, 184, 166, 0.2)"
        secondaryColor = "rgba(20, 184, 166, 0.05)"
        break
      default:
        primaryColor = "rgba(92, 108, 245, 0.2)"
        secondaryColor = "rgba(92, 108, 245, 0.05)"
    }

    // Set particle count based on density
    let particleCount: number
    switch (density) {
      case "low":
        particleCount = 50
        break
      case "high":
        particleCount = 150
        break
      default:
        particleCount = 100
    }

    // Set animation speed based on speed prop
    let animationSpeed: number
    switch (speed) {
      case "slow":
        animationSpeed = 0.2
        break
      case "fast":
        animationSpeed = 0.8
        break
      default:
        animationSpeed = 0.5
    }

    // Create particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * animationSpeed,
      vy: (Math.random() - 0.5) * animationSpeed,
      color: Math.random() > 0.8 ? primaryColor : secondaryColor,
    }))

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return

      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Interactive mouse effect
        if (mouseRef.current.active && interactive) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            // Draw connections to mouse
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
            const opacity = (1 - distance / maxDistance) * 0.2
            ctx.strokeStyle = primaryColor.replace("0.2", opacity.toString())
            ctx.stroke()

            // Draw connections between nearby particles
            for (let j = i + 1; j < particles.length; j++) {
              const otherParticle = particles[j]
              const dx2 = particle.x - otherParticle.x
              const dy2 = particle.y - otherParticle.y
              const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

              if (distance2 < 80) {
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                const opacity = (1 - distance2 / 80) * 0.15
                ctx.strokeStyle = primaryColor.replace("0.2", opacity.toString())
                ctx.stroke()
              }
            }
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [variant, density, speed, interactive])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-[-1] pointer-events-auto" aria-hidden="true" />
  )
}
