import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Menu, X, ChevronRight, ChevronDown, Download, Home, User, Briefcase, Code, BookOpen, Award, FileText, Sun, Moon } from 'lucide-react';

const primary = '#6366F1';
const secondary = '#8B5CF6';
const accent = '#F472B6';
const pillBg = '#EDE9FE';
const pillText = '#4C1D95';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'SafeLink Innovations Inc',
    location: 'Seattle, WA',
    period: 'Jan 2026 – Jun 2026',
    bullets: [
      'Developed an agentic enterprise automation pipeline using Anthropic API (Claude Sonnet) and FastAPI, replacing manual hazard analysis with LLM-orchestrated generation and a vector similarity search fallback over word embeddings for fault-tolerant service continuity during LLM downtime.',
      'Delivered a HARA module that automated hazard-to-risk and severity classification across component-level safety records, eliminating manual cross-referencing and accelerating risk assessment for ISO 26262-compliant automotive workflows.',
      'Integrated OpenCV and Pytesseract into a document ingestion pipeline that extracted and structured safety data from scanned engineering inputs, removing manual data entry from project setup entirely.',
      'Architected a full-stack safety engineering platform across a Next.js (React, TypeScript, SSR) frontend and a distributed Python microservices backend, processing 500+ components per project through scalable RESTful API and service layers.',
      'Designed a real-time collaboration system enabling 10+ engineers to simultaneously edit safety analyses, with automatic conflict resolution detecting overlapping edits in under 500ms.',
      'Implemented a 3-tier identity and access management (Admin/Editor/Reviewer) using Supabase and JWT authentication, managing access control for 30+ users across 50+ projects.',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Jan 2025 – Apr 2025',
    bullets: [
      'Led weekly workshops for 20+ students on software design principles and debugging workflows, helping the cohort ship cleaner, more maintainable codebases by end of semester.',
      'Reviewed and debugged 20+ student projects, resolving critical issues early enough that the majority submitted fully functional code on time.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Rosefield Energy Technologies',
    location: 'Mumbai, India',
    period: 'Sep 2023 – Dec 2023',
    bullets: [
      'Built three web applications using React.js and Node.js that increased user engagement by 25% and online registrations by 30% within one quarter of launch.',
      'Constructed a data analytics pipeline using NumPy, Pandas, and PostgreSQL to analyze warehouse operations, surfacing key bottlenecks that drove a 15% increase in inventory turnover.',
    ],
  },
  {
    title: 'Organization Lead',
    company: 'Game Developers Association',
    location: 'Mumbai, India',
    period: 'Aug 2022 – Aug 2023',
    bullets: [
      'Co-founded one of the first game development communities in the city, growing the club to 100+ active members.',
      'Led a team of 20 developers to build Ashtagraha, an educational game that won 1st place at the Mumbai Hackathon and Smart India Hackathon.',
      'Directed Strategem, the association\'s flagship hackathon, hosting over 1,000 participants.',
    ],
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Fr. Conceicao Rodrigues College of Engineering',
    location: 'Mumbai, India',
    period: 'Sep 2022 – May 2023',
    bullets: [
      'Built and evaluated emotion recognition models: CNN (72%), EigenFace+PCA (80%), and DeepFace (99.93%) using PyTorch, TensorFlow, and OpenCV.',
      'Published "Semblance Unmasker: Hidden Emotion Recognition Using Deep Learning Approach" in IEEE ICSCNA 2023.',
    ],
    link: { href: 'https://ieeexplore.ieee.org/document/10370099', label: 'IEEE Publication' },
  },
];

