import { Compass } from 'lucide-react'
import { TeaserSection } from '@/components/landing/teaser-section'
import { tourCards, tourFromPrice } from '@/lib/tours-page'

const FEATURED_COUNT = 7

export function ToursTeaser() {
  return (
    <TeaserSection
      id="tours"
      tinted
      eyebrow="Day trips"
      eyebrowIcon={Compass}
      title="Private Day Tours from Skopje"
      description={`Your own driver, your own schedule and no crowds. ${tourCards.length} day trips to Matka Canyon, Ohrid, Kosovo and beyond, with one price per car from €${tourFromPrice}.`}
      cta={{ href: '/tours', label: 'All tours & prices' }}
      items={tourCards.slice(0, FEATURED_COUNT).map((tour) => ({
        key: tour.slug,
        href: `/tours/${tour.slug}`,
        image: tour.image,
        alt: tour.alt,
        badge: tour.tag,
        title: tour.shortName,
        duration: tour.duration,
        price: `from €${tour.price}`,
      }))}
      more={{
        href: '/tours',
        icon: Compass,
        title: `See all ${tourCards.length} tours`,
        label: 'Itineraries, prices & FAQ',
      }}
    />
  )
}
