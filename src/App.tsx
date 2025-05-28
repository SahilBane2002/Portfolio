// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Menu, X, ChevronRight, Download, Home, User, Briefcase, Code, BookOpen, Award, FileText } from 'lucide-react';

// function App() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768);
//     };
    
//     // Set initial value
//     handleResize();
    
//     // Add event listener
//     window.addEventListener('resize', handleResize);

//     const handleScroll = () => {
//       // Update active section based on scroll position
//       const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
      
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth'
//       });
//     }
//     setIsNavOpen(false);
//   };

//   // Sidebar Navigation
//   const SideNavbar = () => (
//     <nav className="fixed left-0 top-0 h-full bg-blue-900 text-white w-64 shadow-xl z-50 flex flex-col transition-all duration-300">
//       <div className="p-6 border-b border-blue-800">
//         <a 
//           href="#home" 
//           onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
//           className="text-xl font-bold text-white flex items-center"
//         >
//           <span className="block mr-3 h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center">SB</span>
//           Sahil Bane
//         </a>
//       </div>
      
//       <div className="flex-1 overflow-y-auto py-6 px-4">
//         <div className="space-y-6">
//           <a 
//             href="#home" 
//             onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
//             className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'home' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800'}`}
//           >
//             <Home className="h-5 w-5 mr-3" />
//             <span>Home</span>
//           </a>
//           <a 
//             href="#about" 
//             onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
//             className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'about' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800'}`}
//           >
//             <User className="h-5 w-5 mr-3" />
//             <span>About</span>
//           </a>
//           <a 
//             href="#education" 
//             onClick={(e) => {e.preventDefault(); scrollToSection('education');}}
//             className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'education' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800'}`}
//           >
//             <BookOpen className="h-5 w-5 mr-3" />
//             <span>Education</span>
//           </a>
//           <a 
//             href="#experience" 
//             onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}
//             className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'experience' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800'}`}
//           >
//             <Briefcase className="h-5 w-5 mr-3" />
//             <span>Experience</span>
//           </a>
//           <a 
//             href="#skills" 
//             onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}
//             className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'skills' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800'}`}
//           >
//             <Code className="h-5 w-5 mr-3" />
//             <span>Skills</span>
//           </a>
//           <a 
//             href="#projects" 
//             onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}
//             className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'projects' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-800'}`}
//           >
//             <Award className="h-5 w-5 mr-3" />
//             <span>Projects</span>
//           </a>
//         </div>
//       </div>
      
//       <div className="p-6 border-t border-blue-800">
//         <a 
//           href="#" 
//           className="flex items-center justify-center w-full px-4 py-2 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
//         >
//           <FileText className="h-5 w-5 mr-2" />
//           <span>Download CV</span>
//         </a>
        
//         <div className="flex justify-center mt-6 space-x-4">
//           <a href="https://github.com/SahilBane2002" className="text-blue-200 hover:text-white transition-colors">
//             <Github className="h-5 w-5" />
//           </a>
//           <a href="https://www.linkedin.com/in/sahilbane" className="text-blue-200 hover:text-white transition-colors">
//             <Linkedin className="h-5 w-5" />
//           </a>
//           <a href="mailto:bane.s@northeastern.edu" className="text-blue-200 hover:text-white transition-colors">
//             <Mail className="h-5 w-5" />
//           </a>
//           <a href="tel:+16176592832" className="text-blue-200 hover:text-white transition-colors">
//             <Phone className="h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </nav>
//   );

//   // Mobile Navigation
//   const MobileNavbar = () => (
//     <nav className="fixed w-full z-50 bg-white shadow-md py-2">
//       <div className="px-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <a 
//               href="#home" 
//               onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
//               className="text-xl font-bold text-blue-800"
//             >
//               Sahil Bane
//             </a>
//           </div>
          
//           {/* Mobile menu button */}
//           <div className="flex items-center">
//             <button
//               onClick={() => setIsNavOpen(!isNavOpen)}
//               className="focus:outline-none text-blue-800"
//             >
//               {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Navigation Drawer */}
//       {isNavOpen && (
//         <div className="fixed inset-0 z-40 flex">
//           {/* Overlay */}
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
//             onClick={() => setIsNavOpen(false)}
//           ></div>
          
//           {/* Side drawer */}
//           <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
//             <div className="absolute top-0 right-0 -mr-12 pt-2">
//               <button
//                 className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 onClick={() => setIsNavOpen(false)}
//               >
//                 <span className="sr-only">Close sidebar</span>
//                 <X className="h-6 w-6 text-white" />
//               </button>
//             </div>
            