const projects = [
  {
    title: 'NuaMed',
    subtitle: 'Allergen Detection App',
    period: 'Sep–Nov 2025',
    description: 'iOS app with barcode/photo scanning and an LLM layer identifying user-specific allergens at 92–95% accuracy. Smart caching cut scan-to-result latency to under 1 second.',
    github: 'https://github.com/SanjanaGB/NuaMed',
    tags: ['Swift', 'LLM', 'iOS', 'Firestore', 'PostgreSQL'],
    highlight: true,
  },
  {
    title: 'IntelliAgent Pro',
    subtitle: 'Multi-Agent AI Automation',
    period: 'Aug–Oct 2025',
    description: 'Production multi-agent system (Python, FastAPI, Docker) with Qwen 2.5:7B — designing task routing, agent specialization, and inter-agent comms. OAuth automation across Gmail and Google Calendar.',
    github: 'https://github.com/yourusername/agentic-ai-system',
    tags: ['Python', 'FastAPI', 'Docker', 'LLM', 'OAuth'],
    highlight: true,
  },
  {
    title: 'City Layout Optimizer',
    subtitle: 'AI Urban Planning',
    period: 'Sep–Dec 2024',
    description: 'Genetic algorithms + A* search to optimize traffic across 15 intersections — 50% improvement in simulated emergency response times, validated across 5,000+ scenarios.',
    github: 'https://github.com/Jithin-Veeragandham/ai-city-architect',
    tags: ['Python', 'Genetic Algorithms', 'A*'],
  },
  {
    title: 'Phishing Detection',
    subtitle: 'PSO-Optimized Classifier',
    period: 'Jul 2023–May 2024',
    description: 'Random Forest + XGBoost with Particle Swarm Optimization — 20% accuracy gain over baseline through automated hyperparameter tuning and feature selection.',
    github: 'https://github.com/SahilBane2002/PhishingDetection',
    tags: ['Python', 'Scikit-Learn', 'PSO', 'XGBoost'],
  },
  {
    title: 'Ashtagraha',
    subtitle: 'Educational Game',
    period: 'Jan–Dec 2023',
    description: 'Planetary science educational game in Unreal Engine with custom Blender 3D assets. Won 1st place at Mumbai Hackathon and Smart India Hackathon.',
    tags: ['Unreal Engine', 'C++', 'Blender'],
  },
  {
    title: 'Semblance Unmasker',
    subtitle: 'Emotion Recognition · IEEE',
    period: 'Jul 2022–May 2023',
    description: 'Deep learning emotion recognition: CNN (72%), EigenFace+PCA (80%), DeepFace (99.93%). Published in IEEE ICSCNA 2023.',
    link: { href: 'https://ieeexplore.ieee.org/document/10370099', label: 'View Publication' },
    tags: ['PyTorch', 'TensorFlow', 'OpenCV'],
  },
];

const skillGroups = [
  { label: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'SQL', 'Golang', 'Swift'] },
  { label: 'Frontend', skills: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Node.js', 'FastAPI', 'Django', 'REST APIs'] },
  { label: 'AI & ML', skills: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'LLM Integration', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'CUDA', 'Word Embeddings', 'NLP', 'Computer Vision'] },
  { label: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'] },
  { label: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Firebase'] },
  { label: 'Tools', skills: ['GitHub', 'Figma', 'Linux Shell', 'Cursor (AI-assisted dev)'] },
];

function SectionHeader({ title, isDark }: { title: string; isDark: boolean }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold" style={{ color: isDark ? '#fff' : '#0F172A' }}>{title}</h2>
      <div className="h-0.5 w-12 mt-2 rounded-full" style={{ background: `linear-gradient(90deg,${primary},${secondary})` }} />
    </div>
  );
}

