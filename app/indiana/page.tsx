import Link from "next/link"
import { ChevronRight } from "lucide-react"
import NetworkAnimation from "@/components/network-animation"
import RevealOnScroll from "@/components/reveal-on-scroll"
import IndianaCompaniesSection from "@/components/indiana-companies-section"
import IndianaIndustries from "@/components/indiana-industries"
import IndianaBlogSection from "@/components/indiana-blog-section"
import SparkButton from "@/components/spark-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Neural Command | AI Solutions for Indiana Government & Economic Development",
  description:
    "Neural Command empowers Indiana businesses and government agencies to harness the transformative potential of artificial intelligence, driving economic growth and workforce development in South Bend and beyond.",
  keywords:
    "AI Indiana, artificial intelligence South Bend, government AI solutions, economic development AI, workforce development technology, Indiana AI training, Midwest AI innovation",
}

export default function IndianaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative overflow-hidden">
        {/* Neural Network Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <NetworkAnimation />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                AI SOLUTIONS FOR INDIANA GOVERNMENT & ECONOMIC DEVELOPMENT
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-12">
                Neural Command empowers Indiana businesses and government agencies to harness the transformative
                potential of artificial intelligence, driving economic growth and workforce development in South Bend
                and beyond.
              </p>
            </RevealOnScroll>

            {/* Mission & Vision Section */}
            <RevealOnScroll delay={200}>
              <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-8 rounded-lg shadow-lg mb-12 glow-border">
                <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                  NEURAL COMMAND, LLC: MISSION & VISION
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Our Mission</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Neural Command empowers Indiana businesses and government agencies to harness the transformative
                      potential of artificial intelligence. We bridge the technology gap in underserved communities by
                      providing accessible AI solutions, training, and consultation that drive economic growth and
                      workforce development in South Bend and beyond.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Our Vision</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      To establish South Bend as a Midwest hub for AI innovation where businesses of all sizes can
                      leverage cutting-edge technology to compete globally while creating sustainable, high-skilled jobs
                      that strengthen our local economy.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Core Values Section */}
            <RevealOnScroll delay={300}>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Core Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {coreValues.map((value, index) => (
                    <RevealOnScroll key={index} delay={300 + index * 75} direction={index % 2 === 0 ? "left" : "right"}>
                      <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg shadow-lg hover-glow">
                        <h4 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white">{value.title}</h4>
                        <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Indiana Companies Section */}
            <RevealOnScroll delay={350}>
              <IndianaCompaniesSection />
            </RevealOnScroll>

            {/* Strategic Objectives Section */}
            <RevealOnScroll delay={400}>
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Strategic Objectives</h3>
                <div className="space-y-4">
                  {strategicObjectives.map((objective, index) => (
                    <RevealOnScroll key={index} delay={400 + index * 75} direction="up">
                      <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg shadow-lg flex items-start gap-4 hover-glow">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/10">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">{objective.title}</h4>
                          <p className="text-neutral-600 dark:text-neutral-300">{objective.description}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Indiana Innovation Fund Section */}
            <RevealOnScroll delay={500}>
              <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-8 rounded-lg shadow-lg mb-12 glow-border-purple">
                <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">INDIANA AI INNOVATION FUND</h2>

                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  Neural Command is actively engaged with Indiana's $15 million AI Innovation Fund, helping businesses
                  navigate the application process and implement AI solutions that qualify for state funding.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-blue-500/30 dark:border-blue-500/30 p-6 rounded-lg bg-blue-500/5 dark:bg-blue-500/5">
                    <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">
                      Business Implementation Grants
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      $8 million dedicated to helping Indiana businesses implement AI solutions that enhance
                      productivity, efficiency, and competitiveness.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-300">
                      <li>Grants ranging from $50,000 to $500,000</li>
                      <li>Priority for manufacturing, healthcare, and logistics sectors</li>
                      <li>Focus on job creation and economic impact</li>
                    </ul>
                  </div>

                  <div className="border border-blue-500/30 dark:border-blue-500/30 p-6 rounded-lg bg-blue-500/5 dark:bg-blue-500/5">
                    <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">
                      How Neural Command Can Help
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-300">
                      <li>AI readiness assessments to identify high-impact opportunities</li>
                      <li>Grant application support and documentation</li>
                      <li>Implementation planning and execution</li>
                      <li>Ongoing support and optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <SparkButton className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:opacity-90 transition-all shadow-md shadow-blue-500/10">
                    <Link href="/blog/indiana-ai-innovation-fund-local-businesses" className="flex items-center">
                      LEARN MORE ABOUT THE FUND <ChevronRight className="ml-2 w-4 h-4 text-white" />
                    </Link>
                  </SparkButton>
                </div>
              </div>
            </RevealOnScroll>

            {/* Implementation Timeline Section */}
            <RevealOnScroll delay={600}>
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Implementation Timeline</h3>
                <div className="space-y-6">
                  {timelineSteps.map((step, index) => (
                    <RevealOnScroll key={index} delay={600 + index * 100} direction="left">
                      <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg shadow-lg hover-glow">
                        <h4 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white">{step.title}</h4>
                        <p className="text-neutral-600 dark:text-neutral-300 mb-4">{step.description}</p>
                        <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-300">
                          {step.actions.map((action, i) => (
                            <li key={i}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Indiana Industries Section */}
            <RevealOnScroll delay={900}>
              <IndianaIndustries />
            </RevealOnScroll>

            {/* Indiana Blog Section */}
            <RevealOnScroll delay={950}>
              <IndianaBlogSection />
            </RevealOnScroll>

            {/* CTA Section */}
            <RevealOnScroll delay={1000}>
              <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-8 rounded-lg shadow-lg mb-8 glow-border">
                <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
                  PARTNER WITH NEURAL COMMAND
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  Ready to transform your organization with AI solutions tailored for Indiana's unique challenges and
                  opportunities? Contact us today to discuss how we can support your economic development and innovation
                  goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SparkButton className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-md hover:opacity-90 transition-all shadow-md shadow-blue-500/10">
                    <Link href="/contact" className="flex items-center">
                      CONTACT US <ChevronRight className="ml-2 w-4 h-4 text-white" />
                    </Link>
                  </SparkButton>
                  <SparkButton
                    className="px-6 py-3 border border-blue-500/30 rounded-md hover:bg-blue-500/10 transition-colors text-blue-600 dark:text-blue-400"
                    sparkColor="rgba(59, 130, 246, 0.8)"
                  >
                    <Link href="/services" className="flex items-center">
                      EXPLORE OUR SERVICES <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </SparkButton>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}

const coreValues = [
  {
    title: "Innovation with Purpose",
    description:
      "We develop AI solutions that address real community needs and deliver measurable impact for Indiana businesses and organizations.",
  },
  {
    title: "Educational Empowerment",
    description:
      "We demystify AI through accessible training and knowledge-sharing, enabling Hoosiers to participate in the digital economy.",
  },
  {
    title: "Local Economic Development",
    description:
      "We prioritize partnerships that strengthen South Bend's technology ecosystem and create high-quality jobs throughout Indiana.",
  },
  {
    title: "Ethical AI Adoption",
    description:
      "We champion responsible and transparent AI implementation that respects privacy, promotes fairness, and builds trust.",
  },
  {
    title: "Workforce Advancement",
    description:
      "We prepare Indiana's workforce for the digital economy through skills development programs and industry-academic partnerships.",
  },
]

const strategicObjectives = [
  {
    title: "Increase AI Literacy",
    description:
      "Develop and deliver comprehensive AI education programs for Indiana businesses, government agencies, and educational institutions.",
  },
  {
    title: "Develop Industry-Specific AI Solutions",
    description:
      "Create specialized AI applications that solve challenges faced by key Indiana industries including manufacturing, healthcare, and agriculture.",
  },
  {
    title: "Build AI Talent Pipeline",
    description:
      "Establish partnerships with Indiana universities and colleges to create pathways for students into AI careers and internships.",
  },
  {
    title: "Support Government Innovation",
    description:
      "Provide specialized training and implementation support for state and local government agencies adopting AI technologies.",
  },
  {
    title: "Bridge the Digital Divide",
    description:
      "Ensure AI technologies are accessible to both urban and rural Indiana communities through targeted outreach and education programs.",
  },
]

const timelineSteps = [
  {
    title: "Phase 1: Foundation Building (Q2-Q3 2024)",
    description: "Establishing key partnerships and infrastructure for AI adoption across Indiana.",
    actions: [
      "Launch AI readiness assessment program for Indiana businesses",
      "Develop industry-specific AI implementation frameworks",
      "Establish partnerships with key educational institutions",
      "Create AI innovation hub in South Bend",
    ],
  },
  {
    title: "Phase 2: Capacity Expansion (Q4 2024-Q1 2025)",
    description: "Scaling successful programs and expanding reach throughout the state.",
    actions: [
      "Expand AI training programs to reach 500+ Indiana professionals",
      "Implement pilot projects across 5 key industry sectors",
      "Launch AI grant application support services",
      "Develop specialized solutions for rural communities",
    ],
  },
  {
    title: "Phase 3: Ecosystem Development (Q2-Q4 2025)",
    description: "Building a self-sustaining AI innovation ecosystem in Indiana.",
    actions: [
      "Establish AI startup accelerator program",
      "Create industry-specific centers of excellence",
      "Develop AI certification programs with educational partners",
      "Launch statewide AI adoption campaign",
    ],
  },
  {
    title: "Phase 4: Leadership & Innovation (2026 and beyond)",
    description: "Positioning Indiana as a national leader in practical AI implementation.",
    actions: [
      "Host annual Midwest AI Innovation Summit in South Bend",
      "Publish Indiana AI implementation case studies and best practices",
      "Develop next-generation AI solutions for emerging challenges",
      "Create sustainable funding mechanisms for ongoing innovation",
    ],
  },
]