//             <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
//               <div className="flex-shrink-0 flex items-center px-4 mb-5">
//                 <h2 className="text-xl font-bold text-blue-800">Sahil Bane</h2>
//               </div>
//               <nav className="mt-5 px-2 space-y-1">
//                 <a 
//                   href="#home" 
//                   onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
//                   className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'home' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
//                 >
//                   <Home className={`mr-4 h-6 w-6 ${activeSection === 'home' ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800'}`} />
//                   Home
//                 </a>
//                 <a 
//                   href="#about" 
//                   onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
//                   className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'about' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
//                 >
//                   <User className={`mr-4 h-6 w-6 ${activeSection === 'about' ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800'}`} />
//                   About
//                 </a>
//                 <a 
//                   href="#education" 
//                   onClick={(e) => {e.preventDefault(); scrollToSection('education');}}
//                   className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'education' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
//                 >
//                   <BookOpen className={`mr-4 h-6 w-6 ${activeSection === 'education' ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800'}`} />
//                   Education
//                 </a>
//                 <a 
//                   href="#experience" 
//                   onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}
//                   className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'experience' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
//                 >
//                   <Briefcase className={`mr-4 h-6 w-6 ${activeSection === 'experience' ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800'}`} />
//                   Experience
//                 </a>
//                 <a 
//                   href="#skills" 
//                   onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}
//                   className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'skills' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
//                 >
//                   <Code className={`mr-4 h-6 w-6 ${activeSection === 'skills' ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800'}`} />
//                   Skills
//                 </a>
//                 <a 
//                   href="#projects" 
//                   onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}
//                   className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'projects' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
//                 >
//                   <Award className={`mr-4 h-6 w-6 ${activeSection === 'projects' ? 'text-blue-800' : 'text-gray-500 group-hover:text-blue-800'}`} />
//                   Projects
//                 </a>
//                 <div className="pt-5">
//                   <a 
//                     href="#" 
//                     className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
//                   >
//                     <Download className="mr-2 h-5 w-5" />
//                     Download CV
//                   </a>
//                 </div>
//                 <div className="flex justify-center pt-5 space-x-6">
//                   <a href="https://github.com/SahilBane2002" className="text-gray-500 hover:text-blue-800">
//                     <Github className="h-6 w-6" />
//                   </a>
//                   <a href="https://www.linkedin.com/in/sahilbane" className="text-gray-500 hover:text-blue-800">
//                     <Linkedin className="h-6 w-6" />
//                   </a>
//                   <a href="mailto:bane.s@northeastern.edu" className="text-gray-500 hover:text-blue-800">
//                     <Mail className="h-6 w-6" />
//                   </a>
//                   <a href="tel:+16176592832" className="text-gray-500 hover:text-blue-800">
//                     <Phone className="h-6 w-6" />
//                   </a>
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {isSmallScreen ? <MobileNavbar /> : <SideNavbar />}

//       {/* Hero Section */}
//       <section id="home" className={`${isSmallScreen ? 'pt-16' : 'ml-64'}`}>
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-800">
//           <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
//             <div className="text-center">
//               <h1 className="text-5xl font-bold text-white sm:text-6xl pb-2">
//                 Sahil Bane
//               </h1>
//               <div className="h-1 w-24 bg-blue-300 mx-auto my-4"></div>
//               <p className="mt-4 text-2xl text-blue-100">
//                 Software Engineer
//               </p>
//               <p className="mt-2 text-xl text-blue-200">
//                 Available from May 2025 - December 2025
//               </p>
//               <div className="mt-8 flex flex-wrap justify-center gap-5">
//                 <a href="https://github.com/SahilBane2002" 
//                    className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
//                    aria-label="GitHub Profile">
//                   <Github className="h-5 w-5 mr-2" />
//                   <span className="font-medium">GitHub</span>
//                 </a>
//                 <a href="https://www.linkedin.com/in/sahilbane" 
//                    className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
//                    aria-label="LinkedIn Profile">
//                   <Linkedin className="h-5 w-5 mr-2" />
//                   <span className="font-medium">LinkedIn</span>
//                 </a>
//                 <a href="mailto:bane.s@northeastern.edu" 
//                    className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
//                    aria-label="Email Me">
//                   <Mail className="h-5 w-5 mr-2" />
//                   <span className="font-medium">Email</span>
//                 </a>
//                 <a href="tel:+16176592832" 
//                    className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
//                    aria-label="Call Me">
//                   <Phone className="h-5 w-5 mr-2" />
//                   <span className="font-medium">Phone</span>
//                 </a>
//                 <div className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20">
//                   <MapPin className="h-5 w-5 mr-2" />
//                   <span className="font-medium">Boston, MA</span>
//                 </div>
//               </div>
//               <div className="mt-10">
//                 <a 
//                   href="#about" 
//                   onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
//                   className="inline-flex items-center px-6 py-3 bg-white text-blue-800 font-medium rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300"
//                 >
//                   Learn More
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Sections */}
//       <main className={`bg-gray-50 ${isSmallScreen ? '' : 'ml-64'}`}>
//         {/* About Section */}
//         <section id="about" className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-14">
//               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
//               <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
//             </div>
//             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//               <div className="md:flex md:items-start md:space-x-8">
//                 <div className="md:flex-1">
//                   <p className="text-gray-700 leading-relaxed text-lg mb-6">
//                     I am a Master's student in Computer Science at Northeastern University's Khoury College of Computer Sciences, with a strong foundation in Electronics and Computer Science Engineering from my undergraduate studies. My passion lies in leveraging cutting-edge technology to solve real-world problems and make a meaningful impact.
//                   </p>
                  
