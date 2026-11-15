import { getTransfer, tours, type TourSlug, type Transfer } from '@/lib/site'
import { fitTitle } from '@/lib/seo'
import { isSkiTransfer, skiFromPrice, skiResortCountWord } from '@/lib/ski-transfers'

export const GUIDES_PUBLISHED = '2026-11-14'

export type GuideLink = { href: string; label: string }

export type GuideSection = {
  heading: string
  paragraphs: string[]
  link?: GuideLink
}

export type GuidePick = {
  title: string
  text: string
  meta: string
  href: string
}

export type Guide = {
  slug: string
  category: string
  title: string
  metaTitle: string
  description: string
  lede: string
  image: string
  alt: string
  keywords: string[]
  facts: { label: string; value: string }[]
  summaryTitle: string
  summary: string[]
  sections: GuideSection[]
  picksTitle?: string
  picks?: GuidePick[]
  faqs: { q: string; a: string }[]
  cta: { href: string; label: string; price: number; priceNote: string; secondary: GuideLink }
  transferSlug?: string
}

type RouteExtras = {
  transferSlug: string
  slug: string
  lede: string
  road: string
  alternatives: string
  border?: string[]
  arrival: string
  faqs: { q: string; a: string }[]
}

const routeExtras: RouteExtras[] = [
  {
    transferSlug: 'skopje-airport-city',
    slug: 'skopje-airport-to-city-centre',
    lede: 'Everything you need for the short ride from the terminal into town: how far it is, what a taxi costs and how to have a driver waiting when you land.',
    road: 'The airport lies east of the city and the whole ride is on the highway, so the journey time stays predictable outside rush hour.',
    alternatives:
      'An airport shuttle bus runs to the city on a timetable linked to flights, and it stops at fixed points rather than at your hotel. There is no Uber or Bolt in Skopje, so the door-to-door options are a taxi from the rank or a transfer booked before you fly.',
    arrival:
      'Your driver takes you to the door of your hotel or apartment anywhere in Skopje. Staying near the Old Bazaar or the Stone Bridge? Some streets there are pedestrian, so the driver stops at the closest point a car can reach and helps with your bags.',
    faqs: [
      {
        q: 'What happens if my flight is delayed?',
        a: 'Send us your flight number when you book. We track the flight and adjust the pickup automatically, and 60 minutes of free waiting after landing is included.',
      },
      {
        q: 'Where do I meet the driver at Skopje Airport?',
        a: 'Inside the arrivals hall, just past the exit doors. Your driver holds a sign with your name on it.',
      },
      {
        q: 'Is there Uber at Skopje Airport?',
        a: 'No. Uber and Bolt do not operate in Skopje or anywhere in North Macedonia, so a pre-booked transfer is the closest thing to an app ride.',
      },
    ],
  },
  {
    transferSlug: 'skopje-pristina',
    slug: 'skopje-to-pristina',
    lede: 'The two capitals are closer than most travellers expect. Here is the distance, the taxi price, the border you cross and what to have ready on the day.',
    road: 'You drive north out of Skopje to the Blace border post, then follow the highway through southern Kosovo straight to the capital.',
    alternatives:
      'Buses run between the Skopje and Pristina bus stations on a fixed timetable, so you need to get yourself to the station first and from the station at the other end. That works if your times are flexible; it is less convenient with luggage, a flight to catch or a late arrival.',
    border: [
      'The crossing is at Blace on the Macedonian side and Hani i Elezit on the Kosovo side, about half an hour after leaving Skopje. You stay in the car while documents are checked at both posts.',
      'Carry a valid passport, or a national ID card if Kosovo accepts one for your nationality. Queues are usually short on weekdays and longer on holidays and summer weekends, so allow extra time if you are flying out of Pristina Airport.',
    ],
    arrival:
      'We drop you at any address in Pristina, including hotels around Mother Teresa Boulevard and Pristina Airport. If you would rather see the city and come back the same day, our Kosovo day trip combines Pristina with the old town of Prizren.',
    faqs: [
      {
        q: 'Do I need a passport to travel from Skopje to Pristina?',
        a: 'Yes, you cross an international border. Bring a valid passport, or a national ID card if Kosovo accepts one for your nationality.',
      },
      {
        q: 'Can you drop me at Pristina Airport?',
        a: 'Yes. Drop-off anywhere in Pristina is included, and that covers Pristina Airport. Tell us your departure time so we can plan the pickup around the border.',
      },
      {
        q: 'Can I book a return trip from Pristina to Skopje?',
        a: 'Yes. Return trips can be booked for the same day or any later date.',
      },
    ],
  },
  {
    transferSlug: 'skopje-ferizaj',
    slug: 'skopje-to-ferizaj',
    lede: 'Ferizaj is the first large town across the Kosovo border, about an hour from Skopje. This guide covers the distance, the fare and the crossing.',
    road: 'The route goes north to the Blace border post and continues a short way along the Kosovo highway to Ferizaj.',
    alternatives:
      'Buses heading from Skopje toward Pristina pass through this part of Kosovo, but they follow a timetable and leave you at a station rather than at your address. For a trip this short, most of the bus journey is spent getting to and from the stations.',
    border: [
      'You cross at Blace, around half an hour from Skopje, and stay in the car while documents are checked.',
      'Bring a valid passport or a national ID card that Kosovo accepts for your nationality.',
    ],
    arrival:
      'We take you to any address in Ferizaj or the surrounding area. Continuing to Pristina or Prizren afterwards? Ask us and we will quote the onward leg at a fixed price too.',
    faqs: [
      {
        q: 'Which border crossing is used between Skopje and Ferizaj?',
        a: 'The Blace crossing, the main border post between North Macedonia and Kosovo.',
      },
      {
        q: 'What documents do I need for Kosovo?',
        a: 'A valid passport, or a national ID card if Kosovo accepts one for your nationality.',
      },
    ],
  },
  {
    transferSlug: 'skopje-ohrid',
    slug: 'skopje-to-ohrid',
    lede: 'Lake Ohrid is the trip almost every visitor to North Macedonia makes. Here is how far it is from Skopje, what the ride costs and how to plan the day.',
    road: 'The road heads west past Tetovo and Gostivar, climbs over forested mountains near Kichevo and drops down to the lake. There is no border and no ferry, just one scenic drive.',
    alternatives:
      'Buses link the Skopje bus station with Ohrid on a fixed timetable and stop outside the old town, so you still need a local taxi at each end. A private car goes hotel to hotel and can stop for photos on the mountain pass.',
    arrival:
      'We drop you at your hotel in Ohrid, or continue to Struga or St. Naum on request. If you only have one day, our Ohrid day trip includes the drive both ways with free time in the old town and at the Church of St. John at Kaneo.',
    faqs: [
      {
        q: 'Can I visit Ohrid from Skopje in one day?',
        a: 'Yes. It is a long but comfortable day by private car, about 2h 30m each way. Our Ohrid day trip is priced for the return journey with waiting time included.',
      },
      {
        q: 'When should I book the Skopje to Ohrid transfer?',
        a: 'As early as you can for July and August, when the lake is busiest. Outside summer, a day or two ahead is usually enough.',
      },
      {
        q: 'Is the road from Skopje to Ohrid winding?',
        a: 'The first half follows the valley; the second half crosses the mountains and has curves. Tell your driver if you would like a break along the way.',
      },
    ],
  },
  {
    transferSlug: 'ohrid-skopje',
    slug: 'ohrid-to-skopje',
    lede: 'Heading back from the lake to the capital or straight to your flight? This is the distance, the fare and how to time the pickup.',
    road: 'From the lake the road climbs through the mountains to Kichevo, then follows the valley past Gostivar and Tetovo before joining the highway into Skopje.',
    alternatives:
      'Buses leave the Ohrid bus station for Skopje on a fixed timetable. With a suitcase and a flight to catch that means a taxi to the station in Ohrid and another from the Skopje station to the airport. A private car does the whole journey in one go.',
    arrival:
      'We take you to any address in Skopje or directly to Skopje Airport. For flights, tell us the departure time and we will set the pickup so you arrive with time to spare.',
    faqs: [
      {
        q: 'Can you take me from Ohrid directly to Skopje Airport?',
        a: 'Yes. Drop-off at Skopje Airport is included, and we plan the pickup time around your flight.',
      },
      {
        q: 'Do you pick up from Struga or St. Naum?',
        a: 'Yes. We collect from hotels in Ohrid, Struga and St. Naum.',
      },
    ],
  },
  {
    transferSlug: 'skopje-bitola',
    slug: 'skopje-to-bitola',
    lede: 'Bitola is the elegant second city in the south. Here is the distance from Skopje, the taxi price and what to see when you get there.',
    road: 'You follow the highway south and then cross the hills into the Pelagonia valley, with Mount Pelister rising behind the city as you arrive. The whole route stays inside North Macedonia.',
    alternatives:
      'Buses and a slow train connect the two cities on fixed timetables. A private car is the direct option: no changes, a coffee stop when you want one, and drop-off at your address rather than at the station.',
    arrival:
      'We drop you anywhere in Bitola. Shirok Sokak, the pedestrian main street, is the place for coffee, and the ruins of Heraclea Lyncestis are just outside town. Bitola is also a good base for Pelister National Park and Prespa Lake.',
    faqs: [
      {
        q: 'Is there a border between Skopje and Bitola?',
        a: 'No. The route stays inside North Macedonia, so your usual ID is all you need.',
      },
      {
        q: 'Can we stop at Heraclea Lyncestis on the way?',
        a: 'Yes. You can combine the ride with a visit to Heraclea for a small extra fee. Mention it when you book.',
      },
    ],
  },
  {
    transferSlug: 'skopje-sofia',
    slug: 'skopje-to-sofia',
    lede: 'Skopje and Sofia are neighbours, but public transport between them is limited. This guide covers the road, the border and the fixed taxi price.',
    road: 'The road runs northeast through Kumanovo and Kriva Palanka, crosses into Bulgaria at Deve Bair and descends past Kyustendil to Sofia.',
    alternatives:
      'There is no direct train, and buses between the two capitals are limited and follow a fixed timetable. If you are connecting to a flight at Sofia Airport, a private car removes the risk of a missed connection.',
    border: [
      'The crossing is Deve Bair, in the mountains past Kriva Palanka. You stay in the car while documents are checked on both sides.',
      'Bulgaria is in the European Union, so check the entry rules for your nationality before you travel. If you have a flight, allow extra time for the border and for traffic in Sofia.',
    ],
    arrival:
      'Drop-off is at any address in Sofia or at the Sofia Airport terminals. Pickups from Sofia back to Skopje can be booked the same way.',
    faqs: [
      {
        q: 'Which border crossing is used between Skopje and Sofia?',
        a: 'Deve Bair, the main crossing between North Macedonia and Bulgaria on this route.',
      },
      {
        q: 'Can you drop me at Sofia Airport?',
        a: 'Yes. Drop-off at Sofia Airport or any address in the city is included in the price.',
      },
      {
        q: 'Can you pick me up in Sofia and drive me to Skopje?',
        a: 'Yes. Pickups from Sofia back to Skopje are available. Send us your date and address for confirmation.',
      },
    ],
  },
  {
    transferSlug: 'skopje-thessaloniki',
    slug: 'skopje-to-thessaloniki',
    lede: 'From the Vardar valley to the Aegean in about three hours. Here is the distance, the taxi price, the border and tips for catching a flight.',
    road: 'The highway follows the Vardar river south past Veles and Gevgelija, crosses into Greece at Bogorodica and continues straight down to the coast.',
    alternatives:
      'Buses run between Skopje and Thessaloniki on a fixed timetable, and rail service across this border is limited. Travellers flying out of Thessaloniki Airport or heading on to Halkidiki usually prefer a car that leaves when they need it.',
    border: [
      'You cross at Bogorodica on the Macedonian side and Evzoni on the Greek side. Documents are checked at both posts while you stay in the car.',
      'Greece is in the Schengen area, so check the entry rules for your passport. Summer weekends bring longer queues, so leave extra time if you have a flight.',
    ],
    arrival:
      'We drop you at Thessaloniki Airport, the port or any address in the city. Onward rides to Halkidiki and other Greek destinations are available on request at a fixed price.',
    faqs: [
      {
        q: 'How long does the border take between Skopje and Thessaloniki?',
        a: 'Outside peak times it is usually a short stop. On summer weekends the queues can be longer, so leave extra time if you are catching a flight.',
      },
      {
        q: 'Can you drop me at Thessaloniki Airport?',
        a: 'Yes. Drop-off at Thessaloniki Airport or anywhere in the city is included.',
      },
      {
        q: 'Do you drive to Halkidiki?',
        a: 'Yes. Ask us for a fixed price to Halkidiki or other destinations in northern Greece.',
      },
    ],
  },
  {
    transferSlug: 'skopje-athens',
    slug: 'skopje-to-athens',
    lede: 'A full-day drive to the Greek capital in one private car. This guide covers the distance, the fare and how the journey is paced.',
    road: 'You drive south to the Greek border at Bogorodica and continue along the Greek motorway past Thessaloniki, Larissa and Lamia to Athens.',
    alternatives:
      'Going by bus or train usually means travelling to Thessaloniki first and changing there, which turns the trip into a very long day with luggage. A private car goes door to door with breaks whenever you want them.',
    border: [
      'The border is at Bogorodica and Evzoni, a little under two hours after leaving Skopje. You stay in the car while documents are checked.',
      'Greece is in the Schengen area, so check the entry rules for your passport before you travel.',
    ],
    arrival:
      'We drop you at any address in Athens, at the airport or at the port of Piraeus on request. Greek motorway tolls are already included in the price.',
    faqs: [
      {
        q: 'Are motorway tolls included in the Skopje to Athens price?',
        a: 'Yes. Greek motorway tolls are included in the fixed price.',
      },
      {
        q: 'Do we stop on the way to Athens?',
        a: 'Yes. It is a full-day journey, so rest and meal stops are part of the plan and you can ask for more at any time.',
      },
    ],
  },
  {
    transferSlug: 'skopje-tirana',
    slug: 'skopje-to-tirana',
    lede: 'One of the most scenic drives in the Balkans, from Skopje across the mountains to the Albanian capital. Here is what to expect on the way.',
    road: 'The road goes west past Tetovo and Gostivar, crosses into Albania near Lake Ohrid and winds down through the mountains past Elbasan to Tirana.',
    alternatives:
      'Buses between Skopje and Tirana are infrequent and take considerably longer than a car. A private transfer lets you break the journey by Lake Ohrid or in Elbasan and arrive at your door.',
    border: [
      'You cross into Albania near Lake Ohrid. It is a short passport check and you stay in the car.',
      'Bring a valid passport or an ID card accepted by Albania. The mountain sections are winding, so tell us in advance if you get car sick and the driver will take it gently.',
    ],
    arrival:
      'Drop-off is at any address in Tirana or at Tirana Airport. We can also continue to Durres or the Albanian coast on request.',
    faqs: [
      {
        q: 'Can we stop at Lake Ohrid on the way to Tirana?',
        a: 'Yes. A stop by Lake Ohrid or in Elbasan is possible on request. Mention it when you book.',
      },
      {
        q: 'Can you drop me at Tirana Airport?',
        a: 'Yes. Drop-off at Tirana Airport or any address in the city is included.',
      },
    ],
  },
  {
    transferSlug: 'skopje-belgrade',
    slug: 'skopje-to-belgrade',
    lede: 'Our longest regular route, almost entirely on motorway. This guide covers the distance, the fare, the border and how the day is paced.',
    road: 'You head north through Kumanovo, cross into Serbia at Tabanovce and follow the motorway past Niš all the way to Belgrade.',
    alternatives:
      'Buses connect the two capitals on a fixed timetable, including overnight services. A private car takes the same motorway but leaves when you choose, stops when you want and ends at your address rather than the bus station.',
    border: [
      'The crossing is Tabanovce, about 40 minutes after leaving Skopje. You stay in the car while documents are checked on both sides.',
      'Bring a valid passport or an ID card accepted by Serbia for your nationality.',
    ],
    arrival:
      'We drop you anywhere in Belgrade or at the airport. Motorway tolls are included in the price, and return trips from Belgrade to Skopje can be booked the same way.',
    faqs: [
      {
        q: 'Are motorway tolls included in the Skopje to Belgrade price?',
        a: 'Yes. Motorway tolls are already included in the fixed price.',
      },
      {
        q: 'Can we stop in Niš for a meal?',
        a: 'Yes. Let us know and the driver will plan a proper meal stop in Niš.',
      },
    ],
  },
  {
    transferSlug: 'skopje-nis',
    slug: 'skopje-to-nis',
    lede: 'Niš is the main city of southern Serbia and home to a busy low-cost airport. Here is how to get there from Skopje by car.',
    road: 'The route goes north through Kumanovo, crosses the border at Tabanovce and stays on the Serbian motorway to Niš.',
    alternatives:
      'Buses run from Skopje toward Niš on a fixed timetable. If you are flying from Niš Airport, a private car lets you set the departure around your flight instead of around the bus.',
    border: [
      'You cross at Tabanovce, about 40 minutes from Skopje, and stay in the car during the checks.',
      'Bring a valid passport or an ID card accepted by Serbia, and allow extra time at the border if you have a flight to catch.',
    ],
    arrival:
      'Drop-off is at any address in Niš or at Niš Airport. Travelling on to Belgrade later? We can quote that leg as well.',
    faqs: [
      {
        q: 'Can you drop me at Niš Airport?',
        a: 'Yes. Tell us your flight time and we will plan the pickup with a margin for the border.',
      },
      {
        q: 'Which border crossing is used between Skopje and Niš?',
        a: 'Tabanovce, the main motorway crossing between North Macedonia and Serbia.',
      },
    ],
  },
  {
    transferSlug: 'skopje-podgorica',
    slug: 'skopje-to-podgorica',
    lede: 'There is no simple direct public transport between Skopje and Podgorica, so most travellers go by car. Here is the route, the fare and the borders.',
    road: 'The route crosses Kosovo first and then climbs through the mountains into Montenegro, one of the most dramatic drives in the region.',
    alternatives:
      'Without a simple direct bus or train, public transport means several connections and a very long day. A private car covers the whole route in one go, with the same driver handling every crossing.',
    border: [
      'You cross two borders: into Kosovo at Blace, then from Kosovo into Montenegro. You stay in the car at each one.',
      'A passport is recommended for this route. The mountain roads are winding, so tell us in advance if you get car sick.',
    ],
    arrival:
      'We drop you at any address in Podgorica or at Podgorica Airport, and can continue to Budva or the coast on request.',
    faqs: [
      {
        q: 'How many borders are there between Skopje and Podgorica?',
        a: 'Two. The route enters Kosovo first and then Montenegro, so bring a valid passport.',
      },
      {
        q: 'Can you continue to Budva or the Montenegrin coast?',
        a: 'Yes. Ask us for a fixed price to Budva or other places on the coast.',
      },
    ],
  },
  {
    transferSlug: 'skopje-airport-matka',
    slug: 'skopje-airport-to-matka-canyon',
    lede: 'Go straight from your flight to the green water of Matka Canyon. Here is the distance from the airport, the fare and what to expect on arrival.',
    road: 'From the terminal the driver takes the ring road around Skopje and heads southwest into the canyon, so you skip the city centre traffic.',
    alternatives:
      'There is no direct public transport from the airport to Matka. The alternative is a shuttle or taxi into Skopje followed by a city bus or a second taxi out to the canyon.',
    arrival:
      'You are dropped as close to the lake as the road allows: by the dam, the boat pier or your accommodation. Boats and kayaks can be hired at the lake, and comfortable shoes help on the canyon paths.',
    faqs: [
      {
        q: 'What happens if my flight is delayed?',
        a: 'We track your flight and adjust the pickup automatically. 60 minutes of free waiting after landing is included.',
      },
      {
        q: 'Can you pick me up from Matka afterwards?',
        a: 'Yes. Return pickups from Matka can be booked too. If you want the driver to wait while you explore, look at our Matka day trips instead.',
      },
    ],
  },
]

