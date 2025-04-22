import { cn } from "@/lib/utils"

interface Web2BadgeProps {
  text: string
  variant?: "blue" | "green" | "orange" | "purple" | "red" | "yellow"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Web2Badge({ text, variant = "blue", size = "md", className }: Web2BadgeProps) {
  // Color variants
  const colorStyles = {
    blue: "bg-gradient-to-b from-blue-400 to-blue-600 text-white border-blue-300",
    green: "bg-gradient-to-b from-green-400 to-green-600 text-white border-green-300",
    orange: "bg-gradient-to-b from-orange-400 to-orange-600 text-white border-orange-300",
    purple: "bg-gradient-to-b from-purple-400 to-purple-600 text-white border-purple-300",
    red: "bg-gradient-to-b from-red-400 to-red-600 text-white border-red-300",
    yellow: "bg-gradient-to-b from-yellow-400 to-yellow-600 text-white border-yellow-300",
  }

  // Size variants
  const sizeStyles = {
    sm: "py-0.5 px-2 text-xs",
    md: "py-1 px-3 text-sm",
    lg: "py-1.5 px-4 text-base",
  }

  // Base styles for the chunky Web 2.0 look
  const baseStyles = `
    font-bold rounded-full border-2 border-white shadow-md 
    inline-flex items-center justify-center
    relative overflow-hidden
  `

  // Combined styles
  const badgeStyles = cn(baseStyles, colorStyles[variant], sizeStyles[size], className)

  return (
    <span className={badgeStyles}>
      {/* Glossy overlay effect */}
      <span className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-40"></span>
      <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-30"></span>
      <span className="absolute bottom-0 left-0 right-0 h-1/4 bg-black opacity-10"></span>

      {/* Text content */}
      <span className="relative z-10">{text}</span>
    </span>
  )
}