//                   <p className="text-gray-700 leading-relaxed text-lg mb-6">
//                     I consider myself an efficient problem-solver who thrives on challenges and believes in coding and creating solutions that drive positive change.
//                   </p>
                  
//                   <h3 className="text-xl font-bold text-blue-800 mb-3">Actively Seeking Roles</h3>
//                   <p className="text-gray-700 leading-relaxed text-lg">
//                     I am excited to bring my skills and passion to roles like AI Developer, Full-Stack Developer, or Database Engineer. If you're looking for a dedicated team player eager to innovate and grow, let's connect!
//                   </p>
                  
//                   <div className="mt-8">
//                     <a 
//                       href="#" 
//                       className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
//                     >
//                       <Download className="mr-2 h-5 w-5" />
//                       Download CV
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Education Section */}
//         <section id="education" className="py-20 bg-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-14">
//               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Education</h2>
//               <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
//             </div>
//             <div className="space-y-8">
//               <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-800">Masters of Science in Computer Science</h3>
//                     <p className="text-blue-600 font-medium">Northeastern University</p>
//                   </div>
//                   <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-blue-100 px-4 py-1 rounded-full">Sept. 2024 - Present</span>
//                 </div>
                
//                 <div className="mt-6 flex flex-col sm:flex-row sm:gap-12">
//                   <p className="text-gray-800 mb-2 sm:mb-0">
//                     <span className="font-semibold text-blue-800">GPA:</span> 3.83/4.0
//                   </p>
//                   <p className="text-gray-800">
//                     <span className="font-semibold text-blue-800">Coursework:</span> Algorithms, Foundations of Artificial Intelligence, Program Design Paradigm, Database Management Systems, Natural Language Processing, Machine Learning
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-800">BE in Electronics and Computer Science</h3>
//                     <p className="text-blue-600 font-medium">University of Mumbai</p>
//                     <p className="text-blue-500">Honors in Blockchain</p>
//                   </div>
//                   <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-blue-100 px-4 py-1 rounded-full">Feb. 2021 - May 2024</span>
//                 </div>
                
//                 <p className="mt-6 text-gray-800">
//                   <span className="font-semibold text-blue-800">GPA:</span> 9.42/10.0
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-14">
//               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience</h2>
//               <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
//             </div>
//             <div className="space-y-8">
//               <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-600">
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-800">Teaching Assistant</h3>
//                     <p className="text-blue-600 font-medium">Northeastern University</p>
//                     <p className="text-gray-500">Boston, MA</p>
//                   </div>
//                   <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-blue-100 px-4 py-1 rounded-full">Jan. 2025 - Present</span>
//                 </div>
//                 <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
//                   <li>Helping 20 students succeed by providing timely and constructive feedback and tutoring sessions for the graduate level Intermediate Programming Course</li>
//                   <li>Assisted with code reviews and evaluation of algorithms for efficiency and optimization</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-600">
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-800">Technical Intern</h3>
//                     <p className="text-blue-600 font-medium">Rosefield Energy Tech.</p>
//                     <p className="text-gray-500">Mumbai, India</p>
//                   </div>
//                   <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-blue-100 px-4 py-1 rounded-full">Sept. 2023 - Dec. 2023</span>
//                 </div>
//                 <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
//                   <li>Collaborated with the technical team to design and launch 3 visually appealing, user-friendly websites, increasing user engagement</li>
//                   <li>Developed the Rosefield Conference website for the Lubricants and Fuels event, resulting in a 30% increase in online registrations and a 20% boost in event attendance</li>
//                   <li>Analyzed and identified warehousing solutions to clients using data analytic tools improving inventory management efficiency</li>
//                 </ul>
//               </div>
              
//               <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-600">
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-800">Organization Lead</h3>
//                     <p className="text-blue-600 font-medium">Game Developers Association</p>
//                     <p className="text-gray-500">Mumbai, India</p>
//                   </div>
//                   <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-blue-100 px-4 py-1 rounded-full">Aug. 2022 - Aug. 2023</span>
//                 </div>
//                 <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
//                   <li>Led development of Ashtagraha, an educational game teaching planetary science to school children, which won Mumbai Hackathon, Smart India Hackathon, and was a finalist in the E-Cell Idea Competition</li>
//                   <li>Co-founded one of the first game development communities in the city, fostering innovation and collaboration</li>
//                   <li>Pioneered Prop Hunt, a multiplayer game that received overwhelmingly positive feedback from Devfolio, Instagram and Unstop</li>
//                   <li>Directed Strategem, the association's flagship hackathon with 1,000+ participants</li>
//                 </ul>
//               </div>
              
