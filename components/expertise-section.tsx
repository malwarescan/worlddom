"use client"

import { useLanguage } from "./language-provider"
import { Brain, TrendingUp, Layers, Code } from "lucide-react"

export default function ExpertiseSection() {
  const { t } = useLanguage()

  const expertiseAreas = [
    {
      icon: Brain,
      title: t("expertise.ai"),
      items: t("expertise.ai.items"),
    },
    {
      icon: TrendingUp,
      title: t("expertise.growth"),
      items: t("expertise.growth.items"),
    },
    {
      icon: Layers,
      title: t("expertise.immersive"),
      items: t("expertise.immersive.items"),
    },
    {
      icon: Code,
      title: t("expertise.development"),
      items: t("expertise.development.items"),
    },
  ]

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-poppins">{t("expertise.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="expertise-card bg-white dark:bg-slate-800/80 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-700"
            >
              <area.icon className="expertise-icon w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{area.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
