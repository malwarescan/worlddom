"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { MinimalButton } from "./minimal-button"
import { Menu, X } from "lucide-react"

export function MinimalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/roblox-advertising", label: "Roblox Ads" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-black font-medium text-lg">
            Neural Command
          </Link>

          <nav className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors hover:text-black",
                    isActive ? "text-black font-medium" : "text-gray-500",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <MinimalButton href="/contact" variant="primary">
              Get Started
            </MinimalButton>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-500 hover:text-black"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors hover:text-black py-2",
                      isActive ? "text-black font-medium" : "text-gray-500",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2">
                <MinimalButton href="/contact" variant="primary" className="w-full">
                  Get Started
                </MinimalButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
