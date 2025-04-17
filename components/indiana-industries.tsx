import RevealOnScroll from "@/components/reveal-on-scroll"

export default function IndianaIndustries() {
  return (
    <div className="mb-16">
      <RevealOnScroll>
        <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">INDIANA INDUSTRIES WE SERVE</h3>
      </RevealOnScroll>

      <RevealOnScroll delay={50}>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Neural Command develops specialized AI solutions for key Indiana industries, addressing sector-specific
          challenges and opportunities. Our team has deep expertise in these critical sectors of the Hoosier economy:
        </p>
      </RevealOnScroll>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {indianaIndustries.map((industry, index) => (
          <RevealOnScroll key={index} delay={(index % 9) * 40} direction="up">
            <div className="card-gradient border border-blue-200 dark:border-blue-800 p-6 rounded-lg shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-colors h-full hover-glow">
              <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white">{industry.name}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm">{industry.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={100}>
        <div className="border border-blue-500/30 dark:border-blue-500/30 p-6 rounded-lg bg-blue-500/5 dark:bg-blue-500/5">
          <h4 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">Industry-Specific AI Solutions</h4>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Our team works closely with industry leaders to develop AI solutions that address the unique challenges and
            opportunities in each sector. We combine deep industry knowledge with cutting-edge AI expertise to deliver
            results that drive real business value.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300">
            Contact us to discuss how we can develop a customized AI strategy for your industry.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  )
}

const indianaIndustries = [
  {
    name: "Advanced Manufacturing",
    description:
      "AI-powered quality control, predictive maintenance, and supply chain optimization for Indiana's manufacturing sector.",
  },
  {
    name: "Automotive & Mobility",
    description:
      "Intelligent systems for vehicle production, autonomous technology development, and connected mobility solutions.",
  },
  {
    name: "Agribusiness & Food Processing",
    description:
      "Precision agriculture, crop yield prediction, and automated food processing solutions for Indiana's agricultural economy.",
  },
  {
    name: "Life Sciences & Healthcare",
    description: "AI-enhanced diagnostic tools, patient care optimization, and pharmaceutical research acceleration.",
  },
  {
    name: "Logistics & Transportation",
    description:
      "Route optimization, demand forecasting, and warehouse automation for Indiana's strategic logistics sector.",
  },
  {
    name: "Defense & Aerospace",
    description: "Advanced AI systems for defense applications, simulation, and aerospace manufacturing optimization.",
  },
  {
    name: "Energy & Utilities",
    description: "Smart grid management, energy consumption prediction, and infrastructure maintenance optimization.",
  },
  {
    name: "Education & Workforce Development",
    description: "Personalized learning systems, skills gap analysis, and workforce training optimization tools.",
  },
  {
    name: "Local Government & Public Sector",
    description: "AI solutions for public service delivery, resource allocation, and community engagement.",
  },
]
