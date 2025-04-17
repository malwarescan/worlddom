import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import NetworkAnimation from "@/components/network-animation"

export const metadata: Metadata = {
  title: "AI in Healthcare Operations | Automate Patient Intake Seamlessly",
  description:
    "Discover how health systems use intelligent onboarding to automate intake and reduce admin workload — without replacing your EHR.",
  keywords:
    "AI patient intake, intelligent onboarding, AI in healthcare operations, EHR integration, healthcare automation",
}

export default function AIPatientIntakePost() {
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
              <span>AI Patient Intake</span>
            </div>

            {/* Publication Date */}
            <div className="text-blue-400 mb-4">March 27, 2025</div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How Health Systems Are Using AI to Automate Patient Intake Without Disrupting EHRs
            </h1>

            {/* Introduction */}
            <div className="text-xl text-neutral-300 mb-12">
              Healthcare CIOs and operations leaders are facing dual pressures — modernize systems for digital-native
              patients, and do it without disrupting mission-critical tools like Epic or Cerner.
              <br />
              <br />
              Intelligent onboarding is a powerful way to begin. It automates patient intake, routes requests to the
              right departments, and reduces front-desk overhead — while seamlessly integrating into your existing
              infrastructure.
            </div>

            {/* Main Content */}
            <div className="space-y-12 mb-16">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. The Rise of Smart Patient Intake</h2>
                <p className="text-neutral-300 mb-4">
                  Unlike static forms, intelligent onboarding adapts in real time to the patient. It:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>Auto-fills based on past visits or insurance records</li>
                  <li>Flags missing fields</li>
                  <li>Routes to departments based on symptoms or need</li>
                </ul>
                <p className="text-neutral-300">
                  It's automation at the front lines — where staff are overworked, and patients make their first
                  impression.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. AI-Powered, EHR-Friendly</h2>
                <p className="text-neutral-300 mb-4">
                  Your EHR isn't going anywhere. Intelligent onboarding platforms are built to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>Send structured data to EHRs via HL7/FHIR</li>
                  <li>Pre-screen patients before they ever hit the EHR</li>
                  <li>Respect your workflows — not replace them</li>
                </ul>
                <p className="text-neutral-300">
                  It's an upstream automation layer, built to reduce friction, not rewrite your tech stack.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Results from Real Systems</h2>
                <p className="text-neutral-300 mb-4">Hospitals using AI onboarding have reported:</p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>25–40% reduction in manual intake time</li>
                  <li>Fewer errors in billing & demographic data</li>
                  <li>Shorter average visit durations and higher patient satisfaction</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Secure, Scalable, Compliant</h2>
                <p className="text-neutral-300 mb-4">Smart onboarding platforms are:</p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-300 mb-4">
                  <li>HIPAA-ready</li>
                  <li>End-to-end encrypted</li>
                  <li>Configurable across departments or specialties</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Getting Started: Low Lift, High Return</h2>
                <p className="text-neutral-300 mb-6">
                  Most health systems pilot AI onboarding in one department (e.g., behavioral health or telehealth) and
                  scale system-wide after 30–60 days.
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className="card-gradient border border-neutral-800 p-8 rounded-lg shadow-lg bg-neutral-900/50 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Want to see how it works in your intake workflow?</h2>
              <Link
                href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=ai_intake"
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-all shadow-md shadow-blue-500/10"
              >
                Schedule a live demo <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-white">Related Articles</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="/blog/ai-patient-experience-onboarding"
                  className="card-gradient border border-neutral-800 p-6 rounded-lg shadow-lg hover:border-blue-700 transition-colors bg-neutral-900/50"
                >
                  <h4 className="text-lg font-bold mb-2 text-white">
                    Redesigning the Digital Front Door: AI-Powered Patient Onboarding That Works
                  </h4>
                  <p className="text-neutral-300 mb-2">
                    Improve your digital front door with AI-powered patient onboarding.
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
                    "@id": "https://dominatethe.world/blog/ai-patient-intake-ehr-integration",
                  },
                  headline: "How Health Systems Are Using AI to Automate Patient Intake Without Disrupting EHRs",
                  description:
                    "Learn how CIOs and healthcare operations leaders are using AI-powered onboarding to reduce friction, automate workflows, and improve patient intake — all while keeping existing EHR systems intact.",
                  image: "https://dominatethe.world/api/og?title=AI%20Patient%20Intake",
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
