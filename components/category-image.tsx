"use client"

import { useState } from "react"

export default function CategoryImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full">
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc("https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop")
          setIsLoading(false)
        }}
      />
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>}
    </div>
  )
}
