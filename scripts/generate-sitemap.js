const fs = require("fs")
const path = require("path")
const glob = require("glob")

// Configuration
const SITE_URL = "https://dominatethe.world"
const PUBLIC_DIR = path.join(process.cwd(), "public")
const APP_DIR = path.join(process.cwd(), "app")
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml")

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date()
  return date.toISOString().split("T")[0]
}

// Generate sitemap
async function generateSitemap() {
  try {
    // Start XML content
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

    // Add main pages
    const mainPages = [
      { url: "/", priority: "1.0", changefreq: "monthly" },
      { url: "/about", priority: "0.8", changefreq: "monthly" },
      { url: "/services", priority: "0.9", changefreq: "monthly" },
      { url: "/technology", priority: "0.8", changefreq: "monthly" },
      { url: "/contact", priority: "0.8", changefreq: "monthly" },
      { url: "/blog", priority: "0.8", changefreq: "weekly" },
    ]

    mainPages.forEach((page) => {
      sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
    })

    // Find all blog post pages
    const blogPattern = path.join(APP_DIR, "blog", "*", "page.tsx")
    const blogFiles = glob.sync(blogPattern)

    blogFiles.forEach((file) => {
      // Extract slug from path
      const slug = path.basename(path.dirname(file))
      if (slug !== "blog") {
        // Skip the main blog index page
        sitemap += `  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`
      }
    })

    // Find all service pages
    const servicePattern = path.join(APP_DIR, "services", "*", "page.tsx")
    const serviceFiles = glob.sync(servicePattern)

    serviceFiles.forEach((file) => {
      // Extract slug from path
      const slug = path.basename(path.dirname(file))
      sitemap += `  <url>
    <loc>${SITE_URL}/services/${slug}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`
    })

    // Add legal pages
    const legalPages = [
      { url: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
      { url: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
    ]

    legalPages.forEach((page) => {
      sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
    })

    // Close XML
    sitemap += `</urlset>`

    // Write sitemap to file
    fs.writeFileSync(SITEMAP_PATH, sitemap)
    console.log(`Sitemap generated at ${SITEMAP_PATH}`)
  } catch (error) {
    console.error("Error generating sitemap:", error)
  }
}

// Run the generator
generateSitemap()

