import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'

export type PriceRow = {
  key: string
  title: string
  subtitle: string
  href: string
  bookHref: string
  distance?: string
  duration: string
  minutes: number
  price: string
}

function DurationBar({ minutes, longest }: { minutes: number; longest: number }) {
  return (
    <span className="block h-1.5 overflow-hidden rounded-full bg-secondary" aria-hidden="true">
      <span
        data-reveal="grow"
        className="block h-full rounded-full bg-gold"
        style={{ width: `${Math.max(4, Math.round((minutes / longest) * 100))}%` }}
      />
    </span>
  )
}

export function LandingPriceTable({
  titleId,
  title,
  description,
  caption,
  itemLabel,
  durationLabel,
  bookLabel,
  rows,
  footnote,
}: {
  titleId: string
  title: string
  description: string
  caption: string
  itemLabel: string
  durationLabel: string
  bookLabel: string
  rows: PriceRow[]
  footnote: string
}) {
  const longest = Math.max(...rows.map((row) => row.minutes))
  const showDistance = rows.some((row) => row.distance)

  return (
    <section aria-labelledby={titleId} className="bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">At a glance</p>
          <h2
            id={titleId}
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-muted-foreground">{description}</p>
        </div>

        {/* Phones: every row is full width, so nothing is cut off or needs sideways scrolling */}
        <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5 md:hidden">
          {rows.map((row) => (
            <li key={row.key} className="relative flex flex-col gap-3 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Link href={row.href} className="font-semibold text-foreground transition-colors hover:text-gold">
                    {row.title}
                  </Link>
                  <span className="block text-xs text-muted-foreground">{row.subtitle}</span>
                </div>
                <p className="shrink-0 text-right leading-tight">
                  <span className="block font-serif text-xl font-semibold text-foreground">{row.price}</span>
                  <span className="block text-xs text-muted-foreground">per car</span>
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <dl className="flex items-center justify-between gap-3 text-sm">
                  {row.distance && (
                    <div>
                      <dt className="sr-only">Distance</dt>
                      <dd className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="size-4 text-gold" aria-hidden="true" />
                        {row.distance}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="sr-only">{durationLabel}</dt>
                    <dd className="inline-flex items-center gap-1.5 font-medium text-foreground">
                      <Clock className="size-4 text-gold" aria-hidden="true" />
                      {row.duration}
                    </dd>
                  </div>
                </dl>
                <DurationBar minutes={row.minutes} longest={longest} />
              </div>

              <Link
                href={row.bookHref}
                aria-label={`Book ${row.title}`}
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-gold/40 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                {bookLabel} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        {/* `relative` keeps the screen-reader-only labels inside this scroll box instead of widening the page */}
        <div className="relative mt-10 hidden overflow-x-auto rounded-2xl border border-border bg-card shadow-xl shadow-primary/5 md:block">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="sr-only">{caption}</caption>
            <thead className="bg-secondary text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th scope="col" className="px-5 py-3.5 font-semibold">{itemLabel}</th>
                {showDistance && <th scope="col" className="px-5 py-3.5 font-semibold">Distance</th>}
                <th scope="col" className="w-[30%] px-5 py-3.5 font-semibold">{durationLabel}</th>
                <th scope="col" className="px-5 py-3.5 text-right font-semibold">Price per car</th>
                <th scope="col" className="px-5 py-3.5">
                  <span className="sr-only">Book</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.key} className="group transition-colors hover:bg-secondary/60">
                  <th scope="row" className="px-5 py-4 font-normal">
                    <Link href={row.href} className="font-semibold text-foreground transition-colors hover:text-gold">
                      {row.title}
                    </Link>
                    <span className="block text-xs text-muted-foreground">{row.subtitle}</span>
                  </th>
                  {showDistance && <td className="px-5 py-4 text-muted-foreground">{row.distance}</td>}
                  <td className="px-5 py-4">
                    <span className="mb-1.5 block font-medium text-foreground">{row.duration}</span>
                    <DurationBar minutes={row.minutes} longest={longest} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-serif text-xl font-semibold text-foreground">
                    {row.price}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href={row.bookHref}
                      aria-label={`Book ${row.title}`}
                      className="inline-flex items-center gap-1 rounded-full border border-gold/40 px-3.5 py-1.5 text-xs font-semibold text-gold transition-all hover:gap-2 hover:bg-gold hover:text-gold-foreground"
                    >
                      Book <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">{footnote}</p>
      </div>
    </section>
  )
}
