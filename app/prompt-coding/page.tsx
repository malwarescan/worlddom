import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prompting for Coding | Neural Command",
  description:
    "Learn how to build real-world apps, debug errors, refactor messy code, and automate development workflows using AI tools.",
  alternates: {
    canonical: "https://neuralcommandllc.com/prompt-coding",
  },
}

export default function PromptingForCodingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <span className="font-medium text-lg">Neural Command</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="/work" className="hover:opacity-70 transition-opacity">
            Work
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="mb-6">
            <span className="text-lg md:text-xl inline-flex items-center gap-2">
              <span className="inline-block">💻</span> AI Won't Replace Developers.
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal mt-3 leading-tight">
              But Developers Who Know How to Prompt AI Will Replace Those Who Don't.
            </h1>
          </div>

          <div className="h-px w-16 bg-black my-12"></div>

          <div className="mb-12">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <div>
                <h2 className="text-xl md:text-2xl font-medium mb-3">Introducing: Prompting for Coding</h2>
                <p className="text-lg md:text-xl max-w-3xl">
                  A hands-on, practical course by Neural Command that teaches you how to build real-world apps, debug
                  errors, refactor messy code, and automate development workflows — all using cutting-edge AI tools like
                  ChatGPT, Claude, Copilot, Cursor, Devon, and Langchain.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px w-16 bg-black my-12"></div>
        </section>

        {/* What You'll Learn Section */}
        <section className="mb-24 group">
          <div className="flex items-start gap-3 mb-8">
            <span className="text-2xl">⚡</span>
            <h2 className="text-xl md:text-2xl font-medium">What You'll Learn:</h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-6 pl-8">
            <li className="flex items-start gap-3 group/item">
              <span className="text-xl">🛠️</span>
              <span className="text-lg">Prompting to build full-stack applications</span>
            </li>
            <li className="flex items-start gap-3 group/item">
              <span className="text-xl">🧠</span>
              <span className="text-lg">Smarter debugging with LLMs</span>
            </li>
            <li className="flex items-start gap-3 group/item">
              <span className="text-xl">🔄</span>
              <span className="text-lg">Instantly refactor and write tests</span>
            </li>
            <li className="flex items-start gap-3 group/item">
              <span className="text-xl">🧩</span>
              <span className="text-lg">Master tools like Cursor, Devon, and Langchain</span>
            </li>
          </ul>

          <p className="mt-8 text-lg italic">
            No fluff. No guesswork. Just powerful, AI-enhanced coding techniques that work.
          </p>

          <div className="h-px w-16 bg-black my-12"></div>
        </section>

        {/* Who This Is For Section */}
        <section className="mb-24">
          <div className="flex items-start gap-3 mb-8">
            <span className="text-2xl">🎯</span>
            <h2 className="text-xl md:text-2xl font-medium">Who This Is For:</h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-6 pl-8">
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span className="text-lg">Developers who want to supercharge their productivity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span className="text-lg">Tech founders building MVPs fast</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span className="text-lg">AI enthusiasts ready to turn ideas into software</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span className="text-lg">Freelancers looking to stay ahead of the curve</span>
            </li>
          </ul>

          <div className="h-px w-16 bg-black my-12"></div>
        </section>

        {/* Why This Course Matters Section */}
        <section className="mb-24">
          <div className="flex items-start gap-3 mb-8">
            <span className="text-2xl">💡</span>
            <h2 className="text-xl md:text-2xl font-medium">Why This Course Matters:</h2>
          </div>

          <div className="pl-8">
            <p className="text-lg md:text-xl mb-4">
              Prompting isn't just a skill — it's the new literacy in software development.
            </p>
            <p className="text-lg md:text-xl">
              Learn how to speak the language of LLMs and get them to build, debug, and ship code like a pro.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 mb-24">
          <div className="h-px w-full bg-black my-12"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h2 className="text-2xl md:text-3xl font-normal">Ready to level up your coding skills?</h2>
            <Link href="/prompt-coding/enroll">
              <Button className="bg-black text-white hover:bg-black/90 rounded-none px-8 py-6 text-lg group">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-xl font-medium mb-2">Let's work together</p>
            <a href="mailto:hello@neuralcommand.ai" className="text-lg hover:opacity-70 transition-opacity">
              hello@neuralcommand.ai
            </a>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:opacity-70 transition-opacity">
              Privacy
            </Link>
            <Link href="/terms" className="hover:opacity-70 transition-opacity">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
