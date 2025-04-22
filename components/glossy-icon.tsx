"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface GlossyIconProps {
  icon: string
  name: string
  color: string
  size?: "sm" | "md" | "lg"
  animate?: boolean
  delay?: number
}

export function GlossyIcon({ icon, name, color, size = "lg", animate = false, delay = 0 }: GlossyIconProps) {
  const [svgFailed, setSvgFailed] = useState(false)

  // Get PNG fallback path
  const getPngFallback = (svgPath: string) => {
    return svgPath.replace(".svg", ".png")
  }

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center bg-gradient-to-br ${color} shadow-lg relative overflow-hidden border-2 border-white`}
    >
      {/* Base white background for better contrast */}
      <div className="absolute inset-0 bg-white opacity-10"></div>

      {/* Glossy highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-30 rounded-t-2xl"></div>

      {/* Bottom shadow for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black opacity-20"></div>

      {/* Circular glow behind icon */}
      <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-white opacity-20 blur-sm"></div>

      {/* Icon with animation */}
      {animate ? (
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: [0.8, 1, 0.9, 1],
            rotate: [0, 5, 0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 2 + delay,
            ease: "easeInOut",
          }}
        >
          {svgFailed ? (
            <Image
              src={getPngFallback(icon) || "/placeholder.svg"}
              alt={name}
              width={48}
              height={48}
              className={`${iconSizes[size]} object-contain`}
            />
          ) : (
            <img
              src={icon || "/placeholder.svg"}
              alt={name}
              className={`${iconSizes[size]} object-contain`}
              onError={() => setSvgFailed(true)}
            />
          )}
        </motion.div>
      ) : (
        <div className="relative z-10 flex items-center justify-center">
          {svgFailed ? (
            <Image
              src={getPngFallback(icon) || "/placeholder.svg"}
              alt={name}
              width={48}
              height={48}
              className={`${iconSizes[size]} object-contain`}
            />
          ) : (
            <img
              src={icon || "/placeholder.svg"}
              alt={name}
              className={`${iconSizes[size]} object-contain`}
              onError={() => setSvgFailed(true)}
            />
          )}
        </div>
      )}

      {/* Subtle pulsing border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-white opacity-30"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      />
    </div>
  )
}
