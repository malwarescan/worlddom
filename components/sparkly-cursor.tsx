"use client"

import { useEffect, useState, useRef } from "react"

interface SparklyParticle {
  id: number
  x: number
  y: number
  size: number
  color: string
  life: number
  maxLife: number
  velocity: { x: number; y: number }
}

export default function SparklyCursor() {
  const [particles, setParticles] = useState<SparklyParticle[]>([])
  const nextIdRef = useRef(0)
  const isActiveRef = useRef(false)
  const targetRef = useRef<HTMLDivElement | null>(null)

  // Create particles function
  const createParticles = (x: number, y: number) => {
    if (!isActiveRef.current) return

    const newParticles: SparklyParticle[] = []
    const particleCount = 3

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const velocity = Math.random() * 1 + 0.5
      const size = Math.random() * 2 + 0.5
      const maxLife = Math.random() * 400 + 200

      newParticles.push({
        id: nextIdRef.current++,
        x,
        y,
        size,
        color: ["rgba(92, 108, 245, 0.6)", "rgba(139, 92, 246, 0.6)", "rgba(99, 102, 241, 0.5)"][
          Math.floor(Math.random() * 3)
        ],
        life: 0,
        maxLife,
        velocity: {
          x: Math.cos(angle) * velocity,
          y: Math.sin(angle) * velocity,
        },
      })
    }

    setParticles((prev) => [...prev, ...newParticles])
  }

  useEffect(() => {
    // Animation frame for updating particles
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
              x: p.x + p.velocity.x,
              y: p.y + p.velocity.y,
              life: p.life + deltaTime,
              size: p.size * (1 - p.life / p.maxLife),
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
    <>
      <div
        ref={targetRef}
        className="viontra-cursor-area fixed inset-0 pointer-events-none z-50"
        style={{ opacity: 0 }}
      />
      <div className="pointer-events-none fixed inset-0 z-50">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: 1 - particle.life / particle.maxLife,
              transform: `translate(-50%, -50%)`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        ))}
      </div>
    </>
  )
}
