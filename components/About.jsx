import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "Ant Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "C# & .NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-dark-text mb-8 font-mono flex items-center">
          <span className="text-accent mr-4">01.</span>
          <span className="react-bits-text">About Me</span>
          <span className="ml-6 h-px w-24 md:w-64 bg-dark-text-secondary/30"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Left Section - About Text */}
          <div className="md:col-span-3 text-lg">
            <motion.p variants={itemVariants} className="mb-6 text-dark-text-secondary leading-relaxed">
              I am a <span className="text-accent font-medium">Full Stack Web Developer</span> focused on building efficient, scalable, and user-friendly web applications. 
              My experience covers the full web development stack, working with core technologies such as HTML, CSS, and <span className="text-accent">JavaScript</span>. 
              On the frontend, I build responsive and dynamic user interfaces using <span className="text-accent">React</span> and component libraries like <span className="text-accent">Ant Design</span>.
            </motion.p>
            <motion.p variants={itemVariants} className="mb-6 text-dark-text-secondary leading-relaxed">
              On the backend, I develop server-side applications using <span className="text-accent">C#</span> and <span className="text-accent">ASP.NET</span>, along with <span className="text-accent">Node.js</span> when required. I work with databases such as <span className="text-accent">MySQL</span> to design structured, reliable, and scalable data systems.
            </motion.p>
            <motion.p variants={itemVariants} className="mb-6 text-dark-text-secondary leading-relaxed">
              I focus on writing clean, maintainable code and building practical solutions to real-world problems. I regularly explore new technologies and improve my development practices to stay aligned with modern web development standards.
            </motion.p>
            <motion.p variants={itemVariants} className="mb-8 text-dark-text-secondary leading-relaxed">
              I have completed my Bachelor’s degree in Computer Science at Mannar Thirumalai Naicker College. My goal is to develop reliable web applications that provide strong performance and a seamless user experience.
            </motion.p>
            <motion.p variants={itemVariants} className="mb-8 text-dark-text-secondary leading-relaxed font-semibold">
              Technologies I work with include:
            </motion.p>

            {/* Technologies Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center justify-center p-4 rounded-xl bg-dark-card/50 border border-dark-text-secondary/10 transition-all duration-300 hover:bg-dark-card hover:border-accent/30 hover:-translate-y-2 card-hover"
                  title={tech.name}
                >
                  <div className="relative">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 filter group-hover:drop-shadow-lg"
                    />
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="mt-3 text-xs text-center font-mono text-dark-text-secondary group-hover:text-accent transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Section - Image */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 relative group w-full max-w-sm mx-auto"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Rotating Border */}
              <div className="absolute -inset-1 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-accent opacity-50 animate-rotate-slow"></div>
              </div>
              
              {/* Inner Container */}
              <div className="relative rounded-2xl overflow-hidden bg-dark-bg">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"></div>
                <img
                  src="/vishal.jpeg"
                  alt="Vishal P"
                  className="w-full h-full object-cover  transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/20 transition-colors duration-300"></div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-lg"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent/50 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent/50 rounded-bl-lg"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
