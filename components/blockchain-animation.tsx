"use client"

import { useEffect, useRef } from "react"

export default function BlockchainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 80

    // Block class
    class Block {
      x: number
      y: number
      width: number
      height: number
      color: string
      speed: number

      constructor(x: number, y: number, width: number, height: number, color: string, speed: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.speed = speed
      }

      draw() {
        ctx!.fillStyle = this.color
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.5)"
        ctx!.lineWidth = 1

        // Draw block
        ctx!.beginPath()
        ctx!.roundRect(this.x, this.y, this.width, this.height, 4)
        ctx!.fill()
        ctx!.stroke()

        // Draw hash pattern inside block
        ctx!.fillStyle = "rgba(255, 255, 255, 0.1)"
        for (let i = 0; i < 3; i++) {
          ctx!.fillRect(this.x + 5, this.y + 5 + i * 6, this.width - 10, 2)
        }
      }

      update() {
        this.x -= this.speed
        if (this.x < -this.width) {
          this.x = canvas!.width
        }
        this.draw()
      }
    }

    // Connection class
    class Connection {
      x1: number
      y1: number
      x2: number
      y2: number
      color: string

      constructor(x1: number, y1: number, x2: number, y2: number, color: string) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.color = color
      }

      draw() {
        ctx!.strokeStyle = this.color
        ctx!.lineWidth = 2
        ctx!.beginPath()
        ctx!.moveTo(this.x1, this.y1)
        ctx!.lineTo(this.x2, this.y2)
        ctx!.stroke()
      }

      update(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.draw()
      }
    }

    // Create blocks
    const blocks: Block[] = []
    const blockColors = [
      "rgba(124, 58, 237, 0.7)",
      "rgba(56, 189, 248, 0.7)",
      "rgba(16, 185, 129, 0.7)",
      "rgba(239, 68, 68, 0.7)",
      "rgba(245, 158, 11, 0.7)",
    ]

    const blockWidth = 60
    const blockHeight = 40
    const blockGap = 40
    const numBlocks = Math.ceil(canvas.width / (blockWidth + blockGap)) + 1

    for (let i = 0; i < numBlocks; i++) {
      const x = i * (blockWidth + blockGap)
      const y = canvas.height / 2 - blockHeight / 2
      const color = blockColors[i % blockColors.length]
      const speed = 0.5 + Math.random() * 0.5
      blocks.push(new Block(x, y, blockWidth, blockHeight, color, speed))
    }

    // Create connections
    const connections: Connection[] = []
    for (let i = 0; i < blocks.length - 1; i++) {
      const connection = new Connection(
        blocks[i].x + blockWidth,
        blocks[i].y + blockHeight / 2,
        blocks[i + 1].x,
        blocks[i + 1].y + blockHeight / 2,
        "rgba(124, 58, 237, 0.3)",
      )
      connections.push(connection)
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw blocks
      blocks.forEach((block) => block.update())

      // Update and draw connections
      for (let i = 0; i < connections.length; i++) {
        const block1 = blocks[i]
        const block2 = blocks[i + 1]
        connections[i].update(block1.x + blockWidth, block1.y + blockHeight / 2, block2.x, block2.y + blockHeight / 2)
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = 80
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-20" />
    </div>
  )
}
