import { getTransfer } from '@/lib/transfers'
import { tours, type TourSlug } from '@/lib/site'

const carImages: Record<string, string> = {
  mondeo: '/images/fleet-mondeo.webp',
  kia: '/images/fleet-kia.webp',
  van: '/images/fleet-van.webp',
}

export function getBookingImage(key: string) {
  const [kind, slug = ''] = key.split(':')
  if (kind === 'transfer') return slug === 'custom' ? '/images/transfer-airport.webp' : getTransfer(slug)?.image ?? '/images/transfer-airport.webp'
  if (kind === 'tour') return slug === 'custom' ? '/images/tour-matka.webp' : tours[slug as TourSlug]?.image ?? '/images/tour-matka.webp'
  if (kind === 'car') return carImages[slug] ?? '/images/fleet-mondeo.webp'
  return '/images/hero-macedonia.webp'
}
