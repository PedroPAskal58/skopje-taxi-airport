// Turns labels like "~1h 30m", "20–30 min" or "10–12 hours" into minutes. Ranges use the upper bound.
export function durationMinutes(label: string) {
  const parts = Array.from(label.matchAll(/(\d+)(?:\s*[–-]\s*(\d+))?\s*(h|m)/gi))
  return parts.reduce(
    (total, [, first, last, unit]) => total + Number(last ?? first) * (unit.toLowerCase() === 'h' ? 60 : 1),
    0,
  )
}
