import Image from 'next/image';
import React from 'react';
import dbConnect from '../lib/dbConnect';

export default async function ServicesSection() {
    const serviceCollection = dbConnect("services"); 
    const data = await serviceCollection.find({}).toArray();

    if (!data || data.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <span className="loading loading-dots loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Heading Section */}
            <div className="text-center mb-10 space-y-2">
                <h3 className="text-orange-600 font-bold text-xl">Service</h3>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p className="text-gray-500 max-w-xl mx-auto italic">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            {/* Card grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {data.map((item: any) => (
                    <div 
                        key={item._id.toString()}
                        className='group card bg-base-100 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                    >
                        {/* Image Section */}
                        <figure className="relative h-60 w-full overflow-hidden m-4 rounded-xl">
                            <Image 
                                src={item.img} 
                                alt={item.title} 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </figure>

                        {/* Card Content */}
                        <div className="card-body p-6 pt-0">
                            <h2 className="card-title text-2xl font-bold text-neutral">
                                {item.title}
                            </h2>
                            
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-orange-600 font-bold text-xl">
                                    Price: ${item.price}
                                </p>
                                
                                {/* Icon Button */}
                                <button className="btn btn-ghost btn-circle text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}