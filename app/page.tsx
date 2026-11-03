import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Tours } from '@/components/tours'
import { Transfers } from '@/components/transfers'
import { RouteExplorer } from '@/components/route-explorer'
import { Comfort } from '@/components/comfort'
import { Fleet } from '@/components/fleet'
import { Faq } from '@/components/faq'
import { Reviews } from '@/components/reviews'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}
const businessInfo = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  url: site.url,
  telephone: '+38978968744',
  email: site.email,
  image: `${site.url}/og-image-v2.png`,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Skopje',
    addressCountry: 'MK',
  },
  areaServed: ['Skopje', 'Skopje International Airport', 'Ohrid', 'Pristina', 'Thessaloniki'],
  openingHours: 'Mo-Su 00:00-23:59',
}
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessInfo) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Tours />
        <Transfers />
        <RouteExplorer />
        <Comfort />
        <Fleet />
        <Reviews />
        <Faq />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
