import { Plus } from 'lucide-react'
import { skiFaqs } from '@/lib/ski-transfers'

export function SkiFaq() {
  return (
    <section id="ski-faq" aria-labelledby="ski-faq-title" className="scroll-mt-20 border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Good to know</p>
          <h2
            id="ski-faq-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            Ski Transfer Questions, Answered
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
          {skiFaqs.map((faq) => (
            <details
              key={faq.q}
              className="group px-5 transition-colors open:bg-secondary/40 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium text-foreground transition-colors hover:text-gold">
                <h3 className="text-base font-medium">{faq.q}</h3>
                <Plus
                  className="size-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
