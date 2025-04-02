"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileNavLinksProps {
  onLinkClick?: () => void
}

export default function MobileNavLinks({ onLinkClick }: MobileNavLinksProps) {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="flex flex-col space-y-1">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
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

