import { taxiWins } from '@/lib/why-us'

export function TaxiFairNote() {
  return (
    <section aria-labelledby="taxi-wins-title" className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">To be fair</p>
        <h2
          id="taxi-wins-title"
          className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
        >
          When a local taxi or the bus is the better choice
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          We would sooner you trust this page than agree with all of it. In these cases you do not need us.
        </p>

        <ul className="mt-8 flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
          {taxiWins.map((item) => (
            <li key={item.title} className="px-5 py-5">
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Fares and figures were checked in November 2026 against the published Skopje Airport taxi fare,
          the Skopje city taxi tariff, the State Statistical Office vehicle data for 2024, the{' '}
          <a
            href="https://eraktransporter.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-foreground underline underline-offset-4"
          >
            Erak Transporter airport bus timetable
          </a>{' '}
          for winter 2026/27 and the{' '}
          <a
            href="https://en.wikivoyage.org/wiki/Skopje"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-foreground underline underline-offset-4"
          >
            Wikivoyage guide to Skopje
          </a>
          . Intercity bus fares are typical counter prices and vary by carrier. Taxi and bus fares
          change, so confirm the price on the day.
        </p>
      </div>
    </section>
  )
}
