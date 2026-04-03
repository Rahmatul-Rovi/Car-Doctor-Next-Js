"use client";

import React from 'react';
import Swal from 'sweetalert2';

// ✅ Type define করুন
type Booking = {
    _id: string;
    serviceName?: string;
    phone?: string;
    date?: string;
    message?: string;
    email?: string;
}

type Props = {
    booking: Booking;
    onClose: () => void;
    onUpdate: () => void;
}

export default function BookingUpdateForm({ booking, onClose, onUpdate }: Props) { // ✅ type দিন
    
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => { // ✅ event type
        e.preventDefault();
        const form = e.target as HTMLFormElement; // ✅ form type
        
        const updatedData = {
            phone: form.phone.value,
            date: form.date.value,
            message: form.message.value,
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-bookings/${booking._id}`, { // ✅ localhost সরানো
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        if (res.ok) {
            Swal.fire({
                title: "Success!",
                text: "Booking updated successfully",
                icon: "success"
            });
            onUpdate();
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-2xl relative">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
                >
                    ✕
                </button>
                
                <h2 className="text-2xl font-bold mb-6 text-[#444]">Update Booking</h2>
                <p className="mb-4 text-sm text-gray-600">Service: <span className="font-bold">{booking?.serviceName}</span></p>

                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-semibold">Phone Number</label>
                        <input 
                            type="text" 
                            name="phone" 
                            defaultValue={booking?.phone} 
                            className="input input-bordered w-full focus:border-[#FF3811]" 
                            required 
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold">Appointment Date</label>
                        <input 
                            type="date" 
                            name="date" 
                            defaultValue={booking?.date} 
                            className="input input-bordered w-full focus:border-[#FF3811]" 
                            required 
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-semibold">Extra Message</label>
                        <textarea 
                            name="message" 
                            defaultValue={booking?.message} 
                            className="textarea textarea-bordered h-24 focus:border-[#FF3811]"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button 
                            type="submit" 
                            className="btn bg-[#FF3811] hover:bg-[#e3320f] text-white w-full border-none"
                        >
                            Confirm Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}