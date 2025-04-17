import { cn } from "@/lib/utils"

interface ResponsiveGradientTextProps {
  text: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
  gradient?: "blue-purple" | "indigo-purple" | "custom"
  customGradient?: string
}

export default function ResponsiveGradientText({
  text,
  className,
  size = "xl",
  gradient = "blue-purple",
  customGradient,
}: ResponsiveGradientTextProps) {
  const sizeClasses = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg md:text-xl",
    lg: "text-lg sm:text-xl md:text-2xl",
    xl: "text-xl sm:text-2xl md:text-3xl",
    "2xl": "text-2xl sm:text-3xl md:text-4xl",
    "3xl": "text-3xl sm:text-4xl md:text-5xl",
    "4xl": "text-4xl sm:text-5xl md:text-6xl",
    "5xl": "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    "6xl": "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  }

  const gradientClasses = {
    "blue-purple": "from-blue-400 via-purple-400 to-blue-500",
    "indigo-purple": "from-indigo-400 via-purple-400 to-indigo-500",
    custom: customGradient,
  }

  // Split text into words for better mobile wrapping
  const words = text.split(" ")

  return (
    <div
      className={cn(
        "relative z-10 text-transparent bg-clip-text bg-gradient-to-r",
        gradientClasses[gradient],
        sizeClasses[size],
        "font-bold leading-tight tracking-tight",
        className,
      )}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block">
          {word}
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  )
}
