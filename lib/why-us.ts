import {
  Baby,
  Banknote,
  BusFront,
  CarFront,
  Clock,
  Gauge,
  Languages,
  Luggage,
  MapPinned,
  Megaphone,
  MoonStar,
  ReceiptText,
  Route,
  type LucideIcon,
} from 'lucide-react'
import { getTransfer } from '@/lib/transfers'

// Published fare of the official airport taxi rank to the city centre (1,500 MKD).
const OFFICIAL_AIRPORT_FARE_EUR = 25

const airportPrice = getTransfer('skopje-airport-city')?.price ?? 30
const ohridPrice = getTransfer('skopje-ohrid')?.price ?? 140
const airportDifference = airportPrice - OFFICIAL_AIRPORT_FARE_EUR

const GROUP_SIZE = 4

function perPerson(carPrice: number) {
  const share = carPrice / GROUP_SIZE
  return Number.isInteger(share) ? `${share}` : share.toFixed(2)
}

export const taxiFigures = [
  {
    label: 'Official airport taxi to the city centre',
    value: '1,500 MKD',
    note: `About €${OFFICIAL_AIRPORT_FARE_EUR}, fixed, from the rank outside the terminal`,
  },
  {
    label: 'Airport bus to the city',
    value: '199 MKD',
    note: 'About €3 per person, to three stops in the centre, seven to nine times a day',
  },
  {
    label: 'City taxi meter',
    value: '50–60 MKD + 30–35 per km',
    note: 'A 5 km ride across town comes to roughly €4',
  },
  {
    label: 'Average age of a car in North Macedonia',
    value: '19.4 years',
    note: 'State Statistical Office, 2024. 87% of cars are over ten years old',
  },
]

export const comparisonRows = [
  {
    label: 'Airport to city centre',
    taxi: `1,500 MKD (about €${OFFICIAL_AIRPORT_FARE_EUR}) at the official rank outside the terminal. Drivers who approach you inside name their own price.`,
    us: `€${airportPrice} per car, confirmed in writing before you fly.`,
  },
  {
    label: 'Extra charges',
    taxi: 'Unofficial drivers are known to add a luggage fee once the bags are in the boot.',
    us: 'None. Luggage, night rides and flight delays are included.',
  },
  {
    label: 'Paying',
    taxi: 'Street taxis expect cash in denars. Few take cards, and euros are accepted at the driver’s rate.',
    us: 'Cash in euros, pounds or dollars, or crypto, so you need no denars. We do not take cards either.',
  },
  {
    label: 'Finding your ride',
    taxi: 'Walk out with your bags, find the rank and take the next car.',
    us: 'Your driver waits in the arrivals hall holding a sign with your name.',
  },
  {
    label: 'Delayed flight',
    taxi: 'Nobody is expecting you. You take whatever is at the rank at that hour.',
    us: 'We track the flight and move the pickup to your landing time at no charge.',
  },
  {
    label: 'Language',
    taxi: 'English depends on the driver you happen to get.',
    us: 'English-speaking drivers on every ride.',
  },
  {
    label: 'The car',
    taxi: 'Whichever car is next in line.',
    us: 'An air-conditioned 2018 Ford Mondeo, 2017 Kia Sportage or passenger van, chosen for your group and luggage.',
  },
  {
    label: 'Child seat',
    taxi: 'Cannot be reserved at a taxi rank.',
    us: 'Free on request when you book.',
  },
  {
    label: 'Ohrid, Pristina, Thessaloniki',
    taxi: 'Long trips are priced by quote, not by meter. With a street taxi you negotiate at the kerb.',
    us: `Fixed prices listed on this site, for example Skopje to Ohrid for €${ohridPrice} per car.`,
  },
]

export type TaxiReason = { icon: LucideIcon; title: string; text: string }

