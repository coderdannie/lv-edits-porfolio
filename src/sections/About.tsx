import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation(0.1);

  // Debug log
  console.log("About section visible:", sectionVisible);

  return (
    <section
      ref={sectionRef}
      id="about"
      title="About"
      className="align-element py-[40px] md:py-[100px]"
    >
      <h2
        className={`font-sub-heading scroll-animate animate-slide-left ${
          sectionVisible ? "animated" : ""
        }`}
      >
        //About
      </h2>
      <p
        className={`font-heading mt-[40px] !max-w-auto !text-left !font-semibold !mx-0 scroll-animate animate-slide-right ${
          sectionVisible ? "animated delay-200" : ""
        }`}
      >
        From Sketches to Scripts —{" "}
        <span className="text-[#5D5D5D]">My Creative Evolution</span>
      </p>
      <div className="grid gap-6 text-[#797979] mt-8 font-secondary text-lg md:text-2xl">
        <p
          className={`scroll-animate animate-slide-left ${
            sectionVisible ? "animated delay-400" : ""
          }`}
        >
          My journey into tech started not with code, but with color palettes
          and wireframes. As a designer, I was drawn to how visual elements
          shaped user behavior. But it didn't take long before curiosity pushed
          me behind the scenes into the world of development.
        </p>
        <p
          className={`scroll-animate animate-slide-right ${
            sectionVisible ? "animated delay-600" : ""
          }`}
        >
          Learning JavaScript unlocked a new kind of creativity for me. Then
          came ReactJS, where I found flow, and Next.js, where performance met
          purpose. Today, I combine my design roots with modern development
          practices to create applications that not only look great, they work
          like a charm.
        </p>
        <p
          className={`scroll-animate animate-slide-left ${
            sectionVisible ? "animated delay-800" : ""
          }`}
        >
          Tech is always evolving. So am I.
        </p>
      </div>
      <div
        className={`pt-[40px] scroll-animate animate-slide-up ${
          sectionVisible ? "animated delay-1000" : ""
        }`}
      >
        <img src="/assets/img.png" alt="Emmanuel Daniel" />
      </div>
    </section>
  );
};

export default About;
