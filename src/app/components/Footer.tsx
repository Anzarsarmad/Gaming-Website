"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white py-12 px-6 md:px-20 overflow-hidden">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/BgFooter.png"
          alt="Footer Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ===== Footer Content ===== */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
        {/* === Top Inline Section === */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* === Left Section (board text + description) === */}
          <div className="flex flex-col max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/Frame.png"
                alt="Board Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <h2 className="text-2xl font-bold">board</h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals.
            </p>
          </div>

          {/* === Center Links Inline === */}
          <div className="flex flex-wrap justify-start items-start gap-16 pr-40">
            {/* COMPANY */}
            <div>
              <h3 className="font-bold text-lg mb-4">COMPANY</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">Products</li>
                <li className="hover:text-white cursor-pointer">Apps & Games</li>
                <li className="hover:text-white cursor-pointer">Features</li>
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h3 className="font-bold text-lg mb-4">HELP</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">Support</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="font-bold text-lg mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                  YouTube Playlist
                </li>
                <li className="hover:text-white cursor-pointer">How To - Blog</li>
                <li className="hover:text-white cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>

          {/* === Face Image on Right === */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            
          </div>
        </div>

        {/* === Logos Row (aligned left, no underline) === */}
        <div className="flex flex-wrap justify-start gap-10">
          <Image src="/Twitch.png" alt="Twitch" width={80} height={40} />
          <Image src="/Roblox.png" alt="Roblox" width={80} height={40} />
          <Image src="/Asus.png" alt="Asus" width={80} height={40} />
          <Image src="/Canon.png" alt="Canon" width={80} height={40} />
          <Image src="/Microsoft.png" alt="Microsoft" width={80} height={40} />
        </div>

        {/* === Bottom Section (Icons + Copyright Together, aligned left) === */}
        <div className="flex justify-start items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-6 items-center">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>

            {/* Copyright */}
            <p className="text-gray-300 text-sm ml-4">
              © 2023 Board. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
