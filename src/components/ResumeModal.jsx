import React, { useEffect } from 'react';
import { X, FileDown, ExternalLink, Printer } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const pdfUrl = `${import.meta.env.BASE_URL}Pratik_Ghodke_Resume.pdf?t=20261023`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Official Resume Preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="bg-[#0f172a] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-slate-800 gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-bold text-sm sm:text-base md:text-lg text-white truncate">Pratik Ghodke — Resume Preview</span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
              Updated: 2026
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-4 sm:p-8 lg:p-10 overflow-y-auto space-y-6 text-sm leading-relaxed font-sans bg-white selection:bg-sky-100 selection:text-sky-900">
          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 mb-1">
              Pratik Ghodke
            </h1>
            <div className="text-sm sm:text-base font-semibold text-slate-800 mb-2">
              Software Engineer | Mobile &amp; Full-Stack Developer
            </div>
            <div className="text-xs text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>Pune, Maharashtra, India</span> •
              <a href="mailto:pratikghodke03@gmail.com" className="text-blue-600 hover:underline break-all sm:break-normal">pratikghodke03@gmail.com</a> •
              <span className="whitespace-nowrap">+91 9762878326</span> •
              <a href="https://linkedin.com/in/pratikghodke" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all sm:break-normal">linkedin.com/in/pratikghodke</a> •
              <a href="https://github.com/pratikg36" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all sm:break-normal">github.com/pratikg36</a> •
              <a href="https://pratikg36.github.io/PratikGhodke/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-semibold break-all sm:break-normal">Portfolio: pratikg36.github.io/PratikGhodke</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-normal text-justify">
              <strong>Software Engineer</strong> with ~2 years of experience leading full-stack product lifecycles across cross-platform mobile engineering (<strong>Flutter/Dart</strong>) and enterprise backend microservices (<strong>Java, Spring Boot, PostgreSQL</strong>). Proven track record leading commercial applications from system design to <strong>Google Play Console</strong> release and production Linux deployment. Specialized in modular state management with <strong>Riverpod</strong>, resilient networking with <strong>Dio</strong>, <strong>JWT/RBAC</strong> authorization, <strong>Liquibase</strong> database migrations, and scalable RESTful API design.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-slate-800">
              <div><strong>Languages:</strong> Dart, Java (Java 21/17), TypeScript, JavaScript, SQL, HTML5, CSS3</div>
              <div><strong>Mobile &amp; Frontend:</strong> Flutter, Riverpod (StateNotifier, AsyncNotifier), Dio (Interceptors), Material Design 3, OpenStreetMap &amp; Geocoding, Vite, React</div>
              <div><strong>Backend &amp; Microservices:</strong> Spring Boot 3.x, Spring MVC, Spring Security, Spring Data JPA, Hibernate ORM, RESTful APIs, Liquibase Migrations, DTOs</div>
              <div><strong>Security &amp; Real-Time:</strong> JWT Authentication, Role-Based Access Control (RBAC), OTP Verification, Server-Sent Events (SSE), WebSockets</div>
              <div><strong>Databases &amp; Cloud:</strong> PostgreSQL (Multi-Schema, Query Optimization), MySQL, MongoDB, Docker, AWS (EC2, S3), Linux, Nginx</div>
              <div><strong>DevOps &amp; Tools:</strong> Google Play Console (AAB Releases), Git, GitHub, Maven, Gradle, Postman, Swagger/OpenAPI, IntelliJ IDEA, VS Code</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Professional Experience
            </h2>

            {/* NeoPace InfoTech */}
            <div className="mb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                <div>
                  <span className="font-bold text-slate-900">Software Engineer (Full-Stack &amp; Mobile Lead)</span>
                  <span className="text-slate-600"> | NeoPace InfoTech LLP</span>
                </div>
                <div className="text-xs text-slate-600 italic">Feb 2026 – Present | Pune, India</div>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-xs text-slate-700">
                <li><strong>Full-Stack Leadership:</strong> Led mobile frontend and backend microservices architecture across commercial client applications in <strong>Flutter, Dart, Java Spring Boot</strong>, and <strong>PostgreSQL</strong>.</li>
                <li><strong>Neo Parlour (Dual-App SaaS &amp; CRM):</strong> Architected dual-app Google Play ecosystem (Customer Booking &amp; Retail App + Salon Business CRM &amp; Staff Portal); authored Spring Boot 3 scheduling microservices with JPA @Version optimistic locking, staff attendance/commission modules, and inventory controls.</li>
                <li><strong>NeoCloudBites (Delivery App):</strong> Developed cross-platform Flutter application featuring dynamic menu browsing, cart state management, and an interactive <strong>OpenStreetMap location picker</strong> with reverse geocoding for precise delivery address selection.</li>
                <li><strong>Resilient Networking &amp; Flags:</strong> Implemented modular <strong>Dio</strong> networking layer with custom interceptors for automated JWT authorization, error normalization, and remote feature flags for controlled rollouts.</li>
                <li><strong>Play Store Release:</strong> Managed end-to-end mobile release pipelines, packaging signed Android App Bundles (<strong>AAB</strong>), meeting Google Play compliance, and deploying to the <strong>Google Play Console</strong>.</li>
                <li><strong>NeoSowInfra (Enterprise Web):</strong> Built secure Spring Boot backend services with <strong>Liquibase</strong> database migrations, custom PostgreSQL schemas, and granular RBAC authorization; deployed full-stack Vite frontend and APIs to production Linux servers.</li>
              </ul>
            </div>

            {/* Proser Digital Solutions */}
            <div className="mb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                <div>
                  <span className="font-bold text-slate-900">Software Developer</span>
                  <span className="text-slate-600"> | Proser Digital Solutions</span>
                </div>
                <div className="text-xs text-slate-600 italic">Jul 2025 – Jan 2026 | Pune, India</div>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-xs text-slate-700">
                <li><strong>Cross-Platform Development:</strong> Built responsive, cross-platform mobile and web applications using <strong>Flutter and Dart</strong>, interfacing with complex backend REST APIs.</li>
                <li><strong>State Management:</strong> Implemented client-side state architecture using <strong>Riverpod</strong>, establishing clean separation of concerns between business logic and UI layers and authoring reusable widget components.</li>
                <li><strong>Performance &amp; CI/CD:</strong> Optimized cross-device rendering performance, reduced UI frame drops, and managed team version control workflows using <strong>Git and GitHub</strong>.</li>
              </ul>
            </div>

            {/* Tayan Solution */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                <div>
                  <span className="font-bold text-slate-900">Software Developer Intern</span>
                  <span className="text-slate-600"> | Tayan Solution</span>
                </div>
                <div className="text-xs text-slate-600 italic">Feb 2025 – Jul 2025 | Pune, India</div>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-xs text-slate-700">
                <li><strong>LMS Backend Optimization:</strong> Improved Learning Management System (LMS) execution performance by 20% through database query refactoring and architecture optimization using <strong>JSP, Servlets, and JDBC</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Key Software Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Key Software Projects
            </h2>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                <span className="font-bold text-slate-900">NeaLife — Online Psychometric &amp; Psychological Assessment Platform</span>
                <span className="text-xs text-slate-600 italic">Java 21, Spring Boot 3, Spring Security 6, PostgreSQL, AWS, Docker</span>
              </div>
              <ul className="list-disc ml-5 space-y-1 text-xs text-slate-700">
                <li><strong>Lead Backend Architecture:</strong> Solely architected and delivered the enterprise Java 21 &amp; Spring Boot 3 backend system powering an online psychometric evaluation platform with 1,300+ assessments and 3,000+ career role mappings, with supporting React frontend integration.</li>
                <li><strong>Algorithmic Trait Scoring &amp; RBAC:</strong> Engineered high-precision scoring algorithms calculating multi-dimensional cognitive/behavioral traits and percentiles; built Spring Security 6 RBAC enforcing strict tenant boundaries across Students, Corporates, Government, and Partner networks.</li>
                <li><strong>PostgreSQL Multi-Schema Tuning:</strong> Integrated multi-schema database architecture (<code>nealife-dev</code>), eliminated HikariCP connection search_path bugs, and optimized query execution plans, dropping API 500 error rates by 35% and cutting latency from 640ms to 42ms (-93%).</li>
                <li><strong>Automated Cloud Reporting:</strong> Implemented automated dynamic PDF psychological diagnostic report generation, orchestrating secure storage and time-limited document retrieval via pre-signed AWS S3 URLs; containerized services with Docker on AWS EC2.</li>
              </ul>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-1 mb-2">
              Education &amp; Certifications
            </h2>
            <div className="text-xs space-y-2 text-slate-800">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                <span><strong>Master of Computer Science (M.Sc.)</strong> — Savitribai Phule Pune University</span>
                <span className="italic text-slate-600">CGPA: 7.60 | 2022 – 2024</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                <span><strong>Bachelor of Computer Science (B.Sc.)</strong> — Savitribai Phule Pune University</span>
                <span className="italic text-slate-600">Percentage: 83.22% | 2018 – 2021</span>
              </div>
              <div className="pt-1 text-slate-700">
                <strong>Certifications:</strong> Generative AI Certification (Technical University of Munich) • Java &amp; Advanced Java (CWS Technologies)
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs text-slate-500">
            Matching official LaTeX version (<code className="text-slate-700">Pratik_Ghodke_Resume.tex</code>)
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 min-h-[38px] rounded-lg text-xs font-medium bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 min-h-[38px] rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
            >
              Open PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
