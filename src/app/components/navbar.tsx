// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to: ${sectionId}`);
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      console.log(`Element found for ${sectionId}`);
      
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.log(`Element with id '${sectionId}' not found!`);
      console.log('Available sections:', 
        ['games', 'feature', 'sports', 'testimonials'].map(id => ({
          id,
          exists: !!document.getElementById(id)
        }))
      );
    }
  };

  return (
    <nav className="w-full bg-transparent text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => scrollToSection('games')}
        >
          <Image
            src="/Frame.png"
            alt="logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold">board</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-sm tracking-wide font-[family-name:var(--font-lato)]">
          <li 
            className="font-semibold hover:text-pink-400 cursor-pointer transition-all duration-500 hover:scale-110"
            onClick={() => scrollToSection('games')}
          >
            PRODUCTS
          </li>
          <li 
            className="font-thin hover:text-pink-400 cursor-pointer transition-all duration-500 hover:scale-110"
            onClick={() => scrollToSection('games')}
          >
            APPS & GAMES
          </li>
          <li 
            className="font-thin hover:text-pink-400 cursor-pointer transition-all duration-500 hover:scale-110"
            onClick={() => scrollToSection('feature')}
          >
            FEATURES
          </li>
          <li 
            className="font-thin hover:text-pink-400 cursor-pointer transition-all duration-500 hover:scale-110"
            onClick={() => scrollToSection('sports')}
          >
            SUPPORT
          </li>
          <li 
            className="font-thin hover:text-pink-400 cursor-pointer transition-all duration-500 hover:scale-110"
            onClick={() => scrollToSection('testimonials')}
          >
            ABOUT
          </li>
        </ul>

        {/* Cart Icon */}
        <button className="p-2 hover:text-pink-400 transition-all duration-500 hover:scale-110">
          <ShoppingBag size={22} />
        </button>
      </div>
    </nav>
  );
}