'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { Snowflake } from 'lucide-react'

export const BOOKING_SENT_EVENT = 'sat-booking-sent'

export function celebrateBooking() {
  window.dispatchEvent(new Event(BOOKING_SENT_EVENT))
}

const FLAKE_COUNT = 26
const VISIBLE_MS = 4400

type FlakeStyle = CSSProperties & Record<`--${string}`, string>

function createFlakes() {
  return Array.from({ length: FLAKE_COUNT }, (_, index) => {
    const style: FlakeStyle = {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 0.9}s`,
      animationDuration: `${2.6 + Math.random() * 1.4}s`,
      '--flake-drift': `${(Math.random() - 0.5) * 220}px`,
      '--flake-spin': `${(Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 300)}deg`,
      '--flake-size': `${18 + Math.random() * 18}px`,
    }
    return { id: index, style, tone: index % 3 }
  })
}

function SnowBurst() {
  const [flakes] = useState(createFlakes)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), VISIBLE_MS)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="snow-burst" aria-hidden="true">
      {flakes.map((flake) => (
        <span key={flake.id} className="snow-burst-flake" data-tone={flake.tone} style={flake.style}>
          <Snowflake className="size-full" strokeWidth={1.75} />
        </span>
      ))}
    </div>
  )
}

export function BookingCelebration() {
  const [burst, setBurst] = useState(0)

  useEffect(() => {
    const onSent = () => setBurst((count) => count + 1)
    window.addEventListener(BOOKING_SENT_EVENT, onSent)
    return () => window.removeEventListener(BOOKING_SENT_EVENT, onSent)
  }, [])

  return burst > 0 ? <SnowBurst key={burst} /> : null
}
