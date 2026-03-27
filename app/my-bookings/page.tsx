//"use client";

import MyBookingsTable from '../register/components/tables/MyBookingsTable'

  const fetchMyBookings = async () => {
      const res = await fetch("http://localhost:3000/api/services")
      const d = await res.json();
      setData(d);
    }

export default async function MyBookingsPage() {
   
  const data = fetchMyBookings();


  // const [data, setData] = useState([]);
  // useEffect(()=> {
  
  //   fetchMyBookings();
  // }, [])
  return (
    <div>
      <MyBookingsTable bookings={data} /> 
    </div>
  )
}
