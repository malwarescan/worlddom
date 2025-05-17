import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 bg-[rgb(var(--envato-green))]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">Ready to transform your digital strategy?</h2>
            <p className="text-white text-opacity-90">Let's build the future - where tech meets connection.</p>
          </div>

          <a
            href="#contact"
            className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