function routeGuide(extras: RouteExtras): Guide | undefined {
  const transfer = getTransfer(extras.transferSlug)
  if (!transfer) return undefined

  const { from, to, price, distance, duration } = transfer
  const perPerson = Math.round(price / 4)
  const fromAirport = from === 'Skopje Airport'
  const pickup = fromAirport
    ? 'Your driver meets you in the arrivals hall with a name sign'
    : from === 'Skopje'
      ? 'Pickup from any address in Skopje or from Skopje Airport'
      : `Pickup from your hotel or address in ${from}`

  const sections: GuideSection[] = [
    {
      heading: `How far is ${to} from ${from}?`,
      paragraphs: [
        `${from} to ${to} is ${distance} by road, and the drive takes ${duration} door to door in normal traffic.`,
        extras.road,
      ],
    },
    {
      heading: `How much is a taxi from ${from} to ${to}?`,
      paragraphs: [
        `A private transfer costs €${price} one way for the whole car, with room for up to 4 passengers. Shared between four people that is about €${perPerson} each.`,
        'The price is agreed before you travel, so there is no meter and no surge pricing. You pay the driver at the end of the ride in cash (Euros, British Pounds or US Dollars) or in crypto.',
      ],
      link: { href: `/transfers/${transfer.slug}`, label: `See the ${from} to ${to} transfer` },
    },
    {
      heading: 'Private car or public transport?',
      paragraphs: [
        extras.alternatives,
        'Timetables change with the season, so check them with the station before relying on a connection.',
      ],
    },
    ...(extras.border ? [{ heading: 'Crossing the border', paragraphs: extras.border }] : []),
    {
      heading: `Arriving in ${to}`,
      paragraphs: [extras.arrival],
    },
    {
      heading: 'How to book',
      paragraphs: [
        fromAirport
          ? 'Send us your flight number, arrival time, number of passengers and destination through the booking form, WhatsApp or Viber. We confirm your fixed price and track the flight, so your driver is there whether you land early or late.'
          : 'Send us your date, pickup time, number of passengers and addresses through the booking form, WhatsApp or Viber. We confirm your fixed price and driver, and we are available 24/7.',
      ],
    },
  ]

  const faqs = [
    {
      q: `How far is ${to} from ${from}?`,
      a: `${from} to ${to} is ${distance} by road.`,
    },
    {
      q: `How long does it take to get from ${from} to ${to}?`,
      a: `About ${duration.replace('~', '')} by private car, door to door${extras.border ? ', plus any waiting time at the border' : ''}.`,
    },
    {
      q: `How much does a taxi from ${from} to ${to} cost?`,
      a: `€${price} one way with us. The price is fixed and agreed before you travel.`,
    },
    {
      q: 'Is the price per person or per car?',
      a: `Per car. €${price} covers up to 4 passengers, which is about €${perPerson} each when four travel together.`,
    },
    ...extras.faqs,
  ]

  return {
    slug: extras.slug,
    category: 'Route guide',
    title: `How to get from ${from} to ${to}`,
    metaTitle: fitTitle(
      `How to Get from ${from} to ${to} | Taxi €${price}, Time & Tips`,
      `${from} to ${to}: How to Get There, Taxi €${price}`,
      `${from} to ${to}: Taxi €${price} & Travel Time`,
    ),
    description: `${from} to ${to} is ${distance} and takes ${duration} by car. A private taxi costs €${price} per car, not per person. Route, ${extras.border ? 'border' : 'pickup'} and booking tips.`,
    lede: extras.lede,
    image: transfer.image,
    alt: transfer.alt,
    keywords: [
      `${from} to ${to}`,
      `how to get from ${from} to ${to}`,
      `${from} to ${to} taxi`,
      `${from} to ${to} distance`,
      `${from} to ${to} bus or taxi`,
      `${from} ${to} taxi price`,
      `${from} to ${to} by car`,
    ],
    facts: [
      { label: 'Distance', value: distance },
      { label: 'Travel time', value: duration },
      { label: 'Taxi price', value: `€${price} per car` },
    ],
    summaryTitle: 'In short',
    summary: [
      `${from} to ${to} is ${distance} and takes ${duration} by car.`,
      `A private taxi costs €${price} for the whole car, up to 4 passengers.`,
      `${pickup}.`,
      extras.border
        ? 'You cross an international border, so bring your passport or an accepted ID.'
        : 'No border crossing on this route.',
    ],
    sections,
    faqs,
    cta: {
      href: `/reserve?transfer=${transfer.slug}`,
      label: 'Book this transfer',
      price,
      priceNote: 'per car, one way',
      secondary: { href: `/transfers/${transfer.slug}`, label: 'Transfer details' },
    },
    transferSlug: transfer.slug,
  }
}

