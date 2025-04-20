interface Web2TestimonialProps {
  quote: string
  author: string
  company: string
  image: string
}

export function Web2Testimonial({ quote, author, company, image }: Web2TestimonialProps) {
  return (
    <div className="web2-testimonial-container">
      <div className="web2-testimonial">
        <p className="web2-testimonial-quote">"{quote}"</p>
        <div className="web2-testimonial-author">
          <div className="web2-testimonial-avatar">
            <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <div className="web2-testimonial-name">{author}</div>
            <div className="web2-testimonial-title">{company}</div>
          </div>
        </div>
      </div>
      <div className="web2-testimonial-reflection"></div>
    </div>
  )
}
