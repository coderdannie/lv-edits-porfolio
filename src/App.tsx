import React from "react";
import Header from "./sections/Header";
import LightningCursor from "./components/common/LighteningCursor";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <LightningCursor />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
