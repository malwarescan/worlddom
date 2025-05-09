import { cn } from "@/lib/utils"
import { DesignButton } from "./design-button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface DesignHeroProps {
  eyebrow?: string
  title: string
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

export function DesignHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imagePosition = "right",
}: DesignHeroProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div
            className={cn("w-full md:w-1/2 space-y-8", imagePosition === "right" ? "order-1" : "order-1 md:order-2")}
          >
            {eyebrow && <p className="text-sm font-medium tracking-widest uppercase text-gray-500">{eyebrow}</p>}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
              {title}
            </h1>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <DesignButton href={primaryCta.href} variant="primary" size="lg" icon={<ArrowRight size={16} />}>
                {primaryCta.text}
              </DesignButton>

              {secondaryCta && (
                <DesignButton href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.text}
                </DesignButton>
              )}
            </div>
          </div>

          <div className={cn("w-full md:w-1/2", imagePosition === "right" ? "order-2" : "order-2 md:order-1")}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Subtle design elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-gray-100 rounded-2xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