//               <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-600">
//                 <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-800">Undergraduate Research Assistant</h3>
//                     <p className="text-blue-600 font-medium">Fr. Conceicao Rodrigues College of Engineering</p>
//                     <p className="text-gray-500">Mumbai, India</p>
//                   </div>
//                   <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-blue-100 px-4 py-1 rounded-full">Sept. 2022 - May 2023</span>
//                 </div>
//                 <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
//                   <li>Conducted research on emotion recognition using Deep Learning algorithms, evaluating methodologies such as CNN, EigenFace with PCA, and DeepFace achieving accuracy of 72%, 80% and 99.93% respectively</li>
//                   <li>Published the research paper "Semblance Unmasker: Hidden Emotion Recognition Using Deep Learning Approach" in IEEE 
//                     <a href="https://ieeexplore.ieee.org/document/10370099" className="text-blue-600 hover:text-blue-800 ml-1 inline-flex items-center">
//                       10.1109/ICSCNA58489.2023.10370099
//                       <ExternalLink className="h-4 w-4 ml-1" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="py-20 bg-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-14">
//               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Skills</h2>
//               <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-blue-600">
//                 <h3 className="font-bold text-xl mb-4 text-blue-800">Languages</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['C', 'Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Solidity', 'Dart', 'HTML', 'PHP', 'R'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-indigo-600">
//                 <h3 className="font-bold text-xl mb-4 text-indigo-800">Frontend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['React', 'Next.js', 'Flutter', 'Tailwind CSS'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-purple-600">
//                 <h3 className="font-bold text-xl mb-4 text-purple-800">Backend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Node.js', 'Express', 'Django', 'MongoDB'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-sky-600">
//                 <h3 className="font-bold text-xl mb-4 text-sky-800">Cloud & DevOps</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['AWS', 'Docker'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-rose-600">
//                 <h3 className="font-bold text-xl mb-4 text-rose-800">Game Development</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Unity', 'Unreal Engine'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-emerald-600">
//                 <h3 className="font-bold text-xl mb-4 text-emerald-800">AI & ML</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['OpenCV', 'Scikit-Learn', 'PyTorch', 'TensorFlow'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-amber-600">
//                 <h3 className="font-bold text-xl mb-4 text-amber-800">Blockchain</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Ganache', 'Truffle', 'Web3.js'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-teal-600">
//                 <h3 className="font-bold text-xl mb-4 text-teal-800">Tools</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Git', 'GitHub'].map((skill, index) => (
//                     <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-14">
//               <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
//               <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-blue-600">
//                 <div className="flex flex-col">
//                   <div className="mb-4 flex justify-between items-start">
//                     <h3 className="text-xl font-bold text-blue-800">AI based City Layout Optimization</h3>
//                     <span className="text-sm font-semibold text-gray-900 bg-blue-100 px-3 py-1 rounded-full">Sept. 2024 - Dec. 2024</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-6">
//                   Designed genetic and local search algorithms to optimize urban connectivity, improving emergency response times by 50%. Implemented a constraint-driven cost function for a grid environment, enhancing A* pathfinding to follow predefined movement rules with 100% accuracy.
//                 </p>
//                 <div className="flex space-x-6">
//                   <a href="https://github.com/Jithin-Veeragandham/ai-city-architect" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
//                     <Github className="h-5 w-5 mr-2" />
//                     <span>View Project</span>
//                   </a>
//                 </div>
//               </div>

//               <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-indigo-600">
//                 <div className="flex flex-col">
//                   <div className="mb-4 flex justify-between items-start">
//                     <h3 className="text-xl font-bold text-indigo-800">Phishing Detection using PSO</h3>
//                     <span className="text-sm font-semibold text-gray-900 bg-indigo-100 px-3 py-1 rounded-full">July 2023 - May 2024</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-6">
//                   Conducted in-depth research on optimizing phishing detection models using Random Forest and XGBoost classifiers and employing Particle Swarm Optimization to fine-tune model performance, resulting in a significant 20% increase in accuracy.
//                 </p>
//                 <div className="flex space-x-6">
//                   <a href="https://github.com/SahilBane2002/PhishingDetection" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
//                     <Github className="h-5 w-5 mr-2" />
//                     <span>View Project</span>
//                   </a>
//                 </div>
//               </div>
              
//               <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-purple-600">
//                 <div className="flex flex-col">
//                   <div className="mb-4 flex justify-between items-start">
//                     <h3 className="text-xl font-bold text-purple-800">Ashtagraha - Educational Game</h3>
//                     <span className="text-sm font-semibold text-gray-900 bg-purple-100 px-3 py-1 rounded-full">Jan. 2023 - Dec. 2023</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-6">
//                   Led development of an educational game teaching planetary science to school children. The project won multiple hackathons including Mumbai Hackathon and Smart India Hackathon, and was a finalist in the E-Cell Idea Competition.
//                 </p>
//                 <div className="flex space-x-6">
//                   <a href="#" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
//                     <ExternalLink className="h-5 w-5 mr-2" />
//                     <span>Demo</span>
//                   </a>
//                 </div>
//               </div>
              
