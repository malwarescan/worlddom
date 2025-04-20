import { Web2Header } from "@/components/web2-header"
import { Web2Footer } from "@/components/web2-footer"
import Link from "next/link"
import { ArrowRight, Star, CheckCircle, Award, TrendingUp, Zap } from "lucide-react"
import GlossyBadge from "@/components/glossy-badge"

export default function Home() {
  return (
    <>
      <Web2Header />

      <main className="min-h-screen bg-gray-100 web2-subtle-pattern pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-500 to-blue-700 py-16 border-b-4 border-white">
          {/* Diagonal stripes background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #fff, #fff 10px, transparent 10px, transparent 20px)",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2 text-center md:text-left">
                {/* New badge */}
                <div className="inline-block mb-4 relative">
                  <div className="absolute -top-6 -left-6 z-10">
                    <div className="web2-starburst">
                      <div className="bg-yellow-400 text-yellow-800 font-bold py-1 px-3 rounded-full transform rotate-12 border-2 border-white shadow-lg text-sm">
                        NEW!
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] mb-2">
                    Neural Command
                  </h1>
                  <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                </div>

                <h2 className="text-xl md:text-2xl text-blue-100 mb-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                  Cutting-Edge AI Solutions for Your Business
                </h2>

                <p className="text-white mb-8 max-w-lg">
                  Leverage the power of artificial intelligence to transform your business operations, enhance customer
                  experiences, and drive innovation.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {/* Glossy buttons with reflections */}
                  <div className="web2-button-container">
                    <Link
                      href="/services"
                      className="web2-button bg-gradient-to-b from-green-400 to-green-600 px-6 py-3 text-lg"
                    >
                      Our Services
                    </Link>
                    <div className="web2-reflection"></div>
                  </div>

                  <div className="web2-button-container">
                    <Link
                      href="/contact"
                      className="web2-button bg-gradient-to-b from-blue-400 to-blue-600 px-6 py-3 text-lg"
                    >
                      Contact Us
                    </Link>
                    <div className="web2-reflection"></div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative">
                  {/* Main image with reflection */}
                  <div className="web2-panel p-3 rotate-3 shadow-xl">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src="/neural-genesis.png"
                        alt="Neural Command AI Technology"
                        className="w-full h-auto rounded-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30"></div>
                    </div>
                  </div>
                  <div className="web2-card-reflection"></div>

                  {/* Badges */}
                  <div className="absolute -top-6 -right-6 rotate-12">
                    <div className="web2-glossy-badge bg-gradient-to-b from-red-400 to-red-600 text-white px-4 py-1 rounded-full font-bold border-2 border-white shadow-lg">
                      HOT!
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 -rotate-12">
                    <div className="web2-glossy-badge bg-gradient-to-b from-blue-400 to-blue-600 text-white px-4 py-1 rounded-full font-bold border-2 border-white shadow-lg">
                      AI Powered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Banner */}
        <section className="web2-featured-banner py-4 border-b-4 border-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between text-white">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Featured on TechCrunch, Forbes, and Wired</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="font-bold">Trusted by 500+ companies worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Award-winning AI solutions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-3xl font-bold text-blue-700 mb-2">Our AI Solutions</h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              {/* Ribbon */}
              <div className="absolute -right-12 top-0 bg-gradient-to-b from-red-500 to-red-700 text-white px-4 py-1 transform rotate-45 shadow-md font-bold text-sm">
                Premium
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover how our cutting-edge AI technologies can transform your business operations and drive
              unprecedented growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Box 1 */}
            <div className="web2-card-container">
              <div className="web2-card bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-4 text-white font-bold text-xl flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  Neural Networks
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Custom neural network solutions designed to solve your specific business challenges with
                    unparalleled accuracy.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      href="/services/neural-network-development"
                      className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="web2-glossy-badge bg-gradient-to-b from-green-400 to-green-600 text-white px-2 py-1 text-xs rounded-full font-bold">
                      Popular
                    </div>
                  </div>
                </div>
              </div>
              <div className="web2-card-reflection"></div>
            </div>

            {/* Feature Box 2 */}
            <div className="web2-card-container">
              <div className="web2-card bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-b from-green-400 to-green-600 p-4 text-white font-bold text-xl flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  Machine Learning
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Advanced machine learning algorithms that learn from your data and improve over time for optimal
                    results.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      href="/services/machine-learning-solutions"
                      className="text-green-600 font-bold hover:underline flex items-center gap-1"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="web2-glossy-badge bg-gradient-to-b from-blue-400 to-blue-600 text-white px-2 py-1 text-xs rounded-full font-bold">
                      Featured
                    </div>
                  </div>
                </div>
              </div>
              <div className="web2-card-reflection"></div>
            </div>

            {/* Feature Box 3 */}
            <div className="web2-card-container">
              <div className="web2-card bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-b from-orange-400 to-orange-600 p-4 text-white font-bold text-xl flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  AI Consulting
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Expert guidance on implementing AI solutions tailored to your business needs and strategic goals.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      href="/services/ai-consulting"
                      className="text-orange-600 font-bold hover:underline flex items-center gap-1"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="web2-glossy-badge bg-gradient-to-b from-purple-400 to-purple-600 text-white px-2 py-1 text-xs rounded-full font-bold">
                      New
                    </div>
                  </div>
                </div>
              </div>
              <div className="web2-card-reflection"></div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background with diagonal stripes */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #4299e1, #4299e1 10px, transparent 10px, transparent 20px)",
            }}
          />
          <div className="border-y-4 border-white absolute left-0 right-0 top-0 bottom-0 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-2">Why Choose Neural Command</h2>
              <div className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="web2-panel p-3 rotate-2">
                  <img src="/ai-collaboration-hub.png" alt="Neural Command Team" className="w-full h-auto rounded-md" />
                </div>
                <div className="web2-card-reflection"></div>
                <div className="absolute -top-6 -right-6 rotate-12">
                  <GlossyBadge text="Expert Team" color="green" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <ul className="space-y-6">
                  {[
                    {
                      icon: <Award className="h-6 w-6 text-yellow-500" />,
                      title: "Industry Expertise",
                      description: "Over 10 years of experience in AI and machine learning.",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-blue-500" />,
                      title: "Custom Solutions",
                      description: "Tailored AI solutions designed for your specific business needs.",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
                      title: "Cutting-Edge Technology",
                      description: "Access to the latest advancements in artificial intelligence.",
                    },
                    {
                      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
                      title: "Proven Results",
                      description: "Track record of delivering measurable business outcomes.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="web2-panel p-4 bg-white">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-700 text-lg">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">What Our Clients Say</h2>
            <div className="h-1 w-36 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="web2-testimonial-container">
              <div className="web2-testimonial">
                <div className="relative mb-4">
                  <div className="absolute -top-4 -left-4 text-6xl text-blue-200 opacity-50">"</div>
                  <p className="relative z-10 italic text-gray-600">
                    Neural Command transformed our customer service with their AI chatbot solution. We've seen a 40%
                    reduction in support tickets and significantly improved customer satisfaction.
                  </p>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 opacity-50">"</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="web2-panel p-1 bg-white rounded-full">
                    <img
                      src="/confident-professional.png"
                      alt="Sarah Johnson"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-blue-700">Sarah Johnson</div>
                    <div className="text-gray-500">CEO, TechSolutions Inc.</div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="web2-testimonial-reflection"></div>
            </div>

            {/* Testimonial 2 */}
            <div className="web2-testimonial-container">
              <div className="web2-testimonial">
                <div className="relative mb-4">
                  <div className="absolute -top-4 -left-4 text-6xl text-blue-200 opacity-50">"</div>
                  <p className="relative z-10 italic text-gray-600">
                    The predictive analytics system developed by Neural Command has revolutionized our inventory
                    management. We've reduced waste by 35% and improved our supply chain efficiency.
                  </p>
                  <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 opacity-50">"</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="web2-panel p-1 bg-white rounded-full">
                    <img
                      src="/confident-executive.png"
                      alt="Michael Chen"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-blue-700">Michael Chen</div>
                    <div className="text-gray-500">Operations Director, Global Retail</div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="web2-testimonial-reflection"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white border-y-4 border-white relative overflow-hidden">
          {/* Diagonal stripes background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #fff, #fff 10px, transparent 10px, transparent 20px)",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Clients Worldwide" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "AI Experts" },
                { number: "10+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="web2-panel p-6 bg-white bg-opacity-10">
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 container mx-auto px-4 text-center">
          <div className="web2-panel p-8 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
            {/* Ribbon */}
            <div className="absolute -right-12 top-8 bg-gradient-to-b from-red-500 to-red-700 text-white px-12 py-2 transform rotate-45 shadow-md font-bold">
              Limited Time
            </div>

            <h2 className="text-3xl font-bold text-blue-700 mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a free consultation and discover how our AI solutions can drive growth for
              your business.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="web2-button-container">
                <Link
                  href="/contact"
                  className="web2-button bg-gradient-to-b from-green-400 to-green-600 px-8 py-3 text-lg"
                >
                  Get Started
                </Link>
                <div className="web2-reflection"></div>
              </div>

              <div className="web2-button-container">
                <Link
                  href="/services"
                  className="web2-button bg-gradient-to-b from-blue-400 to-blue-600 px-8 py-3 text-lg"
                >
                  Explore Services
                </Link>
                <div className="web2-reflection"></div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Web2Footer />
    </>
  )
}
