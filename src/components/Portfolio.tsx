import React, { useEffect } from 'react';

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
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.footer-container');
    container?.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    const particles = [];
    const particleCount = 40;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedY = Math.random() * -1 - 0.3;
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
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    });

    return () => {
      container?.removeChild(canvas);
    };
  }, []);

  return (
    <div className="relative">
      {images.map((img, idx) => (
        <div key={idx} className="w-full overflow-hidden">
          <img src={img} alt={`Portfolio project ${idx + 1}`} className="w-full h-auto object-cover" />
        </div>
      ))}

      <footer className="footer-container relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-16 overflow-hidden border-t border-gray-100">
        <canvas className="absolute inset-0 -z-10 pointer-events-none" />

        <div className="absolute inset-0 -z-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-100 opacity-30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-2xl animate-ping" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-gray-800 via-black to-blue-600 bg-clip-text text-transparent animate-pulse">
                Let's Create Something Amazing!
              </span>
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
              <span className="text-lg font-light text-gray-600 px-4">With Ahmed Saleem</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500" />
            </div>
          </div>

          <div className="flex justify-center items-center space-x-8 mb-12">
            <a href="mailto:ahmedsaleem522188@gmail.com" target="_blank" className="group hover:scale-110 transition-transform">
              <svg className="w-8 h-8 fill-black group-hover:fill-blue-600 transition-colors" viewBox="0 0 24 24">
                <path d="M12 13.065L0 6.002V18a2 2 0 002 2h20a2 2 0 002-2V6.002l-12 7.063zM22 4H2a2 2 0 00-2 2v.002L12 13.065 24 6.002V6a2 2 0 00-2-2z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/ahmed_saleem098" target="_blank" className="group hover:scale-110 transition-transform">
              <svg className="w-8 h-8 fill-black group-hover:fill-pink-500 transition-colors" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8a4 4 0 110 8 4 4 0 010-8zm6.5-1.75a1 1 0 110 2 1 1 0 010-2zM12 10a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </a>

            <a href="https://wa.me/923090667720" target="_blank" className="group hover:scale-110 transition-transform">
              <svg className="w-8 h-8 fill-black group-hover:fill-green-500 transition-colors" viewBox="0 0 32 32">
                <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.651.937 5.086 2.496 7.012L4 29l7.147-2.46A12.88 12.88 0 0016.001 27C22.628 27 28 21.627 28 15.001 28 8.373 22.628 3 16.001 3zm0 22.5a10.469 10.469 0 01-5.367-1.483l-.383-.23-4.286 1.478 1.448-4.178-.249-.394A10.456 10.456 0 015.5 15.001c0-5.79 4.711-10.5 10.501-10.5 5.79 0 10.499 4.71 10.499 10.5 0 5.79-4.709 10.5-10.499 10.5zm5.359-7.486c-.301-.15-1.78-.879-2.056-.978-.275-.098-.476-.15-.676.15s-.776.977-.951 1.178c-.174.201-.35.225-.651.075-.301-.15-1.27-.467-2.418-1.486-.893-.796-1.497-1.78-1.673-2.081-.174-.3-.019-.464.131-.614.135-.134.3-.35.45-.524.15-.176.2-.301.3-.501.1-.201.05-.375-.025-.525-.075-.15-.676-1.63-.925-2.229-.25-.6-.5-.525-.676-.525h-.576c-.2 0-.526.075-.801.375-.275.3-1.05 1.027-1.05 2.5s1.075 2.898 1.225 3.099c.15.2 2.125 3.25 5.15 4.549.719.31 1.28.496 1.719.636.721.23 1.375.197 1.894.12.577-.086 1.78-.725 2.033-1.425.25-.7.25-1.3.174-1.425-.075-.124-.275-.2-.576-.35z" />
              </svg>
            </a>
          </div>

          <div className="text-center mb-8">
            <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/30">
              <p className="text-lg text-gray-600 font-light italic">Thank You for Visiting My Portfolio!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioProjects;
