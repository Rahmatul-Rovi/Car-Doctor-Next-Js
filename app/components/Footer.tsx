import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {/* Column 1: Logo & Social */}
        <div className="space-y-6">
          <Image src="/assets/logo.svg" width={100} height={80} alt="Logo" />
          <p className="text-[#E8E8E8] leading-7">
            Edwin Diaz is a software house that offers a diverse range of services.
          </p>
          <div className="flex gap-3">
            <div className="bg-[#2c2c2c] p-3 rounded-full cursor-pointer hover:bg-[#FF3811] transition-all"><FaGoogle /></div>
            <div className="bg-[#2c2c2c] p-3 rounded-full cursor-pointer hover:bg-[#FF3811] transition-all"><FaTwitter /></div>
            <div className="bg-[#2c2c2c] p-3 rounded-full cursor-pointer hover:bg-[#FF3811] transition-all"><FaInstagram /></div>
            <div className="bg-[#2c2c2c] p-3 rounded-full cursor-pointer hover:bg-[#FF3811] transition-all"><FaLinkedin /></div>
          </div>
        </div>

        {/* Column 2: About */}
        <div>
          <h3 className="text-xl font-bold mb-6">About</h3>
          <ul className="space-y-4 text-[#E8E8E8]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Service</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-xl font-bold mb-6">Company</h3>
          <ul className="space-y-4 text-[#E8E8E8]">
            <li>Why Car Doctor</li>
            <li>About</li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h3 className="text-xl font-bold mb-6">Support</h3>
          <ul className="space-y-4 text-[#E8E8E8]">
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;