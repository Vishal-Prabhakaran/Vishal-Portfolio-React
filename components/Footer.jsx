import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center relative overflow-hidden pb-24 md:pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/30"></div>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-accent rounded-full"
          />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/30"></div>
        </div>

        <p className="font-mono text-sm text-dark-text-secondary mb-4">
          <span className="text-accent">Designed & Built</span> by Vishal P
        </p>
        
        <p className="font-mono text-xs text-dark-text-secondary/50">
          © {currentYear} All rights reserved.
        </p>

        {/* Tech Stack Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs text-dark-text-secondary/40">Built with</span>
          {['React', 'JavaScript', 'Tailwind', 'Framer Motion'].map(tech => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-dark-card/50 border border-accent/10 text-accent/70 font-mono hover:text-accent hover:border-accent/30 transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
