import { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'erp-creative-studios',
    title: 'Project Workspace — ERP for Creative Studios',
    tagline: 'Full-stack B2B SaaS · Project Operations · Financial Workflows',
    shortDescription:
      'An integrated B2B platform for CRM, project execution, time tracking, versioned assets and financial workflows—built around relational integrity, role-based access and transactional consistency.',
    overview:
      'Project Workspace is a B2B SaaS platform designed for creative studios, including architecture, interior-design and game-development teams. It brings CRM, project execution, time tracking, asset versioning and financial workflows into a unified system, replacing fragmented workflows spread across spreadsheets, messaging tools and file-sharing platforms.',
    category: 'Full-stack B2B SaaS · Project Operations · Financial Workflows',
    statusBadge: 'Deployed & Live (2026)',
    featuredOrder: 1,
    tags: {
      primary: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'TanStack Query'],
      secondary: ['Neon', 'Zustand', 'Tailwind CSS', 'NextAuth.js', '@dnd-kit', 'Framer Motion'],
    },
    diagramType: 'erp',
    diagramCaption:
      'Figure 1: Full-stack Project Workspace architecture showing multi-role browser clients, Next.js Edge Middleware RBAC, TanStack Query optimistic mutations, Prisma ACID transactions, and Neon PostgreSQL persistence.',
    links: {
      demo: 'https://project-studio-erp.vercel.app/',
    },
    metrics: [
      {
        label: 'Database Schema',
        value: '14 Tables',
        context: '14 normalized PostgreSQL tables with cascading foreign keys',
      },
      {
        label: 'Perceived Latency',
        value: 'Immediate UI',
        context: 'Optimistic mutations with automated state rollback via TanStack Query v5',
      },
      {
        label: 'Financial Pipeline',
        value: 'Atomic ACID',
        context: 'Prisma interactive transactions preventing partial writes & double-billing',
      },
      {
        label: 'Perimeter Defense',
        value: 'Edge RBAC',
        context: 'Next.js Middleware validates JWT role claims before page rendering',
      },
    ],
    techStack: [
      {
        layer: 'Application Framework',
        technologies: 'Next.js 14 App Router',
        details: 'Server Actions, Route Handlers, Edge Middleware, and React Server Components for minimal client-bundle overhead.',
      },
      {
        layer: 'Language & Type System',
        technologies: 'TypeScript',
        details: 'End-to-end type safety spanning database models, server actions, API contracts, and client component props.',
      },
      {
        layer: 'User Interface & Styling',
        technologies: 'React, Tailwind CSS, shadcn/ui',
        details: 'Accessible, component-driven design system with consistent design tokens, dark/light themes, and responsive layouts.',
      },
      {
        layer: 'Animation & Motion',
        technologies: 'Framer Motion',
        details: 'Fluid micro-interactions, modal transitions, and the animated "Living Soul" entity login experience.',
      },
      {
        layer: 'Database & Connection Pooling',
        technologies: 'PostgreSQL on Neon',
        details: 'Managed serverless PostgreSQL backend with IPv4-compatible connection pooling, supporting 14 normalized relational tables.',
      },
      {
        layer: 'Object-Relational Mapping (ORM)',
        technologies: 'Prisma ORM',
        details: 'Type-safe query construction and interactive multi-table database transactions ($transaction) for ledger integrity.',
      },
      {
        layer: 'Client & Server State',
        technologies: 'Zustand, TanStack Query v5',
        details: 'Zustand handles persistent client timers and active sessions; TanStack Query orchestrates server cache and optimistic updates.',
      },
      {
        layer: 'Authentication & Session RBAC',
        technologies: 'NextAuth.js with JWT Augmentation',
        details: 'Role claims (SUPERADMIN, EMPLOYEE, CLIENT) embedded within session tokens for stateless edge and server validation.',
      },
      {
        layer: 'Interaction & Drag-and-Drop',
        technologies: '@dnd-kit',
        details: 'Lightweight, accessible drag-and-drop toolkit powering responsive Kanban board status transitions.',
      },
      {
        layer: 'Deployment & Edge Infrastructure',
        technologies: 'Vercel',
        details: 'Automated CI/CD pipelines deploying edge middleware and serverless compute with global CDN distribution.',
      },
    ],
    modules: [
      {
        id: 'security-rbac',
        title: 'Security and Role-Based Access Control (RBAC)',
        badge: 'Edge Perimeter Defense',
        description:
          'Enforces granular access boundaries across administrative, operational, and external client roles through multi-layered defense.',
        points: [
          'Edge Perimeter Defense: Next.js Middleware inspects encrypted session cookies and evaluates role permissions before protected routes or server actions render.',
          'SUPERADMIN Role: Unrestricted administrative access across studio operations—financial ledgers, billing rate configuration, CRM customer master, project allocations, and system audit logs.',
          'EMPLOYEE Role: Scoped strictly to operational execution tools—task Kanban boards, sub-task status updates, and persistent time tracking. Direct access to financial ledgers and invoicing is restricted.',
          'CLIENT Role: Restricted to an isolated external client portal, limited to the client\'s assigned projects, authorized deliverables, outstanding invoices, and simulated payment workflows.',
          'Session Management & Defense in Depth: NextAuth.js utilizes JWT augmentation to propagate role data across requests without database lookups. Middleware serves as a first-line perimeter check, complemented by server action authorization checks.',
        ],
      },
      {
        id: 'crm-interaction-log',
        title: 'CRM and Client Interaction Log',
        badge: 'Customer Master Directory',
        description:
          'Centralizes customer intelligence and communications history directly within the operational data pipeline.',
        points: [
          'Customer Master Directory: Structured registry organizing client organizations, primary stakeholders, active contracts, and relationship statuses (Leads, Active Clients, Retainers, Inactive).',
          'Touchpoint Interaction Log: Records documented historical interactions—Calls, Emails, and Meetings—linked directly to client account entities.',
          'Contextual Relational Linkage: Touchpoints maintain timestamped notes, participant records, and follow-up items, ensuring sales and account context remains tied to downstream projects and invoices.',
          'Unified Workflow: Eliminates data fragmentation across standalone spreadsheet logs and external sales tools by housing client intelligence in the primary PostgreSQL database.',
        ],
      },
      {
        id: 'project-hierarchy-engine',
        title: 'Project Hierarchy Engine',
        badge: '4-Level Relational Structure',
        description:
          'Structures complex multi-disciplinary studio deliverables into a four-level hierarchical execution tree.',
        points: [
          'Four-Level Relational Hierarchy: Project (contract/engagement) → Phase (milestone or sprint) → Task (actionable work unit) → Sub-task (atomic checklist item).',
          'Automated Phase Promotion: When all tasks within a given phase are marked COMPLETED, the hierarchy engine automatically updates the parent phase status to COMPLETED.',
          'Relational Consistency: Enforced via PostgreSQL foreign key constraints and cascading rules, preventing orphaned tasks and ensuring accurate phase rollup calculations.',
          'Visual Milestone Tracking: Provides studio leads and project managers with real-time insight into completion percentages across nested task dependencies.',
        ],
      },
      {
        id: 'optimistic-kanban',
        title: 'Optimistic Kanban Interface',
        badge: 'Zero Perceived Latency',
        description:
          'Delivers instantaneous drag-and-drop task movements decoupled from network round trips.',
        points: [
          'Interaction Architecture: Combines @dnd-kit for accessible pointer and keyboard interaction with TanStack Query v5 for client cache mutations.',
          'Immediate Perceived Response: When a user drags a task card across columns, the client UI updates instantly without waiting for the server round trip.',
          'Asynchronous Persistence: The mutation triggers a background server action that updates task status and phase completion states in Neon PostgreSQL.',
          'Automated Failure Rollback: If the server request fails or the network drops, TanStack Query catches the error, rolls back the client cache to the previous snapshot, and displays an informative notification.',
        ],
      },
      {
        id: 'persistent-time-tracking',
        title: 'Persistent Time Tracking',
        badge: 'Global Zustand Engine',
        description:
          'Provides uninterrupted, application-wide time tracking persisting through navigation and browser refreshes.',
        points: [
          'Global State Persistence: Implemented via a centralized Zustand store that maintains active timer state in local client storage, surviving page navigation and full browser reloads.',
          'Billable vs. Non-Billable Classification: Enforces strict classification between billable client hours (linked to active project phases and hourly rates) and internal studio overhead.',
          'Granular TimeEntry Records: Stopping a timer commits structured TimeEntry records directly into PostgreSQL, preserving duration, project phase linkage, and developer notes.',
          'Direct Invoicing Ingestion: Unbilled time entries are automatically indexed for downstream invoice aggregation and client billing.',
        ],
      },
      {
        id: 'immutable-asset-vault',
        title: 'Immutable Asset Vault',
        badge: 'Non-Destructive Versioning',
        description:
          'Maintains non-destructive version history and complete audit trails for all creative assets and contract deliverables.',
        points: [
          'Non-Destructive Version Model: Uploading a revised deliverable generates a new immutable AssetVersion record rather than overwriting existing media files.',
          'Complete Audit History: Every version record captures the uploading user ID, timestamp, sequential version identifier (v1.0, v1.1), and documented change rationale.',
          'Deliverable Attribution: Enables studio leads and clients to inspect prior asset iterations, compare deliverable revisions, and maintain verifiable project records.',
          'Contract Integrity: Protects design proposals, contract amendments, and final milestone assets from accidental modification or erasure.',
        ],
      },
      {
        id: 'financial-pipeline',
        title: 'Financial Pipeline & Atomic Invoicing',
        badge: 'Prisma ACID Transactions',
        description:
          'Guarantees ledger consistency and prevents double-billing through strict database transaction boundaries.',
        points: [
          'End-to-End Workflow: Operates in a strict sequence: Timer → TimeEntry → Invoice → Payment.',
          'Automated Invoicing Server Action: Aggregates unbilled time entries for a project, calculates totals based on phase hourly multipliers, creates invoice records, and links all line items.',
          'Prisma Interactive Transactions ($transaction): Executes invoice creation and time-entry status updates atomically within an explicit database transaction boundary.',
          'Integrity Protection: Guarantees zero partial writes—if any invoice line fails to write, the entire transaction rolls back, preventing orphaned charges and double-billing.',
          'Status Synchronization: Updates associated project accounts and balance ledgers to reflect newly committed invoice liabilities.',
        ],
      },
      {
        id: 'external-client-portal',
        title: 'External Client Portal',
        badge: 'Restricted External View',
        description:
          'Offers external studio clients a secure, isolated workspace to inspect deliverables and review billing.',
        points: [
          'Isolated Client Scope: External clients authenticate into a restricted portal view isolated from internal studio operational tools and employee metrics.',
          'Milestone Transparency: Clients can review high-level project milestones, approved deliverables, and phase completion timelines.',
          'Deliverable Download: Grants authenticated access to finalized, client-ready assets from the immutable vault.',
          'Invoice Review & Payment Simulation: Clients inspect outstanding invoices and can trigger an interactive payment simulation to test settling accounts without live payment gateway processing.',
        ],
      },
    ],
    challenges: [
      {
        id: 'challenge-ipv4-ipv6',
        title: 'IPv4 / IPv6 Database Connectivity in Serverless Deployment',
        problem:
          'During deployment to Vercel, the application frequently threw "Can\'t reach database server at..." timeout errors, despite executing perfectly in local development environments.',
        diagnosis:
          'Investigation revealed a cloud networking incompatibility between Vercel\'s serverless runtime environment (which relies on IPv4 outbound routing) and the upstream database provider\'s direct connection string (which resolved over IPv6).',
        solution:
          'Migrated the database persistence layer to Neon.tech. Neon provides a managed, serverless PostgreSQL architecture with native IPv4 connection pooling, eliminating the routing mismatch while offering instant branch provisioning.',
        lesson:
          'Cloud infrastructure networking—specifically protocol compatibility (IPv4 vs. IPv6) between serverless compute environments and database connection pools—must be verified early in deployment planning rather than assumed to mirror local development behavior.',
      },
      {
        id: 'challenge-prisma-fallback',
        title: 'Prisma Localhost Fallback Override in Production Builds',
        problem:
          'The production application built successfully but immediately crashed during initial database queries, reporting an unexpected connection attempt to "localhost:5432" in production logs.',
        diagnosis:
          'The Prisma client singleton initialization file contained an implicit fallback to a local connection string if an environment check evaluated to false during serverless container cold starts, inadvertently overriding the injected production DATABASE_URL.',
        solution:
          'Refactored Prisma client initialization to enforce explicit datasource configuration bound strictly to validated environment variables. Removed all implicit localhost defaults, introducing a strict initialization check that fails fast if the production database URL is undefined.',
        lesson:
          'Production database initialization must never incorporate silent local fallbacks. Explicit configuration validation ensures that deployment environments fail fast and visibly, preventing hard-to-trace connection failures in production runtimes.',
      },
      {
        id: 'challenge-kanban-synchronization',
        title: 'Kanban State Synchronization & Perceived Latency',
        problem:
          'Standard API-driven drag-and-drop interactions created perceptible UI stutter and delayed feedback while moving task cards across columns, frustrating studio users during high-velocity sprint planning.',
        diagnosis:
          'Waiting for the full HTTP round-trip and database write completion before reflecting card position changes introduced a 200–400ms delay between the physical drop action and visual feedback.',
        solution:
          'Implemented an optimistic cache mutation strategy using TanStack Query v5. The client cache immediately repositions the card upon drop, while a background server action updates PostgreSQL. If the server update fails, an automated rollback handler restores the previous snapshot and displays a contextual error notification.',
        lesson:
          'Decoupling perceived interaction speed from network round-trip latency creates desktop-grade application responsiveness, provided robust rollback mechanisms and transactional integrity protect the underlying data.',
      },
    ],
    technicalFacts: [
      {
        label: 'Database Schema',
        value: '14 Normalized Tables',
        detail: 'Relational PostgreSQL schema with foreign keys, cascading deletes, and indexed query patterns.',
      },
      {
        label: 'Codebase Verification',
        value: 'Zero TypeScript / Lint Errors',
        detail: 'Strict TypeScript compilation and clean ESLint verification reported at the time of the technical dossier.',
      },
      {
        label: 'Production Deployment',
        value: 'Vercel + Neon.tech',
        detail: 'Global edge network and serverless functions paired with serverless PostgreSQL connection pooling.',
      },
      {
        label: 'User Experience',
        value: 'Living Soul Entity',
        detail: 'Interactive, fluid login experience featuring an animated canvas entity responding to pointer interactions.',
      },
    ],
    sections: {
      problem: {
        title: 'The Challenge: Operational Fragmentation & Financial Integrity in Creative Studios',
        content: [
          'Creative studios—including architecture practices, interior-design consultancies, and game-development teams—routinely grapple with fragmented software ecosystems. Project managers coordinate deliverables in standalone Kanban tools, creatives track billable hours in personal spreadsheets, and finance teams generate invoices in isolated accounting software.',
          'This fragmentation breeds systemic operational risks: unbilled billable hours slip through tracking cracks, task status changes in Kanban boards fail to sync with phase completion milestones, and manual invoice generation risks double-billing or partial ledger writes.',
          'Furthermore, naive authorization architectures that only check user roles after loading application dashboards expose confidential financial ledgers and sensitive client deliverables to junior team members and external stakeholders.',
          'The objective was to architect Project Workspace as a unified, production-grade B2B SaaS platform that consolidates CRM, hierarchical project execution, persistent time tracking, non-destructive asset versioning, and transactional billing into an integrated system characterized by uncompromising transactional consistency and instantaneous user responsiveness.',
        ],
      },
      approach: {
        title: 'System Architecture & Core Engineering Modules',
        content: [
          'Project Workspace is architected as an end-to-end full-stack SaaS platform built on Next.js 14 with TypeScript, backed by PostgreSQL on Neon and Prisma ORM, utilizing client-side optimistic caching and edge-level perimeter security.',
        ],
        subsections: [
          {
            subtitle: '1. Multi-Tier Security & Edge RBAC',
            points: [
              'Architected a perimeter access control model using Next.js Middleware that intercepts incoming requests and evaluates JWT claims at the network edge before protected routes or server actions render.',
              'Enforces strict role boundaries: SUPERADMIN has unrestricted access across studio ledgers and system settings; EMPLOYEE is scoped strictly to operational tools (Kanban, sub-tasks, time tracking); and CLIENT is quarantined to an isolated portal for authorized project milestones, deliverables, and simulated payments.',
              'Augments NextAuth.js session tokens with role data, pairing edge middleware verification with secondary server action authorization checks for defense in depth.',
            ],
          },
          {
            subtitle: '2. Project Hierarchy & Automated Phase Progression',
            points: [
              'Structured deliverables into a four-level relational tree: Project → Phase → Task → Sub-task, providing clear granularity from client contracts down to atomic work units.',
              'Engineered an automated lifecycle trigger: when all tasks in a phase reach COMPLETED status, the hierarchy engine automatically updates the parent Phase status to COMPLETED.',
              'Enforced referential integrity and cascading rules via PostgreSQL constraints, preventing orphan records and ensuring accurate completion rollups.',
            ],
          },
          {
            subtitle: '3. Optimistic Kanban with TanStack Query v5',
            points: [
              'Paired @dnd-kit with TanStack Query v5 to deliver instant drag-and-drop feedback that updates the UI immediately upon drop, eliminating perceived network latency.',
              'Implemented automated rollback handlers that restore the prior cache snapshot and alert the user if the downstream server action or database mutation encounters an error.',
            ],
          },
          {
            subtitle: '4. Persistent Time Tracking with Zustand',
            points: [
              'Built a global timer module in Zustand that persists active time tracking state in local client storage across page navigation and browser reloads.',
              'Enforced a clear distinction between billable client hours (linked to projects and hourly rate multipliers) and internal non-billable studio overhead.',
              'Persists structured TimeEntry records directly into PostgreSQL, primed for automated invoice generation.',
            ],
          },
          {
            subtitle: '5. Non-Destructive Asset Vault & Immutable Versioning',
            points: [
              'Designed an immutable AssetVersion model where every upload creates a new sequential version record rather than destructively overwriting previous deliverables.',
              'Preserves complete audit trails capturing uploader identity, upload timestamp, sequential version numbers (v1.0, v1.1), and documented change rationale.',
              'Guarantees full historical accountability for design iterations, client sign-offs, and contract revisions.',
            ],
          },
          {
            subtitle: '6. Atomic Financial Pipeline with Prisma Transactions',
            points: [
              'Engineered an automated invoicing server action that executes in an atomic sequence: Timer → TimeEntry → Invoice → Payment.',
              'Aggregates all unbilled time entries for a project, calculates line totals using phase hourly rates, generates invoice records, and marks time entries as billed within a single Prisma interactive transaction ($transaction).',
              'Guarantees ACID consistency across all relational writes, preventing partial writes, orphaned invoice lines, and double-billing.',
            ],
          },
        ],
      },
      architecture: {
        title: 'Engineering Focus: Relational Integrity, State Decoupling & Edge Defense',
        content: [
          'A central architectural challenge in B2B enterprise software is maintaining transactional integrity while providing fluid, responsive client interactions. In studio operations, financial and project records cannot tolerate desynchronization: an invoice generated from billable time must atomically link every time entry to prevent duplicate billing, and status updates on nested tasks must accurately cascade through parent phases.',
          'By leveraging Prisma interactive transactions ($transaction), all multi-table operations—spanning client balances, invoice headers, line items, and time entry state transitions—either commit completely or roll back atomically upon error, guaranteeing ACID consistency without orphaned records.',
          'Simultaneously, the user experience decouples user interactions from network latency. Drag-and-drop Kanban updates mutate the TanStack Query cache optimistically, providing instant perceived feedback while asynchronous server actions reconcile state in the background.',
          'At the perimeter, Next.js Edge Middleware evaluates JWT role claims before requests hit serverless functions or database connection pools, stopping unauthorized traffic at the edge and protecting sensitive studio financials.',
        ],
      },
      decisions: {
        title: 'Key Engineering Decisions & Trade-Offs',
        content: [
          'Optimistic UI vs. Pessimistic Waiting: Chose optimistic cache updates via TanStack Query v5 to deliver instant, fluid drag-and-drop responsiveness, accepting the engineering overhead of implementing robust cache snapshotting and rollback handlers for error scenarios.',
          'Prisma Interactive Transactions: Wrapped all invoicing workflows in explicit database transactions ($transaction) to enforce ledger consistency and eliminate double-billing, prioritizing transactional correctness over uncoordinated asynchronous writes.',
          'Perimeter Edge RBAC: Enforced role-based access control at the Next.js Middleware layer rather than solely inside individual page handlers, preventing unauthorized requests from consuming downstream serverless compute and database connection resources.',
          'Zustand for Global Timer: Implemented time tracking in a dedicated Zustand store with client-side persistence, ensuring the timer continues uninterrupted across page transitions without triggering unnecessary React tree re-renders.',
          'Neon Serverless PostgreSQL: Migrated to Neon.tech to resolve IPv4/IPv6 compatibility friction on Vercel, benefiting from managed serverless connection pooling suited for bursty web application traffic.',
        ],
      },
      limitations: {
        title: 'Known Constraints & Boundary Conditions',
        content: [
          'Concurrent Multi-User Conflict Resolution: In high-concurrency environments where multiple project managers move the same task simultaneously, the system relies on timestamp-based last-write-wins resolution rather than operational transformation or CRDTs.',
          'Simulated Client Payment: The external client portal implements an interactive payment simulation for testing invoice settlement workflows; it does not connect to live commercial payment processors (e.g., Stripe or Razorpay).',
          'Asset Storage Scaling: The immutable vault preserves all historical revisions in relational records; high-volume production deployments with large 3D assets or 4K video renders require lifecycle archival policies on cold storage buckets.',
        ],
      },
      lessons: {
        title: 'Key Takeaways & Engineering Lessons',
        content: [
          'Transactional boundaries are foundational: In financial and time-tracking workflows, client-side validation is insufficient. Atomic database transactions are essential for preventing corrupt states and double-billing that cannot be unwound retroactively.',
          'Perceived speed defines user experience: Data-dense enterprise dashboards feel dramatically faster and more professional when user actions trigger optimistic mutations, decoupling visual feedback from network round trips.',
          'Infrastructure networking demands early validation: Cloud deployment compatibility—such as IPv4 versus IPv6 routing between serverless runtimes and database hosts—must be tested early in the development lifecycle to avoid deployment-time blockers.',
        ],
      },
    },
  },
  {
    slug: 'xypher',
    title: 'XYPHER — Blockchain Credential Verification Platform',
    tagline: 'A decentralized credential verification platform combining SHA-256 fingerprinting, IPFS storage, and EVM smart contracts with institutional accreditation tracking.',
    shortDescription:
      'Decentralized credential verification platform featuring role-segregated portals, Pinata IPFS document storage, Polygon Amoy smart contracts, and sub-second employer verification.',
    overview:
      'XYPHER is a decentralized credential verification platform designed to combat academic and professional qualification fraud. It provides role-segregated interfaces for educational regulators, issuing institutions, credential recipients, and corporate employers. By strictly partitioning concerns between off-chain content-addressed storage (IPFS via Pinata) and on-chain state verification (Solidity smart contracts on Polygon Amoy), the platform enables third-party employers to cryptographically verify document integrity, issuing authority legitimacy, and revocation status without exposing private student records on public ledgers.',
    category: 'Decentralized Platform · Blockchain · Cryptographic Verification',
    statusBadge: 'Deployed & Live (2026)',
    featuredOrder: 2,
    tags: {
      primary: ['React 19', 'Node.js', 'Solidity', 'Polygon Amoy', 'IPFS', 'Supabase'],
      secondary: ['Express', 'Ethers.js', 'Pinata', 'Neon PostgreSQL', 'Hardhat', 'Dual-Approval Issuance'],
    },
    diagramType: 'credentials',
    diagramCaption:
      'Figure 2: XYPHER architecture illustrating multi-role access portals, local SHA-256 document hashing, Pinata IPFS decentralized storage, EVM smart contracts (Registry & CertificateRegistry), and employer verification.',
    links: {
      demo: 'https://digi-cirtificate-verification.vercel.app/',
      github: 'https://github.com/manoj1454/Digi-cirtificate-verification',
    },
    metrics: [
      {
        label: 'Verification Query',
        value: '< 1s Latency',
        context: 'Sub-second public verification query via indexed hash lookup',
      },
      {
        label: 'Ledger Privacy',
        value: 'Zero PDF On-Chain',
        context: 'Off-chain IPFS content addressing; only 32-byte SHA-256 hashes committed to EVM',
      },
      {
        label: 'Accreditation Gating',
        value: 'Dual-Layer Check',
        context: 'Simultaneously validates document digest and regulatory issuer standing',
      },
      {
        label: 'Issuance Governance',
        value: 'Dual-Approval',
        context: 'Registrar drafting paired with administrative signing prevents rogue minting',
      },
    ],
    techStack: [
      {
        layer: 'Application Framework & Client',
        technologies: 'React 19, Vite 8, React Router DOM v7',
        details: 'Role-segregated web applications (/company, /regulator, /institution, /student) with Three.js 3D Ledger Matrix visualization and Lenis smooth scrolling.',
      },
      {
        layer: 'Backend API & Gateway',
        technologies: 'Node.js & Express 4',
        details: 'REST gateway handling credential pipelines, in-memory %PDF magic byte validation via Multer, and express-rate-limit perimeter protection (30 req/min per IP).',
      },
      {
        layer: 'Decentralized File Storage',
        technologies: 'IPFS via Pinata SDK (@pinata/sdk)',
        details: 'High-durability content-addressed storage for diploma and transcript PDFs, ensuring confidential student records remain off public blockchains.',
      },
      {
        layer: 'Smart Contracts & State Consensus',
        technologies: 'Solidity (^0.8.20), OpenZeppelin v5, Hardhat',
        details: 'Registry.sol tracks institutional accreditation authority (isAccredited); CertificateRegistry.sol anchors SHA-256 hashes, authorized issuer IDs, and revocation timestamps.',
      },
      {
        layer: 'Ledger Deployment',
        technologies: 'Polygon Amoy Testnet & Local Hardhat Node',
        details: 'EVM-compatible cryptographic hash commits with low gas overhead and predictable transaction finality.',
      },
      {
        layer: 'Authentication & Relational Database',
        technologies: 'Supabase Auth, Neon PostgreSQL',
        details: 'JWT bearer token sessions with role claims; relational metadata storage and verification_logs audit trail with Row Level Security (RLS).',
      },
      {
        layer: 'Client Cryptography & Reporting',
        technologies: 'Web Crypto API (SHA-256), html5-qrcode, jsPDF',
        details: 'Client-side SHA-256 document hashing, device camera QR scanning for rapid verification, and automated HR audit report PDF generation.',
      },
    ],
    modules: [
      {
        id: 'company-portal',
        title: 'Company & Employer Verification Portal (/company)',
        badge: 'Zero-Trust Audit',
        description:
          'Provides corporate human resources and background-check teams with rapid, verifiable credential validation without requiring institutional accounts.',
        points: [
          'Single-Query & QR Code Verification: Verifiers can manually enter candidate Credential IDs or scan dynamic QR codes using device cameras via html5-qrcode.',
          'Four Deterministic Verification Outcomes: Classifies results into VALID (authentic and accredited), REVOKED (institution cancelled credential), UNACCREDITED (issuer accreditation suspended by regulator), or NOT_FOUND (unregistered on ledger).',
          'Direct IPFS Transcript Inspection: For legitimate credentials, verifiers can inspect original immutable transcript PDFs resolved directly from Pinata IPFS gateways.',
          'Automated HR Audit Reporting: In-browser PDF generation via jsPDF compiling verification timestamps, issuer accreditation history, and SHA-256 cryptographic digests for HR compliance files.',
          'Compliance Verification Trail: Every verification lookup records non-blocking audit entries in the Neon PostgreSQL verification_logs table for institutional auditability.',
        ],
      },
      {
        id: 'regulator-governance',
        title: 'Regulatory Accreditation & Governance Engine (/regulator)',
        badge: 'Accreditation Authority',
        description:
          'Enforces governmental and educational oversight by maintaining active accreditation registries across academic institutions.',
        points: [
          'Accreditation State Management: Regulators review university compliance applications and execute on-chain accreditation approvals via Registry.sol.',
          'Immediate Fraud Invalidation: If an institution loses operational accreditation, regulators toggle accreditation status to false, instantly reflecting across all downstream verification checks.',
          'Decoupled Revocation Semantics: Differentiates between a student credential being revoked (e.g., honor code violation) and an entire institution losing regulatory standing.',
          'Audit Oversight Dashboard: Tracks aggregate system metrics including registered universities, pending institutional approvals, and issuance volume.',
        ],
      },
      {
        id: 'institution-issuance',
        title: 'Dual-Approval Credential Issuance Subsystem (/institution)',
        badge: 'Multi-Role Authorization',
        description:
          'Prevents rogue or unauthorized certificate creation by requiring multi-tier administrative workflows before committing hashes to the blockchain.',
        points: [
          'Document Sanitization & Magic Byte Validation: Validates incoming PDF transcripts against %PDF magic bytes to prevent malformed or malicious file uploads.',
          'Two-Tier Authorization: Academic registrars draft candidate records, which must receive secondary administrative authorization before cryptographic signing.',
          'Pinata IPFS Pinning Pipeline: Uploads validated PDF transcripts to Pinata IPFS cluster, obtaining immutable content-addressed CIDs.',
          'On-Chain Hash Anchoring: Computes SHA-256 digests and invokes issueCertificateOnChain() to anchor the 32-byte digest, student ID, and issuer wallet to CertificateRegistry.sol.',
        ],
      },
      {
        id: 'student-vault',
        title: 'Student Credential Vault & Self-Sovereign Access (/student)',
        badge: 'Recipient Sovereignty',
        description:
          'Empowers graduates to manage and prove their academic credentials without recurring institutional requests or paper handling fees.',
      points: [
        'Decentralized Portfolio: Graduates log in to access issued degrees, diplomas, and official transcript records tied to their identity.',
        'Cryptographic Integrity Check: Students can verify their document SHA-256 hash against the on-chain ledger in real time.',
        'Dynamic QR Code Sharing: Generates cryptographically verifiable QR codes that graduates can place on resumes or LinkedIn profiles for instant employer auditing.',
        'Immutable Document Download: Direct access to cryptographically stamped, watermarked PDF certificates retrieved from IPFS gateways.',
      ],
    },
  ],
  challenges: [
    {
      id: 'privacy-gas-separation',
      title: 'Balancing Public Ledger Transparency with Student PII Privacy',
      problem:
        'Storing full diploma PDF files or plaintext student transcripts directly on a public blockchain ledger incurs massive gas fees and publicly exposes protected student educational records.',
      diagnosis:
        'Public EVM testnets and mainnets make all transaction input data permanently readable by any third party. Committing large binary files also degrades block propagation speed.',
      solution:
        'Architected strict separation of concerns: full transcript documents are pinned to decentralized content-addressed storage (IPFS via Pinata), while only a 32-byte SHA-256 cryptographic digest is committed to CertificateRegistry.sol.',
      lesson:
        'Public blockchains should function strictly as decentralized integrity and authorization anchors, keeping relational assets and sensitive PII off-chain.',
    },
    {
      id: 'issuer-authority-gating',
      title: 'Distinguishing Document Integrity from Institutional Legitimacy',
      problem:
        'Naive blockchain verification systems only test whether a document hash matches on-chain records, which fails to detect credentials minted by rogue or unaccredited entities.',
      diagnosis:
        'A cryptographic hash only proves a file has not changed since recording; it does not prove the issuing organization had legitimate regulatory authority to grant degrees.',
      solution:
        'Designed a dual-contract architecture: CertificateRegistry.sol invokes Registry.sol to verify that the issuer holds active isAccredited standing. If the regulator suspends the university, employer lookups immediately return UNACCREDITED even if the document hash is authentic.',
      lesson:
        'Cryptographic proof of immutability is worthless without verified proof of institutional authority at the governance layer.',
    },
    {
      id: 'public-api-defense',
      title: 'Defending Public Verification Endpoints from Automated Scrapes',
      problem:
        'Public verifier endpoints without rate limiting are vulnerable to denial-of-service floods, RPC rate exhaustion, and database connection depletion.',
      diagnosis:
        'Because corporate verifiers need friction-free lookups without tedious CAPTCHA barriers, open GET endpoints can easily be targeted by scrapers.',
      solution:
        'Implemented express-rate-limit configured for 30 requests per minute per client IP on the public verification router, paired with asynchronous non-blocking logging to the Neon PostgreSQL verification_logs table.',
      lesson:
        'Public enterprise APIs must enforce defense-in-depth perimeter rate limiting while maintaining sub-second query performance for legitimate users.',
    },
  ],
  technicalFacts: [
    {
      label: 'Client Architecture',
      value: 'React 19 + Vite',
      detail: 'Modular role-segregated portals with Three.js 3D Ledger Matrix visualization',
    },
    {
      label: 'Verifier Portal',
      value: '/company Route',
      detail: 'Manual ID lookup & html5-qrcode camera scanning with 4 outcome states',
    },
    {
      label: 'Smart Contracts',
      value: 'Solidity 0.8.20',
      detail: 'Registry.sol (Accreditation) & CertificateRegistry.sol (Hash Anchors)',
    },
    {
      label: 'Ledger Network',
      value: 'Polygon Amoy',
      detail: 'EVM-compatible gas-optimized network & local Hardhat dev node',
    },
    {
      label: 'Document Storage',
      value: 'Pinata IPFS',
      detail: 'Content-addressed off-chain transcript PDFs preserving candidate privacy',
    },
    {
      label: 'Database & Auth',
      value: 'Supabase + Neon',
      detail: 'JWT bearer token sessions, Row Level Security, and verification audit trail',
    },
    {
      label: 'Rate Limiting',
      value: '30 Req / Min',
      detail: 'Perimeter defense on public verification API via express-rate-limit',
    },
  ],
  sections: {
    problem: {
      title: 'The Challenge: Credential Fraud, Diploma Mills & Naive Verification Systems',
      content: [
        'Academic credential fraud and counterfeit qualification certificates undermine institutional integrity, employer hiring confidence, and public safety worldwide. Traditional paper diplomas and conventional PDF documents can be easily falsified or altered using readily available graphic editing software.',
        'Existing digital verification approaches often rely on centralized university portals that suffer from downtime, bureaucratic response delays, and single points of failure. Conversely, naive blockchain verification implementations frequently verify only whether a file hash exists on a distributed ledger, failing to ascertain whether the issuing institution possessed legitimate regulatory accreditation.',
        'The objective was to engineer an end-to-end decentralized verification ecosystem that independently validates two critical dimensions: verifying that a credential document has remained completely unaltered since issuance, and confirming that the issuing institution possessed legitimate accreditation authority from educational regulators.',
      ],
    },
    approach: {
      title: 'Decentralized Architecture & Layered Verification Ecosystem',
      content: [
        'XYPHER resolves these challenges through a hybrid architecture combining off-chain content-addressed storage (IPFS via Pinata), on-chain Solidity smart contracts on the Polygon Amoy testnet, and role-segregated workflows covering regulators, institutions, students, and employers.',
      ],
      subsections: [
        {
          subtitle: '1. Role-Segregated Portals & Workflows',
          points: [
            'Corporate Verifiers (/company): Frictionless employer verification dashboard enabling sub-second credential audits via manual Credential ID entry or live camera QR code scanning.',
            'Educational Regulators (/regulator): Comprehensive compliance dashboard for evaluating institutional credentials, approving university onboarding, and toggling regulatory accreditation standing.',
            'Academic Institutions (/institution): Registrar portal for initiating credential drafts, uploading PDF diplomas, and enforcing two-tier administrative authorization before on-chain minting.',
            'Credential Recipients (/student): Graduate portal providing decentralized access to issued qualifications, hash verification tools, and shareable QR codes for resumes.',
          ],
        },
        {
          subtitle: '2. Privacy-Preserving Off-Chain Storage (IPFS / Pinata)',
          points: [
            'Transcript documents and diplomas are processed via an in-memory buffer pipeline that validates %PDF header magic bytes before pinning to the Pinata IPFS storage cluster.',
            'Only 32-byte cryptographic SHA-256 hashes are anchored to the blockchain, ensuring zero sensitive student personally identifiable information (PII) is exposed on public ledgers.',
          ],
        },
        {
          subtitle: '3. Dual-Contract Blockchain Ledger (Solidity)',
          points: [
            'Registry.sol: Master governance ledger maintaining accredited institutional wallets and legal operational status (isAccredited).',
            'CertificateRegistry.sol: Records tamper-evident credential fingerprints, issuing institutional IDs, student identifiers, and immutable revocation timestamps.',
          ],
        },
        {
          subtitle: '4. Deterministic 4-State Verification Engine',
          points: [
            'VALID: The document SHA-256 hash matches the on-chain anchor, the issuing institution is active and accredited, and no revocation flag exists.',
            'REVOKED: The credential was legitimately issued but subsequently cancelled by the academic registrar (e.g., honor code violation or administrative error).',
            'UNACCREDITED: The issuing institution was previously recognized, but current regulatory accreditation has been revoked or suspended by the education regulator.',
            'NOT_FOUND: The queried credential identifier does not exist on the smart contract registry or database.',
          ],
        },
      ],
    },
    architecture: {
      title: 'System Topology: Data Pipelines & Security Boundaries',
      content: [
        'The platform partitions responsibilities across presentation, API gateway, decentralized storage, relational database, and blockchain consensus layers. The React 19 frontend communicates with an Express 4 backend via JWT-authenticated REST endpoints.',
        'During issuance, the institution uploads a student transcript. The backend verifies PDF magic bytes, computes a local SHA-256 digest, pins the file to Pinata IPFS, and initiates a contract transaction on Polygon Amoy. During employer verification, the query evaluates both the document digest in CertificateRegistry.sol and institutional legitimacy in Registry.sol, recording the audit timestamp in Neon PostgreSQL.',
      ],
    },
    decisions: {
      title: 'Key Engineering Decisions & Architectural Trade-offs',
      content: [
        'Off-Chain Document Storage vs. On-Chain Hashes: Storing entire PDFs on Polygon Amoy would be cost-prohibitive and violate privacy regulations. Committing only 32-byte SHA-256 digests preserves document confidentiality while guaranteeing cryptographic tamper evidence.',
        'Dual-Contract Architecture for Accreditation: Separating institutional accreditation (Registry.sol) from individual credential records (CertificateRegistry.sol) allows regulators to instantly suspend a fraudulent institution without modifying thousands of individual certificate entries.',
        'Dual-Approval Administrative Issuance: Enforcing two-tier authorization (registrar initiation followed by departmental administrator sign-off) prevents rogue single-admin minting of unauthorized credentials.',
        'Perimeter Rate Limiting on Public Verifier: Applying express-rate-limit (30 requests/minute per IP) protects backend RPCs and database pools from scraping bots while preserving rapid lookups for human recruiters.',
      ],
    },
    limitations: {
      title: 'Known Constraints & Boundary Conditions',
      content: [
        'Live Backend Service Availability: The frontend application is deployed on Vercel at digi-cirtificate-verification.vercel.app. Dynamic on-chain verification queries (/api/certificates/verify/:id) require an active Express gateway instance (configured to localhost:5001 or cloud backend service).',
        'Single-Page Routing Rewrites: Direct browser reloads on deep routes (such as /company) on static hosts require server rewrite configuration to index.html; client-side navigation within the application functions seamlessly.',
        'Blockchain Confirmation Latency: Issuance and status revocation transactions are subject to Polygon Amoy block confirmation times (typically 2-4 seconds).',
        'IPFS Gateway Availability: Document retrieval relies on active pinning through the Pinata IPFS gateway cluster; long-term availability requires maintained pinning contracts.',
      ],
    },
    lessons: {
      title: 'Key Takeaways & Engineering Lessons',
      content: [
        'Document integrity alone does not prove institutional legitimacy: Confirming that a document has not changed since issuance is meaningless if the issuing institution was a diploma mill without legal accreditation. Verifying the issuer is just as critical as verifying the cryptographic digest.',
        'Public blockchains require privacy-by-design: Public distributed ledgers should store cryptographic proofs, timestamps, and identity pointers—never unencrypted personal records or sensitive student transcripts.',
        'Decoupled governance simplifies operational state: Structuring smart contracts into hierarchical authority tiers (Regulator → Institution → Credential) enables systemic policy updates with O(1) state transitions.',
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
    featuredOrder: 3,
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
      'Figure 3: Multi-service architecture showing React frontend, Spring Boot API gateway, FastAPI claim verification engine, ChromaDB vector store, and Tavily fallback search.',
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
            subtitle: '1. Three-Stage Verification Pipeline & Claim Scoring',
            points: [
              'Built a three-stage agentic AI pipeline that extracts atomic claims from LLM responses and verifies them against trusted medical sources through RAG.',
              'Implements a claim-level danger-scoring mechanism categorizing clinical severity into LOW, MEDIUM, HIGH, and CRITICAL risk levels with corrective feedback.',
            ],
          },
          {
            subtitle: '2. Polyglot Microservices Infrastructure',
            points: [
              'React frontend hosted on Vercel for responsive claim inspection and interactive risk visualization.',
              'Spring Boot API gateway hosted on Render managing rate limiting, request validation, and client routing.',
              'Python/FastAPI ML service hosted on Hugging Face Spaces executing claim segmentation, vector search, and LLM inference via Groq.',
            ],
          },
          {
            subtitle: '3. Hybrid Retrieval with Real-Time Web Fallback',
            points: [
              'Indexed 2,000+ NIH MedQuAD documents into a ChromaDB vector store for fast, deterministic local similarity search.',
              'Configured Tavily real-time web search as an automatic fallback when ChromaDB similarity confidence is low, citing NHS, WHO, and FDA clinical guidelines.',
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
    title: 'TALQS — Transformer-Based Legal QA and Summarization System',
    tagline: 'Turning long judgments into searchable context, answering questions, and producing concise summaries.',
    shortDescription:
      'End-to-end RAG pipeline covering PDF extraction, cleaning, chunking, embeddings, FAISS retrieval, cross-encoder reranking and T5 multi-stage summarization.',
    overview:
      'End-to-end RAG pipeline covering PDF extraction, cleaning, chunking, embeddings, FAISS retrieval, cross-encoder reranking and T5 multi-stage summarization. Evaluated on the BillSum dataset (approximately 18K samples) and SQuAD 2.0 (approximately 150K question-answer pairs), reporting 85% summarization quality (ROUGE-based) and 88% QA accuracy. Optimized chunking and FAISS indexing, with cross-encoder reranking to improve answer relevance.',
    category: 'Document processing · Search and retrieval · Backend pipeline',
    statusBadge: 'Evaluated Prototype (2025)',
    featuredOrder: 4,
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
      'Figure 4: Ingestion, dense embedding, FAISS indexing, cross-encoder reranking, and sequence-to-sequence generation pipeline.',
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
            subtitle: '3. Cross-Encoder Reranking & T5 Summarization',
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
    featuredOrder: 5,
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
      'Figure 5: Radiographic image normalization, RetinaNet focal loss bounding box proposal, and Flask inference serving.',
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
    featuredOrder: 6,
    tags: {
      primary: ['React', 'Node.js', 'Express', 'MongoDB'],
      secondary: ['REST APIs', 'Full-Stack Web Development'],
    },
    diagramType: 'moviereview',
    diagramCaption:
      'Figure 6: Client component hierarchy, Express REST endpoints, and MongoDB document collection persistence.',
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
  if (slug === 'verifiable-credentials') {
    return projects.find((p) => p.slug === 'xypher');
  }
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return [...projects.map((p) => p.slug), 'verifiable-credentials'];
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const normalizedSlug = currentSlug === 'verifiable-credentials' ? 'xypher' : currentSlug;
  const index = projects.findIndex((p) => p.slug === normalizedSlug);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

  return { prev, next };
}
