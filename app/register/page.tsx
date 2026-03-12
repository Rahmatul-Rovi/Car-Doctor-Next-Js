"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // এখানে আপনার রেজিস্ট্রেশন লজিক লিখবেন
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* বাম পাশের ইমেজ সেকশন */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/login.svg" // আপনার দেওয়া লোকেশন
            width={460}
            height={500}
            alt="Register Illustration"
            priority
          />
        </div>

        {/* ডান পাশের ফর্ম সেকশন */}
        <div className="card w-full border border-gray-200 p-10 rounded-xl">
          <h2 className="text-4xl font-bold text-center text-[#444444] mb-8">Sign Up</h2>
          
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered h-14 focus:border-[#FF3811] outline-none"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered h-14 focus:border-[#FF3811] outline-none"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered h-14 focus:border-[#FF3811] outline-none"
                required
              />
            </div>

            {/* Sign Up Button */}
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] hover:bg-[#e6320f] text-white border-none h-14 text-lg font-bold">
                Sign Up
              </button>
            </div>
          </form>

          {/* Social Register */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6 font-medium">Or Sign Up with</p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-circle btn-ghost bg-gray-100 text-blue-600 hover:bg-gray-200">
                <FaFacebookF size={20} />
              </button>
              <button className="btn btn-circle btn-ghost bg-gray-100 text-blue-400 hover:bg-gray-200">
                <FaLinkedinIn size={20} />
              </button>
              <button className="btn btn-circle btn-ghost bg-gray-100 text-red-500 hover:bg-gray-200">
                <FaGoogle size={20} />
              </button>
            </div>
            
            <p className="mt-8 text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#FF3811] font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;