import type { LucideIcon } from 'lucide-react'

export function LandingBenefits({
  titleId,
  title,
  benefits,
}: {
  titleId: string
  title: string
  benefits: { icon: LucideIcon; title: string; text: string }[]
}) {
  return (
    <section aria-labelledby={titleId} className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Why ride with us</p>
          <h2
            id={titleId}
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            {title}
          </h2>
        </div>

        <ul data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title: benefitTitle, text }) => (
            <li
              key={benefitTitle}
              className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{benefitTitle}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
