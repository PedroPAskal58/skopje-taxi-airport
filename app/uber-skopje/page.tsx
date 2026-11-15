import type { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'
import { getTransfer } from '@/lib/transfers'
import { SiteHeader } from '@/components/site-header'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = pageMetadata({
  title: 'Uber Skopje – Is There Uber or Bolt? Fixed-Price Taxi 24/7',
  description:
    'Uber Skopje: there is no Uber or Bolt in Skopje. Book a fixed-price private taxi from Skopje Airport on WhatsApp instead. English-speaking drivers, 24/7.',
  path: '/uber-skopje',
  keywords: [
    'Uber Skopje',
    'Bolt Skopje',
    'is there Uber in Skopje',
    'is there Bolt in Skopje',
    'Uber Macedonia',
    'Uber North Macedonia',
    'Bolt North Macedonia',
    'Uber Skopje airport',
    'ride app Skopje',
    'taxi app Skopje',
    'Uber alternative Skopje',
  ],
})

const questions = [
  {
    q: 'Is there Uber in Skopje?',
    a: 'No. Uber does not operate in Skopje or anywhere in North Macedonia, so you cannot order an Uber from Skopje Airport or the city center. The easiest alternative is to pre-book a private transfer with a fixed price.',
  },
  {
    q: 'Is there Bolt in Skopje?',
    a: 'No. Bolt is not available in Skopje either. Your options are a local taxi, or a private transfer booked in advance with a fixed price and a driver waiting for you at arrivals.',
  },
  {
    q: 'What is the best Uber alternative in Skopje?',
    a: `Book a private transfer with ${site.name}. You message us on WhatsApp or Viber, get a fixed price upfront, and an English-speaking driver meets you in arrivals with a name sign — just like an app ride, but booked before you land.`,
  },
  {
    q: 'How do I get a taxi from Skopje Airport without Uber?',
    a: 'Send us your flight number, arrival time, passengers and destination on WhatsApp, Viber or by phone. We confirm your fixed price right away and track your flight, so your driver is waiting even if you land early or late.',
  },
  {
    q: 'Can I pay like I would with Uber?',
    a: 'You pay the driver at the end of the ride in cash in Euros, British Pounds or US Dollars, or in crypto. The price is agreed before the trip, so there is no surge pricing and no meter.',
  },
]

const fares = [
  { slug: 'skopje-airport-city', label: 'Skopje Airport to Skopje city center' },
  { slug: 'skopje-airport-matka', label: 'Skopje Airport to Matka Canyon' },
  { slug: 'skopje-pristina', label: 'Skopje to Pristina' },
  { slug: 'skopje-ohrid', label: 'Skopje to Ohrid' },
  { slug: 'skopje-thessaloniki', label: 'Skopje to Thessaloniki' },
].flatMap((fare) => {
  const transfer = getTransfer(fare.slug)
  return transfer ? [{ ...fare, price: transfer.price }] : []
})

const steps = [
  {
    title: 'Send your trip',
    text: 'Message us your flight number or pickup time, passengers and destination on WhatsApp or Viber, or use the booking form.',
  },
  {
    title: 'Get a fixed price',
    text: 'We confirm the price per car before you travel. No meter, no surge pricing, no app to install.',
  },
  {
    title: 'Meet your driver',
    text: 'An English-speaking driver waits in arrivals with a name sign and tracks your flight if it is early or late.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Uber in Skopje', item: `${site.url}/uber-skopje` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: questions.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
}

export default function UberSkopjePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">Getting around Skopje</p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-5xl">
              Uber in Skopje: is there Uber or Bolt?
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Short answer: no. Neither Uber nor Bolt operates in Skopje or North Macedonia. The good news is
              that booking a private taxi here is just as easy — send us a message, get a fixed price, and
              your driver will be waiting when you land.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Book a fixed-price ride
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Message us on WhatsApp
              </a>
            </div>

            <h2 className="mt-14 font-serif text-2xl font-semibold text-foreground md:text-3xl">
              How to book a ride in Skopje without Uber
            </h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-border bg-card p-5">
                  <span className="grid size-8 place-items-center rounded-full bg-gold text-sm font-semibold text-gold-foreground">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 font-medium text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-14 font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Fixed taxi prices from Skopje Airport
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Prices are per car, not per person, and agreed before the trip.
            </p>
            <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
              {fares.map((fare) => (
                <li key={fare.slug}>
                  <Link
                    href={`/transfers/${fare.slug}`}
                    className="flex items-center justify-between gap-4 px-5 py-4 text-sm transition hover:bg-muted"
                  >
                    <span className="font-medium text-foreground">{fare.label}</span>
                    <span className="shrink-0 font-semibold text-gold">€{fare.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Going somewhere else?{' '}
              <Link href="/transfers" className="font-semibold text-foreground underline underline-offset-4">
                See all transfers
              </Link>{' '}
              or{' '}
              <Link href="/tours" className="font-semibold text-foreground underline underline-offset-4">
                private day tours
              </Link>
              .
            </p>

            <h2 className="mt-14 font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Uber and Bolt in Skopje: common questions
            </h2>
            <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
              {questions.map((item) => (
                <div key={item.q} className="px-5 py-5">
                  <h3 className="font-medium text-foreground">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {site.name} is an independent local transfer company and is not affiliated with Uber or Bolt.
            </p>
          </div>
        </section>
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
