"use client"

import { useLanguage } from "./language-provider"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function SeoSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl animate-float"></div>
              <div className="relative z-10 w-full h-full rounded-2xl shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Neural SEO Image</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="seo-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 z-0"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 font-poppins">{t("seo.title")}</h2>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-6 font-medium">{t("seo.subtitle")}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-8">{t("seo.description")}</p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span>{t("seo.point1")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span>{t("seo.point2")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span>{t("seo.point3")}</span>
                  </li>
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-all"
                >
                  {t("seo.cta")}
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
