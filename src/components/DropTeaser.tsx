import React from "react";

const DropTeaser: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-cream-100 bg-opacity-95 bg-[url('/path/to/subtle-texture.png')] bg-repeat">
      <div className="max-w-4xl mx-auto">
        {/* Graffiti-style heading with urban edge */}
        <div className="flex justify-center items-center mb-6">
          <h1 className="font-permanent text-3xl sm:text-4xl md:text-6xl text-street-brown-800 px-4">
            The Next Drop
          </h1>
        </div>
        {/* Punchy description */}
        <p className="text-center text-street-blue-400 max-w-xl mx-auto text-lg leading-relaxed mb-10 font-urbanist">
          The drop's in motion. Our next collection blends fresh culture with
          bold expression. Designed for the streets — stitched for the soul.
        </p>
        {/* Featured merch sketch with urban framing */}
        <div className="relative max-w-xs md:max-w-sm mx-auto mb-12 group">
          <div className="absolute inset-0 border-2 border-brown-800 opacity-10 rounded-lg transform rotate-1 -z-10"></div>
          <div className="absolute inset-0 bg-blue-700 opacity-5 rounded-lg transform -rotate-1 -z-10"></div>

          <img
            src="/images/brand-logo-large.png"
            alt="Logo"
            className="rounded-lg shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300 border-2 border-cream-300"
          />

          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full opacity-10 blur-md"></div>
        </div>
        {/* Hype loading indicator */}
        <div className="text-center">
          <p className="text-sm text-blue-600 uppercase tracking-[0.3em] font-medium mb-3">
            Next Drop Loading...
          </p>
          <div className="w-48 h-1.5 mx-auto bg-cream-300 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 animate-[pulse_2s_infinite] w-full"></div>
          </div>
          <div className="flex justify-center mt-2 space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DropTeaser;
