import type { CSSProperties, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Check, ChevronRight, MessageCircle, type LucideIcon } from 'lucide-react'
import { site } from '@/lib/site'

const entrance = (order: number) => ({ '--i': order }) as CSSProperties

export function LandingHero({
  titleId,
  image,
  crumb,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  accent,
  description,
  included,
  cta,
  stats,
}: {
  titleId: string
  image: { src: string; alt: string; position?: string }
  crumb: string
  eyebrow: string
  eyebrowIcon: LucideIcon
  title: string
  accent: string
  description: string
  included: string[]
  cta: { href: string; label: string }
  stats: { label: string; value: ReactNode }[]
}) {
  return (
    <section aria-labelledby={titleId} className="relative isolate overflow-hidden">
      <div className="parallax-slow absolute inset-0 -z-20">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
          style={{ objectPosition: image.position ?? '70% center' }}
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
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-10 max-w-2xl md:mt-14">
          <p
            className="rise-in inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
            style={entrance(1)}
          >
            <EyebrowIcon className="size-3.5" aria-hidden="true" />
            {eyebrow}
          </p>

          <h1
            id={titleId}
            className="rise-in mt-6 text-balance font-serif text-4xl font-normal leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
            style={entrance(2)}
          >
            {title}
            <span className="mt-1 block pb-1 italic text-gold-gradient">{accent}</span>
          </h1>

          <p
            className="rise-in mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/85"
            style={entrance(3)}
          >
            {description}
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
              href={cta.href}
              className="shine inline-flex h-12 items-center gap-2.5 rounded-lg bg-gold px-6 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              {cta.label}
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
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1 bg-card px-5 py-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
