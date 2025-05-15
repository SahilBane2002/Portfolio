// import React from 'react';
// import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header/Hero Section - Improved color contrast */}
//       <header className="bg-blue-800">
//         <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-white sm:text-6xl animate-fade-in">
//               Sahil Bane
//             </h1>
//             <p className="mt-4 text-2xl text-white">
//               Software Engineer
//             </p>
//             {/* <p className="mt-2 text-xl text-white">
//               Available from May 2025 - December 2025
//             </p> */}
//             <div className="mt-8 flex flex-wrap justify-center gap-5">
//               {/* Social links with improved visibility and accessibility */}
//               <a href="https://github.com/SahilBane2002" 
//                  className="flex items-center bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
//                  aria-label="GitHub Profile">
//                 <Github className="h-6 w-6 mr-2" />
//                 <span className="font-medium">GitHub</span>
//               </a>
//               <a href="https://www.linkedin.com/in/sahilbane" 
//                  className="flex items-center bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
//                  aria-label="LinkedIn Profile">
//                 <Linkedin className="h-6 w-6 mr-2" />
//                 <span className="font-medium">LinkedIn</span>
//               </a>
//               <a href="mailto:bane.s@northeastern.edu" 
//                  className="flex items-center bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
//                  aria-label="Email Me">
//                 <Mail className="h-6 w-6 mr-2" />
//                 <span className="font-medium">Email</span>
//               </a>
//               {/* <a href="tel:+16176592832" 
//                  className="flex items-center bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
//                  aria-label="Call Me">
//                 <Phone className="h-6 w-6 mr-2" />
//                 <span className="font-medium">Phone</span>
//               </a> */}
//               <div className="flex items-center bg-white text-blue-800 px-4 py-2 rounded-lg">
//                 <MapPin className="h-6 w-6 mr-2" />
//                 <span className="font-medium">Boston, MA</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content - Increased contrast and better visual cues */}
//       <main className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg mt-6">
//         {/* About Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-800 pb-2 inline-block">About Me</h2>
//           <p className="text-gray-800 leading-relaxed text-lg">
//             I am a Master's student in Computer Science at Northeastern University's Khoury College of Computer Sciences, with a strong foundation in Electronics and Computer Science Engineering from my undergraduate studies. My passion lies in leveraging cutting-edge technology to solve real-world problems and make a meaningful impact.
//           </p>
          
//           <p className="text-gray-800 leading-relaxed text-lg mt-6">
//             I consider myself an efficient problem-solver who thrives on challenges and believes in coding and creating solutions that drive positive change.
//           </p>
          
//           <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Actively Seeking Roles</h3>
//           <p className="text-gray-800 leading-relaxed text-lg">
//             I am excited to bring my skills and passion to roles like AI Developer, Full-Stack Developer, or Database Engineer. If you're looking for a dedicated team player eager to innovate and grow, let's connect!
//           </p>
//         </section>

//         {/* Education Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-800 pb-2 inline-block">Education</h2>
//           <div className="space-y-8">
//             <div className="bg-gray-100 p-8 rounded-lg border-l-8 border-blue-800 shadow-md">
//               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">Masters of Science in Computer Science</h3>
//                   <p className="text-blue-800 font-medium">Northeastern University</p>
//                 </div>
//                 <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg">Sept. 2024 - Present</span>
//               </div>
              
//               <p className="mt-6 text-gray-800">
//                 <span className="font-semibold">GPA:</span> 3.83/4.0
//               </p>
//               <p className="mt-2 text-gray-800">
//                 <span className="font-semibold">Coursework:</span> Algorithms, Foundations of Artificial Intelligence, Program Design Paradigm, Database Management Systems, Natural Language Processing, Machine Learning
//               </p>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-lg border-l-8 border-blue-800 shadow-md">
//               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">BE in Electronics and Computer Science</h3>
//                   <p className="text-blue-800 font-medium">University of Mumbai</p>
//                   <p className="text-gray-700 font-medium">Honors in Blockchain</p>
//                 </div>
//                 <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg">Feb. 2021 - May 2024</span>
//               </div>
              
