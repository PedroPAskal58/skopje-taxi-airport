import type { bookings } from '@/lib/db/schema'

type Booking = typeof bookings.$inferSelect

export async function notifyNewBooking(b: Booking) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return

  const lines = [
    'NEW BOOKING',
    `Service: ${b.title}`,
    `Car: ${b.car}`,
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
    b.email ? `Email: ${b.email}` : '',
    `From: ${b.pickup}`,
    b.dropoff ? `To: ${b.dropoff}` : '',
    `Date: ${b.date} at ${b.time}`,
    `Passengers: ${b.passengers}`,
    b.flight ? `Flight: ${b.flight}` : '',
    b.notes ? `Notes: ${b.notes}` : '',
    b.channel === 'whatsapp' ? 'Channel: WhatsApp' : '',
  ].filter(Boolean)

  const text = `${lines.join('\n')}\n\nhttps://skopjetaxiairport.com/admin/bookings`

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(5000),
    })
  } catch {
    // A failed alert must never block the customer's booking.
  }
}
