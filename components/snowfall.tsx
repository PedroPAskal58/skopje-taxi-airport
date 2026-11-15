import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type FlakeStyle = CSSProperties & Record<`--${string}`, string>

// Seeded so the server and the browser render identical flakes.
export function seededRandom(seed: number) {
  let state = seed
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296
  }
}

export function Snowfall({
  count = 36,
  seed = 7,
  className,
}: {
  count?: number
  seed?: number
  className?: string
}) {
  const random = seededRandom(seed)
  const flakes = Array.from({ length: count }, (_, id) => {
    const style: FlakeStyle = {
      '--x': `${(random() * 100).toFixed(2)}%`,
      '--s': `${(3 + random() * 6).toFixed(1)}px`,
      '--o': (0.6 + random() * 0.4).toFixed(2),
      '--d': `${(10 + random() * 11).toFixed(1)}s`,
      '--delay': `${(-random() * 20).toFixed(1)}s`,
      '--drift': `${((random() - 0.5) * 170).toFixed(0)}px`,
    }
    return { id, style }
  })

  return (
    <div className={cn('snowfall', className)} aria-hidden="true">
      {flakes.map((flake) => (
        <span key={flake.id} className="snowflake" style={flake.style} />
      ))}
    </div>
  )
}
