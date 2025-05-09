"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [whyOpen, setWhyOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-white text-xl font-bold">NEURAL COMMAND</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <button
                  className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium flex items-center"
                  onClick={() => {
                    setSolutionsOpen(!solutionsOpen)
                    setResourcesOpen(false)
                    setWhyOpen(false)
                  }}
                >
                  SOLUTIONS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {solutionsOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 ring-1 ring-white/10">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/solutions/immersive-experiences"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Immersive Experiences
                      </Link>
                      <Link
                        href="/solutions/interactive-ads"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Interactive Ads
                      </Link>
                      <Link
                        href="/solutions/virtual-events"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Virtual Events
                      </Link>
                      <Link
                        href="/solutions/branded-games"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Branded Games
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/inspiration" className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium">
                INSPIRATION
              </Link>

              <div className="relative">
                <button
                  className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium flex items-center"
                  onClick={() => {
                    setResourcesOpen(!resourcesOpen)
                    setSolutionsOpen(false)
                    setWhyOpen(false)
                  }}
                >
                  RESOURCES
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {resourcesOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 ring-1 ring-white/10">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/resources/case-studies"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Case Studies
                      </Link>
                      <Link
                        href="/resources/guides"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Guides
                      </Link>
                      <Link
                        href="/resources/blog"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium flex items-center"
                  onClick={() => {
                    setWhyOpen(!whyOpen)
                    setSolutionsOpen(false)
                    setResourcesOpen(false)
                  }}
                >
                  WHY NEURAL COMMAND
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {whyOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 ring-1 ring-white/10">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/why-neural-command/our-approach"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Our Approach
                      </Link>
                      <Link
                        href="/why-neural-command/success-stories"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Success Stories
                      </Link>
                      <Link
                        href="/why-neural-command/team"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        Our Team
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white hover:text-black transition-colors"
            >
              LET'S CHAT
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
