"use client";
import Image from "next/image";

import React from "react";

import { signIn } from "next-auth/react";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
 

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ১. বাম পাশের ইমেজ (Illustration) */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/login/login.svg" 
            width={460}
            height={500}
            alt="Login Illustration"
            priority
          />
        </div>

        {/* ২. ডান পাশের লগইন ফর্ম */}
       <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;