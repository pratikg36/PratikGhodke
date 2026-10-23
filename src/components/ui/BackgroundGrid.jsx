import React from 'react';

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#080a0f]" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
        }}
      />

      {/* Top Ambient Light Glow */}
      <div 
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-sky-500/15 via-indigo-500/8 to-transparent blur-[160px] rounded-full opacity-35"
      />

      {/* Secondary Ambient Accent Glow */}
      <div 
        className="absolute top-[40%] -right-[150px] w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/8 to-cyan-500/4 blur-[160px] rounded-full opacity-20"
      />

      {/* Bottom Accent Glow */}
      <div 
        className="absolute bottom-[10%] -left-[150px] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/8 to-purple-500/4 blur-[160px] rounded-full opacity-20"
      />
    </div>
  );
};

export default BackgroundGrid;
