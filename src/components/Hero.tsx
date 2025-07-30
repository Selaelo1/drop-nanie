import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-street-brown-800 via-street-brown-700 to-street-brown-600 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-graffiti-texture opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-street-blue-500 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-cream-300 rounded-full opacity-10 blur-2xl animate-float"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="font-permanent text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-off-white drop-shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            Drop Nanie
          </h1>
          <div className="w-full h-2 bg-street-blue-500 transform skew-x-12 mt-4 shadow-lg"></div>
        </div>
        
        {/* Slogan */}
        <p className="font-inter font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-cream-200 mb-12 max-w-2xl leading-relaxed tracking-wide px-4">
          Culture of the <span className="font-permanent text-street-blue-400">Essence</span>
        </p>
        
        {/* CTA */}
        <div className="flex flex-col items-center space-y-6">
          <p className="font-inter text-cream-300 text-base sm:text-lg md:text-xl uppercase tracking-widest px-4 text-center">
            The Revolution Begins Soon
          </p>
          <ArrowDown className="w-8 h-8 text-street-blue-400 animate-bounce" />
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent"></div>
    </section>
  );
};

export default Hero;