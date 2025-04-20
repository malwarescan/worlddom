"use client"

import { motion } from "framer-motion"

interface TokenBadgeProps {
  amount: number
}

export default function TokenBadge({ amount }: TokenBadgeProps) {
  if (amount === 0) {
    return <div className="px-2 py-1 rounded-md bg-gray-800/50 text-gray-500 text-xs font-mono">0 TOKENS</div>
  }

  return (
    <motion.div
      className="px-2 py-1 rounded-md bg-blue-900/30 text-blue-300 text-xs font-mono border border-blue-500/30"
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      }}
    >
      {amount.toLocaleString()} TOKENS
    </motion.div>
  )
}
