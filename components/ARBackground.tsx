import React from 'react';

const ARBackground: React.FC = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div
      className="absolute inset-0 opacity-[0.32]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(20, 108, 101, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 108, 101, 0.035) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'linear-gradient(to bottom, black, transparent 75%)',
      }}
    />
    <div className="absolute right-8 top-8 hidden h-12 w-12 border-r border-t border-teal-800/10 lg:block" />
    <div className="absolute bottom-8 right-8 hidden h-12 w-12 border-b border-r border-teal-800/10 lg:block" />
  </div>
);

export default ARBackground;
