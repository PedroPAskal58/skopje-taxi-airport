import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import { PriceNoticeDialog } from '@/components/price-notice-dialog'
import { ScrollReveal } from '@/components/scroll-reveal'
import { LeafCelebration } from '@/components/leaf-celebration'
import { site } from '@/lib/site'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Skopje Airport Taxi & Transfers | Fixed Prices 24/7',
  description:
    'Book your Skopje Airport taxi online. Fixed prices to Skopje city center, Ohrid, Thessaloniki & Pristina. English-speaking drivers, flight tracking, 24/7.',
    metadataBase: new URL('https://www.skopjetaxiairport.com'),
  openGraph: {
    title: 'Skopje Airport Taxi & Transfers | Fixed Prices 24/7',
    description: 'Book your Skopje Airport taxi online. Fixed prices to Skopje city center, Ohrid, Thessaloniki & Pristina. English-speaking drivers, flight tracking, 24/7.',
    url: '/',
    siteName: 'Skopje Taxi Airport',
    images: [{ url: '/og-image-v2.png', width: 1024, height: 1024 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image-v2.png'],
  },
  keywords: [
    'Skopje airport taxi',
    'Skopje airport transfer',
    'Macedonia airport transfer',
    'Skopje to Ohrid transfer',
    'private transfer Skopje',
    'SKP taxi',
  ],
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b2a4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`light bg-background ${manrope.variable} ${fraunces.variable}`}>
      <body className="antialiased font-sans">
        {children}
        <PriceNoticeDialog />
        <ScrollReveal />
        <LeafCelebration />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
