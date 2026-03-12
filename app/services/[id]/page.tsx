import dbConnect, { collectionNamesObj } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailspage({params}) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await servicesCollection.findOne({_id: new ObjectId(p.id)});

  return (
    <div>
        <section className='flex justify-center'>
           <figure className=' w-full relative'>
             <Image src={"/assets/images/checkout/checkout.png"} 
            width={1137}
            height={300}
            alt={"Banner"} />
            <div className='transparent-layer absolute w-full h-full border-2 border-red-400 top-0'>
           <div>
            <h1>Service Details</h1>
           </div>
            </div>
           </figure>
        </section>
      <p>{p.id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
