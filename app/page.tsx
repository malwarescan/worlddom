import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import StatsSection from "@/components/stats-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
