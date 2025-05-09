"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { DesignButton } from "./design-button"
import { Menu, X, ArrowRight } from "lucide-react"

export function DesignHeader() {
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
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100" : "bg-transparent",
      )}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-black font-bold text-xl tracking-tight">
            Neural<span className="font-light">Command</span>
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
            <DesignButton href="/contact" variant="primary" icon={<ArrowRight size={16} />}>
              Get Started
            </DesignButton>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 hover:text-black transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto px-6 py-8">
            <nav className="flex flex-col space-y-6">
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-base transition-colors hover:text-black py-2",
                      isActive ? "text-black font-medium" : "text-gray-500",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2">
                <DesignButton href="/contact" variant="primary" className="w-full" icon={<ArrowRight size={16} />}>
                  Get Started
                </DesignButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
