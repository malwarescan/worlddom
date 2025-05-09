import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface DesignButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline" | "text"
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

export function DesignButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "right",
  ...props
}: DesignButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all relative"

  const variantStyles = {
    primary: "bg-black text-white hover:bg-black/90 focus:ring-2 focus:ring-black/20 focus:outline-none",
    secondary: "bg-white text-black border border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-gray-200",
    outline: "border border-black text-black hover:bg-black hover:text-white focus:ring-2 focus:ring-black/20",
    text: "text-black hover:text-gray-700 focus:ring-2 focus:ring-black/10 bg-transparent",
  }

  const sizeStyles = {
    sm: "text-xs px-3 py-2 rounded-md",
    md: "text-sm px-5 py-2.5 rounded-md",
    lg: "text-base px-7 py-3 rounded-md",
  }

  const buttonClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
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
