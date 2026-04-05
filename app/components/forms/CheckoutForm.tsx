"use client";

import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

export default function CheckoutForm({ data }: { data: any }) {
    const { data: session } = useSession();

    const handleOrderConfirm = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Data Collect from the form
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
        const price = (form.elements.namedItem('price') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        const orderData = {
            userName: name,
            userEmail: email,
            phone,
            price,
            message,
            serviceName: data?.title,
            serviceId: data?._id,
            status: 'pending' // Default Status pending
        };

        try {
            // Save this to the database
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData),
            });

            if (res.ok) {
                // Success message show
                Swal.fire({
                    title: 'Success!',
                    text: 'Your order has been placed successfully.',
                    icon: 'success',
                    confirmButtonColor: '#FF3811',
                    confirmButtonText: 'Great!'
                });
                
                //Form reset after the confirm
                form.reset(); 
            } else {
                // If any error
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to place order. Please try again.',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error("Order POST Error:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Check your server.',
                icon: 'error',
            });
        }
    };

    return (
        <div className="container mx-auto my-12 px-4">
            {/* Banner Section */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-12">
                <Image 
                    src="/assets/images/checkout/checkout.png" 
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
                        {/* Full Name (Read Only) */}
                        <div className="form-control">
                            <label className="label"><span className="label-text font-semibold">Name</span></label>
                            <input 
                                name="name"
                                type="text" 
                                defaultValue={session?.user?.name || ''}
                                readOnly
                                className="input w-full p-4 rounded-lg bg-white border-none focus:outline-none cursor-not-allowed"
                            />
                        </div>

                        {/* User Email (Read Only) */}
                        <div className="form-control">
                            <label className="label"><span className="label-text font-semibold">Email</span></label>
                            <input 
                                name="email"
                                type="email" 
                                defaultValue={session?.user?.email || ''}
                                readOnly
                                className="input w-full p-4 rounded-lg bg-white border-none focus:outline-none cursor-not-allowed"
                            />
                        </div>

                        {/* Price (Read Only) */}
                        <div className="form-control">
                            <label className="label"><span className="label-text font-semibold">Service Price</span></label>
                            <input 
                                name="price"
                                type="text" 
                                defaultValue= {data?.price}
                                readOnly
                                className="input w-full p-4 rounded-lg bg-white border-none focus:outline-none cursor-not-allowed"
                            />
                        </div>

                        {/* Phone Number (Editable) */}
                        <div className="form-control">
                            <label className="label"><span className="label-text font-semibold">Your Phone</span></label>
                            <input 
                                name="phone"
                                type="text" 
                                placeholder="Enter your phone number" 
                                className="input w-full p-4 rounded-lg bg-white border-none focus:outline-[#FF3811]"
                                required
                            />
                        </div>
                    </div>
                    
                    {/* Your Message Section */}
                    <div className="form-control mt-6">
                        <label className="label"><span className="label-text font-semibold">Additional Message</span></label>
                        <textarea 
                            name="message"
                            placeholder="Write any special requirements..." 
                            className="textarea w-full p-4 rounded-lg bg-white border-none focus:outline-[#FF3811] h-48"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="btn w-full bg-[#FF3811] hover:bg-[#e0310d] text-white border-none mt-8 py-4 text-xl font-bold rounded-lg"
                    >
                        Order Confirm
                    </button>
                </form>
            </div>
        </div>
    );
}