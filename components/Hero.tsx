import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      ref={ref} 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl float-animation-delayed"></div>

      <div className={`relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative Elements */}
        <div className="absolute -left-20 top-10 w-20 h-20 border border-accent/20 rounded-full flex items-center justify-center float-animation">
          <div className="w-12 h-12 border border-accent/30 rounded-full"></div>
        </div>
        
        <div className="absolute right-20 top-1/3 w-16 h-16 border border-accent/10 rounded-full flex items-center justify-center float-animation-delayed">
          <div className="w-8 h-8 border border-accent/20 rounded-full"></div>
        </div>

        <p className="text-accent font-mono text-sm md:text-lg mb-6 flex items-center gap-3">
          <span className="w-12 h-px bg-accent/40"></span>
          Hi, I Am
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text mb-4 leading-tight">
          Vishal P.
        </h1>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text-secondary mb-8 leading-tight">
          I build solutions for the web.
        </h2>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects"
            className="group relative px-8 py-4 font-mono text-lg border-2 border-accent text-accent rounded-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-dark-bg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Check out my work!
            </span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-4 font-mono text-lg border-2 border-dark-text-secondary/30 text-dark-text-secondary rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
