import type { LucideIcon } from 'lucide-react'

export function LandingIntro({
  titleId,
  eyebrow,
  title,
  paragraphs,
  facts,
}: {
  titleId: string
  eyebrow: string
  title: string
  paragraphs: string[]
  facts: { icon: LucideIcon; label: string; value: string }[]
}) {
  return (
    <section aria-labelledby={titleId} className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
        <div data-reveal="left">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{eyebrow}</p>
          <h2
            id={titleId}
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            {title}
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl
          data-reveal="right"
          className="self-start overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/10"
        >
          {facts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="group flex items-start gap-4 border-b border-border p-5 transition-colors last:border-b-0 hover:bg-secondary/60"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</dt>
                <dd className="mt-1 font-semibold leading-snug text-foreground">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
