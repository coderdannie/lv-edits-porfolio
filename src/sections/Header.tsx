import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

const Header = () => {
  return (
    <header className="h-screen header-alternative">
      <Nav />
      <Hero />
    </header>
  );
};

export default Header;
