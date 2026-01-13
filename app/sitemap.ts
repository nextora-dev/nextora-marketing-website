import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextora.lk'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#how-it-works`,
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#benefits`,
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#roadmap`,
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#team`,
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

