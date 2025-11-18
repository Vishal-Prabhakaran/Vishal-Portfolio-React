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
    <section ref={ref} id="experience" className="py-24 md:py-32">
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        <h2 className="text-3xl font-bold text-dark-text mb-8 font-mono flex items-center">
          <span className="text-accent mr-4">02.</span>Where I've Worked
          <span className="ml-6 h-px w-24 md:w-64 bg-dark-text-secondary/30"></span>
        </h2>

        <div className="flex flex-col md:flex-row min-h-[300px]">

          {/* LEFT SIDE TABS */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-dark-card mb-6 md:mb-0 md:mr-6">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-4 py-3 font-mono text-sm whitespace-nowrap transition-all duration-300 
                  ${activeTab === index
                    ? 'text-accent bg-dark-card/50 border-accent md:border-l-2 -ml-px'
                    : 'text-dark-text-secondary hover:text-accent hover:bg-dark-card/30 border-dark-card'
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-accent mb-4">
              {activeExperience.company}
            </h3>

            <div className="space-y-8">
              {activeExperience.roles.map((role, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-semibold text-dark-text">
                    {role.role}
                  </h4>

                  <p className="font-mono text-sm mb-3 text-dark-text-secondary">
                    {role.period}
                  </p>

                  <ul className="space-y-3">
                    {role.tasks.map((task, i) => (
                      <li key={i} className="flex">
                        <span className="text-accent mr-4">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
