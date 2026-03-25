"use client";
import React, { useEffect, useState } from 'react'
import MyBookingsTable from '../register/components/tables/MyBookingsTable'

export default function MyBookingsPage() {
  const [data, setData] = useState([]);
  useEffect(()=> {
    const fetchMyBookings = async () => {
      const res = await fetch("http://localhost:3000/api/services")
      const d = await res.json();
      setData(d);
    }
    fetchMyBookings();
  }, [])
  return (
    <div>
      <MyBookingsTable> data={data}</MyBookingsTable>
    </div>
  )
}