function tourPick(slug: keyof typeof tours, title: string, text: string): GuidePick {
  const tour = tours[slug]
  return {
    title,
    text,
    meta: `${tour.duration} · €${tour.price} per car`,
    href: `/tours/${tour.slug}`,
  }
}

function transferPick(slug: string, title: string, text: string): GuidePick[] {
  const transfer = getTransfer(slug)
  if (!transfer) return []
  return [
    {
      title,
      text,
      meta: `${transfer.duration} each way · €${transfer.price} per car, one way`,
      href: `/transfers/${transfer.slug}`,
    },
  ]
}

const dayTripFaqsShared = [
  {
    q: 'Are the day trips private?',
    a: 'Yes. The car is only for your group, up to 4 passengers, and the price is per car rather than per person.',
  },
  {
    q: 'Is a tour guide included?',
    a: 'No. These are private driver trips: your driver takes you between the stops and waits while you explore at your own pace. Entrance fees, boat rides and lunch are paid on site.',
  },
]

const topicalGuides: Guide[] = [
  {
    slug: 'best-winter-day-trips-from-skopje',
    category: 'Seasonal guide',
    title: 'Best winter day trips from Skopje',
    metaTitle: 'Best Winter Day Trips from Skopje | Private Driver, Fixed Price',
    description:
      'Six winter day trips from Skopje by private car: Matka Canyon, Mavrovo snow, Ohrid without the crowds, Kosovo, Stobi and Heraclea. Fixed prices per car.',
    lede: 'Cold months are a quiet, good-value time to see North Macedonia. These are the trips that work best from December to February, all door to door in a warm car.',
    image: '/images/hero-winter.webp',
    alt: 'Stone church beside a frozen lake with snow-covered mountains behind',
    keywords: [
      'winter day trips from Skopje',
      'best day trips from Skopje in winter',
      'Skopje in winter',
      'things to do in Skopje in winter',
      'Skopje winter tours',
      'Mavrovo day trip from Skopje',
      'Ohrid in winter',
    ],
    facts: [
      { label: 'Season', value: 'Dec – Feb' },
      { label: 'Trips from', value: `€${tours['matka-self-guided'].price} per car` },
      { label: 'Group size', value: 'Up to 4' },
    ],
    summaryTitle: 'In short: our winter picks',
    summary: [
      'Matka Canyon, a short half-day close to the city',
      'Mavrovo, for snow, skiing and the half-submerged church',
      'Ohrid, the UNESCO lake town at its calmest',
      'Pristina and Prizren, two Kosovo cities in one day',
      'Stobi and Heraclea, ancient sites with hardly another visitor',
    ],
    sections: [
      {
        heading: 'Why winter works for day trips from Skopje',
        paragraphs: [
          'From December to February the well-known sights are close to empty and the pace is slower. Old towns, monasteries and archaeological sites that are busy in July can feel like they are yours alone.',
          'A private car takes the weather out of the equation. You are picked up at your door in Skopje, the car is heated, and the driver adjusts timing and stops to the conditions on the day. None of the trips below needs hiking gear.',
        ],
      },
      {
        heading: 'Practical tips for a winter trip',
        paragraphs: [
          'Days are short, so the longer trips to Ohrid and Kosovo start early to make the most of the light. Bring a warm jacket and shoes with grip: open sites and lakefronts are exposed, and Mavrovo is properly cold.',
          'Some seasonal services, such as boats on the lakes, run less often in winter or depend on the weather. Ask us when you book and we will tell you what is operating.',
        ],
      },
      {
        heading: 'Going skiing instead?',
        paragraphs: [
          `If the plan is skiing rather than sightseeing, we also run private ski transfers from Skopje and Skopje Airport to ${skiResortCountWord} resorts, from Popova Šapka and Mavrovo close to the city to Bansko, Kopaonik and Jahorina further away. Prices are fixed per car from €${skiFromPrice}, with room planned for your skis and boards.`,
        ],
        link: { href: '/ski-transfers', label: 'See all ski transfers from Skopje' },
      },
    ],
    picksTitle: 'Our top winter day trips from Skopje',
    picks: [
      tourPick(
        'matka-self-guided',
        'Matka Canyon, half a day from the city',
        'Only 25 minutes from Skopje, so it fits even a short winter afternoon. Walk the cliffside path above the green water and warm up in the lakeside café while your driver waits.',
      ),
      ...transferPick(
        'skopje-mavrovo',
        'Mavrovo for snow and skiing',
        'The closest proper winter landscape to Skopje: a frozen lakeshore, the half-submerged Church of St. Nicholas and the ski slopes above the village. Book the ride there and a return for the same day.',
      ),
      tourPick(
        'ohrid',
        'Ohrid without the crowds',
        'The old town, St. John at Kaneo and the lakefront are peaceful in winter, sometimes with snow on the surrounding mountains. A full day with the drive handled both ways.',
      ),
      tourPick(
        'kosovo-pristina-prizren',
        'Kosovo: Pristina and Prizren',
        'Cities are a good choice when it is cold. See the Newborn monument and the National Library in Pristina, then the Ottoman bridge and old streets of Prizren, with plenty of cafés along the way.',
      ),
      tourPick(
        'stobi',
        'Stobi and Heraclea Lyncestis',
        'Two major archaeological sites that are often almost empty in winter. Walk among Roman mosaics and a theatre in crisp air, with a warm lunch stop between them.',
      ),
      tourPick(
        'bigorski-mavrovo-naum',
        'Mavrovo, Bigorski Monastery and St. Naum',
        'The long western loop for anyone who wants mountains, a monastery and the lake in one day. Expect an early start and a late return in the short winter days.',
      ),
    ],
    faqs: [
      {
        q: 'What are the best day trips from Skopje in winter?',
        a: 'Matka Canyon for a short outing, Mavrovo for snow and skiing, Ohrid for a quiet lake town, Pristina and Prizren for two cities in a day, and Stobi with Heraclea for ancient history. All are done by private car.',
      },
      {
        q: 'Is winter a good time to visit North Macedonia?',
        a: 'Yes, if you like quiet sights and do not mind the cold. Places that are crowded in summer are calm, and a private car keeps the travel itself warm and simple.',
      },
      {
        q: 'What happens if it snows on the day?',
        a: 'Your driver follows the forecast and road conditions and adjusts the timing or the route when needed. If a trip is not sensible on the day, we will suggest an alternative.',
      },
      {
        q: 'How much does a winter day trip from Skopje cost?',
        a: `Each trip has one fixed price per car, agreed before you travel. They start at €${tours['matka-self-guided'].price} for Matka Canyon and go up to €${tours['bigorski-mavrovo-naum'].price} for the longest full-day routes.`,
      },
      ...dayTripFaqsShared,
    ],
    cta: {
      href: '/build-trip',
      label: 'Plan a winter day trip',
      price: tours['matka-self-guided'].price,
      priceNote: 'per car, day trips from',
      secondary: { href: '/tours', label: 'See all day tours' },
    },
  },
  {
    slug: 'best-day-trips-from-skopje',
    category: 'Travel guide',
    title: 'Best day trips from Skopje',
    metaTitle: 'Best Day Trips from Skopje | Private Driver, Fixed Price per Car',
    description:
      'The best day trips from Skopje by private car: Matka Canyon, Lake Ohrid, Kosovo, Kokino, Stobi and Mavrovo. Durations and fixed prices per car.',
    lede: 'Skopje sits in the middle of a small country, which makes it an excellent base. These are the day trips our guests book most, from a three-hour escape to a full day at the lake.',
    image: '/images/hero-macedonia.webp',
    alt: 'Dark sedan driving a lakeside mountain road at sunset',
    keywords: [
      'day trips from Skopje',
      'best day trips from Skopje',
      'Skopje day tours',
      'things to do near Skopje',
      'Matka Canyon day trip',
      'Ohrid day trip from Skopje',
      'Kosovo day trip from Skopje',
    ],
    facts: [
      { label: 'Shortest trip', value: tours['matka-self-guided'].duration },
      { label: 'Trips from', value: `€${tours['matka-self-guided'].price} per car` },
      { label: 'Group size', value: 'Up to 4' },
    ],
    summaryTitle: 'In short: the best day trips',
    summary: [
      'Matka Canyon, the easy half-day 25 minutes from the city',
      'Lake Ohrid, the UNESCO old town everyone comes for',
      'Pristina and Prizren, a second country in one day',
      'Kokino, a Bronze Age observatory on a hilltop',
      'Stobi and Heraclea, the great Roman-era sites',
    ],
    sections: [
      {
        heading: 'How to choose a day trip from Skopje',
        paragraphs: [
          'Start with how much time you have. Matka Canyon fits into a morning or afternoon, Kokino takes half a day, and Ohrid, Kosovo and the western loop through Mavrovo are full days with an early start.',
          'Then decide what you want from the day: water and cliffs at Matka, a lake town and Byzantine churches in Ohrid, city life across the border in Kosovo, or quiet ruins at Stobi and Heraclea.',
        ],
      },
      {
        heading: 'How the trips work',
        paragraphs: [
          'Every trip is private. Your driver collects you from your address in Skopje, drives you between the stops, waits while you explore and brings you back. You set the pace and can add coffee or photo stops.',
          'Prices are fixed per car for up to 4 passengers and agreed before you travel. Want a different combination of places? Use the trip builder to put together your own route.',
        ],
        link: { href: '/build-trip', label: 'Build your own trip' },
      },
    ],
    picksTitle: 'Our most popular day trips',
    picks: [
      tourPick(
        'matka-self-guided',
        'Matka Canyon',
        'The quickest way out of the city: a boat ride to Vrelo Cave, a cliffside walk to St. Andrew\u2019s Monastery or simply a drink by the water.',
      ),
      tourPick(
        'matka',
        'Vodno, St. Panteleimon and Matka Canyon',
        'The fuller version: the Millennium Cross above Skopje, 12th-century frescoes at St. Panteleimon and then free time in the canyon.',
      ),
      tourPick(
        'ohrid',
        'Lake Ohrid',
        'The UNESCO-listed old town, St. John at Kaneo, Samuel\u2019s Fortress and free time by one of the oldest lakes in Europe.',
      ),
      tourPick(
        'kosovo-pristina-prizren',
        'Kosovo: Pristina and Prizren',
        'Cross the border for the capital\u2019s landmarks and the Ottoman old town of Prizren, with its stone bridge and fortress view.',
      ),
      tourPick(
        'kokino',
        'Kokino megalithic observatory',
        'A 3,800-year-old observatory on a volcanic hilltop about 90 km from Skopje, with wide views over the countryside.',
      ),
      tourPick(
        'stobi',
        'Stobi and Heraclea Lyncestis',
        'Mosaics, basilicas and theatres at two of the most important archaeological sites in the country.',
      ),
      tourPick(
        'bigorski-mavrovo-naum',
        'Mavrovo, Bigorski Monastery and St. Naum',
        'The grand western loop through Mavrovo National Park to the springs of St. Naum on Lake Ohrid.',
      ),
    ],
    faqs: [
      {
        q: 'What is the best day trip from Skopje?',
        a: 'For a short outing, Matka Canyon. For a full day, Lake Ohrid is the trip most visitors choose, followed by Pristina and Prizren in Kosovo.',
      },
      {
        q: 'Can I visit Ohrid as a day trip from Skopje?',
        a: `Yes. The drive is about 2h 45m each way, so it is a full day of ${tours.ohrid.duration}. The private day trip costs €${tours.ohrid.price} per car.`,
      },
      {
        q: 'How much do day trips from Skopje cost?',
        a: `Between €${tours['matka-self-guided'].price} and €${tours['bigorski-mavrovo-naum'].price} per car depending on distance and duration. The price covers up to 4 passengers.`,
      },
      {
        q: 'Do I need a passport for the Kosovo day trip?',
        a: 'Yes. You cross an international border, so bring a passport or an ID card that Kosovo accepts for your nationality.',
      },
      ...dayTripFaqsShared,
    ],
    cta: {
      href: '/tours',
      label: 'See all day tours',
      price: tours['matka-self-guided'].price,
      priceNote: 'per car, day trips from',
      secondary: { href: '/build-trip', label: 'Build your own trip' },
    },
  },
]

