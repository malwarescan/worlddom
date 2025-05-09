export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Neural Command helped us create an immersive brand experience that resulted in over 2 million visits and a 40% increase in brand awareness among our target demographic.",
      author: "Marketing Director",
      company: "Global Sportswear Brand",
    },
    {
      quote:
        "The interactive ad campaign developed by Neural Command generated 5x more engagement than our traditional digital ads, with users spending an average of 12 minutes with our brand.",
      author: "Chief Digital Officer",
      company: "Entertainment Conglomerate",
    },
    {
      quote:
        "Our virtual product launch on Roblox, designed by Neural Command, reached over 1 million users in a single weekend and drove a 25% increase in sales for our new product line.",
      author: "VP of Innovation",
      company: "Consumer Electronics Company",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from the brands that have transformed their marketing with Neural Command
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="flex-1">
                <svg className="h-8 w-8 text-purple-600 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300">{testimonial.quote}</p>
              </div>
              <div className="mt-6">
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
