import React, { useEffect, useRef } from 'react';

const ARBackground: React.FC = () => {
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

      const connectionDistance = 150;
      const pointColor = 'rgba(148, 163, 184, 0.2)';
      const lineColor = 'rgba(148, 163, 184, 0.05)';

      points.forEach((point, i) => {
        // Move points
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        // Draw Point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
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
            ctx.lineWidth = 0.5;
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
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 mix-blend-overlay transition-colors duration-700" />
      
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 rounded-tl-lg border-slate-300 opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 rounded-br-lg border-slate-300 opacity-30" />
    </div>
  );
};

export default ARBackground;
