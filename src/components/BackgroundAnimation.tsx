
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs with visible animations */}
      <div className="absolute top-10 left-4 md:left-10 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-400/40 to-blue-600/30 rounded-full animate-bounce"></div>
      <div className="absolute top-32 right-8 md:right-20 w-12 md:w-20 h-12 md:h-20 bg-gradient-to-br from-purple-400/35 to-purple-600/25 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-8 md:left-1/4 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-br from-indigo-400/30 to-indigo-600/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-16 right-4 md:right-1/3 w-14 md:w-24 h-14 md:h-24 bg-gradient-to-br from-cyan-400/35 to-cyan-600/25 rounded-full animate-spin"></div>
      
      {/* Moving geometric shapes */}
      <div className="absolute top-1/2 right-6 md:right-16 w-8 h-8 md:w-12 md:h-12 bg-blue-500/40 rotate-45 animate-spin"></div>
      <div className="absolute bottom-1/2 left-6 md:left-16 w-6 h-6 md:w-8 md:h-8 bg-purple-500/35 rotate-12 animate-bounce"></div>
      
      {/* Additional animated elements */}
      <div className="absolute top-1/4 left-1/2 w-10 h-10 bg-green-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/2 w-8 h-8 bg-yellow-400/30 rounded-lg animate-bounce"></div>
      <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-pink-400/30 rounded-full animate-ping"></div>
      
      {/* Animated sparkles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-3/5 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 left-3/5 w-2 h-2 md:w-3 md:h-3 bg-indigo-500 rounded-full animate-ping"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-1/2 w-4 h-4 bg-blue-300/50 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-300/50 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-1/5 w-5 h-5 bg-cyan-300/50 rounded-full animate-ping delay-700"></div>
      
      {/* Background gradient with subtle movement */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/50 to-purple-50/40 animate-pulse"></div>
    </div>
  );
};

export default BackgroundAnimation;
