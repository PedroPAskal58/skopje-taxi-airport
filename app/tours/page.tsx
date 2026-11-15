import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/site-header'
import { Tours } from '@/components/tours'
import {
  ToursBenefits,
  ToursFaq,
  ToursHero,
  ToursIntro,
  ToursMarquee,
  ToursPriceTable,
  ToursSteps,
  toursHeroImage,
} from '@/components/tours/tours-landing'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'
import { tourFaqs } from '@/lib/tours-page'

const PAGE_PATH = '/tours'

export const metadata: Metadata = pageMetadata({
  title: 'Private Day Tours from Skopje – Ohrid, Matka Canyon & Kosovo',
  description:
    'Private day tours from Skopje to Ohrid, Matka Canyon, Stobi, wineries and more. Professional driver, flexible schedule, fixed price per car.',
  path: PAGE_PATH,
  image: { url: toursHeroImage, alt: 'Private car on a lakeside road in North Macedonia at sunset' },
})

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Tours', item: `${site.url}${PAGE_PATH}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: tourFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

export default function ToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <ToursHero />
        <ToursMarquee />
        <ToursIntro />
        <Tours />
        <ToursPriceTable />
        <ToursSteps />
        <ToursBenefits />
        <ToursFaq />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
