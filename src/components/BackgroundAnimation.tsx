
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating Design Tools */}
      <div className="absolute top-20 left-10 text-yellow-400/30 text-4xl animate-bounce">
        ✏️
      </div>
      <div className="absolute top-40 right-20 text-yellow-500/40 text-3xl animate-pulse">
        🎨
      </div>
      <div className="absolute bottom-40 left-1/4 text-yellow-600/35 text-5xl animate-bounce delay-500">
        📐
      </div>
      <div className="absolute top-1/2 right-1/4 text-yellow-400/40 text-4xl animate-pulse delay-700">
        🖌️
      </div>
      <div className="absolute bottom-1/3 right-1/3 text-yellow-500/30 text-3xl animate-bounce delay-300">
        ✂️
      </div>

      {/* Adobe-style Icons Floating */}
      <div className="absolute top-32 left-1/3 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center text-white font-bold animate-float-slow">
        Ai
      </div>
      <div className="absolute bottom-32 right-1/5 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-white font-bold animate-float-medium">
        Ps
      </div>
      <div className="absolute top-1/3 left-1/5 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-white font-bold animate-float-fast">
        Id
      </div>

      {/* Color Palette Floating Elements */}
      <div className="absolute top-1/4 right-1/3 flex space-x-1 animate-pulse">
        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Typography Elements */}
      <div className="absolute top-60 left-1/6 text-yellow-400/25 text-6xl font-serif animate-pulse">
        A
      </div>
      <div className="absolute bottom-1/4 left-1/2 text-yellow-500/20 text-4xl font-sans animate-bounce">
        T
      </div>

      {/* Design Grid Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent animate-pulse delay-500"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-pulse delay-1000"></div>

      {/* Vector Path Animation */}
      <div className="absolute top-1/4 left-1/2 w-16 h-16 border-2 border-yellow-400/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-yellow-500/20 animate-ping"></div>

      {/* Bezier Curves */}
      <div className="absolute top-1/2 left-1/3">
        <svg width="100" height="60" className="animate-pulse">
          <path d="M10,30 Q50,10 90,30" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Layer Indicators */}
      <div className="absolute bottom-20 left-10 flex flex-col space-y-2 animate-bounce">
        <div className="w-8 h-2 bg-yellow-400/20 rounded"></div>
        <div className="w-6 h-2 bg-yellow-500/20 rounded"></div>
        <div className="w-10 h-2 bg-yellow-600/20 rounded"></div>
      </div>

      {/* Pixel Art Elements */}
      <div className="absolute top-20 right-1/5 grid grid-cols-3 gap-1 animate-pulse">
        <div className="w-2 h-2 bg-yellow-400/30"></div>
        <div className="w-2 h-2 bg-yellow-500/30"></div>
        <div className="w-2 h-2 bg-yellow-600/30"></div>
        <div className="w-2 h-2 bg-yellow-500/30"></div>
        <div className="w-2 h-2 bg-yellow-400/30"></div>
        <div className="w-2 h-2 bg-yellow-600/30"></div>
        <div className="w-2 h-2 bg-yellow-600/30"></div>
        <div className="w-2 h-2 bg-yellow-400/30"></div>
        <div className="w-2 h-2 bg-yellow-500/30"></div>
      </div>

      {/* Floating Shapes for Design */}
      <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-yellow-400/20 transform rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/2 right-1/6 w-8 h-8 bg-yellow-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/6 left-3/4 w-4 h-8 bg-yellow-600/20 animate-pulse"></div>

      {/* Design Ruler */}
      <div className="absolute bottom-10 left-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-pulse">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-px h-2 bg-yellow-400/30"></div>
          <div className="absolute top-0 left-1/4 w-px h-1 bg-yellow-400/30"></div>
          <div className="absolute top-0 left-1/2 w-px h-2 bg-yellow-400/30"></div>
          <div className="absolute top-0 left-3/4 w-px h-1 bg-yellow-400/30"></div>
          <div className="absolute top-0 right-0 w-px h-2 bg-yellow-400/30"></div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
    </div>
  );
};

export default BackgroundAnimation;