//               <p className="mt-6 text-gray-800">
//                 <span className="font-semibold">GPA:</span> 9.42/10.0
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-800 pb-2 inline-block">Experience</h2>
//           <div className="space-y-8">
//             <div className="bg-gray-100 p-8 rounded-lg border-l-8 border-blue-600 shadow-md">
//               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">Teaching Assistant</h3>
//                   <p className="text-blue-800 font-medium">Northeastern University</p>
//                   <p className="text-gray-700">Boston, MA</p>
//                 </div>
//                 <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg">Jan. 2025 - Present</span>
//               </div>
//               <ul className="mt-6 text-gray-800 list-disc ml-6 space-y-3">
//                 <li>Helping 20 students succeed by providing timely and constructive feedback and tutoring sessions for the graduate level Intermediate Programming Course</li>
//               </ul>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-lg border-l-8 border-blue-600 shadow-md">
//               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">Technical Intern</h3>
//                   <p className="text-blue-800 font-medium">Rosefield Energy Tech.</p>
//                   <p className="text-gray-700">Mumbai, India</p>
//                 </div>
//                 <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg">Sept. 2023 - Dec. 2023</span>
//               </div>
//               <ul className="mt-6 text-gray-800 list-disc ml-6 space-y-3">
//                 <li>Collaborated with the technical team to design and launch 3 visually appealing, user-friendly websites, increasing user engagement</li>
//                 <li>Developed the Rosefield Conference website for the Lubricants and Fuels event, resulting in a 30% increase in online registrations and a 20% boost in event attendance</li>
//                 <li>Analyzed and identified warehousing solutions to clients using data analytic tools improving inventory management efficiency</li>
//               </ul>
//             </div>
            
//             <div className="bg-gray-100 p-8 rounded-lg border-l-8 border-blue-600 shadow-md">
//               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">Organization Lead</h3>
//                   <p className="text-blue-800 font-medium">Game Developers Association</p>
//                   <p className="text-gray-700">Mumbai, India</p>
//                 </div>
//                 <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg">Aug. 2022 - Aug. 2023</span>
//               </div>
//               <ul className="mt-6 text-gray-800 list-disc ml-6 space-y-3">
//                 <li>Led development of Ashtagraha, an educational game teaching planetary science to school children, which won Mumbai Hackathon, Smart India Hackathon, and was a finalist in the E-Cell Idea Competition</li>
//                 <li>Co-founded one of the first game development communities in the city, fostering innovation and collaboration</li>
//                 <li>Pioneered Prop Hunt, a multiplayer game that received overwhelmingly positive feedback from Devfolio, Instagram and Unstop</li>
//                 <li>Directed Strategem, the association's flagship hackathon with 1,000+ participants</li>
//               </ul>
//             </div>
            
//             <div className="bg-gray-100 p-8 rounded-lg border-l-8 border-blue-600 shadow-md">
//               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">Undergraduate Research Assistant</h3>
//                   <p className="text-blue-800 font-medium">Fr. Conceicao Rodrigues College of Engineering</p>
//                   <p className="text-gray-700">Mumbai, India</p>
//                 </div>
//                 <span className="mt-2 lg:mt-0 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg">Sept. 2022 - May 2023</span>
//               </div>
//               <ul className="mt-6 text-gray-800 list-disc ml-6 space-y-3">
//                 <li>Conducted research on emotion recognition using Deep Learning algorithms, evaluating methodologies such as CNN, EigenFace with PCA, and DeepFace achieving accuracy of 72%, 80% and 99.93% respectively</li>
//                 <li>Published the research paper "Semblance Unmasker: Hidden Emotion Recognition Using Deep Learning Approach" in IEEE 
//                   <a href="https://ieeexplore.ieee.org/document/10370099" className="text-blue-800 hover:text-blue-600 ml-1 inline-flex items-center underline">
//                     10.1109/ICSCNA58489.2023.10370099
//                     <ExternalLink className="h-4 w-4 ml-1" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-800 pb-2 inline-block">Skills</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">Languages</h3>
//               <div className="text-gray-800">
//                 C, Java, Python, C#, JavaScript, TypeScript, SQL, Solidity, Dart, HTML, PHP, R
//               </div>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">Frontend</h3>
//               <div className="text-gray-800">
//                 React, Next.js, Flutter, Tailwind CSS
//               </div>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">Backend</h3>
//               <div className="text-gray-800">
//                 Node.js, Express, Django, MongoDB
//               </div>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">Cloud & DevOps</h3>
//               <div className="text-gray-800">
//                 AWS, Docker
//               </div>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">Game Development</h3>
//               <div className="text-gray-800">
//                 Unity, Unreal Engine
//               </div>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">AI & ML</h3>
//               <div className="text-gray-800">
//                 OpenCV, Scikit-Learn, PyTorch
//               </div>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">Blockchain</h3>
//               <div className="text-gray-800">
//                 Ganache, Truffle, Web3.js
//               </div>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md border-t-4 border-blue-800">
//               <h3 className="font-bold text-xl mb-3 text-gray-900">Tools</h3>
//               <div className="text-gray-800">
//                 Git, GitHub
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-800 pb-2 inline-block">Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-gray-100 p-8 rounded-lg shadow-md border-l-8 border-blue-800">
//               <div className="flex flex-col">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">AI based City Layout Optimization</h3>
//                 <span className="mb-4 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg self-start">Sept. 2024 - Dec. 2024</span>
//               </div>
//               <p className="text-gray-800 mb-6">
//                 Designed genetic and local search algorithms to optimize urban connectivity, improving emergency response times by 50%. Implemented a constraint-driven cost function for a grid environment, enhancing A* pathfinding to follow predefined movement rules with 100% accuracy.
//               </p>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-blue-800 font-semibold hover:underline underline-offset-4 inline-flex items-center">
//                   <span>View Project</span>
//                   <ExternalLink className="h-4 w-4 ml-1" />
//                 </a>
//               </div>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-lg shadow-md border-l-8 border-blue-800">
//               <div className="flex flex-col">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Phishing Detection using PSO</h3>
//                 <span className="mb-4 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg self-start">July 2023 - May 2024</span>
//               </div>
//               <p className="text-gray-800 mb-6">
//                 Conducted in-depth research on optimizing phishing detection models using Random Forest and XGBoost classifiers and employing Particle Swarm Optimization to fine-tune model performance, resulting in a significant 20% increase in accuracy.
//               </p>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-blue-800 font-semibold hover:underline underline-offset-4 inline-flex items-center">
//                   <span>View Project</span>
//                   <ExternalLink className="h-4 w-4 ml-1" />
//                 </a>
//               </div>
//             </div>
            
