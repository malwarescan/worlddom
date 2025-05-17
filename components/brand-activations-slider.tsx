"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BrandActivation {
  id: number
  title: string
  category: string
  image: string
  description: string
}

export default function BrandActivationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const brandActivations: BrandActivation[] = [
    {
      id: 1,
      title: "Paramount: Launch & Fandom",
      category: "ENTERTAINMENT",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.44%E2%80%AFPM-TcnPEtdlToNmjIPsw947XNavsfbUfi.png",
      description: "Immersive TMNT experience with interactive pizza parties and character meet-ups",
    },
    {
      id: 2,
      title: "NHL: Reach & Fandom",
      category: "SPORTS",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.16%E2%80%AFPM-MemVYVCByqnBiuGG2LZ5YHDJDFTZ12.png",
      description: "Virtual street hockey environment with customizable gameplay and NHL branding",
    },
    {
      id: 3,
      title: "Twice: Reach & Fandom",
      category: "MUSIC",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.56%E2%80%AFPM-cIXTPvtGSbuHgdD2SZdvsOfeBFztu9.png",
      description: "Interactive fan experience with virtual concerts and exclusive merchandise",
    },
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === brandActivations.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? brandActivations.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "ArrowRight") nextSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isAnimating])

  return (
    <section className="py-16 bg-[rgb(var(--envato-darker))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover inspiration from successful brand activations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore how top brands are creating immersive experiences in virtual worlds
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Slider */}
          <div ref={sliderRef} className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {brandActivations.map((activation) => (
                <div key={activation.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-video overflow-hidden">
                    <SlideImage src={activation.image} alt={activation.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <span className="inline-block px-3 py-1 bg-[rgb(var(--envato-green))] text-white text-xs font-semibold rounded-full mb-3">
                        {activation.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activation.title}</h3>
                      <p className="text-gray-200 max-w-lg">{activation.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {brandActivations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[rgb(var(--envato-green))]" : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Client component for handling image loading and errors
function SlideImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        className={`w-full h-full object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc("https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop")
          setIsLoading(false)
        }}
      />
      {isLoading && <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>}
    </>
  )
}
