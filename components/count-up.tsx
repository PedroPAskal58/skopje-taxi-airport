'use client'

import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 1400

export function CountUp({
  value,
  prefix = '',
  suffix = '',
}: {
  value: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  // Starts at the final value so the number is correct without JavaScript and for crawlers.
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / DURATION_MS)
          const eased = 1 - Math.pow(1 - progress, 3)
          setShown(Math.round(value * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}
