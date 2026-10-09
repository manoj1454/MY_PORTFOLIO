import { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'talqs',
    title: 'TALQS — Legal Question Answering & Summarization',
    tagline: 'An exploratory retrieval-augmented assistant for legal judgments and statutory PDFs.',
    shortDescription:
      'A legal-document assistant exploring dense retrieval and sequence-to-sequence summarization over multi-page judicial texts.',
    overview:
      'Legal texts in common-law jurisdictions are notoriously dense, frequently spanning dozens of pages with complex citations, procedural history, and archaic terminology. TALQS is an educational software project built to explore how retrieval-augmented generation (RAG) and transformer-based summarization can help readers navigate lengthy judicial rulings and statutory documents without losing context.',
    statusBadge: 'Research & Prototype Phase',
    featuredOrder: 1,
    tags: {
      primary: ['Python', 'Sentence-Transformers', 'FAISS', 'PyMuPDF', 'Transformers'],
      secondary: ['Flask', 'PyTorch', 'Vector Search', 'Text Chunking'],
    },
    disclaimer:
      'This project is an exploratory software and machine-learning study. It does not provide legal advice, statutory interpretation, or representation. It is not a substitute for consultation with a qualified legal professional.',
    diagramType: 'talqs',
    diagramCaption:
      'Figure 1: High-level architectural pipeline for document ingestion, dense chunk indexing, similarity retrieval, and conditioned generation.',
    sections: {
      problem: {
        title: 'The Challenge: Navigating Unstructured Legal Corpora',
        content: [
          'Judicial decisions are frequently delivered as non-standardized PDF documents characterized by erratic multi-column formatting, footnotes, statutory citations, and procedural recitals before reaching the substantive holding.',
          'Standard off-the-shelf generative models struggle when given entire legal rulings directly: input context windows truncate critical facts, and generation without strict grounding frequently leads to confident citations of non-existent precedents (hallucinations).',
          'The objective was to explore an end-to-end pipeline capable of parsing Indian court PDFs cleanly, partitioning sections into semantically cohesive passages, retrieving relevant paragraphs based on natural queries, and synthesizing grounded summaries.',
        ],
      },
      approach: {
        title: 'Exploration & Pipeline Architecture',
        content: [
          'Rather than relying on generic full-text search or feeding arbitrary text into a model, the project focuses on decomposing the problem into discrete stages: structured ingestion, dense embedding generation, vector similarity indexing, and conditioned generation.',
        ],
        subsections: [
          {
            subtitle: '1. Ingestion & Document Segmentation',
            points: [
              'Used PyMuPDF (fitz) to extract text streams while filtering header/footer noise, page numbers, and artifact margins.',
              'Implemented sliding window chunking with semantic overlap (e.g., 250–400 tokens with 50-token stride) to prevent splitting pivotal legal arguments across arbitrary boundaries.',
            ],
          },
          {
            subtitle: '2. Dense Vector Indexing with FAISS',
            points: [
              'Embedded extracted text passages using pretrained Sentence-Transformers models fine-tuned on semantic similarity tasks.',
              'Indexed vectors with FAISS (Facebook AI Similarity Search) to enable low-latency cosine/inner-product similarity search over high-dimensional embeddings.',
            ],
          },
          {
            subtitle: '3. Grounded Retrieval & Summarization',
            points: [
              'When a user queries the system, the question is mapped into the shared latent space, retrieving top-k most relevant candidate excerpts.',
              'Passed candidate chunks as conditioning context into sequence-to-sequence transformer models (such as T5 or Pegasus checkpoints) to produce answer syntheses or section-by-section summaries.',
            ],
          },
        ],
      },
      architecture: {
        title: 'System Architecture & Data Flow',
        content: [
          'The pipeline is structured with clean boundaries between offline document indexing and online query servicing. Offline indexing converts raw PDF filings into vectorized FAISS indices with mapped document metadata. Online query processing executes vector similarity queries and serves retrieved context to the generation layer.',
        ],
      },
      decisions: {
        title: 'Key Engineering Decisions & Trade-Offs',
        content: [
          'Chunk Boundary Strategy: Decided to preserve paragraph breaks rather than arbitrary character slicing. Arbitrary splits frequently severed citations (e.g., "v." or section numbers) from their legal context.',
          'Dense Retrieval vs. BM25: Explored dense embeddings over purely lexical BM25 because legal inquiries often use colloquial questions (e.g., "what was the bail condition?") that differ from the formal statutory phrasing used in the judgment text.',
          'Model Sizing Constraints: Evaluated smaller encoder-decoder checkpoints locally versus heavier architectures. Prioritized reproducibility and moderate GPU memory footprints during local experimentation.',
        ],
      },
      limitations: {
        title: 'Known Constraints & Boundary Conditions',
        content: [
          'Scanned or Watermarked PDFs: OCR accuracy degrades substantially on low-resolution scanned historical judgments; clean native PDF text is currently required for dependable parsing.',
          'Domain-Specific Legal Jargon: Standard sentence-transformers are trained predominantly on general web text (MS MARCO, Wikipedia), which sometimes underweights subtle distinctions between judicial terms of art.',
          'Context Synthesis Limits: While retrieval narrows down relevant sections, generative models can still misattribute party claims as court rulings if the extracted chunk contains counter-arguments.',
        ],
      },
      lessons: {
        title: 'Key Takeaways & Future Directions',
        content: [
          'Chunking quality dominates model choice: In retrieval-augmented systems, poor text parsing and clumsy chunk boundaries degrade performance far more quickly than swapping between comparable language models.',
          'Citation verification is non-negotiable: Every generated claim must cite back to the exact chunk and paragraph index so the human user can directly verify the source judgment.',
          'Future work: Incorporating hybrid search (sparse BM25 + dense FAISS) and specialized legal-domain embeddings fine-tuned on Indian Kanoon corpora.',
        ],
      },
    },
  },
  {
    slug: 'welding-defect-detection',
    title: 'Welding Defect Detection System',
    tagline: 'Automated defect localization on industrial weld images with PyTorch and Flask.',
    shortDescription:
      'A computer-vision project exploring automated detection and bounding-box localization of welding flaws using PyTorch object detection models.',
    overview:
      'In structural fabrication and pipeline engineering, undetected welding flaws—such as porosity, cracks, lack of fusion, and slag inclusions—can lead to catastrophic mechanical failures. This project explores the use of convolutional neural networks and object-detection architectures to automate the inspection of weld imagery, providing bounding-box proposals and confidence scores through a lightweight web interface.',
    statusBadge: 'Experimental Model & API',
    featuredOrder: 2,
    tags: {
      primary: ['PyTorch', 'torchvision', 'RetinaNet', 'Flask', 'Computer Vision'],
      secondary: ['ResNet-50-FPN', 'OpenCV', 'PIL', 'Anchor Boxes'],
    },
    disclaimer:
      'This project represents an academic and experimental investigation into vision-based defect localization. It is not certified for industrial safety inspection, ISO compliance, or automated manufacturing sign-offs.',
    diagramType: 'welding',
    diagramCaption:
      'Figure 2: Pipeline from raw weld image input through multi-scale feature extraction, anchor evaluation, non-maximum suppression, and Flask inference response.',
    sections: {
      problem: {
        title: 'The Inspection Problem: Scale, Contrast & Defect Diversity',
        content: [
          'Manual non-destructive testing (NDT) of weld radiographs and surface seams is time-consuming, prone to inspector fatigue, and subject to subjective thresholding.',
          'From a machine-vision perspective, welding defects present distinct challenges: defects often occupy only a few dozen pixels within high-resolution seams, have low visual contrast against surrounding molten metal, and vary wildly in aspect ratio (e.g., hairline cracks versus spherical gas pores).',
          'The goal was to construct a reproducible training and inference workflow using PyTorch that could take seam images, detect anomalous regions, output bounding boxes with class predictions, and serve inferences via an accessible API.',
        ],
      },
      approach: {
        title: 'Model Pipeline & Inference Service',
        content: [
          'Rather than treating defect detection as whole-image classification (which cannot tell an operator where the flaw is located), the project utilized an object-detection framework with multi-scale feature pyramids.',
        ],
        subsections: [
          {
            subtitle: '1. Model Backbone & Feature Pyramid Network',
            points: [
              'Experimented with RetinaNet featuring a ResNet-50 backbone with a Feature Pyramid Network (FPN) to handle multi-scale feature representations.',
              'The FPN enables the network to detect small visual anomalies (such as pinhole gas pores) at higher-resolution bottom levels while capturing extended seam boundaries at deeper levels.',
            ],
          },
          {
            subtitle: '2. Preprocessing & Data Pipeline',
            points: [
              'Standardized image normalization (mean and standard deviation scaling) and contrast adjustments via OpenCV/PIL.',
              'Applied geometric augmentations (random horizontal flips, scaling, slight rotations) to mitigate overfitting on limited visual samples.',
            ],
          },
          {
            subtitle: '3. Inference Serving with Flask',
            points: [
              'Constructed a lightweight Flask microservice accepting multipart image uploads.',
              'Implemented configurable confidence score filtering and Non-Maximum Suppression (NMS) to eliminate overlapping redundant candidate boxes before returning structured JSON and annotated image previews.',
            ],
          },
        ],
      },
      architecture: {
        title: 'Inference Architecture & Service Flow',
        content: [
          'The inference pipeline decouples preprocessing, GPU/CPU tensor evaluation, post-processing box decoders, and API response formatting. Uploaded images are validated, transformed into normalized tensors, passed through the model evaluation mode (`eval()`), filtered by IoU and confidence thresholds, and serialized.',
        ],
      },
      decisions: {
        title: 'Engineering Trade-Offs & Decisions',
        content: [
          'Object Detection over Semantic Segmentation: Full pixel-level mask segmentation requires intensive manual polygon annotations that were impractical with available resources. Bounding-box annotations struck the pragmatic balance between localization utility and dataset feasibility.',
          'Confidence Threshold Tuning: Set default inference filtering to retain candidate boxes above 0.50 score, while exposing threshold parameters in the API so users can inspect lower-confidence anomalies if safety requirements demand high recall.',
          'Decoupled Inference Interface: Wrapped the PyTorch checkpoint in a stateless Flask service rather than embedding it in a heavyweight framework, enabling rapid testing from both CLI scripts and browser frontends.',
        ],
      },
      limitations: {
        title: 'Evaluation Realities & Production Boundaries',
        content: [
          'Evaluation Honesty: Precise precision/recall and mAP numbers depend strictly on benchmark dataset splits and consistent lighting conditions; metrics evaluated under controlled conditions cannot be assumed to generalize directly to varied field welding environments.',
          'Lighting and Artifact Sensitivity: Extreme surface reflections, uneven weld spatter, or varying camera focal lengths can generate false positive detections along legitimate bead edges.',
          'Hardware Requirements: Running real-time inference at camera frame rates on edge hardware (e.g., embedded inspection cameras) requires model quantization or pruning, which was outside the initial prototype scope.',
        ],
      },
      lessons: {
        title: 'Key Takeaways & Next Steps',
        content: [
          'Visual inspection demands recall over precision: In quality assurance, missing a structural crack is vastly worse than flagging a false positive that an inspector quickly dismisses.',
          'Anchor box aspect ratios matter: Standard COCO anchor presets are optimized for people and cars; tuning anchor scale ratios specifically for elongated seam defects is essential for fast convergence.',
          'Next steps: Exploring model export to ONNX runtime for cross-platform inference speedup and collecting more varied radiographic samples under varying illumination.',
        ],
      },
    },
  },
  {
    slug: 'movie-review-system',
    title: 'Movie Review System',
    tagline: 'Full-stack application exploring structured reviews, ratings, and scalable data schemas.',
    shortDescription:
      'A full-stack web application exploring user reviews, media catalog queries, and responsive interfaces with React/Next.js and MongoDB.',
    overview:
      'Web applications that manage user-generated media critiques require careful coordination across schema design, optimistic frontend updates, server-side data validation, and clean RESTful API boundaries. This project explores the full lifecycle of a movie review system, focusing on user interaction, state management, and structured data persistence.',
    statusBadge: 'Full-Stack Implementation',
    featuredOrder: 3,
    tags: {
      primary: ['React / Next.js', 'MongoDB', 'REST APIs', 'Node.js', 'CSS Modules'],
      secondary: ['CRUD Workflows', 'Input Validation', 'Async Data Fetching'],
    },
    diagramType: 'moviereview',
    diagramCaption:
      'Figure 3: System layout illustrating client view orchestration, REST API routes, data validation middleware, and MongoDB document schemas.',
    sections: {
      problem: {
        title: 'The Challenge: Media Catalog & User Feedback Workflows',
        content: [
          'Building an engaging review platform involves more than displaying static lists of films. The application needs to handle dynamic search filtering, handle concurrent review submissions, prevent malformed or malicious inputs, and present responsive feedback across diverse screen dimensions.',
          'The goal was to implement a clean full-stack architecture that cleanly separates client presentation logic, API endpoint routing, and database schema persistence without unnecessary framework bloat.',
        ],
      },
      approach: {
        title: 'Technical Implementation & System Design',
        content: [
          'Designed around clean architectural tiers: a component-driven frontend providing intuitive review forms and instant feedback, coupled with structured backend services backed by MongoDB document collections.',
        ],
      },
      architecture: {
        title: 'Data Modeling & API Contract',
        content: [
          'Movies and Reviews are organized into flexible document collections. Movie documents hold metadata (title, release year, genre tags, synopsis, and aggregate score cache), while Review documents reference parent movie IDs with author signatures, rating values (1–10), narrative commentary, and timestamps.',
        ],
      },
      decisions: {
        title: 'Engineering Trade-Offs & Design Decisions',
        content: [
          'Document DB Schema Strategy: Chose MongoDB to accommodate flexible movie metadata attributes (varying directors, cast lists, external poster URLs) without requiring complex multi-table migrations during early prototyping.',
          'Validation at Both Tiers: Implemented client-side boundary checking for immediate user feedback on required fields, paired with strict backend validation to reject payloads violating length or range rules.',
          'Component Modularity: Deconstructed the UI into reusable atomic components—rating selectors, movie summary cards, review cards, and search inputs—ensuring consistent styling and predictable maintenance.',
        ],
      },
      limitations: {
        title: 'Known Boundaries & Honest Scope',
        content: [
          'Authentication Scope: Early prototype runs operated with lightweight session/mock credentials; production-grade OAuth or JWT token rotation with email verification remains an enhancement phase.',
          'Caching Layer: As database queries increase, adding a caching layer (e.g., Redis for top-rated films) would be necessary to prevent redundant database hits on high-traffic listing pages.',
          'Review Moderation: Currently relies on automated string length checks without profanity or spam filtering microservices.',
        ],
      },
      lessons: {
        title: 'Key Takeaways & Future Roadmap',
        content: [
          'API contract predictability saves frontend debugging: Clearly defining JSON error responses (with code, message, and error field) made UI error handling significantly more straightforward.',
          'State lifecycles require deliberate management: Ensuring that submitting a review immediately updates the local feed without forcing a full page reload taught valuable patterns in optimistic UI design.',
          'Next steps: Integrating external metadata APIs (e.g., TMDB) for automated poster population and implementing advanced aggregations for user taste profiling.',
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}
