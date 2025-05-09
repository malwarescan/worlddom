import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface SwaggerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "accent" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function SwaggerButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: SwaggerButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all rounded-xl relative overflow-hidden"

  const variantStyles = {
    primary: "bg-black text-white hover:bg-black hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
    secondary:
      "bg-white text-black border border-gray-200 hover:border-gray-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
    accent: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
  }

  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4 font-semibold",
  }

  const buttonClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "accent" && (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  )
}
