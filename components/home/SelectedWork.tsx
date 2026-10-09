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
} from 'lucide-react';
import { projects } from '@/lib/projects';
import SectionHeading from '../ui/SectionHeading';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  const credentials = projects.find((p) => p.slug === 'verifiable-credentials') || projects[0];
  const medical = projects.find((p) => p.slug === 'medical-response-verification') || projects[1];
  const talqs = projects.find((p) => p.slug === 'talqs') || projects[2];
  const welding = projects.find((p) => p.slug === 'welding-defect-detection') || projects[3];
  const movieReview = projects.find((p) => p.slug === 'movie-review-system') || projects[4];

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
          description="Projects structured around practical engineering decisions—multi-service communication, verifiable boundaries, and observable system metrics."
        />

        <div className={styles.editorialWorkList}>
          {/* ============================================================
              01: Verifiable Academic/Professional Credential Platform
              Order: 1 · Blockchain & Decentralized Identity
              Composition: Content Left, Architecture Flow Right
              ============================================================ */}
          <article className={styles.caseStudyBlock}>
            {/* Left: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>01 // BLOCKCHAIN · DECENTRALIZED IDENTITY</span>
                <span className={styles.statusBadgeDev}>
                  <span className={styles.statusDotDev} />
                  {credentials.statusBadge}
                </span>
              </div>

              <h3 className={styles.paperTitle}>
                <Link href={`/projects/${credentials.slug}`} className={styles.paperTitleLink}>
                  {credentials.title}
                </Link>
              </h3>

              <p className={styles.paperTagline}>{credentials.tagline}</p>

              <div className={styles.paperProblemBox}>
                <span className={styles.paperProblemLabel}>The Core Challenge:</span>
                <p className={styles.paperProblemText}>
                  Designing a blockchain-based platform to verify not just certificate integrity but issuer legitimacy —
                  whether the issuing institution was accredited at time of issuance — addressing a gap in existing tamper-evidence-only systems.
                </p>
              </div>

              <p className={styles.paperDescription}>
                Architecting around live-synced accreditation status, multi-signature issuer keys, and support for India&apos;s
                multi-regulator landscape (UGC, AICTE, NCVET, state boards), building on gaps identified in the IEEE ElimuChain system.
                Smart contracts evaluate both file integrity and issuer authority.
              </p>

              <div className={styles.paperTagsRow}>
                {credentials.tags.primary.map((t) => (
                  <span key={t} className={styles.paperTagPill}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.paperCtaRow}>
                <Link href={`/projects/${credentials.slug}`} className={styles.paperCaseStudyLink}>
                  <span>Explore architectural design</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <Link
                href={`/projects/${credentials.slug}`}
                className={styles.tactileKnob}
                aria-label="Open Verifiable Credentials design case study"
                title="Open Verifiable Credentials design case study"
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
                    <ShieldCheck size={12} className={styles.terminalIcon} />
                    <span className={styles.simLabel}>credentials-registry // two-tier-contract</span>
                  </div>
                </div>

                <div className={styles.credFlowBox}>
                  <div className={styles.credTierCard}>
                    <div className={styles.credTierHeader}>
                      <span className={styles.credTierTag}>TIER 01: DOCUMENT INTEGRITY</span>
                      <span className={styles.credTierStatus}>● IPFS Verified</span>
                    </div>
                    <p className={styles.credTierText}>
                      Cryptographic SHA-256 digest of credential transcript matched to decentralized content address.
                    </p>
                    <div className={styles.credTierSub}>
                      <span>CID: QmZ9...48a2</span>
                      <span>Tamper-Proof</span>
                    </div>
                  </div>

                  <div className={styles.credTierCard}>
                    <div className={styles.credTierHeader}>
                      <span className={styles.credTierTag}>TIER 02: ISSUER ACCREDITATION</span>
                      <span className={styles.credTierStatus}>● Active at Issuance</span>
                    </div>
                    <p className={styles.credTierText}>
                      Multi-signature registry verifying institution was recognized by UGC / AICTE when degree was conferred.
                    </p>
                    <div className={styles.credTierSub}>
                      <span>State Registry: Synchronized</span>
                      <span>Multi-Regulator</span>
                    </div>
                  </div>
                </div>

                <div className={styles.simOutputArea}>
                  <span className={styles.outputTag}>PLATFORM ARCHITECTURE:</span>
                  <p className={styles.outputText}>
                    Protects against both post-issuance tampering and unauthorized unaccredited institutional credentials.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================
              02: Hallucination Detection in Medical LLMs
              Order: 2 · Full-Stack & Applied AI
              Inverted Composition: Instrument Left, Content Right
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

            {/* Right: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>02 // FULL-STACK · SERVICE INTEGRATION</span>
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
                  Medical queries answered by generative LLMs risk presenting unverified dosages or contraindications with high confidence.
                  Evaluating an entire response as a single prompt fails to audit individual clinical assertions.
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
          </article>

          {/* ============================================================
              03: TALQS — Legal Document QA & Summarization
              Order: 3 · Document Processing & Retrieval Pipeline
              Composition: Content Left, Retrieval Debugger Right
              ============================================================ */}
          <article className={styles.caseStudyBlock}>
            {/* Left: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>03 // RAG · MULTI-STAGE RETRIEVAL &amp; SUMMARIZATION</span>
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

            {/* Right: Retrieval Debugger Viewport */}
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
          </article>

          {/* ============================================================
              04: Welding Defect Detection System
              Order: 4 · Computer Vision & Model Deployment
              Inverted Composition: Radiograph Viewport Left, Content Right
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockReversed}`}>
            {/* Left: Precision Radiograph Viewport */}
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

            {/* Right: Narrative Surface */}
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>04 // COMPUTER VISION · IMBALANCED DETECTION</span>
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
          </article>

          {/* ============================================================
              05: Movie Review System
              Order: 5 · Supporting Full-Stack Web Application (Compact)
              Composition: Content Left, Contract Boundary Right
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockMovie}`}>
            <div className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperIndex}>05 // FULL-STACK WEB APPLICATION · SUPPORTING PROJECT</span>
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
