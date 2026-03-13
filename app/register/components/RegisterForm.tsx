"use client";
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { registerUser } from '@/app/actions/auth/registerUser';

export default function RegisterForm() {
    const handleRegister = async(e) => {
        e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    registerUser({name,email,password});
    // এখানে আপনার রেজিস্ট্রেশন লজিক লিখবেন
  };
  return (
    <div>
        {/* ডান পাশের ফর্ম সেকশন */}
  <div className="card w-full max-w-[570px] border border-[#E8E8E8] p-12 rounded-xl bg-white shadow-sm">
  <h2 className="text-4xl font-bold text-center text-[#444444] mb-10">Sign Up</h2>
  
  <form onSubmit={handleRegister} className="space-y-5">
    {/* Name Input */}
    <div className="form-control">
      <label className="label py-1">
        <span className="label-text font-bold text-[#444444] text-lg">Name</span>
      </label>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="input input-bordered h-14 border-[#E8E8E8] focus:outline-none focus:border-[#FF3811] text-base"
        required
      />
    </div>

    {/* Email Input */}
    <div className="form-control">
      <label className="label py-1">
        <span className="label-text font-bold text-[#444444] text-lg">Email</span>
      </label>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="input input-bordered h-14 border-[#E8E8E8] focus:outline-none focus:border-[#FF3811] text-base"
        required
      />
    </div>

    {/* Confirm Password Input */}
    <div className="form-control">
      <label className="label py-1">
        <span className="label-text font-bold text-[#444444] text-lg">Confirm Password</span>
      </label>
      <input
        type="password"
        name="password"
        placeholder="Your password"
        className="input input-bordered h-14 border-[#E8E8E8] focus:outline-none focus:border-[#FF3811] text-base"
        required
      />
    </div>

    {/* Sign Up Button */}
    <div className="form-control mt-4">
      <button className="btn bg-[#FF3811] hover:bg-[#e6320f] text-white border-none h-14 text-lg font-semibold rounded-lg transition-all">
        Sign Up
      </button>
    </div>
  </form>

  {/* Social Register Section */}
  <div className="text-center mt-10">
    <p className="text-[#444444] mb-6 font-medium text-base">Or Sign Up with</p>
    
    <div className="flex justify-center gap-4">
      <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#3B5998] hover:bg-[#ebedf0] text-xl">
        <FaFacebookF />
      </button>
      <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#0A66C2] hover:bg-[#ebedf0] text-xl">
        <FaLinkedinIn />
      </button>
      <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#EA4335] hover:bg-[#ebedf0] text-xl">
        <FaGoogle />
      </button>
    </div>
    
    <p className="mt-10 text-[#737373] text-base">
      Already have an account?{" "}
      <Link href="/login" className="text-[#FF3811] font-bold hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>
    </div>
  )
}
