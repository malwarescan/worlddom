import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image src="/roblox-metaverse.jpg" alt="Roblox Metaverse" fill className="object-cover" priority />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          200M+ users, 2.5 hours
          <br />
          daily. Reach them with
          <br />
          Neural Command.
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Join the innovative brands already creating deep connections with a global audience on Roblox's immersive
          platform.
        </p>

        <div className="mt-10">
          <Link
            href="/get-started"
            className="inline-flex items-center px-8 py-3 border-2 border-white bg-transparent text-white text-lg font-medium rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          >
            GET STARTED
          </Link>
        </div>

        <div className="mt-16 text-sm text-gray-400">Data as of Q2 2023</div>
      </div>
    </div>
  )
}
