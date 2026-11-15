import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  HeartHandshake,
  PlaneLanding,
  Snowflake,
  Star,
  TreePine,
} from 'lucide-react'
import { HeroSearch } from '@/components/hero-search'
import { Snowfall } from '@/components/snowfall'
import { SnowBuildup } from '@/components/snow-buildup'
import { site, tourList } from '@/lib/site'
import { allTransfers } from '@/lib/transfers'
import { countWord, skiFromPrice, skiSeason, skiTransfers } from '@/lib/ski-transfers'

const NAMED_RESORTS = 4

const promises = [
  { icon: BadgeCheck, title: 'One price. No surprises.', detail: 'Fixed fares, agreed in advance' },
  { icon: PlaneLanding, title: 'We follow your flight.', detail: "Early or late, we'll be there" },
  { icon: HeartHandshake, title: 'Local people. Real care.', detail: 'Friendly, English-speaking drivers' },
  { icon: Clock, title: 'Every hour. Every day.', detail: 'Here for you, around the clock' },
]

const entrance = (order: number) => ({ '--i': order }) as CSSProperties

export function Hero() {
  const transferOptions = allTransfers.map(({ slug, from, to, price }) => ({ slug, from, to, price }))
  const tourOptions = tourList.map(({ slug, title, price }) => ({ slug, title, price }))

  return (
    <section id="top" aria-labelledby="hero-title" className="relative bg-background text-foreground">
      <div className="relative isolate overflow-hidden">
        <div className="parallax-slow absolute inset-0 -z-20">
          <Image
            src="/images/hero-winter.webp"
            alt="Snow-covered stone church beside a frozen mountain lake under a clear winter sky"
            fill
            priority
            sizes="100vw"
            className="ken-burns object-cover object-[65%_center]"
          />
        </div>
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/80 to-background/55 md:via-background/55 md:to-background/0"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-background via-background/55 to-transparent"
          aria-hidden="true"
        />
        <Snowfall className="-z-10" count={30} />

        <p
          className="absolute right-5 top-16 hidden text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/75 [writing-mode:vertical-rl] lg:block"
          aria-hidden="true"
        >
          Less ordinary. More Macedonia.
        </p>

        <div className="mx-auto flex min-h-[calc(100svh-61px)] w-full max-w-6xl flex-col justify-center gap-10 px-6 pb-48 pt-16 md:pb-52 md:pt-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p
              className="rise-in flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/85"
              style={entrance(0)}
            >
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
              </span>
              {skiSeason} · Ski transfers now running
            </p>

            <h1
              id="hero-title"
              className="rise-in mt-6 font-serif text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
              style={entrance(1)}
            >
              <span className="block text-balance">Skopje Airport Taxi</span>
              <span className="mt-2 block pb-1 italic text-gold-gradient">& Private Transfers</span>
            </h1>

            <p
              className="rise-in mt-7 max-w-md text-pretty text-lg leading-relaxed text-foreground/85"
              style={entrance(2)}
            >
              Fixed-price taxi from Skopje International Airport (SKP) to the city center, Ohrid,
              Pristina, Thessaloniki and, this winter, the ski resorts. 24/7, English-speaking local
              drivers.
            </p>

            <div className="rise-in mt-8 flex flex-wrap items-center gap-x-5 gap-y-4" style={entrance(3)}>
              <Link
                href="/tours"
                className="shine inline-flex h-12 items-center gap-3 rounded-lg bg-gold px-6 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Explore our day tours
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/ski-transfers"
                className="group inline-flex h-12 items-center gap-2.5 rounded-lg border border-gold/40 bg-card/90 px-5 text-base font-semibold text-gold transition hover:-translate-y-0.5 hover:border-gold hover:bg-card"
              >
                <Snowflake
                  className="size-4 transition-transform duration-700 group-hover:rotate-180"
                  aria-hidden="true"
                />
                Ski transfers
              </Link>
              <Link
                href="#find-transfer"
                className="inline-flex items-center gap-2 border-b border-foreground/50 pb-1 text-sm font-medium transition hover:border-gold hover:text-gold"
              >
                Just need a ride?
                <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <Link
              href="/reviews"
              className="rise-in mt-7 inline-flex items-center gap-3 text-sm transition hover:text-gold"
              style={entrance(4)}
            >
              <span className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-star text-star" aria-hidden="true" />
                ))}
              </span>
              <span>
                <strong className="font-semibold">{site.rating}/5</strong> from {site.reviewCount} happy
                travellers
              </span>
            </Link>
          </div>

          <div className="rise-in flex max-w-sm flex-col gap-4 lg:items-end" style={entrance(5)}>
            <Link
              href="/ski-transfers"
              className="group flex flex-col gap-3 rounded-2xl border border-card bg-card/90 p-5 shadow-xl shadow-primary/15 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-card hover:shadow-2xl hover:shadow-primary/20"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                <Snowflake className="spin-slow size-3.5" aria-hidden="true" />
                New this winter
              </span>
              <span className="font-serif text-2xl font-semibold leading-tight">
                Skopje to the ski slopes
              </span>
              <span className="text-sm leading-relaxed text-foreground/80">
                Private rides from Skopje Airport to Mavrovo, Brezovica, Bansko, Kopaonik and{' '}
                {countWord(skiTransfers.length - NAMED_RESORTS)} more resorts. Room planned for your
                skis, one fixed price per car.
              </span>
              <span className="flex items-center justify-between gap-4 border-t border-foreground/15 pt-3 text-sm">
                <span className="text-foreground/75">
                  from <strong className="text-base text-foreground">€{skiFromPrice}</strong>
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-gold">
                  View ski routes
                  <ArrowUpRight
                    className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </Link>
            <p className="flex flex-col gap-0.5 text-sm lg:items-end lg:text-right">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <TreePine className="size-4 text-festive-green" aria-hidden="true" />
                Merry Christmas from Skopje
              </span>
              <span className="text-xs text-foreground/70">Fresh snow, clear plans, one fixed price.</span>
            </p>
          </div>
        </div>
      </div>

      <div id="find-transfer" className="relative z-10 mx-auto -mt-40 w-full max-w-6xl scroll-mt-24 px-6">
        <div className="relative">
          <HeroSearch transfers={transferOptions} tours={tourOptions} />
          <SnowBuildup />
        </div>
      </div>

      <ul className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {promises.map(({ icon: Icon, title, detail }) => (
          <li
            key={title}
            className="group flex items-start gap-3 border-border lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
          >
            <Icon
              className="mt-0.5 size-6 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
              aria-hidden="true"
            />
            <span className="flex flex-col gap-0.5">
              <span className="font-semibold">{title}</span>
              <span className="text-sm text-muted-foreground">{detail}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 md:pb-16">
        <div className="hidden max-w-3xl flex-col gap-3 text-base leading-relaxed text-foreground/80 md:flex">
          <p>
            Looking for a reliable taxi from Skopje Airport? We provide fixed-price private transfers
            from Skopje International Airport (SKP) to Skopje, Ohrid, hotels and destinations across
            North Macedonia. Your price is agreed in advance, with no hidden fees or surge pricing.
          </p>
          <p>
            Your English-speaking driver tracks your flight, meets you at arrivals with a name sign
            and takes you directly to your destination. Available 24/7, including late-night and
            early-morning arrivals, with comfortable vehicles for individuals, families and groups.
          </p>
          <p>
            Heading for the snow? This winter we also run{' '}
            <Link href="/ski-transfers" className="font-semibold text-gold underline-offset-4 hover:underline">
              private ski transfers from Skopje and Skopje Airport
            </Link>{' '}
            to Mavrovo, Brezovica, Bansko, Kopaonik and more.
          </p>
        </div>
        <p className="text-sm leading-relaxed text-foreground/80 md:hidden">
          Fixed-price transfers from Skopje Airport (SKP) across North Macedonia, plus{' '}
          <Link href="/ski-transfers" className="font-semibold text-gold underline-offset-4 hover:underline">
            winter ski transfers
          </Link>
          . Your driver tracks your flight and meets you at arrivals, 24/7.
        </p>
      </div>
    </section>
  )
}
