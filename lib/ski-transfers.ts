import type { Transfer } from '@/lib/transfers'

export const SKI_TAG = 'Ski resort'

export type SkiTransfer = Transfer & {
  resort: string
  country: string
  driveMinutes: number
  bestFor: string
}

export const skiSeason = 'Winter 2026/27'

export const skiTransfers: SkiTransfer[] = [
  {
    slug: 'skopje-popova-sapka',
    route: 'Skopje – Popova Šapka',
    from: 'Skopje',
    to: 'Popova Šapka',
    resort: 'Popova Šapka Ski Centre',
    country: 'North Macedonia',
    driveMinutes: 75,
    bestFor: 'High, open slopes near the city',
    price: 80,
    distance: '~65 km',
    duration: '~1h 15m',
    tag: SKI_TAG,
    image: '/images/ski-popova-sapka.webp',
    alt: 'Chairlift climbing wide open snow slopes above a cluster of mountain hotels at Popova Šapka',
    description:
      'The closest ski slopes to Skopje. A little over an hour from your door to wide, open runs high on the Šar Mountains, with no border to cross and no mountain road to drive yourself.',
    about: [
      'Popova Šapka sits at around 1,700 metres on the Šar Mountains, directly above the city of Tetovo. Most of the terrain lies above the tree line, which means wide open slopes, long views over the Polog valley and plenty of room for freeriders when the snow is deep.',
      'From Skopje the motorway runs west to Tetovo in about 40 minutes. From there a winding road climbs roughly 18 km to the resort, and that is the part most visitors prefer to leave to a driver who takes it all winter. We drop you at your hotel, the ski rental or the lifts, and we can come back for you the same evening.',
    ],
    highlights: [
      'The shortest ski transfer from Skopje, about 1h 15m',
      'Pickup from Skopje Airport, your hotel or any address in the city',
      'Driver experienced with the mountain road above Tetovo',
      'Easy same-day return for a day on the snow',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'At the hour you choose, skis and boots loaded for you' },
      { title: 'West on the motorway', text: 'About 40 minutes to Tetovo along the Polog valley' },
      { title: 'Climb above Tetovo', text: 'Around 18 km of mountain road up the Šar Mountains' },
      { title: 'Drop-off — Popova Šapka', text: 'Around 1h 15m after leaving Skopje' },
    ],
    important:
      'No border on this route. The road above Tetovo is steep and winding, so the climb can take longer after heavy snowfall.',
    goodToKnow: [
      'Lift operation depends on snow and weather, so check with the resort before a day trip.',
      'Want to ski and be back in Skopje for dinner? Ask for a same-day return when you book.',
      'Tell us how many pairs of skis or boards you are bringing so we plan the space.',
    ],
  },
  {
    slug: 'skopje-mavrovo',
    route: 'Skopje – Mavrovo',
    from: 'Skopje',
    to: 'Mavrovo',
    resort: 'Zare Lazarevski Ski Centre',
    country: 'North Macedonia',
    driveMinutes: 90,
    bestFor: 'Day trips and first turns',
    price: 100,
    distance: '~100 km',
    duration: '~1h 30m',
    tag: SKI_TAG,
    image: '/images/ski-mavrovo.webp',
    alt: 'Ski slope running through snowy forest above a frozen mountain lake at Mavrovo',
    description:
      'Breakfast in Skopje, first lift before the queues. Mavrovo is the easiest ski day in the country, and a private car makes it door to slope with no parking hunt.',
    about: [
      'Mavrovo is where most people from Skopje learn to ski. The Zare Lazarevski centre sits above Mavrovo Lake inside the national park, with forest runs for intermediates, a patient beginner area and lake views from the chairlift on a clear day.',
      'The drive heads west on the motorway past Tetovo and Gostivar, then climbs into the park. We drop you at your hotel, your rental shop or straight at the lift station, and we can come back for you the same evening or any day later in the week.',
    ],
    highlights: [
      'Pickup from Skopje Airport, your hotel or any address in the city',
      'Drop-off at the lift station, ski rental or your accommodation',
      'Short enough for a same-day return ski trip',
      'No border crossing and no documents beyond your usual ID',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'At the hour you choose, bags and boots loaded for you' },
      { title: 'West on the motorway', text: 'Past Tetovo and Gostivar, about an hour of easy driving' },
      { title: 'Climb into Mavrovo National Park', text: 'Lake views open up on the last stretch' },
      { title: 'Drop-off — Mavrovo ski centre', text: 'Around 1h 30m after leaving Skopje' },
    ],
    important:
      'No border on this route. After heavy snowfall the mountain road can be slower, so we may suggest leaving a little earlier.',
    goodToKnow: [
      'Tell us how many pairs of skis or boards you are bringing so we plan the space.',
      'Want to ski and come back the same day? Ask for a same-day return when you book.',
      'Lift passes and equipment hire are paid at the resort.',
    ],
  },
  {
    slug: 'skopje-brezovica',
    route: 'Skopje – Brezovica',
    from: 'Skopje',
    to: 'Brezovica',
    resort: 'Brezovica Ski Resort',
    country: 'Kosovo',
    driveMinutes: 100,
    bestFor: 'Powder and freeride',
    price: 140,
    distance: '~90 km',
    duration: '~1h 40m',
    tag: SKI_TAG,
    image: '/images/ski-brezovica.webp',
    alt: 'Freeride skier crossing a deep powder bowl under steep peaks at Brezovica',
    description:
      'Big Sharr Mountain terrain under two hours from Skopje. Your driver handles the Kosovo border while you watch the peaks get closer.',
    about: [
      'Brezovica has a loyal following among people who care more about snow than about après-ski. The resort sits high on the northern side of the Sharr Mountains, which is why it holds powder longer than almost anywhere nearby and why freeriders keep coming back.',
      'From Skopje the road runs north to the Blace crossing, through the Kaçanik gorge and up to Štrpce. It is a short trip on the map, but the last part is a proper mountain road, so it helps to have a driver who knows it in winter.',
    ],
    highlights: [
      'High-mountain freeride terrain under two hours from Skopje',
      'Driver experienced with the Blace border crossing',
      'Door-to-door from Skopje Airport or your hotel',
      'Leave when you like, with no bus timetable to fit around',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'Your chosen time, gear loaded' },
      { title: 'Blace border crossing', text: 'About 30 minutes north, passports ready' },
      { title: 'Kaçanik gorge and Štrpce', text: 'The road narrows and starts to climb' },
      { title: 'Drop-off — Brezovica', text: 'Around 1h 40m after leaving Skopje' },
    ],
    important:
      'You cross into Kosovo, so bring a valid passport or an ID card that Kosovo accepts. Border waits are longer on weekends and holidays.',
    goodToKnow: [
      'Check that your nationality can enter Kosovo before you travel.',
      'Lift operation at Brezovica depends on conditions, so confirm with the resort before a day trip.',
      'Tell us about skis, boards or avalanche packs when you book.',
    ],
  },
  {
    slug: 'skopje-ponikva',
    route: 'Skopje – Ponikva',
    from: 'Skopje',
    to: 'Ponikva',
    resort: 'Ponikva, Osogovo Mountains',
    country: 'North Macedonia',
    driveMinutes: 120,
    bestFor: 'Families and sledding',
    price: 180,
    distance: '~115 km',
    duration: '~2h',
    tag: SKI_TAG,
    image: '/images/ski-ponikva.webp',
    alt: 'Families sledding on a gentle snowy forest slope beside a wooden lodge at Ponikva',
    description:
      'A quiet forest plateau above Kočani with gentle slopes, sled runs and cabins. The relaxed choice for kids, beginners and anyone who wants snow without the crowds.',
    about: [
      'Ponikva sits at around 1,500 metres in the Osogovo Mountains, in the east of the country. It is small and unhurried: a couple of easy slopes, plenty of space for sledding and long walks between snow-heavy beech and pine.',
      'The route follows the motorway east past Štip to Kočani and then climbs through the forest. The final section is a winding mountain road that locals know well, and your driver takes it at a pace that keeps everyone comfortable.',
    ],
    highlights: [
      'Gentle slopes suited to children and beginners',
      'Free child seats, just tell us the ages',
      'Door-to-door from Skopje Airport or the city',
      'No border crossing on this route',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'Whenever suits your family' },
      { title: 'East past Štip', text: 'Open motorway through the Ovče Pole plain' },
      { title: 'Kočani and the forest road', text: 'A steady climb into the Osogovo Mountains' },
      { title: 'Drop-off — Ponikva', text: 'Around 2 hours after leaving Skopje' },
    ],
    important:
      'No border on this route. The last stretch above Kočani is a mountain road, so travel time can grow after fresh snow.',
    goodToKnow: [
      'Accommodation at Ponikva is limited, so book your cabin or hotel before the transfer.',
      'Sleds can usually be rented on the spot.',
      'A same-day return is easy to arrange if you only want a day in the snow.',
    ],
  },
  {
    slug: 'skopje-bansko',
    route: 'Skopje – Bansko',
    from: 'Skopje',
    to: 'Bansko',
    resort: 'Bansko Ski Area',
    country: 'Bulgaria',
    driveMinutes: 210,
    bestFor: 'Long runs and nightlife',
    price: 220,
    distance: '~220 km',
    duration: '~3h 30m',
    tag: SKI_TAG,
    image: '/images/ski-bansko.webp',
    alt: 'Snowy old-town street of stone houses in Bansko with the Pirin peaks behind',
    description:
      'Fly into Skopje, ski in Bansko. A direct private ride to the biggest ski area in the Balkans, with the Bulgarian border and road tolls already in the price.',
    about: [
      'Bansko combines a stone-built old town with a serious ski area on the Pirin range above it. A gondola lifts you from the edge of town to long, north-facing runs, and the evenings are spent in traditional taverns called mehanas.',
      'Skopje Airport is a practical gateway: flights are often cheaper than into Sofia, and the drive east over the border takes about three and a half hours. There is no direct bus, so a private car saves most of a day compared with changing in Sofia or Blagoevgrad.',
    ],
    highlights: [
      'Direct ride with no changes, straight from Skopje Airport if you like',
      'Border fees and Bulgarian road vignette included',
      'Drop-off at your hotel, apartment or the gondola station',
      'Comfort stops whenever you want one',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'We track your flight if you are landing' },
      { title: 'East to the Bulgarian border', text: 'Through Kriva Palanka, passports ready' },
      { title: 'Down the Struma valley', text: 'A coffee stop on request, then the turn toward Pirin' },
      { title: 'Drop-off — Bansko', text: 'Around 3h 30m after leaving Skopje' },
    ],
    important:
      'You enter Bulgaria, which is in the EU and the Schengen area. Bring your passport and check whether you need a visa.',
    goodToKnow: [
      'Border waiting time varies and is longest around Christmas, New Year and weekends.',
      'Heading home afterwards? Book the Bansko to Skopje Airport return at the same time.',
      'Tell us how many skis or boards you have so we plan the luggage space.',
    ],
  },
  {
    slug: 'skopje-kopaonik',
    route: 'Skopje – Kopaonik',
    from: 'Skopje',
    to: 'Kopaonik',
    resort: 'Kopaonik Ski Centre',
    country: 'Serbia',
    driveMinutes: 270,
    bestFor: 'Sunny, wide pistes',
    price: 200,
    distance: '~270 km',
    duration: '~4h 30m',
    tag: SKI_TAG,
    image: '/images/ski-kopaonik.webp',
    alt: 'Chairlift above wide groomed pistes and alpine hotels at Kopaonik',
    description:
      'One car, one driver, all the way to the largest ski centre in Serbia. No bus changes in Niš and no dragging ski bags between stations.',
    about: [
      'Kopaonik is known as the mountain of the sun for good reason: it gets a lot of clear days, and its broad, well-groomed pistes suit everyone from confident beginners to people who just want to cruise. The resort village at the top has hotels, restaurants and ski schools within walking distance of the lifts.',
      'Getting there by public transport means at least one change and a long day. By private car you cross into Serbia north of Kumanovo, follow the motorway and then turn off for the climb to the resort, with stops whenever you need them.',
    ],
    highlights: [
      'Door-to-door to your hotel or apartment on the mountain',
      'Border fees and tolls included in the price',
      'Drivers used to the winter road up to the resort',
      'Rest and meal stops at your pace',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'Your chosen departure time' },
      { title: 'Tabanovce border into Serbia', text: 'About 40 minutes north of Skopje' },
      { title: 'Motorway north, then west', text: 'A break for coffee or lunch along the way' },
      { title: 'Drop-off — Kopaonik', text: 'Around 4h 30m after leaving Skopje' },
    ],
    important:
      'You cross into Serbia, so bring a valid passport. The final climb is a mountain road and can be slow in heavy snow.',
    goodToKnow: [
      'An early start gets you on the mountain in time for an afternoon ski.',
      'Return transfers can be booked for any date.',
      'Let us know if anyone gets car sick so the driver can take the bends gently.',
    ],
  },
  {
    slug: 'skopje-zlatibor',
    route: 'Skopje – Zlatibor',
    from: 'Skopje',
    to: 'Zlatibor',
    resort: 'Zlatibor & Tornik',
    country: 'Serbia',
    driveMinutes: 330,
    bestFor: 'Spa hotels and easy skiing',
    price: 280,
    distance: '~370 km',
    duration: '~5h 30m',
    tag: SKI_TAG,
    image: '/images/ski-zlatibor.webp',
    alt: 'Golden gondola cabins crossing snowy pine-covered hills at Zlatibor',
    description:
      'A long drive made simple. Settle in at Skopje and step out at your hotel on the Zlatibor plateau, where the Gold Gondola carries you up to the Tornik slopes.',
    about: [
      'Zlatibor is as much a winter holiday town as a ski resort. Families come for the spa hotels, the pine air and the food, and take the Gold Gondola, a nine-kilometre ride over the hills, up to the Tornik ski centre for a few relaxed hours on the snow.',
      'There is no practical public connection from Skopje, which is why most visitors arrive by private car. The route runs the length of southern and western Serbia, and with one driver for the whole trip you can sleep, stop for lunch or change the plan as you go.',
    ],
    highlights: [
      'One driver from your door in Skopje to your hotel in Zlatibor',
      'Border fees and tolls included',
      'Lunch and rest stops whenever you like',
      'Space planned around your luggage and ski gear',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'A morning start works best for this distance' },
      { title: 'Into Serbia', text: 'Border crossing north of Kumanovo, passports ready' },
      { title: 'Across central Serbia', text: 'Lunch stop on the way, then into the western hills' },
      { title: 'Drop-off — Zlatibor', text: 'Around 5h 30m after leaving Skopje' },
    ],
    important:
      'A long transfer of around five and a half hours with one border. Bring a valid passport and plan for a meal stop.',
    goodToKnow: [
      'Driving time depends on weather and traffic through Serbia.',
      'Travelling with children? Child seats are free, just tell us their ages.',
      'We can also drop you in Užice or at Mokra Gora on request.',
    ],
  },
  {
    slug: 'skopje-jahorina',
    route: 'Skopje – Jahorina',
    from: 'Skopje',
    to: 'Jahorina',
    resort: 'Jahorina Olympic Centre',
    country: 'Bosnia & Herzegovina',
    driveMinutes: 390,
    bestFor: 'Olympic pistes near Sarajevo',
    price: 330,
    distance: '~430 km',
    duration: '~6h 30m',
    tag: SKI_TAG,
    image: '/images/ski-jahorina.webp',
    alt: 'Ski pistes winding through frost-covered spruce forest at Jahorina',
    description:
      'Our longest winter route: across the Balkans to the mountain that hosted the 1984 Winter Olympics, with a single driver and a price agreed before you leave.',
    about: [
      'Jahorina rises just outside Sarajevo and staged the women’s alpine events at the 1984 Winter Games. Today it has modern lifts, long forest pistes and night skiing, and it pairs well with an evening or two in Sarajevo’s old bazaar.',
      'Reaching it from Skopje by bus takes the better part of two days. With a private transfer you leave in the morning and arrive the same afternoon, with breaks where you choose and no luggage to carry between connections.',
    ],
    highlights: [
      'A full-day journey handled by one driver, start to finish',
      'All border fees and tolls included',
      'Drop-off at your hotel on Jahorina or in Sarajevo',
      'Meal and rest stops planned with you',
      'One fixed price for the whole car, up to 4 passengers',
    ],
    journey: [
      { title: 'Pickup — Skopje or Skopje Airport', text: 'Early departure recommended' },
      { title: 'North through Serbia', text: 'Border crossing and a first coffee stop' },
      { title: 'Into Bosnia & Herzegovina', text: 'Second border, then the mountain roads toward Sarajevo' },
      { title: 'Drop-off — Jahorina', text: 'Around 6h 30m after leaving Skopje' },
    ],
    important:
      'This route crosses more than one border. A passport is required, and you should check entry rules for each country.',
    goodToKnow: [
      'Winter conditions on the mountain sections can add time, so keep your arrival evening free.',
      'We can split the journey with an overnight stop if you prefer.',
      'Book the return when you book the outbound to keep the same driver.',
    ],
  },
]

