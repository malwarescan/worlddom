import { cn } from "@/lib/utils"
import { SwaggerButton } from "./swagger-button"
import Image from "next/image"

interface SwaggerHeroProps {
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  image: {
    src: string
    alt: string
  }
  imagePosition?: "right" | "left"
}

export function SwaggerHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  imagePosition = "right",
}: SwaggerHeroProps) {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div
            className={cn("w-full md:w-1/2 space-y-8", imagePosition === "right" ? "order-1" : "order-1 md:order-2")}
          >
            <div>
              <h2 className="text-lg font-medium text-blue-600 mb-3">{subtitle}</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
                {title}
              </h1>
            </div>

            <p className="text-xl text-gray-600 max-w-lg">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <SwaggerButton href={primaryCta.href} variant="accent" size="lg">
                {primaryCta.text}
              </SwaggerButton>

              {secondaryCta && (
                <SwaggerButton href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.text}
                </SwaggerButton>
              )}
            </div>
          </div>

          <div className={cn("w-full md:w-1/2", imagePosition === "right" ? "order-2" : "order-2 md:order-1")}>
            <div className="relative">
              {/* Background blur effect */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>

              {/* Image with border */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
