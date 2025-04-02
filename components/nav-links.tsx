"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="flex items-center space-x-1">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              isActive ? "text-white bg-indigo-500/20" : "text-gray-300 hover:text-white hover:bg-indigo-500/10"
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

