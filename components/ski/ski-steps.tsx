import { CalendarCheck, MessageSquareText, MountainSnow, PlaneLanding } from 'lucide-react'

const steps = [
  {
    icon: MessageSquareText,
    title: 'Send your plan',
    text: 'Resort, date, flight number and how many skis or boards you are bringing.',
  },
  {
    icon: CalendarCheck,
    title: 'Get it confirmed',
    text: 'We reply with your fixed price and reserve your car. No prepayment.',
  },
  {
    icon: PlaneLanding,
    title: 'Meet your driver',
    text: 'At arrivals with a name sign, or at your door in Skopje, at the hour you chose.',
  },
  {
    icon: MountainSnow,
    title: 'Step out at the slopes',
    text: 'Dropped at your hotel, apartment or the lift station. Pay the driver on arrival.',
  },
]

export function SkiSteps() {
  return (
    <section aria-labelledby="ski-steps-title" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">How it works</p>
          <h2
            id="ski-steps-title"
            className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl"
          >
            From the Runway to the Piste in Four Steps
          </h2>
        </div>

        <div className="relative mt-14">
          <span
            data-reveal="grow"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 rounded-full bg-gold/30 lg:block"
            aria-hidden="true"
          />
          <ol data-reveal-stagger className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="group flex flex-col items-center text-center">
                <span className="relative grid size-14 place-items-center rounded-full bg-card text-gold shadow-lg shadow-primary/10 ring-1 ring-gold/30 transition duration-500 group-hover:-translate-y-1 group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
