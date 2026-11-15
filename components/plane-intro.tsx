'use client'

import { useEffect } from 'react'
import { Plane } from 'lucide-react'

const INTRO_DURATION_MS = 3000

function SantaHat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M10 46 C14 26 26 10 44 8 C50 8 54 14 52 22 C48 18 44 18 42 22 C40 30 46 38 54 46 Z" fill="#d62828" />
      <path d="M44 8 C50 8 54 14 52 22 C50 18 46 16 42 18 C42 12 43 10 44 8 Z" fill="#a4161a" />
      <rect x="6" y="44" width="52" height="12" rx="6" fill="#ffffff" stroke="#e5eef8" strokeWidth="1.5" />
      <circle cx="53" cy="24" r="7" fill="#ffffff" stroke="#e5eef8" strokeWidth="1.5" />
    </svg>
  )
}

export function PlaneIntro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, INTRO_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <div
      className="plane-intro pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden="true"
    >
      {/* The curtain's bottom edge rides with the plane, so the page is revealed right behind it */}
      <div className="plane-sweep absolute inset-x-0 top-full h-0">
        <div className="plane-curtain absolute inset-x-0 bottom-0 h-[calc(100vh+20rem)]">
          <div className="plane-snow absolute inset-0" />
          <div className="plane-edge absolute inset-x-0 bottom-0 h-px" />
        </div>
        <div className="absolute left-[46%] top-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="relative">
            <Plane
              strokeWidth={1.25}
              className="size-40 -rotate-45 fill-gold text-gold drop-shadow-[0_20px_40px_rgb(30_45_80/0.3)] md:size-64"
            />
            <SantaHat className="absolute left-1/2 top-0 size-14 -translate-x-[45%] -translate-y-[55%] rotate-[18deg] drop-shadow-[0_6px_10px_rgb(30_45_80/0.25)] md:size-20" />
          </div>
          <div className="-mt-10 flex gap-10 md:-mt-16 md:gap-16">
            <span className="plane-trail block h-[45vh] w-1 md:w-1.5" />
            <span className="plane-trail block h-[45vh] w-1 md:w-1.5" />
          </div>
        </div>
      </div>
    </div>
  )
}
