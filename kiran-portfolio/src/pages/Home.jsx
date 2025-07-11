import React from "react";
import TypingAnimation from "./TypingAnimation";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 bg-black"
    >
      {/* --- Animated Gradient Background --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-60 animate-backgroundMove"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,255,0.2),transparent_60%)]"></div>
      </div>

      {/* --- Main Container --- */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* --- Left Section: Text & CTA --- */}
        <div className="text-center lg:text-left animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent animate-glow">
            Kiran M.S
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl my-6 flex items-center justify-center lg:justify-start gap-2">
            <span className="text-pink-400 font-medium">I'm a</span>
            <TypingAnimation />
          </div>

          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl mb-6 leading-relaxed">
            Crafting futuristic digital experiences with code and creativity — blending pixels and purpose into powerful web journeys.
          </p>

          {/* --- CTA Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-br from-cyan-500 via-indigo-500 to-pink-500 px-6 py-3 text-white font-semibold rounded-full shadow-lg backdrop-blur-lg hover:scale-110 transition-transform duration-300 border border-white/20">
              <i className="fas fa-download mr-2"></i>
              Download CV
            </button>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 px-6 py-3 text-white font-semibold rounded-full shadow-lg backdrop-blur-lg hover:scale-110 transition-transform duration-300 border border-white/20"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
          </div>
        </div>

        {/* --- Right Section: Image & Effects --- */}
        <div className="flex justify-center lg:justify-end animate-fadeInRight">
          <div className="relative">
            {/* --- Glowing Halo Rings --- */}
            <div className="absolute inset-0 rounded-full animate-spin-slow">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-400 p-1 blur-md"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-green-400 p-1 animate-spin-reverse blur-sm"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-pink-400 opacity-20 animate-pulse blur-xl"></div>
            </div>

            {/* --- Avatar Image --- */}
            <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-md shadow-2xl animate-float">
              <img
                src="https://i.ibb.co/wF3St2qj/kiran.jpg"
                alt="Kiran M.S Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"></div>
            </div>

            {/* --- Floating Dots --- */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-70 shadow-cyan-400/60"></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 bg-pink-500 rounded-full animate-ping opacity-70 shadow-pink-400/60"></div>
            <div className="absolute top-1/2 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-purple-400/60"></div>
            <div className="absolute bottom-1/4 -right-6 w-3 h-3 bg-yellow-400 rounded-full animate-bounce shadow-yellow-400/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
