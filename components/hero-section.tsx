"use client"

import { useLanguage } from "./language-provider"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins text-white">{t("hero.title")}</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">{t("hero.subtitle")}</p>
          <p className="text-blue-200 mb-8">{t("hero.location")}</p>

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white hover:bg-blue-50 text-blue-800 font-medium transition-all"
          >
            {t("hero.cta")}
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
