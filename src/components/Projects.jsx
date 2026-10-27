import React, { useState, useEffect } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, Terminal, Smartphone, Database, Shield, AlertCircle, Sparkles, X, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Magnetic } from './ui/Magnetic';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const categories = ['All', 'Mobile', 'Backend', 'Full-Stack'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Mobile') return project.category.includes('Mobile');
    if (activeFilter === 'Backend') return project.category.includes('Backend');
    if (activeFilter === 'Full-Stack') return project.category.includes('Full-Stack');
    return true;
  });

  return (
    <section id="projects" className="py-28 relative z-10 bg-[#080a0f] border-t border-white/[0.06] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="font-mono text-xs text-sky-400 tracking-widest uppercase mb-3 flex items-center gap-2">
              <span>01 // PRODUCTION CASE STUDIES</span>
              <span className="w-12 h-px bg-sky-500/40" />
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              ENGINEERED <br />
              <span className="text-slate-100">
                CASE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">STUDIES</span>
              </span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0c0e16] p-1.5 rounded-full border border-white/[0.07]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies (Asymmetric Editorial Cards) */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-gradient-to-b from-[#111420] to-[#0c0e16] border border-white/[0.07] p-4 sm:p-8 lg:p-12 hover:border-sky-500/30 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Column: Context, Problem & Decisions */}
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 uppercase tracking-widest">
                        CASE 0{index + 1}
                      </span>
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                        {project.tag}
                      </span>
                      <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 ml-auto">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem Statement */}
                    {project.problem && (
                      <div className="mb-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-slate-300">
                        <strong className="text-sky-300 font-mono text-xs uppercase block mb-1">Problem Statement:</strong>
                        {project.problem}
                      </div>
                    )}

                    {/* Contributions */}
                    {project.contributions && (
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                        <strong className="text-white font-semibold">Personal Ownership: </strong>
                        {project.contributions}
                      </p>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.05] group-hover:border-white/[0.12] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Magnetic strength={0.2} className="w-full sm:w-auto">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 px-5 sm:px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs tracking-wider uppercase font-bold transition-all shadow-md shadow-sky-500/25"
                        >
                          <Layers className="w-4 h-4" />
                          <span>Inspect Full Case Study</span>
                        </button>
                      </Magnetic>

                      {project.liveUrl && (
                        <Magnetic strength={0.2} className="w-full sm:w-auto">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-white/[0.05] text-slate-300 hover:text-white border border-white/[0.08] font-mono text-xs tracking-wider uppercase transition-colors"
                          >
                            <span>{project.portalUrl ? 'Live Website' : 'Live System'}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </Magnetic>
                      )}

                      {project.portalUrl && (
                        <Magnetic strength={0.2} className="w-full sm:w-auto">
                          <a
                            href={project.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 px-4 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white border border-indigo-500/30 font-mono text-xs tracking-wider uppercase transition-colors"
                          >
                            <span>{project.portalLabel || 'Launch Portal'}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </Magnetic>
                      )}

                      {project.businessAppUrl && (
                        <Magnetic strength={0.2} className="w-full sm:w-auto">
                          <a
                            href={project.businessAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white border border-emerald-500/30 font-mono text-xs tracking-wider uppercase transition-colors"
                          >
                            <span>{project.businessAppLabel || 'Business CRM'}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </Magnetic>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Flow Diagram */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-2xl bg-[#090c14] border border-white/[0.08] p-4 sm:p-6 shadow-2xl overflow-hidden group/card hover:border-sky-400/40 transition-colors">
                      {/* Terminal Header */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                          <Terminal className="w-4 h-4 text-sky-400" />
                          <span>blueprint://{project.id}.flow</span>
                        </div>
                        <span className="font-mono text-[10px] text-emerald-400 uppercase">VERIFIED IN PROD</span>
                      </div>

                      {/* Bespoke Project Architecture Telemetry */}
                      {project.id === 'nealife' && (
                        <div className="space-y-3 font-mono text-xs mb-4">
                          {/* Scoring Pipeline Stream */}
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center justify-between text-[11px] text-sky-400 mb-2 font-bold uppercase">
                              <span>SCORING ENGINE PIPELINE</span>
                              <span className="text-emerald-400">JAVA 21 / SPRING</span>
                            </div>
                            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-300 overflow-x-auto py-1">
                              <span className="px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-300 shrink-0 font-bold">EXAM SUBMIT</span>
                              <span>→</span>
                              <span className="px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 shrink-0 font-bold">TRAIT MATRIX</span>
                              <span>→</span>
                              <span className="px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-300 shrink-0 font-bold">PERCENTILE</span>
                              <span>→</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 shrink-0 font-bold">S3 REPORT</span>
                            </div>
                          </div>

                          {/* Database & Multi-Schema Optimization */}
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center justify-between text-[11px] text-emerald-400 mb-1.5 font-bold uppercase">
                              <span>POSTGRESQL MULTI-SCHEMA AUDIT</span>
                              <span className="text-sky-400 font-bold">-35% ERRORS</span>
                            </div>
                            <div className="space-y-2 text-[10px]">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-400">search_path Query Latency:</span>
                                <span className="text-emerald-300 font-mono font-bold">640ms → 42ms (-93%)</span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-400">Scale &amp; Coverage:</span>
                                <span className="text-indigo-300 font-mono">1,300+ Tests | 3,000+ Job Roles</span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-400">RBAC Security Portals:</span>
                                <span className="text-slate-300">Candidate • Institute • Corporate • Partner</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">CLOUD DEPLOY &amp; VAULT:</span>
                            <span className="text-sky-300">Docker • AWS EC2 • S3 PDF Vault</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'neo-parlour' && (
                        <div className="space-y-3 font-mono text-xs mb-4">
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center justify-between text-[11px] text-sky-400 mb-2 font-bold uppercase">
                              <span>DUAL-APP ECOSYSTEM</span>
                              <span className="text-emerald-400">GOOGLE PLAY VERIFIED</span>
                            </div>
                            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-300 overflow-x-auto py-1">
                              <span className="px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-300 shrink-0 font-bold">CUSTOMER APP</span>
                              <span>+</span>
                              <span className="px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 shrink-0 font-bold">BUSINESS CRM</span>
                              <span>→</span>
                              <span className="px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-300 shrink-0 font-bold">SPRING BOOT 3</span>
                              <span>→</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 shrink-0 font-bold">POSTGRESQL</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center justify-between text-[11px] text-emerald-400 mb-1.5 font-bold uppercase">
                              <span>SCHEDULING LOCK TELEMETRY</span>
                              <span className="text-sky-400 font-bold">JPA @VERSION</span>
                            </div>
                            <div className="space-y-2 text-[10px]">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-400">Concurrency Protocol:</span>
                                <span className="text-emerald-300 font-mono font-bold">Zero Double-Booking</span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-400">Salon Operations &amp; CRM:</span>
                                <span className="text-indigo-300 font-mono">Staff Attendance • Retail Inventory</span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-400">RBAC Architecture:</span>
                                <span className="text-slate-300">Owner • Manager • Stylist • Customer</span>
                              </div>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">PRODUCTION DEPLOYMENT:</span>
                            <span className="text-sky-300">Live Website • Play Store AABs</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'neo-cloud-bites' && (
                        <div className="space-y-3 font-mono text-xs mb-4">
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center justify-between text-[11px] text-emerald-400 mb-2 font-bold uppercase">
                              <span>ORDER LIFECYCLE STREAM</span>
                              <span className="text-sky-400">SSE / 20S PING</span>
                            </div>
                            <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
                              <div className="p-1.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">PLACED</div>
                              <div className="p-1.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30 font-bold">ACCEPT</div>
                              <div className="p-1.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-bold">KITCHEN</div>
                              <div className="p-1.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">DISPATCH</div>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">RELEASE PIPELINE:</span>
                            <span className="text-emerald-300 font-semibold">Signed AAB / Play Console</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'neo-sow-infra' && (
                        <div className="space-y-3 font-mono text-xs mb-4">
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <div className="flex items-center justify-between text-[11px] text-sky-400 mb-1.5 font-bold uppercase">
                              <span>DATABASE MIGRATION PIPELINE</span>
                              <span className="text-emerald-400">LIQUIBASE 4.x</span>
                            </div>
                            <div className="text-[10px] text-slate-300 space-y-1.5">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-500">Changelog Checksum:</span>
                                <span className="text-emerald-400 font-bold">VALIDATED &amp; COMMITTED</span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                                <span className="text-slate-500">Rollback Safety:</span>
                                <span className="text-sky-300">Automated Rollback Scripts</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">ACCESS CONTROL:</span>
                            <span className="text-indigo-300">Multi-Role RBAC + JWT</span>
                          </div>
                        </div>
                      )}

                      {/* Key Engineering Decisions Callout */}
                      {project.decisions && project.decisions.length > 0 && (
                        <div className="space-y-2 font-sans text-xs text-slate-300 mb-4">
                          <div className="font-mono text-[10px] uppercase tracking-wider text-sky-400 font-bold">
                            KEY ENGINEERING DECISIONS:
                          </div>
                          {project.decisions.slice(0, 2).map((dec, dIdx) => (
                            <div key={dIdx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                              <span className="leading-snug text-[11px]">{dec}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technical Challenge Snippet */}
                      {project.challengeAndSolution && (
                        <div className="p-3 rounded-xl bg-sky-500/5 border border-sky-500/20 text-xs text-slate-300">
                          <div className="font-mono text-[10px] uppercase tracking-wider text-sky-300 font-bold mb-1">
                            ENGINEERING CHALLENGE SOLVED:
                          </div>
                          <p className="line-clamp-3 leading-relaxed text-[11px]">
                            {project.challengeAndSolution}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Interactive Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div className="relative w-full max-w-4xl bg-[#0c0e16] border border-white/[0.08] rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study details"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {selectedProject.tag}
              </span>
              <span className="text-xs text-emerald-400 font-mono">
                • {selectedProject.status}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
              {selectedProject.title} — Deep Dive
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-mono mb-6">
              Category: {selectedProject.category} | Lead Developer: Pratik Ghodke
            </p>

            {/* Problem & Contribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold mb-1.5">
                  1. The Engineering Problem
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problem || selectedProject.summary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1.5">
                  2. Personal Contributions
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.contributions || 'Architected and built the full client/service stack.'}
                </p>
              </div>
            </div>

            {/* Engineering Decisions */}
            {selectedProject.decisions && (
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  3. Key Architectural Decisions &amp; Trade-offs
                </h4>
                <div className="space-y-2">
                  {selectedProject.decisions.map((dec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{dec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deep Challenge & Solution */}
            {selectedProject.challengeAndSolution && (
              <div className="mb-6 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/25">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-300 mb-1.5">
                  4. Technical Challenge &amp; Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {selectedProject.challengeAndSolution}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              5. Production Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-200 border border-white/[0.1]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Footer */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-white/[0.08]">
              <button
                onClick={() => setSelectedProject(null)}
                className="min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
              >
                Close
              </button>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase font-bold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
                >
                  <span>{selectedProject.portalUrl ? 'Live Website' : 'Launch Live Platform'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {selectedProject.portalUrl && (
                <a
                  href={selectedProject.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 transition-all"
                >
                  <span>{selectedProject.portalLabel || 'Launch Portal'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {selectedProject.businessAppUrl && (
                <a
                  href={selectedProject.businessAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <span>{selectedProject.businessAppLabel || 'Business CRM'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
