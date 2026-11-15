import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/site-header'
import { Reviews } from '@/components/reviews'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = pageMetadata({
  title: 'Reviews – 4.9★ from Travellers | Skopje Airport Taxi',
  description:
    'Read reviews from guests who booked Skopje Airport transfers, Skopje to Ohrid rides and private day tours across North Macedonia.',
  path: '/reviews',
})

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Reviews headingLevel="h1" />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
