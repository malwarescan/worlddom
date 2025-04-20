import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Web2Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-200 to-gray-300 border-t-4 border-white">
      {/* Top section with diagonal stripes */}
      <div className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #3b82f6, #3b82f6 10px, transparent 10px, transparent 20px)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="web2-panel p-1 bg-white rounded-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    NC
                  </div>
                </div>
                <div className="text-2xl font-black text-blue-700 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                  Neural<span className="text-blue-500">Command</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Cutting-edge AI solutions for businesses of all sizes. Transform your operations with the power of
                artificial intelligence.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Services
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "AI Consulting", path: "/services/ai-consulting" },
                  { name: "Neural Networks", path: "/services/neural-network-development" },
                  { name: "Machine Learning", path: "/services/machine-learning-solutions" },
                  { name: "Data Analysis", path: "/services/data-analysis" },
                  { name: "AI Integration", path: "/services/ai-integration" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-blue-600 hover:text-blue-800 hover:underline font-bold flex items-center gap-1"
                    >
                      <span>→</span> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Resources
              </h3>
              <ul className="space-y-2">
                {[
                  { name: "Blog", path: "/blog" },
                  { name: "Case Studies", path: "/case-studies" },
                  { name: "Documentation", path: "/docs" },
                  { name: "FAQ", path: "/faq" },
                  { name: "Support", path: "/support" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-blue-600 hover:text-blue-800 hover:underline font-bold flex items-center gap-1"
                    >
                      <span>→</span> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">123 AI Boulevard, Tech District, CA 94103</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:info@neuralcommand.com" className="text-blue-600 hover:underline">
                    info@neuralcommand.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                    (555) 123-4567
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <div className="web2-panel p-4 bg-white">
                  <h4 className="font-bold text-blue-700 mb-2">Subscribe to Our Newsletter</h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="web2-button web2-button-blue rounded-l-none">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="py-4 bg-gradient-to-b from-gray-300 to-gray-400 border-t border-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Neural Command. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-blue-700 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-700 text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-600 hover:text-blue-700 text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
