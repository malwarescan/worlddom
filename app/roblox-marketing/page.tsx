import Link from "next/link"
import { ArrowRight, Check, Gamepad2, Users, ShoppingBag, BarChart, Trophy, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RobloxMarketingPage() {
  const features = [
    "Immersive brand experiences with massive reach to Gen Z and Gen Alpha",
    "Virtual goods that generate revenue while building brand awareness",
    "Custom game development and branded environments",
    "In-experience advertising and sponsorships",
    "Analytics tools for tracking behavior in virtual worlds",
    "Cross-platform marketing integration",
  ]

  const caseStudies = [
    {
      company: "Paramount",
      campaign: "TMNT Experience",
      result: "12.4M+ visits and 89% positive sentiment",
      description:
        "Created an immersive Teenage Mutant Ninja Turtles experience with interactive pizza parties and character meet-ups, driving massive engagement and positive brand sentiment.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.44%E2%80%AFPM-TcnPEtdlToNmjIPsw947XNavsfbUfi.png",
    },
    {
      company: "NHL",
      campaign: "Virtual Hockey League",
      result: "8.7M+ visits and 215% ROI",
      description:
        "Developed a virtual street hockey environment with customizable gameplay and NHL branding, creating a new touchpoint for fans and attracting younger audiences to the sport.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.16%E2%80%AFPM-MemVYVCByqnBiuGG2LZ5YHDJDFTZ12.png",
    },
    {
      company: "Twice",
      campaign: "Virtual Concert Experience",
      result: "15.2M+ visits and 320% merchandise sales increase",
      description:
        "Created an interactive fan experience with virtual concerts and exclusive merchandise, allowing global fans to engage with the band in new ways.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-17%20at%2010.57.56%E2%80%AFPM-cIXTPvtGSbuHgdD2SZdvsOfeBFztu9.png",
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
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  ROBLOX: <span className="envato-gradient">The Next Frontier in Digital Marketing</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Leverage the massive reach and engagement of the ROBLOX platform to create immersive brand experiences
                  that resonate with younger audiences. Our ROBLOX Experience Measurement Framework has been adopted by
                  major agencies to track and optimize performance in virtual worlds.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#case-studies" className="envato-button inline-flex items-center">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Get a Free Consultation
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl animate-float"></div>
                  <div className="relative z-10 w-full h-full rounded-2xl bg-[rgb(var(--envato-dark))] border border-gray-800 flex items-center justify-center p-8">
                    <Gamepad2 className="w-32 h-32 text-[rgb(var(--envato-green))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">215%</div>
                <p className="text-gray-600">Average ROI on ROBLOX Campaigns</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">70M+</div>
                <p className="text-gray-600">Daily Active Users on ROBLOX</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">67%</div>
                <p className="text-gray-600">Of Users Are Under 16</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why ROBLOX Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why ROBLOX Marketing?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                ROBLOX offers unique opportunities for brands to connect with Gen Z and Gen Alpha audiences in
                immersive, interactive environments that traditional marketing channels cannot match.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center">
                      <Check className="h-4 w-4 text-[rgb(var(--envato-green))]" />
                    </div>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ROBLOX Marketing Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive ROBLOX marketing solutions to help your brand connect with the next generation of
                consumers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <Gamepad2 className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Experience Development</h3>
                <p className="text-gray-600">
                  We create branded ROBLOX experiences that engage users through interactive gameplay and immersive
                  environments.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Virtual Merchandise</h3>
                <p className="text-gray-600">
                  We design and launch branded virtual items that users can purchase and use across the ROBLOX platform.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Influencer Partnerships</h3>
                <p className="text-gray-600">
                  We connect brands with popular ROBLOX creators and influencers to amplify reach and authenticity.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">In-Game Events</h3>
                <p className="text-gray-600">
                  We organize virtual events, concerts, and competitions that create buzz and engagement around your
                  brand.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Targeted Advertising</h3>
                <p className="text-gray-600">
                  We place strategic in-experience ads and sponsorships that reach your target demographic.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Analytics & Optimization</h3>
                <p className="text-gray-600">
                  We track performance metrics and user behavior to continuously optimize your ROBLOX marketing
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ROBLOX Marketing Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful ROBLOX marketing campaigns that deliver measurable
                results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Discovery</h3>
                <p className="text-gray-600">
                  Understand your brand, goals, and target audience within the ROBLOX ecosystem
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Strategy</h3>
                <p className="text-gray-600">Develop a customized ROBLOX marketing plan aligned with your objectives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Execution</h3>
                <p className="text-gray-600">
                  Create and launch your ROBLOX experience, merchandise, or advertising campaign
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[rgb(var(--envato-green))]">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Optimization</h3>
                <p className="text-gray-600">Analyze performance data and refine your strategy for maximum impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how we've helped major brands succeed on the ROBLOX platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.company} ROBLOX campaign`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{study.company}</h3>
                    <h4 className="text-lg mb-2 text-gray-700">{study.campaign}</h4>
                    <p className="text-[rgb(var(--envato-green))] font-medium mb-4">{study.result}</p>
                    <p className="text-gray-600">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[rgb(var(--envato-green))]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Ready to enter the metaverse?</h2>
                <p className="text-white text-opacity-90">
                  Get a free consultation and discover how ROBLOX marketing can connect your brand with the next
                  generation.
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Start Your ROBLOX Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
