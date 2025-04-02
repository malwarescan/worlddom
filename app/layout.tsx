import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neural Command | AI-Powered Neural Network Solutions for Business",
  description:
    "Neural Command delivers cutting-edge AI and neural network solutions that transform businesses through intelligent automation, predictive analytics, and autonomous systems. Elevate your operations with our enterprise-grade AI technology.",
  keywords:
    "neural networks, artificial intelligence, AI solutions, predictive analytics, machine learning, business automation, neural command, enterprise AI",
  authors: [{ name: "Neural Command" }],
  creator: "Neural Command",
  publisher: "Neural Command",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dominatethe.world",
    title: "Neural Command | AI-Powered Neural Network Solutions",
    description:
      "Transform your business with cutting-edge neural network technology and AI solutions designed for real-world impact.",
    siteName: "Neural Command",
    images: [
      {
        url: "https://dominatethe.world/api/og?title=Neural%20Command",
        width: 1200,
        height: 630,
        alt: "Neural Command - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neural Command | AI-Powered Neural Network Solutions",
    description:
      "Transform your business with cutting-edge neural network technology and AI solutions designed for real-world impact.",
    images: ["https://dominatethe.world/api/og?title=Neural%20Command"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#070914] text-white overflow-x-hidden`}>
        <Header />
        <main className="flex-grow pt-16 md:pt-20 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'