"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface SparkButtonProps extends ButtonProps {
  children: ReactNode
  sparkColor?: string
  sparkCount?: number
}

export default function SparkButton({
  children,
  sparkColor = "rgba(92, 108, 245, 0.8)",
  sparkCount = 6,
  ...props
}: SparkButtonProps) {
  const [sparks, setSparks] = useState<Array<{ id: number; x: number; y: number; angle: number; size: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const nextId = useRef(0)

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
      size: Math.random() * 2 + 1,
    }))

    setSparks([...sparks, ...newSparks])

    // Remove sparks after animation completes
    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => !newSparks.find((s) => s.id === spark.id)))
    }, 600)
  }

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
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
              } as React.CSSProperties
            }
          />
        )
      })}
    </Button>
  )
}

