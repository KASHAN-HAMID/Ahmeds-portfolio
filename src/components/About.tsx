
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Hello Everyone,
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              I'm Ahmed Saleem
            </p>
            <p className="text-blue-600 font-medium text-lg">
              Freelance Graphic Designer
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p>
              I am a <span className="text-black font-semibold">Self-taught Freelance Graphic Designer</span> with <span className="text-blue-600">3 years of experience</span> as a Social Media Designer. Worked with <span className="text-black">200+ clients</span> for more than <span className="text-black">1500+ designs</span>.
            </p>
            <p>
              I don't just design — I will save your time, I will use AI to speed up workflows & enhance creativity.
            </p>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">200+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">03+</div>
              <div className="text-sm text-gray-600">Years of Work Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">60000+</div>
              <div className="text-sm text-gray-600">Followers on Instagram</div>
            </div>
          </div>
          
          {/* Contact */}
          <div className="pt-6">
            <p className="text-gray-600 mb-2">📧 business.jaiswalutkarsh@gmail.com</p>
            <p className="text-blue-600 italic">Yes, I'm also a Content Creator</p>
          </div>
        </div>
        
        {/* Right content - Profile area */}
        <div className="relative">
  <img src="/portfolio/8.jpg" alt="Profile" className="w-full h-auto rounded-3xl" />
</div>

      </div>
    </section>
  );
};

export default About;
