"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import NavLinks from "@/components/nav-links"
import MobileNavLinks from "@/components/mobile-nav-links"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fix for mobile menu misalignment
  useEffect(() => {
    // When menu is open, prevent body scroll
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px" // Prevent layout shift
    } else {
      // When menu is closed, restore scroll
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isOpen])

  const handleMenuOpen = () => setIsOpen(true)
  const handleMenuClose = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-500/30 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-indigo-300 rounded-sm"></div>
            </div>
            <span className="font-bold text-white text-lg hidden sm:inline-block">NEURAL COMMAND</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <div>
              <Link href="/checkout?plan=growth">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild onClick={handleMenuOpen}>
                <Button variant="ghost" className="p-2 text-white hover:bg-indigo-500/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-[#050813] border-indigo-900/20"
                onInteractOutside={handleMenuClose}
                onEscapeKeyDown={handleMenuClose}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 mt-2">
                    <Link href="/" className="flex items-center space-x-2" onClick={handleMenuClose}>
                      <div className="w-8 h-8 bg-indigo-500/30 rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-indigo-300 rounded-sm"></div>
                      </div>
                      <span className="font-bold text-white text-lg">NEURAL COMMAND</span>
                    </Link>
                  </div>
                  <MobileNavLinks onLinkClick={handleMenuClose} />
                  <div className="mt-auto pt-8">
                    <Link href="/checkout?plan=growth" className="w-full" onClick={handleMenuClose}>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

