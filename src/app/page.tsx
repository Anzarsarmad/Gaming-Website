// app/page.tsx
"use client";

import Navbar from "./components/navbar";
import Image from "next/image";
import GamesSection from "./components/GamesSection";
import FeatureSection from "./components/FeatureSection";
import SportsSection from "./components/SportsSection";
import TestimonialSection from "./components/Testimonial";
import FooterSection from "./components/Footer";
import TopStrip from "./components/TopStrip";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col justify-center">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Background.png"
            alt="Background"
            fill
            priority
            className="object-cover brightness-110 saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/40" />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Content - Increased margin top */}
        <div className="relative flex flex-col items-start justify-center px-10 md:px-20 text-white max-w-3xl mt-32 md:mt-40">
          {/* Hero Title with three-line layout and exact gradient from image for EXPLORE only */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            LET YOUR<br />
            MIND{" "}
            <span className="bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent">
              EXPLORE
            </span>
            <br />
            NEW WORLD
          </h1>

          <p className="mt-6 text-gray-300">
            Playing electronic games, whether through consoles, computers, or
            mobile phones. Gaming is a nuanced term that suggests regular
            gameplay, possibly as a hobby.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">
            {/* BUY NOW Button */}
            <button className="px-12 py-4 text-white font-bold text-lg uppercase tracking-wider transform skew-x-[-12deg] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <span className="transform skew-x-12 block">BUY NOW</span>
            </button>

            {/* PLAY NOW Button - Fixed with white text */}
            <button className="px-12 py-4 text-white font-bold text-lg uppercase tracking-wider transform skew-x-[-12deg] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 relative overflow-hidden">
              {/* Gradient Border (creates the parallelogram shape) */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded transform skew-x-[-12deg]"></div>
              {/* Transparent Inner (shows the background) */}
              <div className="absolute inset-[2px] bg-transparent rounded-sm transform skew-x-[-12deg]"></div>
              {/* White Text */}
              <span className="relative transform skew-x-12 block text-white">
                PLAY NOW
              </span>
            </button>
          </div>

          {/* Stats - Only 200+ in gradient (keeping original blue-to-purple) */}
          <div className="flex gap-10 mt-16 text-center">
            <div>
              <h2 className="text-4xl font-bold text-white">300+</h2>
              <p className="text-gray-300 mt-2">Unique Style</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                200+
              </h2>
              <p className="text-gray-300 mt-2">Project Finished</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">500+</h2>
              <p className="text-gray-300 mt-2">Happy Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GAMES SECTION ===== */}
      <main className=" font-lato">
        <TopStrip />
        <GamesSection />
        <FeatureSection />
        <TopStrip />
        <SportsSection />
        <TopStrip />
        <TestimonialSection />
        <TopStrip />
      </main>
      <FooterSection />
    </div>
  );
}