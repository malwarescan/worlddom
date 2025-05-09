import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
