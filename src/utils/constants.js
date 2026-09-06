/* ============================================================
   PLACEHOLDER DATA — REPLACE WITH YOUR REAL CONTENT
   ============================================================
   Every field is clearly marked. Search for "TODO" to find
   all placeholders that need your real data.
   ============================================================ */

// TODO: Replace with your real personal information
export const personalInfo = {
  name: "Nishchal Kotiyan",
  firstName: "Nishchal",
  lastName: "Kotiyan",
  title: "Full Stack Developer / AI Engineer",
  tagline: "Full Stack Developer / AI Engineer",
  profileImage: "/images/profile.png",
  bio: `Aspiring Full-Stack Developer with hands-on experience building web applications and AI-powered projects. Passionate about solving real-world problems through technology and building practical solutions. Currently strengthening my skills in AI development, backend engineering, and AWS deployment, while seeking opportunities to collaborate with teams and contribute to real-world projects.`,
  email: "nishchalk127@gmail.com",
  location: "Karnataka, India",
  yearsOfExperience: 5,            // TODO: Update years of experience
  projectsCompleted: 30,           // TODO: Update projects count
  resumeUrl: "/Nishchal_Resume.pdf",
  social: {
    github: "https://github.com/Nishchal343",
    linkedin: "https://www.linkedin.com/in/nishchal-kotiyan-346149293/",
    twitter: "",   // TODO: Add your Twitter/X URL (optional)
    instagram: "", // TODO: Add your Instagram URL (optional)
  },
};

