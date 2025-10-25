// app/components/TopStrip.tsx
"use client";

export default function TopStrip() {
  const stripItems = [
    "GAME SPANING",
    "ACTION - PACKED", 
    "MIND - BENDING",
    "COLLECTION OG G"
  ];

  return (
    <div className="w-full bg-transparent py-3 lg:py-4 transform -skew-y-2">
      <div className="container mx-auto px-4 transform skew-y-2">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center flex-wrap gap-4 lg:gap-8">
          {stripItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="text-lg bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent">
                ★
              </div>
              <span className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider whitespace-nowrap">
                {item}
              </span>
              <div className="text-lg bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent">
                ★
              </div>
              {index < stripItems.length - 1 && (
                <div className="text-white font-bold text-lg mx-2">+</div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-3">
          {stripItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="text-base bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent">
                ★
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-wider">
                {item}
              </span>
              <div className="text-base bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-transparent">
                ★
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}