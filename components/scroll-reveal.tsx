'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const AUTO_TARGETS = 'main section > *, main > section, footer > *'
// Opt-in targets animate even inside an already-revealing parent:
// data-reveal="left|right|zoom|grow" on one element, data-reveal-stagger on a grid to cascade its children.
const EXPLICIT_TARGETS = '[data-reveal], [data-reveal-stagger] > *'
const STAGGER_STEP_MS = 90
const REVEAL_SETTLE_MS = 1300

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pending: HTMLElement[] = []
    let ticking = false
    const timers: number[] = []

    // Only the vertical position matters: IntersectionObserver misses tall sections
    // and cards inside horizontal scrollers on mobile, leaving them invisible.
    const check = () => {
      ticking = false
      const trigger = window.innerHeight * 0.92
      // A short element at the very end of the page can never scroll above the trigger line,
      // so reaching the bottom reveals whatever is still pending.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      pending = pending.filter((el) => {
        if (!atBottom && el.getBoundingClientRect().top >= trigger) return true
        el.classList.remove('reveal-pending')
        el.classList.add('reveal-shown')
        // Drop the class once the entrance has played so it no longer overrides hover transitions.
        const delay = Number.parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0
        timers.push(window.setTimeout(() => el.classList.remove('reveal-shown'), REVEAL_SETTLE_MS + delay))
        return false
      })
      if (pending.length === 0) detach()
    }

    const schedule = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(check)
    }

    const detach = () => {
      document.removeEventListener('scroll', schedule, true)
      window.removeEventListener('resize', schedule)
    }

    const frame = requestAnimationFrame(() => {
      const seen = new Set<Element>()
      const register = (el: HTMLElement, explicit: boolean) => {
        if (seen.has(el)) return
        if (!explicit && el.closest('.reveal-pending, .reveal-shown')) return
        seen.add(el)
        // Content already on screen at load stays put so the page never flashes empty.
        if (el.getBoundingClientRect().top < window.innerHeight) return
        const index = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0
        const step = explicit && el.parentElement?.hasAttribute('data-reveal-stagger') ? index % 4 : Math.min(index, 4)
        el.style.setProperty('--reveal-delay', `${step * STAGGER_STEP_MS}ms`)
        el.classList.add('reveal-pending')
        pending.push(el)
      }

      document.querySelectorAll<HTMLElement>(EXPLICIT_TARGETS).forEach((el) => register(el, true))
      document.querySelectorAll<HTMLElement>(AUTO_TARGETS).forEach((el) => register(el, false))

      if (pending.length === 0) return
      document.addEventListener('scroll', schedule, { capture: true, passive: true })
      window.addEventListener('resize', schedule, { passive: true })
      check()
    })

    return () => {
      cancelAnimationFrame(frame)
      detach()
      timers.forEach((timer) => window.clearTimeout(timer))
      document
        .querySelectorAll('.reveal-pending, .reveal-shown')
        .forEach((el) => el.classList.remove('reveal-pending', 'reveal-shown'))
    }
  }, [pathname])

  return null
}
