import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Use your actual resume file in the public folder
  const resumeFile = "/Vishal_Resume.pdf"; // Put this PDF inside your project's public folder

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const linkClasses =
    "relative cursor-pointer text-dark-text-secondary hover:text-accent transition-colors duration-300 px-4 py-2 rounded-md font-mono text-sm group";
  
  const mobileLinkClasses =
    "block cursor-pointer text-dark-text hover:text-accent transition-colors duration-300 py-4 text-center text-lg font-mono relative";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group relative flex items-center gap-2"
        >
          {/* Logo Effect */}
          <div className="relative">
            <span className="text-accent font-mono text-2xl font-bold transition-all duration-300 group-hover:text-accent-light">
              VP
            </span>
            <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={linkClasses}
            >
              <span className="text-accent font-mono text-xs mr-1 opacity-60">0{index + 1}.</span>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={resumeFile}
            download="Vishal_Resume.pdf"
            className="ml-4 font-mono text-sm border border-accent text-accent px-5 py-2 rounded-lg hover:bg-accent hover:text-dark-bg transition-all duration-300 btn-primary"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-accent focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute bottom-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-3' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-bg/95 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 h-screen w-4/5 max-w-sm bg-dark-card shadow-2xl flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={mobileLinkClasses}
              >
                <span className="text-accent font-mono text-sm mr-2">0{index + 1}.</span>
                {link.name}
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href={resumeFile}
              download="Vishal_Resume.pdf"
              className="mt-8 font-mono text-lg border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-dark-bg transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
