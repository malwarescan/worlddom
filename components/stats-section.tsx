export default function StatsSection() {
  return (
    <section className="py-16 bg-[rgb(var(--envato-darker))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our work combines creative intuition with technical precision to deliver measurable impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold envato-gradient mb-2">280%</div>
            <p className="text-gray-400">Organic Traffic Growth</p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold envato-gradient mb-2">215%</div>
            <p className="text-gray-400">ROI in ROBLOX Campaigns</p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold envato-gradient mb-2">890%</div>
            <p className="text-gray-400">More Shares with Viral Content</p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold envato-gradient mb-2">450%</div>
            <p className="text-gray-400">Engagement Growth with AI</p>
          </div>
        </div>
      </div>
    </section>
  )
}
