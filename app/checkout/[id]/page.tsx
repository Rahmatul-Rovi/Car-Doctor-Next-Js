import CheckoutForm from '@/app/components/forms/CheckoutForm';
import React from 'react'

export default async function CheckoutPage({params}) {
    const p = await params;
    
    // ১. ডাটা ফেচ করছেন ঠিক আছে
    const res = await fetch(`http://localhost:3000/api/services/${p.id}`);
    const serviceData = await res.json(); // নামটা 'serviceData' দিলাম যাতে বুঝতে সুবিধা হয়

    return (
        <div>
            {/* ২. এখানে 'data' প্রপস হিসেবে ডাটা-টা পাঠাতে হবে */}
            <CheckoutForm data={serviceData} />
        </div>
    )
}