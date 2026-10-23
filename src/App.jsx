import React, { useState } from 'react';
import SmoothScroll from './components/ui/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import Marquee from './components/ui/Marquee';
import BackgroundGrid from './components/ui/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import SystemArchitectureExplorer from './components/ui/SystemArchitectureExplorer';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080a0f] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden font-sans">
        {/* Subtle Tactile Film Grain Noise Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 bg-noise" />

        {/* Fluid Desktop Cursor */}
        <CustomCursor />

        {/* Ambient Radial Lights & Grid */}
        <BackgroundGrid />

        {/* Main Application Shell */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

          <main className="flex-grow">
            <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
            <Marquee />
            <ImpactMetrics />
            <SystemArchitectureExplorer />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>

          <Footer />
        </div>

        {/* Official Interactive In-Browser Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}

export default App;
