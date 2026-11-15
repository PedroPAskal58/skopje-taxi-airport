import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SkiTeaser } from '@/components/ski-teaser'
import { ToursTeaser } from '@/components/tours-teaser'
import { TransfersTeaser } from '@/components/transfers-teaser'
import { RouteExplorer } from '@/components/route-explorer'
import { Comfort } from '@/components/comfort'
import { Fleet } from '@/components/fleet'
import { GuidesTeaser } from '@/components/guides-teaser'
import { Faq } from '@/components/faq'
import { Reviews } from '@/components/reviews'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import { socialUrls } from '@/components/social-links'

export const metadata: Metadata = pageMetadata({
  title: 'Skopje Airport Taxi & Private Transfers €25 | 24/7 Fixed Price, Meet & Greet',
  description:
    'Private taxi from Skopje Airport. Skopje to Ohrid €140, Skopje city €25, Pristina €100, Thessaloniki €185. Fixed price per car, English-speaking drivers, 24/7.',
  path: '/',
})
const businessInfo = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: site.name,
  url: site.url,
  telephone: '+38978968744',
  email: site.email,
  image: `${site.url}/og-image.png`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
  },
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Skopje',
    addressCountry: 'MK',
  },
  areaServed: ['Skopje', 'Skopje International Airport', 'Ohrid', 'Pristina', 'Thessaloniki', 'Mavrovo', 'Bansko', 'Kopaonik'],
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: socialUrls,
}
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessInfo).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <SkiTeaser />
        <ToursTeaser />
        <TransfersTeaser />
        <RouteExplorer />
        <Comfort />
        <Fleet />
        <GuidesTeaser />
        <Reviews />
        <Faq />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
