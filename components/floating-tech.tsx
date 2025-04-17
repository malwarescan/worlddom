"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function FloatingTech() {
  const [terms, setTerms] = useState<
    Array<{
      id: number
      text: string
      x: number
      y: number
      size: number
      duration: number
      delay: number
    }>
  >([])

  const techTerms = [
    "Neural Networks",
    "Machine Learning",
    "Deep Learning",
    "AI Solutions",
    "Quantum Processing",
    "Predictive Analytics",
    "Computer Vision",
    "Natural Language Processing",
    "Reinforcement Learning",
    "Data Science",
    "Automation",
    "Cognitive Computing",
  ]

  useEffect(() => {
    // Initialize terms with random positions
    const newTerms = techTerms.map((text, index) => ({
      id: index,
      text,
      x: Math.random() * 80 + 10, // 10-90% of container width
      y: Math.random() * 80 + 10, // 10-90% of container height
      size: Math.random() * 0.5 + 0.8, // Size multiplier
      duration: Math.random() * 10 + 20, // Animation duration in seconds
      delay: Math.random() * 5, // Delay start in seconds
    }))

    setTerms(newTerms)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {terms.map((term) => (
        <motion.div
          key={term.id}
          className="absolute text-blue-400/40 dark:text-blue-400/40"
          style={{ fontSize: `${term.size}rem` }}
          initial={{ x: `${term.x}%`, y: `${term.y}%`, opacity: 0.3 }}
          animate={{
            x: [`${term.x}%`, `${((term.x + 20) % 80) + 10}%`, `${term.x}%`],
            y: [`${term.y}%`, `${((term.y + 20) % 80) + 10}%`, `${term.y}%`],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: term.duration,
            delay: term.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {term.text}
        </motion.div>
      ))}
    </div>
  )
}
