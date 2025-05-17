import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SummarySection from "@/components/summary-section"
import ExpertiseSection from "@/components/expertise-section"
import RobloxSection from "@/components/roblox-section"
import SeoSection from "@/components/seo-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SummarySection />
      <ExpertiseSection />
      <RobloxSection />
      <SeoSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
