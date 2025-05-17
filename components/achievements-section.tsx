"use client"

import { useLanguage } from "./language-provider"

export default function AchievementsSection() {
  const { t } = useLanguage()

  const achievements = [
    {
      title: t("achievements.item1.title"),
      description: t("achievements.item1.description"),
    },
    {
      title: t("achievements.item2.title"),
      description: t("achievements.item2.description"),
    },
    {
      title: t("achievements.item3.title"),
      description: t("achievements.item3.description"),
    },
    {
      title: t("achievements.item4.title"),
      description: t("achievements.item4.description"),
    },
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">{t("achievements.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white dark:bg-slate-800/80 shadow-md border border-gray-100 dark:border-slate-700"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                {achievement.title}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
