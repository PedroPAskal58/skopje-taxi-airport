import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { site } from '@/lib/site'
import { relatedGuides, type Guide } from '@/lib/guides'
import { LandingFaq } from '@/components/landing/landing-faq'
import { GuideCard } from '@/components/guide-card'

export function GuideArticle({ guide }: { guide: Guide }) {
  const related = relatedGuides(guide)

  return (
    <article>
      <header className="relative isolate overflow-hidden">
        <Image src={guide.image} alt={guide.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/75 to-background/20" />
        <div className="mx-auto flex min-h-[420px] max-w-4xl flex-col justify-end px-6 pb-10 pt-28 md:min-h-[480px]">
          <Link
            href="/guides"
            className="mb-6 inline-flex items-center gap-1.5 self-start rounded-full bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> All travel guides
          </Link>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{guide.category}</p>
          <h1 className="mt-2 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">{guide.lede}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-4xl gap-10 px-6 pb-16 md:grid-cols-[1fr_280px]">
        <div className="min-w-0">
          <dl className="grid grid-cols-3 gap-3 rounded-2xl border border-border bg-card p-4">
            {guide.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col items-center gap-1 text-center">
                <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{fact.label}</dt>
                <dd className="text-sm font-semibold text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-8 rounded-2xl border border-gold/25 bg-gold/5 p-6">
            <h2 className="font-serif text-xl font-semibold text-foreground">{guide.summaryTitle}</h2>
            <ul className="mt-4 space-y-3">
              {guide.summary.map((point) => (
                <li key={point} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {guide.picks && (
            <section className="mt-10">
              <h2 className="text-balance font-serif text-2xl font-semibold text-foreground">{guide.picksTitle}</h2>
              <ol className="mt-5 space-y-4">
                {guide.picks.map((pick, index) => (
                  <li key={pick.title} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="grid size-10 shrink-0 place-items-center rounded-full bg-gold/10 text-sm font-semibold text-gold ring-1 ring-gold/30"
                      >
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-semibold leading-snug text-foreground">{pick.title}</h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">{pick.meta}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick.text}</p>
                        <Link
                          href={pick.href}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline underline-offset-4 transition hover:text-gold"
                        >
                          View this trip <ArrowRight className="size-4" aria-hidden="true" />
                          <span className="sr-only">: {pick.title}</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {guide.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-balance font-serif text-2xl font-semibold text-foreground">{section.heading}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.link && (
                <Link
                  href={section.link.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline underline-offset-4 transition hover:text-gold"
                >
                  {section.link.label} <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              )}
            </section>
          ))}
        </div>

        <aside className="md:sticky md:top-24 md:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Fixed price</p>
            <p className="mt-1 text-4xl font-semibold text-foreground">€{guide.cta.price}</p>
            <p className="text-sm text-muted-foreground">{guide.cta.priceNote}</p>
            <Link
              href={guide.cta.href}
              className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-sm transition hover:brightness-75"
            >
              {guide.cta.label} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={guide.cta.secondary.href}
              className="mt-3 flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              {guide.cta.secondary.label}
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center text-sm font-medium text-muted-foreground underline underline-offset-4 transition hover:text-foreground"
            >
              Ask on WhatsApp
            </a>
          </div>
        </aside>
      </div>

      <LandingFaq id="guide-faq" title="Frequently asked questions" faqs={guide.faqs} />

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="font-serif text-2xl font-semibold text-foreground">More travel guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((other) => (
              <GuideCard key={other.slug} guide={other} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
