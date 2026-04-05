import MyBookingsTable from '../register/components/tables/MyBookingsTable'
import dbConnect, { collectionNamesObj } from '@/app/lib/dbConnect';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/authOptions';
import { redirect } from 'next/navigation';

export default async function MyBookingsPage() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
  const data = await bookingCollection.find({ userEmail: session?.user?.email }).toArray();
  const bookings = JSON.parse(JSON.stringify(data)); 

  return (
    <div>
      <MyBookingsTable data={bookings} />
    </div>
  )
}