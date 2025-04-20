"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Hexagon } from "lucide-react"

export default function Web2Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="web2-nav">
      <div className="container mx-auto px-4">
        <div className="web2-nav-container">
          <Link href="/" className="web2-nav-logo">
            <Hexagon className="h-6 w-6 text-purple-600 web4-glow" />
            <span>Neural Command</span>
            <span className="text-xs font-bold bg-gradient-to-b from-purple-400 to-purple-600 text-white px-1.5 py-0.5 rounded-md transform rotate-12 shadow-sm border border-white">
              4.0
            </span>
          </Link>

          <div className="web2-nav-links">
            <Link href="/" className={`web2-nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
            <Link href="/services" className={`web2-nav-link ${isActive("/services") ? "active" : ""}`}>
              Services
            </Link>
            <Link href="/pricing" className={`web2-nav-link ${isActive("/pricing") ? "active" : ""}`}>
              Pricing
            </Link>
            <Link href="/about" className={`web2-nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
            <Link href="/contact" className={`web2-nav-link ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
