import React, { useState } from 'react';
import type { Experience } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences: Experience[] = [
  {
    company: "Pencil Walk private limited",
    roles: [
      {
        role: "Web Development Intern",
        period: "Internship",
        tasks: [
          "Worked with a team to build and maintain web applications using HTML, CSS, JavaScript, and PHP.",
          "Gained hands-on experience in real-time project development cycles and agile methodologies.",
          "Enhanced web development skills by applying them to practical, industry-level tasks.",
          "Contributed to creating responsive and user-friendly web interfaces for various clients."
        ]
      }
    ]
  },
  {
    company: "E2o technologies",
    roles: [
      {
        role: "Junior Software Developer",
        period: "Nov 2025 - Present",
        tasks: [
          "Develop and maintain scalable web applications using modern front-end and back-end technologies.",
          "Collaborate with cross-functional teams to define, design, and ship new features.",
          "Participate in the full software development lifecycle, from concept and design to testing and deployment.",
          "Write clean, maintainable, and efficient code while adhering to best practices."
        ]
      },
      {
        role: "Full Stack Developer Intern",
        period: "June 2025 - Oct 2025",
        tasks: [
          "Assisted in the development of new features for client-facing web applications.",
          "Gained practical experience with Angular, .NET, and agile development methodologies.",
          "Contributed to bug fixing and improving application performance.",
          "Participated in code reviews to maintain code quality and learn from senior developers."
        ]
      }
    ]
  }
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const activeExperience = experiences[activeTab];

  return (
    <section ref={ref} id="experience" className="py-24 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <h2 className="text-3xl font-bold text-dark-text mb-8 font-mono flex items-center">
          <span className="text-accent mr-4">02.</span>
          <span className="gradient-text">Where I've Worked</span>
          <span className="ml-6 h-px w-24 md:w-64 bg-dark-text-secondary/30"></span>
        </h2>

        <div className="flex flex-col md:flex-row min-h-[300px]">

          {/* LEFT SIDE TABS */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-dark-card mb-6 md:mb-0 md:mr-6">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-6 py-4 font-mono text-sm whitespace-nowrap transition-all duration-300 
                  ${activeTab === index
                    ? 'text-accent bg-dark-card/80 border-accent md:border-l-2 -ml-px shadow-lg'
                    : 'text-dark-text-secondary hover:text-accent hover:bg-dark-card/40 border-dark-card'
                  }`}
              >
                <span className="flex items-center gap-3">
                  {activeTab === index && (
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  )}
                  {exp.company}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex-grow relative">
            {/* Animated Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-xl blur-lg opacity-0 transition-opacity duration-500"></div>
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-dark-text mb-2">
                {activeExperience.company}
              </h3>
              
              <div className="space-y-8">
                {activeExperience.roles.map((role, idx) => (
                  <div key={idx} className="relative">
                    {/* Connecting Line */}
                    {idx > 0 && (
                      <div className="absolute -left-6 top-0 w-px h-8 bg-accent/30"></div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                      <h4 className="text-xl font-semibold text-accent">
                        {role.role}
                      </h4>
                      <span className="font-mono text-sm text-dark-text-secondary/70 px-3 py-1 bg-dark-card/50 rounded-full border border-dark-text-secondary/20">
                        {role.period}
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {role.tasks.map((task, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="text-accent mr-4 text-lg mt-0.5 group-hover:scale-125 transition-transform duration-200">▹</span>
                          <span className="text-dark-text-secondary leading-relaxed group-hover:text-dark-text transition-colors duration-200">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
