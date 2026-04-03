import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Get the data from API
const ServicesPage = async () => {
    // Here Service Api Call
    // const res = await fetch('http://localhost:3000/api/services');
    // const services = await res.json();

    const services = [
        { _id: "1", title: "Electrical System", price: 20, img: "/assets/images/services/1.jpg" },
        { _id: "2", title: "Engine Repair", price: 200, img: "/assets/images/services/2.jpg" },
        { _id: "3", title: "Automatic Transmission", price: 150, img: "/assets/images/services/3.jpg" },
        { _id: "4", title: "Engine Oil Change", price: 50, img: "/assets/images/services/4.jpg" },
        { _id: "5", title: "Battery Charge", price: 20, img: "/assets/images/services/5.jpg" },
        { _id: "6", title: "Brake Fluid Change", price: 30, img: "/assets/images/services/6.jpg" },
    ];

    return (
        <div className="container mx-auto my-12 px-4">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-12">
                <h3 className="text-[#FF3811] font-bold text-xl">Service</h3>
                <h2 className="text-5xl font-bold text-[#151515]">Our Service Area</h2>
                <p className="text-[#737373] w-1/2 mx-auto">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service._id} className="card card-compact bg-base-100 shadow-xl border border-gray-200 p-5">
                        <figure className="h-52 overflow-hidden rounded-xl">
                            <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold text-[#444]">{service.title}</h2>
                            <div className="flex justify-between items-center text-[#FF3811] font-bold text-xl mt-2">
                                <p>Price: ${service.price}</p>
                                <Link href={`/services/${service._id}`}>
                                    <button className="text-2xl">➔</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] px-8">
                    More Services
                </button>
            </div>
        </div>
    );
};

export default ServicesPage;