"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

function Navbar() {
  return (
    <div>
      {/* --- Laptop / Desktop Navbar --- */}
      <div className="hidden lg:flex justify-between items-center px-10 py-4 bg-[#0A192F] shadow-md fixed top-0 left-0 w-full z-50">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={55}
            height={55}
            className="object-contain"
          />
          <div translate="no">
            <span className="text-2xl font-semibold text-[#FFD700]" lang="ta">
              ஜே.சி.எம் மக்கள் மன்றம்
            </span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-6">
          <Link
            href="https://www.instagram.com/jcmitwing?igsh=MW9remZycHZmcDh5Mg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 text-[#E5E7EB] hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link
            href="https://www.facebook.com/jcmitwing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-[#E5E7EB] hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link
            href="https://www.youtube.com/@JCMITWING/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6 text-[#E5E7EB] hover:text-[#FFD700] transition-colors" />
          </Link>
        </div>
      </div>

      {/* --- Mobile Navbar --- */}
      <div className="flex lg:hidden justify-between items-center px-5 py-3 bg-[#0A192F] shadow-md fixed top-0 left-0 w-full z-50">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <div translate="no">
            <span className="text-sm font-semibold text-[#FFD700]" lang="ta">
              ஜே.சி.எம்<br /> மக்கள் மன்றம்
            </span>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/jcmitwing?igsh=MW9remZycHZmcDh5Mg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5 text-[#E5E7EB] hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link
            href="https://www.facebook.com/jcmitwing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5 text-[#E5E7EB] hover:text-[#FFD700] transition-colors" />
          </Link>
          <Link
            href="https://www.youtube.com/@JCMITWING/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5 text-[#E5E7EB] hover:text-[#FFD700] transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
