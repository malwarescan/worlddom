import Link from "next/link"
import { ArrowRight, Check, Zap, CopyIcon as Clone, BarChart3, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnhancedBackground from "@/components/enhanced-background"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ResponsiveGradientText from "@/components/responsive-gradient-text"
import GlassGlowText from "@/components/glass-glow-text"

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
          <div className="mt-8 flex justify-center">
            <a href="https://viontra.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-md text-base font-medium">
                Explore Viontra.io
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

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
                <h3 className="text-xl font-bold mb-3 text-white">4. Automated Reporting</h3>
                <p className="text-gray-300">
                  Receive regular updates on what was improved, why, and the outcome (e.g., speed, SEO, bounce rate).
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="text-center mt-12">
            <Link href="/onboarding" className="w-full sm:w-auto inline-block">
              <Button variant="outline" className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 w-full">
                Learn About Our Smart Site Onboarding <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* No More Developer Headaches Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                  No More Developer Headaches
                </div>
              </div>

              <h2 className="font-bold mb-4">
                <ResponsiveGradientText text="Your Website Should Work For You" size="3xl" gradient="blue-purple" />
                <span className="block text-xl sm:text-2xl md:text-3xl mt-3 text-indigo-300">
                  Not The Other Way Around
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto px-2 sm:px-4">
                Tired of endless back-and-forth with developers? Our AI-powered platform eliminates the frustration and
                delivers results that grow your business, with zero technical knowledge required.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="text-center mb-12 md:mb-16 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                <GlassGlowText text="Simple, Transparent Pricing" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4">
                Our pricing is based on your website's size and complexity, ensuring you only pay for what you need.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <RevealOnScroll delay={0.1}>
              <div className="card-gradient border border-indigo-500/30 rounded-lg p-6 md:p-8 h-full hover-glow-blue flex flex-col items-center text-center">
                <div className="bg-indigo-500/10 rounded-full px-4 py-1 inline-block mb-4">
                  <span className="text-indigo-300 font-medium">Starter</span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left w-full">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Up to 10 pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Weekly AI Optimization Pass</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">SEO Monitoring + Tag Enhancements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Up to 25,000 Visits/Month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Monthly Performance Report</span>
                  </li>
                </ul>

                <div className="text-sm text-gray-400 mb-6">Ideal for: Freelancers, local businesses</div>

                <Link href="/checkout?plan=starter&onboarding=true" className="w-full mt-auto">
                  <Button className="w-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-white btn-animate py-5 sm:py-6">
                    Get Started
                  </Button>
                </Link>
              </div>
            </RevealOnScroll>

            {/* Growth Package */}
            <RevealOnScroll delay={0.2}>
              <div className="card-gradient border border-indigo-500/50 rounded-lg p-6 md:p-8 h-full glow-border-blue md:scale-105 z-10 flex flex-col items-center text-center">
                <div className="bg-indigo-500/20 rounded-full px-4 py-1 inline-block mb-4">
                  <span className="text-indigo-300 font-medium">Growth</span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left w-full">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Up to 30 pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Twice Weekly AI Optimization Pass</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Advanced SEO & Content Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Up to 100,000 Visits/Month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Weekly Performance Reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">A/B Testing & Conversion Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Priority Support</span>
                  </li>
                </ul>

                <div className="text-sm text-gray-400 mb-6">Ideal for: Startups, small agencies</div>

                <Link href="/checkout?plan=growth&onboarding=true" className="w-full mt-auto">
                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-white btn-animate py-5 sm:py-6">
                    Get Started
                  </Button>
                </Link>
              </div>
            </RevealOnScroll>

            {/* Pro Package */}
            <RevealOnScroll delay={0.3}>
              <div className="card-gradient border border-indigo-500/30 rounded-lg p-6 md:p-8 h-full hover-glow-blue flex flex-col items-center text-center">
                <div className="bg-indigo-500/10 rounded-full px-4 py-1 inline-block mb-4">
                  <span className="text-indigo-300 font-medium">Pro</span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$299</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <ul className="space-y-4 mb-8 text-left w-full">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Up to 60 pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Daily AI Optimization Pass</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Enterprise-grade SEO & Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Unlimited Visits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Real-time Performance Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Advanced AI Content Generation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Custom Integrations</span>
                  </li>
                </ul>

                <div className="text-sm text-gray-400 mb-6">Ideal for: E-commerce, SaaS, high-traffic sites</div>

                <Link href="/checkout?plan=pro&onboarding=true" className="w-full mt-auto">
                  <Button className="w-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-white btn-animate py-5 sm:py-6">
                    Get Started
                  </Button>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          <div className="text-center mt-12 space-y-4">
            <Link
              href="/contact"
              className="text-indigo-300 hover:text-indigo-200 transition-colors block text-base sm:text-lg"
            >
              Need a custom plan? Contact us for tailored solutions
            </Link>
            <Link href="/pricing" className="inline-block w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 w-full text-base sm:text-lg py-3 sm:py-4"
              >
                View Full Pricing Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 md:p-12 glow-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready for a Website That Works For You?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
                No more back-and-forth with developers. Just results that grow your business.
              </p>
              <Link href="/checkout?plan=growth&onboarding=true" className="w-full sm:w-auto inline-block">
                <Button className="bg-gradient-primary hover:opacity-90 text-white btn-animate px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg w-full">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}

