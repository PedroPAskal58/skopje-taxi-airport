import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
=======
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
>>>>>>> 04edc908ff119e7df020a5e4dcd47874657cba5b
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
