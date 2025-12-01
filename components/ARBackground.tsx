import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ARBackgroundProps {
  arModeActive?: boolean;
}

const ARBackground: React.FC<ARBackgroundProps> = ({ arModeActive = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const points: { x: number; y: number; vx: number; vy: number; originalVx: number; originalVy: number }[] = [];
    const numPoints = 40;

    for (let i = 0; i < numPoints; i++) {
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: vx,
        vy: vy,
        originalVx: vx,
        originalVy: vy
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Adjust styles based on AR Mode
      const connectionDistance = arModeActive ? 250 : 150;
      const pointColor = arModeActive ? 'rgba(59, 130, 246, 0.4)' : 'rgba(148, 163, 184, 0.2)'; // Blue vs Slate
      const lineColor = arModeActive ? 'rgba(59, 130, 246, 0.15)' : 'rgba(148, 163, 184, 0.05)';
      const speedMultiplier = arModeActive ? 2.5 : 1;

      points.forEach((point, i) => {
        // Move points
        point.x += point.vx * speedMultiplier;
        point.y += point.vy * speedMultiplier;

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        // Draw Point
        ctx.beginPath();
        ctx.arc(point.x, point.y, arModeActive ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();

        // Connect near points
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(point.x - p2.x, point.y - p2.y);
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = arModeActive ? 1 : 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [arModeActive]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Subtle overlay gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br mix-blend-overlay transition-colors duration-700 ${arModeActive ? 'from-blue-100/30 to-slate-900/5' : 'from-blue-50/50 to-slate-50/50'}`} />
      
      {/* Decorative AR Corners - Always visible but styled differently */}
      <motion.div 
        animate={{ opacity: arModeActive ? 0.8 : 0.3, scale: arModeActive ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 rounded-tl-lg ${arModeActive ? 'border-blue-400' : 'border-slate-300'}`} 
      />
      <motion.div 
        animate={{ opacity: arModeActive ? 0.8 : 0.3, scale: arModeActive ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 rounded-br-lg ${arModeActive ? 'border-blue-400' : 'border-slate-300'}`} 
      />
    </div>
  );
};

export default ARBackground;