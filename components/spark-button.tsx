"use client"

import type React from "react"

import { useState, useRef, type ReactNode, useEffect } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface SparkButtonProps extends ButtonProps {
  children: ReactNode
  sparkColor?: string
  sparkCount?: number
}

export default function SparkButton({
  children,
  sparkColor = "rgba(92, 108, 245, 0.6)", // More transparent
  sparkCount = 4, // Reduced from 6
  ...props
}: SparkButtonProps) {
  const [sparks, setSparks] = useState<Array<{ id: number; x: number; y: number; angle: number; size: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const nextId = useRef(0)
  const throttleRef = useRef(false)

  // Cleanup function to remove old sparks
  useEffect(() => {
    const interval = setInterval(() => {
      setSparks((prev) => {
        // Keep only sparks that were created in the last 800ms
        const now = Date.now()
        return prev.filter((spark) => spark.id > nextId.current - 20)
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    // Get click position relative to button
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Create new sparks
    const newSparks = Array.from({ length: sparkCount }, () => ({
      id: nextId.current++,
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      size: Math.random() * 2 + 1, // Smaller sparks
    }))

    setSparks((prev) => [...prev, ...newSparks])
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || throttleRef.current) return

    // Throttle to improve performance
    throttleRef.current = true
    setTimeout(() => {
      throttleRef.current = false
    }, 100)

    // Only create sparks occasionally
    if (Math.random() > 0.9) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newSpark = {
        id: nextId.current++,
        x,
        y,
        angle: Math.random() * Math.PI * 2,
        size: Math.random() * 1.5 + 0.5, // Smaller hover sparks
      }

      setSparks((prev) => [...prev, newSpark])
    }
  }

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      {...props}
      className={`relative overflow-hidden ${props.className || ""}`}
    >
      {children}

      {/* Render sparks */}
      {sparks.map((spark) => {
        const translateX = Math.cos(spark.angle) * 40
        const translateY = Math.sin(spark.angle) * 40

        return (
          <div
            key={spark.id}
            className="absolute pointer-events-none"
            style={
              {
                left: `${spark.x}px`,
                top: `${spark.y}px`,
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                borderRadius: "50%",
                backgroundColor: sparkColor,
                "--translateX": `${translateX}px`,
                "--translateY": `${translateY}px`,
                animation: "spark 600ms ease-out forwards",
                opacity: 0.8,
              } as React.CSSProperties
            }
          />
        )
      })}
    </Button>
  )
}
