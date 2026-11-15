import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookingCta } from '@/components/booking-cta'
import { GuideArticle } from '@/components/guide-article'
import { GUIDES_PUBLISHED, getGuide, guides, type Guide } from '@/lib/guides'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  const metadata = pageMetadata({
    title: guide.metaTitle,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
    image: { url: guide.image, alt: guide.alt },
  })
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: GUIDES_PUBLISHED },
  }
}

function guideJsonLd(guide: Guide) {
  const url = `${site.url}/guides/${guide.slug}`
  const business = { '@type': 'Organization', name: site.name, url: site.url }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Travel guides', item: `${site.url}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url },
        ],
      },
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        image: `${site.url}${guide.image}`,
        datePublished: GUIDES_PUBLISHED,
        dateModified: GUIDES_PUBLISHED,
        mainEntityOfPage: url,
        author: business,
        publisher: business,
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(guideJsonLd(guide)).replace(/</g, '\\u003c'),
          }}
        />
        <GuideArticle guide={guide} />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
