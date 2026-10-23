export const portfolioData = {
  personal: {
    name: "Pratik Ghodke",
    role: "Software Engineer",
    subRole: "Mobile & Full-Stack Lead",
    tagline: "Architecting high-performance cross-platform mobile apps in Flutter and resilient microservices in Java Spring Boot.",
    location: "Pune, Maharashtra, India",
    email: "pratikghodke03@gmail.com",
    phone: "+91 9762878326",
    linkedin: "https://linkedin.com/in/pratikghodke",
    github: "https://github.com/pratikg36",
    portfolioUrl: "https://pratikg36.github.io/PratikGhodke/",
    status: "Available for Senior / Lead Engineering Roles",
    summary:
      "Software Engineer with ~2 years of production experience leading full-stack product lifecycles — from designing mobile frontends with Flutter & Riverpod to building scalable enterprise backends with Java 21, Spring Boot, PostgreSQL, and Liquibase. Proven track record deploying production-signed Android App Bundles (AAB) to Google Play Console and managing live Linux cloud servers.",
  },

  // Concrete, verified metrics with substantiating evidence
  metrics: [
    {
      value: "~2 Yrs",
      label: "Engineering Tenure",
      detail: "Full-stack mobile & backend microservices",
      substantiation: "Continuous engineering tenure: Tayan Solution (Feb–Jul 2025), Proser Digital (Jul 2025–Jan 2026), NeoPace InfoTech (Feb 2026–Present).",
      icon: "Clock",
    },
    {
      value: "4+",
      label: "Production Systems",
      detail: "Commercial mobile & SaaS platforms shipped",
      substantiation: "Shipped & maintained: NeaLife (Psychometric Platform - Lead Backend), Neo Parlour (SaaS), NeoCloudBites (Delivery App), NeoSowInfra (Web Platform).",
      icon: "Rocket",
    },
    {
      value: "100%",
      label: "Release Ownership",
      detail: "From architecture to Google Play & Linux deploy",
      substantiation: "Directly handled Keystore signing, Play Store AAB compliance rollouts, Docker containerization, and production Linux Nginx setups.",
      icon: "ShieldCheck",
    },
    {
      value: "-93%",
      label: "Query Latency Reduction",
      detail: "640ms to 42ms via PostgreSQL schema & query tuning",
      substantiation: "Diagnosed Hibernate search_path bottlenecks and added composite indices in NeaLife, cutting latency by 93% and dropping 500 error rates by 35%.",
      icon: "TrendingUp",
    },
  ],

  // System Architecture Explorer Nodes (Signature Interaction)
  systemArchitecture: {
    title: "Full-Stack System Architecture Explorer",
    subtitle: "Interactive blueprint of the production software systems built across mobile, microservices, and databases.",
    nodes: [
      {
        id: "client-flutter",
        tier: "Client Tier",
        title: "Flutter Mobile Client",
        tech: "Flutter, Dart, Riverpod 2.x, Material Design 3",
        protocols: "HTTPS / REST, Server-Sent Events (SSE)",
        role: "Cross-platform mobile application providing dynamic scheduling, real-time cart state management, and interactive map geocoding.",
        engineeringDecisions: [
          "Chose Riverpod AsyncNotifier over setState/Bloc for compile-time safety and automatic state disposal.",
          "Implemented RepaintBoundary and const constructor optimization to eliminate 60fps UI frame drops.",
        ],
        associatedProject: "neo-cloud-bites",
        projectTitle: "NeoCloudBites / Neo Parlour",
      },
      {
        id: "gateway-dio",
        tier: "Network Layer",
        title: "Resilient API Gateway Client",
        tech: "Dio, Interceptors, Token Refresh Queue",
        protocols: "Bearer JWT, JSON DTOs, HTTP/2",
        role: "Centralized client-side networking layer managing automated authentication headers, 401 token refresh retries, and network error normalization.",
        engineeringDecisions: [
          "Implemented an interceptor mutex queue that halts concurrent 401 requests, refreshes the JWT once, and retries pending calls seamlessly without logging out the user.",
          "Standardized response deserialization with robust null-safety guards.",
        ],
        associatedProject: "neo-cloud-bites",
        projectTitle: "NeoCloudBites",
      },
      {
        id: "service-spring",
        tier: "Core Services Tier",
        title: "Spring Boot 3 Microservices & Scoring Engine",
        tech: "Java 21, Spring Boot 3.x, Spring MVC, Spring Data JPA",
        protocols: "RESTful JSON, SSE Stream, JDBC HikariCP",
        role: "Modular enterprise backend orchestrating real-time psychometric evaluation scoring algorithms, multi-role RBAC, salon booking concurrency, and dynamic report generation.",
        engineeringDecisions: [
          "Engineered real-time psychometric trait matrix algorithms in Spring Boot calculating multi-dimensional percentiles across 1,300+ assessments and 3,000+ job role mappings.",
          "Applied Optimistic Locking (@Version) in appointment scheduling to guarantee no double-booking under concurrent traffic.",
          "Segregated DTO request/response layers with Jakarta validation to prevent database entity contamination.",
        ],
        associatedProject: "nealife",
        projectTitle: "NeaLife / Neo Parlour",
      },
      {
        id: "security-jwt",
        tier: "Security & Auth Tier",
        title: "Security & RBAC Subsystem",
        tech: "Spring Security 6, JWT, BCrypt, RBAC Filters",
        protocols: "HMAC-SHA256, Stateless Session",
        role: "Stateless security filter chain enforcing granular role-based permissions (Candidate, Educational Institute, Corporate Recruiter, Government, Partner Admin) across all protected endpoints.",
        engineeringDecisions: [
          "Configured stateless session management with pre-flight CORS filters and method-level @PreAuthorize security.",
          "Engineered OTP validation service with time-restricted temporary tokens for secure candidate assessment entry.",
        ],
        associatedProject: "nealife",
        projectTitle: "NeaLife / NeoSowInfra",
      },
      {
        id: "data-postgres",
        tier: "Data Persistence Tier",
        title: "PostgreSQL & Multi-Schema Isolation",
        tech: "PostgreSQL 15+, Multi-Schema (nealife-dev), Liquibase, HikariCP",
        protocols: "TCP 5432, SQL / PL-pgSQL, WAL",
        role: "Multi-schema relational data layer with automated version-controlled schema migrations, foreign key constraints, and optimized index scanning.",
        engineeringDecisions: [
          "Resolved Hibernate/HikariCP search_path resolution bugs in NeaLife (nealife-dev), cutting API query latency from 640ms to 42ms (-93%) and dropping 500 error rates by 35%.",
          "Implemented Liquibase changeLogs for zero-downtime database migrations with automated rollback scripts.",
        ],
        associatedProject: "nealife",
        projectTitle: "NeaLife / NeoSowInfra",
      },
      {
        id: "cloud-deploy",
        tier: "DevOps & Cloud Tier",
        title: "Cloud & Release Management",
        tech: "Docker, AWS (EC2 & S3), Google Play Console, Nginx",
        protocols: "AAB Bundles, SSH, HTTPS SSL Let's Encrypt",
        role: "Production packaging and infrastructure management — multi-stage Docker containerization on AWS EC2, secure S3 report vaults, signed Android App Bundles, and Linux web hosting.",
        engineeringDecisions: [
          "Architected pre-signed AWS S3 URL vaults for automated candidate psychometric diagnostic reports, ensuring secure, time-limited document access.",
          "Automated signed AAB artifact generation complying with Google Play target API and 64-bit architecture requirements.",
          "Configured Nginx reverse proxy with SSL termination and Systemd auto-restart service for Spring Boot JARs.",
        ],
        associatedProject: "nealife",
        projectTitle: "NeaLife / Google Play Deployments",
      },
    ],
  },

  experiences: [
    {
      company: "NeoPace InfoTech LLP",
      location: "Pune, India",
      role: "Software Engineer (Full-Stack & Mobile Lead)",
      period: "Feb 2026 – Present",
      type: "Full-Time",
      description:
        "Leading mobile and backend architecture across commercial client applications, managing engineering delivery from conceptual design to Google Play Store releases and Linux production hosting.",
      highlights: [
        "Architected end-to-end full-stack solutions uniting Flutter client applications with Java Spring Boot microservices and PostgreSQL databases.",
        "Engineered Neo Parlour's multi-role appointment scheduling engine handling customer booking flows, salon holiday schedules, date/time slot validation, and service status tracking.",
        "Built NeoCloudBites cloud kitchen application featuring dynamic menus, cart state management, and an interactive OpenStreetMap location picker with reverse geocoding.",
        "Implemented resilient Dio networking layers with custom interceptors for automated JWT authorization, error normalization, and remote feature flags.",
        "Packaged signed Android App Bundles (AAB), resolved Google Play compliance guidelines, and managed rollout configurations on the Google Play Console.",
        "Designed secure Spring Boot backend services for NeoSowInfra using Liquibase database migrations, custom PostgreSQL schemas, and granular RBAC authorization.",
      ],
      tech: [
        "Flutter",
        "Dart",
        "Java 21",
        "Spring Boot 3",
        "PostgreSQL",
        "Liquibase",
        "Riverpod",
        "Dio",
        "OpenStreetMap",
        "Google Play Console",
        "Docker",
        "Linux",
      ],
    },
    {
      company: "Proser Digital Solutions",
      location: "Pune, India",
      role: "Software Developer",
      period: "Jul 2025 – Jan 2026",
      type: "Full-Time",
      description:
        "Developed and maintained responsive cross-platform mobile and web applications using Flutter, Dart, and REST APIs for enterprise and consumer clients.",
      highlights: [
        "Implemented client-side state architecture using Riverpod, establishing clean separation of concerns between business logic and UI layers.",
        "Created modular, reusable widget libraries that accelerated UI feature delivery across client platforms.",
        "Optimized cross-device rendering performance, reduced UI frame drops, and managed team version control workflows using Git and GitHub.",
      ],
      tech: ["Flutter", "Dart", "Riverpod", "REST APIs", "Git", "GitHub", "Responsive UI"],
    },
    {
      company: "Tayan Solution",
      location: "Pune, India",
      role: "Software Developer Intern",
      period: "Feb 2025 – Jul 2025",
      type: "Internship",
      description:
        "Focused on Java server-side architecture and performance optimization for web-based Learning Management Systems (LMS).",
      highlights: [
        "Improved LMS execution performance by 20% through database query refactoring and architecture optimization using JSP, Servlets, and JDBC.",
        "Collaborated with senior engineers on database normalization and SQL indexing.",
      ],
      tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Database Optimization"],
    },
  ],

  projects: [
    {
      id: "nealife",
      title: "NeaLife",
      category: "Backend / Full-Stack",
      tag: "Flagship Production System",
      status: "Live In Production",
      role: "Lead Backend Developer (Spring Boot & Systems)",
      liveUrl: "https://nealife.in",
      portalUrl: "https://assess.nealife.in",
      summary:
        "Enterprise-grade online psychometric and psychological evaluation platform scientifically designed for cognitive, behavioral, and emotional assessment across 1,300+ standardized tests and mapped to 3,000+ career roles.",
      problem:
        "The platform suffered from 35% API 500 error spikes under concurrent exam traffic, cross-schema session leaks in Hibernate, slow assessment token lookups (640ms latency), and unoptimized dynamic report compilation across multi-role institutional and partner portals.",
      contributions:
        "Lead Backend Developer: Solely architected, engineered, and completed the backend systems in Java 21 & Spring Boot 3—authoring the real-time scoring engine, multi-schema PostgreSQL persistence (nealife-dev), Spring Security 6 RBAC, and automated AWS S3 PDF report generation, with supporting React frontend integration.",
      architectureHighlights: [
        "Backend Core: Java 21 & Spring Boot 3 REST microservice architecture with Jakarta DTO validation.",
        "Scoring Engine: Algorithmic calculation of psychometric dimensions, percentile benchmarks, and career role affinity matrices.",
        "Database: PostgreSQL multi-schema architecture (`nealife-dev`) with HikariCP search_path tuning and composite query indexing.",
        "Automated Vault: High-concurrency PDF diagnostic report synthesis with pre-signed AWS S3 / DigitalOcean Spaces secure storage.",
        "RBAC & Portals: Multi-tenant authorization isolating Students & Institutes, Corporates & Recruitment, Government, and Channel Partners.",
        "DevOps & Web: Dockerized containerization on AWS EC2 with Nginx reverse proxy + supporting React web interfaces.",
      ],
      decisions: [
        "Engineered an in-memory session scoring pipeline in Spring Boot calculating multi-dimensional psychometric traits in real time without blocking database I/O.",
        "Resolved Hibernate/HikariCP connection search_path bugs that caused public schema fallback, cutting query latency from 640ms to 42ms (-93%) and eliminating 35% of 500 errors.",
        "Architected a granular RBAC security matrix with Spring Security 6 & JWT, enforcing strict tenant boundaries between Candidates, Corporates, Institutions, and Partner networks.",
        "Implemented pre-signed AWS S3 URLs with time-limited cryptographic tokens for sensitive candidate psychological evaluations.",
      ],
      challengeAndSolution:
        "Challenge: Intermittent 500 Internal Server Errors occurred when partner institutions concurrently submitted batch assessments, caused by connection search_path cross-contamination and unindexed assessment token verification. Solution: Identified that Hibernate connections were acquiring public schema sessions rather than nealife-dev. Wrote a custom HikariCP connection init script enforcing `SET search_path TO nealife_dev, public`, added composite indices across token and submission tables, and optimized the Spring transaction boundary. This eliminated connection thrashing, lowered query response times from 640ms to 42ms (-93%), and reduced API error rates by 35%.",
      features: [
        "1,300+ scientifically designed psychometric & psychological assessments",
        "Industry-aligned career mapping engine matched against 3,000+ job roles",
        "Multi-role RBAC: Candidate, Educational Institute, Corporate Recruiter, Government, and Channel Partner portals",
        "Instant automated PDF diagnostic report generation stored securely in AWS S3",
        "Multi-schema PostgreSQL architecture (`nealife-dev`) with search_path optimization",
        "Stateless Spring Security 6 filter chain with JWT authentication & OTP verification",
        "Multi-stage Dockerized deployment hosted on AWS EC2 with Nginx reverse proxy",
        "Supporting React frontend integration for candidate evaluation testing interface",
      ],
      tech: ["Java 21", "Spring Boot 3", "Spring Security 6", "PostgreSQL", "Docker", "AWS S3", "AWS EC2", "Hibernate", "REST APIs", "React"],
    },
    {
      id: "neo-parlour",
      title: "Neo Parlour",
      category: "Full-Stack",
      tag: "SaaS Platform",
      status: "In Production",
      liveUrl: "https://sb.neoparlour.com",
      summary:
        "Smart salon and appointment management SaaS platform with multi-role access for customers, salon managers, and service professionals.",
      problem:
        "Salons struggle with appointment double-booking, manual holiday management, complex slot calculation across multiple staff members, and fragmented inventory tracking.",
      contributions:
        "Solely architected and implemented the core scheduling algorithms in Java Spring Boot, built the multi-role security boundaries, modeled PostgreSQL tables, and developed the customer booking flows in Flutter.",
      architectureHighlights: [
        "Client: Flutter mobile application with Riverpod calendar state management.",
        "Backend: Spring Boot 3 RESTful microservice with status enums (booked, confirmed, in-progress, completed).",
        "Database: PostgreSQL transactional locking preventing concurrent duplicate bookings.",
      ],
      decisions: [
        "Enforced optimistic concurrency locking via JPA @Version on time-slots, eliminating race conditions during peak booking hours.",
        "Separated public salon inquiry APIs from authenticated management endpoints with granular RBAC permissions.",
        "Utilized DTO projections to decrease API payload sizes by 40% on mobile data connections.",
      ],
      challengeAndSolution:
        "Challenge: Handling erratic recurring holiday schedules and slot availability without slow database table scans. Solution: Built an in-memory calendar slot generator in Spring Boot that caches monthly salon business hours and computes available intervals dynamically in O(1) time.",
      features: [
        "Multi-role role-based access control (RBAC) for customers and staff",
        "Automated calendar and time-slot scheduling algorithm",
        "Spring Boot REST APIs with DTO validation and status enums",
        "PostgreSQL transaction management preventing double-booking",
        "Responsive Flutter mobile client + administrative web portal",
      ],
      tech: ["Flutter", "Dart", "Java 21", "Spring Boot", "PostgreSQL", "Riverpod", "REST APIs"],
    },
    {
      id: "neo-cloud-bites",
      title: "NeoCloudBites",
      category: "Mobile",
      tag: "Food & Hospitality",
      status: "Shipped to Play Store",
      liveUrl: null,
      summary:
        "Commercial cloud kitchen and food delivery application with real-time location mapping and dynamic cart workflows.",
      problem:
        "Proprietary mapping SDKs caused high recurring billing costs, while unreliable network connectivity frequently caused cart state desynchronization and failed payment callbacks.",
      contributions:
        "Engineered the complete mobile application in Flutter/Dart, authored the OpenStreetMap reverse-geocoding integration, configured Dio interceptor queues, and managed Play Store AAB release generation.",
      architectureHighlights: [
        "Client: Flutter with Riverpod AsyncNotifier providing optimistic cart updates.",
        "Geolocation: OpenStreetMap (flutter_map) + Nominatim reverse geocoding pin-drop picker.",
        "Networking: Custom Dio client with JWT auto-attachment and 401 refresh queues.",
      ],
      decisions: [
        "Integrated OpenStreetMap tile caching to replace proprietary maps, reducing third-party billing costs to zero.",
        "Implemented Google Play billing policy compliance for physical services, avoiding platform rejection.",
        "Constructed a clean feature-first architecture (data, domain, presentation) for seamless codebase maintainability.",
      ],
      challengeAndSolution:
        "Challenge: Users dropping pins in remote locations without network connection caused geocoding crashes. Solution: Built a debounced coordinate cache and fallback coordinate converter that captures exact latitude/longitude coordinates even under weak connectivity.",
      features: [
        "Interactive OpenStreetMap location picker with reverse geocoding",
        "Dio networking with automated JWT token attachment and error normalization",
        "Remote feature flag infrastructure for controlled module rollouts",
        "Production-signed Android App Bundle (AAB) with Google Play Console deployment",
        "Design system built with Poppins & Plus Jakarta typography",
      ],
      tech: ["Flutter", "Dart", "Riverpod", "Dio", "OpenStreetMap", "Google Play Console", "AAB"],
    },
    {
      id: "neo-sow-infra",
      title: "NeoSowInfra",
      category: "Backend / Web",
      tag: "Enterprise Platform",
      status: "Live Web Platform",
      liveUrl: "https://www.neosowinfra.com",
      summary:
        "Enterprise infrastructure management and operational web portal with database versioning and secure user administration.",
      problem:
        "Manual SQL migrations across distributed server environments led to schema drift, broken staging deployments, and unmonitored administrative privilege escalation.",
      contributions:
        "Designed the backend microservices with Liquibase automated database migrations, established multi-tier RBAC authorization, and deployed the production stack onto Linux servers with Nginx.",
      architectureHighlights: [
        "Backend: Spring Boot 3 microservice with Maven build lifecycle.",
        "Migration: Liquibase YAML changeLogs with automated checksum validation and rollback scripts.",
        "Frontend: Vite React client interfaced with REST endpoints.",
        "Hosting: Production Linux server with Nginx reverse proxy and SSL.",
      ],
      decisions: [
        "Adopted Liquibase changeSets over Hibernate auto-ddl to enforce auditable, immutable database schema history.",
        "Configured Nginx rate limiting to safeguard sensitive administrative login endpoints against brute-force attacks.",
      ],
      challengeAndSolution:
        "Challenge: Staging and production databases falling out of sync during emergency hotfixes. Solution: Created a strict Liquibase migration pipeline that validates database changeLog lock tables prior to application startup, aborting deployment automatically if schema integrity is breached.",
      features: [
        "Liquibase automated database schema migrations & rollbacks",
        "Multi-role user authentication with JWT security filters",
        "High-performance REST APIs with pagination and search indexing",
        "Production Linux deployment with automated Git deployment workflows",
      ],
      tech: ["Java", "Spring Boot", "Liquibase", "PostgreSQL", "React", "Vite", "Linux", "Nginx"],
    },
    {
      id: "networking-app",
      title: "Networking App",
      category: "Mobile",
      tag: "Social App",
      status: "Portfolio Project",
      liveUrl: "https://networking-site.netlify.app",
      summary: "Social networking mobile client supporting user auth, post creation, comments, and real-time feeds.",
      problem: "Demonstration of responsive UI, state caching, and client-side feed pagination.",
      contributions: "Built complete Flutter client and integrated JWT RESTful backend endpoints.",
      architectureHighlights: ["Client: Flutter + Dart", "Backend: Node.js + MongoDB", "Auth: JWT"],
      decisions: ["Implemented cursor-based pagination for post feeds."],
      challengeAndSolution: "Maintained responsive rendering across various screen aspect ratios.",
      features: ["JWT-based auth", "Real-time feed", "Responsive design", "State caching"],
      tech: ["Flutter", "Dart", "Node.js", "MongoDB", "REST APIs"],
    },
  ],

  skillCategories: [
    {
      name: "Mobile & Frontend Engineering",
      icon: "Smartphone",
      skills: [
        { name: "Flutter", level: "Advanced", primary: true, usedIn: ["neo-cloud-bites", "neo-parlour"] },
        { name: "Dart", level: "Advanced", primary: true, usedIn: ["neo-cloud-bites", "neo-parlour"] },
        { name: "Riverpod 2.x (AsyncNotifier)", level: "Advanced", primary: true, usedIn: ["neo-cloud-bites", "neo-parlour"] },
        { name: "React & Vite (Web Dashboards)", level: "Proficient", primary: true, usedIn: ["nealife", "neo-sow-infra"] },
        { name: "Dio (Interceptors & Error Queues)", level: "Advanced", primary: true, usedIn: ["neo-cloud-bites"] },
        { name: "Material Design 3", level: "Advanced", usedIn: ["neo-cloud-bites", "neo-parlour"] },
        { name: "Clean Architecture", level: "Advanced", usedIn: ["neo-cloud-bites"] },
        { name: "OpenStreetMap & Geocoding", level: "Proficient", primary: true, usedIn: ["neo-cloud-bites"] },
        { name: "Firebase Cloud Messaging (FCM)", level: "Proficient", usedIn: ["neo-parlour"] },
      ],
    },
    {
      name: "Backend & Microservices",
      icon: "Server",
      skills: [
        { name: "Java (Java 21 / 17)", level: "Advanced", primary: true, usedIn: ["nealife", "neo-parlour", "neo-sow-infra"] },
        { name: "Spring Boot 3.x", level: "Advanced", primary: true, usedIn: ["nealife", "neo-parlour", "neo-sow-infra"] },
        { name: "Spring Security 6", level: "Advanced", primary: true, usedIn: ["nealife", "neo-sow-infra"] },
        { name: "Spring Data JPA & Hibernate", level: "Advanced", primary: true, usedIn: ["nealife", "neo-parlour"] },
        { name: "Psychometric Scoring Algorithms", level: "Advanced", primary: true, usedIn: ["nealife"] },
        { name: "RESTful API Design", level: "Advanced", primary: true, usedIn: ["nealife", "neo-parlour", "neo-cloud-bites"] },
        { name: "Liquibase Migrations", level: "Proficient", primary: true, usedIn: ["neo-sow-infra"] },
        { name: "DTOs & Validation", level: "Advanced", usedIn: ["nealife", "neo-parlour", "neo-sow-infra"] },
        { name: "Server-Sent Events (SSE)", level: "Proficient", usedIn: ["neo-parlour"] },
      ],
    },
    {
      name: "Databases & Cloud",
      icon: "Database",
      skills: [
        { name: "PostgreSQL (Multi-Schema & Tuning)", level: "Advanced", primary: true, usedIn: ["neo-parlour", "neo-sow-infra", "nealife"] },
        { name: "MySQL", level: "Proficient", usedIn: ["tayan-solution"] },
        { name: "MongoDB", level: "Proficient", usedIn: ["networking-app"] },
        { name: "Docker Containerization", level: "Proficient", primary: true, usedIn: ["nealife"] },
        { name: "AWS (EC2 & S3)", level: "Proficient", primary: true, usedIn: ["nealife"] },
        { name: "Linux Administration & Nginx", level: "Proficient", usedIn: ["neo-sow-infra"] },
      ],
    },
    {
      name: "Security & Real-Time",
      icon: "Lock",
      skills: [
        { name: "JWT (JSON Web Tokens)", level: "Advanced", primary: true, usedIn: ["nealife", "neo-sow-infra", "neo-cloud-bites"] },
        { name: "Role-Based Access Control (RBAC)", level: "Advanced", primary: true, usedIn: ["neo-parlour", "neo-sow-infra", "nealife"] },
        { name: "OTP Verification Flows", level: "Proficient", usedIn: ["nealife"] },
        { name: "WebSockets & SSE", level: "Proficient", usedIn: ["neo-parlour"] },
      ],
    },
    {
      name: "DevOps & Engineering Tooling",
      icon: "Wrench",
      skills: [
        { name: "Google Play Console (AAB Release)", level: "Advanced", primary: true, usedIn: ["neo-cloud-bites"] },
        { name: "Git & GitHub", level: "Advanced", primary: true, usedIn: ["neo-cloud-bites", "neo-sow-infra", "proser"] },
        { name: "Postman & Swagger / OpenAPI", level: "Advanced", primary: true, usedIn: ["neo-parlour", "nealife"] },
        { name: "Maven & Gradle", level: "Proficient", usedIn: ["neo-parlour", "neo-cloud-bites"] },
        { name: "IntelliJ IDEA & Android Studio", level: "Advanced", usedIn: ["neo-parlour", "neo-cloud-bites"] },
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Science (M.Sc.)",
      institution: "Savitribai Phule Pune University",
      period: "2022 – 2024",
      score: "CGPA: 7.60",
    },
    {
      degree: "Bachelor of Computer Science (B.Sc.)",
      institution: "Savitribai Phule Pune University",
      period: "2018 – 2021",
      score: "Percentage: 83.22%",
    },
  ],

  certifications: [
    {
      title: "Generative AI Certification",
      issuer: "Technical University of Munich",
      year: "2024",
    },
    {
      title: "Java & Advanced Java Certification",
      issuer: "CWS Technologies",
      year: "2023",
    },
  ],
};
