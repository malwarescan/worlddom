import RevealOnScroll from "@/components/reveal-on-scroll"

export default function ProcessSection() {
  return (
    <RevealOnScroll>
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">OUR IMPLEMENTATION PROCESS</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/20 -translate-x-1/2 z-0"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md shadow-blue-500/10 relative z-10">
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </div>

                  <div className="bg-[#0a1029]/50 border border-indigo-500/20 p-5 rounded-lg shadow-md flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  )
}

const processSteps = [
  {
    title: "Discovery & Assessment",
    description:
      "We begin with a thorough analysis of your current information systems, workflows, and challenges to identify where Agentic Search can deliver the most value.",
  },
  {
    title: "Solution Design",
    description:
      "Our experts design a custom Agentic Search solution tailored to your specific needs, leveraging our proprietary AI architectures and technologies.",
  },
  {
    title: "Development & Integration",
    description:
      "We develop and implement your solution, ensuring seamless integration with your existing systems, databases, and workflows.",
  },
  {
    title: "Testing & Refinement",
    description:
      "We rigorously test the solution in your environment, refining and optimizing it to ensure it delivers maximum value and performance.",
  },
  {
    title: "Deployment & Training",
    description:
      "We deploy your solution and provide comprehensive training to ensure your team can effectively leverage its capabilities.",
  },
  {
    title: "Ongoing Support & Evolution",
    description:
      "Our team provides continuous support and regular updates to ensure your Agentic Search solution evolves with your business needs and the latest AI advancements.",
  },
]
