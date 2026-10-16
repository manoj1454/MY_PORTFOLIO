import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  Eye,
  Layers,
  ExternalLink,
  Server,
  ShieldCheck,
  LayoutGrid,
} from 'lucide-react';
import { projects } from '@/lib/projects';
import SectionHeading from '../ui/SectionHeading';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  const erp = projects.find((p) => p.slug === 'erp-creative-studios') || projects[0];
  const xypher = projects.find((p) => p.slug === 'xypher' || p.slug === 'verifiable-credentials') || projects[1];
  const medical = projects.find((p) => p.slug === 'medical-response-verification') || projects[2];
  const talqs = projects.find((p) => p.slug === 'talqs') || projects[3];
  const welding = projects.find((p) => p.slug === 'welding-defect-detection') || projects[4];
  const movieReview = projects.find((p) => p.slug === 'movie-review-system') || projects[5];

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      {/* Sylva Architectural Guides */}
      <div className="columnGuides" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="ENGINEERING EVIDENCE"
          title="Selected Work"
          description="Projects structured around practical engineering decisions—multi-service communication, verifiable boundaries, transactional integrity, and observable system metrics."
        />

        <div className={styles.editorialWorkList}>
          {/* ============================================================
              01: Enterprise Resource Planning (ERP) System
              Order: 1 · Full-Stack SaaS · Systems Architecture
              Composition: Content Left, Instrument Right
              ============================================================ */}
          <article className={styles.caseStudyBlock}>
            {/* Left: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>01 // FULL-STACK SAAS · ENTERPRISE WORKFLOWS</span>
                <span className={styles.paperStatusBadge}>
                  <span className={styles.paperStatusDot} />
                  {erp.statusBadge}
                </span>
              </div>

              <h3 className={styles.paperTitle}>
                <Link href={`/projects/${erp.slug}`} className={styles.paperTitleLink}>
                  {erp.title}
                </Link>
              </h3>

              <p className={styles.paperTagline}>{erp.tagline}</p>

              <div className={styles.paperProblemBox}>
                <span className={styles.paperProblemLabel}>The Core Challenge:</span>
                <p className={styles.paperProblemText}>
                  Creative studios struggle with fractured tooling across CRM, project tracking, and billing. The platform unifies these workflows while eliminating perceived Kanban latency with optimistic UI updates and guaranteeing data consistency via atomic database transactions.
                </p>
              </div>

              <p className={styles.paperDescription}>
                {erp.overview}
              </p>

              <div className={styles.paperTagsRow}>
                {erp.tags.primary.map((t) => (
                  <span key={t} className={styles.paperTagPill}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.paperCtaRow}>
                <Link href={`/projects/${erp.slug}`} className={styles.paperCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <Link
                href={`/projects/${erp.slug}`}
                className={styles.tactileKnob}
                aria-label="Open ERP System case study"
                title="Open ERP System case study"
              >
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Technical Instrument */}
            <div className={styles.instrumentViewport} aria-hidden="true">
              <div className={styles.instrumentFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.simTitleGroup}>
                    <LayoutGrid size={12} className={styles.terminalIcon} />
                    <span className={styles.simLabel}>erp-engine // optimistic-kanban-transactions</span>
                  </div>
                </div>

                <div className={styles.erpKanbanRow}>
                  <div className={styles.erpKanbanFlow}>
                    <span>CRM Lead</span>
                    <span>➔</span>
                    <span>Sprint Board</span>
                    <span>➔</span>
                    <span>Invoice Flow</span>
                  </div>
                  <div className={styles.erpKanbanStatus}>
                    <span>● TanStack Optimistic Mutate</span>
                  </div>
                </div>

                <div className={styles.erpFlowBox}>
                  <div className={styles.erpCard}>
                    <div className={styles.erpCardHeader}>
                      <span className={styles.erpTag}>PRISMA TRANSACTION // INVOICE GENERATION</span>
                      <span className={styles.erpStatus}>● Atomic ACID Write</span>
                    </div>
                    <p className={styles.erpText}>
                      Multi-table transaction binding line items, client balance, retainers, and taxes with automatic rollback on error.
                    </p>
                    <div className={styles.erpSub}>
                      <span>Isolation: Serializable</span>
                      <span>Zero Double-Billing</span>
                    </div>
                  </div>

                  <div className={styles.erpCard}>
                    <div className={styles.erpCardHeader}>
                      <span className={styles.erpTag}>EDGE AUTHORIZATION // NEXT.JS MIDDLEWARE</span>
                      <span className={styles.erpStatus}>● Zero-Trust Edge RBAC</span>
                    </div>
                    <p className={styles.erpText}>
                      Edge middleware validates role permissions and session tokens before requests reach database pools or internal routes.
                    </p>
                    <div className={styles.erpSub}>
                      <span>Scope: Studio Financials</span>
                      <span>Edge Enforcement</span>
                    </div>
                  </div>

                  <div className={styles.erpCard}>
                    <div className={styles.erpCardHeader}>
                      <span className={styles.erpTag}>IMMUTABLE ASSET VAULT // VERSIONING</span>
                      <span className={styles.erpStatus}>● Non-Destructive v1.3</span>
                    </div>
                    <p className={styles.erpText}>
                      Tracks project deliverable revisions and contract amendments with immutable audit trails.
                    </p>
                    <div className={styles.erpSub}>
                      <span>Deliverable Hash: Intact</span>
                      <span>Full Change Logs</span>
                    </div>
                  </div>
                </div>

                <div className={styles.simOutputArea}>
                  <span className={styles.outputTag}>PLATFORM ARCHITECTURE:</span>
                  <p className={styles.outputText}>
                    Unifies CRM, project management, and financial workflows with optimistic responsiveness and transactional integrity.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================
              02: XYPHER — Blockchain-Based Credential Verification Platform
              Order: 2 · Blockchain & Decentralized Identity
              Composition: Instrument Left, Content Right (Inverted)
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockReversed}`}>
            {/* Left: Technical Instrument */}
            <div className={styles.instrumentViewport} aria-hidden="true">
              <div className={styles.instrumentFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.simTitleGroup}>
                    <ShieldCheck size={12} className={styles.terminalIcon} />
                    <span className={styles.simLabel}>xypher-registry // polygon-amoy-contract</span>
                  </div>
                </div>

                <div className={styles.credFlowBox}>
                  <div className={styles.credTierCard}>
                    <div className={styles.credTierHeader}>
                      <span className={styles.credTierTag}>TIER 01: DOCUMENT INTEGRITY &amp; IPFS</span>
                      <span className={styles.credTierStatus}>● IPFS / Pinata Pinned</span>
                    </div>
                    <p className={styles.credTierText}>
                      Client-side SHA-256 fingerprint generated locally; raw certificate files pinned off-chain to protect student privacy.
                    </p>
                    <div className={styles.credTierSub}>
                      <span>CID: QmXy...89a1</span>
                      <span>Privacy Preserved</span>
                    </div>
                  </div>

                  <div className={styles.credTierCard}>
                    <div className={styles.credTierHeader}>
                      <span className={styles.credTierTag}>TIER 02: DUAL-APPROVAL &amp; REGISTRY</span>
                      <span className={styles.credTierStatus}>● Polygon Amoy Verified</span>
                    </div>
                    <p className={styles.credTierText}>
                      Multi-role authorization requiring dual administrative approval (Registrar + Dept) before recording hashes on-chain.
                    </p>
                    <div className={styles.credTierSub}>
                      <span>Network: Polygon Amoy</span>
                      <span>Gas-Optimized 32B Hash</span>
                    </div>
                  </div>

                  <div className={styles.credTierCard}>
                    <div className={styles.credTierHeader}>
                      <span className={styles.credTierTag}>TIER 03: EMPLOYER AUDIT &amp; REVOCATION</span>
                      <span className={styles.credTierStatus}>● Active Registry Status</span>
                    </div>
                    <p className={styles.credTierText}>
                      Third-party verification portal checks document hash, verified issuer accreditation standing, and revocation flag.
                    </p>
                    <div className={styles.credTierSub}>
                      <span>Revocation Check: Clear</span>
                      <span>Authorized Issuer</span>
                    </div>
                  </div>
                </div>

                <div className={styles.simOutputArea}>
                  <span className={styles.outputTag}>VERIFICATION ECOSYSTEM:</span>
                  <p className={styles.outputText}>
                    Protects against post-issuance tampering, unauthorized issuance, and presenting revoked credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>02 // BLOCKCHAIN · DECENTRALIZED IDENTITY</span>
                <span className={styles.paperStatusBadge}>
                  <span className={styles.paperStatusDot} />
                  {xypher.statusBadge}
                </span>
              </div>

              <h3 className={styles.paperTitle}>
                <Link href={`/projects/${xypher.slug}`} className={styles.paperTitleLink}>
                  {xypher.title}
                </Link>
              </h3>

              <p className={styles.paperTagline}>{xypher.tagline}</p>

              <div className={styles.paperProblemBox}>
                <span className={styles.paperProblemLabel}>The Core Challenge:</span>
                <p className={styles.paperProblemText}>
                  Digital credentials face two distinct failure modes: document tampering and unaccredited issuers. XYPHER verifies that a document&apos;s integrity has been preserved and confirms the legitimacy of the issuing institution, with post-issuance revocation tracking.
                </p>
              </div>

              <p className={styles.paperDescription}>
                {xypher.overview}
              </p>

              <div className={styles.paperTagsRow}>
                {xypher.tags.primary.map((t) => (
                  <span key={t} className={styles.paperTagPill}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.paperCtaRow}>
                <Link href={`/projects/${xypher.slug}`} className={styles.paperCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <Link
                href={`/projects/${xypher.slug}`}
                className={styles.tactileKnob}
                aria-label="Open XYPHER case study"
                title="Open XYPHER case study"
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </article>

          {/* ============================================================
              03: Hallucination Detection in Medical LLMs
              Order: 3 · Full-Stack & Applied AI
              Composition: Content Left, Instrument Right
              ============================================================ */}
          <article className={styles.caseStudyBlock}>
            {/* Left: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>03 // FULL-STACK · SERVICE INTEGRATION</span>
                <span className={styles.paperStatusBadge}>
                  <span className={styles.paperStatusDot} />
                  {medical.statusBadge}
                </span>
              </div>

              <h3 className={styles.paperTitle}>
                <Link href={`/projects/${medical.slug}`} className={styles.paperTitleLink}>
                  {medical.title}
                </Link>
              </h3>

              <p className={styles.paperTagline}>{medical.tagline}</p>

              <div className={styles.paperProblemBox}>
                <span className={styles.paperProblemLabel}>The Core Challenge:</span>
                <p className={styles.paperProblemText}>
                  Medical queries answered by generative LLMs risk presenting unverified dosages or contraindications with high confidence. Evaluating an entire response as a single prompt fails to audit individual clinical assertions.
                </p>
              </div>

              <p className={styles.paperDescription}>
                Three-stage agentic AI pipeline for extracting and verifying claims from LLM responses against trusted medical sources,
                with claim-level danger scoring (LOW, MEDIUM, HIGH, CRITICAL) and corrective output. ChromaDB indexing 2,000+ NIH MedQuAD
                documents, with Tavily real-time web search as a fallback when retrieval confidence is low, citing NHS, WHO and FDA sources.
                Microservices architecture with React on Vercel, Spring Boot API gateway on Render, and Python/FastAPI ML service on
                Hugging Face Spaces. Resolution of the HTTP/2 versus HTTP/1.1 protocol mismatch between Java HttpClient and uvicorn.
              </p>

              {medical.disclaimer && (
                <div className={styles.paperDisclaimer}>
                  <AlertTriangle size={15} className={styles.paperDisclaimerIcon} />
                  <span>{medical.disclaimer}</span>
                </div>
              )}

              <div className={styles.paperTagsRow}>
                {medical.tags.primary.map((t) => (
                  <span key={t} className={styles.paperTagPill}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.paperCtaRow} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href={`/projects/${medical.slug}`} className={styles.paperCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={15} />
                </Link>

                {medical.links?.demo && (
                  <a
                    href={medical.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.paperCaseStudyLink}
                    style={{ textDecoration: 'none', color: '#166534', fontWeight: 650 }}
                  >
                    <span>View live deployment</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${medical.slug}`}
                className={styles.tactileKnob}
                aria-label="Open Medical Response Verification case study"
                title="Open Medical Response Verification case study"
              >
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Technical Instrument */}
            <div className={styles.instrumentViewport} aria-hidden="true">
              <div className={styles.instrumentFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.simTitleGroup}>
                    <Server size={12} className={styles.terminalIcon} />
                    <span className={styles.simLabel}>med-verifier // cross-service-pipeline</span>
                  </div>
                </div>

                <div className={styles.medGatewayRow}>
                  <div className={styles.gatewayFlow}>
                    <span>Client (React)</span>
                    <span>➔</span>
                    <span>Spring Boot Gateway</span>
                    <span>➔</span>
                    <span>FastAPI ASGI</span>
                  </div>
                  <div className={styles.gatewayStatus}>
                    <span>● HTTP/1.1 Pool Active</span>
                  </div>
                </div>

                <div className={styles.medClaimsContainer}>
                  <div className={styles.medClaimCard}>
                    <div className={styles.medClaimMeta}>
                      <span className={styles.medClaimId}>CLAIM #1 · VERIFIED</span>
                      <span className={styles.medBadgeGrounded}>Risk: Low (Supported)</span>
                    </div>
                    <p className={styles.medClaimStatement}>
                      &quot;Standard initial dose of Metformin is 500mg taken orally with meals.&quot;
                    </p>
                    <div className={styles.medCitationRow}>
                      <span className={styles.medCitationSource}>Matched NIH MedQuAD Doc #1142</span>
                      <span>ChromaDB Sim: 0.924</span>
                    </div>
                  </div>

                  <div className={`${styles.medClaimCard} ${styles.medClaimCardFlagged}`}>
                    <div className={styles.medClaimMeta}>
                      <span className={styles.medClaimId}>CLAIM #2 · FALLBACK REVIEW</span>
                      <span className={styles.medBadgeFlagged}>Risk: Flagged / Review</span>
                    </div>
                    <p className={styles.medClaimStatement}>
                      &quot;Unsubstantiated rapid cure claimed without standard contraindication warning.&quot;
                    </p>
                    <div className={styles.medCitationRow}>
                      <span className={styles.medCitationFallback}>Tavily Fallback: Low local similarity</span>
                      <span>Confidence: Low</span>
                    </div>
                  </div>
                </div>

                <div className={styles.simOutputArea}>
                  <span className={styles.outputTag}>VERIFICATION RESULT:</span>
                  <p className={styles.outputText}>
                    2 claims evaluated: 1 grounded in NIH reference docs, 1 flagged with clinical contraindication warning.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================
              04: TALQS — Legal Document QA & Summarization
              Order: 4 · Document Processing & Retrieval Pipeline
              Composition: Instrument Left, Content Right (Inverted)
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockReversed}`}>
            {/* Left: Retrieval Debugger Viewport */}
            <div className={styles.instrumentViewport} aria-hidden="true">
              <div className={styles.instrumentFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.simTitleGroup}>
                    <Terminal size={12} className={styles.terminalIcon} />
                    <span className={styles.simLabel}>talqs-retrieval-debugger // v0.2.1</span>
                  </div>
                </div>

                <div className={styles.simQueryArea}>
                  <span className={styles.queryTag}>USER INQUIRY:</span>
                  <p className={styles.queryContent}>
                    &quot;What bail conditions were imposed under Section 439?&quot;
                  </p>
                </div>

                <div className={styles.simMatchArea}>
                  <div className={styles.matchMeta}>
                    <span className={styles.matchScore}>FAISS SIMILARITY: 0.884</span>
                    <span className={styles.matchSource}>Cr.Misc.No. 4082, Para 14</span>
                  </div>
                  <p className={styles.matchSnippet}>
                    &ldquo;...The petitioner shall furnish personal bond of ₹50,000/- with two local sureties,
                    surrender travel documents before the trial court, and appear bi-weekly until conclusion of trial...&rdquo;
                  </p>
                  <div className={styles.matchFooter}>
                    <span className={styles.groundedTag}>● Grounded in Chunk #24</span>
                    <span className={styles.modelTag}>Encoder: all-MiniLM-L6-v2</span>
                  </div>
                </div>

                <div className={styles.simOutputArea}>
                  <span className={styles.outputTag}>SYNTHESIZED ANSWER (T5 / PEGASUS):</span>
                  <p className={styles.outputText}>
                    Bail granted subject to: 1) ₹50,000 bond with 2 local sureties, 2) passport surrender, 3) bi-weekly attendance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>04 // RAG · MULTI-STAGE RETRIEVAL &amp; SUMMARIZATION</span>
                <span className={styles.paperStatusBadge}>
                  <span className={styles.paperStatusDot} />
                  {talqs.statusBadge}
                </span>
              </div>

              <h3 className={styles.paperTitle}>
                <Link href={`/projects/${talqs.slug}`} className={styles.paperTitleLink}>
                  {talqs.title}
                </Link>
              </h3>

              <p className={styles.paperTagline}>{talqs.tagline}</p>

              <div className={styles.paperProblemBox}>
                <span className={styles.paperProblemLabel}>The Core Challenge:</span>
                <p className={styles.paperProblemText}>
                  Judicial rulings span dozens of unstructured pages with archaic phrasing. Standard LLMs
                  either truncate critical clauses or hallucinate statutory citations without strict dense grounding.
                </p>
              </div>

              <p className={styles.paperDescription}>
                End-to-end RAG pipeline covering PDF extraction, cleaning, chunking, embeddings, FAISS retrieval, cross-encoder
                reranking and T5 multi-stage summarization. Evaluated on the BillSum dataset (approximately 18K samples) and SQuAD 2.0
                (approximately 150K question-answer pairs), reporting 85% summarization quality (ROUGE-based) and 88% QA accuracy.
                Optimized chunking and FAISS indexing, with cross-encoder reranking to improve answer relevance.
              </p>

              {talqs.disclaimer && (
                <div className={styles.paperDisclaimer}>
                  <AlertTriangle size={15} className={styles.paperDisclaimerIcon} />
                  <span>{talqs.disclaimer}</span>
                </div>
              )}

              <div className={styles.paperTagsRow}>
                {talqs.tags.primary.map((t) => (
                  <span key={t} className={styles.paperTagPill}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.paperCtaRow} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href={`/projects/${talqs.slug}`} className={styles.paperCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={15} />
                </Link>

                {talqs.links?.demo && (
                  <a
                    href={talqs.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.paperCaseStudyLink}
                    style={{ textDecoration: 'none', color: '#166534', fontWeight: 650 }}
                  >
                    <span>View on Hugging Face Spaces</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${talqs.slug}`}
                className={styles.tactileKnob}
                aria-label="Open TALQS case study"
                title="Open TALQS case study"
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </article>

          {/* ============================================================
              05: Welding Defect Detection System
              Order: 5 · Computer Vision & Model Deployment
              Composition: Content Left, Viewport Right
              ============================================================ */}
          <article className={styles.caseStudyBlock}>
            {/* Left: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>05 // COMPUTER VISION · IMBALANCED DETECTION</span>
                <span className={styles.paperStatusBadge}>
                  <span className={styles.paperStatusDot} />
                  {welding.statusBadge}
                </span>
              </div>

              <h3 className={styles.paperTitle}>
                <Link href={`/projects/${welding.slug}`} className={styles.paperTitleLink}>
                  {welding.title}
                </Link>
              </h3>

              <p className={styles.paperTagline}>{welding.tagline}</p>

              <div className={styles.paperProblemBox}>
                <span className={styles.paperProblemLabel}>The Core Challenge:</span>
                <p className={styles.paperProblemText}>
                  Weld anomalies (porosity voids, lack of fusion) occupy only dozens of pixels across large radiographic frames.
                  Severe class imbalance requires dedicated loss formulation to catch rare flaws.
                </p>
              </div>

              <p className={styles.paperDescription}>
                RetinaNet selected over YOLO for its focal loss mechanism to handle class imbalance, with an OpenCV preprocessing pipeline
                for normalization and bounding-box handling across a 2.4K-image dataset. Precision: 74.7%, Recall: 92.7%, F1-score: 82.7%,
                with a deliberate emphasis on high recall to minimize missed defects in safety-critical environments. Real-time Flask detection
                interface deployed on Hugging Face Spaces, including work to address model-size constraints for deployment.
              </p>

              {welding.disclaimer && (
                <div className={styles.paperDisclaimer}>
                  <AlertTriangle size={15} className={styles.paperDisclaimerIcon} />
                  <span>{welding.disclaimer}</span>
                </div>
              )}

              <div className={styles.paperTagsRow}>
                {welding.tags.primary.map((t) => (
                  <span key={t} className={styles.paperTagPill}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.paperCtaRow} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href={`/projects/${welding.slug}`} className={styles.paperCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={15} />
                </Link>

                {welding.links?.demo && (
                  <a
                    href={welding.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.paperCaseStudyLink}
                    style={{ textDecoration: 'none', color: '#166534', fontWeight: 650 }}
                  >
                    <span>View on Hugging Face Spaces</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${welding.slug}`}
                className={styles.tactileKnob}
                aria-label="Open Welding Defect Detection case study"
                title="Open Welding Defect Detection case study"
              >
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Precision Radiograph Viewport */}
            <div className={styles.instrumentViewport} aria-hidden="true">
              <div className={styles.instrumentFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.simTitleGroup}>
                    <Eye size={12} className={styles.terminalIcon} />
                    <span className={styles.simLabel}>torchvision-retinanet // inference-view</span>
                  </div>
                </div>

                <div className={styles.seamCanvas}>
                  <div className={styles.radiographSeam} />
                  <div className={styles.scanLaserBeam} />

                  <div className={styles.defectBox1}>
                    <span className={styles.boxTag}>Porosity: 0.89</span>
                  </div>
                  <div className={styles.defectBox2}>
                    <span className={styles.boxTag}>Lack of Fusion: 0.93</span>
                  </div>
                  <div className={styles.crosshairH} />
                  <div className={styles.crosshairV} />
                </div>

                <div className={styles.visionMetricsRow}>
                  <span className={styles.metricPill}>Backbone: ResNet-50-FPN</span>
                  <span className={styles.metricPill}>Recall: 92.7%</span>
                  <span className={styles.metricPill}>F1-Score: 82.7%</span>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================
              06: Movie Review System
              Order: 6 · Supporting Full-Stack Web Application (Compact)
              Composition: Content Left, Contract Boundary Right
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockMovie}`}>
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>06 // FULL-STACK WEB APPLICATION · SUPPORTING PROJECT</span>
                <span className={styles.paperStatusBadge}>
                  <span className={styles.paperStatusDot} />
                  {movieReview.statusBadge}
                </span>
              </div>

              <h3 className={styles.paperTitle} style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
                <Link href={`/projects/${movieReview.slug}`} className={styles.paperTitleLink}>
                  {movieReview.title}
                </Link>
              </h3>

              <p className={styles.paperTagline}>{movieReview.tagline}</p>

              <div className={styles.paperProblemBox}>
                <span className={styles.paperProblemLabel}>The Core Challenge:</span>
                <p className={styles.paperProblemText}>
                  Review hubs require strict validation boundaries to prevent malformed ratings, optimistic
                  feed mutations so users experience zero reload latency, and compound indices to handle sort queries.
                </p>
              </div>

              <p className={styles.paperDescription}>
                A supporting full-stack project built to practice frontend and backend integration, application structure,
                REST endpoints, and document persistence using a MERN-style stack (React, Node.js/Express, MongoDB).
              </p>

              <div className={styles.paperTagsRow}>
                {movieReview.tags.primary.map((t) => (
                  <span key={t} className={styles.paperTagPill}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.paperCtaRow}>
                <Link href={`/projects/${movieReview.slug}`} className={styles.paperCaseStudyLink}>
                  <span>Explore practice case study</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <Link
                href={`/projects/${movieReview.slug}`}
                className={styles.tactileKnob}
                aria-label="Open Movie Review System case study"
                title="Open Movie Review System case study"
              >
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: REST Contract Viewport */}
            <div className={styles.instrumentViewport} aria-hidden="true">
              <div className={styles.instrumentFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.simTitleGroup}>
                    <Layers size={12} className={styles.terminalIcon} />
                    <span className={styles.simLabel}>api/reviews // contract-boundary</span>
                  </div>
                </div>

                <div className={styles.schemaBox}>
                  <div className={styles.schemaHeader}>
                    <span className={styles.schemaMethod}>POST /api/reviews</span>
                    <span className={styles.schemaStatus}>201 Created</span>
                  </div>
                  <pre className={styles.codeSnippet}>
{`{
  "movieId": "66f4b2e18d9...",
  "rating": 8.5,
  "comment": "Exceptional pacing...",
  "author": "verified_critic"
}`}
                  </pre>
                </div>

                <div className={styles.contractChecks}>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={13} className={styles.checkIcon} />
                    <span>Schema Validation Middleware (Joi)</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={13} className={styles.checkIcon} />
                    <span>MongoDB Index: &#123; movieId: 1, createdAt: -1 &#125;</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={13} className={styles.checkIcon} />
                    <span>MERN Document Persistence &amp; Feed Aggregation</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
