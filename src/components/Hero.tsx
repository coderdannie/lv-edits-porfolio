import React from "react";
import Badge from "./common/Badge";
import { techStacks } from "./common/constants";

const Hero = () => {
  return (
    <div className="align-element !z-0 flex flex-col justify-center items-center mt-12 md:mt-20 lg:mt-[100px]">
      <div className="animate-fade-in-up">
        <Badge />
      </div>
      <div className="text-center">
        <h1 className="font-heading pt-4 md:pt-6 md:text-5xl lg:text-6xl animate-fade-in-up animation-delay-200">
          I'm Emmanuel Daniel
        </h1>
        <p className="max-w-[800px] mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-[#C0C0C0] pt-3 px-4 animate-fade-in-up animation-delay-400">
          Frontend Engineer with ReactJS and React Native expertise, passionate
          about clean code, intuitive design, and enhancing user experiences
        </p>
        <a
          href="#contact"
          className="px-8 block w-fit mx-auto sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 mt-6 bg-white text-black text-base sm:text-lg font-medium rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up animation-delay-600"
          style={{
            boxShadow:
              "inset 0 -8px 9px 0 rgba(0, 0, 0, 0.25), 0.3em 0.3em 1em rgba(0, 0, 0, 0.5)",
          }}
        >
          Get in Touch
        </a>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-[88px] w-full overflow-hidden animate-fade-in-up animation-delay-800">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
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
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
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

        <ul className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 animate-scroll">
          {[...techStacks, ...techStacks].map((item, i) => (
            <li
              key={i}
              className="bg-white grid place-items-center px-3 py-3 sm:px-4 sm:py-4 h-[70px] w-[70px] sm:h-[78px] sm:w-[78px] md:h-[86px] md:w-[86px] rounded-xl sm:rounded-2xl flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <img
                className="max-w-full max-h-full object-contain"
                src={item.img}
                alt={item.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
