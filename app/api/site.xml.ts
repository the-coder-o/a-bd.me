// pages/api/sitemap.xml.ts

import type { NextApiRequest, NextApiResponse } from 'next'

// Define a type for our URL entries to ensure type safety
type UrlEntry = {
  loc: string
  lastmod: string
  changefreq: string
  priority: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Dynamically generate the list of URLs for your site
  const urls: UrlEntry[] = [
    { loc: 'https://www.a-bd.me/', lastmod: '2024-02-01', changefreq: 'daily', priority: '1.0' },
    // Add other URLs here, for example:
    { loc: 'https://www.a-bd.me/about', lastmod: '2024-02-02', changefreq: 'monthly', priority: '0.8' },
  ]

  // Set the response headers
  res.setHeader('Content-Type', 'application/xml')

  // Build the XML Sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
    )
    .join('')}
</urlset>`

  // Send the sitemap as the response
  res.status(200).send(sitemap)
}
