"use client"

import { useState } from "react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <RevealOnScroll>
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">FREQUENTLY ASKED QUESTIONS</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0a1029]/50 border border-indigo-500/20 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 flex items-center justify-between text-left font-medium text-white hover:bg-indigo-900/30 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div id={`faq-${index}`} className="p-4 pt-0 text-gray-300 animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  )
}

const faqs = [
  {
    question: "What exactly is Agentic Search?",
    answer:
      "Agentic Search combines large language models (LLMs) with autonomous agents to not just find information, but understand it, reason about it, and take actions based on it. Unlike traditional search that returns links or documents, Agentic Search can perform complex multi-step tasks, synthesize information from multiple sources, and deliver specific answers or complete workflows.",
  },
  {
    question: "How is Agentic Search different from regular enterprise search?",
    answer:
      "Traditional enterprise search finds documents containing keywords. Agentic Search understands the intent behind queries, can access multiple systems and data sources, reason about the information it finds, and take actions to complete tasks. It's like having a team of AI assistants that can research, analyze, and execute workflows rather than just returning search results.",
  },
  {
    question: "What kind of ROI can we expect from implementing Agentic Search?",
    answer:
      "Organizations typically see ROI in three areas: time savings (70-80% reduction in research and information retrieval time), improved decision quality (through more comprehensive information analysis), and operational efficiency (automating complex workflows). Most clients see positive ROI within 3-6 months of implementation.",
  },
  {
    question: "How long does it take to implement an Agentic Search solution?",
    answer:
      "Implementation timelines vary based on complexity and scope, but typically range from 4-12 weeks. Basic implementations can be up and running in as little as 2-3 weeks, while more complex enterprise-wide solutions with multiple integrations may take 2-3 months.",
  },
  {
    question: "How secure is Agentic Search with sensitive company data?",
    answer:
      "Security is paramount in our implementations. We offer on-premises deployment options, end-to-end encryption, role-based access controls, and audit logging. Our solutions comply with major security standards including SOC 2, HIPAA, and GDPR. We never train our models on your proprietary data unless explicitly authorized.",
  },
  {
    question: "Can Agentic Search integrate with our existing systems?",
    answer:
      "Yes, our Agentic Search solutions are designed to integrate with your existing infrastructure. We support integration with databases, document management systems, CRMs, ERPs, and custom internal tools through our extensive API framework and pre-built connectors for popular enterprise systems.",
  },
]
