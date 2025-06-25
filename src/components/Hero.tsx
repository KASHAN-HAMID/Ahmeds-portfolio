import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#0f1111] text-white w-full min-h-screen flex flex-col justify-between items-center font-montserrat overflow-hidden">
      {/* Top Tagline */}
      <div className="flex justify-between items-center w-full px-6 pt-6">
        <div className="w-1/3 border-t border-yellow-500"></div>
        <p className="text-yellow-500 text-sm font-semibold tracking-wide px-4">
          God is a Designer !
        </p>
        <div className="w-1/3 border-t border-yellow-500"></div>
      </div>

      {/* Center Text */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="text-yellow-400 text-2xl md:text-3xl font-semibold mb-2">
          Graphic Design
        </h2>
        <h1 className="text-white text-[72px] md:text-[100px] lg:text-[120px] font-extrabold leading-none tracking-tight">
          portfolio
        </h1>
        <p className="text-yellow-400 text-lg md:text-xl mt-2 font-medium">
          Social Media Graphic Design
        </p>
      </div>

      {/* Gold Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0">
        <div className="w-full h-full bg-[url('/gold-wave.svg')] bg-cover bg-bottom animate-waveMove"></div>
      </div>

      {/* Optional floating light animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-yellow-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-yellow-400 opacity-10 rounded-full blur-2xl animate-ping"></div>
      </div>
    </section>
  );
};

export default Hero;
