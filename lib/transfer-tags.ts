const tagStyles: Record<string, string> = {
  'Meet & greet': 'bg-amber-100 text-amber-900 ring-amber-300',
  'Most popular': 'bg-emerald-100 text-emerald-900 ring-emerald-300',
  'Border crossing': 'bg-sky-100 text-sky-900 ring-sky-300',
  Domestic: 'bg-violet-100 text-violet-900 ring-violet-300',
  'Ski resort': 'bg-cyan-100 text-cyan-900 ring-cyan-300',
}

export function getTransferTagStyle(tag: string) {
  return tagStyles[tag] ?? 'bg-slate-100 text-slate-800 ring-slate-300'
}
