import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems, socialIcons } from "./common/constants";

interface NavItem {
  name: string;
  href: string;
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black py-6 sticky top-0 z-[100]">
      <div className="flex justify-between items-center align-element">
        {/* Logo */}
        <a href="/" className="block z-[102] relative">
          <div className="flex items-center gap-2">
            <div className="w-[54px] h-[54px] overflow-hidden rounded-full aspect-square">
              <img
                className="object-cover w-full h-full md:hidden"
                src="/assets/img.png"
                alt="Emmanuel Daniel Logo"
              />
              <img
                className="object-contain hidden md:block w-full h-full"
                src="/assets/logo.svg"
                alt="Emmanuel Daniel Logo"
              />
            </div>
            <div className="text-sm font-semibold">
              <p>Emmanuel</p>
              <p>Daniel</p>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item: NavItem) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium hover:text-gray-300 transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-3 items-center">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#BABABA] hover:text-white transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 relative text-white p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black z-[45] md:hidden flex flex-col justify-center transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* Navigation Links */}
          <ul className="flex flex-col items-center justify-center gap-8 mb-16">
            {navItems.map((item: NavItem, index) => (
              <li
                key={item.name}
                className={`transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + index * 80}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-3xl font-semibold text-white hover:text-gray-400 transition-colors cursor-pointer block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Social Icons */}
          <div
            className={`pb-12 transition-all duration-500 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isMenuOpen
                ? `${100 + navItems.length * 80}ms`
                : "0ms",
            }}
          >
            <div className="flex justify-center gap-8">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-[#BABABA] hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
