# Pratik Ghodke — Software Engineer Portfolio & Resume

[![Live Demo](https://img.shields.io/badge/Live_Portfolio-GitHub_Pages-0ea5e9?style=for-the-badge&logo=github)](https://pratikg36.github.io/Resume/)
[![Resume PDF](https://img.shields.io/badge/Resume-Download_PDF-10b981?style=for-the-badge&logo=adobe-acrobat-reader)](./public/Pratik_Ghodke_Resume.pdf)
[![Java 21](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-green?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![Flutter](https://img.shields.io/badge/Flutter-3.x-blue?style=for-the-badge&logo=flutter)](https://flutter.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Multi--Schema-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

A high-performance, dark-themed engineering portfolio and verified technical credential showcase built with **React**, **Vite**, **Tailwind CSS**, and **GSAP**.

---

## 🚀 Key Software Projects

### 1. [NeaLife](https://nealife.in/) — Flagship Psychological Assessment Platform
- **Role:** Lead Backend Developer (Java 21, Spring Boot 3, Spring Security 6, PostgreSQL, AWS)
- **Domain:** Scientific online psychometric evaluation platform across 1,300+ assessments and 3,000+ career role mappings.
- **Key Engineering Achievements:**
  - Architected real-time in-memory trait scoring algorithms computing multi-dimensional cognitive/behavioral percentiles upon submission.
  - Resolved Hibernate/HikariCP connection search_path bugs in PostgreSQL (`nealife-dev`), cutting query latency from 640ms to 42ms (-93%) and dropping 500 error rates by 35%.
  - Built Spring Security 6 RBAC enforcing strict security boundaries across Students, Educational Institutes, Corporates, Government, and Channel Partners.
  - Automated high-concurrency dynamic PDF diagnostic report generation with secure pre-signed AWS S3 URL delivery.
- **Portals:** [nealife.in](https://nealife.in) | [assess.nealife.in](https://assess.nealife.in)

### 2. [Neo Parlour](https://sb.neoparlour.com) — Salon Scheduling SaaS Platform
- **Stack:** Flutter, Dart, Java 21, Spring Boot 3, PostgreSQL
- **Highlights:** Multi-role appointment engine with optimistic locking (`@Version`) preventing double-bookings.

### 3. NeoCloudBites — Food Delivery & Hospitality App
- **Stack:** Flutter, Dart, Riverpod, Dio Interceptors, OpenStreetMap
- **Highlights:** Shipped to Google Play Console with signed Android App Bundles (AAB) and zero-cost OSM tile caching.

### 4. [NeoSowInfra](https://www.neosowinfra.com) — Enterprise Web & Infrastructure Portal
- **Stack:** Java, Spring Boot 3, Liquibase, PostgreSQL, React, Linux, Nginx
- **Highlights:** Automated database schema migration pipelines with Liquibase changeLogs and auditable rollbacks.

---

## 🛠️ Local Development

```bash
# Clone repository
git clone https://github.com/pratikg36/Resume.git
cd Resume

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to interact with the local development build.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 Printable Resume Sources

This repository also contains the complete resume sources:
- **Compiled PDF:** [`public/Pratik_Ghodke_Resume.pdf`](./public/Pratik_Ghodke_Resume.pdf)
- **LaTeX Source:** [`resume-source/Pratik_Ghodke_Resume.tex`](./resume-source/Pratik_Ghodke_Resume.tex)
- **Pixel-Perfect Printable HTML:** [`resume-source/resume_printable.html`](./resume-source/resume_printable.html)

---

## 📬 Contact
- **Email:** [pratik.g@neopaceinfotech.com](mailto:pratik.g@neopaceinfotech.com)
- **GitHub:** [github.com/pratikg36](https://github.com/pratikg36)
- **LinkedIn:** [linkedin.com/in/pratikghodke](https://www.linkedin.com/in/pratik-ghodke-747190209/)
