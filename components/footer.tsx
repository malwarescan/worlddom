import Link from "next/link"
import SocialLinks from "./social-links"
import { MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050813] border-t border-indigo-900/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">NEURAL COMMAND</h3>
            <p className="text-gray-400 mb-4">Your Go-to Neural Network Platform for cutting-edge AI solutions.</p>
            <div className="flex justify-center md:justify-start">
              <SocialLinks />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai-consulting" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/neural-network-development"
                  className="text-gray-400 hover:text-indigo-300 transition-colors"
                >
                  Neural Network Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/machine-learning-solutions"
                  className="text-gray-400 hover:text-indigo-300 transition-colors"
                >
                  Machine Learning Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/data-analysis" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/agentic-search-services" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  Agentic Search Services
                </Link>
              </li>
              <li>
                <Link href="/ai-savings-estimator" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  AI Savings Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Contact & Locations</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-indigo-400 flex-shrink-0" />
                <div>
                  <p className="text-indigo-300 font-medium">Santa Monica, CA</p>
                  <p className="text-gray-400 text-sm">Main Headquarters</p>
                </div>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-indigo-400 flex-shrink-0" />
                <div>
                  <p className="text-indigo-300 font-medium">South Bend, IN</p>
                  <p className="text-gray-400 text-sm">Midwest Satellite Office</p>
                </div>
              </li>
              <li className="mt-4 text-center md:text-left">
                <a
                  href="mailto:info@neuralcommandllc.com"
                  className="text-gray-400 hover:text-indigo-300 transition-colors"
                >
                  info@neuralcommandllc.com
                </a>
              </li>
              <li className="text-center md:text-left">
                <a href="tel:+18445684624" className="text-gray-400 hover:text-indigo-300 transition-colors">
                  (844) 568-4624
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-900/20 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Neural Command. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
