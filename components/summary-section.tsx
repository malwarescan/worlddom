"use client"

import { useLanguage } from "./language-provider"

export default function SummarySection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins">{t("summary.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t("summary.description")}</p>
        </div>
      </div>
    </section>
  )
}
