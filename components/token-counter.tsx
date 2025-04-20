"use client"

import { useEffect, useState } from "react"

interface TokenCounterProps {
  label: string
  value: number
  duration?: number
}

export default function TokenCounter({ label, value, duration = 2000 }: TokenCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const incrementTime = Math.floor(duration / end)
    const timer = setInterval(() => {
      start += Math.floor(end / 20)
      if (start > end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration])

  return (
    <div className="flex flex-col items-center">
      <div className="text-xs font-bold text-purple-600">{label}</div>
      <div className="text-lg font-mono font-bold text-gray-800 web4-glow">{count.toLocaleString()}</div>
    </div>
  )
}
