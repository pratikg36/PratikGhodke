import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown, Send, ArrowUpRight, Sparkles, Cpu } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['about', 'architecture', 'projects', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#080a0f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Magnetic strength={0.2}>
            <a
              href="#"
              className="flex items-center gap-3 group text-white font-semibold text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0a0c13] rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold tracking-tight text-white leading-tight">
                  PRATIK<span className="text-sky-400">.</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">
                  LEAD ENGINEER
                </span>
              </div>
            </a>
          </Magnetic>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111420]/80 border border-white/[0.07] rounded-full p-1.5 backdrop-blur-2xl shadow-xl shadow-black/30">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-400/40 -z-10 animate-fade-in" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Magnetic strength={0.3}>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] transition-all hover:border-sky-400/40 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <FileDown className="w-3.5 h-3.5 text-sky-400" />
                <span>Resume</span>
              </button>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono tracking-wider uppercase rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-sky-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#080a0f]/98 border-b border-white/[0.07] backdrop-blur-2xl px-6 pt-4 pb-8 mt-3 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-mono tracking-wider uppercase text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume && onOpenResume();
              }}
              className="w-full text-center px-4 py-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Inspect Official Resume (PDF)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-mono tracking-wider uppercase font-bold shadow-lg shadow-sky-500/25"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
