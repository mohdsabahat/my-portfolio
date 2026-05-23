import type { MetadataRoute } from 'next'

const revalidate = 60 * 60 * 24 // 1 day

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_WEBSITE_URL || '',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}