import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/site-header'
import { Fleet } from '@/components/fleet'
import { Comfort } from '@/components/comfort'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = pageMetadata({
  title: 'Our Fleet – Sedans, SUVs & Vans | Skopje Airport Taxi',
  description:
    'Clean, air-conditioned sedan and SUV for Skopje Airport transfers and trips to Ohrid, Pristina and Thessaloniki. Professional drivers, fixed prices per car.',
  path: '/fleet',
})

export default function FleetPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Fleet headingLevel="h1" />
        <Comfort />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