function Pill({ label, small, isDark }: { label: string; small?: boolean; isDark: boolean }) {
  return (
    <span className={`rounded-full font-medium inline-block ${small ? 'text-xs px-2 py-0.5' : 'text-xs px-3 py-1'}`}
      style={{ background: isDark ? 'rgba(99,102,241,0.2)' : pillBg, color: isDark ? '#A5B4FC' : pillText }}>
      {label}
    </span>
  );
}

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openExp, setOpenExp] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    const saved = localStorage.getItem('darkMode');
    if (saved) setIsDarkMode(JSON.parse(saved));
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects'];
      const cur = sections.find(s => {
        const el = document.getElementById(s);
        if (el) { const r = el.getBoundingClientRect(); return r.top <= 100 && r.bottom >= 100; }
        return false;
      });
      if (cur) setActiveSection(cur);
    };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleResize); };
  }, []);

  const toggleDark = () => { const n = !isDarkMode; setIsDarkMode(n); localStorage.setItem('darkMode', JSON.stringify(n)); };

  const t = isDarkMode ? {
    bg: 'bg-slate-950', card: 'bg-slate-900', text: 'text-white',
    sub: 'text-slate-300', muted: 'text-slate-400', border: 'border-slate-700',
    hover: 'hover:bg-slate-800', alt: 'bg-slate-900', divide: 'divide-slate-800',
  } : {
    bg: 'bg-slate-50', card: 'bg-white', text: 'text-slate-900',
    sub: 'text-slate-600', muted: 'text-slate-500', border: 'border-slate-200',
    hover: 'hover:bg-slate-50', alt: 'bg-white', divide: 'divide-slate-100',
  };

  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setIsNavOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="h-4 w-4 mr-2" /> },
    { id: 'about', label: 'About', icon: <User className="h-4 w-4 mr-2" /> },
    { id: 'education', label: 'Education', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="h-4 w-4 mr-2" /> },
    { id: 'projects', label: 'Projects', icon: <Award className="h-4 w-4 mr-2" /> },
  ];

  const SideNav = () => (
    <nav className={`fixed left-0 top-0 h-full w-56 z-50 flex flex-col border-r-2 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`} style={{ borderRightColor: primary }}>
      <div className={`p-5 border-b ${t.border}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scroll('home'); }} className={`font-bold ${t.text} flex items-center gap-3`}>
          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: primary }}>SB</span>
          Sahil Subodh Bane
        </a>
      </div>
      <div className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
        {navItems.map(({ id, label, icon }) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scroll(id); }}
            className={`flex items-center py-2 px-3 rounded-lg text-sm transition-all ${activeSection === id ? 'text-white font-semibold' : `${t.muted} ${t.hover}`}`}
            style={activeSection === id ? { background: primary } : {}}>
            {icon}{label}
          </a>
        ))}
      </div>
      <div className={`p-4 border-t ${t.border} space-y-2.5`}>
        <button onClick={toggleDark} className={`w-full flex items-center justify-center px-3 py-2 text-xs font-medium rounded-lg border ${t.muted} ${t.hover}`} style={{ borderColor: secondary }}>
          {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <a href="SahilBane_AI.pdf" className="flex items-center justify-center w-full px-3 py-2 text-xs font-semibold rounded-lg text-white" style={{ background: secondary }}>
          <FileText className="h-3.5 w-3.5 mr-2" />Download CV
        </a>
        <div className="flex justify-center gap-4 pt-1">
          {[{ href: 'https://github.com/SahilBane2002', icon: <Github className="h-4 w-4" /> }, { href: 'https://www.linkedin.com/in/sahilbane', icon: <Linkedin className="h-4 w-4" /> }, { href: 'mailto:bane.s@northeastern.edu', icon: <Mail className="h-4 w-4" /> }]
            .map(({ href, icon }, i) => <a key={i} href={href} className={`${t.muted} hover:text-indigo-500 transition-colors`}>{icon}</a>)}
        </div>
      </div>
    </nav>
  );

  const MobileNav = () => (
    <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} shadow-md py-3 px-4`}>
      <div className="flex justify-between items-center">
        <span className={`font-bold text-sm ${t.text}`}>Sahil Subodh Bane</span>
        <div className="flex items-center gap-3">
          <button onClick={toggleDark} className={t.muted}>{isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
          <button onClick={() => setIsNavOpen(!isNavOpen)} className={t.muted}>{isNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
        </div>
      </div>
      {isNavOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsNavOpen(false)} />
          <div className={`relative max-w-xs w-full ${isDarkMode ? 'bg-slate-900' : 'bg-white'} shadow-xl p-5 space-y-1`}>
            {navItems.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scroll(id); }}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${activeSection === id ? 'text-white' : t.sub}`}
                style={activeSection === id ? { background: primary } : {}}>{label}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const offset = isSmallScreen ? '' : 'ml-56';

  return (
    <div className={`min-h-screen ${t.bg} transition-colors duration-300`}>
      {isSmallScreen ? <MobileNav /> : <SideNav />}

      {/* HERO */}
      <section id="home" className={isSmallScreen ? 'pt-14' : 'ml-56'}>
        <div className="relative overflow-hidden" style={{ background: isDarkMode ? 'linear-gradient(135deg,#1a0a2e,#1E1B4B)' : 'linear-gradient(135deg,#FDF2F8,#EDE9FE,#E0E7FF)' }}>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10" style={{ background: `radial-gradient(circle,${accent},transparent)` }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: `radial-gradient(circle,${primary},transparent)` }} />
          <div className="relative max-w-4xl mx-auto px-6 py-14">
            <div className="flex flex-col-reverse sm:flex-row items-center gap-8">
              {/* Left: text */}
              <div className="flex-1 text-center sm:text-left">
                <h1 className={`text-5xl sm:text-6xl font-bold tracking-tight leading-none mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Sahil<br/>Subodh<br/>Bane</h1>
                <div className="h-1 w-14 my-4 rounded-full sm:mx-0 mx-auto" style={{ background: `linear-gradient(90deg,${accent},${primary})` }} />
                <p className={`text-lg font-medium mb-1 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>AI Software Engineer</p>
                <p className={`text-xs mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Agentic systems · Full-stack platforms · LLM applications</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-5">
                  {[{ href: 'https://github.com/SahilBane2002', icon: <Github className="h-3.5 w-3.5 mr-1.5" />, label: 'GitHub' }, { href: 'https://www.linkedin.com/in/sahilbane', icon: <Linkedin className="h-3.5 w-3.5 mr-1.5" />, label: 'LinkedIn' }, { href: 'mailto:bane.s@northeastern.edu', icon: <Mail className="h-3.5 w-3.5 mr-1.5" />, label: 'Email' }]
                    .map(({ href, icon, label }) => (
                      <a key={label} href={href} className={`flex items-center text-xs px-3 py-2 rounded-lg border font-medium transition-all hover:shadow-md ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-pink-500' : 'bg-white/80 border-slate-200 text-slate-700 hover:border-pink-300'}`}>
                        {icon}{label}
                      </a>
                    ))}
                  <div className={`flex items-center text-xs px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-white/80 border-slate-200 text-slate-500'}`}>
                    <MapPin className="h-3.5 w-3.5 mr-1.5" />Seattle, WA
                  </div>
                </div>
                <a href="#about" onClick={(e) => { e.preventDefault(); scroll('about'); }}
                  className="inline-flex items-center px-5 py-2.5 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm"
                  style={{ background: `linear-gradient(135deg,${accent},${primary})` }}>
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              {/* Right: photo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(135deg,${accent},${primary})`, transform: 'scale(1.04) rotate(2deg)', borderRadius: '1rem' }} />
                  <img
                    src="/sahil-photo.jpeg"
                    alt="Sahil Subodh Bane"
                    className="relative w-44 h-52 sm:w-48 sm:h-56 object-cover object-top border-4 border-white"
                    style={{ borderRadius: '1rem', boxShadow: '0 12px 40px rgba(244,114,182,0.2)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className={`${t.bg} ${offset} transition-colors duration-300`}>

        {/* ABOUT + SKILLS — side by side */}
        <section id="about" className="py-14">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left: About */}
              <div className="flex-1 min-w-0">
                <SectionHeader title="About Me" isDark={isDarkMode} />
                <div className={`${t.card} rounded-2xl shadow-md p-6`} style={{ borderTop: `3px solid ${accent}` }}>
                  <p className={`${t.sub} leading-relaxed text-sm mb-3`}>
                    AI Software Engineer building production-grade agentic systems and full-stack platforms. Currently interning at SafeLink Innovations (Seattle) — developing LLM-orchestrated automation pipelines, real-time collaboration infrastructure, and safety-critical engineering platforms using Next.js, FastAPI, and distributed Python microservices.
                  </p>
                  <p className={`${t.sub} leading-relaxed text-sm mb-5`}>
                    MS Computer Science candidate at Northeastern University (GPA 3.89, Dec 2026), with experience at the intersection of applied AI and systems engineering.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: isDarkMode ? 'rgba(244,114,182,0.12)' : '#FCE7F3', color: isDarkMode ? '#F9A8D4' : '#9D174D' }}>
                      Seeking full-time · Jan 2027
                    </div>
                    <a href="SahilBane_AI.pdf" className="inline-flex items-center px-3 py-1.5 text-white font-semibold rounded-lg text-xs hover:shadow-md transition-all" style={{ background: `linear-gradient(135deg,${accent},${primary})` }}>
                      <Download className="mr-1.5 h-3.5 w-3.5" />Resume
                    </a>
                  </div>
                </div>
              </div>
              {/* Right: Skills */}
              <div id="skills" className="w-full md:w-80 flex-shrink-0">
                <SectionHeader title="Skills" isDark={isDarkMode} />
                <div className={`${t.card} rounded-2xl shadow-md overflow-hidden divide-y ${t.divide}`} style={{ borderTop: `3px solid ${primary}` }}>
                  {skillGroups.map((g, i) => (
                    <div key={i} className="px-4 py-2.5 flex flex-wrap items-start gap-1.5">
                      <span className="text-xs font-bold w-full mb-1" style={{ color: i % 2 === 0 ? primary : secondary }}>{g.label}</span>
                      {g.skills.map((s, j) => <Pill key={j} label={s} small isDark={isDarkMode} />)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className={`py-14 ${t.alt}`}>
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader title="Education" isDark={isDarkMode} />
            <div className="space-y-3">
              {[
                { degree: 'Master of Science, Computer Science', school: 'Northeastern University · Khoury College', period: 'Sep 2024 – Dec 2026', gpa: '3.89 / 4.0', note: 'Graduating December 2026', coursework: 'AI, Machine Learning, NLP, Algorithms, Database Management' },
                { degree: 'BE in Electronics & Computer Science (Honors — Blockchain)', school: 'University of Mumbai · Fr. CRCE', period: 'Feb 2021 – May 2024', gpa: '9.42 / 10.0', coursework: 'OS, Software Engineering, OOP, Data Structures' },
              ].map((e, i) => (
                <div key={i} className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} p-5 rounded-xl border-l-4`} style={{ borderLeftColor: primary }}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="font-bold text-sm" style={{ color: primary }}>{e.degree}</h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: secondary }}>{e.school}</p>
                      {e.note && <p className={`text-xs mt-0.5 ${t.muted}`}>{e.note}</p>}
                    </div>
                    <Pill label={e.period} small isDark={isDarkMode} />
                  </div>
                  <div className={`mt-2 text-xs ${t.muted} flex flex-wrap gap-3`}>
                    <span><span className="font-semibold" style={{ color: primary }}>GPA:</span> {e.gpa}</span>
                    <span><span className="font-semibold" style={{ color: primary }}>Coursework:</span> {e.coursework}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE — accordion */}
        <section id="experience" className="py-14">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader title="Experience" isDark={isDarkMode} />
            <p className={`text-xs ${t.muted} mb-4`}>Click any role to expand details.</p>
            <div className={`${t.card} rounded-2xl shadow-md overflow-hidden divide-y ${t.divide}`}>
              {experiences.map((exp, i) => {
                const isOpen = openExp === i;
                return (
                  <div key={i}>
                    <button onClick={() => setOpenExp(isOpen ? -1 : i)}
                      className={`w-full text-left px-5 py-4 flex items-center justify-between gap-3 transition-colors ${isOpen ? '' : t.hover}`}
                      style={isOpen ? { background: isDarkMode ? 'rgba(99,102,241,0.1)' : '#F5F3FF' } : {}}>
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ background: i === 0 ? `linear-gradient(135deg,${primary},${secondary})` : isDarkMode ? '#1E293B' : '#E2E8F0', color: i === 0 ? 'white' : isDarkMode ? '#94A3B8' : '#64748B' }}>
                          {exp.company.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm" style={{ color: isOpen ? primary : isDarkMode ? '#fff' : '#0F172A' }}>{exp.title}</p>
                          <p className={`text-xs ${t.muted}`}>{exp.company} · {exp.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Pill label={exp.period} small isDark={isDarkMode} />
                        <ChevronDown className={`h-4 w-4 ${t.muted} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1">
                        <ul className={`space-y-2 text-xs ${t.sub} list-disc ml-5`}>
                          {exp.bullets.map((b, j) => <li key={j} className="leading-relaxed">{b}</li>)}
                        </ul>
                        {exp.link && (
                          <a href={exp.link.href} className="mt-3 inline-flex items-center text-xs font-semibold hover:underline" style={{ color: primary }}>
                            <ExternalLink className="h-3 w-3 mr-1" />{exp.link.label}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS — swipeable */}
        <section id="projects" className="py-14">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader title="Projects" isDark={isDarkMode} />
            {/* Scroll hint */}
            <p className={`text-xs ${t.muted} mb-3 flex items-center gap-1`}>
              <span>←</span> swipe to explore <span>→</span>
            </p>
            <div
              className="flex gap-4 overflow-x-auto pb-4"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {projects.map((p, i) => (
                <div key={i}
                  className={`${t.card} rounded-xl shadow-md flex flex-col flex-shrink-0 border-t-4 p-5`}
                  style={{
                    width: '280px',
                    scrollSnapAlign: 'start',
                    borderTopColor: p.highlight ? primary : secondary,
                  }}>
                  {/* Badge + period */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{ background: p.highlight ? `linear-gradient(135deg,${primary},${secondary})` : isDarkMode ? '#1E293B' : pillBg, color: p.highlight ? 'white' : isDarkMode ? '#A5B4FC' : pillText }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className={`text-xs ${t.muted}`}>{p.period}</span>
                  </div>
                  {/* Title */}
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: p.highlight ? primary : secondary }}>{p.title}</h3>
                  <p className={`text-xs ${t.muted} mb-3`}>{p.subtitle}</p>
                  {/* Description */}
                  <p className={`text-xs ${t.sub} leading-relaxed flex-1 mb-3`}>{p.description}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded"
                        style={{ background: isDarkMode ? 'rgba(139,92,246,0.15)' : '#F3F0FF', color: isDarkMode ? '#C4B5FD' : '#6D28D9' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex gap-3 mt-auto pt-2 border-t" style={{ borderColor: isDarkMode ? '#1E293B' : '#EDE9FE' }}>
                    {p.github && <a href={p.github} className="inline-flex items-center text-xs font-semibold hover:underline" style={{ color: secondary }}><Github className="h-3 w-3 mr-1" />Code</a>}
                    {p.link && <a href={p.link.href} className="inline-flex items-center text-xs font-semibold hover:underline" style={{ color: secondary }}><ExternalLink className="h-3 w-3 mr-1" />{p.link.label}</a>}
                  </div>
                </div>
              ))}
              {/* End padding card */}
              <div className="flex-shrink-0 w-4" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 text-white" style={{ background: `linear-gradient(135deg,${primary},${secondary})` }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Let's Work Together</h2>
            <p className="text-indigo-100 mb-6 text-sm max-w-lg mx-auto">
              Graduating December 2026. Seeking full-time SWE and AI/ML Engineering roles with a January 2027 start.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:bane.s@northeastern.edu" className="inline-flex items-center px-5 py-2.5 font-bold rounded-xl bg-white text-sm hover:shadow-xl transition-all hover:scale-105" style={{ color: primary }}>
                <Mail className="mr-2 h-4 w-4" />Contact Me
              </a>
              <a href="https://www.linkedin.com/in/sahilbane" className="inline-flex items-center px-5 py-2.5 font-bold rounded-xl border-2 border-white text-white text-sm hover:bg-white hover:text-indigo-600 transition-all">
                <Linkedin className="mr-2 h-4 w-4" />LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={`py-6 text-white ${offset}`} style={{ background: '#1E1B4B' }}>
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            <p className="font-bold text-sm">Sahil Subodh Bane</p>
            <p className="text-indigo-300 text-xs">AI Software Engineer</p>
          </div>
          <div className="flex gap-4">
            {[{ href: 'https://github.com/SahilBane2002', icon: <Github className="h-4 w-4" /> }, { href: 'https://www.linkedin.com/in/sahilbane', icon: <Linkedin className="h-4 w-4" /> }, { href: 'mailto:bane.s@northeastern.edu', icon: <Mail className="h-4 w-4" /> }]
              .map(({ href, icon }, i) => <a key={i} href={href} className="text-indigo-300 hover:text-white transition-colors">{icon}</a>)}
          </div>
          <p className="text-indigo-400 text-xs">© 2026 Sahil Subodh Bane</p>
        </div>
      </footer>
    </div>
  );
}