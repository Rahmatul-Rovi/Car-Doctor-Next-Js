import React from 'react'

export default async function ServicesSection() {
    const res = await fetch('http://localhost:3000/services.json')
    const data = await res.json();
  return (
    <div className='grid grid-cols-12'>
      {data.map((item)=> {
      return (
        <div className='col-span-4'>
            {JSON.stringify(item)}
        </div>
      )
      })}
    </div>
  )
}
