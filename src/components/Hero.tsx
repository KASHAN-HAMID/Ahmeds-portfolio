import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white w-full min-h-screen flex flex-col justify-between items-center font-montserrat overflow-hidden">
      {/* Top Tagline */}
      <div className="flex justify-between items-center w-full px-6 pt-6">
        <div className="w-1/3 border-t border-blue-500"></div>
        <p className="text-blue-600 text-sm font-semibold tracking-wide px-4">
          God is a Designer !
        </p>
        <div className="w-1/3 border-t border-blue-500"></div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="text-blue-600 text-2xl md:text-3xl font-semibold mb-2">
          Graphic Design
        </h2>
        <h1 className="text-black text-[72px] md:text-[100px] lg:text-[120px] font-extrabold leading-none tracking-tight">
          portfolio
        </h1>
        <p className="text-blue-600 text-lg md:text-xl mt-2 font-medium">
          Social Media Graphic Design
        </p>
      </div>

      {/* Decorative animated light wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-t-[50%] blur-sm animate-waveMove"></div>
      </div>

      {/* Optional animated light elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-100 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-2xl animate-ping"></div>
      </div>
    </section>
  );
};

export default Hero;
