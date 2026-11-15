import type { MetadataRoute } from 'next'
import { site, tourList, allTransfers } from '@/lib/site'
import { isSkiTransfer } from '@/lib/ski-transfers'
import { guides } from '@/lib/guides'

const seasonalPages = new Set(['/ski-transfers'])

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticPages = ['', '/ski-transfers', '/tours', '/transfers', '/routes', '/fleet', '/faq', '/reviews', '/contact', '/book', '/build-trip', '/uber-skopje', '/why-us', '/guides']

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : seasonalPages.has(path) ? 0.9 : 0.8,
    })),
    ...tourList.map((tour) => ({
      url: `${site.url}/tours/${tour.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...guides.map((guide) => ({
      url: `${site.url}/guides/${guide.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...allTransfers.map((transfer) => ({
      url: `${site.url}/transfers/${transfer.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: isSkiTransfer(transfer) ? 0.8 : 0.7,
    })),
  ]
}
