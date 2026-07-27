import React from 'react';
import { Section } from '../types';
import {
  BookOpen,
  ChevronRight,
  Cpu,
  FileText,
  Github,
  GraduationCap,
  Images,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  User,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const NAV_ITEMS = [
  { id: Section.ABOUT, number: '01', label: 'About', icon: User },
  { id: Section.PUBLICATIONS, number: '02', label: 'Publications', icon: BookOpen },
  { id: Section.CV, number: '03', label: 'CV', icon: FileText },
  { id: Section.HARDWARE, number: '04', label: 'Hardware', icon: Cpu },
  { id: Section.GALLERY, number: '05', label: 'Gallery', icon: Images },
  { id: Section.RECOMMENDATIONS, number: '06', label: 'Recommendations', icon: Sparkles }
];

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const selectSection = (section: Section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sidebarContent = (
    <div className="relative flex h-full flex-col overflow-hidden border-r border-white/10 bg-[#0b0d11]/[0.96] text-white shadow-[12px_0_50px_rgba(0,0,0,0.34)] backdrop-blur-xl">
      <div className="h-1 w-full bg-[#c9a766]" />

      <div className="shrink-0 px-6 pb-5 pt-6">
        <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase text-[#c9a766]">
          <Landmark className="h-4 w-4" />
          Personal Museum
        </div>

        <div className="relative mx-auto mb-4 w-36 sm:w-40">
          <div className="aspect-[4/5] overflow-hidden border border-[#c9a766]/70 bg-[#171a20] p-1 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
            <img
              src="imgs/profilephoto260616.avif"
              alt="Yunqiang Pei"
              className="h-full w-full object-cover object-center scale-[1.12]"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center border border-[#c9a766]/60 bg-[#11141a] text-[#c9a766] shadow-lg">
            <GraduationCap className="h-4 w-4" />
          </div>
        </div>

        <h1 className="text-center text-2xl font-semibold text-white">Yunqiang Pei</h1>
        <p className="mt-1 text-center text-xs text-white/45">AR x AI Researcher</p>

        <div className="mt-5 space-y-2 border-y border-white/10 py-4 text-xs text-white/65">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a766]" />
            <span className="leading-5">UESTC Ph.D. Candidate</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 shrink-0 text-[#c9a766]" />
            <span>Chengdu</span>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a766]" />
            <span className="min-w-0 break-words leading-5">yqsimonpei3940 [at] hotmail.com</span>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          <SocialIcon icon={Github} label="GitHub" link="https://github.com/Simon-Pei" />
          <SocialIcon
            icon={GraduationCap}
            label="Google Scholar"
            link="https://scholar.google.com/citations?user=XzZSbxAAAAAJ&hl=en&authuser=1"
          />
          <SocialIcon
            icon={Linkedin}
            label="LinkedIn"
            link="https://www.linkedin.com/in/yunqiang-pei-198b16334/"
          />
        </div>
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto px-4 pb-5" aria-label="Museum rooms">
        <div className="mb-2 px-3 text-[10px] font-semibold uppercase text-white/30">Exhibition Rooms</div>
        <div className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectSection(item.id)}
                className={`group relative flex min-h-11 w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors ${
                  isActive
                    ? 'bg-white/[0.09] text-white'
                    : 'text-white/55 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive ? 'text-[#f4c86b]' : 'text-white/25'}`}>
                  {item.number}
                </span>
                <item.icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-[#f4c86b]' : 'text-white/40'}`} />
                <span className="min-w-0 flex-1 truncate font-medium">{item.label}</span>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    isActive
                      ? 'translate-x-0 text-[#f4c86b]'
                      : '-translate-x-1 text-white/20 group-hover:translate-x-0'
                  }`}
                />
                {isActive && <span className="absolute inset-y-2 left-0 w-0.5 bg-[#c9a766]" />}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="shrink-0 border-t border-white/10 px-6 py-4">
        <div className="flex items-center justify-between text-[10px] uppercase text-white/30">
          <span>Digital Archive</span>
          <span>Est. 2026</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-[#0b0d11]/[0.94] px-4 text-white shadow-lg backdrop-blur-xl lg:hidden">
        <div className="flex items-center gap-3">
          <Landmark className="h-5 w-5 text-[#c9a766]" />
          <div>
            <div className="text-sm font-semibold">Yunqiang Pei</div>
            <div className="text-[10px] uppercase text-white/40">Personal Museum</div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label={isMobileMenuOpen ? 'Close museum guide' : 'Open museum guide'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 lg:block">
        {sidebarContent}
      </aside>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-16 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close museum guide"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 230 }}
              className="absolute inset-y-0 left-0 w-[min(18rem,88vw)]"
            >
              {sidebarContent}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SocialIcon: React.FC<{ icon: React.ElementType; label: string; link: string }> = ({
  icon: Icon,
  label,
  link
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-9 w-9 items-center justify-center border border-white/10 text-white/45 transition-colors hover:border-[#c9a766]/50 hover:bg-[#c9a766]/10 hover:text-[#f4c86b]"
    aria-label={label}
  >
    <Icon className="h-4 w-4" />
    <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap bg-[#f4f1e8] px-2 py-1 text-[10px] text-slate-800 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
      {label}
    </span>
  </a>
);

export default Navigation;
