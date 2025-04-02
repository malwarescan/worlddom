import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import NetworkAnimation from "@/components/network-animation"

export const metadata: Metadata = {
  title: "AI for Patient Experience | Smart Intake Forms & Automation",
  description:
    "Improve your digital front door with AI-powered patient onboarding. Reduce no-shows, automate engagement, and personalize care.",
  keywords: "AI patient experience, smart intake forms, digital front door, patient onboarding, healthcare automation",
}

export default function AIPatientExperiencePost() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <div className="relative overflow-hidden">
        {/* Neural Network Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <NetworkAnimation />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center mb-8 text-neutral-300">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <Link href="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span>AI Patient Experience</span>
            </div>

            {/* Publication Date */}
            <div className="text-blue-400 mb-4">March 27, 2025</div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Redesigning the Digital Front Door: AI-Powered Patient Onboarding That Works
            </h1>

            {/* Introduction */}
            <div className="text-xl text-neutral-300 mb-12">
              Today's patients expect digital ease. But most health systems still rely on clunky PDFs, fax referrals,
              and unanswered calls. AI-powered onboarding solves that.
              <br />
              <br />
              It's not just a form. It's an interaction engine.
            </div>

            {/* Main Content */}
            <div className="space-y-12 mb-16">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. The Patient Experience Problem</h2>
                <p className="text-neutral-300 mb-4">
                  70% of patients say filling out forms is the most frustrating part of their visit.
                </p>
                <p className="text-neutral-300 mb-4">Smart onboarding fixes that by:</p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>Pre-filling fields using known data</li>
                  <li>Offering mobile-first, tap-to-answer interfaces</li>
                  <li>Adjusting dynamically to the patient's reason for visit</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Lower No-Shows. Higher Trust.</h2>
                <p className="text-neutral-300 mb-4">AI can analyze:</p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>Time of day</li>
                  <li>Symptom urgency</li>
                  <li>Visit history</li>
                </ul>
                <p className="text-neutral-300 mb-4">Then it personalizes follow-up with:</p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>SMS reminders</li>
                  <li>Pre-visit prep content</li>
                  <li>Easy rescheduling tools</li>
                </ul>
                <p className="text-neutral-300">Your "front door" becomes a concierge.</p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Perfect for Innovation Teams</h2>
                <p className="text-neutral-300 mb-4">
                  Launching a new community program? Expanding into wellness? Smart forms adapt to your intake flows
                  without dev work — and scale instantly.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Secure, Compliant, Accessible</h2>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>WCAG and HIPAA compliant</li>
                  <li>Built for underserved and digital-first patients alike</li>
                  <li>Translates into multiple languages dynamically</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Start Small, Scale Fast</h2>
                <p className="text-neutral-300 mb-6">
                  Most patient experience teams start with a microsite or campaign-specific form (e.g., women's health
                  or behavioral consults), and expand once they see engagement jump.
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className="card-gradient border border-neutral-800 p-8 rounded-lg shadow-lg bg-neutral-900/50 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Curious how your intake experience compares?</h2>
              <Link
                href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=ai_experience"
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-all shadow-md shadow-blue-500/10"
              >
                Try the AI form experience today <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-white">Related Articles</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="/blog/ai-patient-intake-ehr-integration"
                  className="card-gradient border border-neutral-800 p-6 rounded-lg shadow-lg hover:border-blue-700 transition-colors bg-neutral-900/50"
                >
                  <h4 className="text-lg font-bold mb-2 text-white">
                    How Health Systems Are Using AI to Automate Patient Intake Without Disrupting EHRs
                  </h4>
                  <p className="text-neutral-300 mb-2">
                    Discover how health systems use intelligent onboarding to automate intake.
                  </p>
                  <span className="text-blue-400 inline-flex items-center">
                    Read more <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
                <Link
                  href="/blog/implementing-ai-into-health-systems"
                  className="card-gradient border border-neutral-800 p-6 rounded-lg shadow-lg hover:border-blue-700 transition-colors bg-neutral-900/50"
                >
                  <h4 className="text-lg font-bold mb-2 text-white">Implementing AI Into Health Systems</h4>
                  <p className="text-neutral-300 mb-2">How Artificial Intelligence Is Transforming Modern Healthcare</p>
                  <span className="text-blue-400 inline-flex items-center">
                    Read more <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Schema Markup - Added via next/head */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": "https://dominatethe.world/blog/ai-patient-experience-onboarding",
                  },
                  headline: "Redesigning the Digital Front Door: AI-Powered Patient Onboarding That Works",
                  description:
                    "Explore how health systems can improve the patient experience with AI-powered onboarding forms that reduce no-shows, automate triage, and personalize care — from the first click.",
                  image: "https://dominatethe.world/api/og?title=AI%20Patient%20Experience",
                  author: {
                    "@type": "Organization",
                    name: "Neural Command",
                    url: "https://dominatethe.world",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Neural Command",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://dominatethe.world/favicon.svg",
                    },
                  },
                  datePublished: "2025-03-27",
                  dateModified: "2025-03-27",
                }),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

