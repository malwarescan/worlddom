"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SparkButton from "@/components/spark-button"
import { useEffect, useRef, useState } from "react"

interface SparklyParticle {
  id: number
  x: number
  y: number
  size: number
  color: string
  life: number
  maxLife: number
  velocity: { x: number; y: number }
  character?: string
  isText?: boolean
  opacity?: number
  trailEffect?: boolean
}

export default function ViontraHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<SparklyParticle[]>([])
  const nextIdRef = useRef(0)
  const throttleRef = useRef(false)
  const isHoveringRef = useRef(false)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const cursorPositionRef = useRef({ x: 0, y: 0 })

  // Data characters for the flowing effect
  const dataChars = [
    "0",
    "1",
    ">",
    "<",
    "/",
    "\\",
    "{",
    "}",
    "[",
    "]",
    "=",
    "+",
    "-",
    "*",
    "&",
    "%",
    "$",
    "#",
    "@",
    "!",
  ]

  // Handle mouse movement and particle creation
  useEffect(() => {
    if (!heroRef.current) return

    const heroElement = heroRef.current

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoveringRef.current) return

      // Get mouse position relative to the hero section
      const x = e.clientX
      const y = e.clientY
      cursorPositionRef.current = { x, y }

      // Calculate movement direction for better particle flow
      const dx = x - lastPositionRef.current.x
      const dy = y - lastPositionRef.current.y

      // Only update last position and create particles if there's significant movement
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        lastPositionRef.current = { x, y }

        // Don't throttle as much for smoother effect
        if (!throttleRef.current) {
          createDataFlowParticles(x, y, dx, dy)
          throttleRef.current = true
          setTimeout(() => {
            throttleRef.current = false
          }, 20) // Reduced throttle time
        }
      }
    }

    const createDataFlowParticles = (x: number, y: number, dx: number, dy: number) => {
      const newParticles: SparklyParticle[] = []
      // Create more particles for a denser effect
      const particleCount = Math.floor(Math.random() * 4) + 3 // 3-6 particles

      // Calculate the angle of movement
      const moveAngle = Math.atan2(dy, dx)

      for (let i = 0; i < particleCount; i++) {
        // Create particles that flow behind the cursor
        // Bias the angle to be opposite the direction of movement
        const oppositeAngle = moveAngle + Math.PI + ((Math.random() - 0.5) * Math.PI) / 2

        const velocity = Math.random() * 1.2 + 0.8
        const size = Math.random() * 3 + 1.5 // Slightly larger
        const maxLife = Math.random() * 400 + 300 // Longer life

        // Higher chance of text characters (50%)
        const isText = Math.random() < 0.5

        // Brighter green colors with higher contrast
        const textColors = [
          "rgba(110, 231, 183, 0.95)", // bright teal
          "rgba(52, 211, 153, 0.95)", // emerald
          "rgba(16, 185, 129, 0.95)", // green
          "rgba(167, 243, 208, 0.95)", // light green
          "rgba(139, 92, 246, 0.9)", // purple (less frequent)
        ]

        // Darker background particles
        const bgColors = [
          "rgba(6, 78, 59, 0.7)", // dark green
          "rgba(5, 46, 22, 0.7)", // forest green
          "rgba(17, 24, 39, 0.8)", // dark gray
          "rgba(15, 23, 42, 0.8)", // slate
        ]

        const color = isText
          ? textColors[Math.floor(Math.random() * textColors.length)]
          : bgColors[Math.floor(Math.random() * bgColors.length)]

        // Create a trail effect by placing some particles behind the cursor
        const trailEffect = Math.random() < 0.7 // 70% chance
        const trailDistance = trailEffect ? Math.random() * 30 + 10 : 0
        const trailX = x - Math.cos(moveAngle) * trailDistance
        const trailY = y - Math.sin(moveAngle) * trailDistance

        newParticles.push({
          id: nextIdRef.current++,
          x: trailEffect ? trailX : x,
          y: trailEffect ? trailY : y,
          size,
          color,
          life: 0,
          maxLife,
          isText,
          trailEffect,
          opacity: isText ? 0.95 : 0.7, // Brighter text, dimmer background
          character: isText ? dataChars[Math.floor(Math.random() * dataChars.length)] : undefined,
          velocity: {
            x: Math.cos(oppositeAngle) * velocity,
            y: Math.sin(oppositeAngle) * velocity,
          },
        })
      }

      setParticles((prev) => [...prev, ...newParticles])
    }

    const handleMouseEnter = () => {
      isHoveringRef.current = true
      // Change cursor to none when hovering
      if (heroElement) {
        heroElement.style.cursor = "none"
      }
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      // Reset cursor when leaving
      if (heroElement) {
        heroElement.style.cursor = "auto"
      }
    }

    // Add event listeners
    heroElement.addEventListener("mousemove", handleMouseMove)
    heroElement.addEventListener("mouseenter", handleMouseEnter)
    heroElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      // Remove event listeners
      heroElement.removeEventListener("mousemove", handleMouseMove)
      heroElement.removeEventListener("mouseenter", handleMouseEnter)
      heroElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Animation loop for particles
  useEffect(() => {
    let animationFrameId: number
    let lastTimestamp = 0

    const updateParticles = (timestamp: number) => {
      const deltaTime = timestamp - lastTimestamp
      lastTimestamp = timestamp

      if (deltaTime > 0) {
        setParticles((prev) =>
          prev
            .map((p) => ({
              ...p,
              x: p.x + p.velocity.x * (p.isText ? 0.7 : 1.1), // Text moves slower
              y: p.y + p.velocity.y * (p.isText ? 0.7 : 1.1),
              life: p.life + deltaTime,
              // Maintain size longer, then fade out more quickly
              size: p.life < p.maxLife * 0.7 ? p.size : p.size * (1 - (p.life - p.maxLife * 0.7) / (p.maxLife * 0.3)),
              // Adjust opacity based on life
              opacity: p.isText
                ? Math.min(0.95, p.opacity! * (1 - p.life / p.maxLife))
                : Math.min(0.7, p.opacity! * (1 - p.life / p.maxLife)),
            }))
            .filter((p) => p.life < p.maxLife),
        )
      }

      animationFrameId = requestAnimationFrame(updateParticles)
    }

    animationFrameId = requestAnimationFrame(updateParticles)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="viontra-hero relative py-20 md:py-32 overflow-hidden border-t border-indigo-900/30"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1f] via-[#0c1225] to-[#0a0e1f] z-[-1]"></div>

      {/* Animated background dots */}
      <div className="absolute inset-0 bg-dots-purple opacity-30 z-[-1]"></div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-indigo-600/5 blur-[100px] rounded-full z-[-1]"></div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl md:text-2xl">
              V
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
          Viontra by Neural Command
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          The Operating System for Your Digital Presence
        </p>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg text-gray-300">
            Control your website, SEO, Google Business, ads, and CRM from one intelligent interface. Eliminate developer
            headaches and focus on growing your business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/viontra">
            <SparkButton
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-md text-lg font-medium"
              sparkColor="rgba(139, 92, 246, 0.8)"
              sparkCount={8}
            >
              Explore Viontra
              <ArrowRight className="ml-2 h-5 w-5" />
            </SparkButton>
          </Link>
        </div>
      </div>

      {/* Custom cursor */}
      {isHoveringRef.current && (
        <div
          className="fixed w-6 h-6 rounded-full border-2 border-emerald-400 pointer-events-none z-[60]"
          style={{
            left: `${cursorPositionRef.current.x}px`,
            top: `${cursorPositionRef.current.y}px`,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 10px rgba(52, 211, 153, 0.5)",
          }}
        />
      )}

      {/* Render particles */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {particles.map((particle) =>
          particle.isText ? (
            // Text character particles
            <div
              key={particle.id}
              className="absolute font-mono text-xs font-bold data-char"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                color: particle.color,
                opacity: particle.opacity,
                transform: `translate(-50%, -50%) scale(${particle.size / 2})`,
                textShadow: `0 0 ${particle.size}px ${particle.color}`,
              }}
            >
              {particle.character}
            </div>
          ) : (
            // Background particles - darker and more subtle
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size * 1.5}px`,
                height: `${particle.size * 1.5}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                transform: `translate(-50%, -50%)`,
                boxShadow: `0 0 ${particle.size}px ${particle.color}`,
              }}
            />
          ),
        )}
      </div>
    </section>
  )
}
