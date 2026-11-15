import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { TransferDetail } from '@/components/transfer-detail'
import { allTransfers, getTransfer, site, type Transfer } from '@/lib/site'
import { isSkiTransfer } from '@/lib/ski-transfers'
import { fitDescription, fitTitle, pageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return allTransfers.map((transfer) => ({ slug: transfer.slug }))
}

function transferTitle(transfer: Transfer) {
  if (isSkiTransfer(transfer)) {
    return `${transfer.from} to ${transfer.to} Ski Transfer €${transfer.price} | Fixed Price per Car`
  }
  const base = `${transfer.from} to ${transfer.to} Transfer €${transfer.price} | Private Taxi`
  return fitTitle(`${base} ${transfer.from}–${transfer.to}`, base)
}

function transferSummary(transfer: Transfer) {
  return `${transfer.from} to ${transfer.to} private transfer for €${transfer.price} per car, not per person. ${transfer.distance}, ${transfer.duration} door to door.`
}

function transferDescription(transfer: Transfer) {
  return `${transferSummary(transfer)} ${transfer.description}`
}

function transferMetaDescription(transfer: Transfer) {
  const firstSentence = transfer.description.split(/(?<=[.!?])\s+/)[0]
  return fitDescription(transferSummary(transfer), firstSentence, 'English-speaking driver, 24/7.')
}

function transferKeywords(transfer: Transfer) {
  const from = transfer.from
  const to = transfer.to
  return [
    `${from} to ${to}`,
    `${from} ${to} transfer`,
    `${from} to ${to} transfer`,
    `${from} to ${to} taxi`,
    `${from} ${to} taxi price`,
    `${from}-${to} transfer`,
    `private transfer ${from} ${to}`,
    `how much is taxi from ${from} to ${to}`,
    `${to} to ${from} transfer`,
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const transfer = getTransfer(slug)
  if (!transfer) return {}
  return pageMetadata({
    title: transferTitle(transfer),
    description: transferMetaDescription(transfer),
    path: `/transfers/${transfer.slug}`,
    keywords: transferKeywords(transfer),
    image: { url: transfer.image, alt: transfer.alt },
  })
}

function transferJsonLd(transfer: Transfer) {
  const ski = isSkiTransfer(transfer)
  const url = `${site.url}/transfers/${transfer.slug}`
  const listing = ski
    ? { name: 'Ski Transfers', url: `${site.url}/ski-transfers` }
    : { name: 'Transfers', url: `${site.url}/transfers` }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: listing.name, item: listing.url },
          { '@type': 'ListItem', position: 3, name: `${transfer.from} to ${transfer.to}`, item: url },
        ],
      },
      {
        '@type': 'Service',
        name: `${transfer.from} to ${transfer.to} private ${ski ? 'ski ' : ''}transfer`,
        serviceType: ski ? 'Private ski resort transfer' : 'Private transfer',
        description: transferDescription(transfer),
        image: `${site.url}${transfer.image}`,
        url,
        areaServed: [transfer.from, transfer.to],
        provider: {
          '@type': 'LocalBusiness',
          name: site.name,
          url: site.url,
          telephone: site.phoneHref.replace('tel:', ''),
          email: site.email,
        },
        offers: {
          '@type': 'Offer',
          price: transfer.price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url,
        },
      },
    ],
  }
}

export default async function TransferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const transfer = getTransfer(slug)
  if (!transfer) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(transferJsonLd(transfer)).replace(/</g, '\\u003c'),
          }}
        />
        <TransferDetail transfer={transfer} />
      </main>
      <SiteFooter />
    </>
  )
}
