import React, { useEffect, useRef } from 'react';

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 300;

    const particles: any[] = [];
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
        this.speedY = Math.random() * -1.5 - 0.3;
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {images.map((img, idx) => (
        <div key={idx} className="w-full overflow-hidden">
          <img
            src={img}
            alt={`Portfolio project ${idx + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}

      <footer className="footer-container relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-16 overflow-hidden border-t border-gray-100">
        {/* Particle Animation Behind Footer Content */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-10 pointer-events-none"
        />

        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 -z-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-100 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-2xl animate-ping"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Footer Heading */}
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

          {/* Contact Icons */}
          <div className="flex justify-center items-center space-x-12 mb-12">
            {/* Email */}
            <a
              href="mailto:ahmedsaleem522188@gmail.com"
              className="hover:scale-125 transition-transform duration-300"
              title="Email"
            >
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ahmed_saleem098"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
              title="Instagram"
            >
              <svg
                className="w-8 h-8 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923090667720"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
              title="WhatsApp"
            >
              <svg
                className="w-8 h-8 text-green-600"
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.001 2.667a13.316 13.316 0 00-11.39 20.166L2.667 29.334l6.784-1.927a13.334 13.334 0 106.55-24.74zM16 26.667c-1.92 0-3.8-.507-5.457-1.47l-.39-.232-4.023 1.14 1.14-3.903-.25-.4a10.648 10.648 0 1118.69-1.456A10.628 10.628 0 0116 26.667zm5.61-7.963c-.307-.153-1.813-.895-2.096-.997-.28-.1-.484-.153-.688.153s-.788.997-.964 1.203c-.173.2-.356.22-.663.075-.308-.154-1.3-.478-2.476-1.522-.914-.814-1.53-1.82-1.71-2.127-.18-.307-.02-.472.135-.625.14-.14.308-.356.46-.533.154-.18.205-.3.31-.5.103-.2.052-.38-.025-.533-.077-.153-.688-1.665-.944-2.278-.247-.593-.5-.513-.688-.522l-.59-.01c-.2 0-.523.075-.796.38s-1.05 1.02-1.05 2.48 1.075 2.875 1.225 3.075c.153.2 2.113 3.225 5.12 4.523 2.557 1.11 3.092 1.202 4.195 1.014.673-.112 2.063-.843 2.355-1.657.29-.812.29-1.51.202-1.657-.09-.147-.277-.22-.585-.373z" />
              </svg>
            </a>
          </div>

          {/* Thank You Note */}
          <div className="text-center mb-8">
            <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/30">
              <p className="text-lg text-gray-600 font-light italic">
                Thank You for Visiting My Portfolio!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioProjects;
