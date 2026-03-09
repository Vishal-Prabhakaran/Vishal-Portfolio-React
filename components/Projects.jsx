import React from 'react';
import { motion } from 'framer-motion';

const onCallDriverLogo = 'data:image/png;base64,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';

const projects = [
  {
    title: 'OnCallActingDriver Platform',
    description: 'A comprehensive platform connecting users with professional acting drivers for safe and reliable transportation services.',
    tags: ['Angular', '.NET', 'MySQL', 'Azure'],
    imageUrl: '/image.png',
    liveUrl: 'https://www.oncallactingdriver.com',
  },
  {
    title: 'Pluso',
    description: 'A modern landing page and platform for Pluso, featuring an interactive and attractive tech-focused web presence.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/pluso/400/250',
    liveUrl: 'https://www.pluso.in',
  }
];

const cardVariants = {
    offscreen: {
        y: 300,
        opacity: 0,
        rotate: -5,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.4, once: false }}
      style={{ marginBottom: "-90px", position: "relative", zIndex: index }}
      className="flex justify-center w-full max-w-2xl mx-auto"
    >
      <motion.div 
        variants={cardVariants}
        className="group relative flex flex-col bg-dark-card rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 w-full border border-dark-card shadow-black/50"
        style={{ minHeight: "440px" }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
        
        <div className="relative h-56 overflow-hidden bg-dark-bg/50 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent z-10 opacity-90"></div>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-card border border-accent/40 text-accent hover:bg-accent hover:text-dark-bg transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-card border border-accent/40 text-accent hover:bg-accent hover:text-dark-bg transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
              >
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
        
        <div className="relative p-6 md:p-8 pb-28 flex flex-col flex-grow bg-dark-card mt-[-20px] z-10 rounded-t-3xl">
          <h3 className="text-2xl font-bold text-dark-text mb-4 group-hover:text-accent transition-colors duration-300 font-display">
            {project.title}
          </h3>
          <p className="text-dark-text-secondary w-full mb-6 flex-grow text-[0.95rem] leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs font-mono tracking-wider text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-auto pt-6 border-t border-dark-text-secondary/10 flex items-center space-x-6">
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-text-secondary hover:text-accent transition-colors flex items-center gap-2 group/link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="text-sm font-bold">Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-text-secondary hover:text-accent transition-colors flex items-center gap-2 group/link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span className="text-sm font-bold">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-40 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-dark-text mb-16 font-mono flex items-center justify-start max-w-4xl mx-auto"
        >
          <span className="text-accent mr-4">03.</span>
          <span className="react-bits-text">Some Things I've Built</span>
          <span className="ml-6 h-px w-12 md:w-32 lg:w-48 bg-dark-text-secondary/30 hidden sm:block"></span>
        </motion.h2>
        
        <div className="flex flex-col items-center pb-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
