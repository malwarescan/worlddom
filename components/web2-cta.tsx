import Link from "next/link"

interface Web2CtaProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export function Web2Cta({ title, description, buttonText, buttonLink }: Web2CtaProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white border-y-4 border-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="web2-button-container">
          <Link href={buttonLink} className="web2-button bg-gradient-to-b from-green-400 to-green-600">
            {buttonText}
          </Link>
          <div className="web2-reflection"></div>
        </div>
      </div>
    </section>
  )
}
