import { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'verifiable-credentials',
    title: 'Verifiable Academic/Professional Credential Platform',
    tagline: 'A decentralized credential platform verifying certificate integrity and issuer accreditation status at issuance time.',
    shortDescription:
      'Designing a blockchain-based platform to verify not just certificate integrity but issuer legitimacy — whether the issuing institution was accredited at time of issuance — addressing a gap in existing tamper-evidence-only systems.',
    overview:
      'Designing a blockchain-based platform to verify not just certificate integrity but issuer legitimacy — whether the issuing institution was accredited at time of issuance — addressing a gap in existing tamper-evidence-only systems. Architecting around live-synced accreditation status, multi-signature issuer keys, and support for India\'s multi-regulator landscape (UGC, AICTE, NCVET, state boards), building on gaps identified in the IEEE ElimuChain system.',
    category: 'Platform design · Blockchain · In progress',
    statusBadge: 'In Progress',
    featuredOrder: 1,
    tags: {
      primary: ['Blockchain', 'Solidity', 'IPFS'],
      secondary: ['Smart Contracts', 'Decentralized Storage', 'Multi-Regulator Design'],
    },
    diagramType: 'credentials',
    diagramCaption:
      'Figure 1: Planned decentralized architecture linking certificate verification with institutional regulatory accreditation tracking.',
    sections: {
      problem: {
        title: 'The Challenge: Beyond Document Tampering to Institutional Legitimacy',
        content: [
          'Existing digital verification platforms confirm whether a certificate hash matches a blockchain record, preventing post-issuance tampering.',
          'However, fraudulent or unaccredited institutions can still issue cryptographically valid certificates. Verifying the document itself does not answer whether the issuing university was licensed or accredited at the exact time of issuance.',
          'In India, academic and vocational accreditation spans multiple regulatory bodies—including UGC, AICTE, NCVET, and individual state boards—making centralized manual verification slow and fragmented.',
        ],
      },
      approach: {
        title: 'Architectural Concept & Multi-Tier Verification Design',
        content: [
          'The planned design explores linking certificate hashing with institutional regulatory registry contracts to provide synchronized two-tier verification.',
        ],
        subsections: [
          {
            subtitle: '1. Two-Tier Verification Model',
            points: [
              'Tier 1 (Document Integrity): Storing cryptographic hashes of student certificates and metadata on IPFS and smart contracts.',
              'Tier 2 (Issuer Authority): Smart contracts tracking institutional accreditation status timestamps to verify that the issuer held active regulatory standing when the credential was signed.',
            ],
          },
          {
            subtitle: '2. Multi-Signature Authority Keys',
            points: [
              'Exploring multi-signature key architecture requiring institutional registrars and departmental signatories to sign credentials.',
              'Designing role-based smart contracts accommodating diverse regulatory bodies across higher education and technical vocational boards.',
            ],
          },
        ],
      },
      architecture: {
        title: 'Planned Architecture & Data Flow',
        content: [
          'The proposed design utilizes Ethereum/Solidity smart contracts for registry logic, IPFS for content-addressed decentralized storage of encrypted credential transcripts, and a web verification portal allowing employers to verify certificates instantly with a single hash query.',
        ],
      },
      decisions: {
        title: 'Key Design Considerations',
        content: [
          'Accreditation Timestamping: Modeling accreditation as a time-indexed state so revoked accreditations do not retroactively invalidate legitimately earned prior degrees, while preventing unauthorized backdated issuance.',
          'Decentralized IPFS Storage vs. On-Chain Blobs: Storing raw certificate PDF transcripts on IPFS keeps blockchain gas costs minimal while retaining cryptographic content-addressing guarantees.',
        ],
      },
      limitations: {
        title: 'Current Status & Boundary Conditions',
        content: [
          'This project is currently in the design and architecture phase. Smart contract schemas and regulatory mapping are being iteratively evaluated.',
          'The platform is an architectural proposal; it is not yet deployed as a live government or institutional service.',
        ],
      },
      lessons: {
        title: 'Architectural Insights',
        content: [
          'Real-world verification requires modeling organizational trust networks, not just cryptography: verifying who had the legal authority to sign is as vital as verifying that the file was not altered.',
        ],
      },
    },
  },
  {
    slug: 'medical-response-verification',
    title: 'Hallucination Detection in Medical LLMs',
    tagline: 'Checking claims in medical LLM responses against trusted sources and highlighting potential hazards.',
    shortDescription:
      'Three-stage agentic AI pipeline for extracting and verifying claims from LLM responses against trusted medical sources, with claim-level danger scoring (LOW, MEDIUM, HIGH, CRITICAL) and corrective output.',
    overview:
      'Three-stage agentic AI pipeline for extracting and verifying claims from LLM responses against trusted medical sources, with claim-level danger scoring (LOW, MEDIUM, HIGH, CRITICAL) and corrective output. ChromaDB indexing 2,000+ NIH MedQuAD documents, with Tavily real-time web search as a fallback when retrieval confidence is low, citing NHS, WHO and FDA sources. Microservices architecture with React on Vercel, Spring Boot API gateway on Render, and Python/FastAPI ML service on Hugging Face Spaces. Resolution of the HTTP/2 versus HTTP/1.1 protocol mismatch between Java HttpClient and uvicorn.',
    category: 'Full-stack application · Service integration · Applied AI',
    statusBadge: 'Deployed & Live (2026)',
    featuredOrder: 2,
    tags: {
      primary: ['React', 'FastAPI', 'Spring Boot', 'ChromaDB', 'Groq', 'Tavily'],
      secondary: ['Java', 'Python', 'Multi-Service Integration', 'RAG'],
    },
    metrics: [
      {
        label: 'Reference Corpus',
        value: '2,000+ NIH Docs',
        context: 'MedQuAD medical question-answer pairs indexed in ChromaDB',
      },
      {
        label: 'Architecture',
        value: '3 Integrated Services',
        context: 'React client + Spring Boot API Gateway + FastAPI verification engine',
      },
    ],
    disclaimer:
      'This platform is an educational software engineering project. It does not provide medical diagnoses, treatment recommendations, or clinical judgment. Risk labels are algorithmic outputs designed to assist review, not certified medical advice.',
    diagramType: 'medical',
    diagramCaption:
      'Figure 2: Multi-service architecture showing React frontend, Spring Boot API gateway, FastAPI claim verification engine, ChromaDB vector store, and Tavily fallback search.',
    links: {
      demo: 'https://hallucination-detector-three.vercel.app',
    },
    sections: {
      problem: {
        title: 'The Challenge: Unverified Clinical Claims in Generative AI',
        content: [
          'Patients and researchers frequently query language models for symptoms, drug interactions, and clinical protocols. Because generative models optimize for plausible next tokens rather than factual grounding, incorrect dosages or contraindications can be presented with high confidence.',
          'Checking an entire paragraph in a single prompt often fails because models evaluate the overall tone rather than auditing each specific medical assertion.',
          'The goal was to design an end-to-end system that decomposes medical responses into atomic testable assertions, independently evaluates each assertion against trusted clinical corpora, and surfaces transparent risk indicators to the user.',
        ],
      },
      approach: {
        title: 'System Architecture & Claim Verification Pipeline',
        content: [
          'The application is architected across three decoupled services to separate user interaction, API routing, and compute-heavy verification logic.',
        ],
        subsections: [
          {
            subtitle: '1. Multi-Service Infrastructure',
            points: [
              'Frontend: Built with React for responsive query submission, interactive claim risk visualization, and citation inspection.',
              'API Gateway: Implemented in Java with Spring Boot to handle client requests, rate limiting, and route coordination.',
              'Verification Microservice: Built with Python and FastAPI to run claim extraction, vector similarity search, and synthesis.',
            ],
          },
          {
            subtitle: '2. Retrieval & Hybrid Fallback Engine',
            points: [
              'Indexed 2,000+ trusted NIH MedQuAD documents into a ChromaDB vector database using dense embeddings.',
              'Integrated Groq-hosted language models for high-throughput claim segmentation and contradiction detection.',
              'Configured Tavily search API as an automatic web retrieval fallback when ChromaDB similarity confidence scores drop below threshold.',
            ],
          },
        ],
      },
      architecture: {
        title: 'Engineering Focus: Cross-Service Integration & Protocol Compatibility',
        content: [
          'A key technical challenge arose when connecting the Spring Boot gateway to the Python FastAPI microservice: an HTTP/2 versus HTTP/1.1 protocol mismatch between the Java HttpClient implementation and Uvicorn caused intermittent socket hangups under concurrent requests.',
          'Resolving this required configuring explicit HTTP/1.1 connection pooling in the Java client and harmonizing request timeouts across the service boundary.',
          'The resulting architecture provides strict boundary separation: the frontend never communicates directly with the Python inference microservice, protecting internal endpoints and allowing each tier to scale independently.',
        ],
      },
      decisions: {
        title: 'Key Engineering Decisions & Trade-Offs',
        content: [
          'Atomic Claim Extraction vs. Whole-Document Critique: Evaluating individual sentences independently avoids false-positive passes where a dangerous claim is buried in an otherwise accurate paragraph.',
          'ChromaDB Local Vector Index + Tavily Search Fallback: A static 2,000-document NIH dataset provides fast, zero-latency local checks, while Tavily fallback ensures queries on newer medical treatments do not fail silently.',
          'Spring Boot API Gateway: Chose Spring Boot as the front-facing gateway to demonstrate polyglot backend integration, robust request validation, and enterprise service separation.',
        ],
      },
      limitations: {
        title: 'Known Constraints & Boundary Conditions',
        content: [
          'Corpus Scope: The local index covers 2,000+ MedQuAD documents, which does not cover all specialized rare disease guidelines or pediatric dosages.',
          'Web Search Latency: When fallback retrieval triggers via Tavily, total response latency increases noticeably compared to in-memory ChromaDB lookups.',
          'No Clinical Guarantee: Algorithmic claim extraction can occasionally misclassify nuanced contextual statements; output must remain an assistive review aid rather than certified advice.',
        ],
      },
      lessons: {
        title: 'Key Takeaways & Engineering Lessons',
        content: [
          'Multi-service systems surface protocol edge cases: Testing interactions across different runtime ecosystems (Java JVM and Python ASGI) requires explicit contract verification, header handling, and connection pooling.',
          'Transparent citations build trust: Highlighting exactly which reference sentence supports or refutes a claim gives users direct verification capability, rather than requiring blind trust in a score.',
          'Grounding requires clear thresholds: Fallback mechanisms are essential when relying on static vector indices for domain-specific information retrieval.',
        ],
      },
    },
  },
  {
    slug: 'talqs',
    title: 'TALQS — Transformer-based Legal QA and Summarization System',
    tagline: 'Turning long judgments into searchable context, answering questions, and producing concise summaries.',
    shortDescription:
      'End-to-end RAG pipeline covering PDF extraction, cleaning, chunking, embeddings, FAISS retrieval, cross-encoder reranking and T5 multi-stage summarization.',
    overview:
      'End-to-end RAG pipeline covering PDF extraction, cleaning, chunking, embeddings, FAISS retrieval, cross-encoder reranking and T5 multi-stage summarization. Evaluated on the BillSum dataset (approximately 18K samples) and SQuAD 2.0 (approximately 150K question-answer pairs), reporting 85% summarization quality (ROUGE-based) and 88% QA accuracy. Optimized chunking and FAISS indexing, with cross-encoder reranking to improve answer relevance.',
    category: 'Document processing · Search and retrieval · Backend pipeline',
    statusBadge: 'Evaluated Prototype (2025)',
    featuredOrder: 3,
    tags: {
      primary: ['Transformers', 'FAISS', 'MiniLM', 'T5', 'Flask'],
      secondary: ['Python', 'PyMuPDF', 'PyTorch', 'Vector Search'],
    },
    metrics: [
      {
        label: 'QA Accuracy',
        value: '88% Reported',
        context: 'Evaluated during model development with SQuAD 2.0 (150K QA pairs)',
      },
      {
        label: 'Summarization',
        value: '85% ROUGE-based',
        context: 'Reported evaluation metric using BillSum dataset (18K samples)',
      },
    ],
    disclaimer:
      'This project is an exploratory software study. It does not provide legal advice, statutory interpretation, or representation. It is not a substitute for consultation with a qualified legal professional.',
    diagramType: 'talqs',
    diagramCaption:
      'Figure 3: Ingestion, dense embedding, FAISS indexing, cross-encoder reranking, and sequence-to-sequence generation pipeline.',
    links: {
      demo: 'https://huggingface.co/spaces/manoj1454/TALQS',
    },
    sections: {
      problem: {
        title: 'The Challenge: Navigating Unstructured Legal Corpora',
        content: [
          'Judicial decisions are delivered as multi-page, non-standardized PDFs characterized by multi-column layouts, footnotes, statutory citations, and procedural history before reaching the substantive ruling.',
          'Standard off-the-shelf generative models struggle when given entire legal rulings directly: input context windows truncate critical facts, and generation without strict grounding leads to confident citations of non-existent precedents.',
          'The goal was to construct a robust pipeline capable of parsing complex PDF text streams cleanly, partitioning sections into semantically cohesive passages, retrieving relevant paragraphs based on natural queries, and synthesizing grounded summaries.',
        ],
      },
      approach: {
        title: 'Pipeline Architecture & Multi-Stage Processing',
        content: [
          'The project decomposes document assistance into discrete stages: PDF text extraction, sliding window chunking, dense vector indexing, cross-encoder candidate reranking, and conditioned generation.',
        ],
        subsections: [
          {
            subtitle: '1. Ingestion & Document Segmentation',
            points: [
              'Used PyMuPDF (fitz) to extract text streams while filtering header/footer noise, page numbers, and artifact margins.',
              'Implemented sliding window chunking with semantic overlap (250–400 tokens with 50-token stride) to prevent splitting pivotal legal citations across arbitrary character boundaries.',
            ],
          },
          {
            subtitle: '2. Dense Vector Indexing & Candidate Retrieval',
            points: [
              'Embedded extracted passages using MiniLM pretrained sentence transformers fine-tuned for semantic similarity.',
              'Indexed vectors in FAISS (Facebook AI Similarity Search) for low-latency cosine similarity retrieval across high-dimensional embeddings.',
            ],
          },
          {
            subtitle: '3. Reranking & T5 Summarization',
            points: [
              'Applied a cross-encoder to rerank candidate passages, mitigating dense retrieval noise before passing context to the generator.',
              'Passed conditioned excerpts into sequence-to-sequence T5 models trained on the BillSum legal dataset (18K samples) and SQuAD 2.0 (150K pairs) for multi-stage summary synthesis.',
            ],
          },
        ],
      },
      architecture: {
        title: 'Engineering Focus: PDF Ingestion & Latency-Aware Indexing',
        content: [
          'The architecture maintains clean boundaries between offline document preparation and online query answering. Ingestion parses and vectors document sections ahead of time into serialized FAISS indices with mapped paragraph metadata.',
          'Online query execution maps incoming user inquiries into the embedding space, executes similarity lookup, reranks top results, and passes grounded context to the generation model served through a Flask web interface.',
        ],
      },
      decisions: {
        title: 'Key Engineering Decisions & Trade-Offs',
        content: [
          'Paragraph-Aware Chunking: Preserved natural paragraph breaks rather than arbitrary character slicing, preventing the severance of statutory section references from their substantive context.',
          'Dense Retrieval vs. Pure Lexical Search: Dense embeddings better matched colloquial user questions (e.g. "what were the bail conditions?") against formal statutory phrasing.',
          'Local Inference Constraints: Selected compact MiniLM and T5 checkpoints to balance inference latency, GPU memory footprint, and summarization coherence.',
        ],
      },
      limitations: {
        title: 'Known Constraints & Boundary Conditions',
        content: [
          'Scanned Document Quality: Native text PDFs are required for dependable parsing; scanned filings with low-resolution OCR degrade chunk extraction accuracy.',
          'ROUGE Metric Context: The reported 85% ROUGE-based quality is an n-gram overlap benchmark on training sets, not a metric of human legal correctness.',
          'Generative Attribution: While retrieval isolates relevant sections, abstractive models can occasionally blend petitioner claims with court holdings if both appear in the retrieved excerpt.',
        ],
      },
      lessons: {
        title: 'Key Takeaways & Engineering Lessons',
        content: [
          'Text preprocessing determines downstream quality: High-quality chunk extraction and margin cleanup improve retrieval precision far more than simply upgrading model size.',
          'Grounded citations are non-negotiable: Every generated sentence should map directly to verified chunk indices so readers can inspect the source judgment.',
        ],
      },
    },
  },
  {
    slug: 'welding-defect-detection',
    title: 'Welding Defect Detection',
    tagline: 'Automated defect localization on industrial weld images with PyTorch and Flask.',
    shortDescription:
      'RetinaNet selected over YOLO for its focal loss mechanism to handle class imbalance, with an OpenCV preprocessing pipeline for normalization and bounding-box handling across a 2.4K-image dataset.',
    overview:
      'RetinaNet selected over YOLO for its focal loss mechanism to handle class imbalance, with an OpenCV preprocessing pipeline for normalization and bounding-box handling across a 2.4K-image dataset. Precision: 74.7%, Recall: 92.7%, F1-score: 82.7%, with a deliberate emphasis on high recall to minimize missed defects in safety-critical environments. Real-time Flask detection interface deployed on Hugging Face Spaces, including work to address model-size constraints for deployment.',
    category: 'Computer vision · Model deployment',
    statusBadge: 'Evaluated Model Demo (2024)',
    featuredOrder: 4,
    tags: {
      primary: ['RetinaNet', 'PyTorch', 'OpenCV', 'Flask', 'Hugging Face'],
      secondary: ['Object Detection', 'Computer Vision', 'Model Evaluation'],
    },
    metrics: [
      {
        label: 'Recall',
        value: '92.7%',
        context: 'Prioritizing defect capture to minimize missed industrial flaws',
      },
      {
        label: 'Precision',
        value: '74.7%',
        context: 'Trade-off accepted to avoid dangerous false negatives',
      },
      {
        label: 'F1-Score',
        value: '82.7%',
        context: 'Harmonic mean across balanced evaluation test splits',
      },
    ],
    disclaimer:
      'This software is an experimental computer-vision prototype. It is not certified for industrial safety inspection, non-destructive testing (NDT), or regulatory compliance.',
    diagramType: 'welding',
    diagramCaption:
      'Figure 4: Radiographic image normalization, RetinaNet focal loss bounding box proposal, and Flask inference serving.',
    links: {
      demo: 'https://huggingface.co/spaces/manoj1454/welding-defect-detection',
    },
    sections: {
      problem: {
        title: 'The Challenge: Class Imbalance in Defect Localization',
        content: [
          'Manual inspection of radiographic weld images is labor-intensive and subject to inspector fatigue across thousands of frames.',
          'In real inspection datasets, defect-free weld areas vastly outnumber defect regions (class imbalance). Standard two-stage detectors often generate excessive candidate proposals that overwhelm rare flaw signals.',
          'The goal was to build a dependable detection pipeline that prioritizes catching defects (high recall) on a 2.4K-image dataset while running inference through a clean web interface.',
        ],
      },
      approach: {
        title: 'Model Selection & OpenCV Preprocessing Pipeline',
        content: [
          'Constructed an image pipeline handling normalization, aspect ratio preserving resizing, and data augmentation before feeding samples to the object detector.',
        ],
        subsections: [
          {
            subtitle: '1. Image Preprocessing with OpenCV',
            points: [
              'Normalized pixel intensities and enhanced radiographic contrast to highlight subtle edge fractures and porosity pits.',
              'Applied bounding-box transformations ensuring coordinates remain consistent across scaled training resolutions.',
            ],
          },
          {
            subtitle: '2. RetinaNet & Focal Loss',
            points: [
              'Selected RetinaNet with a ResNet-FPN backbone for its focal loss function, which dynamically down-weights easy background samples and focuses learning on hard defect candidates.',
              'Tuned detection confidence thresholds to intentionally balance recall against precision.',
            ],
          },
          {
            subtitle: '3. Model Serving & Deployment',
            points: [
              'Packaged the trained PyTorch inference graph into a lightweight Flask backend.',
              'Deployed the application to Hugging Face Spaces with an interactive file upload and bounding-box overlay viewer.',
            ],
          },
        ],
      },
      architecture: {
        title: 'Engineering Focus: Evaluation Trade-Offs & Threshold Tuning',
        content: [
          'In safety-critical fabrication, a false negative (missing a crack) is far more dangerous than a false positive (flagging an area for manual re-check).',
          'Consequently, detection confidence thresholds were tuned to achieve 92.7% recall, accepting a precision of 74.7% and yielding an F1-score of 82.7% across evaluation test splits.',
        ],
      },
      decisions: {
        title: 'Key Engineering Decisions',
        content: [
          'Focal Loss over Cross-Entropy: Focal loss prevented the vast background regions of sound weld metal from overwhelming the gradient during training.',
          'Recall Prioritization: Intentionally calibrated thresholds so the model errs on the side of flagging borderline anomalies for human review.',
          'Lightweight Web Deployment: Wrapped inference into Flask to make the model immediately interactive for testing without complex infrastructure.',
        ],
      },
      limitations: {
        title: 'Known Constraints & Boundary Conditions',
        content: [
          'Dataset Coverage: Model trained on a 2.4K-image dataset; novel welding methods or radically different radiographic lighting may require fine-tuning.',
          'Precision Trade-Off: High recall causes occasional false alarms on severe surface roughness or slag residue.',
        ],
      },
      lessons: {
        title: 'Key Takeaways & Engineering Lessons',
        content: [
          'Evaluation metrics must reflect domain risks: Tuning for accuracy alone is meaningless when false negatives carry severe consequences.',
          'Preprocessing directly impacts vision detection: Proper contrast normalization and clean bounding-box scaling are as influential as backbone architecture.',
        ],
      },
    },
  },
  {
    slug: 'movie-review-system',
    title: 'Movie Review System',
    tagline: 'A web application for browsing and managing movie reviews built to practice full-stack data persistence.',
    shortDescription:
      'A supporting full-stack project built to practice frontend and backend integration, structured application state, REST endpoints, and database persistence.',
    overview:
      'The Movie Review System is a supporting full-stack web application built to practice core software development patterns: component-based user interfaces, RESTful API endpoint routing, structured JSON validation, and document database persistence using a MERN-style stack (React, Node.js/Express, MongoDB).',
    category: 'Full-stack web application · Supporting project',
    statusBadge: 'Supporting Project',
    featuredOrder: 5,
    tags: {
      primary: ['React', 'Node.js', 'Express', 'MongoDB'],
      secondary: ['REST APIs', 'Full-Stack Web Development'],
    },
    diagramType: 'moviereview',
    diagramCaption:
      'Figure 5: Client component hierarchy, Express REST endpoints, and MongoDB document collection persistence.',
    sections: {
      problem: {
        title: 'The Objective: Clean Full-Stack CRUD & Data Flow',
        content: [
          'Building reliable web software requires mastering the complete cycle of data movement: capturing user inputs, validating requests on the backend, persisting structured records to a database, and updating the client interface.',
          'The goal was to build a clean full-stack application to practice RESTful API contracts, asynchronous state management, and schema-based document persistence.',
        ],
      },
      approach: {
        title: 'Application Structure & Technology Stack',
        content: [
          'The application connects a React single-page frontend to a Node.js and Express backend backed by MongoDB.',
        ],
        subsections: [
          {
            subtitle: '1. Frontend Interface',
            points: [
              'Built reusable React components for movie browsing, review form submissions, and score displays.',
              'Handled asynchronous fetch lifecycles with loading indicators and error states.',
            ],
          },
          {
            subtitle: '2. Express REST API',
            points: [
              'Designed RESTful endpoints for querying movies and posting new review records.',
              'Implemented request validation middleware to sanitize user inputs before database execution.',
            ],
          },
          {
            subtitle: '3. MongoDB Persistence',
            points: [
              'Structured document schemas linking movie entities with user review entries.',
              'Practiced indexing and query filtering across movie genres and titles.',
            ],
          },
        ],
      },
      architecture: {
        title: 'Data Flow & API Contracts',
        content: [
          'Client interactions trigger asynchronous HTTP requests to Express router endpoints. Express validates payloads, invokes database query methods via the driver, and returns standardized JSON responses to the frontend view.',
        ],
      },
      decisions: {
        title: 'Key Practice Decisions',
        content: [
          'Decoupled Client & Server: Maintained strict separation between client-side bundle and backend API routes to practice standard API-driven architecture.',
          'Explicit Validation: Validated payloads server-side rather than relying solely on client-side form controls.',
        ],
      },
      limitations: {
        title: 'Current Project Scope',
        content: [
          'This is a supporting student project built for foundational full-stack practice; it does not implement commercial authentication or complex recommendation algorithms.',
        ],
      },
      lessons: {
        title: 'Key Takeaways',
        content: [
          'End-to-end data predictability is fundamental: Designing clear JSON request/response formats and error status codes makes full-stack development significantly easier to debug and maintain.',
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
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

  return { prev, next };
}
