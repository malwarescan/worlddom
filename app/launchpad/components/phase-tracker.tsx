"use client"

import { motion } from "framer-motion"

interface PhaseTrackerProps {
  currentPhase: number
  totalPhases: number
}

export default function PhaseTracker({ currentPhase, totalPhases }: PhaseTrackerProps) {
  const phases = Array.from({ length: totalPhases }, (_, i) => i + 1)

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        {/* Track */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 rounded-full"></div>

        {/* Completed track */}
        <motion.div
          className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -translate-y-1/2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentPhase / totalPhases) * 100}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>

        {/* Phase markers */}
        <div className="relative flex justify-between">
          {phases.map((phase) => (
            <div key={phase} className="flex flex-col items-center">
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                  phase <= currentPhase
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-800 border border-gray-700"
                }`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + phase * 0.1 }}
              >
                <span className={`text-xs font-bold ${phase <= currentPhase ? "text-white" : "text-gray-500"}`}>
                  {phase}
                </span>
              </motion.div>

              <motion.div
                className="mt-2 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + phase * 0.1 }}
              >
                <span className={phase <= currentPhase ? "text-blue-400" : "text-gray-500"}>Phase {phase}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
