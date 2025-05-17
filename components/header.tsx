"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { Menu, X } from "lucide-react"

export default function Header() {
  const { t, language, setLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-900 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold font-poppins animated-gradient-text">Neural Command</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="nav-link text-sm font-medium text-white dark:text-white hover:text-blue-200 dark:hover:text-blue-200"
          >
            {t("nav.home")}
          </a>
          <a
            href="#expertise"
            className="nav-link text-sm font-medium text-white dark:text-white hover:text-blue-200 dark:hover:text-blue-200"
          >
            {t("nav.expertise")}
          </a>
          <a
            href="#achievements"
            className="nav-link text-sm font-medium text-white dark:text-white hover:text-blue-200 dark:hover:text-blue-200"
          >
            {t("nav.achievements")}
          </a>
          <a
            href="#contact"
            className="nav-link text-sm font-medium text-white dark:text-white hover:text-blue-200 dark:hover:text-blue-200"
          >
            {t("nav.contact")}
          </a>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full bg-white/90 text-blue-600 hover:bg-white transition-colors"
          >
            {t("language")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 mr-4 rounded-full bg-white/90 text-blue-600 hover:bg-white transition-colors"
          >
            {t("language")}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-blue-200 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="py-2 px-4 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </a>
            <a
              href="#expertise"
              className="py-2 px-4 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.expertise")}
            </a>
            <a
              href="#achievements"
              className="py-2 px-4 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.achievements")}
            </a>
            <a
              href="#contact"
              className="py-2 px-4 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
