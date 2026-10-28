import React from 'react';
import { motion } from 'framer-motion';
import vishalImage from '../assets/vishal.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }
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

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left - Text Content */}
        <motion.div 
          className="relative z-10 flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-10 w-20 h-20 border border-accent/20 rounded-full flex items-center justify-center hidden xl:flex"
          >
            <div className="w-12 h-12 border border-accent/30 rounded-full"></div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-accent font-mono text-sm md:text-lg mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-accent/40"></span>
            Hi, I Am
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl react-bits-text mb-4 leading-tight py-2">
            Vishal
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text-secondary mb-4 leading-tight">
            I build solutions for the web.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-dark-text-secondary/80 max-w-lg mb-8 text-base md:text-lg leading-relaxed">
            Full Stack Developer crafting performant, accessible web applications with modern technologies. Currently building impactful products at <span className="text-accent font-medium">E2o Technologies</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="group relative px-8 py-4 font-mono text-base md:text-lg border-2 border-accent text-accent rounded-lg overflow-hidden"
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
              className="px-8 py-4 font-mono text-base md:text-lg border-2 border-dark-text-secondary/30 text-dark-text-secondary rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-8 mt-12 pt-8 border-t border-dark-text-secondary/10"
          >
            <div>
              <span className="text-2xl md:text-3xl font-bold text-accent font-mono">1+</span>
              <p className="text-xs md:text-sm text-dark-text-secondary mt-1">Years Experience</p>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-bold text-accent font-mono">5+</span>
              <p className="text-xs md:text-sm text-dark-text-secondary mt-1">Projects Delivered</p>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-bold text-accent font-mono">10+</span>
              <p className="text-xs md:text-sm text-dark-text-secondary mt-1">Technologies</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Hero Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          {/* Animated rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-accent/20 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border border-accent/10 border-dashed hidden md:block"
          />
          
          {/* Accent dots on the ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-accent/60 rounded-full" />
          </motion.div>

          {/* Glow behind image */}
          <div className="absolute inset-4 bg-accent/20 rounded-full blur-2xl" />
          
          {/* Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 shadow-xl shadow-accent/10">
            <img
              src={vishalImage}
              alt="Vishal P"
              className="w-full h-full object-cover object-top filter grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply hover:opacity-0 transition-opacity duration-500" />
          </div>

          {/* Status badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="absolute -bottom-2 -right-2 bg-dark-card border border-accent/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-accent">Available</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
