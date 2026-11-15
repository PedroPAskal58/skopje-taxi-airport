import { CarTaxiFront, Check } from 'lucide-react'
import { comparisonRows } from '@/lib/why-us'

export function TaxiComparison() {
  return (
    <section aria-labelledby="comparison-title" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Side by side</p>
          <h2
            id="comparison-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            A local taxi on arrival vs a ride booked with us
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            The same trip from Skopje Airport, compared point by point.
          </p>
        </div>

        <ul className="mt-10 flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
          {comparisonRows.map((row) => (
            <li key={row.label} className="flex flex-col gap-3 p-5 lg:flex-row lg:gap-6">
              <h3 className="font-semibold text-foreground lg:w-44 lg:shrink-0 lg:pt-4">{row.label}</h3>
              <div className="flex flex-1 flex-col gap-3 sm:flex-row">
                <div className="flex-1 rounded-xl bg-secondary p-4">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <CarTaxiFront className="size-4" aria-hidden="true" />
                    Local taxi
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{row.taxi}</p>
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
    </section>
  )
}
