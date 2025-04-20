import { cn } from "@/lib/utils"

interface ResponsiveGradientTextProps {
  text: string
  size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  gradient?: "blue-purple" | "green-blue" | "orange-red" | "gray-black" | "web2-blue"
  className?: string
}

export default function ResponsiveGradientText({
  text,
  size = "4xl",
  gradient = "blue-purple",
  className,
}: ResponsiveGradientTextProps) {
  const sizeClasses = {
    xl: "text-xl sm:text-2xl md:text-3xl",
    "2xl": "text-2xl sm:text-3xl md:text-4xl",
    "3xl": "text-3xl sm:text-4xl md:text-5xl",
    "4xl": "text-4xl sm:text-5xl md:text-6xl",
    "5xl": "text-5xl sm:text-6xl md:text-7xl",
  }

  const gradientClasses = {
    "blue-purple": "from-blue-600 to-purple-600",
    "green-blue": "from-green-600 to-blue-600",
    "orange-red": "from-orange-600 to-red-600",
    "gray-black": "from-gray-700 to-gray-900",
    "web2-blue": "from-blue-500 to-blue-700",
  }

  return (
    <span
      className={cn(
        sizeClasses[size],
        "font-black bg-clip-text text-transparent bg-gradient-to-r",
        gradientClasses[gradient],
        className,
      )}
    >
      {text}
    </span>
  )
}
