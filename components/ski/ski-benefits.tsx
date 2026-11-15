import { BadgeEuro, Clock, Luggage, PlaneLanding, ShieldCheck, ThermometerSnowflake } from 'lucide-react'

const benefits = [
  {
    icon: BadgeEuro,
    title: 'One fixed price per car',
    text: 'Agreed before you travel and the same for one passenger or four. Fuel, tolls and border fees are inside it.',
  },
  {
    icon: PlaneLanding,
    title: 'Straight from Skopje Airport',
    text: 'We follow your flight and wait at arrivals with a name sign, so a delay never costs you the ride.',
  },
  {
    icon: Luggage,
    title: 'Space planned for your gear',
    text: 'Tell us about skis, boards and boot bags when you book and we set up the car around them.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Ready for winter roads',
    text: 'Winter tyres all season and drivers who take these mountain roads week in, week out.',
  },
  {
    icon: ShieldCheck,
    title: 'Borders made simple',
    text: 'Your driver knows each crossing and tells you exactly which documents to keep at hand.',
  },
  {
    icon: Clock,
    title: 'Any hour, any day',
    text: 'Early flights, late landings and holiday dates included. English-speaking drivers, always.',
  },
]

export function SkiBenefits() {
  return (
    <section aria-labelledby="ski-benefits-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Why ride with us</p>
          <h2
            id="ski-benefits-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            Built for Skiers, Not for Timetables
          </h2>
        </div>

        <ul data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
