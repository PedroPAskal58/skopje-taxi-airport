import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookingCta } from '@/components/booking-cta'
import { GuideCard } from '@/components/guide-card'
import { guides } from '@/lib/guides'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Skopje Travel Guides | Routes, Taxi Prices & Day Trips',
  description:
    'Travel guides from Skopje: how to get to Pristina, Ohrid, Thessaloniki, Sofia and more, with distances, taxi prices, border tips and the best day trips.',
  path: '/guides',
  keywords: [
    'Skopje travel guide',
    'how to get from Skopje',
    'Skopje to Pristina',
    'Skopje to Ohrid',
    'day trips from Skopje',
    'Skopje taxi prices',
  ],
})

const routeGuides = guides.filter((guide) => guide.transferSlug)
const tripGuides = guides.filter((guide) => !guide.transferSlug)

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Travel guides', item: `${site.url}/guides` },
      ],
    },
    {
      '@type': 'ItemList',
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        url: `${site.url}/guides/${guide.slug}`,
      })),
    },
  ],
}

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-20 md:pt-36">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">Travel guides</p>
            <h1 className="mt-2 max-w-3xl text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Getting around from Skopje
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Straight answers for planning your trip: how far each destination is, how long the drive takes,
              what a taxi costs and what to expect at the border.
            </p>

            <h2 className="mt-14 font-serif text-2xl font-semibold text-foreground md:text-3xl">Day trip ideas</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tripGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>

            <h2 className="mt-14 font-serif text-2xl font-semibold text-foreground md:text-3xl">Route guides</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {routeGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        </section>
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