//             <div className="bg-gray-100 p-8 rounded-lg shadow-md border-l-8 border-blue-800">
//               <div className="flex flex-col">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Ashtagraha - Educational Game</h3>
//                 <span className="mb-4 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg self-start">Jan. 2023 - Dec. 2023</span>
//               </div>
//               <p className="text-gray-800 mb-6">
//                 Led development of an educational game teaching planetary science to school children. The project won multiple hackathons including Mumbai Hackathon and Smart India Hackathon, and was a finalist in the E-Cell Idea Competition.
//               </p>
//             </div>
            
//             <div className="bg-gray-100 p-8 rounded-lg shadow-md border-l-8 border-blue-800">
//               <div className="flex flex-col">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Recognition Research</h3>
//                 <span className="mb-4 inline-block font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg self-start">July 2022 - May 2023</span>
//               </div>
//               <p className="text-gray-800 mb-6">
//                 Published IEEE research paper on emotion recognition using Deep Learning methodologies including CNN, EigenFace with PCA, and DeepFace, achieving accuracy rates of up to 99.93%.
//               </p>
//               <div className="flex space-x-6">
//                 <a href="https://ieeexplore.ieee.org/document/10370099" className="text-blue-800 font-semibold hover:underline underline-offset-4 inline-flex items-center">
//                   <span>View Publication</span>
//                   <ExternalLink className="h-4 w-4 ml-1" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-800 mt-20">
//         <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//           <p className="text-center text-white">
//             © 2025 Sahil Bane. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl animate-fade-in">
              Sahil Bane
            </h1>
            <p className="mt-4 text-2xl text-blue-100">
              Software Engineer
            </p>
            <p className="mt-2 text-xl text-blue-100">
              Available from May 2025 - December 2025
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6">
              <a href="https://github.com/SahilBane2002" className="flex items-center text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300">
                <Github className="h-6 w-6 mr-2" />
                <span>SahilBane2002</span>
              </a>
              <a href="https://www.linkedin.com/in/sahilbane" className="flex items-center text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6 mr-2" />
                <span>sahilbane</span>
              </a>
              <a href="mailto:bane.s@northeastern.edu" className="flex items-center text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6 mr-2" />
                <span>bane.s@northeastern.edu</span>
              </a>
              <a href="tel:+16176592832" className="flex items-center text-white hover:text-blue-200 transform hover:scale-110 transition-all duration-300">
                <Phone className="h-6 w-6 mr-2" />
                <span>+1-617-659-2832</span>
              </a>
              <div className="flex items-center text-white">
                <MapPin className="h-6 w-6 mr-2" />
                <span>Boston, MA</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-blue-500 pb-2 inline-block">About Me</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am a Master's student in Computer Science at Northeastern University's Khoury College of Computer Sciences, with a strong foundation in Electronics and Computer Science Engineering from my undergraduate studies. My passion lies in leveraging cutting-edge technology to solve real-world problems and make a meaningful impact.
          </p>
          
          {/* <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Skills & Expertise</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li><span className="font-semibold">Full-Stack Development:</span> Proficient in MERN Stack (MongoDB, Express.js, React.js, Node.js).</li>
            <li><span className="font-semibold">AI/ML Algorithms:</span> Expertise in developing AI/ML models using Python.</li>
            <li><span className="font-semibold">Programming Languages:</span> Skilled in Python and Java.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Academic Projects</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li><span className="font-semibold">City Grid Optimization:</span> Developed efficient algorithms for urban planning using computational optimization techniques.</li>
            <li><span className="font-semibold">Phishing Detection:</span> Implemented bio-inspired metaheuristic computations to enhance cybersecurity defenses.</li>
            <li><span className="font-semibold">Emotion Detection:</span> Designed deep learning models to analyze and interpret human emotions from visual data.</li>
          </ul> */}
          
          <p className="text-gray-700 leading-relaxed text-lg mt-6">
            I consider myself an efficient problem-solver who thrives on challenges and believes in coding and creating solutions that drive positive change.
          </p>
          
          <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Actively Seeking Roles</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am excited to bring my skills and passion to roles like AI Developer, Full-Stack Developer, or Database Engineer. If you're looking for a dedicated team player eager to innovate and grow, let's connect!
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-blue-500 pb-2 inline-block">Education</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">Masters of Science in Computer Science</h3>
                  <p className="text-blue-600">Northeastern University</p>
                </div>
                <span className="text-sm font-semibold text-blue-500 bg-blue-100 px-3 py-1 rounded-full">Sept. 2024 - Present</span>
              </div>
              
              <p className="mt-6 text-gray-700">
                <span className="font-semibold">GPA:</span> 3.83/4.0
              </p>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Coursework:</span> Algorithms, Foundations of Artificial Intelligence, Program Design Paradigm, Database Management Systems, Natural Language Processing, Machine Learning
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">BE in Electronics and Computer Science</h3>
                  <p className="text-blue-600">University of Mumbai</p>
                  <p className="text-blue-500">Honors in Blockchain</p>
                </div>
                <span className="text-sm font-semibold text-blue-500 bg-blue-100 px-3 py-1 rounded-full">Feb. 2021 - May 2024</span>
              </div>
              
              <p className="mt-6 text-gray-700">
                <span className="font-semibold">GPA:</span> 9.42/10.0
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-purple-500 pb-2 inline-block">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-purple-700">Teaching Assistant</h3>
                  <p className="text-purple-600">Northeastern University</p>
                  <p className="text-gray-500">Boston, MA</p>
                </div>
                <span className="text-sm font-semibold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">Jan. 2025 - Present</span>
              </div>
              <ul className="mt-6 text-gray-700 list-disc list-inside space-y-3">
                <li>Helping 20 students succeed by providing timely and constructive feedback and tutoring sessions for the graduate level Intermediate Programming Course</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-purple-700">Technical Intern</h3>
                  <p className="text-purple-600">Rosefield Energy Tech.</p>
                  <p className="text-gray-500">Mumbai, India</p>
                </div>
                <span className="text-sm font-semibold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">Sept. 2023 - Dec. 2023</span>
              </div>
              <ul className="mt-6 text-gray-700 list-disc list-inside space-y-3">
                <li>Collaborated with the technical team to design and launch 3 visually appealing, user-friendly websites, increasing user engagement</li>
                <li>Developed the Rosefield Conference website for the Lubricants and Fuels event, resulting in a 30% increase in online registrations and a 20% boost in event attendance</li>
                <li>Analyzed and identified warehousing solutions to clients using data analytic tools improving inventory management efficiency</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-purple-700">Organization Lead</h3>
                  <p className="text-purple-600">Game Developers Association</p>
                  <p className="text-gray-500">Mumbai, India</p>
                </div>
                <span className="text-sm font-semibold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">Aug. 2022 - Aug. 2023</span>
              </div>
              <ul className="mt-6 text-gray-700 list-disc list-inside space-y-3">
                <li>Led development of Ashtagraha, an educational game teaching planetary science to school children, which won Mumbai Hackathon, Smart India Hackathon, and was a finalist in the E-Cell Idea Competition</li>
                <li>Co-founded one of the first game development communities in the city, fostering innovation and collaboration</li>
                <li>Pioneered Prop Hunt, a multiplayer game that received overwhelmingly positive feedback from Devfolio, Instagram and Unstop</li>
                <li>Directed Strategem, the association's flagship hackathon with 1,000+ participants</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-purple-700">Undergraduate Research Assistant</h3>
                  <p className="text-purple-600">Fr. Conceicao Rodrigues College of Engineering</p>
                  <p className="text-gray-500">Mumbai, India</p>
                </div>
                <span className="text-sm font-semibold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">Sept. 2022 - May 2023</span>
              </div>
              <ul className="mt-6 text-gray-700 list-disc list-inside space-y-3">
                <li>Conducted research on emotion recognition using Deep Learning algorithms, evaluating methodologies such as CNN, EigenFace with PCA, and DeepFace achieving accuracy of 72%, 80% and 99.93% respectively</li>
                <li>Published the research paper "Semblance Unmasker: Hidden Emotion Recognition Using Deep Learning Approach" in IEEE 
                  <a href="https://ieeexplore.ieee.org/document/10370099" className="text-blue-600 hover:text-blue-800 ml-1 inline-flex items-center">
                    10.1109/ICSCNA58489.2023.10370099
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-pink-500 pb-2 inline-block">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">Languages</h3>
              <div className="text-blue-100">
                C, Java, Python, C#, JavaScript, TypeScript, SQL, Solidity, Dart, HTML, PHP, R
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">Frontend</h3>
              <div className="text-purple-100">
                React, Next.js, Flutter, Tailwind CSS
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">Backend</h3>
              <div className="text-pink-100">
                Node.js, Express, Django, MongoDB
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">Cloud & DevOps</h3>
              <div className="text-indigo-100">
                AWS, Docker
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">Game Development</h3>
              <div className="text-blue-100">
                Unity, Unreal Engine
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">AI & ML</h3>
              <div className="text-purple-100">
                OpenCV, Scikit-Learn, PyTorch
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">Blockchain</h3>
              <div className="text-pink-100">
                Ganache, Truffle, Web3.js
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="font-bold text-xl mb-3">Tools</h3>
              <div className="text-indigo-100">
                Git, GitHub
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-indigo-500 pb-2 inline-block">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-blue-700">AI based City Layout Optimization</h3>
                <span className="text-sm font-semibold text-blue-500 bg-blue-100 px-3 py-1 rounded-full">Sept. 2024 - Dec. 2024</span>
              </div>
              <p className="text-gray-700 mb-6">
                Designed genetic and local search algorithms to optimize urban connectivity, improving emergency response times by 50%. Implemented a constraint-driven cost function for a grid environment, enhancing A* pathfinding to follow predefined movement rules with 100% accuracy.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold hover:underline">View Project</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-purple-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-purple-700">Phishing Detection using PSO</h3>
                <span className="text-sm font-semibold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">July 2023 - May 2024</span>
              </div>
              <p className="text-gray-700 mb-6">
                Conducted in-depth research on optimizing phishing detection models using Random Forest and XGBoost classifiers and employing Particle Swarm Optimization to fine-tune model performance, resulting in a significant 20% increase in accuracy.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold hover:underline">View Project</a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-pink-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-pink-700">Ashtagraha - Educational Game</h3>
                <span className="text-sm font-semibold text-pink-500 bg-pink-100 px-3 py-1 rounded-full">Jan. 2023 - Dec. 2023</span>
              </div>
              <p className="text-gray-700 mb-6">
                Led development of an educational game teaching planetary science to school children. The project won multiple hackathons including Mumbai Hackathon and Smart India Hackathon, and was a finalist in the E-Cell Idea Competition.
              </p>
              <div className="flex space-x-6">
                {/* <a href="#" className="text-pink-600 hover:text-pink-800 font-semibold hover:underline">Demo</a>
                <a href="#" className="text-pink-600 hover:text-pink-800 font-semibold hover:underline">GitHub</a> */}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-t-4 border-indigo-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-indigo-700">Emotion Recognition Research</h3>
                <span className="text-sm font-semibold text-indigo-500 bg-indigo-100 px-3 py-1 rounded-full">July. 2022 - May. 2023</span>
              </div>
              <p className="text-gray-700 mb-6">
                Published IEEE research paper on emotion recognition using Deep Learning methodologies including CNN, EigenFace with PCA, and DeepFace, achieving accuracy rates of up to 99.93%.
              </p>
              <div className="flex space-x-6">
                <a href="https://ieeexplore.ieee.org/document/10370099" className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline inline-flex items-center">
                  View Publication
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mt-20">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-white">
            © 2025 Sahil Bane. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;