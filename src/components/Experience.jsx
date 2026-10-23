import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-28 relative z-10 bg-[#080a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column: Sticky Editorial Heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-4 pr-2">
              <div className="font-mono text-xs text-sky-400 tracking-widest uppercase flex items-center gap-2">
                <span>02 // CAREER TIMELINE</span>
                <span className="w-8 h-px bg-sky-500/40" />
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-white tracking-tight uppercase leading-tight">
                WORK <br />
                <span className="text-slate-100">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">EXPERIENCE</span>
                </span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                Progressive track record of engineering leadership, cross-platform mobile delivery, and enterprise backend systems.
              </p>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-xs text-slate-400 space-y-2 max-w-sm">
                <div className="flex items-center justify-between">
                  <span>Current Company:</span>
                  <span className="text-white font-bold">NeoPace InfoTech</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Primary Stack:</span>
                  <span className="text-sky-400 font-bold">Flutter + Spring Boot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative rounded-3xl bg-gradient-to-b from-[#111420] to-[#0c0e16] border border-white/[0.07] p-6 sm:p-10 hover:border-sky-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {exp.role}
                </h3>
                <div className="font-mono text-sm text-sky-400 mb-6 font-semibold">
                  {exp.company}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3 mb-8">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.08]">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
