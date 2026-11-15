import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SiteHeader } from '@/components/site-header'
import { RouteExplorer } from '@/components/route-explorer'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = pageMetadata({
  title: 'Transfer Routes from Skopje – Ohrid, Tirana, Sofia & More',
  description:
    'Explore private transfer routes from Skopje Airport and Skopje to Ohrid, Tirana, Sofia, Thessaloniki, Pristina and more, with fixed prices.',
  path: '/routes',
})

export default function RoutesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <RouteExplorer headingLevel="h1" />
      </main>
      <SiteFooter />
    </>
  )
}
