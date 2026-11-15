import { Snowflake } from 'lucide-react'
import { skiTransfers } from '@/lib/ski-transfers'

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {skiTransfers.map((transfer) => (
        <li key={transfer.slug} className="flex shrink-0 items-center gap-11">
          <span className="flex items-baseline gap-2.5">
            <span className="font-serif text-xl font-semibold text-foreground">{transfer.to}</span>
            <span className="text-sm text-muted-foreground">
              {transfer.duration.replace('~', '')} · €{transfer.price}
            </span>
          </span>
          <Snowflake className="size-4 text-gold/60" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
}

export function ResortMarquee() {
  return (
    <div className="border-y border-border bg-secondary/60 py-5">
      <div className="marquee">
        <Track />
        <Track hidden />
      </div>
    </div>
  )
}
