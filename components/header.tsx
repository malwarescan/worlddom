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
        isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold font-poppins gradient-text">Neural Command</span>
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
            className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors"
          >
            {t("language")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 mr-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors"
          >
            {t("language")}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </a>
            <a
              href="#expertise"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.expertise")}
            </a>
            <a
              href="#achievements"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.achievements")}
            </a>
            <a
              href="#contact"
              className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
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
