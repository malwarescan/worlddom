import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Neural Network Technology | Neural Command",
  description:
    "Explore Neural Command's proprietary neural network architectures, quantum neural processing, adaptive learning algorithms, and distributed network architecture.",
  keywords:
    "neural network technology, quantum neural processing, adaptive learning algorithms, distributed AI architecture, AI security protocols, Neural Command technology",
  openGraph: {
    title: "Our Neural Network Technology | Neural Command",
    description:
      "Discover our proprietary neural network architectures that push the boundaries of what's possible with artificial intelligence.",
    images: [
      {
        url: "https://dominatethe.world/api/og?title=Neural%20Command%20Technology",
        width: 1200,
        height: 630,
        alt: "Neural Command Technology",
      },
    ],
  },
}

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#050914]">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">OUR TECHNOLOGY</h1>

          <p className="text-xl text-gray-300 mb-16 text-center">
            At Neural Command, we've developed proprietary neural network architectures that push the boundaries of
            what's possible with artificial intelligence.
          </p>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#0a1029]/50 border border-indigo-900/30 p-8 rounded-lg shadow-lg hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500/50 to-purple-500/50 flex items-center justify-center shrink-0 shadow-md mb-4 md:mb-0">
                    <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-sm bg-indigo-400"></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">{tech.title}</h2>
                    <p className="text-gray-300 mb-6">{tech.description}</p>
                    <ul className="space-y-3">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#0a1029]/50 border border-indigo-900/30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">READY TO TRANSFORM YOUR BUSINESS?</h2>
            <p className="text-gray-300 mb-6">
              Contact us today to discuss how our advanced neural network technology can be applied to your specific
              needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all"
            >
              CONTACT US <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-white mt-16">TECHNICAL SPECIFICATIONS</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-[#0a1029]/50 border border-indigo-900/30 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-white">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const technologies = [
  {
    title: "Quantum Neural Processing",
    description:
      "Our quantum-inspired neural processing units leverage advanced algorithms to process complex data patterns at unprecedented speeds, enabling real-time decision making and adaptive learning.",
    features: [
      "Parallel processing architecture",
      "Quantum-inspired algorithms",
      "Real-time pattern recognition",
      "Adaptive learning capabilities",
      "Scalable processing units",
    ],
  },
  {
    title: "Adaptive Learning Algorithms",
    description:
      "Our proprietary adaptive learning algorithms continuously evolve and improve based on new data, ensuring your systems become more intelligent and efficient over time.",
    features: [
      "Self-optimizing neural networks",
      "Dynamic pattern adaptation",
      "Continuous performance improvement",
      "Automated feature extraction",
      "Multi-dimensional learning",
    ],
  },
  {
    title: "Distributed Network Architecture",
    description:
      "Our distributed network architecture enables seamless scaling and robust performance across multiple nodes, ensuring high availability and fault tolerance.",
    features: [
      "Load-balanced processing",
      "Automatic failover",
      "Horizontal scaling",
      "Edge computing support",
      "Real-time synchronization",
    ],
  },
  {
    title: "Security Protocols",
    description:
      "Advanced neural security systems protect your data and infrastructure using AI-powered threat detection and response mechanisms.",
    features: [
      "AI-powered threat detection",
      "Real-time response systems",
      "Encrypted data channels",
      "Behavioral analysis",
      "Autonomous security measures",
    ],
  },
]

const specifications = [
  {
    category: "Processing Capabilities",
    items: [
      "Up to 1 petaFLOP processing power",
      "Multi-threaded neural computation",
      "Dynamic resource allocation",
      "Hardware acceleration support",
    ],
  },
  {
    category: "Network Architecture",
    items: [
      "Distributed processing across nodes",
      "Low-latency data transmission",
      "Redundant failover systems",
      "Edge computing integration",
    ],
  },
  {
    category: "Learning Systems",
    items: [
      "Real-time pattern recognition",
      "Adaptive learning algorithms",
      "Automated feature extraction",
      "Continuous model optimization",
    ],
  },
  {
    category: "Security Features",
    items: [
      "End-to-end encryption",
      "AI-powered threat detection",
      "Secure data transmission",
      "Access control systems",
    ],
  },
]

