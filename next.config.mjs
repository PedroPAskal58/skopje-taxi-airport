/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['pg', 'drizzle-orm'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/tours/autumn-mavrovo', destination: '/tours', permanent: true },
      { source: '/tours/autumn-kratovo-kuklica', destination: '/tours', permanent: true },
      { source: '/winter-transfers', destination: '/ski-transfers', permanent: true },
    ]
  },
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    ] }]
  },
}

export default nextConfig