export const costReasons: TaxiReason[] = [
  {
    icon: Megaphone,
    title: 'The driver who finds you first',
    text: 'Drivers who approach you in the arrivals hall or outside the bus station are not the official rank. They set their own fare, and it is rarely the published one.',
  },
  {
    icon: Gauge,
    title: 'No meter, no ceiling',
    text: 'A licensed city taxi has to run its meter. When a driver names a flat price instead, you have nothing to check it against.',
  },
  {
    icon: ReceiptText,
    title: 'Charges that appear at the end',
    text: 'A fee for luggage is a known trick from unofficial drivers, raised after your bags are already in the boot. It is not on any tariff.',
  },
  {
    icon: Banknote,
    title: 'Paying in the wrong currency',
    text: 'Street taxis work in cash denars and few take cards. If you only have euros, the driver decides the exchange rate.',
  },
  {
    icon: Clock,
    title: 'The clock while you wait',
    text: 'The city tariff charges 420 denars an hour for waiting, so traffic, an ATM stop or a hard-to-find address all add to the fare.',
  },
  {
    icon: MapPinned,
    title: 'Long trips by negotiation',
    text: 'Rides to Ohrid, Pristina or Thessaloniki are agreed by quote. Doing that at the kerb, tired and holding luggage, is a weak position to bargain from.',
  },
]

export const comfortReasons: TaxiReason[] = [
  {
    icon: CarFront,
    title: 'Older cars',
    text: 'The average passenger car in North Macedonia is 19.4 years old. That figure covers the whole national fleet, not taxis alone, but it is the pool rank cars come from, so air conditioning and boot space vary a lot.',
  },
  {
    icon: Luggage,
    title: 'Luggage and group size',
    text: 'A standard saloon takes four people or four large suitcases, rarely both. You find out at the kerb whether your group needs a second car.',
  },
  {
    icon: Baby,
    title: 'No child seat',
    text: 'You cannot reserve a child seat at a taxi rank, so families usually end up travelling without one.',
  },
  {
    icon: Languages,
    title: 'Explaining where you are going',
    text: 'English is not guaranteed, which matters most when the address is a rented flat and not a well-known hotel.',
  },
  {
    icon: MoonStar,
    title: 'Arriving late',
    text: 'After a delayed flight nobody is waiting for you in particular. You join everyone else looking for a car at that hour.',
  },
]

export type BusOption = {
  icon: LucideIcon
  title: string
  summary: string
  facts: { label: string; value: string }[]
  tradeoff: string
}

export const busOptions: BusOption[] = [
  {
    icon: BusFront,
    title: 'The airport bus',
    summary:
      'Erak Transporter runs the official shuttle between Skopje Airport and the city. It is the only public transport from the terminal.',
    facts: [
      { label: 'Fare', value: '199 MKD one way, about €3 per person.' },
      {
        label: 'Tickets',
        value: 'At the airport counter from 08:00 to 20:00 and on the bus at night. Denars or card.',
      },
      {
        label: 'Stops',
        value: 'The Holiday Inn, the Central Bus Station and Blvd. Aleksandar Makedonski.',
      },
      {
        label: 'Timetable',
        value: 'Seven to nine departures a day in winter 2026/27, set around scheduled flights.',
      },
    ],
    tradeoff:
      'It takes you to a stop, not to your address, so most visitors still need a walk with their bags or a city taxi. Daytime buses run two to four hours apart, and nothing leaves between 19:30 and midnight.',
  },
  {
    icon: Route,
    title: 'Buses to Ohrid and beyond',
    summary:
      'Intercity coaches leave from the Skopje bus station, next to the railway station, on fixed timetables.',
    facts: [
      {
        label: 'Fare',
        value: 'Skopje to Ohrid is around 850 to 950 MKD one way depending on the carrier, about €14 to €15.',
      },
      {
        label: 'Tickets',
        value: 'Sold at the station counter and paid in denars.',
      },
      {
        label: 'Journey',
        value: 'About three hours station to station, longer on services with extra stops.',
      },
      {
        label: 'Timetable',
        value: 'Several departures through the day, the last in the early evening.',
      },
    ],
    tradeoff:
      'You need a ride to the station in Skopje and another at the far end. The Ohrid station is a 20 to 35 minute walk from the old town. Starting from the airport, that is three legs: shuttle, coach and a local taxi.',
  },
]

