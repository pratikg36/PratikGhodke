import React, { useState } from 'react';
import { Smartphone, Network, Server, Shield, Database, Cloud, ArrowRight, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  'client-flutter': Smartphone,
  'gateway-dio': Network,
  'service-spring': Server,
  'security-jwt': Shield,
  'data-postgres': Database,
  'cloud-deploy': Cloud,
};

export const SystemArchitectureExplorer = ({ onSelectProject }) => {
  const { systemArchitecture } = portfolioData;
  const [activeNodeId, setActiveNodeId] = useState('service-spring');

  const activeNode = systemArchitecture.nodes.find((n) => n.id === activeNodeId) || systemArchitecture.nodes[0];
  const ActiveIcon = iconMap[activeNode.id] || Server;

  return (
    <section id="architecture" className="py-24 relative z-10 bg-[#080a0f] border-t border-white/[0.06] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-white/[0.06] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-sky-400 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>SIGNATURE INTERACTION // SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              EXPLORE THE PRODUCTION <br />
              <span className="text-slate-100">
                SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">BLUEPRINT</span>
              </span>
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm font-mono max-w-md">
            Click any architectural subsystem below to inspect its operational responsibilities, protocols, and engineering decisions.
          </p>
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Architecture Flow Chart / Map */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#111420] to-[#0c0e16] border border-white/[0.07] p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-slate-400 tracking-wider uppercase">
                SYSTEM PIPELINE TOPOLOGY
              </span>
              <span className="font-mono text-xs text-sky-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                SYSTEM BLUEPRINT
              </span>
            </div>

            {/* Nodes Stack */}
            <div className="space-y-3 sm:space-y-4" role="tablist" aria-label="System Subsystems">
              {systemArchitecture.nodes.map((node, index) => {
                const Icon = iconMap[node.id] || Server;
                const isActive = activeNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    role="tab"
                    id={`tab-${node.id}`}
                    aria-selected={isActive}
                    aria-controls="subsystem-inspector"
                    onClick={() => setActiveNodeId(node.id)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 gap-3 min-h-[44px] ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500/15 via-indigo-500/10 to-transparent border-sky-400/50 shadow-lg shadow-sky-500/10'
                        : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Active Edge Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-indigo-500" />
                    )}

                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                            : 'bg-white/[0.05] text-slate-400 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-[10px] text-sky-400 uppercase tracking-widest">
                          {node.tier}
                        </div>
                        <div className="font-display font-bold text-sm sm:text-lg text-white truncate">
                          {node.title}
                        </div>
                        <div className="font-mono text-xs text-slate-400 mt-0.5 truncate sm:overflow-visible sm:whitespace-normal">
                          {node.tech}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-slate-500 group-hover:text-slate-300">
                        {node.projectTitle.split('/')[0]}
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-sky-400 translate-x-1' : 'text-slate-600'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Connection Signal Footer */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-slate-500">
              <span>PROTOCOL: JSON REST / SSE</span>
              <span>INTEGRATION: DTOs &amp; EVENTS</span>
            </div>
          </div>

          {/* Right: Subsystem Deep-Dive Inspector */}
          <div
            id="subsystem-inspector"
            role="tabpanel"
            aria-labelledby={`tab-${activeNode.id}`}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#141826] to-[#0c0e16] border border-sky-500/25 p-4 sm:p-6 lg:p-8 shadow-2xl relative sticky top-28"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                  SUBSYSTEM INSPECTOR
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-400 uppercase">
                {activeNode.tier}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              {activeNode.title}
            </h3>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] font-mono text-xs text-slate-300 space-y-1.5 mb-6 break-words">
              <div className="break-words"><span className="text-slate-500">Technologies:</span> <span className="text-sky-300 break-words">{activeNode.tech}</span></div>
              <div className="break-words"><span className="text-slate-500">Protocols:</span> <span className="text-indigo-300 break-words">{activeNode.protocols}</span></div>
            </div>

            {/* Operational Role */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                Operational Responsibility
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {activeNode.role}
              </p>
            </div>

            {/* Key Engineering Decisions */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-sky-400 mb-3">
                Key Engineering Decisions &amp; Trade-offs
              </h4>
              <div className="space-y-2.5">
                {activeNode.engineeringDecisions.map((dec, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{dec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jump to Case Study Trigger */}
            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href="#projects"
                onClick={() => onSelectProject && onSelectProject(activeNode.associatedProject)}
                className="w-full inline-flex items-center justify-center min-h-[44px] gap-2 py-3 px-3 sm:px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs tracking-wider uppercase font-bold transition-all shadow-md shadow-sky-500/25 text-center"
              >
                <span>View Case Study ({activeNode.projectTitle.split('/')[0].trim()})</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitectureExplorer;
