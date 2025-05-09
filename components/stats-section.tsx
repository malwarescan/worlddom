export default function StatsSection() {
  const stats = [
    { value: "200M+", label: "Monthly Active Users" },
    { value: "67%", label: "Users Under 16" },
    { value: "2.5hrs", label: "Average Daily Time" },
    { value: "11B+", label: "Hours Engaged Monthly" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Roblox?</h2>
          <p className="mt-4 text-xl text-purple-200 max-w-3xl mx-auto">
            Roblox offers unprecedented reach and engagement with the next generation of consumers
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-purple-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
