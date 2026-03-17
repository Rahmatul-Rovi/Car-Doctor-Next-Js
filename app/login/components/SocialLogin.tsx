"use client"; // ক্লায়েন্ট সাইড কম্পোনেন্ট নিশ্চিত করুন

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // router এর বদলে navigation হবে
import React, { useEffect } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from 'sweetalert2'; // SweetAlert2 ইমপোর্ট করুন

export default function SocialLogin() {
    const router = useRouter();
    const session = useSession();

   const handleSocialLogin = async (providerName: string) => {
    try {
        // ১. সাইন ইন শুরু - এখানে redirect: true দিলে অনেক সময় ঝামেলা কমে যায়
        const result = await signIn(providerName, { 
            redirect: false,
            callbackUrl: "/" // লগইন শেষে কোথায় যাবে সেটা আগে থেকেই বলে দিন
        });

        useEffect(() => {
            if(session?.user){
                router.push("/");
            }
        }, [])

        // ২. চেক করুন রেজাল্টে কোনো এরর আছে কি না
        if (result?.error) {
            Swal.fire({
                title: 'Error!',
                text: 'Login failed. Please try again.',
                icon: 'error',
            });
            return;
        }

        // ৩. যদি এরর না থাকে (অর্থাৎ সাকসেস)
        if (result?.ok) {
            Swal.fire({
                title: 'Login Successful!',
                text: `Welcome back via ${providerName}`,
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });

            // ৪. হোম পেজে পাঠিয়ে দিন
            router.push('/');
            router.refresh(); 
        }
    } catch (error) {
        console.error("Login Error:", error);
    }
};

    return (
        <div className="flex justify-center gap-4 mt-4">
            {/* Google Login Button */}
            <button
                onClick={() => handleSocialLogin("google")}
                type="button"
                className="btn btn-circle btn-ghost bg-[#F5F5F8] text-[#EA4335] hover:bg-[#ebedf0] text-xl"
            >
                <FaGoogle />
            </button>

            {/* GitHub Login Button */}
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