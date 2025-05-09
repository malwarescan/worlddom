export default function FeaturesSection() {
  const features = [
    {
      title: "Immersive Brand Experiences",
      description: "Create interactive 3D environments that allow users to engage with your brand in meaningful ways.",
      icon: "/icons/immersive.svg",
    },
    {
      title: "Interactive Advertising",
      description: "Go beyond traditional ads with interactive experiences that drive engagement and brand recall.",
      icon: "/icons/interactive.svg",
    },
    {
      title: "Virtual Events",
      description:
        "Host concerts, product launches, and other events in virtual spaces that can reach millions globally.",
      icon: "/icons/events.svg",
    },
    {
      title: "Branded Games",
      description: "Develop custom games that incorporate your brand elements while providing entertainment value.",
      icon: "/icons/games.svg",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Innovative Roblox Solutions</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Our team of experts creates cutting-edge experiences that connect your brand with Roblox's massive audience.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 transition-transform hover:transform hover:scale-105"
            >
              <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-md bg-purple-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-white text-center">{feature.title}</h3>
              <p className="mt-2 text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
