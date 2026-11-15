import type { TaxiReason } from '@/lib/why-us'

export function TaxiReasons({
  titleId,
  eyebrow,
  title,
  intro,
  reasons,
  tinted = false,
}: {
  titleId: string
  eyebrow: string
  title: string
  intro: string
  reasons: TaxiReason[]
  tinted?: boolean
}) {
  return (
    <section
      aria-labelledby={titleId}
      className={tinted ? 'border-y border-border bg-secondary/50' : 'bg-background'}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{eyebrow}</p>
          <h2
            id={titleId}
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <ul data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title: reasonTitle, text }) => (
            <li key={reasonTitle} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{reasonTitle}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
