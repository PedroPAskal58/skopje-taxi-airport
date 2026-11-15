import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'
import { comfortReasons, costReasons, whyUsFaqs } from '@/lib/why-us'
import { SiteHeader } from '@/components/site-header'
import { WhyUsHero } from '@/components/why-us/why-us-hero'
import { TaxiComparison } from '@/components/why-us/taxi-comparison'
import { TaxiReasons } from '@/components/why-us/taxi-reasons'
import { BusSection } from '@/components/why-us/bus-section'
import { TaxiFairNote } from '@/components/why-us/taxi-fair-note'
import { LandingFaq } from '@/components/landing/landing-faq'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = pageMetadata({
  title: 'Why Us – Private Transfer vs Local Taxi or Bus in Skopje',
  description:
    'Private transfer vs a local Skopje taxi or the airport bus: real fares, where visitors get overcharged, and what a fixed-price ride with us includes.',
  path: '/why-us',
  keywords: [
    'Skopje taxi prices',
    'local taxi Skopje',
    'Skopje airport taxi price',
    'taxi scams Skopje',
    'is taxi expensive in Skopje',
    'private transfer vs taxi Skopje',
    'Skopje airport bus',
    'Skopje airport shuttle bus price',
    'Skopje to Ohrid bus',
    'Skopje airport transfer fixed price',
  ],
})

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Why us', item: `${site.url}/why-us` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: whyUsFaqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
}

export default function WhyUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <WhyUsHero />
        <TaxiComparison />
        <TaxiReasons
          titleId="taxi-cost-title"
          eyebrow="The price"
          title="Where a local taxi gets expensive"
          intro="On the meter a local taxi in Skopje starts at 50 to 60 denars and adds 30 to 35 per kilometre, so a ride across town is a few euros. These are the ways visitors end up paying far more."
          reasons={costReasons}
        />
        <TaxiReasons
          titleId="taxi-comfort-title"
          eyebrow="The ride"
          title="Where a local taxi gets uncomfortable"
          intro="Price is only half of it. After a flight, these are the things that decide how the first hour of your trip feels."
          reasons={comfortReasons}
          tinted
        />
        <BusSection />
        <TaxiFairNote />
        <LandingFaq id="why-us-faq" title="Local taxi, bus or private transfer: common questions" faqs={whyUsFaqs} />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
