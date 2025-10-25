"use client";

import Image from "next/image";

export default function FeatureSection() {
  return (
    <section id="feature" className="w-full py-20 px-6 md:px-20 bg-gradient-to-br from-[#2a0066] via-[#3b007d] to-[#150033] flex flex-col md:flex-row items-center justify-center gap-10 text-white">
      
      {/* Left Side - Image (Overlayed and Bigger) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_#a855f7]">
          <Image
            src="/FeatureBg.png"
            alt="Virtual Reality"
            fill
            className="object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#2a0066] opacity-80"></div>
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          DISCOVER THE <br />
          <span className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-transparent bg-clip-text">
              VIRTUAL
            </span>{" "}
            REALITY
          </span> <br />
          GAMING
        </h2>
        <p className="text-gray-300 mt-6 text-base md:text-lg max-w-md leading-relaxed">
          A well-designed gaming header often incorporates elements<br />
          such as game characters, iconic symbols, vibrant colors, and<br />
          dynamic visuals to convey excitement, adventure, and the<br />
          immersive nature of gaming.
        </p>

        {/* PLAY NOW Button - Parallelogram with White Text */}
        <button className="mt-8 px-12 py-4 font-bold text-lg transform skew-x-[-12deg] relative overflow-hidden group border-2 border-transparent bg-transparent">
          <div className="absolute inset-0 transform skew-x-[12deg] scale-110 border-2 border-transparent bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-border group-hover:shadow-[0_0_15px_#3333ff] transition"></div>
          <div className="absolute inset-[2px] transform skew-x-[12deg] bg-transparent"></div>
          <span className="relative z-10 transform skew-x-[12deg] block text-white">
            PLAY NOW
          </span>
        </button>
      </div>
    </section>
  );
}