"use client";
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { registerUser } from '@/app/actions/auth/registerUser';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'; // ১. সুইট এলার্ট ইমপোর্ট করা হয়েছে

export default function RegisterForm() {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        // ২. লোডিং স্টেট দেখানোর জন্য (ঐচ্ছিক কিন্তু ভালো প্র্যাকটিস)
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we create your account',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const result = await registerUser({ name, email, password });

        // ৩. রেজাল্ট অনুযায়ী এলার্ট দেখানো
        if (result?.success) {
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'Welcome to Car Doctor!',
                confirmButtonColor: '#FF3811', // আপনার ব্রান্ড কালার
            }).then(() => {
                form.reset();
                router.push('/login'); 
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result?.error || "Registration Failed!",
                confirmButtonColor: '#FF3811',
            });
        }
    };

    return (
        <div>
            <div className="card w-full max-w-[570px] border border-[#E8E8E8] p-12 rounded-xl bg-white shadow-sm">
                <h2 className="text-4xl font-bold text-center text-[#444444] mb-10">Sign Up</h2>
                
                <form onSubmit={handleRegister} className="space-y-5">
                    <div className="form-control">
                        <label className="label py-1">
                            <span className="label-text font-bold text-[#444444] text-lg">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered h-14 border-[#E8E8E8] focus:outline-none focus:border-[#FF3811]" required />
                    </div>

                    <div className="form-control">
                        <label className="label py-1">
                            <span className="label-text font-bold text-[#444444] text-lg">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered h-14 border-[#E8E8E8] focus:outline-none focus:border-[#FF3811]" required />
                    </div>

                    <div className="form-control">
                        <label className="label py-1">
                            <span className="label-text font-bold text-[#444444] text-lg">Confirm Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Your password" className="input input-bordered h-14 border-[#E8E8E8] focus:outline-none focus:border-[#FF3811]" required />
                    </div>

                    <div className="form-control mt-4">
                        <button type="submit" className="btn bg-[#FF3811] hover:bg-[#e6320f] text-white border-none h-14 text-lg font-semibold rounded-lg">
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="text-center mt-10">
                    <p className="text-[#444444] mb-6 font-medium">Or Sign Up with</p>
                    <div className="flex justify-center gap-4">
                        <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#3B5998] hover:bg-[#ebedf0] text-xl"><FaFacebookF /></button>
                        <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#0A66C2] hover:bg-[#ebedf0] text-xl"><FaLinkedinIn /></button>
                        <button className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#EA4335] hover:bg-[#ebedf0] text-xl"><FaGoogle /></button>
                    </div>
                    <p className="mt-10 text-[#737373]">
                        Already have an account? <Link href="/login" className="text-[#FF3811] font-bold hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}