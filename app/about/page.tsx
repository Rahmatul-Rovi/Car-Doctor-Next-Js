import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Images */}
        <div className="lg:w-1/2 relative">
          <div className="relative w-3/4 h-[400px]">
            <Image
              src="/assets/images/about_us/person.jpg"
              alt="Person"
              fill
              className="rounded-xl object-cover shadow-2xl"
            />
          </div>
          <div className="absolute right-0 top-1/2 w-1/2 h-64 border-8 border-white rounded-xl shadow-2xl">
            <Image
              src="/assets/images/about_us/parts.jpg"
              alt="Parts"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-[#FF3811] text-xl font-bold italic">About Us</h3>
          <h2 className="text-5xl font-bold text-[#151515] leading-tight">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p className="text-[#737373] leading-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. 
          </p>
          <p className="text-[#737373] leading-7">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. 
          </p>
          <button className="btn bg-[#FF3811] border-none text-white px-8 hover:bg-red-700">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;