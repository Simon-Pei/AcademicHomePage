import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ARBackground from './components/ARBackground';
import About from './components/sections/About';
import Publications from './components/sections/Publications';
import CV from './components/sections/CV';
import Hardware from './components/sections/Hardware';
import Gallery from './components/sections/Gallery';
import Recommendations from './components/sections/Recommendations';
import { Section } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const SECTION_TITLES: Record<Section, string> = {
  [Section.ABOUT]: 'About',
  [Section.PUBLICATIONS]: 'Publications',
  [Section.CV]: 'Curriculum Vitae',
  [Section.HARDWARE]: 'Research Hardware',
  [Section.GALLERY]: 'Gallery',
  [Section.RECOMMENDATIONS]: 'Recommendations',
};

const getSectionFromHash = (): Section | null => {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  return Object.values(Section).includes(hash as Section) ? hash as Section : null;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(() => getSectionFromHash() ?? Section.ABOUT);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hardwareFocusId, setHardwareFocusId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const nextSection = getSectionFromHash();
      if (!nextSection) return;

      setActiveSection(nextSection);
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0 });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = `${SECTION_TITLES[activeSection]} | Yunqiang Pei`;
  }, [activeSection]);

  const handleSectionChange = (section: Section) => {
    if (section === activeSection && window.location.hash === `#${section}`) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }

    window.location.hash = section;
  };

  const handleHardwareSelect = (hardwareId: string) => {
    setHardwareFocusId(hardwareId);
    handleSectionChange(Section.HARDWARE);
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.ABOUT:
        return <About />;
      case Section.PUBLICATIONS:
        return <Publications onHardwareSelect={handleHardwareSelect} />;
      case Section.CV:
        return <CV />;
      case Section.HARDWARE:
        return <Hardware focusDeviceId={hardwareFocusId} />;
      case Section.GALLERY:
        return <Gallery />;
      case Section.RECOMMENDATIONS:
        return <Recommendations />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8f7] text-[#263536] selection:bg-teal-100 selection:text-teal-950 font-sans relative">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <ARBackground />

      <div className="flex min-h-screen relative z-10">
        <Navigation
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main
          id="main-content"
          className="min-h-screen w-full flex-1 overflow-hidden pt-16 lg:ml-72 lg:pt-0"
        >
          <div
            className="relative z-10 mx-auto max-w-[1180px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>

            <footer className="mt-20 flex flex-col gap-2 border-t border-[#dce5e2] pt-6 text-xs text-[#718080] sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; {new Date().getFullYear()} Yunqiang Pei</p>
              <p>AR, AI, and human-centered interactive systems</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
