import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center relative overflow-hidden pb-24 md:pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-accent/30"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="w-12 h-px bg-accent/30"></div>
        </div>

        <p className="font-mono text-sm text-dark-text-secondary mb-4">
          <span className="text-accent">Designed & Built</span> by Vishal P.
        </p>
        
        <p className="font-mono text-xs text-dark-text-secondary/50">
          © {currentYear} All rights reserved.
        </p>

        {/* Tech Stack Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs text-dark-text-secondary/40">Built with</span>
          <span className="text-xs px-2 py-1 rounded bg-dark-card/50 border border-accent/10 text-accent font-mono">React</span>
          <span className="text-xs px-2 py-1 rounded bg-dark-card/50 border border-accent/10 text-accent font-mono">TypeScript</span>
          <span className="text-xs px-2 py-1 rounded bg-dark-card/50 border border-accent/10 text-accent font-mono">Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
