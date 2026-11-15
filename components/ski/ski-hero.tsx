import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, CableCar, Check, ChevronRight, MessageCircle, Snowflake } from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { Snowfall } from '@/components/snowfall'
import { site } from '@/lib/site'
import { skiCountries, skiFromPrice, skiResortNames, skiSeason, skiTransfers } from '@/lib/ski-transfers'

const entrance = (order: number) => ({ '--i': order }) as CSSProperties

const included = ['Skopje Airport pickup', 'Room planned for ski gear', 'Tolls & border fees included', 'Up to 4 passengers']

export function SkiHero() {
  return (
    <section aria-labelledby="ski-title" className="relative isolate overflow-hidden">
      <div className="parallax-slow absolute inset-0 -z-20">
        <Image
          src="/images/ski-hero.webp"
          alt="Groomed ski pistes between snow-covered spruce trees on a sunny winter day"
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover object-[70%_center]"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/80 to-background/55 md:via-background/60 md:to-background/5"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
      <Snowfall className="-z-10" count={32} seed={21} />

      <div className="gondola-cable top-[14%] -z-10 hidden md:block" aria-hidden="true">
        <div className="gondola-rider">
          <span className="grid size-10 place-items-center rounded-xl bg-card/90 text-gold shadow-lg shadow-primary/20 ring-1 ring-gold/25">
            <CableCar className="size-5" />
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-14">
        <nav aria-label="Breadcrumb" className="rise-in" style={entrance(0)}>
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              Ski Transfers
            </li>
          </ol>
        </nav>

        <div className="mt-10 max-w-2xl md:mt-14">
          <p
            className="rise-in inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
            style={entrance(1)}
          >
            <Snowflake className="spin-slow size-3.5" aria-hidden="true" />
            Snowline · {skiSeason}
          </p>

          <h1
            id="ski-title"
            className="rise-in mt-6 text-balance font-serif text-4xl font-normal leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
            style={entrance(2)}
          >
            Ski Transfers from Skopje
            <span className="mt-1 block pb-1 italic text-gold-gradient">& Skopje Airport</span>
          </h1>

          <p
            className="rise-in mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85"
            style={entrance(3)}
          >
            Private, door-to-door rides to {skiTransfers.length} ski resorts in {skiCountries.length}{' '}
            countries: {skiResortNames}. One fixed price per car, from €{skiFromPrice}.
          </p>

          <ul className="rise-in mt-6 flex flex-wrap gap-2" style={entrance(4)}>
            {included.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm ring-1 ring-border"
              >
                <Check className="size-3.5 text-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="rise-in mt-8 flex flex-wrap items-center gap-3" style={entrance(5)}>
            <Link
              href="#routes"
              className="shine inline-flex h-12 items-center gap-2.5 rounded-lg bg-gold px-6 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              See routes & prices
              <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2.5 rounded-lg border border-border bg-card/90 px-5 text-base font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-gold/50"
            >
              <MessageCircle className="size-4 text-gold" aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <dl
          className="rise-in mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-xl shadow-primary/10 sm:grid-cols-4"
          style={entrance(6)}
        >
          <Stat label="Ski resorts">
            <CountUp value={skiTransfers.length} />
          </Stat>
          <Stat label="Countries">
            <CountUp value={skiCountries.length} />
          </Stat>
          <Stat label="Per car, from">
            <CountUp value={skiFromPrice} prefix="€" />
          </Stat>
          <Stat label="Pickups, any hour">24/7</Stat>
        </dl>
      </div>
    </section>
  )
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col-reverse gap-1 bg-card px-5 py-4">
      <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="font-serif text-3xl font-semibold text-foreground">{children}</dd>
    </div>
  )
}
