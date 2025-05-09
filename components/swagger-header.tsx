"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { SwaggerButton } from "./swagger-button"
import { Menu, X } from "lucide-react"

export function SwaggerHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-black font-bold text-2xl tracking-tight">
            Neural<span className="text-blue-600">Command</span>
          </Link>

          <nav className="hidden md:flex space-x-10">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base transition-colors hover:text-blue-600",
                    isActive ? "text-blue-600 font-medium" : "text-gray-800",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <SwaggerButton href="/contact" variant="accent">
              Get Started
            </SwaggerButton>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 hover:text-blue-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg transition-colors hover:text-blue-600 py-2",
                      isActive ? "text-blue-600 font-medium" : "text-gray-800",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2">
                <SwaggerButton href="/contact" variant="accent" className="w-full">
                  Get Started
                </SwaggerButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
