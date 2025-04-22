"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

// Product data structure
const launchDeck = [
  {
    name: "Viontra",
    icon: "/icons/commandline.svg",
    tagline: "The Operating System for Your Digital Presence",
    description: "Control your website, SEO, Google Business, ads, and CRM from one intelligent interface.",
    status: "beta",
    statusPercent: 85,
    link: "/viontra",
    linkText: "Explore Viontra",
    delay: 0.1,
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "RankHack",
    icon: "/icons/rankhack.svg",
    tagline: "AI-Powered SEO Optimization",
    description: "Continuously improves your search rankings through intelligent content and technical adjustments.",
    status: "development",
    statusPercent: 65,
    link: "#waitlist",
    linkText: "Join Waitlist",
    delay: 0.2,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Childish",
    icon: "/icons/childish.svg",
    tagline: "Simplified AI for Everyone",
    description: "Making complex AI tools accessible to non-technical users through intuitive interfaces.",
    status: "alpha",
    statusPercent: 40,
    link: "#demo",
    linkText: "Request Demo",
    delay: 0.3,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "SoulFilter",
    icon: "/icons/soulfilter.svg",
    tagline: "AI-Enhanced Content Moderation",
    description:
      "Automatically filter and moderate content across all your digital channels with contextual awareness.",
    status: "concept",
    statusPercent: 20,
    link: "#learn",
    linkText: "Learn More",
    delay: 0.4,
    color: "from-purple-400 to-violet-500",
  },
  {
    name: "DoorMat",
    icon: "/icons/doormat.svg",
    tagline: "Intelligent Customer Onboarding",
    description: "Streamline customer onboarding with AI-guided workflows and personalized experiences.",
    status: "planning",
    statusPercent: 10,
    link: "#subscribe",
    linkText: "Subscribe for Updates",
    delay: 0.5,
    color: "from-green-400 to-emerald-500",
  },
]

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "beta":
        return "bg-amber-100 text-amber-800 border-amber-300"
      case "alpha":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "development":
        return "bg-orange-100 text-orange-800 border-orange-300"
      case "concept":
        return "bg-purple-100 text-purple-800 border-purple-300"
      case "planning":
        return "bg-green-100 text-green-800 border-green-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusColor(status)} uppercase`}>
      {status}
    </span>
  )
}

// Progress bar component
const ProgressBar = ({ percent, color }: { percent: number; color: string }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
      <motion.div
        className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  )
}

export default function LaunchDeckPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Intro Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-medium rounded-full mb-4">
              Neural Command Phase 1
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">AI-Native Product Suite</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of AI solutions designed to transform your business operations and
              drive innovation.
            </p>
          </motion.div>

          {/* Animated Icon Grid */}
          <motion.div
            className="grid grid-cols-5 gap-4 max-w-3xl mx-auto mb-16 hidden md:grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {launchDeck.map((project, index) => (
              <motion.div
                key={`icon-${project.name}`}
                className="flex justify-center items-center"
                initial={{ y: -100, opacity: 0, rotate: -15 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  delay: project.delay,
                  type: "spring",
                  stiffness: 140,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.color} shadow-lg`}
                >
                  <img src={project.icon || "/placeholder.svg"} alt={project.name} className="w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {launchDeck.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.delay + 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${project.color} mr-4 shadow`}
                      >
                        <img src={project.icon || "/placeholder.svg"} alt={project.name} className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <p className="text-lg font-medium text-gray-700 mb-2">{project.tagline}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Development Progress</span>
                      <span className="text-sm font-medium text-gray-700">{project.statusPercent}%</span>
                    </div>
                    <ProgressBar percent={project.statusPercent} color={project.color} />

                    <Link
                      href={project.link}
                      className={`inline-flex items-center justify-center w-full px-4 py-2 mt-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r ${project.color} hover:opacity-90 transition-opacity`}
                    >
                      {project.linkText}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="relative p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white opacity-10"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white opacity-10"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Our comprehensive portfolio of AI apps, tools, and plugins is designed to give you a competitive edge in
                today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Schedule a Demo
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Learn About Neural Command
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 text-sm">
        <p>© 2025 Neural Command. All rights reserved.</p>
      </footer>
    </div>
  )
}
