import React from "react";
import Header from "./sections/Header";
import LightningCursor from "./components/common/LighteningCursor";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import PortfolioSection from "./sections/PortfolioSection";
import VideoGallery from "./sections/VideoGallery";
import "plyr/dist/plyr.css";

const App = () => {
  return (
    <>
      {/* <LightningCursor /> */}
      <Header />
      <PortfolioSection />
      <VideoGallery />
      {/* <Projects /> */}
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
