import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/site-header'
import { Faq } from '@/components/faq'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = pageMetadata({
  title: 'FAQ – Prices, Pickup & Payment | Skopje Airport Taxi',
  description:
    'How much is a taxi from Skopje to Ohrid? How does airport pickup work? Answers about fixed prices, payment, child seats and destinations.',
  path: '/faq',
})

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Faq headingLevel="h1" />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
