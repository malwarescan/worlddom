"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAIMenuOpen, setIsAIMenuOpen] = useState(false)
  const [isSEOMenuOpen, setIsSEOMenuOpen] = useState(false)

  return (
    <>
      <header className="envato-header sticky top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-white">
                  Neural<span className="text-[rgb(var(--envato-green))]">Command</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <div className="relative group px-3 py-2">
                <button
                  className="flex items-center nav-link"
                  onClick={() => setIsAIMenuOpen(!isAIMenuOpen)}
                  onMouseEnter={() => setIsAIMenuOpen(true)}
                  onMouseLeave={() => setIsAIMenuOpen(false)}
                >
                  <span>AI Services</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isAIMenuOpen && (
                  <div
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseEnter={() => setIsAIMenuOpen(true)}
                    onMouseLeave={() => setIsAIMenuOpen(false)}
                  >
                    <div className="py-1">
                      <Link
                        href="/ai-services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAIMenuOpen(false)}
                      >
                        All AI Services
                      </Link>
                      <Link
                        href="/ai-services/neural-seo"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAIMenuOpen(false)}
                      >
                        Neural SEO
                      </Link>
                      <Link
                        href="/ai-services/predictive-analytics"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAIMenuOpen(false)}
                      >
                        Predictive Analytics
                      </Link>
                      <Link
                        href="/ai-services/autonomous-agents"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAIMenuOpen(false)}
                      >
                        Autonomous Agents
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group px-3 py-2">
                <Link href="/roblox-marketing" className="flex items-center nav-link">
                  <span>Roblox</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="relative group px-3 py-2">
                <button
                  className="flex items-center nav-link"
                  onClick={() => setIsSEOMenuOpen(!isSEOMenuOpen)}
                  onMouseEnter={() => setIsSEOMenuOpen(true)}
                  onMouseLeave={() => setIsSEOMenuOpen(false)}
                >
                  <span>SEO</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isSEOMenuOpen && (
                  <div
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseEnter={() => setIsSEOMenuOpen(true)}
                    onMouseLeave={() => setIsSEOMenuOpen(false)}
                  >
                    <div className="py-1">
                      <Link
                        href="/seo-services"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsSEOMenuOpen(false)}
                      >
                        SEO Services
                      </Link>
                      <Link
                        href="/ai-services/neural-seo"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsSEOMenuOpen(false)}
                      >
                        Neural SEO
                      </Link>
                      <Link
                        href="/seo-services/local-seo"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsSEOMenuOpen(false)}
                      >
                        Local SEO
                      </Link>
                      <Link
                        href="/seo-services/technical-seo"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsSEOMenuOpen(false)}
                      >
                        Technical SEO
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group px-3 py-2">
                <button className="flex items-center nav-link">
                  <span>Portfolio</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div className="relative group px-3 py-2">
                <button className="flex items-center nav-link">
                  <span>About</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white">
                  <Search className="h-5 w-5" />
                </button>
                <Link href="/contact" className="envato-button">
                  Get in Touch
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[rgb(var(--envato-darker))] border-t border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="/ai-services" className="text-gray-300 hover:text-white py-2">
                AI Services
              </Link>
              <Link href="/roblox-marketing" className="text-gray-300 hover:text-white py-2">
                Roblox
              </Link>
              <Link href="/seo-services" className="text-gray-300 hover:text-white py-2">
                SEO
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white py-2">
                Portfolio
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white py-2">
                About
              </Link>
              <div className="pt-2">
                <Link href="/contact" className="envato-button inline-block w-full text-center">
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Promo Banner */}
      <div className="envato-banner py-3 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium">
            <span className="font-bold">Neural SEO</span> is now available! Get 280% more organic traffic with AI-driven
            optimization.
          </p>
        </div>
      </div>
    </>
  )
}
