import { Web2Button } from "./web2-button"

interface Web2CtaProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export function Web2Cta({ title, description, buttonText, buttonLink }: Web2CtaProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-y-4 border-white relative overflow-hidden">
      {/* Diagonal stripes background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff, #fff 10px, transparent 10px, transparent 20px)",
        }}
      />

      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="web2-button-container inline-block relative">
          <Web2Button href={buttonLink} variant="green" size="lg">
            {buttonText}
          </Web2Button>
          <div className="web2-reflection"></div>
        </div>
      </div>
    </section>
  )
}
