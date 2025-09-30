import React from "react";

const About = () => {
  return (
    <section
      id="about"
      title="About"
      className="align-element py-[40px] md:py-[100px]"
    >
      <h2 className="font-sub-heading">//About</h2>
      <p className="font-heading mt-[40px] !max-w-auto !text-left !font-semibold !mx-0">
        From Sketches to Scripts —{" "}
        <span className="text-[#5D5D5D]">My Creative Evolution</span>
      </p>
      <div className="grid gap-6 text-[#797979] mt-8 font-secondary text-lg md:text-2xl">
        <p>
          My journey into tech started not with code, but with color palettes
          and wireframes. As a designer, I was drawn to how visual elements
          shaped user behavior. But it didn't take long before curiosity pushed
          me behind the scenes into the world of development.
        </p>
        <p>
          Learning JavaScript unlocked a new kind of creativity for me. Then
          came ReactJS, where I found flow, and Next.js, where performance met
          purpose. Today, I combine my design roots with modern development
          practices to create applications that not only look great, they work
          like a charm.
        </p>
        <p>Tech is always evolving. So am I.</p>
      </div>
      <div className="pt-[40px]">
        <img src="/assets/coderdannie.svg" alt="Emmanuel Daniel" />
      </div>
    </section>
  );
};

export default About;
