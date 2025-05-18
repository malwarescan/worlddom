import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  const portfolioProjects = [
    {
      title: "Paramount: TMNT Experience",
      category: "ENTERTAINMENT",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.44%E2%80%AFPM-TcnPEtdlToNmjIPsw947XNavsfbUfi.png",
      description:
        "Immersive ROBLOX experience with interactive pizza parties and character meet-ups, driving 12.4M+ visits and 89% positive sentiment.",
      results: "12.4M+ visits, 89% positive sentiment",
      link: "/case-studies/paramount-tmnt",
    },
    {
      title: "NHL: Virtual Hockey League",
      category: "SPORTS",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.16%E2%80%AFPM-MemVYVCByqnBiuGG2LZ5YHDJDFTZ12.png",
      description:
        "Virtual street hockey environment with customizable gameplay and NHL branding, creating a new touchpoint for fans and attracting younger audiences.",
      results: "8.7M+ visits, 215% ROI",
      link: "/case-studies/nhl-hockey",
    },
    {
      title: "Twice: Virtual Concert Experience",
      category: "MUSIC",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.56%E2%80%AFPM-cIXTPvtGSbuHgdD2SZdvsOfeBFztu9.png",
      description:
        "Interactive fan experience with virtual concerts and exclusive merchandise, allowing global fans to engage with the band in new ways.",
      results: "15.2M+ visits, 320% merchandise sales increase",
      link: "/case-studies/twice-concert",
    },
    {
      title: "E-commerce Retailer Neural SEO",
      category: "RETAIL",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      description:
        "Implemented neural SEO architecture to optimize product descriptions and category pages, resulting in significant traffic growth and revenue increase.",
      results: "312% increase in organic traffic within 6 months",
      link: "/case-studies/ecommerce-seo",
    },
    {
      title: "SaaS Platform AI-Driven Content",
      category: "TECHNOLOGY",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      description:
        "Deployed AI-driven content strategy targeting high-intent keywords, dramatically improving lead quality and conversion rates.",
      results: "247% more qualified leads from organic search",
      link: "/case-studies/saas-content",
    },
    {
      title: "Healthcare Provider Local SEO",
      category: "HEALTHCARE",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
      description:
        "Utilized neural SEO to optimize medical content for both search engines and patient understanding, increasing visibility and trust.",
      results: "185% growth in patient inquiries",
      link: "/case-studies/healthcare-seo",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[rgb(var(--envato-darker))] py-16 md:py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 hero-pattern opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Our <span className="envato-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover how we've helped brands connect more meaningfully with their audiences through AI-driven
                strategies and immersive experiences.
              </p>
              <Link
                href="#featured-work"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[rgb(var(--envato-green))] hover:bg-opacity-90 text-white font-medium transition-all"
              >
                View Our Work <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">280%</div>
                <p className="text-gray-600">Average Traffic Growth</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">215%</div>
                <p className="text-gray-600">ROI in ROBLOX Campaigns</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">450%</div>
                <p className="text-gray-600">Engagement Growth with AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="featured-work" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our portfolio of successful projects across various industries and platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-[rgba(var(--envato-green),0.1)] text-[rgb(var(--envato-green))] text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.results}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-[rgb(var(--envato-green))] font-medium hover:underline"
                    >
                      View Case Study{" "}
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI-driven solutions have helped businesses across various sectors achieve unprecedented growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[rgb(var(--envato-green))]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Retail & E-commerce</h3>
                <p className="text-gray-600">Driving traffic and conversions through AI-powered optimization.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[rgb(var(--envato-green))]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Entertainment</h3>
                <p className="text-gray-600">Creating immersive experiences that engage audiences in new ways.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[rgb(var(--envato-green))]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Healthcare</h3>
                <p className="text-gray-600">Optimizing visibility while maintaining trust and compliance.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[rgb(var(--envato-green))]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Technology</h3>
                <p className="text-gray-600">Helping SaaS and tech companies scale through AI-driven strategies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-gray-600">Marketing Director, E-commerce Retailer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Neural Command's AI-driven SEO strategy transformed our online presence. We've seen a 312% increase
                  in organic traffic and a significant boost in conversions."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">AS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Amanda Smith</h4>
                    <p className="text-sm text-gray-600">VP of Digital, Entertainment Company</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The ROBLOX campaign Neural Command created for us exceeded all expectations. The immersive experience
                  resonated with our audience and delivered an incredible ROI."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">MJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Johnson</h4>
                    <p className="text-sm text-gray-600">CEO, SaaS Platform</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Working with Neural Command has been transformative for our business. Their AI content strategy has
                  dramatically improved our lead quality and conversion rates."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[rgb(var(--envato-green))]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Ready to transform your digital strategy?</h2>
                <p className="text-white text-opacity-90">Let's build the future - where tech meets connection.</p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
