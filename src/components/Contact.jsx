import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Linkedin, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Magnetic } from './ui/Magnetic';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10 bg-[#080a0f] border-t border-white/[0.06] overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.08)_0%,_rgba(99,102,241,0.04)_50%,_transparent_75%)] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // INITIATE COLLABORATION</span>
          </div>

          {/* Expressive Editorial Headline - Calibrated */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.05] mb-6">
            LET'S ARCHITECT <br />
            <span className="text-slate-100">
              HIGH-IMPACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">SYSTEMS.</span>
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-14">
            Available for Senior Software Engineer, Full-Stack Lead, and Mobile Architecture roles. Let's discuss engineering impact.
          </p>

          {/* Large Magnetic Action Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#111420] to-[#0c0e16] border border-white/[0.08] p-4 sm:p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
              {/* Email Trigger Box */}
              <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-left group/item hover:border-sky-400/40 transition-colors gap-3">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider">DIRECT EMAIL</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="font-display font-bold text-xs sm:text-sm md:text-base text-white hover:text-sky-300 transition-colors break-all sm:break-normal line-clamp-1 sm:line-clamp-none block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  className="min-h-[44px] min-w-[44px] shrink-0 p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  title="Copy email"
                  aria-label="Copy direct email address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Box */}
              <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-left group/item hover:border-emerald-400/40 transition-colors gap-3">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider">PHONE / WHATSAPP</div>
                    <a
                      href={`tel:${personal.phone}`}
                      className="font-display font-bold text-xs sm:text-sm md:text-base text-white hover:text-emerald-300 transition-colors block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  className="min-h-[44px] min-w-[44px] shrink-0 p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Magnetic Launch Button */}
            <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Magnetic strength={0.3} className="w-full sm:w-auto">
                <a
                  href={`mailto:${personal.email}?subject=Engineering%20Opportunity%20-%20Pratik%20Ghodke`}
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-sky-500/30 transition-all hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.3} className="w-full sm:w-auto">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] font-mono text-xs tracking-wider uppercase transition-all"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </Magnetic>

              <Magnetic strength={0.3} className="w-full sm:w-auto">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] font-mono text-xs tracking-wider uppercase transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="font-mono text-[11px] sm:text-xs text-slate-400 flex flex-wrap items-center justify-center gap-2 text-center px-2">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>PUNE, MAHARASHTRA, INDIA • ON-SITE, HYBRID OR REMOTE GLOBALLY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
