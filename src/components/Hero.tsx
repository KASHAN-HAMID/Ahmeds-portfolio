import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
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
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      container.removeChild(canvas);
    };
  }, []);

  return (
    <section className="hero-container relative bg-white w-full h-screen flex flex-col font-montserrat overflow-hidden">
      {/* Top Tagline */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center w-full px-8">
        <div className="flex-1 border-t border-blue-200"></div>
        <p className="text-black text-md font-semibold tracking-wide px-4 whitespace-nowrap">
          Design that define you !
        </p>
        <div className="flex-1 border-t border-blue-200"></div>
      </div>

      {/* Centered Content */}
      <div className="flex flex-1 items-center justify-center text-center px-6 z-10 mt-56">
        <div>
         <p className="text-blue-500 text-lg md:text-xl mt-2 font-medium">
            Ahmed Saleem
          </h2>
          <h1 className="text-black text-[72px] md:text-[100px] lg:text-[120px] font-extrabold leading-none tracking-tight">
            portfolio
          </h1>
          <p className="text-blue-500 text-lg md:text-xl mt-2 font-medium">
            Social Media Graphic Design
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
    </section>
  );
};

export default Hero;
