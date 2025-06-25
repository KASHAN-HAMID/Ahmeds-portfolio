import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const Hero = () => {
  return (
    <section className="relative bg-white w-full min-h-screen flex flex-col justify-center overflow-hidden font-montserrat">
      <BackgroundAnimation />
      
      {/* Top Tagline */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-8 mb-16">
        <div className="flex-1 border-t-2 border-blue-500"></div>
        <p className="text-blue-600 text-lg font-semibold tracking-wide px-6 whitespace-nowrap">
          Design that define you !
        </p>
        <div className="flex-1 border-t-2 border-blue-500"></div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Graphic Design - positioned to the left and above portfolio */}
        <div className="w-full max-w-6xl relative">
          <h2 className="text-blue-600 text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-wide text-left">
            Graphic Design
          </h2>
        </div>
        
        {/* Portfolio - large text */}
        <h1 className="text-black text-[90px] md:text-[160px] lg:text-[170px] xl:text-[210px] font-black leading-none tracking-tighter transform hover:scale-105 transition-transform duration-300">
          portfolio
        </h1>
        
        {/* Bottom right subtitle */}
        <div className="relative w-full max-w-6xl mt-8">
          <p className="text-blue-600 text-xl md:text-2xl lg:text-3xl font-semibold absolute right-0 md:right-8">
            Social Media Graphic Design
          </p>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-16"></div>
    </section>
  );
};

export default Hero;
