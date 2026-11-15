import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Compass, MapPinPlus, Users } from 'lucide-react'
import { tourList } from '@/lib/site'
import { BookButton } from '@/components/book-button'

export function Tours() {
  return (
    <section id="tours" aria-labelledby="tours-title" className="scroll-mt-20 border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Tours & prices</p>
          <h2
            id="tours-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            Pick Your Day Out of Skopje
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Every price is per car for up to 4 passengers, with a private driver for the whole trip.
          </p>
        </div>

        <div data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tourList.map((tour) => (
            <article
              key={tour.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={tour.image || '/placeholder.svg'}
                  alt={tour.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  <Compass
                    className="size-3.5 text-gold transition-transform duration-700 group-hover:rotate-180"
                    aria-hidden="true"
                  />
                  {tour.tag}
                </span>
                <span className="absolute bottom-3 right-3 rounded-xl bg-gold px-3 py-1.5 text-right leading-tight text-gold-foreground shadow-lg shadow-primary/25">
                  <span className="block text-[10px] font-medium uppercase tracking-wide opacity-85">From</span>
                  <span className="block text-xl font-semibold">€{tour.price}</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-gold">
                  <Link href={`/tours/${tour.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {tour.title}
                  </Link>
                </h3>

                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <li className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-gold" aria-hidden="true" /> {tour.duration}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5 text-gold" aria-hidden="true" /> {tour.pax}
                  </li>
                </ul>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{tour.description}</p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <BookButton
                    href={`/reserve?tour=${tour.slug}`}
                    bookingKey={`tour:${tour.slug}`}
                    className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:gap-2.5 hover:brightness-110"
                  >
                    Book tour <ArrowRight className="size-4" aria-hidden="true" />
                  </BookButton>
                  <span className="text-sm font-semibold text-gold group-hover:underline" aria-hidden="true">
                    Tour details
                  </span>
                </div>
              </div>
            </article>
          ))}

          <Link
            href="/reserve?tour=custom"
            className="group flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-gold/40 bg-card/60 p-8 text-center transition hover:border-gold hover:bg-card"
          >
            <span className="grid size-14 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/20 transition duration-500 group-hover:scale-110 group-hover:bg-gold/25">
              <MapPinPlus className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Don&apos;t see your trip?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us where you&apos;d like to go and we&apos;ll build a private tour just for you, anywhere
                in Macedonia or beyond.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-2.5">
              Request a tour <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
