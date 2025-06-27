
import React from 'react';

const images = [
  '/portfolio/1.jpg',
  '/portfolio/2.jpg',
  '/portfolio/3.jpg',
  '/portfolio/4.jpg',
  '/portfolio/5.jpg',
  '/portfolio/6.jpg',
  '/portfolio/7.jpg',
];

const PortfolioProjects = () => {
  return (
    <div className="relative">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="w-full overflow-hidden"
        >
          <img
            src={img}
            alt={`Portfolio project ${idx + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
      
      <footer className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-16 overflow-hidden border-t border-gray-100">
        {/* Background Animation - matching header theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-black/8 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-blue-600/15 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-black/10 rounded-lg animate-spin"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 right-10 w-28 h-28 bg-blue-400/12 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/2 left-20 w-12 h-12 bg-black/8 rotate-12 animate-bounce delay-500"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-blue-600/60 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-black/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-blue-500/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-black/40 rounded-full animate-ping delay-900"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse delay-1200"></div>
          
          {/* Moving lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/15 to-transparent animate-pulse delay-700"></div>
          
          {/* Light gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-gray-100/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/15 to-black/3"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Main heading with modern styling */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-gray-800 via-black to-blue-600 bg-clip-text text-transparent animate-pulse">
                Let's Create Something Amazing!
              </span>
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
              <span className="text-lg font-light text-gray-600 px-4">
                With Ahmed Saleem
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
          </div>

          {/* Contact links with modern design */}
       <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">

  {/* Email */}
  <a 
    href="mailto:ahmedsaleem522188@gmail.com" 
    className="group flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md hover:bg-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
  >
    <span className="text-2xl mr-3 group-hover:animate-bounce">📧</span>
    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
      ahmedsaleem522188@gmail.com
    </span>
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/ahmed_saleem098?utm_source=qr&igsh=MWJvMDgwd2lua2QxcA==" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md hover:bg-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
  >
    <span className="text-2xl mr-3 group-hover:animate-bounce">📷</span>
    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
      @ahmed_saleem098
    </span>
  </a>

  {/* WhatsApp */}
  <a 
    href="https://wa.me/923090667720" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md hover:bg-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
  >
    <span className="text-2xl mr-3 group-hover:animate-bounce">💬</span>
    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
      +92 309 0667720
    </span>
  </a>

</div>


          {/* Thank you message with elegant styling */}
          <div className="text-center mb-8">
            <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/30">
              <p className="text-lg text-gray-600 font-light italic">
                Thank You for Visiting My Portfolio!
              </p>
            </div>
          </div>

         

          {/* Particle Canvas */}
      <canvas className="absolute inset-0 -z-10 pointer-events-none" />

      {/* Decorative Blur Glows */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-100 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-2xl animate-ping"></div>
      </div>
    
      </footer>
    </div>
  );
};

export default PortfolioProjects;
