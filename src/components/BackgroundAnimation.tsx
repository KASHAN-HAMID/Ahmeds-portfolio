import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {/* Faint Animated Circle */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-ping"></div>

      {/* Rotating Triangle */}
      <div className="absolute top-1/3 right-1/4 w-10 h-10 animate-spin-slow opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,80 10,80" fill="#3B82F6" opacity="0.3" />
        </svg>
      </div>

      {/* Floating Square */}
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-blue-300 opacity-10 animate-float rounded-lg"></div>

      {/* Gradient Overlay for Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-blue-50/20 to-white/20 pointer-events-none"></div>
    </div>
  );
};

export default BackgroundAnimation;
