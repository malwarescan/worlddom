"use client"

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
      {alt.includes("Neural") || alt.includes("AI") ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-16 h-16 text-blue-500 dark:text-blue-400"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9v6" />
          <path d="M9 12h6" />
          <path d="m8 9 8 6" />
          <path d="m16 9-8 6" />
        </svg>
      ) : alt.includes("ROBLOX") ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-16 h-16 text-green-500 dark:text-green-400"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" y1="22" x2="12" y2="12" />
        </svg>
      ) : alt.includes("Dating") ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-16 h-16 text-pink-500 dark:text-pink-400"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-16 h-16 text-purple-500 dark:text-purple-400"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9Z" />
          <path d="M12 2v20" />
        </svg>
      )}
    </div>
  )
}
