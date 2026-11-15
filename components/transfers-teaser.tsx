import { PlaneLanding, Route } from 'lucide-react'
import { TeaserSection } from '@/components/landing/teaser-section'
import { transfers } from '@/lib/transfers'
import { transferFromPrice } from '@/lib/transfers-page'

const FEATURED_COUNT = 7

export function TransfersTeaser() {
  return (
    <TeaserSection
      id="transfers"
      eyebrow="Private transfers"
      eyebrowIcon={PlaneLanding}
      title="Fixed-Price Routes & Airport Pickups"
      description={`Door-to-door private rides from Skopje and Skopje Airport across the Balkans, with one clear price per car from €${transferFromPrice} and no hidden fees.`}
      cta={{ href: '/transfers', label: 'All routes & prices' }}
      items={transfers.slice(0, FEATURED_COUNT).map((transfer) => ({
        key: transfer.slug,
        href: `/transfers/${transfer.slug}`,
        image: transfer.image,
        alt: transfer.alt,
        badge: transfer.tag,
        title: `${transfer.from} to ${transfer.to}`,
        duration: transfer.duration,
        price: `€${transfer.price}`,
      }))}
      more={{
        href: '/transfers',
        icon: Route,
        title: `Compare all ${transfers.length} routes`,
        label: 'Prices, drive times & FAQ',
      }}
    />
  )
}
