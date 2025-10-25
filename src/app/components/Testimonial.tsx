// app/components/TestimonialSection.tsx
"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section 
      id="testimonials"
      className="relative w-full py-20 px-6 md:px-20 text-white overflow-hidden font-lato"
      style={{
        background: "linear-gradient(135deg, #3b0066 0%, #4c008c 35%, #5b21b6 70%, #7e22ce 100%)",
      }}
    >
      {/* ===== Content ===== */}
      <div className="max-w-6xl mx-auto relative">
        {/* Flex container for both testimonials */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* First Testimonial Card */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 relative">
            {/* Two Small Decorations on Right Side Top */}
            <div className="absolute -top-1 right-8 flex flex-col gap-1">
              <div className="w-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full ml-auto"></div>
            </div>
            
            {/* Star Rating */}
            <div className="text-2xl text-yellow-400 mb-6">★★★★★</div>

            {/* Testimonial Text */}
            <p className="text-lg leading-relaxed mb-8 text-white/90">
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </p>

            {/* White Divider Line */}
            <div className="w-full h-px bg-white/30 mb-6"></div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              {/* Profile Picture */}
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-2 border-white/30">
                <Image
                  src="/Card7.png"
                  alt="Arlene McCoy"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-normal text-lg text-white">Arlene McCoy</h4>
                <p className="text-white/70 font-normal">NATIONALISTS</p>
              </div>
              {/* Verified with Tick */}
              <div className="flex items-center gap-2 text-green-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-normal">Verified</span>
              </div>
            </div>
          </div>

          {/* Second Testimonial Card */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 relative">
            {/* Two Small Decorations on Right Side Top */}
            <div className="absolute -top-1 right-8 flex flex-col gap-1">
              <div className="w-6 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full ml-auto"></div>
            </div>
            
            {/* Star Rating */}
            <div className="text-2xl text-yellow-400 mb-6">★★★★★</div>

            {/* Testimonial Text */}
            <p className="text-lg leading-relaxed mb-8 text-white/90">
              Another aspect that sets this website apart is its vibrant and
              passionate community. The forum section provides a platform for
              gamers from all walks of life to connect, share experiences, and
              discuss their favorite titles. Ive made valuable friendships and
              found like-minded individuals who share my enthusiasm for gaming.
            </p>

            {/* White Divider Line */}
            <div className="w-full h-px bg-white/30 mb-6"></div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              {/* Profile Picture */}
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-2 border-white/30">
                <Image
                  src="/Card8.png"
                  alt="Kathryn Murphy"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-normal text-lg text-white">Kathryn Murphy</h4>
                <p className="text-white/70 font-normal">General Electric</p>
              </div>
              {/* Verified with Tick */}
              <div className="flex items-center gap-2 text-green-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-normal">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}