import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import { ScrollReveal } from '@/components/scroll-reveal'
import { BookingCelebration } from '@/components/booking-celebration'
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
  title: 'Skopje Airport Taxi & Private Transfers €25 | 24/7 Fixed Price, Meet & Greet',
  description:
    'Book your Skopje Airport taxi online. Skopje to Ohrid €140, fixed prices to Skopje city center, Thessaloniki & Pristina. English-speaking drivers, flight tracking, 24/7.',
  applicationName: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Skopje Airport Taxi & Private Transfers €25 | 24/7 Fixed Price, Meet & Greet',
    description: 'Book your Skopje Airport taxi online. Skopje to Ohrid €140, fixed prices to Skopje city center, Thessaloniki & Pristina. English-speaking drivers, flight tracking, 24/7.',
    url: '/',
    siteName: site.name,
    images: [{ url: '/og-image.png', width: 1024, height: 1024 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  keywords: [
    'Skopje airport taxi',
    'Skopje airport transfer',
    'Macedonia airport transfer',
    'Skopje to Ohrid transfer',
    'Skopje Ohrid transfer',
    'Skopje to Ohrid taxi',
    'Skopje to Ohrid price',
    'Skopje Airport to Ohrid',
    'private transfer Skopje',
    'SKP taxi',
    'ski transfer Skopje',
    'Skopje to Bansko transfer',
    'Uber Skopje',
    'Bolt Skopje',
    'Uber Skopje airport',
    'Uber alternative Skopje',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f9fd',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`light bg-background ${manrope.variable} ${fraunces.variable}`}>
      <body className="antialiased font-sans">
        <div className="scroll-progress" aria-hidden="true" />
        {children}
        <ScrollReveal />
        <BookingCelebration />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
