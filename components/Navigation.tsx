import React from 'react';
import { Section } from '../types';
import { User, BookOpen, FileText, Globe, Menu, X, Mail, MapPin, Github, Linkedin, GraduationCap, ScanEye, Glasses, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  arFocusMode: boolean;
  setArFocusMode: (active: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  arFocusMode,
  setArFocusMode
}) => {
  
  const navItems = [
    { id: Section.ABOUT, label: 'About', icon: User },
    { id: Section.PUBLICATIONS, label: 'Publications', icon: BookOpen },
    { id: Section.CV, label: 'CV', icon: FileText },
    { id: Section.SERVICE, label: 'Service', icon: Globe },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] relative z-20">
      <div className="p-8 flex-shrink-0">
        {/* Profile Image with AR Effect */}
        <div className="relative group mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-6">
          <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg relative z-10">
            {/* Profile Placeholder / Initials */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 text-slate-400">
                <span className="text-4xl font-light">YP</span>
            </div>
          </div>
          
          {/* Animated AR Rings */}
          <div className="absolute inset-0 -m-1 border border-blue-200 rounded-full animate-[spin_8s_linear_infinite] opacity-70"></div>
          <div className="absolute inset-0 -m-2 border border-dashed border-blue-100 rounded-full animate-[spin_12s_linear_infinite_reverse] opacity-70"></div>
          
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md border border-slate-100 z-20">
             <Glasses className="text-blue-600 w-5 h-5" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 text-center mb-1">Yunqiang Pei</h1>
        <p className="text-xs text-blue-600 font-bold text-center mb-4 tracking-wide uppercase">Ph.D. Candidate • AR & AI</p>
        
        <div className="space-y-3 text-sm text-slate-600 mb-8 px-2">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-4 h-4 mt-1 text-slate-400 shrink-0" />
            <span className="leading-snug">UESTC (Ph.D.) & KAIST (Visiting)</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Chengdu / Daejeon</span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer hover:text-blue-600 transition-colors">
            <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
            <a href="mailto:yqsimonpei3940@hotmail.com" className="truncate">yqsimonpei3940@...</a>
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
      <nav className="flex-1 overflow-y-auto px-6 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
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

      {/* AR Toggle Footer */}
      <div className="p-6 mt-auto border-t border-slate-100">
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 transition-all hover:border-blue-300 hover:shadow-sm">
          <div className="flex items-center gap-2">
            <ScanEye className={`w-4 h-4 ${arFocusMode ? 'text-blue-600' : 'text-slate-400'}`} />
            <span className={`text-xs font-semibold ${arFocusMode ? 'text-blue-700' : 'text-slate-600'}`}>
              {arFocusMode ? 'AR HUD: ONLINE' : 'AR HUD: OFF'}
            </span>
          </div>
          <button 
            onClick={() => setArFocusMode(!arFocusMode)}
            className={`w-10 h-5 rounded-full relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${arFocusMode ? 'bg-blue-600' : 'bg-slate-300'}`}
          >
            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm ${arFocusMode ? 'left-6' : 'left-1'}`} />
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center">
          {arFocusMode ? "Displaying augmented layers." : "Activate Heads-Up Display."}
        </p>
      </div>
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
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 w-80 h-full">
              {sidebarContent}
            </div>
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10" 
              onClick={() => setIsMobileMenuOpen(false)}
            />
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