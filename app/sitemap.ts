import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextora.lk'
  const lastModified = new Date('2026-01-15')

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Features Page - High Priority (SEO-important)
    {
      url: `${baseUrl}/features`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // How It Works Page - High Priority
    {
      url: `${baseUrl}/how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Problem & Solution Page
    {
      url: `${baseUrl}/problem`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Benefits Page
    {
      url: `${baseUrl}/benefits`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Roadmap Page - Updated Frequently
    {
      url: `${baseUrl}/roadmap`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Team Page
    {
      url: `${baseUrl}/team`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // FAQ Page - High SEO Value
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
