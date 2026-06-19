import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ARBackground from './components/ARBackground';
import About from './components/sections/About';
import Publications from './components/sections/Publications';
import CV from './components/sections/CV';
import Hardware from './components/sections/Hardware';
import { Section } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hardwareFocusId, setHardwareFocusId] = useState<string | null>(null);

  const handleHardwareSelect = (hardwareId: string) => {
    setHardwareFocusId(hardwareId);
    setActiveSection(Section.HARDWARE);
    setIsMobileMenuOpen(false);
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
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 selection:bg-blue-100 selection:text-blue-900 font-sans relative">
      
      {/* Background Layer: Dynamic Particles */}
      <ARBackground />

      <div className="flex min-h-screen relative z-10">
        {/* Navigation Sidebar */}
        <Navigation 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-80 w-full pt-20 lg:pt-0 min-h-screen relative overflow-hidden">
          
          {/* Content Wrapper */}
          <div 
            className="relative z-10 px-4 sm:px-8 lg:px-12 py-12 lg:py-16 max-w-6xl mx-auto"
          >
            {/* Header/Breadcrumb */}
            <div className="mb-8 hidden lg:block border-b border-slate-200 pb-2">
               <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                 System / {activeSection}
               </h2>
            </div>

            {/* Page Transition Wrapper */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
            
            {/* Footer for main content */}
            <div className="mt-20 pt-6 border-t border-slate-200 text-center text-slate-400 text-xs font-light">
              <p>&copy; {new Date().getFullYear()} Yunqiang Pei. Academic Homepage.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
