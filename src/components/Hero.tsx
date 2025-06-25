
import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 w-full min-h-screen flex flex-col justify-center overflow-hidden">
      <BackgroundAnimation />
      
      {/* Top Tagline */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-6 mb-8">
        <div className="w-1/3 border-t border-blue-500"></div>
        <p className="text-blue-500 text-md font-semibold tracking-wide px-4">Design that define you!</p>
        <div className="w-1/3 border-t border-blue-500"></div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-blue-500 text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Graphic Design
        </h2>
        <h1 className="text-black text-[100px] md:text-[160px] lg:text-[200px] font-extrabold leading-none tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          portfolio
        </h1>
        <p className="text-blue-500 text-xl md:text-2xl mt-6 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Social Media Graphic Design
        </p>
      </div>
    </section>
  );
};

export default Hero;
