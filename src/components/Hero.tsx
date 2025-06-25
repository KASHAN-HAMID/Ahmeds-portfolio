import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white w-full min-h-screen flex flex-col justify-between font-montserrat">
      {/* Top Line and Tagline */}
      <div className="flex justify-between items-center px-8 pt-6">
        <div className="w-1/3 border-t border-blue-600"></div>
        <p className="text-blue-600 text-sm font-semibold tracking-wide px-4">
          God is a Designer !
        </p>
        <div className="w-1/3 border-t border-blue-600"></div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-blue-600 text-2xl font-semibold mb-2">
          Graphic Design
        </h2>
        <h1 className="text-black text-[72px] md:text-[100px] lg:text-[120px] font-extrabold leading-none">
          portfolio
        </h1>
        <p className="text-blue-600 text-lg md:text-xl mt-2 font-medium">
          Social Media Graphic Design
        </p>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="h-24 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-t-[50%] animate-pulse"></div>
    </section>
  );
};

export default Hero;
