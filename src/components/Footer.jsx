import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-white/[0.06] bg-[#06080d] relative z-10 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-wide text-sm">
                PRATIK GHODKE
              </span>
              <span className="text-slate-400 ml-2">Software Engineer &amp; Mobile Lead</span>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors border border-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

        {/* Standard, clean legal notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Pratik Ghodke. All rights reserved.
          </div>
          <div>
            Pune, Maharashtra, India • Available for Full-Time Roles
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
