
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Github, Mail, Phone, ExternalLink, ChevronDown, Code, Brain, Database, Cpu, Layers, User } from 'lucide-react';
import Cursor from './components/Cursor';
import Section from './components/Section';
import { PROJECTS, INTERNSHIPS, EDUCATION, SKILL_CATEGORIES } from './constants';

const AnimatedAvatar = () => (
  <motion.div
    className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-[3rem] bg-gray-900 border border-white/10 overflow-hidden shadow-2xl"
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 1, 0, -1, 0]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    {/* Minimalist face-less guy representation */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
    <svg 
      viewBox="0 0 100 100" 
      className="w-2/3 h-2/3 text-gray-400 opacity-60 fill-current"
    >
      <motion.circle 
        cx="50" cy="35" r="18" 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.path 
        d="M20 90 Q50 60 80 90" 
        strokeWidth="10" 
        stroke="currentColor" 
        fill="none"
        strokeLinecap="round"
        animate={{ d: ["M22 90 Q50 65 78 90", "M20 90 Q50 60 80 90", "M22 90 Q50 65 78 90"] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </svg>
    <div className="absolute inset-0 border-[8px] border-blue-500/5 rounded-[3rem]" />
  </motion.div>
);

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleGithubClick = () => {
    window.open("https://github.com/owais1724", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <Cursor />
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] bg-gray-950 flex items-center justify-center overflow-hidden"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-[2px] bg-blue-500 animate-pulse" />
              <div className="mt-4 mono text-xs tracking-widest text-blue-500/60 uppercase">Initializing Portfolio</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(3,7,18,1)_100%)]"
      />
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-gray-950/30 border-b border-white/5"
      >
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">S</div>
          <span className="font-bold tracking-tight hidden sm:block">Syed Owais</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                {item.name}
              </button>
            ))}
          </div>
          <button 
            onClick={handleGithubClick}
            className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2"
          >
            <Github size={14} />
            GitHub
          </button>
        </div>
      </motion.nav>

      <main className="relative pt-24">
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
          <svg className="w-full h-full opacity-10">
            <motion.path
              d="M 50% 0 L 50% 100%"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </div>

        <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 -z-10" />
            <AnimatedAvatar />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              SYED OWAIS
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12"
          >
            AI & Machine Learning Engineer crafting <span className="text-white font-medium">intelligent backends</span> and data-driven ecosystems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => scrollToSection('projects')} 
              className="px-8 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 hover:-translate-y-1 transition-all shadow-xl shadow-blue-500/20"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 hover:-translate-y-1 transition-all"
            >
              Get in Touch
            </button>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="text-gray-600" />
          </motion.div>
        </section>

        <Section id="about" className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">THE <br/><span className="text-blue-500">SUMMARY</span></h2>
              <div className="w-12 h-1 bg-blue-500/50" />
            </div>
            <div className="md:col-span-8">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Final-year AI and Machine Learning student passionate about developing intelligent, data-driven systems. 
                Experienced in full-stack development, model optimization, and scalable deployments using <span className="text-white font-medium">Python, Flask, and FastAPI</span>. 
                Committed to building efficient real-world solutions through collaboration and clean code principles.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" className="bg-gray-900/40 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
             <div className="flex flex-col mb-16">
                <span className="mono text-blue-500 text-xs tracking-widest uppercase mb-2">Expertise</span>
                <h2 className="text-4xl font-bold">Technical Arsenal</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <motion.div 
                    key={cat.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-gray-800/50 border border-white/5 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                      {idx === 0 && <Code className="text-blue-500" size={24} />}
                      {idx === 1 && <Brain className="text-blue-500" size={24} />}
                      {idx === 2 && <Database className="text-blue-500" size={24} />}
                      {idx === 3 && <Cpu className="text-blue-500" size={24} />}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{cat.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-gray-400 hover:text-white transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </Section>

        <Section id="projects" className="max-w-6xl mx-auto">
          <div className="flex flex-col mb-16 items-center">
            <span className="mono text-blue-500 text-xs tracking-widest uppercase mb-2">Showcase</span>
            <h2 className="text-4xl font-bold text-center">Engineered Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                className="group relative bg-gray-800/30 border border-white/10 rounded-[2rem] p-8 overflow-hidden transition-all hover:bg-gray-800/50"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} className="text-blue-400" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                </div>
                <p className="text-gray-400 font-light mb-8 leading-relaxed min-h-[4rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-mono uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" className="bg-gray-950/50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-blue-500" /> Professional Experience
              </h2>
              <div className="space-y-12">
                {INTERNSHIPS.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-white/10 group">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{item.company}</h3>
                      <span className="mono text-xs text-blue-500">{item.period}</span>
                    </div>
                    <p className="text-gray-400 font-medium mb-4">{item.role}</p>
                    <ul className="space-y-3">
                      {item.points.map((p, i) => (
                        <li key={i} className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
                          <span className="text-blue-500 mt-1.5 min-w-[4px] h-[4px] rounded-full bg-blue-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-blue-500" /> Academic Journey
              </h2>
              <div className="space-y-12">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-white/10 group">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-500 group-hover:bg-blue-500 group-hover:scale-150 transition-all" />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <span className="mono text-xs text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-xs mono text-blue-500/70">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" className="max-w-6xl mx-auto py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
            <h2 className="text-5xl font-black mb-6 tracking-tighter">LET'S CONNECT</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
              Have a challenging project or just want to chat about AI/ML? I'm always open to new opportunities.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="mailto:syedowaismohi@gmail.com" 
                className="flex items-center justify-center gap-4 p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-500"><Mail size={24} /></div>
                <div className="text-left">
                  <div className="text-xs uppercase mono text-gray-500">Email Me</div>
                  <div className="font-bold">syedowaismohi@gmail.com</div>
                </div>
              </a>
              <a 
                href="tel:+919353120726" 
                className="flex items-center justify-center gap-4 p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-500"><Phone size={24} /></div>
                <div className="text-left">
                  <div className="text-xs uppercase mono text-gray-500">Call Me</div>
                  <div className="font-bold">+91 9353120726</div>
                </div>
              </a>
            </div>
          </motion.div>
        </Section>
      </main>

      <footer className="py-12 px-8 border-t border-white/5 text-center text-gray-600 text-sm mono">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <button onClick={handleGithubClick} className="hover:text-white transition-colors">GITHUB</button>
            <a href="mailto:syedowaismohi@gmail.com" className="hover:text-white transition-colors">EMAIL</a>
          </div>
          <div>© {new Date().getFullYear()} SYED OWAIS • BUILT WITH PASSION</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
