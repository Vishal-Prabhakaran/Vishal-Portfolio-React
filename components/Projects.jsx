import React from 'react';
import { motion } from 'framer-motion';
import oncallImage from '../assets/image.png';

const projects = [
  {
    title: 'OnCallActingDriver Platform',
    description: 'A comprehensive platform connecting users with professional acting drivers for safe and reliable transportation services. Built with a scalable architecture and modern UI/UX best practices.',
    tags: ['Angular', '.NET', 'MySQL', 'Azure'],
    imageUrl: oncallImage,
    liveUrl: 'https://www.oncallactingdriver.com',
    featured: true,
  },
  {
    title: 'Pluso',
    description: 'A modern landing page and platform for Pluso, featuring an interactive and visually engaging tech-focused web presence with smooth animations and responsive design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/pluso/400/250',
    liveUrl: 'https://www.pluso.in',
    featured: true,
  }
];

const cardVariants = {
  offscreen: {
    y: 80,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const FeaturedProject = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.3, once: true }}
      variants={cardVariants}
      className="relative mb-16 md:mb-24 last:mb-0"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-4 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
        {/* Image Side */}
        <div className={`lg:col-span-7 relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block relative rounded-xl overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10 rounded-xl" />
            <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-dark-bg/10 transition-all duration-500 z-10 rounded-xl" />
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Content Side */}
        <div className={`lg:col-span-5 relative z-20 ${isEven ? 'lg:order-2 lg:-ml-16' : 'lg:order-1 lg:-mr-16'} ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
          <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
          <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-4 hover:text-accent transition-colors duration-300">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>
          
          {/* Description Card */}
          <div className="bg-dark-card p-6 rounded-xl shadow-2xl shadow-black/30 border border-dark-text-secondary/10 mb-4">
            <p className="text-dark-text-secondary leading-relaxed text-[0.95rem]">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className={`flex flex-wrap gap-2 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs font-mono tracking-wider text-accent/80 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className={`flex items-center gap-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark-text-secondary hover:text-accent transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
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
                className="text-dark-text-secondary hover:text-accent transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-dark-text mb-16 font-mono flex items-center"
        >
          <span className="text-accent mr-4">03.</span>
          <span className="react-bits-text">Some Things I've Built</span>
          <span className="ml-6 h-px w-12 md:w-32 lg:w-48 bg-dark-text-secondary/30 hidden sm:block"></span>
        </motion.h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
