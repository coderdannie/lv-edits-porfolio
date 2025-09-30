import React from "react";

const Badge = () => {
  return (
    <div className="flex gap-2 items-center text-lg md:text-2xl py-2 md:py-4 px-5 md:px-9 w-fit mx-auto text-[#989898] border border-[#515151] rounded-full">
      <p>Hi, nice to meet you</p>
      <span className="animate-wave">👋</span>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Badge;
