import React from "react";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-street-brown-900 py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-graffiti-texture opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-permanent text-2xl sm:text-3xl text-off-white mb-4">
              Drop Nanie
            </h3>
            <p className="font-inter text-sm sm:text-base text-cream-300 leading-relaxed mb-6 max-w-md">
              Representing authentic street culture through premium streetwear.
              Every piece tells a story of urban essence and rebellion.
            </p>
          </div>

          {/* Social Media Column - Now more prominent */}
          <div className="flex flex-col items-start">
            <h4 className="font-inter font-semibold text-off-white mb-4 md:mb-6 uppercase tracking-wide text-sm">
              Join The Movement
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/drop_nanie"
                className="w-12 h-12 bg-street-brown-700 hover:bg-street-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-street-blue-500/20"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-cream-200 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.facebook.com/share/16jZjwrD3u/?mibextid=wwXIfr"
                className="w-12 h-12 bg-street-brown-700 hover:bg-street-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-street-blue-500/20"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-cream-200 group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:info@dropnanie.co.za"
                className="w-12 h-12 bg-street-brown-700 hover:bg-street-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-street-blue-500/20"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-cream-200 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="font-inter text-cream-300/80 text-xs mt-4 italic">
              Tag us with #DropNanie
            </p>
            <p className="font-inter text-cream-300 text-sm mt-2">
              Email:{" "}
              <a
                href="mailto:info@dropnanie.co.za"
                className="hover:text-street-blue-400 transition-colors"
              >
                info@dropnanie.co.za
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-street-brown-700 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="font-inter text-cream-400 text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
            © {currentYear} Drop Nanie. All rights reserved.
          </p>

          <div className="flex items-center space-x-4 order-1 md:order-2">
            <a
              href="https://selaelolanga.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-cream-400 hover:text-street-blue-400 text-xs sm:text-sm transition-colors duration-300 flex items-center space-x-1 group"
              aria-label="Designer Portfolio"
            >
              <span className="group-hover:underline">🧵 by SlyCodes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
