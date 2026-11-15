import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type TeaserItem = {
  key: string
  href: string
  image: string
  alt: string
  badge: string
  title: string
  duration: string
  price: string
}

export function TeaserSection({
  id,
  tinted = false,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  cta,
  items,
  more,
}: {
  id: string
  tinted?: boolean
  eyebrow: string
  eyebrowIcon: LucideIcon
  title: string
  description: string
  cta: { href: string; label: string }
  items: TeaserItem[]
  more: { href: string; icon: LucideIcon; title: string; label: string }
}) {
  const titleId = `${id}-teaser-title`
  const MoreIcon = more.icon

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn('scroll-mt-16', tinted ? 'border-y border-border bg-secondary/50' : 'bg-background')}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-reveal="left" className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold">
              <EyebrowIcon className="size-4" aria-hidden="true" />
              {eyebrow}
            </p>
            <h2
              id={titleId}
              className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">{description}</p>
          </div>
          <Link
            href={cta.href}
            data-reveal="right"
            className="shine inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-lg bg-gold px-6 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:brightness-110 md:self-auto"
          >
            {cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul data-reveal-stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl p-4 text-primary-foreground shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/20"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                  className="-z-20 object-cover transition duration-700 group-hover:scale-110"
                />
                <span
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {item.badge}
                </span>
                <span className="line-clamp-2 font-serif text-xl font-semibold leading-tight">{item.title}</span>
                <span className="mt-1 flex items-center justify-between gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-primary-foreground/85">
                    <Clock className="size-3.5" aria-hidden="true" /> {item.duration}
                  </span>
                  <span className="font-semibold">{item.price}</span>
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={more.href}
              className={cn(
                'group flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gold/40 p-5 text-center transition hover:border-gold hover:bg-card',
                tinted ? 'bg-card/60' : 'bg-secondary/50',
              )}
            >
              <span className="grid size-12 place-items-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/20 transition-transform duration-500 group-hover:scale-110">
                <MoreIcon className="size-6" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold text-foreground">{more.title}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-2.5">
                {more.label} <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
