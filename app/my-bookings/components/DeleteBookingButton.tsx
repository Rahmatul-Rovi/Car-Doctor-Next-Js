"use client";
import React from 'react'

type Props = {
    id: string; // ✅ type দিন
}

export default function DeleteBookingButton({ id }: Props) { 
    const handleDelete = async (id: string) => { 
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-bookings/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <div>
            <button onClick={() => handleDelete(id)}>Delete Button</button>
        </div>
    )
}