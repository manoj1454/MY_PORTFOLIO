import { SiteConfig, SkillCategory, EngineeringPrinciple } from './types';

export const siteConfig: SiteConfig = {
  name: 'Manoj',
  fullName: 'Manoj Chary Bhuvanagiri',
  title: 'Manoj Chary — Software Developer',
  role: 'Software Developer',
  tagline: 'Software Developer focused on full-stack development, backend engineering, system architecture, and practical intelligent systems.',
  subheadline:
    'Software Developer with a strong foundation in full-stack development and a specialization in integrating intelligent systems into scalable applications. Experienced in building end-to-end products—from designing microservices architectures with Spring Boot and FastAPI to developing responsive frontends in React.',
  aboutBio: [
    'I am a Software Developer with a strong foundation in full-stack development and a specialization in integrating intelligent systems into scalable applications. Experienced in building end-to-end products—from designing microservices architectures with Spring Boot and FastAPI to developing responsive frontends in React and Next.js.',
    'My work spans full-stack web applications, backend services, REST APIs, microservices architecture, and transactional database design. I have a proven track record of solving complex problems, including architecting an enterprise ERP system with transactional integrity and edge access control, and building the XYPHER verifiable credential platform using Blockchain and IPFS.',
    'I focus on clean, efficient code and dependable software that delivers real-world value—combining solid computer science fundamentals, clear service boundaries, and thoughtful integration of specialized technologies like RAG and agentic verification.',
  ],
  status: 'Building full-stack systems, backend services, and scalable web applications',
  education: {
    degree: 'B.E.',
    field: 'Computer Science and Engineering',
    institution: 'Neil Gogte Institute of Technology, Hyderabad',
    dates: '2023–2027',
    cgpa: '7.8 / 10',
  },
  educationList: [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Neil Gogte Institute of Technology, Hyderabad',
      dates: '2023–2027',
      score: 'CGPA: 7.8 / 10',
    },
    {
      degree: 'Class XII',
      board: 'Telangana State Board',
      institution: 'Narayana Junior College, Telangana',
      dates: '2020–2022',
      score: 'Score: 92.6%',
    },
  ],
  achievements: [
    {
      title: '3rd Place — Sankalp Ideathon',
      event: 'College-level real-world problem-solving competition, Neil Gogte Institute of Technology',
      year: '2025',
    },
  ],
  certifications: [
    {
      name: 'SQL (Basic) Certificate',
      issuer: 'HackerRank',
      date: 'April 2026',
      url: 'https://www.hackerrank.com/certificates/029bf4d1e2a5',
    },
    {
      name: 'Data Fundamentals Badge',
      issuer: 'IBM SkillsBuild',
      date: 'April 2026',
      url: 'https://www.credly.com/badges/49b453c4-f143-4115-bf24-be627be9ac8e/public_url',
    },
  ],
  positionsOfResponsibility: [
    {
      role: 'Arts Club Head',
      institution: 'Neil Gogte Institute of Technology',
      year: '2023',
    },
  ],
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Approach', href: '#principles' },
    { label: 'Contact', href: '#contact' },
  ],
  verifiedSocials: [
    {
      name: 'GitHub',
      url: 'https://github.com/manoj1454',
      ariaLabel: 'Manoj on GitHub (opens in new tab)',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/manojchary',
      ariaLabel: 'Manoj on LinkedIn (opens in new tab)',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Manoj_chary/',
      ariaLabel: 'Manoj on LeetCode (opens in new tab)',
    },
    {
      name: 'Email',
      url: 'mailto:manojchary14542@gmail.com',
      ariaLabel: 'Email Manoj directly',
    },
  ],
  contact: {
    headline: "Have a problem worth solving? Let's talk.",
    subheadline:
      "I'm interested in software engineering opportunities and projects where thoughtful implementation, reliable systems, and continuous learning matter.",
    email: 'manojchary14542@gmail.com',
    github: 'https://github.com/manoj1454',
    linkedin: 'https://linkedin.com/in/manojchary',
  },
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Languages used in systems programming, backend services, full-stack applications, and problem solving.',
    items: [
      { name: 'Java', context: 'Object-oriented programming, data structures & algorithms, Spring Boot gateway' },
      { name: 'Python', context: 'FastAPI microservices, document extraction, machine learning pipelines' },
      { name: 'C', context: 'Low-level systems programming and fundamental algorithmic concepts' },
      { name: 'SQL', context: 'Relational data modeling, ACID transactions, complex querying & schema design' },
    ],
  },
  {
    category: 'Core Computer Science',
    description: 'Foundational principles applied across systems architecture, algorithms, and software engineering.',
    items: [
      { name: 'Data Structures and Algorithms', context: 'Practical algorithm selection, complexity analysis, and problem solving' },
      { name: 'Object-Oriented Programming', context: 'Encapsulation, interfaces, component separation, clean code' },
      { name: 'Database Management Systems', context: 'Relational modeling, transaction isolation, indexing, data integrity' },
      { name: 'Operating Systems', context: 'Process management, concurrency, memory models, file systems' },
      { name: 'Computer Networks', context: 'HTTP/HTTPS protocols, TCP/IP, REST architecture, socket communication' },
    ],
  },
  {
    category: 'Backend and Infrastructure',
    description: 'Runtimes, frameworks, databases, and architectural patterns for dependable service engineering.',
    items: [
      { name: 'Node.js', context: 'Asynchronous event-driven runtime for backend services & APIs' },
      { name: 'Express', context: 'RESTful API routing, validation middleware, request pipelines' },
      { name: 'FastAPI', context: 'High-performance Python asynchronous APIs and request validation' },
      { name: 'PostgreSQL', context: 'Relational database persistence, complex queries, transactional schemas' },
      { name: 'Supabase', context: 'Postgres-backed database management, authentication & storage' },
      { name: 'Docker', context: 'Service containerization for consistent local and production deployment' },
      { name: 'REST APIs', context: 'Contract-first design, HTTP status codes, idempotency, structured validation' },
    ],
  },
  {
    category: 'Frontend and Tooling',
    description: 'Client-side frameworks, state management, and modern development tooling.',
    items: [
      { name: 'React', context: 'Component lifecycles, custom hooks, asynchronous UI states' },
      { name: 'Next.js 14', context: 'App Router, server components, middleware-based edge security' },
      { name: 'TypeScript', context: 'Static type safety, interface contracts, end-to-end predictability' },
      { name: 'Tailwind CSS', context: 'Utility-first responsive layouts and structured design systems' },
      { name: 'TanStack Query', context: 'Optimistic UI mutations, server state synchronization, query caching' },
      { name: 'Zustand', context: 'Lightweight, decoupled client state stores' },
      { name: 'Git', context: 'Version control, atomic commits, branch workflows' },
      { name: 'Vite', context: 'Fast modern build tooling and development server' },
    ],
  },
  {
    category: 'Specializations',
    description: 'Applied domains spanning decentralized verification, RAG pipelines, and intelligent systems.',
    items: [
      { name: 'Blockchain', context: 'Solidity smart contracts, Polygon Amoy deployment, cryptographic verification' },
      { name: 'IPFS', context: 'Decentralized content-addressed storage for verifiable credential files' },
      { name: 'RAG Pipelines', context: 'Document chunking, dense vector retrieval, cross-encoder reranking' },
      { name: 'Agentic AI', context: 'Multi-stage verification workflows, atomic claim decomposition' },
      { name: 'PyTorch', context: 'Deep learning pipelines, object detection models, tensor operations' },
      { name: 'Hugging Face', context: 'Model inference checkpoints, Spaces deployment, transformer pipelines' },
    ],
  },
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    number: '01',
    title: 'Understand the problem first',
    summary:
      'Clarify users, constraints, failure cases, and what success means before choosing tools.',
    example:
      'In the Medical Response Verification project, clarifying that LLM hallucinations pose tangible clinical hazards led to decomposing answers into individual testable claims rather than treating generation as a single opaque block.',
  },
  {
    number: '02',
    title: 'Design clear boundaries',
    summary:
      'Keep interfaces and responsibilities understandable, especially when a system contains multiple services.',
    example:
      'Separating the Spring Boot gateway, React client, and Python/FastAPI verification service kept model-heavy code isolated while maintaining clear HTTP API contracts between services.',
  },
  {
    number: '03',
    title: 'Integrate deliberately',
    summary:
      'Test the contracts between UI, APIs, data, and external services rather than assuming each component will work together.',
    example:
      'Diagnosing and resolving an HTTP/2 vs. HTTP/1.1 protocol incompatibility between the Java HttpClient gateway and Uvicorn prevented silent connection hangs in multi-service communication.',
  },
  {
    number: '04',
    title: 'Measure what matters',
    summary:
      'Use relevant metrics and tests, explain trade-offs, and avoid reporting a number without context.',
    example:
      'In welding defect detection, high recall (92.7%) was intentionally prioritized over raw precision (74.7%) because a missed defect in fabrication carries far worse consequences than a false positive.',
  },
  {
    number: '05',
    title: 'Iterate from real feedback',
    summary:
      'Run the application, inspect behavior, and refine the parts that are confusing or unreliable.',
    example:
      'Adding Tavily web search fallback occurred after observing that ChromaDB retrieval alone yielded low confidence on rapidly evolving medical inquiries outside the static 2,000-document NIH dataset.',
  },
];
