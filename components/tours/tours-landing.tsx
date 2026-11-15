import {
  Baby,
  BadgeEuro,
  Banknote,
  CalendarCheck,
  Camera,
  Compass,
  Hourglass,
  Landmark,
  Languages,
  MapPin,
  MapPinPlus,
  MessageSquareText,
  Timer,
  Users,
} from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { LandingHero } from '@/components/landing/landing-hero'
import { LandingMarquee } from '@/components/landing/landing-marquee'
import { LandingIntro } from '@/components/landing/landing-intro'
import { LandingPriceTable } from '@/components/landing/landing-price-table'
import { LandingSteps } from '@/components/landing/landing-steps'
import { LandingBenefits } from '@/components/landing/landing-benefits'
import { LandingFaq } from '@/components/landing/landing-faq'
import { tourCards, tourFaqs, tourFromPrice } from '@/lib/tours-page'

export const toursHeroImage = '/images/hero-macedonia.webp'

const byLength = [...tourCards].sort((a, b) => a.minutes - b.minutes)
const shortest = byLength[0]

export function ToursHero() {
  return (
    <LandingHero
      titleId="tours-hero-title"
      image={{
        src: toursHeroImage,
        alt: 'Black sedan on a winding lakeside road at sunset with mountains and a hillside village beyond',
      }}
      crumb="Tours"
      eyebrow="Private day tours · Your own driver"
      eyebrowIcon={Compass}
      title="Private Day Tours from Skopje"
      accent="at Your Own Pace"
      description={`${tourCards.length} private day trips with your own driver: Matka Canyon, Ohrid, Stobi, Kokino, Mavrovo and Kosovo. One price per car, from €${tourFromPrice}.`}
      included={['Hotel pickup in Skopje', 'Private car & driver', 'Flexible schedule', 'Up to 4 passengers']}
      cta={{ href: '#tours', label: 'See tours & prices' }}
      stats={[
        { label: 'Day tours', value: <CountUp value={tourCards.length} /> },
        { label: 'Per car, from', value: <CountUp value={tourFromPrice} prefix="€" /> },
        { label: 'Passengers per car', value: <CountUp value={4} /> },
        { label: 'Days a week', value: <CountUp value={7} /> },
      ]}
    />
  )
}

export function ToursMarquee() {
  return (
    <LandingMarquee
      icon={Compass}
      items={tourCards.map((tour) => ({
        key: tour.slug,
        name: tour.shortName,
        detail: `${tour.duration.replace('~', '')} · from €${tour.price}`,
      }))}
    />
  )
}

export function ToursIntro() {
  return (
    <LandingIntro
      titleId="tours-intro-title"
      eyebrow="See more in a day"
      title="Why Tour Macedonia with a Private Driver?"
      paragraphs={[
        'Skopje is a compact base for seeing North Macedonia. Matka Canyon is 25 minutes from the centre, the Bronze Age observatory at Kokino is about 90 km north, and Ohrid, the UNESCO-listed town on one of the oldest lakes in Europe, is around 170 km away. Pristina and Prizren in Kosovo fit into a single day as well.',
        'Most of these places are awkward to reach by public transport and hard to combine in one day by bus. With a private car you leave when you like, stay as long as you want at each stop and skip whatever does not interest you. Your driver waits and brings you back to your door.',
        'Every tour is private driver transportation only, so there is no guide and no group to keep up with. Prices are per car for up to four passengers. Entrance tickets, boat rides and meals are paid on site.',
      ]}
      facts={[
        {
          icon: Timer,
          label: 'Shortest outing',
          value: `${shortest.shortName}, ${shortest.duration.replace('~', 'about ')}`,
        },
        { icon: Banknote, label: 'Lowest price', value: `From €${tourFromPrice} per car` },
        { icon: Landmark, label: 'UNESCO highlight', value: 'Ohrid old town and lake, about 170 km away' },
        { icon: Users, label: 'Group size', value: 'Up to 4 passengers per car' },
      ]}
    />
  )
}

export function ToursPriceTable() {
  return (
    <LandingPriceTable
      titleId="tours-table-title"
      title="Day Tour Prices from Skopje"
      description="Compare trip length and price side by side."
      caption="Private day tour prices from Skopje, per car"
      itemLabel="Tour"
      durationLabel="Duration"
      bookLabel="Book this tour"
      rows={byLength.map((tour) => ({
        key: tour.slug,
        title: tour.shortName,
        subtitle: tour.tag,
        href: `/tours/${tour.slug}`,
        bookHref: `/reserve?tour=${tour.slug}`,
        duration: tour.duration,
        minutes: tour.minutes,
        price: `from €${tour.price}`,
      }))}
      footnote="Prices are per car for up to 4 passengers. Entrance tickets, boat rides and meals are paid on site."
    />
  )
}

export function ToursSteps() {
  return (
    <LandingSteps
      titleId="tours-steps-title"
      title="From Your Hotel Door to the Sights in Four Steps"
      steps={[
        {
          icon: MessageSquareText,
          title: 'Pick your tour',
          text: 'Choose a trip, your date and how many of you are travelling.',
        },
        {
          icon: CalendarCheck,
          title: 'Get it confirmed',
          text: 'We reply with your price and reserve your car and driver.',
        },
        {
          icon: MapPin,
          title: 'Meet your driver',
          text: 'At your hotel or address in Skopje, at the hour you chose.',
        },
        {
          icon: Camera,
          title: 'Explore at your pace',
          text: 'Your driver waits at every stop and brings you back to your door.',
        },
      ]}
    />
  )
}

export function ToursBenefits() {
  return (
    <LandingBenefits
      titleId="tours-benefits-title"
      title="Built Around Your Day, Not a Group Schedule"
      benefits={[
        {
          icon: BadgeEuro,
          title: 'One price per car',
          text: 'The same for one passenger or four, and confirmed before you travel.',
        },
        {
          icon: Hourglass,
          title: 'Your own schedule',
          text: 'Stay longer where you like it and skip what you do not. The car is yours for the day.',
        },
        {
          icon: Users,
          title: 'Private, never shared',
          text: 'Only your group in the car. No strangers and no waiting for a bus to fill.',
        },
        {
          icon: Languages,
          title: 'English-speaking drivers',
          text: 'Local, professional drivers who know these roads and are easy to talk to.',
        },
        {
          icon: Baby,
          title: 'Free child seats',
          text: 'Travelling with little ones? Tell us their ages and the seats are ready.',
        },
        {
          icon: MapPinPlus,
          title: 'Custom routes welcome',
          text: 'Do not see your trip? Tell us where you want to go and we will plan it.',
        },
      ]}
    />
  )
}

export function ToursFaq() {
  return <LandingFaq id="tours-faq" title="Day Tour Questions, Answered" faqs={tourFaqs} />
}
