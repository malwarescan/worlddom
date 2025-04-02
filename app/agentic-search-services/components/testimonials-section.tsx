"use client"

import { useState, useEffect } from "react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Auto-advance testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  if (!mounted) return null

  return (
    <RevealOnScroll>
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">WHAT OUR CLIENTS SAY</h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#0a1029]/50 border border-indigo-500/20 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 shadow-md shadow-blue-500/10">
                        <span className="text-xl font-bold text-white">{testimonial.initial}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-indigo-900/50 shadow-md flex items-center justify-center text-white hover:bg-indigo-800/50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-indigo-900/50 shadow-md flex items-center justify-center text-white hover:bg-indigo-800/50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    initial: "S",
    title: "CTO, TechCorp Global",
    quote:
      "The Agentic Search solution from Neural Command has transformed how our research team accesses and synthesizes information. What used to take days now happens in minutes with incredible accuracy.",
  },
  {
    name: "Michael Chen",
    initial: "M",
    title: "Director of Innovation, DataSphere Analytics",
    quote:
      "Implementing Neural Command's enterprise knowledge management system has given us a competitive edge. Our team can now instantly access and leverage our collective intelligence.",
  },
  {
    name: "Jennifer Williams",
    initial: "J",
    title: "VP of Customer Experience, RetailTech",
    quote:
      "The AI-powered customer support system has reduced our response times by 78% while improving customer satisfaction scores. It's been a game-changer for our support team.",
  },
  {
    name: "David Rodriguez",
    initial: "D",
    title: "Chief Data Officer, FinTech Pioneers",
    quote:
      "Neural Command's market intelligence solution provides insights we never thought possible. It's like having a crystal ball for market trends and competitor movements.",
  },
]

