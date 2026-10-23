import React from 'react';

const technologies = [
  'FLUTTER',
  'JAVA 21',
  'SPRING BOOT 3',
  'POSTGRESQL',
  'RIVERPOD',
  'DOCKER',
  'LIQUIBASE',
  'OPENSTREETMAP',
  'DIO INTERCEPTORS',
  'GOOGLE PLAY CONSOLE (AAB)',
  'AWS EC2 / S3',
  'JWT & RBAC',
  'CLEAN ARCHITECTURE',
  'LINUX & NGINX',
];

export const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-5 border-y border-white/[0.05] bg-[#0c0e16]/80 backdrop-blur-md select-none">
      {/* Gradient fade on left and right */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080a0f] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080a0f] to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-6 font-mono text-xs sm:text-sm font-medium tracking-widest text-slate-400 hover:text-slate-200 transition-colors"
          >
            <span>{tech}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500/30" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
