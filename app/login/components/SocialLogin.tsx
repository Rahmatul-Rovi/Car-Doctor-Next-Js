"use client";

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from 'sweetalert2';

export default function SocialLogin() {
    const router = useRouter();
    const { data: session } = useSession(); // সেশন ডাটা ডিস্ট্রাকচার করে নিলাম

    // ১. হুক সবসময় ফাংশনের বাইরে থাকবে
    useEffect(() => {
        if (session?.user) {
            router.push("/");
        }
    }, [session, router]);

    const handleSocialLogin = async (providerName: string) => {
        try {
            // ২. সাইন ইন শুরু
            const result = await signIn(providerName, { 
                redirect: false,
                callbackUrl: "/" 
            });

            // ৩. যদি এরর থাকে
            if (result?.error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Login failed. Please try again.',
                    icon: 'error',
                });
                return;
            }

            // ৪. সাকসেস হলে (গুগল/গিটহাব অটোমেটিকলি ডাটা নিয়ে নেয়, তাই আলাদা চেক অনেক সময় লাগে না)
            if (result?.ok) {
                Swal.fire({
                    title: 'Login Successful!',
                    text: `Welcome back via ${providerName}`,
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });

                router.push('/');
                router.refresh(); 
            }
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    return (
        <div className="flex justify-center gap-4 mt-4">
            <button
                onClick={() => handleSocialLogin("google")}
                type="button"
                className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#EA4335] hover:bg-[#ebedf0] text-xl"
            >
                <FaGoogle />
            </button>

            <button
                onClick={() => handleSocialLogin("github")}
                type="button"
                className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#333] hover:bg-[#ebedf0] text-xl"
            >
                <FaGithub />
            </button>
        </div>
    );
}