import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ARHUDProps {
  active: boolean;
  mousePos: { x: number; y: number };
}

const ARHUD: React.FC<ARHUDProps> = ({ active, mousePos }) => {
  const [time, setTime] = useState(new Date());

  // Smooth mouse movement for the reticle
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    cursorX.set(mousePos.x);
    cursorY.set(mousePos.y);
  }, [mousePos, cursorX, cursorY]);

  // Clock for the HUD
  useEffect(() => {
    if (!active) return;
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* 1. Global Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* 2. Scanning Line */}
      <motion.div 
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent w-full"
      />

      {/* 3. Corner Brackets (HUD Frame) */}
      <div className="absolute inset-4 sm:inset-8 border border-blue-500/20 rounded-lg">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500"></div>
        
        {/* Top Center Status */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 flex items-center gap-2 rounded-full border border-blue-100 shadow-sm">
           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
           <span className="text-[10px] font-mono text-blue-600 font-bold tracking-widest">AR SYSTEM: ONLINE</span>
        </div>
      </div>

      {/* 4. Mouse Follower Reticle */}
      <motion.div 
        className="absolute top-0 left-0 will-change-transform"
        style={{ x: cursorX, y: cursorY }}
      >
        {/* The Crosshair Group - Offset to center on mouse */}
        <div className="-translate-x-1/2 -translate-y-1/2 relative w-[200px] h-[200px] flex items-center justify-center">
          
          {/* Rotating Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-16 h-16 border border-blue-500/40 rounded-full border-t-transparent border-l-transparent"
          />
          
          {/* Counter-Rotating Ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-12 h-12 border border-dashed border-blue-400/30 rounded-full"
          />

          {/* Center Dot */}
          <div className="w-1 h-1 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>

          {/* Horizontal Lines */}
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          
          {/* Vertical Lines */}
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>

          {/* Coordinates Label */}
          <div className="absolute top-10 left-10 text-[9px] font-mono text-blue-500 bg-white/80 backdrop-blur px-1 rounded border border-blue-100/50">
             X: {Math.round(mousePos.x)} <br/>
             Y: {Math.round(mousePos.y)}
          </div>
        </div>
      </motion.div>

      {/* 5. Bottom Data Stream */}
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-blue-400/60 hidden lg:block">
         <div>sys_time: {time.toLocaleTimeString()}</div>
         <div>tracking_mode: active</div>
         <div>render_engine: react_fiber</div>
      </div>
    </div>
  );
};

export default ARHUD;