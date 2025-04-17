import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Viontra | The Operating System for Your Digital Presence",
  description:
    "Control your website, SEO, Google Business, ads, and CRM from one intelligent interface. Eliminate developer headaches and focus on growing your business.",
  openGraph: {
    title: "Viontra | The Operating System for Your Digital Presence",
    description: "Control your website, SEO, Google Business, ads, and CRM from one intelligent interface.",
    url: "https://dominatethe.world/viontra",
    siteName: "Neural Command",
    images: [
      {
        url: "https://dominatethe.world/api/og?title=Viontra",
        width: 1200,
        height: 630,
        alt: "Viontra by Neural Command",
      },
    ],
  },
}

export default function ViontraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
