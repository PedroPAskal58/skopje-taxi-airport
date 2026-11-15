import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftRight, ArrowRight, Clock, MapPin, MapPinPlus, Snowflake } from 'lucide-react'
import { BookButton } from '@/components/book-button'
import { skiResortCountWord, skiTransfers } from '@/lib/ski-transfers'

const resortCount = `${skiResortCountWord.charAt(0).toUpperCase()}${skiResortCountWord.slice(1)}`

export function SkiRoutes() {
  return (
    <section id="routes" aria-labelledby="ski-routes-title" className="scroll-mt-20 border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Routes & prices</p>
          <h2
            id="ski-routes-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            {resortCount} Ski Resorts, One Fixed Price Each
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Listed from the shortest drive to the longest. Every price is per car, one way, from Skopje
            or Skopje Airport.
          </p>
        </div>

        <div data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skiTransfers.map((transfer) => (
            <article
              key={transfer.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={transfer.image}
                  alt={transfer.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  <Snowflake
                    className="size-3.5 text-gold transition-transform duration-700 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                  {transfer.country}
                </span>
                <span className="absolute bottom-3 right-3 rounded-xl bg-gold px-3 py-1.5 text-right leading-tight text-gold-foreground shadow-lg shadow-primary/25">
                  <span className="block text-xl font-semibold">€{transfer.price}</span>
                  <span className="block text-[10px] font-medium uppercase tracking-wide opacity-85">per car</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-gold">
                  <Link
                    href={`/transfers/${transfer.slug}`}
                    className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 after:absolute after:inset-0 after:content-['']"
                  >
                    {transfer.from}
                    <ArrowLeftRight className="size-4 shrink-0 text-gold" aria-hidden="true" />
                    {transfer.to}
                  </Link>
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {transfer.resort} · {transfer.bestFor}
                </p>

                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <li className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-gold" aria-hidden="true" /> {transfer.distance}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-gold" aria-hidden="true" /> {transfer.duration}
                  </li>
                </ul>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {transfer.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <BookButton
                    href={`/reserve?transfer=${transfer.slug}`}
                    bookingKey={`transfer:${transfer.slug}`}
                    className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:gap-2.5 hover:brightness-110"
                  >
                    Book transfer <ArrowRight className="size-4" aria-hidden="true" />
                  </BookButton>
                  <span className="text-sm font-semibold text-gold group-hover:underline" aria-hidden="true">
                    Route details
                  </span>
                </div>
              </div>
            </article>
          ))}

          <Link
            href="/reserve?transfer=custom"
            className="group flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-gold/40 bg-card/60 p-8 text-center transition hover:border-gold hover:bg-card"
          >
            <span className="grid size-14 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/20 transition duration-500 group-hover:scale-110 group-hover:bg-gold/25">
              <MapPinPlus className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Skiing somewhere else?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Borovets, Pamporovo or another mountain. Tell us the resort and we&apos;ll send a
                fixed price.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-2.5">
              Request a quote <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
