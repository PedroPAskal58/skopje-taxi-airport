import Link from 'next/link'
import { BusFront, Check } from 'lucide-react'
import { busOptions, busSums } from '@/lib/why-us'

export function BusSection() {
  return (
    <section aria-labelledby="bus-title" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">The bus</p>
          <h2
            id="bus-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            What about the bus?
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            The bus is the cheapest way to travel here, and we will not pretend otherwise. What you pay
            with is time, a fixed timetable and the last stretch to your door.
          </p>
        </div>

        <ul data-reveal-stagger className="mt-12 flex flex-col gap-6 lg:flex-row">
          {busOptions.map(({ icon: Icon, title, summary, facts, tradeoff }) => (
            <li key={title} className="flex flex-1 flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>

              <dl className="mt-5 flex flex-col divide-y divide-border border-y border-border">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-4">
                    <dt className="text-sm font-medium text-foreground sm:w-24 sm:shrink-0">{fact.label}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-xl bg-secondary p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">The catch</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{tradeoff}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-serif text-xl font-semibold text-foreground">Split between four people</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            A bus fare is per seat and our price is per car. The bus still costs less, but by less than
            it first appears.
          </p>

          <ul className="mt-5 flex flex-col divide-y divide-border border-t border-border">
            {busSums.map((row) => (
              <li key={row.label} className="flex flex-col gap-3 py-5 last:pb-0 lg:flex-row lg:gap-6">
                <h4 className="font-semibold text-foreground lg:w-44 lg:shrink-0 lg:pt-4">{row.label}</h4>
                <div className="flex flex-1 flex-col gap-3 sm:flex-row">
                  <div className="flex-1 rounded-xl bg-secondary p-4">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <BusFront className="size-4" aria-hidden="true" />
                      By bus
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{row.bus}</p>
                  </div>
                  <div className="flex-1 rounded-xl bg-gold/10 p-4 ring-1 ring-gold/30">
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
                      <Check className="size-4" aria-hidden="true" />
                      Booked with us
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">{row.us}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-pretty text-center text-sm leading-relaxed text-muted-foreground">
          Nothing else runs from the terminal. There is no train and no city bus, and{' '}
          <Link href="/uber-skopje" className="font-semibold text-foreground underline underline-offset-4">
            Uber and Bolt do not operate in North Macedonia
          </Link>
          . If you would rather drive yourself, the car rental desks are inside the terminal.
        </p>
      </div>
    </section>
  )
}
