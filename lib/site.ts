import { SiteConfig, SkillCategory, EngineeringPrinciple } from './types';

export const siteConfig: SiteConfig = {
  name: 'Manoj',
  fullName: 'Manoj Chary Bhuvanagiri',
  title: 'Manoj Chary — Software Developer',
  role: 'Software Developer',
  tagline: 'I build software that turns complex problems into useful products.',
  subheadline:
    "I'm Manoj, a Computer Science and Engineering student focused on building dependable software—from clear user interfaces and backend APIs to systems that connect services, data, and intelligent capabilities. I enjoy working across the stack, understanding how the pieces fit together, and solving the practical problems that make software reliable in the real world.",
  aboutBio: [
    "I'm a Computer Science and Engineering student who enjoys building software end to end: shaping an idea, designing its components, connecting services, and refining the details that make it dependable.",
    'My projects have taken me through full-stack development, backend APIs, document-processing pipelines, databases, and applied machine learning. I care about practical engineering decisions—clear boundaries between services, useful interfaces, measurable behavior, and systems that are easier to understand and maintain.',
    "I'm continuing to deepen my foundations in software engineering, data structures and algorithms, databases, and system design while building projects that solve concrete problems.",
  ],
  status: 'Building full-stack systems, backend services, and practical applications',
  education: {
    degree: 'B.E.',
    field: 'Computer Science and Engineering',
    institution: 'Neil Gogte Institute of Technology, Hyderabad',
    dates: '2023–2027',
    cgpa: '7.8/10',
  },
  achievements: [
    {
      title: '3rd Place Winner',
      event: 'Sankalp Ideathon, Neil Gogte Institute of Technology',
      year: '2025',
    },
  ],
  certifications: [
    {
      name: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: 'April 2026',
    },
    {
      name: 'Data Fundamentals Badge',
      issuer: 'IBM SkillsBuild',
      date: 'April 2026',
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
    category: 'Programming Languages',
    description: 'Languages used in systems programming, backend services, and problem solving.',
    items: [
      { name: 'Java', context: 'Object-oriented programming, data structures & algorithms, Spring Boot' },
      { name: 'Python', context: 'FastAPI microservices, document pipelines, machine learning' },
      { name: 'C', context: 'Low-level systems programming & fundamental algorithmic concepts' },
      { name: 'SQL', context: 'Relational data modeling, querying, aggregations & schema design' },
      { name: 'JavaScript / TypeScript', context: 'Frontend development, Next.js, and Node.js backends' },
    ],
  },
  {
    category: 'Software Engineering Fundamentals',
    description: 'Core concepts applied across application architecture and system design.',
    items: [
      { name: 'Data Structures & Algorithms', context: 'Practical algorithm selection, complexity analysis, and problem solving' },
      { name: 'Object-Oriented Programming', context: 'Encapsulation, interfaces, component separation, clean code' },
      { name: 'REST APIs', context: 'Clear contracts, HTTP response codes, idempotency, validation' },
      { name: 'Backend Integration', context: 'Multi-service communication, error propagation, network resilience' },
      { name: 'Service-Oriented Architecture', context: 'Decoupling interface gateways from computation services' },
    ],
  },
  {
    category: 'Frontend & Backend',
    description: 'Frameworks and runtimes used to construct reliable web applications.',
    items: [
      { name: 'React', context: 'Component state lifecycle, hooks, asynchronous data loading' },
      { name: 'Spring Boot', context: 'Java API gateway, service routing, enterprise backend patterns' },
      { name: 'FastAPI', context: 'Python asynchronous APIs, request schema validation, model serving' },
      { name: 'Node.js & Express', context: 'REST backends, middleware pipelines, full-stack integration' },
      { name: 'Next.js', context: 'Server components, static page generation, responsive routing' },
    ],
  },
  {
    category: 'Data & Storage',
    description: 'Databases, vector stores, and content indexing systems.',
    items: [
      { name: 'SQL (Relational)', context: 'Query writing, index optimization, relational schemas' },
      { name: 'MongoDB', context: 'Document database persistence, collections, JSON document modeling' },
      { name: 'ChromaDB', context: 'Vector store for 2,000+ NIH medical references and similarity retrieval' },
      { name: 'FAISS', context: 'Dense similarity indexing for legal document question-answering' },
      { name: 'IPFS', context: 'Decentralized document addressing for credential verification architecture' },
    ],
  },
  {
    category: 'Applied AI & Machine Learning',
    description: 'Practical model evaluation, computer vision, and retrieval pipelines.',
    items: [
      { name: 'Retrieval-Augmented Generation (RAG)', context: 'Grounded retrieval pipelines, passage ranking, context injection' },
      { name: 'Transformers & Hugging Face', context: 'Pretrained language checkpoints (MiniLM, T5), model inference' },
      { name: 'PyTorch', context: 'Custom dataset pipelines, model evaluation, object detection' },
      { name: 'OpenCV', context: 'Image preprocessing, normalization, bounding box extraction' },
      { name: 'RetinaNet', context: 'Focal-loss object detection for structural defect localization' },
      { name: 'Model Evaluation', context: 'Precision, recall, F1, ROUGE evaluation, and trade-off analysis' },
    ],
  },
  {
    category: 'Tools & Platforms',
    description: 'Version control, containerization, and hosting platforms used in projects.',
    items: [
      { name: 'Git & GitHub', context: 'Branch management, code versioning, commit hygiene' },
      { name: 'Docker', context: 'Containerizing services for consistent multi-service deployment' },
      { name: 'Vercel', context: 'Frontend deployment and continuous integration' },
      { name: 'Hugging Face Spaces', context: 'Model demo hosting and inference environments' },
      { name: 'Render', context: 'Backend web service deployment and hosting' },
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
