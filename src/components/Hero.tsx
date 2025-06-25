import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Particle animation setup
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.hero-container');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedY = Math.random() * -2 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
      }
      
      update() {
        this.y += this.speedY;
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    return () => {
      container.removeChild(canvas);
    };
  }, []);

  return (
    <section className="hero-container relative bg-gradient-to-br from-blue-50 via-white to-blue-50 w-full min-h-screen flex flex-col justify-between items-center font-montserrat overflow-hidden transition-colors duration-3000 ease-in-out animate-gradient">
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
        <h2 className="text-blue-600 text-2xl md:text-3xl font-semibold mb-2 animate-fadeInUp">
          Graphic Design
        </h2>
        <h1 className="text-black text-[72px] md:text-[100px] lg:text-[120px] font-extrabold leading-none tracking-tight animate-fadeInUp animation-delay-200">
          portfolio
        </h1>
        <p className="text-blue-600 text-lg md:text-xl mt-2 font-medium animate-fadeInUp animation-delay-400">
          Social Media Graphic Design
        </p>
      </div>

      {/* Floating Particles Canvas */}
      <canvas className="absolute inset-0 -z-10 pointer-events-none"></canvas>

      {/* Optional animated light elements */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-100 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-2xl animate-ping"></div>
      </div>
    </section>
  );
};

export default Hero;
