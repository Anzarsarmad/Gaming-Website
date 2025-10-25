// app/components/GamesSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function GamesSection() {
  const [activeImage, setActiveImage] = useState(1);

  const handleImageClick = (imageId: number) => {
    setActiveImage(imageId);
  };

  const images = [
    { id: 2, src: "/Left image.png", alt: "Game Left" },
    { id: 1, src: "/centerimage.png", alt: "Main Game" },
    { id: 3, src: "/right image.png", alt: "Game Right" },
  ];

  const getImageSize = (imageId: number, isActive: boolean) => {
    if (isActive) {
      return { width: 384, height: 240, class: "w-72 sm:w-80 md:w-96 h-48 sm:h-52 md:h-60" };
    }
    return { width: 256, height: 160, class: "w-56 sm:w-60 md:w-64 h-36 sm:h-40 md:h-40" };
  };

  return (
    <section id="games" className="min-h-screen bg-gradient-to-br from-[#3b0066] via-[#4c008c] to-[#29004b] flex flex-col items-center justify-center text-white px-4 sm:px-6 pt-20 pb-12">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-4">
          CHOOSE YOUR
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-transparent bg-clip-text">
            FAVORITE
          </span>{" "}
          GAMES
        </h1>
        <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Offer sneak peeks and previews of upcoming games, including trailers, 
          screenshots, and information about release.
        </p>
      </div>

      {/* Game Images */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 w-full max-w-6xl">
        {images.map((image) => {
          const isActive = activeImage === image.id;
          const size = getImageSize(image.id, isActive);
          
          return (
            <div 
              key={image.id}
              onClick={() => handleImageClick(image.id)}
              className={`cursor-pointer transition-all duration-300 ${
                isActive 
                  ? "scale-105 sm:scale-110 z-20 border-4 border-pink-500 shadow-[0_0_25px_#ff00cc]" 
                  : "scale-100 opacity-80 hover:opacity-100 hover:scale-105"
              } rounded-xl overflow-hidden border-2 border-gray-500 ${size.class}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={size.width}
                height={size.height}
                className="object-cover w-full h-full"
              />
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-center py-2 sm:py-3 font-bold text-sm sm:text-base">
                  SNEAK PEEKS
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
        <button className="px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg transform skew-x-[-12deg] relative overflow-hidden group min-w-[140px]">
          <div className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] absolute inset-0 transform skew-x-[12deg] scale-110 group-hover:brightness-125 transition"></div>
          <span className="relative z-10 transform skew-x-[12deg] block text-white">
            VIEWALL
          </span>
        </button>

        <button className="px-8 sm:px-10 py-3 sm:py-4 font-bold text-base sm:text-lg transform skew-x-[-12deg] relative overflow-hidden group border-2 border-transparent bg-transparent min-w-[140px]">
          <div className="absolute inset-0 transform skew-x-[12deg] scale-110 border-2 border-transparent bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-border group-hover:shadow-[0_0_15px_#3333ff] transition"></div>
          <div className="absolute inset-[2px] transform skew-x-[12deg] bg-transparent"></div>
          <span className="relative z-10 transform skew-x-[12deg] block text-white">
            PLAYNOW
          </span>
        </button>
      </div>
    </section>
  );
}