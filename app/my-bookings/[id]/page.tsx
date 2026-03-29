import BookingUpdateForm from '@/app/components/forms/BookingUpdateForm'
import React from 'react'

export default function UpdateBookingPage({params}) {
    const p = await params;
    const res = await fetch(``);
    const data = await res.json();
  return (
    <div>
      <BookingUpdateForm data = {data} />
    </div>
  )
}
