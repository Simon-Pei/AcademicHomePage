import React from 'react';
import { Section } from '../types';
import {
  BookOpen,
  Cpu,
  FileText,
  Glasses,
  Github,
  GraduationCap,
  Images,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const navItems = [
  { id: Section.ABOUT, label: 'About', icon: User },
  { id: Section.PUBLICATIONS, label: 'Publications', icon: BookOpen },
  { id: Section.CV, label: 'CV', icon: FileText },
  { id: Section.HARDWARE, label: 'Research Hardware', icon: Cpu },
  { id: Section.GALLERY, label: 'Gallery', icon: Images },
  { id: Section.RECOMMENDATIONS, label: 'Recommendations', icon: Sparkles },
];

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const navigateTo = (event: React.MouseEvent<HTMLAnchorElement>, section: Section) => {
    event.preventDefault();
    setActiveSection(section);
  };

  const sidebarContent = (
    <div className="relative z-20 flex h-full flex-col border-r border-[#dce5e2] bg-white">
      <div className="shrink-0 px-6 pb-5 pt-7">
        <div className="relative mx-auto mb-4 h-32 w-32">
          <div className="h-full w-full overflow-hidden rounded-full border-4 border-white bg-[#edf2f0] shadow-[0_8px_28px_rgba(28,64,61,0.12)]">
            <img
              src="imgs/profilephoto260616.avif"
              alt="Yunqiang Pei"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full scale-[1.18] object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-teal-700 text-white shadow-md">
            <Glasses className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#172526]">Yunqiang Pei</h1>
          <p className="mt-1 text-sm font-semibold text-teal-700">AR × AI Researcher</p>
        </div>

        <div className="mt-5 space-y-2.5 border-y border-[#e6ecea] py-4 text-sm text-[#586869]">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
            <span className="leading-snug">UESTC Ph.D. Candidate</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
            <span>Chengdu</span>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
            <span className="min-w-0 break-words leading-snug">yqsimonpei3940 [at] hotmail.com</span>
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

      <nav aria-label="Primary navigation" className="flex-1 overflow-y-auto px-4 pb-4">
        <p className="mb-2 px-3 text-[11px] font-semibold uppercase text-[#8a9896]">Explore</p>
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => navigateTo(event, item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-teal-50 text-teal-900'
                    : 'text-[#5c6b6c] hover:bg-[#f3f6f5] hover:text-[#172526]'
                }`}
              >
                {isActive && <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-teal-600" />}
                <item.icon
                  className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-teal-700' : 'text-[#84918f]'}`}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

    </div>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#dce5e2] bg-white/95 px-4 backdrop-blur-md lg:hidden">
        <a
          href="#about"
          onClick={(event) => navigateTo(event, Section.ABOUT)}
          className="flex min-w-0 items-center gap-2.5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-teal-700 text-white">
            <Glasses className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="truncate font-bold text-[#172526]">Yunqiang Pei</span>
        </a>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-md p-2 text-[#536263] transition-colors hover:bg-[#f0f4f3] focus:outline-none focus:ring-2 focus:ring-teal-500"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 lg:block">
        {sidebarContent}
      </aside>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 h-full w-full bg-[#172526]/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
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
  link,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="flex h-9 w-9 items-center justify-center rounded-md border border-[#dce5e2] text-[#718080] transition-colors hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
  >
    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
  </a>
);

export default Navigation;
