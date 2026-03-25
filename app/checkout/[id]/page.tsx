import CheckoutForm from '@/app/components/forms/CheckoutForm';
import React from 'react'

export default async function CheckoutPage({params}) {
    const p = await params;
    
    // Data Fetch
    const res = await fetch(`http://localhost:3000/api/services/${p.id}`);
    const serviceData = await res.json(); 

    return (
        <div>
            {/* Props Data */}
            <CheckoutForm data={serviceData} />
        </div>
    )
}