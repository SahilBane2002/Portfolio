import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Menu, X, ChevronRight, Download, Home, User, Briefcase, Code, BookOpen, Award, FileText, Sun, Moon } from 'lucide-react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);

    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }

    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsNavOpen(false);
  };

  const getThemeColors = () => {
    if (isDarkMode) {
      return {
        bg: 'bg-gray-900',
        cardBg: 'bg-gray-800',
        text: 'text-white',
        textSecondary: 'text-gray-300',
        textMuted: 'text-gray-400',
        border: 'border-gray-700',
        hover: 'hover:bg-gray-700'
      };
    } else {
      return {
        bg: 'bg-gray-50',
        cardBg: 'bg-white',
        text: 'text-gray-800',
        textSecondary: 'text-gray-700',
        textMuted: 'text-gray-500',
        border: 'border-gray-100',
        hover: 'hover:bg-gray-50'
      };
    }
  };

  const theme = getThemeColors();

  // Sidebar Navigation
  const SideNavbar = () => (
    <nav className={`fixed left-0 top-0 h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-64 shadow-2xl z-50 flex flex-col transition-all duration-300 border-r-4`} style={{borderRightColor: '#8CB369'}}>
      <div className={`p-6 border-b ${theme.border}`}>
        <a 
          href="#home" 
          onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
          className={`text-xl font-bold ${theme.text} flex items-center`}
        >
          <span className="block mr-3 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{backgroundColor: '#F4A259'}}>SB</span>
          Sahil Bane
        </a>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-2">
          <a 
            href="#home" 
            onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
            className={`flex items-center py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === 'home' ? 'text-white font-semibold shadow-lg transform scale-105' : `${theme.textMuted} hover:${theme.text} ${theme.hover}`}`}
            style={activeSection === 'home' ? {backgroundColor: '#F4A259'} : {}}
          >
            <Home className="h-5 w-5 mr-3" />
            <span>Home</span>
          </a>
          <a 
            href="#about" 
            onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
            className={`flex items-center py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === 'about' ? 'text-white font-semibold shadow-lg transform scale-105' : `${theme.textMuted} hover:${theme.text} ${theme.hover}`}`}
            style={activeSection === 'about' ? {backgroundColor: '#F4A259'} : {}}
          >
            <User className="h-5 w-5 mr-3" />
            <span>About</span>
          </a>
          <a 
            href="#education" 
            onClick={(e) => {e.preventDefault(); scrollToSection('education');}}
            className={`flex items-center py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === 'education' ? 'text-white font-semibold shadow-lg transform scale-105' : `${theme.textMuted} hover:${theme.text} ${theme.hover}`}`}
            style={activeSection === 'education' ? {backgroundColor: '#F4A259'} : {}}
          >
            <BookOpen className="h-5 w-5 mr-3" />
            <span>Education</span>
          </a>
          <a 
            href="#experience" 
            onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}
            className={`flex items-center py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === 'experience' ? 'text-white font-semibold shadow-lg transform scale-105' : `${theme.textMuted} hover:${theme.text} ${theme.hover}`}`}
            style={activeSection === 'experience' ? {backgroundColor: '#F4A259'} : {}}
          >
            <Briefcase className="h-5 w-5 mr-3" />
            <span>Experience</span>
          </a>
          <a 
            href="#skills" 
            onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}
            className={`flex items-center py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === 'skills' ? 'text-white font-semibold shadow-lg transform scale-105' : `${theme.textMuted} hover:${theme.text} ${theme.hover}`}`}
            style={activeSection === 'skills' ? {backgroundColor: '#F4A259'} : {}}
          >
            <Code className="h-5 w-5 mr-3" />
            <span>Skills</span>
          </a>
          <a 
            href="#projects" 
            onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}
            className={`flex items-center py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === 'projects' ? 'text-white font-semibold shadow-lg transform scale-105' : `${theme.textMuted} hover:${theme.text} ${theme.hover}`}`}
            style={activeSection === 'projects' ? {backgroundColor: '#F4A259'} : {}}
          >
            <Award className="h-5 w-5 mr-3" />
            <span>Projects</span>
          </a>
        </div>
      </div>
      
      <div className={`p-6 border-t ${theme.border}`}>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`w-full mb-4 flex items-center justify-center px-4 py-3 font-semibold rounded-xl transition-all duration-200 ${theme.textMuted} ${theme.hover} border-2`}
          style={{borderColor: '#8CB369'}}
        >
          {isDarkMode ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <a 
          href="MasterResume.pdf" 
          className="flex items-center justify-center w-full px-4 py-3 font-semibold rounded-xl transition-all duration-200 text-white hover:shadow-lg transform hover:scale-105"
          style={{backgroundColor: '#8CB369'}}
        >
          <FileText className="h-5 w-5 mr-2" />
          <span>Download CV</span>
        </a>
        
        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://github.com/SahilBane2002" className={`${theme.textMuted} hover:text-orange-500 transition-colors transform hover:scale-110`}>
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/sahilbane" className={`${theme.textMuted} hover:text-green-600 transition-colors transform hover:scale-110`}>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:bane.s@northeastern.edu" className={`${theme.textMuted} hover:text-orange-500 transition-colors transform hover:scale-110`}>
            <Mail className="h-6 w-6" />
          </a>
          {/* <a href="tel:+16176592832" className={`${theme.textMuted} hover:text-orange-500 transition-colors transform hover:scale-110`}>
            <Phone className="h-6 w-6" />
          </a> */}
        </div>
      </div>
    </nav>
  );

  // Mobile Navigation
  const MobileNavbar = () => (
    <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg py-3`}>
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
              className={`text-xl font-bold ${theme.text}`}
            >
              Sahil Bane
            </a>
          </div>
          
          {/* Mobile menu button and dark mode toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`${theme.textMuted} hover:text-orange-500 transition-colors`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`focus:outline-none ${theme.textMuted} hover:text-orange-500 transition-colors`}
            >
              {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      {isNavOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
            onClick={() => setIsNavOpen(false)}
          ></div>
          
          {/* Side drawer */}
          <div className={`relative flex-1 flex flex-col max-w-xs w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsNavOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4 mb-5">
                <h2 className={`text-xl font-bold ${theme.text}`}>Sahil Bane</h2>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {['home', 'about', 'education', 'experience', 'skills', 'projects'].map((section) => (
                  <a 
                    key={section}
                    href={`#${section}`} 
                    onClick={(e) => {e.preventDefault(); scrollToSection(section);}}
                    className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === section ? 'text-white' : `${theme.textSecondary} hover:${theme.text} ${theme.hover}`}`}
                    style={activeSection === section ? {backgroundColor: '#F4A259'} : {}}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
                <div className="pt-5">
                  <a 
                    href="MasterResume.pdf" 
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition-all duration-200"
                    style={{backgroundColor: '#8CB369'}}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-300`}>
      {isSmallScreen ? <MobileNavbar /> : <SideNavbar />}

      {/* Hero Section */}
      <section id="home" className={`${isSmallScreen ? 'pt-16' : 'ml-64'}`}>
        <div className="relative overflow-hidden" style={{background: `linear-gradient(135deg, #8CB369 0%, #F4E285 50%, #F4A259 100%)`}}>
          <div className="absolute inset-0 bg-black opacity-15"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-800 sm:text-7xl pb-4 tracking-tight drop-shadow-lg">
                Sahil Bane
              </h1>
              <div className="h-2 w-32 mx-auto my-6 rounded-full" style={{backgroundColor: '#F4A259'}}></div>
              <p className="mt-6 text-3xl text-gray-800 font-medium drop-shadow-md">
                Software Engineer
              </p>
              <p className="mt-3 text-xl text-gray-700 drop-shadow-sm">
                Available from May 2025
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <a href="https://github.com/SahilBane2002" 
                   className="flex items-center bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-2xl border-2 border-white/70 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
                   aria-label="GitHub Profile">
                  <Github className="h-5 w-5 mr-3" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/sahilbane" 
                   className="flex items-center bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-2xl border-2 border-white/70 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
                   aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:bane.s@northeastern.edu" 
                   className="flex items-center bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-2xl border-2 border-white/70 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
                   aria-label="Email Me">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>Email</span>
                </a>
                {/* <a href="tel:+16176592832" 
                   className="flex items-center bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-2xl border-2 border-white/70 hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
                   aria-label="Call Me">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>Phone</span>
                </a> */}
                <div className="flex items-center bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-2xl border-2 border-white/70 font-medium">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Boston, MA</span>
                </div>
              </div>
              <div className="mt-12">
                <a 
                  href="#about" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
                  className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  style={{backgroundColor: '#F4A259'}}
                >
                  Learn More
                  <ChevronRight className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className={`${theme.bg} ${isSmallScreen ? '' : 'ml-64'} transition-colors duration-300`}>
        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${theme.text} sm:text-5xl mb-4`}>About Me</h2>
              <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#F4A259'}}></div>
            </div>
            <div className={`${theme.cardBg} rounded-3xl shadow-2xl p-10 md:p-16 transform hover:scale-[1.01] transition-transform duration-300`}>
              <div className="md:flex md:items-start md:space-x-12">
                <div className="md:flex-1">
                  <p className={`${theme.textSecondary} leading-relaxed text-lg mb-8`}>
                    I am a Master's student in Computer Science at Northeastern University's Khoury College of Computer Sciences, with a strong foundation in Electronics and Computer Science Engineering acquired during my undergraduate studies. My passion lies in leveraging cutting-edge technology to solve real-world problems and make a meaningful impact.
                  </p>
                  
                  <p className={`${theme.textSecondary} leading-relaxed text-lg mb-8`}>
                    I am an efficient problem solver who thrives on challenges and believes that coding can create solutions to a positive impact.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#F4A259'}}>Actively Seeking Roles</h3>
                  <p className={`${theme.textSecondary} leading-relaxed text-lg mb-8`}>
                    I am excited to bring my skills and passion to roles like AI Developer, Full-Stack Developer, or Database Engineer. If you're looking for a dedicated team player eager to innovate and grow, let's connect!
                  </p>
                  
                  <div className="mt-10">
                    <a 
                      href="MasterResume.pdf" 
                      className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      style={{backgroundColor: '#8CB369'}}
                    >
                      <Download className="mr-3 h-6 w-6" />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${theme.text} sm:text-5xl mb-4`}>Education</h2>
              <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#F4A259'}}></div>
            </div>
            <div className="space-y-10">
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-l-8`} style={{borderLeftColor: '#8CB369'}}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#F4A259'}}>Masters of Science in Computer Science</h3>
                    <p className="text-xl font-semibold mb-2" style={{color: '#8CB369'}}>Northeastern University</p>
                  </div>
                  <span className={`mt-4 lg:mt-0 inline-block font-bold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} px-6 py-2 rounded-full text-lg`} style={{backgroundColor: '#F4E285'}}>Sept. 2024 - Present</span>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className={`${theme.text} text-lg`}>
                      <span className="font-bold" style={{color: '#F4A259'}}>GPA:</span> 3.83/4.0
                    </p>
                  </div>
                  <div>
                    <p className={`${theme.text} text-lg`}>
                      <span className="font-bold" style={{color: '#F4A259'}}>Coursework:</span> Algorithms, Foundations of Artificial Intelligence, Program Design Paradigm, Database Management Systems, Natural Language Processing, Machine Learning
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-l-8`} style={{borderLeftColor: '#8CB369'}}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#F4A259'}}>BE in Electronics and Computer Science</h3>
                    <p className="text-xl font-semibold mb-2" style={{color: '#8CB369'}}>University of Mumbai</p>
                    <p className={`${theme.textMuted} text-lg`}>Honors in Blockchain</p>
                  </div>
                  <span className={`mt-4 lg:mt-0 inline-block font-bold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'} px-6 py-2 rounded-full text-lg`} style={{backgroundColor: '#F4E285'}}>Feb. 2021 - May 2024</span>
                </div>
                
                <div className="mt-8">
                  <p className={`${theme.text} text-lg`}>
                    <span className="font-bold" style={{color: '#F4A259'}}>GPA:</span> 9.42/10.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${theme.text} sm:text-5xl mb-4`}>Experience</h2>
              <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#F4A259'}}></div>
            </div>
            <div className="space-y-10">
              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-t-8`} style={{borderTopColor: '#8CB369'}}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#F4A259'}}>Teaching Assistant</h3>
                    <p className="text-xl font-semibold mb-1" style={{color: '#8CB369'}}>Northeastern University</p>
                    <p className={`${theme.textMuted} text-lg`}>Boston, MA</p>
                  </div>
                  <span className={`mt-4 lg:mt-0 inline-block font-semibold px-6 py-2 rounded-full text-lg ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>Jan. 2025 - Present</span>
                </div>
                <ul className={`${theme.textSecondary} list-disc ml-6 space-y-4 text-lg`}>
                  <li>Helped 20 students succeed by providing timely and constructive feedback and tutoring sessions for the graduate level Intermediate Programming Course</li>
                  <li>Provided crucial insights with code reviews and evaluation of algorithms for efficiency and optimization</li>
                </ul>
              </div>

              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-t-8`} style={{borderTopColor: '#8CB369'}}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#F4A259'}}>Technical Intern</h3>
                    <p className="text-xl font-semibold mb-1" style={{color: '#8CB369'}}>Rosefield Energy Tech.</p>
                    <p className={`${theme.textMuted} text-lg`}>Mumbai, India</p>
                  </div>
                  <span className={`mt-4 lg:mt-0 inline-block font-semibold px-6 py-2 rounded-full text-lg ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>Sept. 2023 - Dec. 2023</span>
                </div>
                <ul className={`${theme.textSecondary} list-disc ml-6 space-y-4 text-lg`}>
                  <li>Collaborated with the technical team to design and launch 3 visually appealing, user-friendly websites, increasing user engagement</li>
                  <li>Developed the Rosefield Conference website for the Lubricants and Fuels event, resulting in a 30% increase in online registrations and a 20% boost in event attendance</li>
                  <li>Analyzed and identified warehousing solutions to clients using data analytic tools improving inventory management efficiency by 75%</li>
                </ul>
              </div>
              
              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-t-8`} style={{borderTopColor: '#8CB369'}}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#F4A259'}}>Organization Lead</h3>
                    <p className="text-xl font-semibold mb-1" style={{color: '#8CB369'}}>Game Developers Association</p>
                    <p className={`${theme.textMuted} text-lg`}>Mumbai, India</p>
                  </div>
                  <span className={`mt-4 lg:mt-0 inline-block font-semibold px-6 py-2 rounded-full text-lg ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>Aug. 2022 - Aug. 2023</span>
                </div>
                <ul className={`${theme.textSecondary} list-disc ml-6 space-y-4 text-lg`}>
                  <li>Co-founded one of the first game development communities in the city, fostering innovation and collaboration</li>
                  <li>Led a team of 20 developers to create Ashtagraha, an award-winning educational game designed to teach planetary science to children. The game earned top honors at the Mumbai Hackathon and Smart India Hackathon, and was a finalist in the E-Cell Idea Competition.</li>
                  <li>Pioneered Prop Hunt, a multiplayer game that received overwhelmingly positive feedback from Devfolio, Instagram and Unstop</li>
                  <li>Directed Strategem, the association's flagship hackathon which hosted over 1,000 participants</li>
                </ul>
              </div>
              
              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-t-8`} style={{borderTopColor: '#8CB369'}}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: '#F4A259'}}>Undergraduate Research Assistant</h3>
                    <p className="text-xl font-semibold mb-1" style={{color: '#8CB369'}}>Fr. Conceicao Rodrigues College of Engineering</p>
                    <p className={`${theme.textMuted} text-lg`}>Mumbai, India</p>
                  </div>
                  <span className={`mt-4 lg:mt-0 inline-block font-semibold px-6 py-2 rounded-full text-lg ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>Sept. 2022 - May 2023</span>
                </div>
                <ul className={`${theme.textSecondary} list-disc ml-6 space-y-4 text-lg`}>
                  <li>Built and evaluated emotion recognition models by implementing Deep Learning algorithms including CNN, EigenFace with PCA, and DeepFace, achieving accuracy rates of 72%, 80% and 99.93% respectively</li>
                  <li>Published the research paper "Semblance Unmasker: Hidden Emotion Recognition Using Deep Learning Approach" in IEEE 
                    <a href="https://ieeexplore.ieee.org/document/10370099" className="hover:underline ml-1 inline-flex items-center font-semibold" style={{color: '#8CB369'}}>
                      10.1109/ICSCNA58489.2023.10370099
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${theme.text} sm:text-5xl mb-4`}>Skills</h2>
              <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#F4A259'}}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {title: 'Languages', skills: ['C', 'Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Solidity', 'Dart', 'HTML', 'PHP', 'R'], bg: '#F4E285'},
                {title: 'Frontend', skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS'], bg: '#8CB369'},
                {title: 'Backend', skills: ['Node.js', 'Express', 'Django', 'MongoDB'], bg: '#F4A259'},
                {title: 'Cloud & DevOps', skills: ['AWS', 'Docker'], bg: '#F4E285'},
                {title: 'Game Development', skills: ['Unity', 'Unreal Engine'], bg: '#8CB369'},
                {title: 'AI & ML', skills: ['OpenCV', 'Scikit-Learn', 'PyTorch', 'TensorFlow'], bg: '#F4A259'},
                {title: 'Blockchain', skills: ['Ganache', 'Truffle', 'Web3.js'], bg: '#F4E285'},
                {title: 'Tools', skills: ['Git', 'GitHub'], bg: '#8CB369'}
              ].map((category, index) => (
                <div key={index} className="p-8 rounded-3xl shadow-xl transform hover:scale-[1.05] transition-all duration-300 border-t-8" style={{backgroundColor: category.bg, borderTopColor: '#F4A259', color: category.bg === '#F4E285' ? '#444' : 'white'}}>
                  <h3 className="font-bold text-2xl mb-6">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold ${theme.text} sm:text-5xl mb-4`}>Projects</h2>
              <div className="h-1 w-24 mx-auto rounded-full" style={{backgroundColor: '#F4A259'}}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.03] transition-all duration-300 border-l-8`} style={{borderLeftColor: '#8CB369'}}>
                <div className="flex flex-col">
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="text-2xl font-bold" style={{color: '#F4A259'}}>AI based City Layout Optimization</h3>
                    <span className={`text-sm font-bold px-4 py-2 rounded-full ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>Sept. 2024 - Dec. 2024</span>
                  </div>
                </div>
                <p className={`${theme.textSecondary} mb-8 text-lg leading-relaxed`}>
                  Designed and implemented genetic algorithms with crossover and mutation operators alongside local search heuristics to optimize urban traffic flow and intersection layouts, achieving 50% improvement in emergency response times across 15 optimized intersections. Developed a constraint-driven cost function incorporating traffic density, road capacity, and emergency vehicle priority within a grid-based environment, enhancing A* pathfinding algorithm with custom heuristics to enforce predefined movement rules and traffic regulations while maintaining 100% accuracy in navigation scenarios and optimal route planning.
                </p>
                <div className="flex space-x-6">
                  <a href="https://github.com/Jithin-Veeragandham/ai-city-architect" className="inline-flex items-center font-bold hover:underline transition-colors text-lg" style={{color: '#8CB369'}}>
                    <Github className="h-6 w-6 mr-3" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>

              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.03] transition-all duration-300 border-l-8`} style={{borderLeftColor: '#8CB369'}}>
                <div className="flex flex-col">
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="text-2xl font-bold" style={{color: '#F4A259'}}>Phishing Detection using PSO</h3>
                    <span className={`text-sm font-bold px-4 py-2 rounded-full ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>July 2023 - May 2024</span>
                  </div>
                </div>
                <p className={`${theme.textSecondary} mb-8 text-lg leading-relaxed`}>
                  Developed a cybersecurity solution combining Random Forest and XGBoost classifiers with Particle Swarm Optimization (PSO) for enhanced phishing website detection, achieving 20% improvement in accuracy over baseline models. Created a comprehensive feature extraction pipeline analyzing URL structure, domain characteristics, and HTML content patterns to identify key phishing indicators. Utilized PSO's swarm intelligence for automated hyperparameter tuning and feature selection optimization, balancing precision and recall while reducing false positives. Built using Python with scikit-learn and pandas, demonstrating the effectiveness of bio-inspired optimization algorithms in real-time cybersecurity threat assessment.
                </p>
                <div className="flex space-x-6">
                  <a href="https://github.com/SahilBane2002/PhishingDetection" className="inline-flex items-center font-bold hover:underline transition-colors text-lg" style={{color: '#8CB369'}}>
                    <Github className="h-6 w-6 mr-3" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
              
              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.03] transition-all duration-300 border-l-8`} style={{borderLeftColor: '#8CB369'}}>
                <div className="flex flex-col">
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="text-2xl font-bold" style={{color: '#F4A259'}}>Ashtagraha - Educational Game</h3>
                    <span className={`text-sm font-bold px-4 py-2 rounded-full ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>Jan. 2023 - Dec. 2023</span>
                  </div>
                </div>
                <p className={`${theme.textSecondary} mb-8 text-lg leading-relaxed`}>
                  Developed an immersive educational game focused on planetary science concepts for school children using Unreal Engine for game engine development and Blender for designing custom 3D models of planets, spacecraft, and astronomical objects. Integrated interactive gameplay mechanics with educational content delivery systems.
                </p>
                <div className="flex space-x-6">
                  {/* <a href="#" className="inline-flex items-center font-bold hover:underline transition-colors text-lg" style={{color: '#8CB369'}}>
                    <ExternalLink className="h-6 w-6 mr-3" />
                    <span>Demo</span>
                  </a> */}
                </div>
              </div>
              
              <div className={`${theme.cardBg} p-10 rounded-3xl shadow-xl transform hover:scale-[1.03] transition-all duration-300 border-l-8`} style={{borderLeftColor: '#8CB369'}}>
                <div className="flex flex-col">
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="text-2xl font-bold" style={{color: '#F4A259'}}>Emotion Recognition Research</h3>
                    <span className={`text-sm font-bold px-4 py-2 rounded-full ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`} style={{backgroundColor: '#F4E285'}}>July 2022 - May 2023</span>
                  </div>
                </div>
                <p className={`${theme.textSecondary} mb-8 text-lg leading-relaxed`}>
                  Developed "Semblance Unmasker," a deep learning-based emotion recognition system to enhance e-learning by predicting real-time student emotional states. Implemented three methodologies: CNN (72% accuracy), EigenFace with PCA (80% accuracy), and DeepFace (99.93% accuracy) using PyTorch, TensorFlow, and OpenCV for real-time facial data processing. Published research in IEEE ICSCNA 2023 demonstrating how emotion-aware systems can improve online learning effectiveness by providing teachers with insights into student engagement, ultimately reducing dropout rates and enhancing educational outcomes.
                </p>
                <div className="flex space-x-6">
                  <a href="https://ieeexplore.ieee.org/document/10370099" className="inline-flex items-center font-bold hover:underline transition-colors text-lg" style={{color: '#8CB369'}}>
                    <ExternalLink className="h-6 w-6 mr-3" />
                    <span>View Publication</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-24 text-white" style={{backgroundColor: '#F4A259'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold sm:text-5xl mb-8">Ready to Work Together?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-orange-100">
              I'm currently available for opportunities from May 2025. Let's create something amazing!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:bane.s@northeastern.edu" 
                className="px-8 py-4 font-bold rounded-2xl transition-all duration-300 inline-flex items-center text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 text-gray-700"
                style={{backgroundColor: '#F4E285'}}
              >
                <Mail className="mr-3 h-6 w-6" />
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/sahilbane" 
                className="px-8 py-4 text-white font-bold rounded-2xl border-2 border-white transition-all duration-300 inline-flex items-center text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                style={{backgroundColor: 'rgba(255,255,255,0.1)'}}
              >
                <Linkedin className="mr-3 h-6 w-6" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`text-white py-16 ${isSmallScreen ? '' : 'ml-64'}`} style={{backgroundColor: '#F4A259'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold">Sahil Bane</h3>
              <p className="mt-3 text-xl text-orange-200">Software Engineer</p>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="https://github.com/SahilBane2002" className="text-orange-200 hover:text-white transition-colors transform hover:scale-110">
                <Github className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/sahilbane" className="text-orange-200 hover:text-white transition-colors transform hover:scale-110">
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="mailto:bane.s@northeastern.edu" className="text-orange-200 hover:text-white transition-colors transform hover:scale-110">
                <Mail className="h-8 w-8" />
              </a>
              {/* <a href="tel:+16176592832" className="text-orange-200 hover:text-white transition-colors transform hover:scale-110">
                <Phone className="h-8 w-8" />
              </a> */}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-orange-400 border-opacity-30 flex flex-col md:flex-row md:justify-between">
            <p className="text-lg">© 2025 Sahil Bane. All rights reserved.</p>
            <div className="mt-6 md:mt-0 flex flex-wrap gap-8">
              <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} className="text-orange-200 hover:text-white transition-colors text-lg">Home</a>
              <a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about');}} className="text-orange-200 hover:text-white transition-colors text-lg">About</a>
              <a href="#projects" onClick={(e) => {e.preventDefault(); scrollToSection('projects');}} className="text-orange-200 hover:text-white transition-colors text-lg">Projects</a>
              <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}} className="text-orange-200 hover:text-white transition-colors text-lg">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;