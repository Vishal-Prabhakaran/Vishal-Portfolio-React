import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 2, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
      />

      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-10 w-20 h-20 border border-accent/20 rounded-full flex items-center justify-center"
        >
          <div className="w-12 h-12 border border-accent/30 rounded-full"></div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-20 top-1/3 w-16 h-16 border border-accent/10 rounded-full flex items-center justify-center"
        >
          <div className="w-8 h-8 border border-accent/20 rounded-full"></div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-accent font-mono text-sm md:text-lg mb-6 flex items-center gap-3">
          <span className="w-12 h-px bg-accent/40"></span>
          Hi, I Am
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl react-bits-text mb-4 leading-tight py-2">
          Vishal
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text-secondary mb-8 leading-tight">
          I build solutions for the web.
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
