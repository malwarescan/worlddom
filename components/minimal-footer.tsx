import Link from "next/link"

export function MinimalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-black mb-4">Neural Command</h3>
            <p className="text-gray-500 text-sm mb-4">AI-powered solutions for modern businesses.</p>
          </div>

          <div>
            <h4 className="font-medium text-black mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 text-sm hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-black mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "AI Consulting", href: "/services/ai-consulting" },
                { label: "Neural Networks", href: "/services/neural-network-development" },
                { label: "Machine Learning", href: "/services/machine-learning-solutions" },
                { label: "Roblox Advertising", href: "/roblox-advertising" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 text-sm hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-black mb-4">Contact</h4>
            <address className="not-italic text-gray-500 text-sm space-y-2">
              <p>Santa Monica, CA</p>
              <p>South Bend, IN</p>
              <p>
                <a href="mailto:info@neuralcommandllc.com" className="hover:text-black transition-colors">
                  info@neuralcommandllc.com
                </a>
              </p>
              <p>
                <a href="tel:+18445684624" className="hover:text-black transition-colors">
                  (844) 568-4624
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Neural Command. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
