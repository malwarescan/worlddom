import { NextResponse } from "next/server"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

// Initialize the Google Analytics Data API client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_ANALYTICS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
})

const propertyId = process.env.GOOGLE_ANALYTICS_PROPERTY_ID

export async function GET(request: Request) {
  try {
    // Get the time range from query parameters (default to last 7 days)
    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "7")

    // Calculate date range
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(endDate.getDate() - days)

    // Format dates for GA4
    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0]
    }

    // Get page views and visitors
    const [pageViewsResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        },
      ],
      dimensions: [
        {
          name: "date",
        },
      ],
      metrics: [
        {
          name: "screenPageViews",
        },
        {
          name: "totalUsers",
        },
        {
          name: "sessions",
        },
      ],
    })

    // Get traffic sources
    const [trafficSourcesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        },
      ],
      dimensions: [
        {
          name: "sessionSource",
        },
      ],
      metrics: [
        {
          name: "sessions",
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: "sessions",
          },
          desc: true,
        },
      ],
      limit: 4,
    })

    // Get top pages
    const [topPagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        },
      ],
      dimensions: [
        {
          name: "pagePath",
        },
      ],
      metrics: [
        {
          name: "screenPageViews",
        },
        {
          name: "averageSessionDuration",
        },
        {
          name: "conversions",
        },
      ],
      orderBys: [
        {
          metric: {
            metricName: "screenPageViews",
          },
          desc: true,
        },
      ],
      limit: 5,
    })

    // Get device breakdown
    const [deviceResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        },
      ],
      dimensions: [
        {
          name: "deviceCategory",
        },
      ],
      metrics: [
        {
          name: "sessions",
        },
      ],
    })

    // Format the page views data
    const pageViewsData =
      pageViewsResponse.rows?.map((row) => {
        const date = row.dimensionValues?.[0].value || ""
        const views = Number.parseInt(row.metricValues?.[0].value || "0")
        const visitors = Number.parseInt(row.metricValues?.[1].value || "0")
        const sessions = Number.parseInt(row.metricValues?.[2].value || "0")

        // Format date from YYYYMMDD to MMM DD
        const year = Number.parseInt(date.substring(0, 4))
        const month = Number.parseInt(date.substring(4, 6)) - 1
        const day = Number.parseInt(date.substring(6, 8))
        const dateObj = new Date(year, month, day)
        const formattedDate = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" })

        return {
          date: formattedDate,
          views,
          visitors,
          sessions,
        }
      }) || []

    // Format the traffic sources data
    const trafficSourcesData =
      trafficSourcesResponse.rows?.map((row) => {
        const name = row.dimensionValues?.[0].value || "Unknown"
        const sessions = Number.parseInt(row.metricValues?.[0].value || "0")

        // Calculate percentage of total sessions
        const totalSessions =
          trafficSourcesResponse.rows?.reduce((sum, row) => {
            return sum + Number.parseInt(row.metricValues?.[0].value || "0")
          }, 0) || 1

        const value = Math.round((sessions / totalSessions) * 100)

        return {
          name,
          value,
        }
      }) || []

    // Format the top pages data
    const topPagesData =
      topPagesResponse.rows?.map((row) => {
        const page = row.dimensionValues?.[0].value || ""
        const views = Number.parseInt(row.metricValues?.[0].value || "0")

        // Format average session duration from seconds to MM:SS
        const durationSeconds = Number.parseFloat(row.metricValues?.[1].value || "0")
        const minutes = Math.floor(durationSeconds / 60)
        const seconds = Math.floor(durationSeconds % 60)
        const avgTime = `${minutes}:${seconds.toString().padStart(2, "0")}`

        // Calculate conversion rate
        const conversions = Number.parseInt(row.metricValues?.[2].value || "0")
        const convRate = views > 0 ? `${((conversions / views) * 100).toFixed(1)}%` : "0.0%"

        return {
          page,
          views,
          avgTime,
          convRate,
        }
      }) || []

    // Format the device data
    const deviceData =
      deviceResponse.rows?.map((row) => {
        const name = row.dimensionValues?.[0].value || "Unknown"
        const sessions = Number.parseInt(row.metricValues?.[0].value || "0")

        // Calculate percentage of total sessions
        const totalSessions =
          deviceResponse.rows?.reduce((sum, row) => {
            return sum + Number.parseInt(row.metricValues?.[0].value || "0")
          }, 0) || 1

        const value = Math.round((sessions / totalSessions) * 100)

        return {
          name,
          value,
        }
      }) || []

    // Calculate totals for the summary cards
    const totalPageViews = pageViewsData.reduce((sum, item) => sum + item.views, 0)
    const totalVisitors = pageViewsData.reduce((sum, item) => sum + item.visitors, 0)

    // Calculate average click rate (using a placeholder calculation)
    const avgClickRate = totalPageViews > 0 ? ((totalVisitors / totalPageViews) * 100).toFixed(1) : "0.0"

    // Calculate average session duration
    const totalSessions = pageViewsData.reduce((sum, item) => sum + item.sessions, 0)
    const avgSessionDuration = "2:47" // Placeholder - would calculate from actual data

    return NextResponse.json({
      pageViewsData,
      trafficSourcesData,
      topPagesData,
      deviceData,
      summary: {
        totalPageViews,
        totalVisitors,
        avgClickRate,
        avgSessionDuration,
      },
    })
  } catch (error) {
    console.error("Error fetching analytics data:", error)
    return NextResponse.json({ error: "Failed to fetch analytics data" }, { status: 500 })
  }
}

