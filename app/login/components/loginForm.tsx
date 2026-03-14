"use client";
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Swal from 'sweetalert2';

export default function LoginForm() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    Swal.fire({ title: 'Signing in...', allowOutsideClick: false, didOpen: () => { Swal.showLoading(); } });

    // NextAuth এর মাধ্যমে লগইন লজিক
    const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // আমরা কাস্টম এলার্ট দেখাবো তাই false
    });

    if (res?.error) {
        Swal.fire({ icon: 'error', title: 'Login Failed', text: 'Invalid Email or Password', confirmButtonColor: '#FF3811' });
    } else {
        Swal.fire({ icon: 'success', title: 'Success', text: 'Logged in successfully!', confirmButtonColor: '#FF3811' })
        .then(() => {
            window.location.href = "/"; // সফল হলে হোম পেজে রিডাইরেক্ট
        });
    }
  };

  return (
    <div className="card w-full max-w-[570px] border border-[#E8E8E8] p-12 rounded-xl bg-white mx-auto shadow-sm">
      <h2 className="text-4xl font-bold text-center text-[#444444] mb-10">Login</h2>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="form-control">
          <label className="label py-1"><span className="label-text font-bold text-[#444444] text-lg">Email</span></label>
          <input type="email" name="email" placeholder="Your email" className="input input-bordered h-14 border-[#E8E8E8] focus:border-[#FF3811]" required />
        </div>
        <div className="form-control">
          <label className="label py-1"><span className="label-text font-bold text-[#444444] text-lg">Password</span></label>
          <input type="password" name="password" placeholder="Your password" className="input input-bordered h-14 border-[#E8E8E8] focus:border-[#FF3811]" required />
        </div>
        <div className="form-control mt-4">
          <button type="submit" className="btn bg-[#FF3811] hover:bg-[#e6320f] text-white border-none h-14 text-lg font-semibold rounded-lg">Sign In</button>
        </div>
      </form>
      {/* Social Login Buttons... (আগের মতোই থাকবে) */}
      <div className="text-center mt-10">
          <p className="text-[#444444] mb-6 font-medium text-base">Or Sign In with</p>
          <div className="flex justify-center gap-4">
              <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#3B5998] hover:bg-[#ebedf0] text-xl"><FaFacebookF /></button>
              <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#0A66C2] hover:bg-[#ebedf0] text-xl"><FaLinkedinIn /></button>
              <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#EA4335] hover:bg-[#ebedf0] text-xl"><FaGoogle /></button>
          </div>
          <p className="mt-10 text-[#737373] text-base">Have an account? <Link href="/register" className="text-[#FF3811] font-bold hover:underline">Sign Up</Link></p>
      </div>
    </div>
  )
}