import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Analytics Dashboard | Neural Command",
  description:
    "Monitor your website performance, SEO metrics, and user interactions with our secure analytics dashboard.",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="dashboard-layout">{children}</div>
}

