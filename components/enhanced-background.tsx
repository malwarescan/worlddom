"use client"

import React, { useRef, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface EnhancedBackgroundProps {
  variant?: "purple" | "blue" | "light"
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
  interactive?: boolean
  className?: string
}

// Generate random points on a sphere
function generateSpherePoints(count: number) {
  const points = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const radius = 1.5
    const theta = Math.random() * 2 * Math.PI
    const phi = Math.acos(2 * Math.random() - 1)

    points[i3] = radius * Math.sin(phi) * Math.cos(theta)
    points[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    points[i3 + 2] = radius * Math.cos(phi)
  }

  return points
}

function Stars({ density = "medium", speed = "medium", variant = "blue" }) {
  const ref = useRef<THREE.Points>(null)
  const [positions] = useState(() => {
    const count = density === "low" ? 2500 : density === "medium" ? 5000 : 7500
    return generateSpherePoints(count)
  })

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = Math.random() * Math.PI
      ref.current.rotation.y = Math.random() * Math.PI
    }
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      const speedFactor = speed === "slow" ? 0.1 : speed === "medium" ? 0.3 : 0.5
      ref.current.rotation.x -= delta * speedFactor * 0.2
      ref.current.rotation.y -= delta * speedFactor * 0.1
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={variant === "light" ? "#aaaaaa" : "#ffffff"}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Network nodes component using SVG
function NetworkNodes({ variant = "blue", density = "medium", speed = "medium" }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [nodes, setNodes] = useState<Array<{ x: number; y: number; vx: number; vy: number }>>([])

  // Set up nodes and handle window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })

        const nodeCount = density === "low" ? 5 : density === "medium" ? 10 : 15
        const nodeSpeed = speed === "slow" ? 2 : speed === "medium" ? 5 : 10

        // Create nodes
        const newNodes = Array.from({ length: nodeCount }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) / nodeSpeed,
          vy: (Math.random() - 0.5) / nodeSpeed,
        }))

        setNodes(newNodes)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [density, speed])

  // Animation loop
  useEffect(() => {
    if (nodes.length === 0) return

    const animateNodes = () => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let { x, y, vx, vy } = node

          // Bounce off walls
          if (x <= 0 || x >= dimensions.width) vx *= -1
          if (y <= 0 || y >= dimensions.height) vy *= -1

          // Update position
          x += vx
          y += vy

          return { x, y, vx, vy }
        }),
      )

      animationRef.current = requestAnimationFrame(animateNodes)
    }

    const animationRef = { current: requestAnimationFrame(animateNodes) }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [nodes.length, dimensions])

  // Determine colors based on variant
  let nodeColor = "bg-blue-500/20"
  let nodeAccentColor = "bg-purple-500/30"
  let connectionColor = "stroke-blue-500/20"
  let connectionAccentColor = "stroke-purple-500/20"

  if (variant === "purple") {
    nodeColor = "bg-purple-500/20"
    nodeAccentColor = "bg-blue-500/30"
    connectionColor = "stroke-purple-500/20"
    connectionAccentColor = "stroke-blue-500/20"
  } else if (variant === "light") {
    nodeColor = "bg-gray-400/20"
    nodeAccentColor = "bg-gray-500/30"
    connectionColor = "stroke-gray-400/20"
    connectionAccentColor = "stroke-gray-500/20"
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {/* Draw connections between nodes */}
            {nodes.map((node2, j) => {
              if (i >= j) return null // Only draw each connection once

              const dx = node.x - node2.x
              const dy = node.y - node2.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              // Only draw connections between nearby nodes
              if (distance < dimensions.width * 0.2) {
                const opacity = Math.max(0, 0.2 - distance / (dimensions.width * 0.5))
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={node.x}
                    y1={node.y}
                    x2={node2.x}
                    y2={node2.y}
                    className={Math.random() > 0.5 ? connectionColor : connectionAccentColor}
                    style={{ opacity: opacity * 2 }}
                  />
                )
              }
              return null
            })}
          </React.Fragment>
        ))}

        {/* Draw nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`} transform={`translate(${node.x}, ${node.y})`}>
            <circle r={4} className={nodeColor} />
            <circle r={2} className={nodeAccentColor} />
          </g>
        ))}
      </svg>
    </div>
  )
}

// Custom hook for animation frame
function useFrame(callback: (state: any, delta: number) => void) {
  const frameRef = useRef<number>()
  const previousTimeRef = useRef<number>()
  const callbackRef = useRef<(state: any, delta: number) => void>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time
      }

      const delta = (time - previousTimeRef.current) / 1000
      previousTimeRef.current = time

      if (callbackRef.current) {
        callbackRef.current({ clock: { elapsedTime: time / 1000 } }, delta)
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])
}

export default function EnhancedBackground({
  variant = "blue",
  density = "medium",
  speed = "medium",
  interactive = false,
  className = "",
}: EnhancedBackgroundProps) {
  const bgColor = variant === "light" ? "bg-white" : "bg-[#0a0e1f]"

  return (
    <div
      className={`absolute inset-0 w-full h-full ${interactive ? "cursor-grab" : ""} ${className} ${bgColor} overflow-hidden`}
    >
      <Canvas className="absolute inset-0 w-full h-full">
        <Stars variant={variant} density={density} speed={speed} />
      </Canvas>
      <NetworkNodes variant={variant} density={density} speed={speed} />
    </div>
  )
}
