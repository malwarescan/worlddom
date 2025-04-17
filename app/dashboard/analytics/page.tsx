"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  ArrowUpRight,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Search,
  Smartphone,
  Laptop,
  ExternalLink,
  Tablet,
  RefreshCw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"

// Types for analytics data
interface PageViewData {
  date: string
  views: number
  visitors: number
  sessions: number
}

interface TrafficSourceData {
  name: string
  value: number
}

interface TopPageData {
  page: string
  views: number
  avgTime: string
  convRate: string
}

interface DeviceData {
  name: string
  value: number
}

interface SummaryData {
  totalPageViews: number
  totalVisitors: number
  avgClickRate: string
  avgSessionDuration: string
}

interface AnalyticsData {
  pageViewsData: PageViewData[]
  trafficSourcesData: TrafficSourceData[]
  topPagesData: TopPageData[]
  deviceData: DeviceData[]
  summary: SummaryData
}

const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#f43f5e"]
const DEVICE_COLORS = ["#6366f1", "#8b5cf6", "#ec4899"]

export default function AnalyticsDashboard() {
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [timeRange, setTimeRange] = useState("7") // Default to 7 days
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const router = useRouter()

  const fetchAnalyticsData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/analytics?days=${timeRange}`)

      if (!response.ok) {
        throw new Error("Failed to fetch analytics data")
      }

      const data = await response.json()
      setAnalyticsData(data)
      setLastUpdated(new Date())
    } catch (err) {
      console.error("Error fetching analytics data:", err)
      setError("Failed to load analytics data. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsClient(true)
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("dashboard_auth") === "true"
    if (!isAuthenticated) {
      router.push("/dashboard")
      return
    }

    fetchAnalyticsData()

    // Set up polling for real-time updates (every 60 seconds)
    const intervalId = setInterval(() => {
      fetchAnalyticsData()
    }, 60000)

    return () => clearInterval(intervalId)
  }, [router, timeRange])

  const handleRefresh = () => {
    fetchAnalyticsData()
  }

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range)
  }

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070914] to-[#0c1225] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">SEO Analytics Dashboard</h1>
            <p className="text-gray-400 mt-1">
              Monitor your website performance and user interactions
              {lastUpdated && <span className="ml-2 text-xs">Last updated: {lastUpdated.toLocaleTimeString()}</span>}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className={`${timeRange === "1" ? "bg-indigo-900/30 border-indigo-500" : "border-indigo-600"} text-indigo-400 hover:bg-indigo-900/20`}
                onClick={() => handleTimeRangeChange("1")}
              >
                24h
              </Button>
              <Button
                variant="outline"
                className={`${timeRange === "7" ? "bg-indigo-900/30 border-indigo-500" : "border-indigo-600"} text-indigo-400 hover:bg-indigo-900/20`}
                onClick={() => handleTimeRangeChange("7")}
              >
                7d
              </Button>
              <Button
                variant="outline"
                className={`${timeRange === "30" ? "bg-indigo-900/30 border-indigo-500" : "border-indigo-600"} text-indigo-400 hover:bg-indigo-900/20`}
                onClick={() => handleTimeRangeChange("30")}
              >
                30d
              </Button>
            </div>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={handleRefresh}
              disabled={isLoading}
            >
              {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
              Refresh Data
            </Button>
          </div>
        </div>

        {error && <div className="mb-8 p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-400">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Page Views</p>
                  {isLoading ? (
                    <Skeleton className="h-8 w-24 bg-gray-700/30 mt-1" />
                  ) : (
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {analyticsData?.summary.totalPageViews.toLocaleString() || "0"}
                    </h3>
                  )}
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> 12.5% from last period
                  </p>
                </div>
                <div className="bg-indigo-600/20 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-indigo-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Unique Visitors</p>
                  {isLoading ? (
                    <Skeleton className="h-8 w-24 bg-gray-700/30 mt-1" />
                  ) : (
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {analyticsData?.summary.totalVisitors.toLocaleString() || "0"}
                    </h3>
                  )}
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> 8.3% from last period
                  </p>
                </div>
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Avg. Click Rate</p>
                  {isLoading ? (
                    <Skeleton className="h-8 w-24 bg-gray-700/30 mt-1" />
                  ) : (
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {analyticsData?.summary.avgClickRate || "0.0"}%
                    </h3>
                  )}
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> 1.8% from last period
                  </p>
                </div>
                <div className="bg-pink-600/20 p-3 rounded-lg">
                  <MousePointer className="h-6 w-6 text-pink-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Avg. Session Duration</p>
                  {isLoading ? (
                    <Skeleton className="h-8 w-24 bg-gray-700/30 mt-1" />
                  ) : (
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {analyticsData?.summary.avgSessionDuration || "0:00"}
                    </h3>
                  )}
                  <p className="text-sm text-green-400 flex items-center mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> 15.2% from last period
                  </p>
                </div>
                <div className="bg-red-600/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Page Views & Visitors</CardTitle>
              <CardDescription className="text-gray-400">Website traffic for the selected time period</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-[300px] flex items-center justify-center">
                  <Skeleton className="h-full w-full bg-gray-700/30" />
                </div>
              ) : (
                <ChartContainer
                  config={{
                    views: {
                      label: "Page Views",
                      color: "hsl(var(--chart-1))",
                    },
                    visitors: {
                      label: "Unique Visitors",
                      color: "hsl(var(--chart-2))",
                    },
                    sessions: {
                      label: "Sessions",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData?.pageViewsData || []}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2a3a64" />
                      <XAxis dataKey="date" stroke="#8896b3" />
                      <YAxis stroke="#8896b3" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="views"
                        stroke="var(--color-views)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="var(--color-visitors)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="var(--color-sessions)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Traffic Sources</CardTitle>
              <CardDescription className="text-gray-400">Where your visitors come from</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-[300px] flex items-center justify-center">
                  <Skeleton className="h-full w-full bg-gray-700/30" />
                </div>
              ) : (
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData?.trafficSourcesData || []}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {analyticsData?.trafficSourcesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {analyticsData?.trafficSourcesData.map((source, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-xs text-gray-300">{source.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Top Performing Pages</CardTitle>
              <CardDescription className="text-gray-400">Pages with the most views and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full bg-gray-700/30" />
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#2a3a64]">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Page URL</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Views</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Avg. Time</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Conv. Rate</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsData?.topPagesData.map((page, index) => (
                        <tr key={index} className="border-b border-[#2a3a64] last:border-0">
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 text-indigo-400 mr-2" />
                              <span className="text-sm text-gray-300 truncate max-w-[200px]">{page.page}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-sm text-gray-300">{page.views}</td>
                          <td className="py-3 px-4 text-right text-sm text-gray-300">{page.avgTime}</td>
                          <td className="py-3 px-4 text-right text-sm text-green-400">{page.convRate}</td>
                          <td className="py-3 px-4 text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={() => window.open(`https://www.dominatethe.world${page.page}`, "_blank")}
                            >
                              <ExternalLink className="h-4 w-4 text-gray-400" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Device Breakdown</CardTitle>
              <CardDescription className="text-gray-400">What devices your visitors use</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-[220px] flex items-center justify-center">
                  <Skeleton className="h-full w-full bg-gray-700/30" />
                </div>
              ) : (
                <div className="h-[220px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData?.deviceData || []}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {analyticsData?.deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={DEVICE_COLORS[index % DEVICE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {analyticsData?.deviceData.map((device, index) => {
                  let DeviceIcon = Smartphone
                  if (device.name === "desktop") DeviceIcon = Laptop
                  if (device.name === "tablet") DeviceIcon = Tablet

                  return (
                    <div key={index} className="flex flex-col items-center justify-center p-3 bg-[#161f38] rounded-lg">
                      <DeviceIcon className="h-5 w-5 text-indigo-400 mb-1" />
                      <span className="text-xs text-gray-300">
                        {device.name.charAt(0).toUpperCase() + device.name.slice(1)}
                      </span>
                      <span className="text-lg font-bold text-white">{device.value}%</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">SEO Keywords Performance</CardTitle>
              <CardDescription className="text-gray-400">Top performing keywords driving traffic</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full bg-gray-700/30" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-indigo-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-white">ai patient intake</p>
                        <p className="text-xs text-gray-400">Position: 3 (+2)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">142 clicks</p>
                      <p className="text-xs text-gray-400">4.8% CTR</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-indigo-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-white">healthcare ai implementation</p>
                        <p className="text-xs text-gray-400">Position: 5 (+1)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">98 clicks</p>
                      <p className="text-xs text-gray-400">3.2% CTR</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-indigo-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-white">patient onboarding automation</p>
                        <p className="text-xs text-gray-400">Position: 7 (new)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">76 clicks</p>
                      <p className="text-xs text-gray-400">2.9% CTR</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-indigo-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-white">ai in healthcare operations</p>
                        <p className="text-xs text-gray-400">Position: 8 (+3)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">64 clicks</p>
                      <p className="text-xs text-gray-400">2.5% CTR</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                    <div className="flex items-center">
                      <Search className="h-5 w-5 text-indigo-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-white">digital front door healthcare</p>
                        <p className="text-xs text-gray-400">Position: 12 (-1)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-white">51 clicks</p>
                      <p className="text-xs text-gray-400">1.8% CTR</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-[#0d1429]/80 border border-[#2a3a64] shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Real-Time Visitors</CardTitle>
              <CardDescription className="text-gray-400">Current active users on your site</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-16 w-full bg-gray-700/30" />
                  <Skeleton className="h-[200px] w-full bg-gray-700/30" />
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-center p-6 bg-[#161f38] rounded-lg mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Active Users Now</p>
                      <p className="text-4xl font-bold text-white mt-2">12</p>
                      <div className="flex items-center justify-center mt-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-xs text-green-400">Live updating</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-indigo-400 mr-3" />
                        <p className="text-sm text-white">/blog/ai-patient-intake-ehr-integration</p>
                      </div>
                      <p className="text-sm font-medium text-white">5 users</p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-indigo-400 mr-3" />
                        <p className="text-sm text-white">/services</p>
                      </div>
                      <p className="text-sm font-medium text-white">3 users</p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-indigo-400 mr-3" />
                        <p className="text-sm text-white">/blog/ai-patient-experience-onboarding</p>
                      </div>
                      <p className="text-sm font-medium text-white">2 users</p>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[#161f38] rounded-lg">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-indigo-400 mr-3" />
                        <p className="text-sm text-white">/contact</p>
                      </div>
                      <p className="text-sm font-medium text-white">2 users</p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
