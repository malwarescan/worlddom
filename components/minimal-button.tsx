import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface MinimalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function MinimalButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: MinimalButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-full"

  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
    outline: "border border-gray-300 text-black hover:bg-gray-100",
  }

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  }

  const buttonClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
