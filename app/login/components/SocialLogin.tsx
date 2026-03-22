"use client";

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from 'sweetalert2';

export default function SocialLogin() {
    const router = useRouter();
    const { data: session } = useSession(); 

    useEffect(() => {
        if (session?.user) {
            router.push("/");
        }
    }, [session, router]);

    const handleSocialLogin = async (providerName: string) => {
        try {
            // SignIn Start
            const result = await signIn(providerName, { 
                redirect: false,
                callbackUrl: "/" 
            });

            // if error
            if (result?.error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Login failed. Please try again.',
                    icon: 'error',
                });
                return;
            }

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