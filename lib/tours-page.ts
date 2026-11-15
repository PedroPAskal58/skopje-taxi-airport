import { tourList, type TourSlug } from '@/lib/site'
import { durationMinutes } from '@/lib/duration'

// Full tour titles are too long for cards, the marquee and the price table.
export const tourShortNames: Record<TourSlug, string> = {
  matka: 'Vodno & Matka Canyon',
  stobi: 'Stobi & Heraclea',
  kokino: 'Kokino Observatory',
  ohrid: 'Ohrid Day Trip',
  'matka-village-panteleimon': 'Matka & Village Life',
  'matka-self-guided': 'Matka Canyon Self-Guided',
  'kosovo-pristina-prizren': 'Pristina & Prizren',
  'bigorski-mavrovo-naum': 'Bigorski, Mavrovo & St. Naum',
  'tetovo-ohrid-bitola': 'Tetovo, Ohrid & Bitola',
  'tetovo-ohrid-naum': 'Tetovo, Ohrid & St. Naum',
}

export const tourCards = tourList.map((tour) => ({
  ...tour,
  shortName: tourShortNames[tour.slug],
  minutes: durationMinutes(tour.duration),
}))

export const tourFromPrice = Math.min(...tourList.map((tour) => tour.price))

const priceList = tourCards.map((tour) => `${tour.shortName} €${tour.price}`).join(', ')

export const tourFaqs: { q: string; a: string }[] = [
  {
    q: 'How much is a private day tour from Skopje?',
    a: `Prices are per car for up to 4 passengers and start from: ${priceList}. Your price is confirmed when you book.`,
  },
  {
    q: 'Is a tour guide included?',
    a: 'No. Every tour is private driver transportation only. Your driver takes you to each stop, waits while you explore at your own pace and brings you back. Entrance tickets, boat rides and meals are paid on site.',
  },
  {
    q: 'Is the price per person or per car?',
    a: 'Per car. One price covers the whole vehicle for up to 4 passengers, whether you travel alone or fill every seat.',
  },
  {
    q: 'Where do the tours start?',
    a: 'Your driver picks you up at your hotel or any address in Skopje and drops you back there at the end of the day. If you need a different pickup point, tell us when you book.',
  },
  {
    q: 'Can we change the stops or plan our own route?',
    a: 'Yes. The car is yours for the day, so you can stay longer at one stop or skip another. If you do not see the trip you want, tell us where you would like to go and we will build a private tour for you.',
  },
  {
    q: 'Do we need passports?',
    a: 'Only for the Kosovo day trip to Pristina and Prizren, which crosses an international border. Bring a valid passport or ID card and check that your nationality can enter Kosovo. All other tours stay inside North Macedonia.',
  },
  {
    q: 'How do we pay?',
    a: 'You pay your driver in cash in euros, British pounds or US dollars, or in crypto. We do not take card payments.',
  },
  {
    q: 'Do you have child seats?',
    a: 'Yes. Child and baby seats are free of charge. Tell us the age of your child when you book.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'As soon as you know your dates, especially in summer and around holidays. Last-minute tours are often possible too, so message us and we will check availability.',
  },
  {
    q: 'Can we change or cancel a tour?',
    a: 'Yes. Message us on WhatsApp, Viber or by phone as early as possible and we will update or cancel your booking.',
  },
]
