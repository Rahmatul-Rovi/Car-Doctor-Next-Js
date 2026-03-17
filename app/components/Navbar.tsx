"use client";

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const {data:session , status} = useSession();
  console.log(session);
  const navMenu = () => {
    return (
       <>
       <li>
        <Link href="/">Home</Link>
       </li>
       
        <li>
        <Link href="/about">About</Link>
       </li>

         <li>
        <Link href="/services">Services</Link>
       </li>

         <li>
        <Link href="/blog">Blog</Link>
       </li>

         <li>
        <Link href="/contact">Contact</Link>
       </li>
      </>
    )
     
    
  }
  return (
    <div>
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navMenu()}
      </ul>
    </div>
    <Link href="/" className=" text-xl">
      <Image src={'/assets/logo.svg'} width={107} height={87} alt="Car Doctor Logo"/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
      navMenu()
     }
    </ul>
  </div>
 <div className="navbar-end gap-4">
  {/* রেজিস্ট্রেশন বাটন */}
  {status == 'authenticated' ? (<>
  <li><image src={session?.image} width={20} height={20} alt="user-logo" /></li>
  <li onClick={()=>signOut()}> LogOut</li>
  </>) : (
    <>
     <Link href="/register" className="font-semibold hover:text-[#FF3811] transition-colors">
    Register
  </Link>

   <Link href="/login" className="font-semibold hover:text-[#FF3811] transition-colors">
    Login
  </Link>
    </>
  )}
 
  
  {/* আপনার আগের অ্যাপয়েন্টমেন্ট বাটন */}
  <button className="btn btn-outline border-[#FF3811] text-[#FF3811]">
    Appointment
  </button>
</div>
</div>
    </div>
  )
}
