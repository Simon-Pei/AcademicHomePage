import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/sections/About';
import Publications from './components/sections/Publications';
import CV from './components/sections/CV';
import Hardware from './components/sections/Hardware';
import Gallery from './components/sections/Gallery';
import Recommendations from './components/sections/Recommendations';
import { Section } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const MuseumScene = React.lazy(() => import('./components/MuseumScene'));

const ROOM_LABELS: Record<Section, { number: string; title: string; eyebrow: string }> = {
  [Section.ABOUT]: { number: '01', title: 'About', eyebrow: 'Research Identity' },
  [Section.PUBLICATIONS]: { number: '02', title: 'Publications', eyebrow: 'Selected Works' },
  [Section.CV]: { number: '03', title: 'Curriculum Vitae', eyebrow: 'Academic Journey' },
  [Section.HARDWARE]: { number: '04', title: 'Hardware', eyebrow: 'Research Instruments' },
  [Section.GALLERY]: { number: '05', title: 'Gallery', eyebrow: 'Field Notes' },
  [Section.RECOMMENDATIONS]: { number: '06', title: 'Recommendations', eyebrow: 'Useful Objects' }
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hardwareFocusId, setHardwareFocusId] = useState<string | null>(null);

  const handleHardwareSelect = (hardwareId: string) => {
    setHardwareFocusId(hardwareId);
    setActiveSection(Section.HARDWARE);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const activeRoom = ROOM_LABELS[activeSection];
  const roomTitleSize = activeSection === Section.RECOMMENDATIONS
    ? 'text-4xl sm:text-6xl lg:text-7xl'
    : activeSection === Section.CV
      ? 'text-4xl sm:text-6xl lg:text-7xl'
      : 'text-5xl sm:text-6xl lg:text-7xl';

  return (
    <div className="relative min-h-screen bg-[#07090d] font-sans text-slate-800 selection:bg-amber-200 selection:text-slate-950">
      <React.Suspense fallback={<div className="fixed inset-0 z-0 bg-[#07090d]" aria-hidden="true" />}>
        <MuseumScene activeSection={activeSection} />
      </React.Suspense>

      <div className="relative z-10 min-h-screen">
        <Navigation 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main className="relative min-h-screen min-w-0 lg:ml-72">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[42vh] px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-14">
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-between pb-9">
              <div className="flex items-start justify-between gap-6 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase text-white/60">Yunqiang Pei / Personal Museum</p>
                  <p className="mt-2 text-sm text-white/45">{activeRoom.eyebrow}</p>
                </div>
                <div className="hidden text-right sm:block">
                  <span className="font-mono text-xs text-white/45">ROOM</span>
                  <div className="mt-1 font-mono text-3xl font-light text-[#f4c86b]">{activeRoom.number}</div>
                </div>
              </div>

              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase text-[#f4c86b]">{activeRoom.eyebrow}</p>
                  <h2 className={`museum-display break-words font-semibold text-white ${roomTitleSize}`}>
                    {activeRoom.title}
                  </h2>
                </div>
                <div className="hidden h-px flex-1 bg-white/20 md:block" />
                <span className="hidden font-mono text-xs text-white/45 md:block">{activeRoom.number} / 06</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 px-3 pb-10 pt-[42vh] sm:px-6 lg:px-8">
            <div className="museum-reading-wall mx-auto max-w-6xl border-t-[3px] border-[#c9a766] bg-[#f4f1e8]/[0.97] shadow-[0_-18px_70px_rgba(0,0,0,0.32)] backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-[#d8d1c1] px-5 py-3 sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#c9a766]" />
                  <span className="text-xs font-semibold uppercase text-slate-500">Digital Collection</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">YP-MUSEUM-{activeRoom.number}</span>
              </div>

              <div className="min-h-[70vh] px-4 py-8 sm:px-8 lg:px-12 lg:py-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {renderSection()}
                  </motion.div>
                </AnimatePresence>

                <footer className="mt-20 border-t border-[#d8d1c1] pt-6 text-center text-xs font-light text-slate-400">
                  <p>&copy; {new Date().getFullYear()} Yunqiang Pei. Personal Digital Museum.</p>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
