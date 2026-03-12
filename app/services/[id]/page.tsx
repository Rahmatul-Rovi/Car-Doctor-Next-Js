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
        <section>
           <figure className='flex justify-center w-full relative'>
             <Image src={"/assets/images/checkout/checkout.png"} 
            width={1137}
            height={300}
            alt={"Banner"} />
            <div className='absolute w-full h-full border-2 border-red-400'>

            </div>
           </figure>
        </section>
      <p>{p.id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
