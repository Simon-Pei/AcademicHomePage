import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { Section } from './types';

const About = lazy(() => import('./components/sections/About'));
const Publications = lazy(() => import('./components/sections/Publications'));
const CV = lazy(() => import('./components/sections/CV'));
const Hardware = lazy(() => import('./components/sections/Hardware'));
const Gallery = lazy(() => import('./components/sections/Gallery'));
const Recommendations = lazy(() => import('./components/sections/Recommendations'));

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
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <Navigation
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main id="main-content" className="min-h-[calc(100vh-72px)] overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-9 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div key={activeSection} className="page-enter">
            <Suspense fallback={<SectionLoading />}>
              {renderSection()}
            </Suspense>
          </div>

          <footer className="mt-20 flex flex-col gap-2 border-t border-line pt-6 text-xs text-[#718080] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Yunqiang Pei</p>
            <p>AR, AI, and human-centered interactive systems</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

const SectionLoading: React.FC = () => (
  <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading page">
    <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-200 border-t-brand-600" />
  </div>
);

export default App;
