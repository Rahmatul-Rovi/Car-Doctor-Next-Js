import CheckoutForm from '@/app/components/forms/CheckoutForm';
import React from 'react'

export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) { // ✅ type দিন
    const p = await params;
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${p.id}`); // ✅ localhost এর বদলে env variable
    const serviceData = await res.json(); 

    return (
        <div>
            <CheckoutForm data={serviceData} />
        </div>
    )
}