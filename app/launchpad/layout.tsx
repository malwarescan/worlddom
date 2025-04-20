import type React from "react"
import "./styles.css"

export const metadata = {
  title: "Neural Command Launch Pad",
  description: "Explore the suite of Neural Command AI products and services",
}

export default function LaunchpadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
