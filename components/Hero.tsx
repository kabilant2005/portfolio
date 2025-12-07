import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 snap-start">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide animate-fade-in-up opacity-0" style={{ animationDelay: '0ms' }}>
          Available for Hire
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 animate-fade-in-up opacity-0" style={{ animationDelay: '150ms' }}>
          {RESUME_DATA.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>
          AI & Data Science | Full Stack Developer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '450ms' }}>
          {RESUME_DATA.objective}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all backdrop-blur-sm"
            >
              View Projects
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;