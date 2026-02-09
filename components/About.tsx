import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const technologies = [
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
];

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div
        className={`relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl font-bold text-dark-text mb-8 font-mono flex items-center">
          <span className="text-accent mr-4">01.</span>
          <span className="gradient-text">About Me</span>
          <span className="ml-6 h-px w-24 md:w-64 bg-dark-text-secondary/30"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Left Section - About Text */}
          <div className="md:col-span-3 text-lg">
            <p className="mb-6 text-dark-text-secondary leading-relaxed">
              I'm a <span className="text-accent font-medium">passionate and highly motivated</span> Full Stack Web Developer 
              with a solid foundation in front-end and back-end technologies.
              I'm proficient in HTML, CSS, JavaScript, and frameworks like 
              <span className="text-accent"> Angular</span>,<span className="text-accent"> React</span> and <span className="text-accent">Node.js</span>.
            </p>
            <p className="mb-6 text-dark-text-secondary leading-relaxed">
              I am skilled in database management with <span className="text-accent">SQL</span> and <span className="text-accent">NoSQL</span> systems,
              and experienced in building responsive, user-friendly web
              applications. I possess strong problem-solving skills and a keen
              ability to learn new technologies quickly. I have completed my
              Bachelor's degree in Computer Science at Mannar Thirumalai Naicker
              College, with graduation expected in April 2026.
            </p>

            <p className="mb-8 text-dark-text-secondary leading-relaxed">
              My goal is to create impactful web solutions, focused on
              delivering clean, maintainable code while adhering to industry
              best practices. Here are a few technologies I've been working with
              recently:
            </p>

            {/* Technologies Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
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
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
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
                  alt="Vishal P."
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
