import { Banknote, Globe, MountainSnow, Timer } from 'lucide-react'
import { skiCountries, skiFromPrice, skiTransfers } from '@/lib/ski-transfers'

const closest = skiTransfers.reduce((best, transfer) =>
  transfer.driveMinutes < best.driveMinutes ? transfer : best,
)

const facts = [
  { icon: Timer, label: 'Closest slopes', value: `${closest.to}, ${closest.duration.replace('~', 'about ')}` },
  { icon: Banknote, label: 'Lowest fare', value: `€${skiFromPrice} per car, one way` },
  { icon: MountainSnow, label: 'Biggest ski area', value: 'Bansko, about 3h 30m' },
  { icon: Globe, label: 'Countries covered', value: skiCountries.join(', ') },
]

export function SkiIntro() {
  return (
    <section aria-labelledby="ski-intro-title" className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
        <div data-reveal="left">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Fly in, ski out</p>
          <h2
            id="ski-intro-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            Why Start Your Ski Trip in Skopje?
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Skopje International Airport (SKP) sits in the middle of the southern Balkans, with ski
              areas in five countries within a day&apos;s drive. Low-cost flights land here from across
              Europe, and from the arrivals hall it is a little over an hour to Popova Šapka, about
              90 minutes to Mavrovo, under two hours to Brezovica and around three and a half to
              Bansko.
            </p>
            <p>
              What Skopje does not have is a ski bus. Public transport to the resorts means changing
              at least once, often with a long wait, and carrying your gear between stations. A
              pre-booked private transfer takes you from the terminal, or from your hotel in the city,
              to the door of your accommodation in one go.
            </p>
            <p>
              Every price on this page is for the whole car, one way, for up to four passengers. Fuel,
              motorway tolls and border fees are included, so the number you see is the number you pay.
            </p>
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