export const busSums = [
  {
    label: 'Airport to city centre',
    bus: 'About €3 each to a bus stop in the centre, then a walk or a city taxi to your address.',
    us: `€${perPerson(airportPrice)} each with ${GROUP_SIZE} in the car, straight to your door, whenever you land.`,
  },
  {
    label: 'Skopje to Ohrid',
    bus: 'About €14 to €15 each for three hours station to station, plus a taxi at both ends.',
    us: `€${perPerson(ohridPrice)} each with ${GROUP_SIZE} in the car, hotel to hotel in about two and a half hours, leaving when you choose.`,
  },
]

export const taxiWins = [
  {
    title: 'Short rides inside Skopje',
    text: 'On the meter they cost a few euros. Use a licensed taxi with a roof sign and a visible meter, or the Wizi app, which lets you pay by card.',
  },
  {
    title: 'Travelling alone and light',
    text: 'The airport bus costs 199 denars, about €3, and stops at the Holiday Inn and the Central Bus Station. If you are staying near either and a departure matches your flight, nothing with four wheels beats that.',
  },
  {
    title: 'The official airport rank',
    text: `At 1,500 denars it is about €${airportDifference} cheaper than our car to the centre. What you give up is a driver waiting with your name, a price in writing and a ride arranged before you land.`,
  },
]

export const whyUsFaqs = [
  {
    q: 'Is a taxi from Skopje Airport expensive?',
    a: `The official airport taxi charges a fixed 1,500 denars, about €${OFFICIAL_AIRPORT_FARE_EUR}, to the city centre. It becomes expensive when you accept a ride from a driver who approaches you inside the terminal, because that price is whatever he decides to quote.`,
  },
  {
    q: 'Is a private transfer more expensive than a local taxi in Skopje?',
    a: `To the city centre our price is €${airportPrice} per car, about €${airportDifference} more than the official rank. For that, your driver waits in arrivals with a name sign, tracks your flight and is paid in euros, pounds or dollars. On longer routes the price is fixed and listed before you book.`,
  },
  {
    q: 'How do I avoid being overcharged by a local taxi in Skopje?',
    a: 'Use the official rank outside the terminal or a licensed city taxi with a visible meter, agree that the meter will run, and ignore drivers who approach you inside the airport or the bus station. Or book ahead, so the price is settled before you land.',
  },
  {
    q: 'Is there a bus from Skopje Airport to the city centre?',
    a: 'Yes. Erak Transporter runs the official airport shuttle for 199 denars one way, about €3. It stops at the Holiday Inn, the Central Bus Station and Blvd. Aleksandar Makedonski, and runs seven to nine times a day on a timetable set around flights, so check the departures for the day you arrive.',
  },
  {
    q: 'Should I take the airport bus or book a private transfer?',
    a: `Alone, with a small bag and a hotel near one of the stops, take the bus. With a family, heavy luggage, a late landing or an address away from the centre, a car that waits for you and drives to the door is usually worth the difference. Our price is €${airportPrice} per car, not per person.`,
  },
  {
    q: 'Can I pay a local taxi in Skopje by card or in euros?',
    a: 'Most street taxis take cash in denars only, and some accept euros at their own rate. We take cash in euros, pounds or dollars, or crypto, so you do not need denars. We do not take cards.',
  },
  {
    q: 'Do taxis in Skopje have child seats?',
    a: 'You cannot count on one at a rank. We provide child and baby seats free of charge when you tell us your child’s age at booking.',
  },
]
