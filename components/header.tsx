"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import MobileNavLinks from "@/components/mobile-nav-links"
import SocialLinks from "@/components/social-links"

const siteConfig = {
  name: "Neural Command",
  description: "AI-Powered Neural Network Solutions for Business",
  url: "https://dominatethe.world",
  ogImage: "https://dominatethe.world/og.jpg",
  links: {
    twitter: "https://twitter.com/neuralcommand",
    linkedin: "https://www.linkedin.com/company/neural-command-llc/",
    github: "https://github.com/neuralcommand",
    facebook: "https://facebook.com/neuralcommand",
  },
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-[#050813] border-b border-indigo-900/20 fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto px-4 md:px-6 py-4 header-container">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-lg font-bold header-logo">
            Neural Command
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavigationLinks />
            <SocialLinks />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-400 hover:text-white transition-colors mobile-menu-button"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.828a1 1 0 0 1-1.414-1.414l4.829-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.829 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.829 4.829 4.828 4.828z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 right-0 w-64 h-full bg-[#050813] border-l border-indigo-900/20 shadow-xl transform transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-indigo-900/20 flex justify-between items-center mobile-menu-header">
              <span className="text-white text-lg font-bold">Neural Command</span>
              <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.828a1 1 0 0 1-1.414-1.414l4.829-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.829 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.829 4.829 4.828 4.828z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 flex-grow flex flex-col mobile-menu-links">
              <MobileNavLinks onLinkClick={toggleMobileMenu} />
            </div>

            <div className="p-4 border-t border-indigo-900/20 text-center mobile-menu-footer">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavigationLinks() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="flex space-x-6">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-gray-400 hover:text-indigo-300 transition-colors font-medium ${
              isActive ? "text-white" : ""
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
