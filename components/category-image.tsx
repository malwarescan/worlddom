export default function CategoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
        alt.includes("Neural") || alt.includes("AI")
          ? "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30"
          : alt.includes("ROBLOX")
            ? "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
            : alt.includes("Dating")
              ? "from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30"
              : "from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30"
      } transition-transform duration-500 hover:scale-105`}
    >
      {/* SVG icons removed as requested */}
    </div>
  )
}
