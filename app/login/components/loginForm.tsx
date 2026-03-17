"use client";
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';

export default function LoginForm() {
 const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    Swal.fire({
        title: 'Logging in...',
        didOpen: () => { Swal.showLoading() }
    });

    // NextAuth এর signIn মেথড কল করা
    const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
    });

    if (res?.error) {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid email or password!',
            confirmButtonColor: '#FF3811'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Welcome Back!',
            text: 'Login successful!',
            confirmButtonColor: '#FF3811'
        }).then(() => {
            window.location.href = "/";
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
     <SocialLogin/>

      <p className="mt-10 text-[#737373]">
                        Don't have an account? <Link href="/register" className="text-[#FF3811] font-bold hover:underline">Register</Link>
                    </p>
    </div>
  )
}