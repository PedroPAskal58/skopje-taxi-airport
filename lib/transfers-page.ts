import { transfers, type Transfer } from '@/lib/transfers'
import { durationMinutes } from '@/lib/duration'

const HOME_COUNTRY = 'North Macedonia'

const destinationCountries: Record<string, string> = {
  'skopje-pristina': 'Kosovo',
  'skopje-ferizaj': 'Kosovo',
  'skopje-sofia': 'Bulgaria',
  'skopje-thessaloniki': 'Greece',
  'skopje-athens': 'Greece',
  'skopje-tirana': 'Albania',
  'skopje-belgrade': 'Serbia',
  'skopje-nis': 'Serbia',
  'skopje-podgorica': 'Montenegro',
}

export function transferCountry(transfer: Pick<Transfer, 'slug'>) {
  return destinationCountries[transfer.slug] ?? HOME_COUNTRY
}

export const transferRows = transfers
  .map((transfer) => ({
    ...transfer,
    country: transferCountry(transfer),
    minutes: durationMinutes(transfer.duration),
  }))
  .sort((a, b) => a.minutes - b.minutes)

export const transferCountries = Array.from(new Set(transfers.map(transferCountry)))

export const transferFromPrice = Math.min(...transfers.map((transfer) => transfer.price))

const priceList = transfers
  .filter((transfer) => transfer.from.startsWith('Skopje'))
  .map((transfer) => `${transfer.to} €${transfer.price}`)
  .join(', ')

export const transferFaqs: { q: string; a: string }[] = [
  {
    q: 'How much is a private transfer from Skopje?',
    a: `Prices are per car, one way, for up to 4 passengers: ${priceList}. Your price is confirmed when you book, with no meters and no extra charge for luggage, night rides or flight delays.`,
  },
  {
    q: 'Where will the driver meet me at Skopje Airport?',
    a: 'Your driver waits in the arrivals hall holding a sign with your name. We follow your flight, so the driver is there when you land even if the flight is early or delayed.',
  },
  {
    q: 'Is the price per person or per car?',
    a: 'Per car. One price covers the whole vehicle for up to 4 passengers, whether you travel alone or fill every seat.',
  },
  {
    q: 'What happens if my flight is delayed?',
    a: 'Nothing changes for you. We track your flight and move the pickup to your actual landing time at no extra cost.',
  },
  {
    q: 'Is there Uber or Bolt in Skopje?',
    a: 'No. Uber and Bolt do not operate in Skopje or anywhere in North Macedonia. A pre-booked private transfer gives you a fixed price upfront and a driver waiting when you land.',
  },
  {
    q: 'What documents do I need for cross-border routes?',
    a: 'Every passenger needs a valid passport for routes into Kosovo, Bulgaria, Greece, Albania, Serbia and Montenegro. Check the visa rules for your nationality before you travel. Routes inside North Macedonia cross no border.',
  },
  {
    q: 'How do I pay?',
    a: 'There is no prepayment. You pay your driver in cash in euros, British pounds or US dollars, or in crypto. We do not take card payments.',
  },
  {
    q: 'Can I book a return transfer?',
    a: 'Yes. A return is booked as a second one-way transfer for any date and time you like. Book both together to keep things simple.',
  },
  {
    q: 'Are you available at night and on holidays?',
    a: 'Yes. We run 24/7, every day of the year, including late-night and early-morning flights.',
  },
  {
    q: 'Do you have child seats and room for luggage?',
    a: 'Child and baby seats are free, just tell us the age of your child. Standard suitcases and carry-ons are always included. If you have a lot of luggage, skis or a bike, tell us when you book and we will send a vehicle with enough space.',
  },
]
