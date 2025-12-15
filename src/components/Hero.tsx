import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black flex items-center relative overflow-hidden">
      {/* Background Camera Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=80"
          alt="Camera equipment"
          className="w-full h-full object-cover object-right opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-20">
        <div className="max-w-3xl">
          {/* Caption: Reduced text-sm -> text-xs, md:text-base -> md:text-sm */}
          <p className="text-[#FF6B5A] text-xs md:text-sm font-bold tracking-[0.3em] mb-6 uppercase animate-fade-in-up">
            CREATIVE VIDEOGRAPHY
          </p>

          {/* Main Heading: Reduced significantly from text-6xl/9xl to text-4xl/7xl */}
          <h1 className="text-4xl md:text-5xl  lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] mb-8 animate-fade-in-up animation-delay-200">
            VIDEOGRAPHY MAKE US HAPPY TAKE A SHOT
          </h1>

          {/* Description: Reduced text-base -> text-sm, md:text-lg -> md:text-base */}
          <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xl leading-relaxed animate-fade-in-up animation-delay-400">
            Capturing moments that matter with cinematic excellence and creative
            vision
          </p>

          {/* CTA Button: Reduced text-base -> text-sm */}
          <a
            href="#portfolio"
            className="inline-block px-10 py-4 bg-[#FF6B5A] hover:bg-[#ff5544] text-white text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up animation-delay-600"
          >
            WATCH PORTFOLIO
          </a>
        </div>

        {/* Stats Cards: Reduced container size and text size */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 animate-fade-in-up animation-delay-800">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            {/* Number: text-3xl -> text-2xl */}
            <h3 className="text-2xl font-black text-white mb-1">500+</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Projects Completed
            </p>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-1">200+</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Happy Clients
            </p>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-1">10+</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Years Experience
            </p>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-1">50+</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Awards Won
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
