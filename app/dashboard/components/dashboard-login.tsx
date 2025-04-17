"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LockIcon, ShieldIcon } from "lucide-react"

export default function DashboardLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // In a real implementation, this would be an API call to authenticate
      // For demo purposes, we'll use a simple check
      if (email === "admin@neuralcommand.com" && password === "demo123") {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        // Set a client-side cookie or localStorage token
        localStorage.setItem("dashboard_auth", "true")
        // Redirect to the dashboard home
        router.push("/dashboard/analytics")
      } else {
        setError("Invalid credentials. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-md bg-[#0d1429]/80 border border-[#2a3a64] shadow-xl backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center">
              <ShieldIcon className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center text-white">Dashboard Access</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Enter your credentials to access the SEO analytics dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@neuralcommand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#161f38] border-[#2a3a64] text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-[#161f38] border-[#2a3a64] text-white"
                  />
                  <LockIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
                <div className="text-sm text-right">
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              {error && (
                <div className="p-3 bg-red-900/30 border border-red-800 rounded-md text-red-300 text-sm">{error}</div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-[#2a3a64] pt-4">
          <p className="text-xs text-gray-400">For demo purposes, use: admin@neuralcommand.com / demo123</p>
        </CardFooter>
      </Card>
    </div>
  )
}