export const guides: Guide[] = [
  ...routeExtras.flatMap((extras) => routeGuide(extras) ?? []),
  ...topicalGuides,
]

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug)
}

const WINTER_GUIDE = 'best-winter-day-trips-from-skopje'
const DAY_TRIPS_GUIDE = 'best-day-trips-from-skopje'
const OHRID_GUIDE = 'skopje-to-ohrid'
const PRISTINA_GUIDE = 'skopje-to-pristina'

const tourGuides: Record<TourSlug, string> = {
  matka: DAY_TRIPS_GUIDE,
  stobi: DAY_TRIPS_GUIDE,
  kokino: DAY_TRIPS_GUIDE,
  ohrid: OHRID_GUIDE,
  'matka-village-panteleimon': DAY_TRIPS_GUIDE,
  'matka-self-guided': DAY_TRIPS_GUIDE,
  'kosovo-pristina-prizren': PRISTINA_GUIDE,
  'bigorski-mavrovo-naum': DAY_TRIPS_GUIDE,
  'tetovo-ohrid-bitola': OHRID_GUIDE,
  'tetovo-ohrid-naum': OHRID_GUIDE,
}

export function getGuideForTour(tour: { slug: TourSlug }) {
  return getGuide(tourGuides[tour.slug])
}

export function getGuideForTransfer(transfer: Pick<Transfer, 'slug' | 'tag'>) {
  if (isSkiTransfer(transfer)) return getGuide(WINTER_GUIDE)
  return guides.find((guide) => guide.transferSlug === transfer.slug)
}

export function relatedGuides(guide: Guide, count = 3) {
  const others = guides.filter((other) => other.slug !== guide.slug)
  const sameKind = others.filter((other) => Boolean(other.transferSlug) === Boolean(guide.transferSlug))
  const start = sameKind.findIndex((other) => other.slug > guide.slug)
  const rotated = [...sameKind.slice(Math.max(start, 0)), ...sameKind.slice(0, Math.max(start, 0))]
  return [...rotated, ...others.filter((other) => !sameKind.includes(other))].slice(0, count)
}
