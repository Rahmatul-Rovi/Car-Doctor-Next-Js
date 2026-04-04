import BookingUpdateForm from '@/app/components/forms/BookingUpdateForm'
import React from 'react'

export default async function UpdateBookingPage({ params }: { params: Promise<{ id: string }> }) { 
    const p = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-bookings/${p.id}`);
    const data = await res.json();

    return (
        <div>
            <BookingUpdateForm booking={data} onClose={() => {}} onUpdate={() => {}} />
        </div>
    )
}