import Link from "next/link"
import { ArrowRight, Zap, CopyIcon as Clone, BarChart3, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnhancedBackground from "@/components/enhanced-background"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ResponsiveGradientText from "@/components/responsive-gradient-text"
import GlassGlowText from "@/components/glass-glow-text"
import ViontraHero from "@/components/viontra-hero"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background with neural network effect */}
      <EnhancedBackground variant="purple" density="medium" speed="medium" interactive={true} />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center w-full">
            <div className="inline-block mb-4 md:mb-6">
              <div className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                Neural Command
              </div>
            </div>

            <h1 className="font-bold mb-4">
              <ResponsiveGradientText text="AI-Optimized Web Hosting" size="4xl" gradient="blue-purple" />
              <span className="block text-xl sm:text-2xl md:text-3xl mt-3 text-indigo-300">
                Intelligent. Autonomous. Evolving.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto px-2 sm:px-4">
              Replace traditional web development with intelligent, autonomous systems that
              <span className="text-indigo-300 font-medium"> continually improve</span> your website for performance,
              design, and discoverability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout?plan=growth&onboarding=true" className="w-full sm:w-auto">
                <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/learn" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ViontraHero />

      {/* How It Works Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="text-center mb-12 md:mb-16 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                <GlassGlowText text="How It Works" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Our proprietary AI engine transforms your website without any manual intervention.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <RevealOnScroll delay={0.1}>
              <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 h-full hover-glow-blue transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <Clone className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">1. Site Replication</h3>
                <p className="text-gray-300">
                  We clone your current website (via URL or ZIP upload) into our proprietary cloud environment.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 2 */}
            <RevealOnScroll delay={0.2}>
              <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 h-full hover-glow-blue transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">2. Autonomous Optimization</h3>
                <p className="text-gray-300">
                  An AI engine monitors user behavior, performance metrics, and SEO signals to constantly adapt and
                  deploy improvements.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 3 */}
            <RevealOnScroll delay={0.3}>
              <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 h-full hover-glow-blue transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">3. Results-Driven Iteration</h3>
                <p className="text-gray-300">
                  Without needing any manual input, the site evolves—faster load times, better UI/UX, and higher
                  rankings.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 4 */}
            <RevealOnScroll delay={0.4}>
              <div className="card-gradient border border-indigo-500/20 rounded-lg p-6 h-full hover-glow-blue transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">4. Performance Analytics</h3>
                <p className="text-gray-300">
                  Track improvements with real-time analytics showing how your site is performing against key metrics.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Link href="/checkout?plan=growth&onboarding=true">
              <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg">
                Start Your AI-Powered Website <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
