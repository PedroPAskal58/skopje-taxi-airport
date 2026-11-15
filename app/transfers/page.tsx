import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/site-header'
import { Transfers } from '@/components/transfers'
import {
  TransfersBenefits,
  TransfersFaq,
  TransfersHero,
  TransfersIntro,
  TransfersMarquee,
  TransfersPriceTable,
  TransfersSteps,
  transfersHeroImage,
} from '@/components/transfers/transfers-landing'
import { BookingCta } from '@/components/booking-cta'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'
import { transferFaqs } from '@/lib/transfers-page'

const PAGE_PATH = '/transfers'

export const metadata: Metadata = pageMetadata({
  title: 'Skopje Airport Transfers & Prices – Skopje to Ohrid €140',
  description:
    'Fixed-price private transfers from Skopje Airport: Skopje city €30, Skopje to Ohrid €140, Pristina, Thessaloniki, Sofia and more. Price per car, 24/7.',
  path: PAGE_PATH,
  image: { url: transfersHeroImage, alt: 'Private transfer car waiting outside Skopje International Airport' },
})

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Transfers', item: `${site.url}${PAGE_PATH}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: transferFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

export default function TransfersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <TransfersHero />
        <TransfersMarquee />
        <TransfersIntro />
        <Transfers />
        <TransfersPriceTable />
        <TransfersSteps />
        <TransfersBenefits />
        <TransfersFaq />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
