import React from 'react';
import { Section } from '../types';
import { User, BookOpen, FileText, Menu, X, Mail, MapPin, Github, Linkedin, GraduationCap, Glasses, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen
}) => {
  
  const navItems = [
    { id: Section.ABOUT, label: 'About', icon: User },
    { id: Section.PUBLICATIONS, label: 'Publications', icon: BookOpen },
    { id: Section.CV, label: 'CV', icon: FileText },
    { id: Section.HARDWARE, label: 'Hardware', icon: Cpu },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative z-20">
      <div className="p-5 sm:p-7 flex-shrink-0">
        {/* Profile Image with AR Effect */}
        <div className="relative group mx-auto w-32 h-32 sm:w-44 sm:h-44 mb-4 sm:mb-5">
          <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg relative z-10">
            {/* Profile Placeholder / Initials */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 text-slate-400">
                <img
                  src="imgs/profilephoto260616.avif"
                  alt="Profile Photo"
                  className="w-full h-full rounded-full object-cover object-center scale-[1.18]"
                />
            </div>
          </div>
          
          {/* Animated AR Rings */}
          <div className="absolute inset-0 -m-1 border border-blue-200 rounded-full animate-[spin_8s_linear_infinite] opacity-70"></div>
          <div className="absolute inset-0 -m-2 border border-dashed border-blue-100 rounded-full animate-[spin_12s_linear_infinite_reverse] opacity-70"></div>
          
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md border border-slate-100 z-20">
             <Glasses className="text-blue-600 w-5 h-5" />
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-1">Yunqiang Pei</h1>
        
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600 mb-4 sm:mb-7 px-2">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-4 h-4 mt-1 text-slate-400 shrink-0" />
            <span className="leading-snug">UESTC Ph.D. Candidate</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Chengdu</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">yqsimonpei3940 [at] hotmail.com</span>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex justify-center gap-3 mb-2">
           <SocialIcon icon={Github} label="GitHub" link="https://github.com/Simon-Pei" />
           <SocialIcon icon={GraduationCap} label="Scholar" link="https://scholar.google.com/citations?user=XzZSbxAAAAAJ&hl=en&authuser=1" />
           <SocialIcon icon={Linkedin} label="LinkedIn" link="https://www.linkedin.com/in/yunqiang-pei-198b16334/" />
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto px-5 sm:px-6 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
              activeSection === item.id 
                ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm ring-1 ring-blue-100' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <item.icon className={`w-4.5 h-4.5 ${activeSection === item.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
            {item.label}
            {activeSection === item.id && (
              <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-4 border-b border-slate-200 shadow-sm">
        <div className="font-bold text-lg text-slate-800 flex items-center gap-2">
          <Cpu className="text-blue-600 w-5 h-5" />
          <span>Yunqiang Pei</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 bottom-0 w-80 z-40">
        {sidebarContent}
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-80 h-full">
              {sidebarContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SocialIcon: React.FC<{ icon: React.ElementType, label: string, link: string }> = ({ icon: Icon, label, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 group relative"
  >
    <Icon className="w-5 h-5" />
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
      {label}
    </span>
  </a>
);

export default Navigation;
