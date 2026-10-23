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

      {/* Top Ambient Light Glow (Radial gradient - zero GPU blur overhead) */}
      <div 
        className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12)_0%,_rgba(99,102,241,0.06)_40%,_transparent_70%)] rounded-full"
      />

      {/* Secondary Ambient Accent Glow */}
      <div 
        className="hidden sm:block absolute top-[40%] -right-[150px] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(52,211,153,0.06)_0%,_rgba(6,182,212,0.03)_40%,_transparent_70%)] rounded-full"
      />

      {/* Bottom Accent Glow */}
      <div 
        className="hidden sm:block absolute bottom-[10%] -left-[150px] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.06)_0%,_rgba(168,85,247,0.03)_40%,_transparent_70%)] rounded-full"
      />
    </div>
  );
};

export default BackgroundGrid;
