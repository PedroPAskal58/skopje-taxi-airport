import type { LucideIcon } from 'lucide-react'

type MarqueeItem = { key: string; name: string; detail: string }

const SECONDS_PER_ITEM = 5.5

function Track({ items, icon: Icon, hidden = false }: { items: MarqueeItem[]; icon: LucideIcon; hidden?: boolean }) {
  return (
    <ul
      className="marquee-track"
      aria-hidden={hidden || undefined}
      style={{ animationDuration: `${items.length * SECONDS_PER_ITEM}s` }}
    >
      {items.map((item) => (
        <li key={item.key} className="flex shrink-0 items-center gap-11">
          <span className="flex items-baseline gap-2.5">
            <span className="whitespace-nowrap font-serif text-xl font-semibold text-foreground">{item.name}</span>
            <span className="whitespace-nowrap text-sm text-muted-foreground">{item.detail}</span>
          </span>
          <Icon className="size-4 text-gold/60" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
}

export function LandingMarquee({ items, icon }: { items: MarqueeItem[]; icon: LucideIcon }) {
  return (
    <div className="border-y border-border bg-secondary/60 py-5">
      <div className="marquee">
        <Track items={items} icon={icon} />
        <Track items={items} icon={icon} hidden />
      </div>
    </div>
  )
}
