import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { ArticleCard, GuideCard } from '@/components/guide-card'
import { getGuide } from '@/lib/guides'

const FEATURED_GUIDES = [
  'skopje-to-ohrid',
  'skopje-airport-to-city-centre',
  'skopje-to-pristina',
  'skopje-to-thessaloniki',
  'best-winter-day-trips-from-skopje',
]

const featuredGuides = FEATURED_GUIDES.flatMap((slug) => getGuide(slug) ?? [])

export function GuidesTeaser() {
  return (
    <section id="guides" aria-labelledby="guides-teaser-title" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-reveal="left" className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold">
              <BookOpen className="size-4" aria-hidden="true" />
              Plan your trip
            </p>
            <h2
              id="guides-teaser-title"
              className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
            >
              Travel Guides
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Straight answers before you travel: how far each destination is, how long the drive takes,
              what the ride costs and what to expect at the border.
            </p>
          </div>
          <Link
            href="/guides"
            data-reveal="right"
            className="shine inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-lg bg-gold px-6 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:brightness-110 md:self-auto"
          >
            All travel guides
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul data-reveal-stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} />
            </li>
          ))}
          <li>
            <ArticleCard
              href="/uber-skopje"
              image="/images/transfer-skopje.webp"
              alt="Stone Bridge over the Vardar river in Skopje with the fortress behind"
              category="Good to know"
              title="Uber in Skopje: is there Uber or Bolt?"
              meta="No Uber · No Bolt · Fixed-price rides 24/7"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
