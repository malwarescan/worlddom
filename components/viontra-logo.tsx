interface ViontraLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function ViontraLogo({ className = "", size = "md" }: ViontraLogoProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md transform rotate-45"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">V</div>
    </div>
  )
}
