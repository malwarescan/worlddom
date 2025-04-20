import type { ReactNode } from "react"

interface Web2FeatureBoxProps {
  title: string
  icon: ReactNode
  children: ReactNode
  color?: "blue" | "green" | "orange" | "purple"
}

export function Web2FeatureBox({ title, icon, children, color = "blue" }: Web2FeatureBoxProps) {
  const gradientMap = {
    blue: "from-blue-400 to-blue-600",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    purple: "from-purple-400 to-purple-600",
  }

  const gradient = gradientMap[color]

  return (
    <div className="web2-panel p-0 overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${gradient} p-3 text-white font-bold text-lg flex items-center gap-3`}>
        <div className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full">{icon}</div>
        {title}
      </div>

      {/* Content */}
      <div className="p-4 bg-white">{children}</div>

      {/* Footer */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  )
}
