"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0A192F] text-[#F9FAFB] mt-10 w-full">
      {/* --- Laptop / Desktop Footer --- */}
      <div className="hidden lg:flex flex-col items-center space-y-6">
        {/* Footer Image */}
        <div className="">
          <Image
            src="/tag.png"
            alt="Footer Image"
            width={400}
            height={128}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contact Info */}
        <p className="text-center text-lg">
          Contact us: info@jcmitwing.com | +91 12345 67890
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <Link href="https://www.instagram.com/jcmitwing" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link href="https://www.facebook.com/jcmitwing" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/@JCMITWING/videos" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-6 h-6 hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link href="https://twitter.com/jcmitwing" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-[#FFD700] transition-colors" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#E5E7EB] pb-8">© JCMITWING</p>
      </div>

      {/* --- Mobile Footer --- */}
      <div className="flex flex-col lg:hidden items-center px-4 mt-6 space-y-3">
        {/* Footer Image */}
        <div className="mx-auto">
          <Image
            src="/tag.png"
            alt="Footer Image"
            width={300}
            height={112}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contact Info */}
        <p className="text-center text-sm">
          Contact us: info@jcmitwing.com | +91 12345 67890
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com/jcmitwing" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link href="https://www.facebook.com/jcmitwing" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/@JCMITWING/videos" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link href="https://twitter.com/jcmitwing" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 hover:text-[#FFD700] transition-colors" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#E5E7EB] pb-8">© JCMITWING</p>
      </div>
    </footer>
  );
}

export default Footer;
