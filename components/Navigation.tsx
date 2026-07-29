import React from 'react';
import { Section } from '../types';
import {
  BookOpen,
  Cpu,
  FileText,
  Glasses,
  Images,
  Menu,
  Sparkles,
  User,
  X,
} from 'lucide-react';

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
  { id: Section.HARDWARE, label: 'Hardware', icon: Cpu },
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

  return (
    <>
      <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip border-b border-line bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] w-full min-w-0 max-w-[1320px] items-center justify-between gap-5 px-5 sm:px-8 lg:h-[72px] lg:px-10">
          <a
            href="#about"
            onClick={(event) => navigateTo(event, Section.ABOUT)}
            className="group flex min-w-0 items-center gap-3"
            aria-label="Yunqiang Pei, home"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-700 text-white transition-colors group-hover:bg-brand-800">
              <Glasses className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-ink">Yunqiang Pei</span>
              <span className="block truncate text-[11px] font-medium text-muted">AR × AI Researcher</span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden h-full items-stretch lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => navigateTo(event, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex items-center gap-2 px-3 text-[13px] font-semibold transition-colors xl:px-4 ${
                    isActive
                      ? 'text-brand-800'
                      : 'text-[#596869] hover:text-ink'
                  }`}
                >
                  <item.icon
                    className={`h-4 w-4 ${isActive ? 'text-brand-600' : 'text-[#8a9896]'}`}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute inset-x-3 bottom-0 h-0.5 bg-brand-600 xl:inset-x-4"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-[#536263] transition-colors hover:bg-[#f0f4f3] focus:outline-none focus:ring-2 focus:ring-brand-500 lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
          <div className="page-enter fixed inset-x-0 bottom-0 top-[68px] z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 h-full w-full bg-ink/25 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            />
            <nav
              aria-label="Mobile navigation"
              className="relative border-b border-line bg-white px-5 py-5 shadow-soft sm:px-8"
            >
              <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) => navigateTo(event, item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex min-h-12 items-center gap-3 rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'border-brand-200 bg-brand-50 text-brand-800'
                          : 'border-transparent text-[#596869] hover:border-line hover:bg-[#f5f7f6] hover:text-ink'
                      }`}
                    >
                      <item.icon
                        className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-brand-600' : 'text-[#8a9896]'}`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 break-words">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>
      )}
    </>
  );
};

export default Navigation;
