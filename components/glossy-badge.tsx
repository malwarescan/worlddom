interface GlossyBadgeProps {
  text: string
  color?: "blue" | "green" | "orange" | "purple" | "red"
}

export default function GlossyBadge({ text, color = "blue" }: GlossyBadgeProps) {
  const gradientMap = {
    blue: "from-blue-400 to-blue-600",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    purple: "from-purple-400 to-purple-600",
    red: "from-red-400 to-red-600",
  }

  const gradient = gradientMap[color]

  return (
    <div
      className={`web2-glossy-badge bg-gradient-to-b ${gradient} text-white px-4 py-1 rounded-full font-bold border-2 border-white shadow-lg`}
    >
      {text}
    </div>
  )
}
