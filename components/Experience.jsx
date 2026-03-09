import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
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

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeExperience = experiences[activeTab];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-dark-text mb-8 font-mono flex items-center">
          <span className="text-accent mr-4">02.</span>
          <span className="react-bits-text">Where I've Worked</span>
          <span className="ml-6 h-px w-24 md:w-64 bg-dark-text-secondary/30"></span>
        </motion.h2>

        <div className="flex flex-col md:flex-row min-h-[300px]">

          {/* LEFT SIDE TABS */}
          <motion.div variants={itemVariants} className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-dark-card mb-6 md:mb-0 md:mr-6">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-6 py-4 font-mono text-sm whitespace-nowrap transition-all duration-300 relative
                  ${activeTab === index
                    ? 'text-accent bg-dark-card/80 md:border-l-2 -ml-px shadow-lg'
                    : 'text-dark-text-secondary hover:text-accent hover:bg-dark-card/40 border-dark-card'
                  }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-0 bottom-0 w-full md:w-[2px] bg-accent/10 md:bg-accent/0"
                    initial={false}
                    animate={{ backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="hidden md:block absolute left-[-2px] top-0 bottom-0 w-[2px] bg-accent" />
                  </motion.div>
                )}
                <span className="relative z-10 flex items-center gap-3">
                  {activeTab === index && (
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  )}
                  {exp.company}
                </span>
              </button>
            ))}
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex-grow relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative"
              >
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
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="flex items-start group"
                          >
                            <span className="text-accent mr-4 text-lg mt-0.5 group-hover:scale-125 transition-transform duration-200">▹</span>
                            <span className="text-dark-text-secondary leading-relaxed group-hover:text-dark-text transition-colors duration-200">
                              {task}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Experience;
