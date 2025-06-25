import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white w-full min-h-screen flex flex-col justify-between">
      {/* Top Tagline */}
      <div className="flex justify-between items-center px-8 pt-6">
        <div className="w-1/3 border-t border-blue-600"></div>
        <p className="text-blue-600 text-md font-semibold tracking-wide px-4">Design that define you !</p>
        <div className="w-1/3 border-t border-blue-600"></div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-blue-600 text-2xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Graphic Design
        </h2>
        <h1 className="text-black text-[72px] md:text-[100px] lg:text-[120px] font-extrabold leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          portfolio
        </h1>
        <p className="text-blue-600 text-lg md:text-xl mt-2 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Social Media Graphic Design
        </p>
      </div>

      {/* Bottom wave (optional, can be styled like gold if needed) */}
      <div className="h-24 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-t-[50%]"></div>
    </section>
  );
};

export default Hero;
