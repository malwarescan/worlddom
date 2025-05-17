"use client"

import { useLanguage } from "./language-provider"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">{t("hero.title")}</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 max-w-2xl gradient-text">{t("hero.subtitle")}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t("hero.location")}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-all"
          >
            {t("hero.cta")}
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
