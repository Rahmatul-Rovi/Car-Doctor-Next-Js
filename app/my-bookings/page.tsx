import MyBookingsTable from '../register/components/tables/MyBookingsTable'

export default async function MyBookingsPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-bookings`, {
    cache: "no-store" // ✅ সবসময় fresh data আনবে
  });
  const data = await res.json();

  return (
    <div>
      <MyBookingsTable bookings={data} />
    </div>
  )
}