import Link from "next/link"

export function Web2Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white border-b-4 border-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-blue-700 mb-4 leading-tight">
              AI Solutions for <span className="text-blue-500">Modern Businesses</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Neural Command delivers cutting-edge artificial intelligence solutions that help businesses automate
              processes, gain insights, and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="web2-button web2-button-blue">
                Get Started
              </Link>
              <Link href="/services" className="web2-button web2-button-green">
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="web2-panel p-3 rotate-1">
              <img src="/neural-genesis.png" alt="AI Neural Network" className="w-full h-auto rounded-md" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-300 text-yellow-800 font-bold py-2 px-4 rounded-full transform rotate-12 border-2 border-white shadow-lg">
              New: AI Consulting
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
