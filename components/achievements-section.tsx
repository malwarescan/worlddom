"use client"

import { useLanguage } from "./language-provider"

export default function AchievementsSection() {
  const { t } = useLanguage()

  const achievements = [
    {
      title: t("achievements.item1.title"),
      description: t("achievements.item1.description"),
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: t("achievements.item2.title"),
      description: t("achievements.item2.description"),
      color: "from-emerald-500 to-blue-500",
    },
    {
      title: t("achievements.item3.title"),
      description: t("achievements.item3.description"),
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: t("achievements.item4.title"),
      description: t("achievements.item4.description"),
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-poppins">{t("achievements.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="achievement-card bg-white dark:bg-slate-800/80 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700"
            >
              <div
                className={`bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
