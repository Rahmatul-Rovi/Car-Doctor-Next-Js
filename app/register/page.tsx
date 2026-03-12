"use client";
import Image from "next/image";

import React from "react";
import RegisterForm from "./components/RegisterForm";


const RegisterPage = () => {
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* বাম পাশের ইমেজ সেকশন */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/login/login.svg" // আপনার দেওয়া লোকেশন
            width={460}
            height={500}
            alt="Register Illustration"
            priority
          />
        </div>

      <RegisterForm/>
      </div>
    </div>
  );
};

export default RegisterPage;