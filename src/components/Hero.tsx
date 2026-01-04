import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black flex items-center relative overflow-hidden">
      {/* Background Camera/Studio Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80"
          alt="Video Editing Suite"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto py-12 pt-0 md:py-20">
        <div className="max-w-3xl">
          {/* Caption */}
          <p className="text-[#FF6B5A] text-xs md:text-sm font-bold tracking-[0.3em] mb-6 uppercase animate-fade-in-up">
            Elite Post-Production House
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] mb-8 animate-fade-in-up animation-delay-200">
            High-Impact Video <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B5A] to-orange-400">
              Editing Studio
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xl leading-relaxed animate-fade-in-up animation-delay-400">
            We specialize in cinematic, fast-paced video edits designed to hook
            viewers instantly. From short-form viral content to narrative
            storytelling, we elevate your raw footage into a visual masterpiece.
          </p>

          {/* CTA Button */}
          <a
            href="#portfolio"
            className="inline-block px-10 py-4 bg-[#FF6B5A] hover:bg-[#ff5544] text-white text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up animation-delay-600"
          >
            VIEW OUR WORK
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 animate-fade-in-up animation-delay-800">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-1">250M+</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Total Views Generated
            </p>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-1">500+</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Videos Delivered
            </p>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-1">48H</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Average Turnaround
            </p>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-4 hover:border-[#FF6B5A]/30 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-1">100%</h3>
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              Retention Focused
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
