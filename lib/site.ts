import { SiteConfig, SkillCategory, EngineeringPrinciple } from './types';

export const siteConfig: SiteConfig = {
  name: 'Manoj',
  title: 'Manoj — Software Engineering & Applied ML',
  role: 'Computer Science · Software + Applied ML',
  tagline: 'I build software, then keep making it better.',
  subheadline:
    "I'm a computer science student interested in building reliable software across full-stack development and applied machine learning. I care about how data flows through a system, how models handle edge cases, and how the user interface responds.",
  status: 'Exploring full-stack systems and applied computer vision & NLP',
  education: {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    expectedGraduation: 'Expected 2027',
  },
  navigation: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Toolkit', href: '/#toolkit' },
    { label: 'Principles', href: '/#principles' },
    { label: 'Contact', href: '/#contact' },
  ],
  verifiedSocials: [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Manoj_chary/',
      ariaLabel: 'Manoj on LeetCode (opens in new tab)',
    },
  ],
  pendingSocials: [
    {
      name: 'GitHub',
      description: 'Profile URL pending owner configuration in lib/site.ts',
    },
    {
      name: 'LinkedIn',
      description: 'Profile URL pending owner configuration in lib/site.ts',
    },
    {
      name: 'Email',
      description: 'Direct email address pending owner configuration in lib/site.ts',
    },
    {
      name: 'Resume',
      description: 'Resume document link pending owner configuration in lib/site.ts',
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages used in systems, algorithms, and application backends.',
    items: [
      { name: 'Python', context: 'Primary language for ML, scripting & Flask backends' },
      { name: 'Java', context: 'Object-oriented programming, data structures & algorithms' },
      { name: 'C', context: 'Systems programming & algorithmic fundamentals' },
      { name: 'SQL', context: 'Relational data querying & schema design' },
      { name: 'JavaScript / TypeScript', context: 'Modern web interface & API development' },
    ],
  },
  {
    category: 'Full-Stack Web Development',
    description: 'Frameworks and runtimes used to build structured web interfaces and APIs.',
    items: [
      { name: 'React', context: 'Component composition, hooks, state lifecycle' },
      { name: 'Next.js', context: 'App Router, Server Components & static page generation' },
      { name: 'Flask', context: 'Lightweight REST APIs & model inference microservices' },
      { name: 'MongoDB', context: 'Document database modeling & aggregations' },
      { name: 'RESTful APIs', context: 'Contract design, request validation & status codes' },
    ],
  },
  {
    category: 'Computer Vision & Deep Learning',
    description: 'Frameworks and architectures explored in experimental and applied projects.',
    items: [
      { name: 'PyTorch', context: 'Model training pipelines, custom datasets & evaluators' },
      { name: 'torchvision', context: 'Pretrained backbones & image transformations' },
      { name: 'Object Detection', context: 'RetinaNet & ResNet-FPN feature extractors' },
      { name: 'scikit-learn', context: 'Feature preprocessing, metrics & baselines' },
      { name: 'OpenCV / PIL', context: 'Image normalization, augmentation & drawing bounding boxes' },
    ],
  },
  {
    category: 'NLP & Retrieval Systems',
    description: 'Tools and approaches used in document question-answering explorations.',
    items: [
      { name: 'Hugging Face Transformers', context: 'Pretrained sequence-to-sequence models' },
      { name: 'Sentence-Transformers', context: 'Dense vector embeddings for legal and prose texts' },
      { name: 'FAISS', context: 'Similarity search indexing over vector embeddings' },
      { name: 'PyMuPDF (fitz)', context: 'Document parsing, layout extraction & chunking' },
    ],
  },
  {
    category: 'Workflow & Engineering Hygiene',
    description: 'Everyday tooling for version control, debugging, and continuous work.',
    items: [
      { name: 'Git & GitHub', context: 'Branching, commit history & code collaboration' },
      { name: 'VS Code', context: 'Primary development environment & debugging' },
      { name: 'Linux / Unix CLI', context: 'Shell scripting, environment setup & process management' },
    ],
  },
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    number: '01',
    title: 'Make the problem concrete first',
    summary:
      'Identify the real input format, expected output, user constraints, and failure modes before deciding which library or model architecture to apply.',
    example:
      'In TALQS, examining messy Indian court judgments made clear that accurate PDF chunking and retrieval boundaries mattered far more than swapping out generation models prematurely.',
  },
  {
    number: '02',
    title: 'Prefer observable systems over opaque boxes',
    summary:
      'Build interfaces and logs that expose intermediate state, confidence scores, and raw inputs so unexpected behavior can actually be diagnosed.',
    example:
      'In the welding defect detector, returning bounding coordinates and per-class confidence thresholds allows operators to see why a candidate was flagged, rather than trusting a single boolean pass/fail.',
  },
  {
    number: '03',
    title: 'Measure the right thing, honestly',
    summary:
      'A single accuracy percentage or high training metric rarely tells the whole story. Distinguish train from validation splits, account for class imbalances, and document limitations.',
    example:
      'In real-world visual inspection, false negatives carry vastly different consequences than false positives. Optimizing an aggregate score without evaluating defect rarity leads to misleading confidence.',
  },
  {
    number: '04',
    title: 'Polish the last mile',
    summary:
      'The best logic fails if loading states flicker, errors fail silently, or keyboard navigation breaks. Edge states are not secondary polish; they define product stability.',
    example:
      'Handling invalid JSON payloads, network dropouts, empty queries, and responsive viewport reflows turns an experimental script into a dependable tool.',
  },
];
