import Link from "next/link"
import { ChevronRight } from "lucide-react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import SparkButton from "@/components/spark-button"

export default function IndianaCompaniesSection() {
  return (
    <div className="mb-16">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">FOR INDIANA COMPANIES</h2>
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
          Neural Command is committed to strengthening Indiana's economic landscape by partnering with local businesses
          to implement cutting-edge AI solutions that drive growth and innovation.
        </p>
      </RevealOnScroll>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {partnershipBenefits.map((benefit, index) => (
          <RevealOnScroll key={index} delay={150 + index * 75} direction="up">
            <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg shadow-lg h-full hover-glow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 shadow-md shadow-blue-500/10">
                <span className="text-xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white">{benefit.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{benefit.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={400}>
        <div className="card-gradient border border-neutral-200 dark:border-neutral-800 p-8 rounded-lg shadow-lg glow-border">
          <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">INDIANA PARTNERSHIP PROGRAM</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Our Indiana Partnership Program offers exclusive benefits for businesses based in the Hoosier State,
            including priority access to our AI expertise, special pricing on our services, and opportunities to
            participate in state-funded innovation initiatives.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-blue-500/30 dark:border-blue-500/30 p-6 rounded-lg bg-blue-500/5 dark:bg-blue-500/5">
              <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Program Benefits</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>Discounted AI readiness assessments</li>
                <li>Priority access to our AI implementation team</li>
                <li>Exclusive workshops and training sessions</li>
                <li>Networking opportunities with other Indiana innovators</li>
                <li>Grant application support and guidance</li>
              </ul>
            </div>

            <div className="border border-blue-500/30 dark:border-blue-500/30 p-6 rounded-lg bg-blue-500/5 dark:bg-blue-500/5">
              <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Eligibility Requirements</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
                <li>Indiana-based business or organization</li>
                <li>Commitment to implementing AI solutions</li>
                <li>Willingness to participate in case studies</li>
                <li>Dedication to workforce development</li>
                <li>Alignment with ethical AI principles</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SparkButton className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-md hover:opacity-90 transition-all shadow-md shadow-blue-500/10">
              <Link href="/contact" className="flex items-center">
                BECOME A PARTNER <ChevronRight className="ml-2 w-4 h-4 text-white" />
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
  )
}

const partnershipBenefits = [
  {
    title: "Local Expertise",
    description:
      "Work with a team that understands Indiana's unique business landscape, regulatory environment, and economic priorities to deliver AI solutions that address local challenges.",
  },
  {
    title: "Grant Opportunities",
    description:
      "Access state and federal funding opportunities through our established grant application process, including Indiana's $15M AI Innovation Fund and other economic development initiatives.",
  },
  {
    title: "Workforce Development",
    description:
      "Benefit from customized training programs that help your team develop essential AI skills, contributing to Indiana's growing tech talent pipeline while enhancing your competitive edge.",
  },
  {
    title: "Economic Incentives",
    description:
      "Navigate Indiana's economic development incentives for technology adoption and innovation with our guidance, maximizing available tax credits and other financial benefits.",
  },
  {
    title: "Community Network",
    description:
      "Join our network of forward-thinking Indiana businesses implementing AI solutions, creating opportunities for collaboration, knowledge sharing, and partnership development.",
  },
  {
    title: "Customized Solutions",
    description:
      "Receive AI implementations tailored to the specific needs of Indiana industries and markets, with solutions designed to address regional challenges and opportunities.",
  },
]

