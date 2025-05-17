export default function CategoriesSection() {
  const categories = [
    {
      title: "Neural SEO",
      count: "280% Growth",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      description: "AI-driven optimization that scales organic traffic",
    },
    {
      title: "ROBLOX Marketing",
      count: "215% ROI",
      image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=1974&auto=format&fit=crop",
      description: "Immersive campaigns in virtual worlds",
    },
    {
      title: "AI Integration",
      count: "3x Engagement",
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=2070&auto=format&fit=crop",
      description: "Intelligent systems for smarter marketing",
    },
    {
      title: "Dating Ecosystem",
      count: "275% Results",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2070&auto=format&fit=crop",
      description: "Targeted campaigns across dating platforms",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expertise Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access a broad range of digital marketing and AI solutions to connect your brand with your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop"
                  }}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-900">{category.title}</h3>
                  <span className="text-sm text-[rgb(var(--envato-green))] font-medium">{category.count}</span>
                </div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
