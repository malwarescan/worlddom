import RevealOnScroll from "@/components/reveal-on-scroll"

export default function ClientsSection() {
  return (
    <RevealOnScroll>
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">TRUSTED BY INNOVATIVE ORGANIZATIONS</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg transition-all hover:bg-white/5"
            >
              <span className="text-3xl mb-2">{client.icon}</span>
              <span className="text-gray-300 font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  )
}

const clients = [
  { name: "TechCorp Global", icon: "🏢" },
  { name: "DataSphere Analytics", icon: "📊" },
  { name: "Quantum Research", icon: "🔬" },
  { name: "FutureTech Industries", icon: "🚀" },
  { name: "SmartCity Solutions", icon: "🏙️" },
  { name: "EduTech Innovations", icon: "🎓" },
  { name: "HealthAI Systems", icon: "🏥" },
  { name: "FinTech Pioneers", icon: "💹" },
]
