"use client";

import React from 'react';
import Image from 'next/image';

export default function CheckoutForm() {
    
    const handleOrderConfirm = (e: React.FormEvent) => {
        e.preventDefault();
        // আপনার বুকিং লজিক এখানে লিখুন
        console.log("Order Confirmed");
    };

    return (
        <div className="container mx-auto my-12 px-4">
            {/* Banner Section */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-12">
                <Image 
                    src="/assets/images/checkout/checkout.png" // আপনার ইমেজ পাথ চেক করে নিন
                    alt="Check Out Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center px-20">
                    <h1 className="text-white text-5xl font-bold">Check Out</h1>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="bg-[#FF3811] text-white px-10 py-2 rounded-t-3xl font-semibold">
                        Home/Checkout
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-[#F3F3F3] p-10 lg:p-24 rounded-xl">
                <form onSubmit={handleOrderConfirm}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            className="input w-full p-4 rounded-lg bg-white border-none focus:outline-[#FF3811]"
                            required
                        />
                        {/* Last Name */}
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            className="input w-full p-4 rounded-lg bg-white border-none focus:outline-[#FF3811]"
                            required
                        />
                        {/* Your Phone */}
                        <input 
                            type="text" 
                            placeholder="Your Phone" 
                            className="input w-full p-4 rounded-lg bg-white border-none focus:outline-[#FF3811]"
                            required
                        />
                        {/* Your Email */}
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="input w-full p-4 rounded-lg bg-white border-none focus:outline-[#FF3811]"
                            required
                        />
                    </div>
                    
                    {/* Your Message */}
                    <textarea 
                        placeholder="Your Message" 
                        className="textarea w-full p-4 rounded-lg bg-white border-none focus:outline-[#FF3811] mt-6 h-64"
                    ></textarea>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="btn w-full bg-[#FF3811] hover:bg-[#e0310d] text-white border-none mt-6 py-4 text-xl font-bold rounded-lg"
                    >
                        Order Confirm
                    </button>
                </form>
            </div>
        </div>
    );
}