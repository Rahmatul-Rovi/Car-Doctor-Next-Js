"use client";

import React from 'react';
import Image from 'next/image';
import { FaTimes } from "react-icons/fa";
import Link from 'next/link';

export default function MyBookingsTable({ data }: { data: any[] }) {
    return (
        <div className="container mx-auto my-12 px-4">
            {/* Banner Section */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-12">
                <Image 
                    src="/assets/images/checkout/checkout.png" 
                    alt="Cart Details Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center px-20">
                    <div>
                        <h1 className="text-white text-5xl font-bold">Cart Details</h1>
                        <p className="text-[#FF3811] font-semibold mt-2">Home - My Bookings</p>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className="text-[#444] text-lg">
                            <th>Delete</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length > 0 ? (
                            data.map((booking) => (
                                <tr key={booking._id} className="border-b border-gray-100">
                                    <th>
                                        <button className="btn btn-circle btn-sm bg-[#444] text-white hover:bg-red-600 border-none">
                                            <FaTimes />
                                        </button>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-xl w-24 h-24 relative">
                                                    {/* ডাটাবেসে img ফিল্ড থাকলে সেটা দেখাবে, না থাকলে ডিফল্ট */}
                                                    <Image
                                                        src={booking?.serviceImg || "/assets/images/services/1.jpg"}
                                                        alt="Service"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-xl text-[#444]">{booking.serviceName}</div>
                                                <div className="text-sm opacity-50">Email: {booking.userEmail}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-semibold text-[#444] text-lg">
                                        ${booking.price}
                                    </td>
                                    <td className="font-medium text-[#444]">
                                        {booking.date || 'Not Scheduled'}
                                    </td>
                                    <th>
                                        <button className={`btn btn-ghost btn-md normal-case text-white px-8 rounded-lg ${booking.status === 'pending' ? 'bg-[#FF3811]' : 'bg-green-600'}`}>
                                            {booking.status || 'Pending'}
                                        </button>
                                    </th>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center py-20 text-2xl font-bold text-gray-400">
                                    No bookings found for your email.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-12">
                <Link href="/" className="flex items-center gap-2 cursor-pointer text-[#444]">
                    <span className="rotate-180">➜</span> 
                    <span className="font-medium">Continue Shopping</span>
                </Link>
                <div className="flex items-center gap-2 cursor-pointer text-[#444]">
                    <span>🗑️</span> 
                    <span className="font-medium">Clear Shopping Cart</span>
                </div>
            </div>
        </div>
    );
}