
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Top tagline */}
        <div className="inline-block mb-8">
          <span className="text-blue-600 text-sm font-medium tracking-wider uppercase border-b border-blue-600 pb-1">
            God is a Designer !
          </span>
        </div>
        
        {/* Main heading */}
        <div className="mb-8">
          <h2 className="text-blue-800 text-2xl md:text-3xl font-light mb-4">
            Graphic Design
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-none">
            portfolio
          </h1>
          <p className="text-blue-700 text-lg md:text-xl mt-4">
            Social Media Graphic Design
          </p>
        </div>
        
        {/* Decorative wave */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
