import { seededRandom } from '@/components/snowfall'
import { cn } from '@/lib/utils'

const VIEW_HEIGHT = 36

// The back drift is taller and tinted, so the white drift in front reads as fresh snow on top of it.
const drifts = [
  { tone: 'back', seed: 11, lift: 0.02 },
  { tone: 'front', seed: 5, lift: 0.22 },
] as const

// Two outlines per drift keep the mounds a natural width on both phones and wide screens.
const outlines = [
  { width: 400, mounds: 8, className: 'md:hidden' },
  { width: 1100, mounds: 19, className: 'hidden md:block' },
] as const

function driftPath(width: number, mounds: number, seed: number, lift: number) {
  const random = seededRandom(seed)
  const points = Array.from({ length: mounds + 1 }, (_, index) => {
    const atEdge = index === 0 || index === mounds
    const y = atEdge ? VIEW_HEIGHT : VIEW_HEIGHT * (lift + random() * 0.5)
    return [(index / mounds) * width, y] as const
  })

  let path = `M0 ${VIEW_HEIGHT}`
  for (let index = 1; index < points.length - 1; index++) {
    const [x, y] = points[index]
    const [nextX, nextY] = points[index + 1]
    const isLast = index === points.length - 2
    const endX = isLast ? nextX : (x + nextX) / 2
    const endY = isLast ? nextY : (y + nextY) / 2
    path += ` Q${x.toFixed(1)} ${y.toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`
  }
  return `${path} Z`
}

/** Snow that slowly piles up on the top edge of the element it is placed in (the parent must be `relative`). */
export function SnowBuildup({ className }: { className?: string }) {
  return (
    <div className={cn('snow-buildup', className)} aria-hidden="true">
      {drifts.map((drift) =>
        outlines.map((outline) => (
          <svg
            key={`${drift.tone}-${outline.width}`}
            className={cn('snow-drift', `snow-drift-${drift.tone}`, outline.className)}
            viewBox={`0 0 ${outline.width} ${VIEW_HEIGHT}`}
            preserveAspectRatio="none"
            focusable="false"
          >
            <path d={driftPath(outline.width, outline.mounds, drift.seed + outline.mounds, drift.lift)} />
          </svg>
        )),
      )}
    </div>
  )
}
