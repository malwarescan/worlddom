import Link from "next/link"
import { ArrowRight, ArrowLeft, Check, TrendingUp, BarChart, LineChart, PieChart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PredictiveAnalyticsPage() {
  const features = [
    "Advanced machine learning models for accurate forecasting",
    "Real-time data processing and analysis",
    "Customer behavior prediction and segmentation",
    "Market trend identification and opportunity spotting",
    "Risk assessment and mitigation strategies",
    "Automated reporting and actionable insights",
  ]

  const caseStudies = [
    {
      company: "Retail Chain",
      result: "42% reduction in inventory costs",
      description:
        "Implemented predictive demand forecasting to optimize inventory levels across 200+ stores, significantly reducing carrying costs while maintaining product availability.",
    },
    {
      company: "Financial Services",
      result: "68% improvement in risk assessment accuracy",
      description:
        "Deployed predictive models to analyze customer data and market conditions, dramatically improving loan default predictions and portfolio management.",
    },
    {
      company: "Manufacturing",
      result: "31% decrease in maintenance costs",
      description:
        "Utilized predictive maintenance analytics to forecast equipment failures before they occurred, reducing downtime and extending machinery lifespan.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[rgb(var(--envato-darker))] py-16 md:py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 hero-pattern opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <Link
                  href="/ai-services"
                  className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to AI Services
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  Predictive <span className="envato-gradient">Analytics</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your business with AI-powered forecasting that turns data into strategic advantage. Our
                  predictive analytics solutions help you anticipate market changes, customer behavior, and business
                  opportunities before they happen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#case-studies" className="envato-button inline-flex items-center">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl animate-float"></div>
                  <div className="relative z-10 w-full h-full rounded-2xl bg-[rgb(var(--envato-dark))] border border-gray-800 flex items-center justify-center p-8">
                    <TrendingUp className="w-32 h-32 text-[rgb(var(--envato-green))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">93%</div>
                <p className="text-gray-600">Prediction Accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">47%</div>
                <p className="text-gray-600">Average Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[rgb(var(--envato-green))] mb-2">3.5x</div>
                <p className="text-gray-600">ROI on Analytics Investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our predictive analytics solutions leverage advanced AI to deliver actionable insights that drive
                business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="w-6 h-6 rounded-full bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center">
                      <Check className="h-4 w-4 text-[rgb(var(--envato-green))]" />
                    </div>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Predictive Analytics Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive approach combines data science, machine learning, and domain expertise to deliver
                accurate predictions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Data Collection & Processing</h3>
                <p className="text-gray-600">
                  We gather and clean data from multiple sources, ensuring quality inputs for our predictive models.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Model Development</h3>
                <p className="text-gray-600">
                  Our data scientists build and train custom machine learning models tailored to your specific business
                  needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--envato-green),0.1)] flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-[rgb(var(--envato-green))]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Insight Delivery</h3>
                <p className="text-gray-600">
                  We transform complex predictions into clear, actionable insights delivered through intuitive
                  dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our predictive analytics solutions can be applied across various business functions and industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Demand Forecasting</h3>
                <p className="text-gray-600">
                  Accurately predict customer demand to optimize inventory, reduce costs, and improve customer
                  satisfaction.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Analytics</h3>
                <p className="text-gray-600">
                  Predict customer behavior, identify churn risks, and personalize marketing efforts for maximum impact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Financial Forecasting</h3>
                <p className="text-gray-600">
                  Project revenue, costs, and cash flow with greater accuracy to improve financial planning and decision
                  making.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Predictive Maintenance</h3>
                <p className="text-gray-600">
                  Anticipate equipment failures before they occur to reduce downtime and maintenance costs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Risk Management</h3>
                <p className="text-gray-600">
                  Identify potential risks and vulnerabilities to develop proactive mitigation strategies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Market Intelligence</h3>
                <p className="text-gray-600">
                  Forecast market trends and competitor actions to identify new opportunities and threats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how our predictive analytics solutions have transformed businesses across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                  <p className="text-[rgb(var(--envato-green))] font-medium mb-4">{study.result}</p>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[rgb(var(--envato-green))]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Ready to predict the future?</h2>
                <p className="text-white text-opacity-90">
                  Get a free consultation and discover how predictive analytics can transform your business.
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-white text-[rgb(var(--envato-darker))] px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition-colors"
              >
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
