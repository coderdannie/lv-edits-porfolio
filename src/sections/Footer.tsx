import React from "react";
import { socialIcons } from "../components/common/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="align-element">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6 items-center">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={`Visit ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} LV Edits. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              {/* Built with React & TypeScript */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
