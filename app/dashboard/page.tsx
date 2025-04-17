import DashboardLogin from "./components/dashboard-login"

export const metadata = {
  title: "SEO Analytics Dashboard | Neural Command",
  description: "Secure dashboard for monitoring SEO performance and user interactions across Neural Command pages.",
}

export default function DashboardPage() {
  // In a real implementation, you would check server-side session
  // For demo purposes, we'll just show the login page
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070914] to-[#0c1225] text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Neural Command Analytics Dashboard</h1>
        <DashboardLogin />
      </div>
    </div>
  )
}