//               <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-sky-600">
//                 <div className="flex flex-col">
//                   <div className="mb-4 flex justify-between items-start">
//                     <h3 className="text-xl font-bold text-sky-800">Emotion Recognition Research</h3>
//                     <span className="text-sm font-semibold text-gray-900 bg-sky-100 px-3 py-1 rounded-full">July 2022 - May 2023</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-6">
//                   Published IEEE research paper on emotion recognition using Deep Learning methodologies including CNN, EigenFace with PCA, and DeepFace, achieving accuracy rates of up to 99.93%.
//                 </p>
//                 <div className="flex space-x-6">
//                   <a href="https://ieeexplore.ieee.org/document/10370099" className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-800 transition-colors">
//                     <ExternalLink className="h-5 w-5 mr-2" />
//                     <span>View Publication</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact/CTA Section */}
//         <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Work Together?</h2>
//             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//               I'm currently available for opportunities from May 2025 to December 2025. Let's create something amazing!
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a 
//                 href="mailto:bane.s@northeastern.edu" 
//                 className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center"
//               >
//                 <Mail className="mr-2 h-5 w-5" />
//                 Contact Me
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/sahilbane" 
//                 className="px-6 py-3 bg-blue-800 text-white font-medium rounded-lg border border-white hover:bg-blue-900 transition-all duration-300 inline-flex items-center"
//               >
//                 <Linkedin className="mr-2 h-5 w-5" />
//                 Connect on LinkedIn
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className={`bg-gray-900 text-white py-12 ${isSmallScreen ? '' : 'ml-64'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="md:flex md:justify-between md:items-center">
//             <div className="mb-8 md:mb-0">
//               <h3 className="text-2xl font-bold">Sahil Bane</h3>
//               <p className="mt-2 text-gray-400">Software Engineer</p>
//             </div>
//             <div className="flex flex-wrap gap-6">
//               <a href="https://github.com/SahilBane2002" className="text-gray-400 hover:text-white transition-colors">
//                 <Github className="h-6 w-6" />
//               </a>
//               <a href="https://www.linkedin.com/in/sahilbane" className="text-gray-400 hover:text-white transition-colors">
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a href="mailto:bane.s@northeastern.edu" className="text-gray-400 hover:text-white transition-colors">
//                 <Mail className="h-6 w-6" />
//               </a>
//               <a href="tel:+16176592832" className="text-gray-400 hover:text-white transition-colors">
//                 <Phone className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//           <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:justify-between">
//             <p>© 2025 Sahil Bane. All rights reserved.</p>
//             <div className="mt-4 md:mt-0 flex flex-wrap gap-6">
//               <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} className="text-gray-400 hover:text-white transition-colors">Home</a>
//               <a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about');}} className="text-gray-400 hover:text-white transition-colors">About</a>
//               <a href="#projects" onClick={(e) => {e.preventDefault(); scrollToSection('projects');}} className="text-gray-400 hover:text-white transition-colors">Projects</a>
//               <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}} className="text-gray-400 hover:text-white transition-colors">Contact</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Menu, X, ChevronRight, Download, Home, User, Briefcase, Code, BookOpen, Award, FileText, Italic } from 'lucide-react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);

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

  // Sidebar Navigation
  const SideNavbar = () => (
    <nav className="fixed left-0 top-0 h-full bg-slate-800 text-white w-64 shadow-xl z-50 flex flex-col transition-all duration-300">
      <div className="p-6 border-b border-slate-700">
        <a 
          href="#home" 
          onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
          className="text-xl font-bold text-white flex items-center"
        >
          <span className="block mr-3 h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">SB</span>
          Sahil Bane
        </a>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-6">
          <a 
            href="#home" 
            onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
            className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'home' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            <Home className="h-5 w-5 mr-3" />
            <span>Home</span>
          </a>
          <a 
            href="#about" 
            onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
            className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'about' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            <User className="h-5 w-5 mr-3" />
            <span>About</span>
          </a>
          <a 
            href="#education" 
            onClick={(e) => {e.preventDefault(); scrollToSection('education');}}
            className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'education' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            <BookOpen className="h-5 w-5 mr-3" />
            <span>Education</span>
          </a>
          <a 
            href="#experience" 
            onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}
            className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'experience' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            <Briefcase className="h-5 w-5 mr-3" />
            <span>Experience</span>
          </a>
          <a 
            href="#skills" 
            onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}
            className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'skills' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            <Code className="h-5 w-5 mr-3" />
            <span>Skills</span>
          </a>
          <a 
            href="#projects" 
            onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}
            className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200 ${activeSection === 'projects' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            <Award className="h-5 w-5 mr-3" />
            <span>Projects</span>
          </a>
        </div>
      </div>
      
      <div className="p-6 border-t border-slate-700">
        <a 
          href="MasterResume.pdf" 
          className="flex items-center justify-center w-full px-4 py-2 bg-white text-slate-800 font-medium rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <FileText className="h-5 w-5 mr-2" />
          <span>Download CV</span>
        </a>
        
        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://github.com/SahilBane2002" className="text-slate-400 hover:text-white transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/sahilbane" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:bane.s@northeastern.edu" className="text-slate-400 hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="tel:+16176592832" className="text-slate-400 hover:text-white transition-colors">
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );

  // Mobile Navigation
  const MobileNavbar = () => (
    <nav className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
              className="text-xl font-bold text-slate-800"
            >
              Sahil Bane
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="focus:outline-none text-slate-800"
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
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
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
                <h2 className="text-xl font-bold text-slate-800">Sahil Bane</h2>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                <a 
                  href="#home" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'home' ? 'bg-slate-100 text-slate-800' : 'text-gray-700 hover:bg-slate-50 hover:text-slate-800'}`}
                >
                  <Home className={`mr-4 h-6 w-6 ${activeSection === 'home' ? 'text-slate-800' : 'text-gray-500 group-hover:text-slate-800'}`} />
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'about' ? 'bg-slate-100 text-slate-800' : 'text-gray-700 hover:bg-slate-50 hover:text-slate-800'}`}
                >
                  <User className={`mr-4 h-6 w-6 ${activeSection === 'about' ? 'text-slate-800' : 'text-gray-500 group-hover:text-slate-800'}`} />
                  About
                </a>
                <a 
                  href="#education" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('education');}}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'education' ? 'bg-slate-100 text-slate-800' : 'text-gray-700 hover:bg-slate-50 hover:text-slate-800'}`}
                >
                  <BookOpen className={`mr-4 h-6 w-6 ${activeSection === 'education' ? 'text-slate-800' : 'text-gray-500 group-hover:text-slate-800'}`} />
                  Education
                </a>
                <a 
                  href="#experience" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('experience');}}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'experience' ? 'bg-slate-100 text-slate-800' : 'text-gray-700 hover:bg-slate-50 hover:text-slate-800'}`}
                >
                  <Briefcase className={`mr-4 h-6 w-6 ${activeSection === 'experience' ? 'text-slate-800' : 'text-gray-500 group-hover:text-slate-800'}`} />
                  Experience
                </a>
                <a 
                  href="#skills" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('skills');}}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'skills' ? 'bg-slate-100 text-slate-800' : 'text-gray-700 hover:bg-slate-50 hover:text-slate-800'}`}
                >
                  <Code className={`mr-4 h-6 w-6 ${activeSection === 'skills' ? 'text-slate-800' : 'text-gray-500 group-hover:text-slate-800'}`} />
                  Skills
                </a>
                <a 
                  href="#projects" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${activeSection === 'projects' ? 'bg-slate-100 text-slate-800' : 'text-gray-700 hover:bg-slate-50 hover:text-slate-800'}`}
                >
                  <Award className={`mr-4 h-6 w-6 ${activeSection === 'projects' ? 'text-slate-800' : 'text-gray-500 group-hover:text-slate-800'}`} />
                  Projects
                </a>
                <div className="pt-5">
                  <a 
                    href="MasterResume.pdf" 
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-slate-700 hover:bg-slate-800"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </div>
                <div className="flex justify-center pt-5 space-x-6">
                  <a href="https://github.com/SahilBane2002" className="text-gray-500 hover:text-slate-800">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/sahilbane" className="text-gray-500 hover:text-slate-800">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:bane.s@northeastern.edu" className="text-gray-500 hover:text-slate-800">
                    <Mail className="h-6 w-6" />
                  </a>
                  <a href="tel:+16176592832" className="text-gray-500 hover:text-slate-800">
                    <Phone className="h-6 w-6" />
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
    <div className="min-h-screen bg-gray-50">
      {isSmallScreen ? <MobileNavbar /> : <SideNavbar />}

      {/* Hero Section */}
      <section id="home" className={`${isSmallScreen ? 'pt-16' : 'ml-64'}`}>
        <div className="bg-gradient-to-r from-slate-700 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white sm:text-6xl pb-2">
                Sahil Bane
              </h1>
              <div className="h-1 w-24 bg-slate-400 mx-auto my-4"></div>
              <p className="mt-4 text-2xl text-slate-200">
                Software Engineer
              </p>
              <p className="mt-2 text-xl text-slate-300">
                Available from May 2025
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-5">
                <a href="https://github.com/SahilBane2002" 
                   className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                   aria-label="GitHub Profile">
                  <Github className="h-5 w-5 mr-2" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/sahilbane" 
                   className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                   aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href="mailto:bane.s@northeastern.edu" 
                   className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                   aria-label="Email Me">
                  <Mail className="h-5 w-5 mr-2" />
                  <span className="font-medium">Email</span>
                </a>
                <a href="tel:+16176592832" 
                   className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                   aria-label="Call Me">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-medium">Phone</span>
                </a>
                <div className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-medium">Boston, MA</span>
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="#about" 
                  onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
                  className="inline-flex items-center px-6 py-3 bg-white text-slate-800 font-medium rounded-full shadow-lg hover:bg-slate-100 transition-all duration-300"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className={`bg-gray-50 ${isSmallScreen ? '' : 'ml-64'}`}>
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
              <div className="h-1 w-20 bg-slate-500 mx-auto mt-4"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="md:flex md:items-start md:space-x-8">
                <div className="md:flex-1">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    I am a Master's student in Computer Science at Northeastern University's Khoury College of Computer Sciences, with a strong foundation in Electronics and Computer Science Engineering acquired during my undergraduate studies. My passion lies in leveraging cutting-edge technology to solve real-world problems and make a meaningful impact.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    I am an efficient problem solver who thrives on challenges and believes that coding can create solutions to a positive impact.
                  </p>
                  
                  <h3 className="text-xl font-bold text-slate-700 mb-3">Actively Seeking Roles</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    I am excited to bring my skills and passion to roles like AI Developer, Full-Stack Developer, or Database Engineer. If you're looking for a dedicated team player eager to innovate and grow, let's connect!
                  </p>
                  
                  <div className="mt-8">
                    <a 
                      href="MasterResume.pdf" 
                      className="inline-flex items-center px-6 py-3 bg-slate-700 text-white font-medium rounded-lg shadow-md hover:bg-slate-800 transition-all duration-300"
                    >
                      <Download href='Master_Sahil_Bane_CV.pdf' className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Education</h2>
              <div className="h-1 w-20 bg-slate-500 mx-auto mt-4"></div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Masters of Science in Computer Science</h3>
                    <p className="text-slate-600 font-medium">Northeastern University</p>
                  </div>
                  <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-slate-200 px-4 py-1 rounded-full">Sept. 2024 - Present</span>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row sm:gap-12">
                  <p className="text-gray-800 mb-2 sm:mb-0">
                    <span className="font-semibold text-slate-700">GPA:</span> 3.83/4.0
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold text-slate-700">Coursework:</span> Algorithms, Foundations of Artificial Intelligence, Program Design Paradigm, Database Management Systems, Natural Language Processing, Machine Learning
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">BE in Electronics and Computer Science</h3>
                    <p className="text-slate-600 font-medium">University of Mumbai</p>
                    <p className="text-slate-500">Honors in Blockchain</p>
                  </div>
                  <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-slate-200 px-4 py-1 rounded-full">Feb. 2021 - May 2024</span>
                </div>
                
                <p className="mt-6 text-gray-800">
                  <span className="font-semibold text-slate-700">GPA:</span> 9.42/10.0
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience</h2>
              <div className="h-1 w-20 bg-slate-500 mx-auto mt-4"></div>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-slate-600">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Teaching Assistant</h3>
                    <p className="text-slate-600 font-medium">Northeastern University</p>
                    <p className="text-gray-500">Boston, MA</p>
                  </div>
                  <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-slate-200 px-4 py-1 rounded-full">Jan. 2025 - Present</span>
                </div>
                <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
                  <li>Helped 20 students succeed by providing timely and constructive feedback and tutoring sessions for the graduate level Intermediate Programming Course</li>
                  <li>Provided crucial insights with code reviews and evaluation of algorithms for efficiency and optimization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-slate-600">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Technical Intern</h3>
                    <p className="text-slate-600 font-medium">Rosefield Energy Tech.</p>
                    <p className="text-gray-500">Mumbai, India</p>
                  </div>
                  <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-slate-200 px-4 py-1 rounded-full">Sept. 2023 - Dec. 2023</span>
                </div>
                <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
                  <li>Collaborated with the technical team to design and launch 3 visually appealing, user-friendly websites, increasing user engagement</li>
                  <li>Developed the Rosefield Conference website for the Lubricants and Fuels event, resulting in a 30% increase in online registrations and a 20% boost in event attendance</li>
                  <li>Analyzed and identified warehousing solutions to clients using data analytic tools improving inventory management efficiency by 75%</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-slate-600">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Organization Lead</h3>
                    <p className="text-slate-600 font-medium">Game Developers Association</p>
                    <p className="text-gray-500">Mumbai, India</p>
                  </div>
                  <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-slate-200 px-4 py-1 rounded-full">Aug. 2022 - Aug. 2023</span>
                </div>
                <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
                  <li>Co-founded one of the first game development communities in the city, fostering innovation and collaboration</li>
                  <li>Led a team of 20 developers to create Ashtagraha, an award-winning educational game designed to teach planetary science to children. The game earned top honors at the Mumbai Hackathon and Smart India Hackathon, and was a finalist in the E-Cell Idea Competition.</li>
                  <li>Pioneered Prop Hunt, a multiplayer game that received overwhelmingly positive feedback from Devfolio, Instagram and Unstop</li>
                  <li>Directed Strategem, the association's flagship hackathon which hosted over 1,000 participants</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300 border-l-4 border-slate-600">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Undergraduate Research Assistant</h3>
                    <p className="text-slate-600 font-medium">Fr. Conceicao Rodrigues College of Engineering</p>
                    <p className="text-gray-500">Mumbai, India</p>
                  </div>
                  <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-slate-200 px-4 py-1 rounded-full">Sept. 2022 - May 2023</span>
                </div>
                <ul className="mt-6 text-gray-700 list-disc ml-6 space-y-3">
                  <li>Built and evaluated emotion recognition models by implementing Deep Learning algorithms including CNN, EigenFace with PCA, and DeepFace, achieving accuracy rates of 72%, 80% and 99.93% respectively</li>
                  <li>Published the research paper "Semblance Unmasker: Hidden Emotion Recognition Using Deep Learning Approach" in IEEE 
                    <a href="https://ieeexplore.ieee.org/document/10370099" className="text-slate-600 hover:text-slate-800 ml-1 inline-flex items-center">
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
        <section id="skills" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Skills</h2>
              <div className="h-1 w-20 bg-slate-500 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['C', 'Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Solidity', 'Dart', 'HTML', 'PHP', 'R'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Flutter', 'Tailwind CSS'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'Django', 'MongoDB'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Docker'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">Game Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Unity', 'Unreal Engine'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">AI & ML</h3>
                <div className="flex flex-wrap gap-2">
                  {['OpenCV', 'Scikit-Learn', 'PyTorch', 'TensorFlow'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">Blockchain</h3>
                <div className="flex flex-wrap gap-2">
                  {['Ganache', 'Truffle', 'Web3.js'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-slate-600">
                <h3 className="font-bold text-xl mb-4 text-slate-700">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
              <div className="h-1 w-20 bg-slate-500 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-slate-600">
                <div className="flex flex-col">
                  <div className="mb-4 flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-700">AI based City Layout Optimization</h3>
                    <span className="text-sm font-semibold text-gray-900 bg-slate-200 px-3 py-1 rounded-full">Sept. 2024 - Dec. 2024</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Designed and implemented genetic algorithms with crossover and mutation operators alongside local search heuristics to optimize urban traffic flow and intersection layouts, achieving 50% improvement in emergency response times across 15 optimized intersections. Developed a constraint-driven cost function incorporating traffic density, road capacity, and emergency vehicle priority within a grid-based environment, enhancing A* pathfinding algorithm with custom heuristics to enforce predefined movement rules and traffic regulations while maintaining 100% accuracy in navigation scenarios and optimal route planning.
                </p>
                <div className="flex space-x-6">
                  <a href="https://github.com/Jithin-Veeragandham/ai-city-architect" className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-800 transition-colors">
                    <Github className="h-5 w-5 mr-2" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-slate-600">
                <div className="flex flex-col">
                  <div className="mb-4 flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-700">Phishing Detection using PSO</h3>
                    <span className="text-sm font-semibold text-gray-900 bg-slate-200 px-3 py-1 rounded-full">July 2023 - May 2024</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Developed a cybersecurity solution combining Random Forest and XGBoost classifiers with Particle Swarm Optimization (PSO) for enhanced phishing website detection, achieving 20% improvement in accuracy over baseline models. Created a comprehensive feature extraction pipeline analyzing URL structure, domain characteristics, and HTML content patterns to identify key phishing indicators. Utilized PSO's swarm intelligence for automated hyperparameter tuning and feature selection optimization, balancing precision and recall while reducing false positives. Built using Python with scikit-learn and pandas, demonstrating the effectiveness of bio-inspired optimization algorithms in real-time cybersecurity threat assessment.
                </p>
                <div className="flex space-x-6">
                  <a href="https://github.com/SahilBane2002/PhishingDetection" className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-800 transition-colors">
                    <Github className="h-5 w-5 mr-2" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-slate-600">
                <div className="flex flex-col">
                  <div className="mb-4 flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-700">Ashtagraha - Educational Game</h3>
                    <span className="text-sm font-semibold text-gray-900 bg-slate-200 px-3 py-1 rounded-full">Jan. 2023 - Dec. 2023</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Developed an immersive educational game focused on planetary science concepts for school children using Unreal Engine for game engine development and Blender for designing custom 3D models of planets, spacecraft, and astronomical objects. Integrated interactive gameplay mechanics with educational content delivery systems.
                </p>
                <div className="flex space-x-6">
                  {/* <a href="#" className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-800 transition-colors">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>Demo</span>
                  </a> */}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-b-4 border-slate-600">
                <div className="flex flex-col">
                  <div className="mb-4 flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-700">Emotion Recognition Research</h3>
                    <span className="text-sm font-semibold text-gray-900 bg-slate-200 px-3 py-1 rounded-full">July 2022 - May 2023</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Developed "Semblance Unmasker," a deep learning-based emotion recognition system to enhance e-learning by predicting real-time student emotional states. Implemented three methodologies: CNN (72% accuracy), EigenFace with PCA (80% accuracy), and DeepFace (99.93% accuracy) using PyTorch, TensorFlow, and OpenCV for real-time facial data processing. Published research in IEEE ICSCNA 2023 demonstrating how emotion-aware systems can improve online learning effectiveness by providing teachers with insights into student engagement, ultimately reducing dropout rates and enhancing educational outcomes.
                </p>
                <div className="flex space-x-6">
                  <a href="https://ieeexplore.ieee.org/document/10370099" className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-800 transition-colors">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    <span>View Publication</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              I'm currently available for opportunities from May 2025 to December 2025. Let's create something amazing!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:bane.s@northeastern.edu" 
                className="px-6 py-3 bg-white text-slate-800 font-medium rounded-lg hover:bg-slate-100 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/sahilbane" 
                className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-white hover:bg-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`bg-gray-900 text-white py-12 ${isSmallScreen ? '' : 'ml-64'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold">Sahil Bane</h3>
              <p className="mt-2 text-gray-400">Software Engineer</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="https://github.com/SahilBane2002" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/sahilbane" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:bane.s@northeastern.edu" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+16176592832" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:justify-between">
            <p>© 2025 Sahil Bane. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-6">
              <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}} className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about');}} className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" onClick={(e) => {e.preventDefault(); scrollToSection('projects');}} className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}} className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;