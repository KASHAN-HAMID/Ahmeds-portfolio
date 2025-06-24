
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes with more visible colors */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-60 right-20 w-24 h-24 bg-black/15 rounded-lg rotate-45 animate-bounce"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-blue-600/25 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-black/20 rounded-lg animate-spin"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/2 right-10 w-28 h-28 bg-blue-400/15 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/2 left-20 w-12 h-12 bg-black/10 rotate-12 animate-bounce delay-500"></div>
      
      {/* Floating particles with more visibility */}
      <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-black rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-black rounded-full animate-ping delay-900"></div>
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1200"></div>
      
      {/* Moving lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 to-transparent animate-pulse delay-700"></div>
      
      {/* Light gradient overlays with more visible colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-gray-100/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/20 to-black/5"></div>
    </div>
  );
};

export default BackgroundAnimation;
