import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Info } from 'lucide-react';

export const ImpactMetrics = () => {
  const { metrics } = portfolioData;
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="py-16 border-y border-white/[0.06] bg-[#0c0e16]/90 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
          <div className="font-mono text-xs text-sky-400 tracking-widest uppercase flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED ENGINEERING CREDENTIALS &amp; PRODUCTION METRICS</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400 hidden sm:inline-block">
            HOVER OR TAP CARDS TO VIEW SUBSTANTIATING EVIDENCE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.06]">
          {metrics.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveTooltip(index)}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
              className={`pt-6 sm:pt-0 ${index !== 0 ? 'lg:pl-8' : ''} flex flex-col justify-between group cursor-pointer`}
            >
              <div>
                <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>METRIC // 0{index + 1}</span>
                  <span className="text-[10px] font-mono text-sky-400/80 group-hover:text-sky-300 flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    <span>Evidence</span>
                  </span>
                </div>

                <div className="font-display font-extrabold text-5xl sm:text-6xl text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:to-indigo-300 transition-all duration-300 mb-2">
                  {item.value}
                </div>

                <div className="font-heading font-semibold text-base text-slate-200 mb-1">
                  {item.label}
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                  {item.detail}
                </div>
              </div>

              {/* Substantiating Evidence Callout */}
              <div
                className={`p-3 rounded-xl bg-white/[0.02] border transition-all duration-300 font-mono text-[11px] leading-relaxed ${
                  activeTooltip === index
                    ? 'border-sky-500/40 text-sky-200 bg-sky-500/10'
                    : 'border-white/[0.04] text-slate-400 group-hover:text-slate-300'
                }`}
              >
                <strong className="text-sky-400 block mb-0.5 font-bold uppercase text-[10px]">Basis of Metric:</strong>
                {item.substantiation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
