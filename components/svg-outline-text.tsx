"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface SvgOutlineTextProps {
  text: string
  className?: string
}

export default function SvgOutlineText({ text, className = "" }: SvgOutlineTextProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Get all path elements
    const paths = svg.querySelectorAll("path")

    // Set up the animation for each path
    paths.forEach((path) => {
      // Get the total length of the path
      const length = path.getTotalLength()

      // Set the length as a CSS variable
      path.style.setProperty("--length", `${length}px`)
    })
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main visible text with gradient */}
      <h1 className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 whitespace-nowrap">
        {text}
      </h1>

      {/* SVG overlay with streaming outline effect */}
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 800 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* N */}
        <path
          d="M50,20 L50,80 L70,80 L90,40 L90,80 L110,80 L110,20 L90,20 L70,60 L70,20 Z"
          className="svg-text-path"
          style={{ "--index": "0" } as React.CSSProperties}
        />

        {/* E */}
        <path
          d="M130,20 L130,80 L190,80 L190,65 L150,65 L150,55 L180,55 L180,40 L150,40 L150,35 L190,35 L190,20 Z"
          className="svg-text-path"
          style={{ "--index": "1" } as React.CSSProperties}
        />

        {/* U */}
        <path
          d="M210,20 L210,65 C210,73 220,80 230,80 L250,80 C260,80 270,73 270,65 L270,20 L250,20 L250,65 L230,65 L230,20 Z"
          className="svg-text-path"
          style={{ "--index": "2" } as React.CSSProperties}
        />

        {/* R */}
        <path
          d="M290,20 L290,80 L310,80 L310,55 L320,55 L330,80 L350,80 L340,55 C345,50 350,45 350,40 L350,35 C350,27 340,20 330,20 Z M310,35 L330,35 L330,40 L310,40 Z"
          className="svg-text-path"
          style={{ "--index": "3" } as React.CSSProperties}
        />

        {/* A */}
        <path
          d="M370,20 L390,80 L410,80 L430,20 L410,20 L400,50 L390,20 Z M385,60 L415,60 L410,75 L390,75 Z"
          className="svg-text-path"
          style={{ "--index": "4" } as React.CSSProperties}
        />

        {/* L */}
        <path
          d="M450,20 L450,80 L510,80 L510,65 L470,65 L470,20 Z"
          className="svg-text-path"
          style={{ "--index": "5" } as React.CSSProperties}
        />

        {/* C */}
        <path
          d="M550,35 C540,27 530,20 520,20 L510,20 C500,20 490,27 490,35 L490,65 C490,73 500,80 510,80 L520,80 C530,80 540,73 550,65 L550,50 L530,50 L530,65 L510,65 L510,35 L530,35 L530,50 Z"
          className="svg-text-path"
          style={{ "--index": "7" } as React.CSSProperties}
        />

        {/* O */}
        <path
          d="M570,35 C570,27 580,20 590,20 L610,20 C620,20 630,27 630,35 L630,65 C630,73 620,80 610,80 L590,80 C580,80 570,73 570,65 Z M590,35 L590,65 L610,65 L610,35 Z"
          className="svg-text-path"
          style={{ "--index": "8" } as React.CSSProperties}
        />

        {/* M */}
        <path
          d="M650,20 L650,80 L670,80 L670,20 L690,50 L710,20 L710,80 L730,80 L730,20 L710,20 L690,50 L670,20 Z"
          className="svg-text-path"
          style={{ "--index": "9" } as React.CSSProperties}
        />

        {/* M */}
        <path
          d="M750,20 L750,80 L770,80 L770,20 L790,50 L810,20 L810,80 L830,80 L830,20 L810,20 L790,50 L770,20 Z"
          className="svg-text-path"
          style={{ "--index": "10" } as React.CSSProperties}
        />

        {/* A */}
        <path
          d="M850,20 L870,80 L890,80 L910,20 L890,20 L880,50 L870,20 Z M865,60 L895,60 L890,75 L870,75 Z"
          className="svg-text-path"
          style={{ "--index": "11" } as React.CSSProperties}
        />

        {/* N */}
        <path
          d="M930,20 L930,80 L950,80 L970,40 L970,80 L990,80 L990,20 L970,20 L950,60 L950,20 Z"
          className="svg-text-path"
          style={{ "--index": "12" } as React.CSSProperties}
        />

        {/* D */}
        <path
          d="M1010,20 L1010,80 L1040,80 C1050,80 1060,73 1060,65 L1060,35 C1060,27 1050,20 1040,20 Z M1030,35 L1040,35 L1040,65 L1030,65 Z"
          className="svg-text-path"
          style={{ "--index": "13" } as React.CSSProperties}
        />
      </svg>
    </div>
  )
}

