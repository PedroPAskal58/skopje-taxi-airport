import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'
import { taxiFigures } from '@/lib/why-us'

export function WhyUsHero() {
  return (
    <section aria-labelledby="why-us-title" className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:py-24 lg:flex-row lg:items-end lg:gap-16">
        <div className="lg:flex-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Why us</p>
          <h1
            id="why-us-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-5xl"
          >
            Why book a private transfer instead of a local taxi in Skopje
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            A local taxi in Skopje is cheap when the meter is running and the driver is honest. The trouble for
            visitors is every other ride: the driver who finds you in arrivals, the quote with no meter,
            the fare in denars you do not have yet. Here are the real numbers, and what you get with us
            instead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link href="/book">Get a fixed price</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <dl
          aria-label="Taxi and bus figures for Skopje"
          className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card lg:w-96 lg:shrink-0"
        >
          {taxiFigures.map((figure) => (
            <div key={figure.label} className="flex flex-col gap-1 px-5 py-4">
              <dt className="text-sm text-muted-foreground">{figure.label}</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">{figure.value}</dd>
              <dd className="text-xs leading-relaxed text-muted-foreground">{figure.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
