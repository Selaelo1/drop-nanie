import React from 'react';
import { SprayCan as Spray } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-street-brown-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-street-brown-100 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-street-blue-400 rounded-full opacity-5 blur-3xl"></div>
      
      {/* Graffiti elements */}
      <div className="absolute top-10 left-4 sm:left-20 transform -rotate-12">
        <div className="bg-street-blue-500 text-white px-4 py-2 rounded-lg font-permanent text-sm shadow-lg border-2 border-white">
          Don't Conform
        </div>
        <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-street-blue-500"></div>
      </div>
      
      <div className="absolute top-32 right-4 sm:right-32 transform rotate-6">
        <div className="bg-street-brown-600 text-cream-100 px-3 py-2 rounded-full font-permanent text-xs shadow-lg border-2 border-cream-200">
          Limited Drop
        </div>
      </div>
      
      <div className="absolute bottom-20 left-4 sm:left-32 transform -rotate-6">
        <div className="bg-cream-300 text-street-brown-800 px-4 py-2 rounded-lg font-permanent text-sm shadow-lg border-2 border-street-brown-400">
          Nanie Moves
        </div>
        <div className="absolute -top-2 right-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-cream-300"></div>
      </div>
      
      {/* Paint drip effects */}
      <div className="absolute top-0 left-1/4 w-2 h-32 bg-gradient-to-b from-street-blue-500 to-transparent opacity-60 rounded-full"></div>
      <div className="absolute top-0 right-1/3 w-1 h-24 bg-gradient-to-b from-street-brown-500 to-transparent opacity-40 rounded-full"></div>
      <div className="absolute top-0 left-3/4 w-3 h-40 bg-gradient-to-b from-cream-400 to-transparent opacity-50 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-permanent text-3xl sm:text-4xl md:text-5xl text-street-brown-800 mb-8 leading-tight px-4 lg:px-0">
              About the Brand
            </h2>
            
            <div className="mb-10 px-4 lg:px-0">
              <p className="font-inter text-lg sm:text-xl md:text-2xl text-street-brown-700 leading-relaxed font-medium">
                Drop Nanie is a culture-forward streetwear movement stitched with rebellion, raw edge, and unapologetic flair. This isn't fashion—it's a street-born statement.
              </p>
            </div>
          </div>
          
          {/* Visual element */}
          <div className="relative px-4 lg:px-0">
            <div className="relative bg-gradient-to-br from-street-brown-600 to-street-brown-800 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-graffiti-texture opacity-20 rounded-3xl"></div>
              
              {/* Graffiti spray effect */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-street-blue-400 rounded-full opacity-30 blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-cream-300 rounded-full opacity-40 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Spray className="w-8 h-8 text-street-blue-400 mr-3" />
                  <span className="font-permanent text-street-blue-400 text-lg">Raw. Real. Rebellious.</span>
                </div>
                <blockquote className="font-permanent text-lg sm:text-xl md:text-2xl text-off-white leading-relaxed mb-6">
                  "Every thread tells a story of the streets. Every drop is a revolution."
                </blockquote>
                <div className="w-16 h-1 bg-street-blue-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cream-300 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-street-blue-400 rounded-full opacity-20 blur-xl"></div>
            
            {/* Additional graffiti stickers */}
            <div className="absolute top-4 -left-4 transform rotate-12">
              <div className="bg-street-brown-700 text-cream-100 px-2 py-1 rounded font-permanent text-xs shadow-md">
                STREET
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;