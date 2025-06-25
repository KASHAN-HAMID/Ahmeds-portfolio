
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Creative Geometric Shapes */}
      
      {/* Hexagon shapes */}
      <div className="absolute top-1/4 left-1/6 w-12 h-12 animate-float opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" 
                   fill="none" 
                   stroke="#3B82F6" 
                   strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Triangle with rotation */}
      <div className="absolute top-1/3 right-1/4 w-8 h-8 animate-spin opacity-25" style={{ animationDuration: '15s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,80 10,80" 
                   fill="#60A5FA" 
                   opacity="0.3"/>
        </svg>
      </div>
      
      {/* Parallelogram */}
      <div className="absolute bottom-1/3 left-1/3 w-16 h-10 animate-pulse-slow opacity-30">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <polygon points="20,10 80,10 60,50 0,50" 
                   fill="none" 
                   stroke="#1D4ED8" 
                   strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Irregular pentagon */}
      <div className="absolute top-1/2 left-1/5 w-10 h-10 animate-float opacity-25" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 90,30 75,80 25,80 10,30" 
                   fill="#3B82F6" 
                   opacity="0.2"/>
        </svg>
      </div>
      
      {/* Diamond shape */}
      <div className="absolute bottom-1/4 right-1/5 w-6 h-6 animate-bounce opacity-30" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,50 50,90 10,50" 
                   fill="none" 
                   stroke="#60A5FA" 
                   strokeWidth="3"/>
        </svg>
      </div>
      
      {/* Trapezoid */}
      <div className="absolute top-2/3 right-1/3 w-14 h-8 animate-pulse opacity-20">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <polygon points="25,10 75,10 90,50 10,50" 
                   fill="#1E40AF" 
                   opacity="0.15"/>
        </svg>
      </div>
      
      {/* Star shape */}
      <div className="absolute top-1/6 right-1/6 w-8 h-8 animate-spin opacity-25" style={{ animationDuration: '20s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 61,35 92,35 69,57 80,87 50,70 20,87 31,57 8,35 39,35" 
                   fill="none" 
                   stroke="#2563EB" 
                   strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Arrow shape */}
      <div className="absolute bottom-1/2 left-1/4 w-12 h-6 animate-float opacity-20" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <polygon points="10,25 40,10 40,20 90,20 90,30 40,30 40,40" 
                   fill="#3B82F6" 
                   opacity="0.25"/>
        </svg>
      </div>
      
      {/* Cross/Plus shape */}
      <div className="absolute top-3/4 left-1/2 w-8 h-8 animate-pulse-slow opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="35,10 65,10 65,35 90,35 90,65 65,65 65,90 35,90 35,65 10,65 10,35 35,35" 
                   fill="none" 
                   stroke="#1D4ED8" 
                   strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Chevron shape */}
      <div className="absolute top-1/5 left-2/3 w-10 h-6 animate-bounce opacity-25" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <polygon points="10,10 50,50 90,10 85,5 50,40 15,5" 
                   fill="#60A5FA" 
                   opacity="0.3"/>
        </svg>
      </div>
      
      {/* Lightning bolt */}
      <div className="absolute bottom-1/5 right-2/5 w-6 h-12 animate-pulse opacity-20">
        <svg viewBox="0 0 50 100" className="w-full h-full">
          <polygon points="20,5 35,5 25,45 40,45 15,95 25,55 10,55" 
                   fill="#2563EB" 
                   opacity="0.2"/>
        </svg>
      </div>
      
      {/* Curved shape */}
      <div className="absolute top-1/2 right-1/6 w-16 h-16 animate-float opacity-15" style={{ animationDelay: '4s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M10,50 Q50,10 90,50 Q50,90 10,50" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Abstract flowing lines */}
      <div className="absolute top-1/3 left-1/2 w-20 h-12 animate-pulse-slow opacity-10">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          <path d="M10,30 Q30,10 50,30 T90,30" 
                fill="none" 
                stroke="#1E40AF" 
                strokeWidth="2"/>
          <path d="M10,40 Q30,20 50,40 T90,40" 
                fill="none" 
                stroke="#60A5FA" 
                strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white/30 to-blue-50/20"></div>
    </div>
  );
};

export default BackgroundAnimation;
