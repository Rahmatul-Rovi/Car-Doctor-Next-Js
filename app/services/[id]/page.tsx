
import Image from 'next/image';
import React from 'react';

export default async function ServiceDetailspage({ params }) {

  const p = await params;
    const res = await fetch(`http://localhost:3000/api/services/${p.id}`);
    const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* Banner Section */}

      <section className="mt-6">
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden">

          <Image
            src="/assets/images/checkout/checkout.png"
            fill
            alt="banner"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center">

            <div className="text-white px-10">

              <h1 className="text-4xl font-bold">
                Service Details
              </h1>

              <p className="mt-2 text-sm">
                Home / Service Details
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}

      <section className="grid md:grid-cols-3 gap-10 mt-16">

        {/* Left Content */}

        <div className="md:col-span-2">

          <Image
            src={data.img}
            width={750}
            height={450}
            alt={data.title}
            className="rounded-xl"
          />

          <h1 className="text-3xl font-bold mt-6">
            {data.title}
          </h1>

          <p className="mt-4 text-gray-500">
            {data.description}
          </p>

        </div>


        {/* Right Sidebar */}

        <div className="space-y-6">

          {/* Services List */}

          <div className="bg-gray-100 p-6 rounded-xl">

            <h2 className="text-xl font-bold mb-4">
              Services
            </h2>

            <div className="space-y-3">

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg">
                Full Car Repair
              </button>

              <button className="w-full bg-white py-3 rounded-lg border">
                Engine Repair
              </button>

              <button className="w-full bg-white py-3 rounded-lg border">
                Automatic Services
              </button>

              <button className="w-full bg-white py-3 rounded-lg border">
                Engine Oil Change
              </button>

              <button className="w-full bg-white py-3 rounded-lg border">
                Battery Charge
              </button>

            </div>

          </div>


          {/* Price Card */}

          <div className="bg-black text-white p-6 rounded-xl text-center">

            <h2 className="text-2xl font-bold">
              Price ${data.price}
            </h2>

            <button className="mt-6 w-full bg-orange-500 py-3 rounded-lg">
              Proceed Checkout
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}