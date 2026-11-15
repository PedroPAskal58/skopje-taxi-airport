import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookingFlow } from '@/components/booking-flow'
import { vehicles, type VehicleSlug } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Book a Skopje Airport Taxi or Transfer | Fixed Price, 24/7',
  description:
    'Book your Skopje Airport taxi, Skopje to Ohrid transfer (€140) or private day tour in minutes. Fixed price per car, fast WhatsApp confirmation, no prepayment.',
  path: '/book',
})

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ car?: string }>
}) {
  const { car } = await searchParams
  const initialCar = car && car in vehicles ? (car as VehicleSlug) : undefined

  return (
    <>
      <SiteHeader />
      <main>
        <BookingFlow initialCar={initialCar} />
      </main>
      <SiteFooter />
    </>
  )
}