// TODO: Replace with your real projects
export const projects = [
  {
    id: 1,
    title: "TokenPilot",
    description: "A multi-user AI workspace for company and employee teams with provider routing, usage controls, prompt optimization, and tenant-scoped response caching.",
    longDescription: "TokenPilot combines authenticated workspaces, role-based organization management, AI chat, encrypted API keys, document and code processing, deterministic context optimization, analytics, token budgets, and exact or semantic response caching. It supports OpenAI-compatible, Gemini, Anthropic-compatible, Groq, OpenRouter, DeepSeek, Mistral, and xAI providers.",
    techStack: ["React", "FastAPI", "PostgreSQL", "JWT", "AI Providers", "Response Caching"],
    image: "/images/Tokenpilot.png",
    liveUrl: "http://65.0.146.12/",
    githubUrl: "https://github.com/Nishchal343/TokenPilot.git",
    featured: true,
    category: "Web App",              // TODO: Replace category
  },
  {
    id: 2,
    title: "ArchStudioAI",
    description: "An AI-powered engineering workspace that turns software repositories into searchable, explainable project knowledge.",
    longDescription: "ArchStudioAI imports ZIP archives or public GitHub repositories, redacts common secrets, creates line-aware code embeddings, and provides grounded search, chat, architecture analysis, dependency insights, quality and security reports, and editable diagrams.",
    techStack: ["React", "FastAPI", "Supabase", "pgvector", "Groq", "Docker"],
    image: "/images/ArchStudio.png",
    liveUrl: "https://13.127.76.144/",
    githubUrl: "https://github.com/Nishchal343/ArchStudio.git",
    featured: true,
    category: "AI / Developer Tools",
  },
  {
    id: 3,
    title: "Trade League",
    description: "A gamified virtual trading league where players compete head-to-head by investing virtual capital across simulated market assets in timed game rooms.",
    longDescription: "Trade League combines Django authentication, competitive game rooms, simulated profit and loss settlement, market analytics, leaderboards, REST APIs, and real-time room updates through Django Channels.",
    techStack: ["Python", "Django", "Django REST Framework", "Django Channels", "Docker", "Render"],
    image: "/images/tradeleague.png",
    liveUrl: "https://tradeleague-8w55.onrender.com/",
    githubUrl: "https://github.com/Nishchal343/TradeLeague",
    featured: true,
    category: "FinTech / Full Stack",
  },
  {
    id: 4,
    title: "Library Management",
    description: "LibraryOS is a Django-based library management system for managing books, students, issues, returns, fines, reports, and daily library activity.",
    longDescription: "Includes dashboard analytics, search and filtering, book issue and return workflows, automatic overdue fine calculation, JSON search endpoints, responsive dark mode, and interactive notifications.",
    techStack: ["Python", "Django", "MongoDB", "PyMongo", "Chart.js", "WhiteNoise"],
    image: "/images/librarymanagement.png",
    liveUrl: "https://mongodb-csmu.onrender.com/",
    githubUrl: "https://github.com/Nishchal343/LibraryManagement.git",
    featured: false,
    category: "Web Application",
  },
  {
    id: 5,
    title: "Event Management System",
    description: "A Django template-based application for managing events, participants, registrations, attendance, venues, categories, departments, roles, and resources.",
    longDescription: "Includes dashboard summaries, CRUD management, duplicate-registration and capacity checks, attendance workflows, resource allocation, Django admin, REST API endpoints, and a responsive server-rendered interface.",
    techStack: ["Python", "Django", "SQLite", "Django Templates", "REST API"],
    image: "/images/eventmanagement.png",
    liveUrl: null,
    githubUrl: "https://github.com/Nishchal343/EventManagement.git",
    featured: false,
    category: "Web Application",
  },
  {
    id: 6,
    title: "College Chatbot",
    description: "A Django chatbot that answers questions about Sahyadri College, Mangaluru, including admissions, courses, fees, hostel, placements, exams, and student life.",
    longDescription: "The chatbot uses the all-MiniLM-L6-v2 Sentence Transformers model with a curated Sahyadri dataset to provide answers without requiring an API key.",
    techStack: ["Python", "Django", "Sentence Transformers", "NLP", "JSON"],
    image: "/images/clgChatbot.png",
    liveUrl: null,
    githubUrl: "https://github.com/Nishchal343/College-miniproject.git",
    featured: false,
    category: "AI / Web Application",
  },
  {
    id: 7,
    title: "AgriCure",
    description: "An AI-powered crop disease detection system that helps farmers and agricultural experts identify plant diseases through image-based diagnosis.",
    longDescription: "AgriCure combines a PyTorch deep learning model with a Django REST Framework backend and React interface to provide disease detection and treatment recommendations.",
    techStack: ["React", "Tailwind CSS", "Django", "Django REST Framework", "PyTorch", "SQLite"],
    image: "/images/agricure.png",
    liveUrl: null,
    githubUrl: "https://github.com/Nishchal343/AgriCure.git",
    featured: false,
    category: "AI / Agriculture",
  },
  {
    id: 8,
    title: "Mangalyaan — ISRO Mars Orbiter Mission Animation",
    description: "A five-minute 2D OpenGL animation explaining the journey of India’s Mars Orbiter Mission, from PSLV launch through Mars orbit insertion and mission success.",
    longDescription: "The procedural C animation visualizes launch, stage separation, direct-trajectory failure, gravity assist, trans-Mars injection, Mars operations, data transmission, and the successful finale through educational captions.",
    techStack: ["C", "OpenGL", "GLUT / FreeGLUT", "Procedural Animation", "MinGW-w64"],
    image: "/images/mangalyaan.png",
    liveUrl: null,
    githubUrl: "https://github.com/Nishchal343/CG_Animation.git",
    featured: false,
    category: "Computer Graphics",
  },
  {
    id: 9,
    title: "LandGuard AI",
    description: "An explainable AI-assisted land-document verification system for checking ownership records, document consistency, and fraud risk signals.",
    longDescription: "LandGuard AI combines Django REST and React with document extraction, trusted-record similarity checks, duplicate and risk signals, SHA-256 hash anchoring on Ethereum, and PDF verification reports. Every result explains its engine, backend, and limitations.",
    techStack: ["Python", "Django REST", "React", "OCR", "Ethereum", "SQLite"],
    image: "/images/LandguardAI.png",
    liveUrl: null,
    githubUrl: "https://github.com/srijanrao38/LandGuardAI.git",
    featured: false,
    category: "AI / LegalTech",
  },
];

