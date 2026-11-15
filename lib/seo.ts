import type { Metadata } from 'next'
import { site } from '@/lib/site'

const DEFAULT_IMAGE = '/og-image.png'
const MAX_TITLE = 65
const MAX_DESCRIPTION = 160

// Search results cut off anything longer mid-word, so use the fullest variant that still fits.
export function fitTitle(...candidates: string[]) {
  return candidates.find((candidate) => candidate.length <= MAX_TITLE) ?? candidates[candidates.length - 1]
}

export function fitDescription(lead: string, ...extras: string[]) {
  return extras.reduce((text, extra) => (`${text} ${extra}`.length <= MAX_DESCRIPTION ? `${text} ${extra}` : text), lead)
}

type PageSeo = {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: { url: string; alt: string }
}

export function pageMetadata({ title, description, path, keywords, image }: PageSeo): Metadata {
  const images = [image ?? { url: DEFAULT_IMAGE, alt: site.name }]
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: 'en_US',
      images,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((img) => img.url),
    },
  }
}
