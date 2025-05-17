"use client"

import { useLanguage } from "./language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 bg-slate-100 dark:bg-slate-900/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold font-poppins gradient-text">Neural Command</span>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
