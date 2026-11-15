import {
  BadgeEuro,
  Banknote,
  CalendarCheck,
  Clock,
  DoorOpen,
  Globe,
  Luggage,
  MapPin,
  MessageSquareText,
  PlaneLanding,
  Route,
  ShieldCheck,
  Timer,
} from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { LandingHero } from '@/components/landing/landing-hero'
import { LandingMarquee } from '@/components/landing/landing-marquee'
import { LandingIntro } from '@/components/landing/landing-intro'
import { LandingPriceTable } from '@/components/landing/landing-price-table'
import { LandingSteps } from '@/components/landing/landing-steps'
import { LandingBenefits } from '@/components/landing/landing-benefits'
import { LandingFaq } from '@/components/landing/landing-faq'
import { transfers } from '@/lib/transfers'
import { transferCountries, transferFaqs, transferFromPrice, transferRows } from '@/lib/transfers-page'

export const transfersHeroImage = '/images/transfer-airport.webp'

const shortest = transferRows[0]
const longest = transferRows[transferRows.length - 1]

export function TransfersHero() {
  return (
    <LandingHero
      titleId="transfers-hero-title"
      image={{
        src: transfersHeroImage,
        alt: 'Black Ford Mondeo waiting outside the departures entrance of Skopje International Airport at dusk',
        position: '75% center',
      }}
      crumb="Transfers"
      eyebrow="Fixed prices · 24/7"
      eyebrowIcon={PlaneLanding}
      title="Private Transfers from Skopje"
      accent="& Skopje Airport"
      description={`Door-to-door rides on ${transferRows.length} routes in ${transferCountries.length} countries: Skopje city, Ohrid, Pristina, Thessaloniki, Sofia, Tirana, Belgrade and more. One fixed price per car, from €${transferFromPrice}.`}
      included={['Meet & greet at arrivals', 'Flight tracking', 'Fixed price per car', 'Up to 4 passengers']}
      cta={{ href: '#transfers', label: 'See routes & prices' }}
      stats={[
        { label: 'Routes', value: <CountUp value={transferRows.length} /> },
        { label: 'Countries', value: <CountUp value={transferCountries.length} /> },
        { label: 'Per car, from', value: <CountUp value={transferFromPrice} prefix="€" /> },
        { label: 'Pickups, any hour', value: '24/7' },
      ]}
    />
  )
}

export function TransfersMarquee() {
  return (
    <LandingMarquee
      icon={PlaneLanding}
      items={transfers
        .filter((transfer) => transfer.from.startsWith('Skopje'))
        .map((transfer) => ({
          key: transfer.slug,
          name: transfer.to,
          detail: `${transfer.duration.replace('~', '')} · €${transfer.price}`,
        }))}
    />
  )
}

export function TransfersIntro() {
  return (
    <LandingIntro
      titleId="transfers-intro-title"
      eyebrow="Land and go"
      title="Why Book a Private Transfer from Skopje?"
      paragraphs={[
        'Skopje International Airport (SKP) sits about 21 km east of the city centre, and there is no Uber or Bolt in North Macedonia. With a pre-booked private transfer your driver is already in the arrivals hall with a name sign when you walk out, and the fare was agreed before you flew.',
        'From Skopje the whole region is within reach by road: Ohrid in about two and a half hours, Pristina in an hour and a half, Thessaloniki in three and Sofia in three and a half. We drive door to door, so there are no bus stations, no changes and no carrying bags between them.',
        'Every price on this page is for the whole car, one way, for up to four passengers. It is confirmed when you book, with no meters and no extra charge for luggage, night rides or flight delays.',
      ]}
      facts={[
        {
          icon: Timer,
          label: 'Shortest ride',
          value: `${shortest.from} to ${shortest.to}, ${shortest.duration}`,
        },
        { icon: Banknote, label: 'Lowest fare', value: `€${transferFromPrice} per car, one way` },
        {
          icon: Route,
          label: 'Longest route',
          value: `${longest.from} to ${longest.to}, ${longest.duration.replace('~', 'about ')}`,
        },
        { icon: Globe, label: 'Countries covered', value: transferCountries.join(', ') },
      ]}
    />
  )
}

export function TransfersPriceTable() {
  return (
    <LandingPriceTable
      titleId="transfers-table-title"
      title="Skopje Transfer Prices"
      description="Compare distance, drive time and price side by side, from the shortest ride to the longest."
      caption="Private transfer prices from Skopje and Skopje Airport, per car, one way"
      itemLabel="Route"
      durationLabel="Drive time"
      bookLabel="Book this transfer"
      rows={transferRows.map((transfer) => ({
        key: transfer.slug,
        title: `${transfer.from} to ${transfer.to}`,
        subtitle: transfer.country,
        href: `/transfers/${transfer.slug}`,
        bookHref: `/reserve?transfer=${transfer.slug}`,
        distance: transfer.distance,
        duration: transfer.duration,
        minutes: transfer.minutes,
        price: `€${transfer.price}`,
      }))}
      footnote="Prices are one way, per car for up to 4 passengers, and confirmed when you book."
    />
  )
}

export function TransfersSteps() {
  return (
    <LandingSteps
      titleId="transfers-steps-title"
      title="From the Arrivals Hall to Your Door in Four Steps"
      steps={[
        {
          icon: MessageSquareText,
          title: 'Send your plan',
          text: 'Route, date, flight number and how many passengers and bags.',
        },
        {
          icon: CalendarCheck,
          title: 'Get it confirmed',
          text: 'We reply with your fixed price and reserve your car. No prepayment.',
        },
        {
          icon: PlaneLanding,
          title: 'Meet your driver',
          text: 'At arrivals with a name sign, or at your door, at the hour you chose.',
        },
        {
          icon: MapPin,
          title: 'Arrive at your door',
          text: 'Dropped at your hotel, apartment or any address. Pay the driver on arrival.',
        },
      ]}
    />
  )
}

export function TransfersBenefits() {
  return (
    <LandingBenefits
      titleId="transfers-benefits-title"
      title="Built for Travellers, Not for Timetables"
      benefits={[
        {
          icon: BadgeEuro,
          title: 'One fixed price per car',
          text: 'Confirmed when you book and the same for one passenger or four. No meters and no surprises.',
        },
        {
          icon: PlaneLanding,
          title: 'We follow your flight',
          text: 'Early or late, your driver is in the arrivals hall with a name sign. A delay never costs you extra.',
        },
        {
          icon: DoorOpen,
          title: 'Door to door',
          text: 'From the terminal or your hotel straight to your address, with no changes and no bus stations.',
        },
        {
          icon: ShieldCheck,
          title: 'Borders made simple',
          text: 'Your driver knows each crossing and tells you exactly which documents to keep at hand.',
        },
        {
          icon: Clock,
          title: 'Any hour, any day',
          text: 'Early flights, late landings and holidays included. English-speaking drivers, always.',
        },
        {
          icon: Luggage,
          title: 'Luggage and child seats included',
          text: 'Suitcases ride at no extra charge and child seats are free. Just tell us what you need.',
        },
      ]}
    />
  )
}

export function TransfersFaq() {
  return <LandingFaq id="transfers-faq" title="Transfer Questions, Answered" faqs={transferFaqs} />
}
