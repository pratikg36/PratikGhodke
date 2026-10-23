import React, { useState } from 'react';
import { Smartphone, Server, Database, Lock, Wrench, GraduationCap, Award, CheckCircle, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIconMap = {
  Smartphone: Smartphone,
  Server: Server,
  Database: Database,
  Lock: Lock,
  Wrench: Wrench,
};

const projectLabelMap = {
  'neo-cloud-bites': 'NeoCloudBites',
  'neo-parlour': 'Neo Parlour',
  'neo-sow-infra': 'NeoSowInfra',
  'nealife': 'NeaLife',
  'proser': 'Proser Digital',
  'tayan-solution': 'Tayan Solution',
  'networking-app': 'Networking App',
};

export const Skills = () => {
  const { skillCategories, education, certifications } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('ALL');

  const projectFilterOptions = [
    { id: 'ALL', name: 'All Technologies' },
    { id: 'neo-parlour', name: 'Neo Parlour' },
    { id: 'neo-cloud-bites', name: 'NeoCloudBites' },
    { id: 'neo-sow-infra', name: 'NeoSowInfra' },
    { id: 'nealife', name: 'NeaLife' },
  ];

  const currentCategory = skillCategories[selectedCategory];

  return (
    <section id="skills" className="py-28 relative z-10 bg-[#080a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-8 border-b border-white/[0.06] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-sky-400 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>03 // CONNECTED TECHNOLOGY ECOSYSTEM</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              CORE CAPABILITIES &amp; <br />
              <span className="text-slate-100">
                TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">ECOSYSTEM</span>
              </span>
            </h2>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm font-mono max-w-md">
            Every technology listed is tied directly to real commercial systems shipped to Google Play, AWS, and production Linux environments.
          </p>
        </div>

        {/* Project Relationship Filter Ribbon */}
        <div className="mb-8 p-3 rounded-2xl bg-[#0c0e16] border border-white/[0.07] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-bold uppercase tracking-wider text-white">PROJECT-TO-STACK MAPPING:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {projectFilterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedProjectFilter(opt.id)}
                className={`px-3 py-1 rounded-lg font-mono text-xs transition-colors ${
                  selectedProjectFilter === opt.id
                    ? 'bg-sky-500 text-white font-bold shadow-sm'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white'
                }`}
              >
                {opt.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIconMap[cat.icon] || Wrench;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === idx
                    ? 'bg-sky-500 text-white font-bold shadow-lg shadow-sky-500/25 border border-sky-400'
                    : 'bg-[#111420] text-slate-400 hover:text-white border border-white/[0.07] hover:border-white/[0.15]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Interactive Grid */}
        <div className="rounded-3xl bg-gradient-to-b from-[#111420] to-[#0c0e16] border border-white/[0.07] p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-widest">
                CATEGORY 0{selectedCategory + 1} //
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                {currentCategory.name}
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400">
              FILTER: {selectedProjectFilter === 'ALL' ? 'ALL PRODUCTION PROJECTS' : projectFilterOptions.find((p) => p.id === selectedProjectFilter)?.name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentCategory.skills.map((skill, sIdx) => {
              const isRelevantToFilter =
                selectedProjectFilter === 'ALL' ||
                (skill.usedIn && skill.usedIn.includes(selectedProjectFilter));

              return (
                <div
                  key={sIdx}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    !isRelevantToFilter
                      ? 'opacity-35 bg-white/[0.01] border-white/[0.03]'
                      : skill.primary
                      ? 'bg-sky-500/10 border-sky-500/30 text-white shadow-md'
                      : 'bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-white/[0.15]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-bold text-sm tracking-wide">
                        {skill.name}
                      </span>
                      {skill.primary && (
                        <span className="w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
                      )}
                    </div>

                    {/* Associated Production Systems */}
                    {skill.usedIn && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {skill.usedIn.map((pId) => (
                          <span
                            key={pId}
                            className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${
                              selectedProjectFilter === pId
                                ? 'bg-sky-400 text-[#07080c] font-bold'
                                : 'bg-white/[0.05] text-slate-400'
                            }`}
                          >
                            {projectLabelMap[pId] || pId}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="font-mono text-[10px] text-slate-400 flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <span>Proficiency:</span>
                    <span className={skill.primary ? 'text-sky-300 font-semibold' : 'text-slate-400'}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Credentials & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c0e16] border border-white/[0.07] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-xl text-white">Academic Education</h4>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="pb-4 last:pb-0 border-b last:border-0 border-white/[0.06]">
                  <div className="font-display font-bold text-base text-white">{edu.degree}</div>
                  <div className="font-mono text-xs text-sky-400 mt-1">{edu.institution}</div>
                  <div className="flex items-center justify-between font-mono text-xs text-slate-400 mt-2">
                    <span>{edu.period}</span>
                    <span className="text-white font-bold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0c0e16] border border-white/[0.07] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-xl text-white">Industry Certifications</h4>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="pb-4 last:pb-0 border-b last:border-0 border-white/[0.06]">
                  <div className="font-display font-bold text-base text-white">{cert.title}</div>
                  <div className="font-mono text-xs text-emerald-400 mt-1">{cert.issuer}</div>
                  <div className="font-mono text-xs text-slate-400 mt-2">Completed {cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
