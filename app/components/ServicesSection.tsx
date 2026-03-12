import Image from 'next/image';
import React from 'react';
import dbConnect from '../lib/dbConnect';

export default async function ServicesSection() {
    // ১. সরাসরি কালেকশন কল করুন (প্যারামিটার হিসেবে নাম পাঠিয়ে দিন)
    const serviceCollection = dbConnect("services"); 

    // ২. ডেটা ফেচ করুন
    const data = await serviceCollection.find({}).toArray();

    if (!data || data.length === 0) {
        return <div className="text-center py-10 text-xl">No services found!</div>;
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className='grid grid-cols-12 gap-6'>
                {data.map((item: any) => (
                    <div 
                        className='col-span-12 md:col-span-6 lg:col-span-4 card bg-base-100 shadow-xl border' 
                        key={item._id.toString()}
                    >
                        <figure className="relative h-52 w-full">
                            <Image 
                                src={item.img} 
                                alt={item.title} 
                                fill 
                                className="object-cover"
                            />
                        </figure>
                        <div className="card-body p-5">
                            <h2 className="card-title text-2xl font-bold">{item.title}</h2>
                            <p className="text-orange-600 font-bold text-xl">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}