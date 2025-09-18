import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danielwilczak.com'
  const locales = ['en', 'pl']

  const staticPages = [
    '',
    '/about',
    '/projects',
    '/projects/web',
    '/projects/mobile',
    '/projects/ai',
    '/contact'
  ]

  const routes: MetadataRoute.Sitemap = []

  // Generate routes for each locale
  locales.forEach(locale => {
    staticPages.forEach(page => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
      })
    })
  })

  return routes
}