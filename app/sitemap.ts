import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextora.lk'
  const lastModified = new Date('2026-01-13')

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Features Section - High Priority
    {
      url: `${baseUrl}/#features`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // How It Works - High Priority
    {
      url: `${baseUrl}/#how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Problem Section
    {
      url: `${baseUrl}/#problem`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Solution Section
    {
      url: `${baseUrl}/#solution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Benefits Section
    {
      url: `${baseUrl}/#benefits`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Roadmap - Updated Frequently
    {
      url: `${baseUrl}/#roadmap`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Team Section
    {
      url: `${baseUrl}/#team`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // FAQ Section - High SEO Value
    {
      url: `${baseUrl}/#faq`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // CTA / Signup Section
    {
      url: `${baseUrl}/#cta`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ]
}

