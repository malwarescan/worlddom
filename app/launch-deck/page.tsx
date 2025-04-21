import { Web2Header } from "@/components/web2-header"
import { Web2Footer } from "@/components/web2-footer"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function LaunchDeck() {
  return (
    <>
      <Web2Header />
      <main className="min-h-screen bg-slate-200 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center">
            <Link href="/" className="flex items-center text-blue-700 hover:text-blue-900 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Neural Command Launch Deck</h1>
              <p className="text-blue-100">Transforming businesses with cutting-edge AI solutions</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
                  <p className="text-gray-700 mb-4">
                    Neural Command is on a mission to democratize artificial intelligence, making advanced AI solutions
                    accessible to businesses of all sizes. We believe that AI has the power to transform industries,
                    streamline operations, and drive unprecedented growth.
                  </p>
                  <p className="text-gray-700">
                    Our team of AI experts is dedicated to developing custom solutions that address real-world business
                    challenges with unparalleled accuracy and efficiency.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                        1
                      </div>
                      <p className="text-gray-700">$5.2M in secured funding from top-tier investors</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                        2
                      </div>
                      <p className="text-gray-700">500+ enterprise clients across 12 industries</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                        3
                      </div>
                      <p className="text-gray-700">98% client satisfaction rate with 85% renewal rate</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                        4
                      </div>
                      <p className="text-gray-700">Proprietary neural network technology with 3 pending patents</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Financial Projections</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 bg-blue-50 text-left text-blue-700 border-b">Metric</th>
                        <th className="py-3 px-4 bg-blue-50 text-left text-blue-700 border-b">Year 1</th>
                        <th className="py-3 px-4 bg-blue-50 text-left text-blue-700 border-b">Year 2</th>
                        <th className="py-3 px-4 bg-blue-50 text-left text-blue-700 border-b">Year 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b font-medium">Revenue</td>
                        <td className="py-3 px-4 border-b">$2.4M</td>
                        <td className="py-3 px-4 border-b">$5.8M</td>
                        <td className="py-3 px-4 border-b">$12.3M</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b font-medium">Growth Rate</td>
                        <td className="py-3 px-4 border-b">-</td>
                        <td className="py-3 px-4 border-b">142%</td>
                        <td className="py-3 px-4 border-b">112%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b font-medium">Gross Margin</td>
                        <td className="py-3 px-4 border-b">68%</td>
                        <td className="py-3 px-4 border-b">72%</td>
                        <td className="py-3 px-4 border-b">75%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b font-medium">EBITDA</td>
                        <td className="py-3 px-4 border-b">-$0.8M</td>
                        <td className="py-3 px-4 border-b">$1.2M</td>
                        <td className="py-3 px-4 border-b">$4.1M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Product Roadmap</h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                  <div className="space-y-8 relative">
                    {[
                      {
                        quarter: "Q2 2023",
                        title: "Neural Network Platform 2.0",
                        description:
                          "Launch of our enhanced neural network platform with improved accuracy and processing speed.",
                      },
                      {
                        quarter: "Q4 2023",
                        title: "Industry-Specific AI Solutions",
                        description:
                          "Release of pre-configured AI solutions for healthcare, finance, and manufacturing sectors.",
                      },
                      {
                        quarter: "Q1 2024",
                        title: "AI Integration Framework",
                        description:
                          "New framework allowing seamless integration with existing enterprise systems and workflows.",
                      },
                      {
                        quarter: "Q3 2024",
                        title: "Predictive Analytics Suite",
                        description:
                          "Advanced predictive analytics tools with customizable dashboards and reporting features.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="ml-8 relative">
                        <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <div className="text-sm text-blue-600 font-semibold mb-1">{item.quarter}</div>
                          <h3 className="text-lg font-bold text-blue-700 mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="/launch-deck.pdf"
                  download="Neural-Command-Launch-Deck.pdf"
                  className="bg-gradient-to-b from-purple-400 to-purple-600 text-white font-bold py-3 px-6 rounded-md border-2 border-white shadow-md hover:shadow-lg transition-all flex items-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Deck
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Web2Footer />
    </>
  )
}
