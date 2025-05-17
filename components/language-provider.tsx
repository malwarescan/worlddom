"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.expertise": "Expertise",
    "nav.achievements": "Achievements",
    "nav.contact": "Contact",
    language: "ES",

    // Hero
    "hero.title": "Joel Maldonado",
    "hero.subtitle": "Director of Digital Strategy & AI-Driven SEO",
    "hero.location": "Madrid, Spain (Open to relocation)",
    "hero.cta": "Get in Touch",

    // Summary
    "summary.title": "Building Bridges Between Brands & People",
    "summary.description":
      "I've been coding since I was 14. For me, code has always been more than logic—it's a way to build bridges between people. That mindset has shaped my entire career. Today, I design intelligent systems that help brands connect more meaningfully with their audiences. From neural SEO architectures that drive 280% organic growth, to immersive campaigns in ROBLOX and AI-powered ad agents, my work fuses creativity, technology, and behavioral insight to spark real engagement.",

    // Expertise
    "expertise.title": "Core Expertise",
    "expertise.ai": "AI & Automation",
    "expertise.ai.items": "GPT-4, LangChain, Predictive Modeling, D-ID",
    "expertise.growth": "Growth Marketing",
    "expertise.growth.items": "Enterprise SEO, Google Ads API, Cross-platform Attribution",
    "expertise.immersive": "Immersive Tech",
    "expertise.immersive.items": "ROBLOX Dev, Virtual Goods, Dating Platform APIs",
    "expertise.development": "Development",
    "expertise.development.items": "Python, JavaScript, React, Flutter, Three.js",

    // Roblox
    "roblox.title": "ROBLOX: The Next Frontier in Digital Marketing",
    "roblox.subtitle": "215% ROI in ROBLOX campaigns",
    "roblox.description":
      "Leverage the massive reach and engagement of the ROBLOX platform to create immersive brand experiences that resonate with younger audiences. My ROBLOX Experience Measurement Framework has been adopted by major agencies to track and optimize performance in virtual worlds.",
    "roblox.point1": "Immersive brand experiences with massive reach",
    "roblox.point2": "Virtual goods that generate revenue while building brand awareness",
    "roblox.point3": "Analytics tools for tracking behavior in virtual worlds",
    "roblox.cta": "Explore ROBLOX Opportunities",

    // SEO
    "seo.title": "Neural SEO: Beyond Traditional Optimization",
    "seo.subtitle": "+280% Traffic via AI SEO tools",
    "seo.description":
      "Traditional SEO is being revolutionized by AI. My neural SEO architecture combines machine learning with content optimization to drive unprecedented organic growth. By analyzing patterns across millions of search results, we can predict and adapt to algorithm changes before they impact your rankings.",
    "seo.point1": "AI-powered content optimization that adapts to algorithm changes",
    "seo.point2": "Predictive modeling for identifying high-potential keywords",
    "seo.point3": "Autonomous marketing agents that optimize in real-time",
    "seo.cta": "Boost Your SEO Strategy",

    // Achievements
    "achievements.title": "Key Achievements",
    "achievements.item1.title": "890%",
    "achievements.item1.description": "More shares with viral content systems",
    "achievements.item2.title": "450%",
    "achievements.item2.description": "Engagement growth across platforms with AI tools",
    "achievements.item3.title": "280%",
    "achievements.item3.description": "Traffic increase via AI SEO tools",
    "achievements.item4.title": "215%",
    "achievements.item4.description": "ROI in ROBLOX campaigns",

    // Contact
    "contact.title": "Let's Build the Future",
    "contact.subtitle": "Where Tech Meets Connection",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.cta": "Send Message",
    "contact.name": "Your Name",
    "contact.message": "Your Message",
    "contact.submit": "Submit",

    // Footer
    "footer.copyright": "© 2023 Joel Maldonado. All rights reserved.",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.expertise": "Experiencia",
    "nav.achievements": "Logros",
    "nav.contact": "Contacto",
    language: "EN",

    // Hero
    "hero.title": "Joel Maldonado",
    "hero.subtitle": "Director de Estrategia Digital y SEO Impulsado por IA",
    "hero.location": "Madrid, España (Abierto a reubicación)",
    "hero.cta": "Contactar",

    // Summary
    "summary.title": "Construyendo Puentes Entre Marcas y Personas",
    "summary.description":
      "Desde los 14 años, el código ha sido mi segundo idioma. Lo que comenzó como curiosidad pronto se transformó en una pasión por crear formas innovadoras de conectar personas a través de medios digitales. Hoy, esa misma pasión guía mi carrera como estratega digital y arquitecto de soluciones impulsadas por inteligencia artificial. He liderado sistemas de SEO neuronal que escalan el tráfico de forma autónoma, diseñado campañas inmersivas en plataformas como ROBLOX y apps de citas, y construido agentes de marketing que optimizan en tiempo real.",

    // Expertise
    "expertise.title": "Experiencia Principal",
    "expertise.ai": "IA y Automatización",
    "expertise.ai.items": "GPT-4, LangChain, Modelado Predictivo, D-ID",
    "expertise.growth": "Marketing de Crecimiento",
    "expertise.growth.items": "SEO Empresarial, API de Google Ads, Atribución Multiplataforma",
    "expertise.immersive": "Tecnología Inmersiva",
    "expertise.immersive.items": "Desarrollo ROBLOX, Bienes Virtuales, APIs de Plataformas de Citas",
    "expertise.development": "Desarrollo",
    "expertise.development.items": "Python, JavaScript, React, Flutter, Three.js",

    // Roblox
    "roblox.title": "ROBLOX: La Nueva Frontera en Marketing Digital",
    "roblox.subtitle": "215% ROI en campañas de ROBLOX",
    "roblox.description":
      "Aprovecha el alcance masivo y el engagement de la plataforma ROBLOX para crear experiencias de marca inmersivas que resuenen con audiencias más jóvenes. Mi Marco de Medición de Experiencia ROBLOX ha sido adoptado por importantes agencias para seguir y optimizar el rendimiento en mundos virtuales.",
    "roblox.point1": "Experiencias de marca inmersivas con alcance masivo",
    "roblox.point2": "Bienes virtuales que generan ingresos mientras construyen reconocimiento de marca",
    "roblox.point3": "Herramientas analíticas para seguimiento de comportamiento en mundos virtuales",
    "roblox.cta": "Explorar Oportunidades en ROBLOX",

    // SEO
    "seo.title": "SEO Neuronal: Más Allá de la Optimización Tradicional",
    "seo.subtitle": "+280% de Tráfico mediante herramientas de SEO con IA",
    "seo.description":
      "El SEO tradicional está siendo revolucionado por la IA. Mi arquitectura de SEO neuronal combina aprendizaje automático con optimización de contenido para impulsar un crecimiento orgánico sin precedentes. Al analizar patrones en millones de resultados de búsqueda, podemos predecir y adaptarnos a los cambios de algoritmo antes de que impacten en tus rankings.",
    "seo.point1": "Optimización de contenido impulsada por IA que se adapta a los cambios de algoritmo",
    "seo.point2": "Modelado predictivo para identificar palabras clave de alto potencial",
    "seo.point3": "Agentes de marketing autónomos que optimizan en tiempo real",
    "seo.cta": "Potencia tu Estrategia SEO",

    // Achievements
    "achievements.title": "Logros Principales",
    "achievements.item1.title": "890%",
    "achievements.item1.description": "Más compartidos con sistemas de contenido viral",
    "achievements.item2.title": "450%",
    "achievements.item2.description": "Crecimiento en engagement en múltiples plataformas con herramientas de IA",
    "achievements.item3.title": "280%",
    "achievements.item3.description": "Aumento de tráfico mediante herramientas de SEO con IA",
    "achievements.item4.title": "215%",
    "achievements.item4.description": "ROI en campañas de ROBLOX",

    // Contact
    "contact.title": "Construyamos el Futuro",
    "contact.subtitle": "Donde la Tecnología se Encuentra con la Conexión",
    "contact.email": "Correo",
    "contact.phone": "Teléfono",
    "contact.cta": "Enviar Mensaje",
    "contact.name": "Tu Nombre",
    "contact.message": "Tu Mensaje",
    "contact.submit": "Enviar",

    // Footer
    "footer.copyright": "© 2023 Joel Maldonado. Todos los derechos reservados.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
