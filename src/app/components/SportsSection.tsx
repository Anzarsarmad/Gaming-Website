// app/components/SportsSection.tsx
"use client";

import Image from "next/image";

export default function SportsSection() {
  const games = [
    {
      id: 1,
      title: "Core Philosophies",
      img: "/Card1.png",
      userImg: "/Pfp1.png",
      user: "Cameron Williamson",
      company: "Gillette",
    },
    {
      id: 2,
      title: "Cyber Legends",
      img: "/Card2.png",
      userImg: "/Pfp2.png",
      user: "Dianne Russell",
      company: "Louis Vuitton",
    },
    {
      id: 3,
      title: "Shadow Racers",
      img: "/Card3.png",
      userImg: "/Pfp3.png",
      user: "Jane Cooper",
      company: "MasterCard",
    },
    {
      id: 4,
      title: "Galaxy Fighters",
      img: "/Card4.png",
      userImg: "/Pfp4.png",
      user: "Robert Fox",
      company: "PlayStation",
    },
    {
      id: 5,
      title: "Space Invaders",
      img: "/Card5.png",
      userImg: "/Pfp5.png",
      user: "Devon Lane",
      company: "Electronic Arts",
    },
    {
      id: 6,
      title: "Neon Strike",
      img: "/Card6.png",
      userImg: "/Pfp6.png",
      user: "Leslie Alexander",
      company: "Ubisoft",
    },
  ];

  const categories = [
    "NEWEST GAMES",
    "LATEST GAMES",
    "FIGHT GAMES",
    "SPORT GAMES",
  ];

  return (
    <section id="sports" className="min-h-screen bg-gradient-to-br from-[#3b0066] via-[#4c008c] to-[#29004b] flex flex-col items-center justify-center px-6 py-20 text-white font-lato">
      {/* ===== Heading ===== */}
      <h2 className="text-4xl md:text-5xl text-center mb-10 font-normal">
        WELCOME TO THE TOP
      </h2>

      {/* ===== Categories Buttons ===== */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-8 py-3 font-normal text-lg transform skew-x-[-12deg] relative overflow-hidden group transition-all duration-300 ${
              i === 0
                ? "border-2 border-transparent"
                : "border-2 border-transparent"
            }`}
          >
            {i === 0 ? (
              // Active button with gradient background and white text
              <>
                <div className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] absolute inset-0 transform skew-x-[12deg] scale-110 group-hover:brightness-125 transition"></div>
                <span className="relative z-10 transform skew-x-[12deg] block text-white">
                  {cat}
                </span>
              </>
            ) : (
              // Inactive buttons with gradient border, transparent background, and white text
              <>
                <div className="absolute inset-0 transform skew-x-[12deg] scale-110 border-2 border-transparent bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-border group-hover:shadow-[0_0_15px_#3333ff] transition"></div>
                <div className="absolute inset-[2px] transform skew-x-[12deg] bg-transparent"></div>
                <span className="relative z-10 transform skew-x-[12deg] block text-white">
                  {cat}
                </span>
              </>
            )}
          </button>
        ))}
      </div>

      {/* ===== Game Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#2a0052]/60 rounded-2xl shadow-lg backdrop-blur-md border border-purple-700/40 hover:border-pink-500/60 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="relative w-full h-60 rounded-t-2xl overflow-hidden">
              <Image
                src={game.img}
                alt={game.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between h-52">
              {/* Game Title - Not Bold */}
              <h3 className="text-xl font-normal mb-4">{game.title}</h3>

              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/60">
                  <Image
                    src={game.userImg}
                    alt={game.user}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  {/* User Name - Bold */}
                  <p className="font-bold">{game.user}</p>
                  {/* Company - Not Bold */}
                  <p className="text-sm text-gray-400 font-normal">{game.company}</p>
                </div>
              </div>

              {/* LIVE DEMO Button - Parallelogram Shape */}
              <button className="w-full py-3 font-normal text-lg transform skew-x-[-12deg] relative overflow-hidden group">
                <div className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] absolute inset-0 transform skew-x-[12deg] scale-110 group-hover:brightness-125 transition"></div>
                <span className="relative z-10 transform skew-x-[12deg] block text-white">
                  LIVE DEMO
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}