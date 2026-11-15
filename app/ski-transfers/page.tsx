import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookingCta } from '@/components/booking-cta'
import { SkiHero } from '@/components/ski/ski-hero'
import { ResortMarquee } from '@/components/ski/resort-marquee'
import { SkiIntro } from '@/components/ski/ski-intro'
import { SkiRoutes } from '@/components/ski/ski-routes'
import { SkiPriceTable } from '@/components/ski/ski-price-table'
import { SkiSteps } from '@/components/ski/ski-steps'
import { SkiBenefits } from '@/components/ski/ski-benefits'
import { SkiFaq } from '@/components/ski/ski-faq'
import { site } from '@/lib/site'
import { skiCountries, skiFaqs, skiFromPrice, skiTransfers } from '@/lib/ski-transfers'

const PAGE_PATH = '/ski-transfers'
const title = 'Ski Transfers from Skopje Airport | Bansko, Kopaonik, Mavrovo'
const description = `Private ski transfers from Skopje Airport to Bansko, Kopaonik, Zlatibor, Jahorina, Brezovica, Mavrovo, Popova Šapka and Ponikva. Fixed price per car from €${skiFromPrice}.`
const heroImage = '/images/ski-hero.webp'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PAGE_PATH },
  keywords: [
    'ski transfer Skopje',
    'Skopje Airport ski transfer',
    'Skopje to Bansko transfer',
    'Skopje to Kopaonik transfer',
    'Skopje to Mavrovo transfer',
    'Skopje to Popova Šapka transfer',
    'Skopje to Popova Sapka taxi',
    'Skopje to Brezovica taxi',
    'Skopje to Zlatibor transfer',
    'Skopje to Jahorina transfer',
    'Skopje to Ponikva transfer',
    'winter transfers Skopje',
  ],
  openGraph: {
    title,
    description,
    url: PAGE_PATH,
    siteName: site.name,
    images: [{ url: heroImage, alt: 'Sunny ski pistes between snow-covered spruce trees' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [heroImage],
  },
}

const pageUrl = `${site.url}${PAGE_PATH}`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Ski Transfers', item: pageUrl },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Private ski transfers from Skopje and Skopje Airport',
      serviceType: 'Private ski resort transfer',
      description,
      url: pageUrl,
      image: `${site.url}${heroImage}`,
      areaServed: ['Skopje', 'Skopje International Airport', ...skiCountries],
      provider: {
        '@type': 'LocalBusiness',
        name: site.name,
        url: site.url,
        telephone: site.phoneHref.replace('tel:', ''),
        email: site.email,
        priceRange: '€€',
        address: { '@type': 'PostalAddress', addressLocality: 'Skopje', addressCountry: 'MK' },
        openingHours: 'Mo-Su 00:00-23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ski transfer routes from Skopje',
        itemListElement: skiTransfers.map((transfer) => ({
          '@type': 'Offer',
          name: `${transfer.from} to ${transfer.to} private ski transfer`,
          description: transfer.description,
          price: transfer.price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: `${site.url}/transfers/${transfer.slug}`,
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: skiFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

export default function SkiTransfersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main>
        <SkiHero />
        <ResortMarquee />
        <SkiIntro />
        <SkiRoutes />
        <SkiPriceTable />
        <SkiSteps />
        <SkiBenefits />
        <SkiFaq />
        <BookingCta />
      </main>
      <SiteFooter />
    </>
  )
}
