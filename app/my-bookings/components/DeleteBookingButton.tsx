"use client";
import React from 'react'

export default function DeleteBookingButton({id}) {
    const handleDelete = async (id) => {};
    const res = fetch()
  return (
    <div>
      <button onClick={()=>handleDelete(id)}>Delete Button</button>
    </div>
  )
}
