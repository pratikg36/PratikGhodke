import React, { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowRight, Github, Linkedin, Mail, FileDown, Layers, Terminal, Sparkles, Cpu, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Magnetic } from './ui/Magnetic';
import { InteractiveCanvas } from './ui/InteractiveCanvas';

export const Hero = ({ onOpenResume }) => {
  const { personal } = portfolioData;
  const [time, setTime] = useState('');
  const [activeTab, setActiveTab] = useState('stack');

  // Live Pune Time (IST) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-[94vh] flex flex-col justify-between pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Interactive Constellation Canvas */}
      <InteractiveCanvas />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#111420]/85 border border-white/[0.07] backdrop-blur-xl shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-slate-300 font-medium">
              AVAILABLE FOR HIRE <span className="text-slate-500">•</span> PUNE {time ? `${time} IST` : '17:30 IST'}
            </span>
          </div>

          <div className="font-mono text-xs text-sky-400 tracking-wider uppercase border border-sky-500/20 px-3.5 py-1.5 rounded-full bg-sky-500/10">
            SOFTWARE ENGINEER &amp; MOBILE LEAD
          </div>
        </div>

        {/* Split Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs sm:text-sm text-sky-400 tracking-widest uppercase flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>FULL-STACK ARCHITECTURE &amp; MOBILE SYSTEMS</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.92] uppercase select-none">
              PRATIK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-indigo-400">
                GHODKE
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Engineering cross-platform mobile frontends in{' '}
              <span className="text-white font-medium underline decoration-sky-500/40 underline-offset-4">Flutter &amp; Riverpod</span>{' '}
              and enterprise microservices in{' '}
              <span className="text-white font-medium underline decoration-indigo-500/40 underline-offset-4">Java 21, Spring Boot &amp; PostgreSQL</span>.
              Specialized in production Play Store releases (AAB), multi-tenant schemas, and reliable RESTful APIs.
            </p>

            {/* Magnetic CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Magnetic strength={0.25}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#080a0f] font-display font-bold text-sm tracking-wide uppercase shadow-2xl shadow-white/10 hover:bg-slate-200 transition-all hover:scale-105"
                >
                  <span>Explore Case Studies</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#111420] hover:bg-[#161a29] text-white border border-white/[0.08] hover:border-sky-400/40 font-mono text-xs tracking-wider uppercase transition-all shadow-lg"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Inspect Official Resume</span>
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-[#111420] to-[#0c0e16] border border-white/[0.07] p-6 shadow-2xl relative overflow-hidden group hover:border-sky-500/30 transition-colors">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>SYSTEM ARCHITECTURE PREVIEW</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`py-1.5 text-xs font-mono rounded-lg transition-colors ${
                    activeTab === 'stack' ? 'bg-sky-500 text-white font-bold' : 'bg-white/[0.04] text-slate-400 hover:text-white'
                  }`}
                >
                  STACK PIPELINE
                </button>
                <button
                  onClick={() => setActiveTab('highlights')}
                  className={`py-1.5 text-xs font-mono rounded-lg transition-colors ${
                    activeTab === 'highlights' ? 'bg-sky-500 text-white font-bold' : 'bg-white/[0.04] text-slate-400 hover:text-white'
                  }`}
                >
                  CORE DECISIONS
                </button>
              </div>

              {/* Tab 1: Stack Pipeline */}
              {activeTab === 'stack' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-sky-400 uppercase">MOBILE FRONTEND</div>
                      <div className="text-white font-bold">Flutter 3.x / Dart / Riverpod</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-sky-500/10 text-sky-300 border border-sky-500/20">60 FPS</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-indigo-400 uppercase">BACKEND SERVICES</div>
                      <div className="text-white font-bold">Java 21 / Spring Boot 3 / Security</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">REST / SSE</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-emerald-400 uppercase">DATA &amp; CLOUD</div>
                      <div className="text-white font-bold">PostgreSQL / Liquibase / Docker</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">AAB Release</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Core Decisions */}
              {activeTab === 'highlights' && (
                <div className="space-y-2.5 font-sans text-xs text-slate-300">
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02]">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Enforced JPA @Version optimistic locking to prevent appointment race conditions.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Replaced costly proprietary map APIs with OpenStreetMap geocoding pin-drops.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02]">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Integrated Liquibase automated database migrations with rollback protection.</span>
                  </div>
                </div>
              )}

              {/* Footer link to full architecture explorer */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400">Want deeper inspection?</span>
                <a
                  href="#architecture"
                  className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Launch Explorer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue & Meta */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-8 flex items-center justify-between border-t border-white/[0.06]">
        <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
          LEAD DEVELOPER @ NEOPACE INFOTECH LLP
        </div>
        <a
          href="#architecture"
          className="flex items-center gap-2 font-mono text-[11px] text-slate-400 hover:text-sky-400 transition-colors tracking-widest uppercase group"
        >
          <span>SYSTEM ARCHITECTURE BELOW</span>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
