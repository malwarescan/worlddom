"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import GlassGlowText from "@/components/glass-glow-text"

export default function AgenticHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = 500
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `hsl(${Math.random() * 60 + 200}, 100%, 50%)`
        this.alpha = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(100, window.innerWidth / 10)

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.lineWidth = 0.3
      ctx.strokeStyle = "rgba(100, 150, 255, 0.2)"

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.globalAlpha = 0.2 * (1 - distance / 100)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950 to-black"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="mb-6">
          <GlassGlowText text="AGENTIC SEARCH" className="text-4xl md:text-6xl font-bold mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            The Future of AI-Powered Information Discovery
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Harness the power of autonomous AI agents that can search, analyze, and act on information across your
            enterprise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-md hover:opacity-90 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center"
          >
            GET STARTED <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/blog/agentic-search-revolutionizing-business-efficiency"
            className="px-6 py-3 bg-transparent border border-blue-400 text-blue-100 font-medium rounded-md hover:bg-blue-900/20 transition-all flex items-center justify-center"
          >
            LEARN MORE <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="bg-blue-900/30 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30 max-w-2xl">
          <p className="text-blue-100 italic">
            "Agentic Search is revolutionizing how businesses discover and utilize information, creating a 10x
            improvement in knowledge worker productivity."
          </p>
        </div>
      </div>
    </div>
  )
}

