"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ProcessStepProps {
  icon: LucideIcon
  title: string
  description: string
  step?: number
  delay?: number
}

export default function ProcessStep({ icon: Icon, title, description, step, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card-gradient border border-indigo-500/20 rounded-lg p-6 h-full hover-glow-blue transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-400" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">
        {step && `${step}. `}
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
