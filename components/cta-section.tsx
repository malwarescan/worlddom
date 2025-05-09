import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to connect with the next generation?</h2>
        <p className="mt-6 text-xl text-purple-200 max-w-3xl mx-auto">
          Let's create an immersive Roblox experience that resonates with your audience and drives real business
          results.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white bg-white text-purple-900 text-lg font-medium rounded-md hover:bg-transparent hover:text-white transition-colors duration-300"
          >
            CONTACT US
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white bg-transparent text-white text-lg font-medium rounded-md hover:bg-white hover:text-purple-900 transition-colors duration-300"
          >
            EXPLORE SOLUTIONS
          </Link>
        </div>
      </div>
    </section>
  )
}
