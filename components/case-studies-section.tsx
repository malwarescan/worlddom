import Link from "next/link"

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Nike Air Max Experience",
      description: "An interactive virtual store allowing users to try on and customize Air Max sneakers.",
      image: "/case-studies/nike.jpg",
      link: "/case-studies/nike",
    },
    {
      title: "Gucci Garden",
      description: "A virtual exhibition space showcasing Gucci's latest collection with purchasable virtual items.",
      image: "/case-studies/gucci.jpg",
      link: "/case-studies/gucci",
    },
    {
      title: "Warner Bros Movie Premiere",
      description: "A virtual movie premiere event with exclusive content and interactive experiences.",
      image: "/case-studies/warner.jpg",
      link: "/case-studies/warner-bros",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            See how leading brands have created impactful experiences on Roblox with Neural Command
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link key={index} href={study.link} className="block group">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
                <div className="relative h-full w-full bg-gray-800">
                  {/* Placeholder for case study image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span>Case Study Image</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                  <p className="mt-2 text-gray-300">{study.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 bg-transparent rounded-md hover:bg-purple-600 hover:text-white transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
