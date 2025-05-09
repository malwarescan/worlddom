import { cn } from "@/lib/utils"
import Image from "next/image"

interface DesignTestimonialProps {
  quote: string
  author: {
    name: string
    title: string
    image?: string
  }
  className?: string
  variant?: "default" | "featured"
}

export function DesignTestimonial({ quote, author, className, variant = "default" }: DesignTestimonialProps) {
  const variantStyles = {
    default: "bg-white border border-gray-100",
    featured: "bg-black text-white",
  }

  const quoteStyles = {
    default: "text-gray-600",
    featured: "text-gray-300",
  }

  const nameStyles = {
    default: "text-black",
    featured: "text-white",
  }

  const titleStyles = {
    default: "text-gray-500",
    featured: "text-gray-400",
  }

  return (
    <div className={cn("rounded-xl p-8", variantStyles[variant], className)}>
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg width="32" height="24" className={variant === "default" ? "text-gray-300" : "text-gray-700"}>
            <path
              d="M9.425 0.5C4.35 3.594 0.5 9.625 0.5 16.5c0 5.25 3.175 8.313 6.825 8.313 3.4 0 5.95-2.763 5.95-6.038 0-3.275-2.225-5.613-5.125-5.613-.575 0-1.325.1-1.525.2.475-3.275 3.65-7.313 6.825-9.363L9.425 0.5zm17 0C21.35 3.594 17.5 9.625 17.5 16.5c0 5.25 3.175 8.313 6.825 8.313 3.4 0 5.95-2.763 5.95-6.038 0-3.275-2.225-5.613-5.125-5.613-.575 0-1.325.1-1.525.2.475-3.275 3.65-7.313 6.825-9.363L26.425 0.5z"
              fill="currentColor"
            />
          </svg>
          <p className={cn("text-lg mt-4 leading-relaxed", quoteStyles[variant])}>{quote}</p>
        </div>
        <div className="mt-auto flex items-center">
          {author.image && (
            <div className="mr-4 flex-shrink-0">
              <Image
                src={author.image || "/placeholder.svg"}
                alt={author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
          )}
          <div>
            <p className={cn("font-medium", nameStyles[variant])}>{author.name}</p>
            <p className={cn("text-sm", titleStyles[variant])}>{author.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