export function isSkiTransfer(transfer: Pick<Transfer, 'tag'>) {
  return transfer.tag === SKI_TAG
}

export const skiFromPrice = Math.min(...skiTransfers.map((transfer) => transfer.price))

export const skiCountries = Array.from(new Set(skiTransfers.map((transfer) => transfer.country)))

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

export function countWord(count: number) {
  return NUMBER_WORDS[count] ?? String(count)
}

export const skiResortCountWord = countWord(skiTransfers.length)

const resortNames = skiTransfers.map((transfer) => transfer.to)

export const skiResortNames = `${resortNames.slice(0, -1).join(', ')} and ${resortNames[resortNames.length - 1]}`

const priceList = skiTransfers.map((transfer) => `${transfer.to} €${transfer.price}`).join(', ')

export const skiFaqs: { q: string; a: string }[] = [
  {
    q: 'How much is a ski transfer from Skopje?',
    a: `Prices are fixed per car, one way, for up to 4 passengers: ${priceList}. Fuel, motorway tolls and border fees are already included, so nothing is added on the day.`,
  },
  {
    q: 'Can you collect us straight from Skopje Airport?',
    a: 'Yes. Send your flight number when you book. Your driver follows the flight, waits in the arrivals hall with a name sign and drives you directly to the resort. The price is the same from the airport or from an address in Skopje.',
  },
  {
    q: 'Will our skis and snowboards fit?',
    a: 'Tell us how many pairs of skis or boards and how many bags you are bringing when you book. We confirm the right setup for your group before you travel, so there are no surprises at pickup.',
  },
  {
    q: 'Is the price per person or per car?',
    a: 'Per car. One price covers the whole vehicle for up to 4 passengers, whether you travel alone or fill every seat.',
  },
  {
    q: 'Are the cars ready for winter mountain roads?',
    a: 'Our cars run on winter tyres throughout the season, as the law in North Macedonia requires, and our drivers work these mountain roads all winter. After heavy snowfall we may suggest a different departure time to keep the trip safe.',
  },
  {
    q: 'What documents do we need at the borders?',
    a: 'Popova Šapka, Mavrovo and Ponikva are inside North Macedonia, so no border is crossed. For Brezovica (Kosovo), Bansko (Bulgaria), Kopaonik and Zlatibor (Serbia) and Jahorina (Bosnia & Herzegovina) every passenger needs a valid passport, and you should check visa rules for your nationality before travelling.',
  },
  {
    q: 'How do we pay?',
    a: 'There is no prepayment. You pay your driver in cash in euros, British pounds or US dollars, or in crypto. We do not take card payments.',
  },
  {
    q: 'Can we book a return or a same-day ski trip?',
    a: 'Yes. A return from the resort is booked as a second one-way transfer for any date you like. For the closer resorts, Popova Šapka, Mavrovo, Brezovica and Ponikva, ask us about a same-day return so you can ski and be back in Skopje for dinner.',
  },
  {
    q: 'How early should we book for the ski season?',
    a: 'As soon as your flights are confirmed, especially around Christmas, New Year and the February school holidays. Last-minute transfers are often possible too, so message us and we will check.',
  },
  {
    q: 'Is there a bus from Skopje to the ski resorts?',
    a: 'Public transport to most of these resorts means at least one change and a long wait, with your ski bags in tow. A private transfer runs door to door on your schedule, which is why most skiers flying into Skopje book a car.',
  },
]