// TODO: Replace with your real skills and proficiency levels (0-100)
export const skills = {
  languages: [
    { name: "JavaScript", level: 95, icon: "⚡" },  // TODO: Update level
    { name: "TypeScript", level: 88, icon: "🔷" },
    { name: "Python", level: 82, icon: "🐍" },
    { name: "Rust", level: 65, icon: "⚙️" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "SQL", level: 78, icon: "🗃️" },
  ],
  frameworks: [
    { name: "React", level: 93, icon: "⚛️" },
    { name: "Next.js", level: 87, icon: "▲" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Three.js", level: 70, icon: "🧊" },
    { name: "Tailwind CSS", level: 92, icon: "💨" },
    { name: "Express", level: 80, icon: "🚂" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "📦" },
    { name: "Docker", level: 75, icon: "🐳" },
    { name: "AWS", level: 72, icon: "☁️" },
    { name: "Figma", level: 80, icon: "🎭" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Linux", level: 78, icon: "🐧" },
  ],
};

export const skillArchive = {
  languages: ["Python", "Java", "HTML/CSS", "JavaScript"],
  tools: ["VS Code", "Git / GitHub", "Docker", "Render", "AWS"],
  frameworks: ["React.js", "Django", "Django REST Framework", "FastAPI"],
  databases: ["MongoDB", "PostgreSQL", "SQLite"],
  testing: ["Postman", "pytest"],
  interests: ["Full Stack Development", "AI Engineering"],
};

// TODO: Replace with your real experience
export const experience = [
  {
    id: 1,
    chapter: "01",
    role: "Senior Full-Stack Developer",      // TODO: Replace role
    company: "Tech Company Alpha",            // TODO: Replace company
    period: "2023 — Present",                 // TODO: Replace dates
    description: "Leading development of next-generation web applications, mentoring junior developers, and architecting scalable solutions.", // TODO: Replace description
    techUsed: ["React", "Node.js", "AWS"],    // TODO: Replace tech
  },
  {
    id: 2,
    chapter: "02",
    role: "Full-Stack Developer",
    company: "Digital Agency Beta",
    period: "2021 — 2023",
    description: "Built and maintained multiple client projects, focusing on performance optimization and user experience design.",
    techUsed: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    id: 3,
    chapter: "03",
    role: "Frontend Developer",
    company: "Startup Gamma",
    period: "2019 — 2021",
    description: "Crafted beautiful, responsive interfaces and implemented complex animation systems for the company's flagship product.",
    techUsed: ["React", "GSAP", "Sass"],
  },
  {
    id: 4,
    chapter: "04",
    role: "Computer Science Degree",
    company: "University of Technology",
    period: "2015 — 2019",
    description: "Bachelor's degree in Computer Science with a focus on web technologies and human-computer interaction.",
    techUsed: ["Java", "C++", "Algorithms"],
  },
];

// TODO: Replace with real testimonials
export const testimonials = [
  {
    id: 1,
    quote: "An exceptional developer who combines technical expertise with an incredible eye for design. Every project delivered exceeds expectations.", // TODO: Replace quote
    name: "Colleague Name",        // TODO: Replace name
    role: "Senior Developer",      // TODO: Replace role
    company: "Tech Company",       // TODO: Replace company
    avatar: null,                  // TODO: Add avatar image URL
  },
  {
    id: 2,
    quote: "Working together was a fantastic experience. The attention to detail and creative problem-solving skills are truly remarkable.",
    name: "Client Name",
    role: "Product Manager",
    company: "Digital Agency",
    avatar: null,
  },
  {
    id: 3,
    quote: "Transformed our vision into reality with stunning animations and flawless code. A true artist-developer hybrid.",
    name: "Manager Name",
    role: "Engineering Lead",
    company: "Startup Inc",
    avatar: null,
  },
];

// Navigation links
export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];
