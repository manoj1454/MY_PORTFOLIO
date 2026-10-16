import React from 'react';
import styles from './PipelineDiagram.module.css';

interface PipelineDiagramProps {
  type: 'erp' | 'medical' | 'talqs' | 'optimus' | 'credentials' | 'welding' | 'moviereview';
  caption?: string;
}

export default function PipelineDiagram({ type, caption }: PipelineDiagramProps) {
  return (
    <figure className={styles.diagramWrapper}>
      <div className={styles.diagramCanvas} role="img" aria-label={`Technical Architecture Diagram for ${type}`}>
        {type === 'erp' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 01</span>
                <span className={styles.nodeTag}>CLIENT &amp; UI</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Next.js 14 Client &amp; Cache</strong>
                <p>TanStack Query &amp; Zustand: Optimistic drag-and-drop Kanban updates</p>
              </div>
              <div className={styles.nodeDetail}>Immediate UI mutations with automated error rollback</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 02</span>
                <span className={styles.nodeTag}>EDGE SECURITY</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Next.js Edge Middleware</strong>
                <p>Zero-Trust edge RBAC enforcing role permissions before route execution</p>
              </div>
              <div className={styles.nodeDetail}>Protects financial ledgers before database or API invocations</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 03</span>
                <span className={styles.nodeTag}>TRANSACTIONS</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Prisma Atomic Pipeline</strong>
                <p>Interactive multi-table transactions for invoice generation &amp; billing</p>
              </div>
              <div className={styles.nodeDetail}>ACID rollbacks guarantee zero partial writes or double-billing</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 04</span>
                <span className={styles.nodeTag}>DATA &amp; VAULT</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>PostgreSQL &amp; Asset Vault</strong>
                <p>Relational storage and non-destructive immutable versioning</p>
              </div>
              <div className={styles.nodeDetail}>Full audit trails for deliverables &amp; contract revisions</div>
            </div>
          </div>
        )}
        {type === 'medical' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 01</span>
                <span className={styles.nodeTag}>CLIENT</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>React Single-Page Client</strong>
                <p>Query input, claim decomposition viewer, visual risk highlights</p>
              </div>
              <div className={styles.nodeDetail}>Visual claim status: supported, refuted, or unverified</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 02</span>
                <span className={styles.nodeTag}>GATEWAY</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Spring Boot API Gateway</strong>
                <p>Request routing, rate limiting, and HTTP/1.1 connection pooling</p>
              </div>
              <div className={styles.nodeDetail}>Resolved Java HttpClient vs. Uvicorn protocol compatibility</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 03</span>
                <span className={styles.nodeTag}>MICROSERVICE</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>FastAPI Verification Service</strong>
                <p>Atomic claim extraction via Groq LLM and contradiction audit</p>
              </div>
              <div className={styles.nodeDetail}>Evaluates each sentence independently to avoid masked errors</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 04</span>
                <span className={styles.nodeTag}>RETRIEVAL</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>ChromaDB + Tavily Fallback</strong>
                <p>2,000+ NIH MedQuAD documents indexed locally; web search fallback</p>
              </div>
              <div className={styles.nodeDetail}>Triggers Tavily search when ChromaDB similarity confidence is low</div>
            </div>
          </div>
        )}

        {type === 'talqs' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 01</span>
                <span className={styles.nodeTag}>INGESTION</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Judicial PDF Ingestion</strong>
                <p>PyMuPDF (fitz) text stream extraction, margin/footnote filtering</p>
              </div>
              <div className={styles.nodeDetail}>Sliding window: 250–400 tokens / 50 stride</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 02</span>
                <span className={styles.nodeTag}>EMBEDDING</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Dense Vector Indexing</strong>
                <p>Sentence-Transformers dense vectors mapped into FAISS vector space</p>
              </div>
              <div className={styles.nodeDetail}>Cosine / Inner-product similarity metric</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 03</span>
                <span className={styles.nodeTag}>RETRIEVAL</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Cross-Encoder Reranking</strong>
                <p>Top-k semantic passage retrieval with chunk citation indices</p>
              </div>
              <div className={styles.nodeDetail}>Strict citation boundaries to ground claims</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 04</span>
                <span className={styles.nodeTag}>SYNTHESIS</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>T5 Legal Summarization</strong>
                <p>Conditioned generation yielding QA answers & multi-stage summaries</p>
              </div>
              <div className={styles.nodeDetail}>88% reported QA accuracy / 85% ROUGE-based quality</div>
            </div>
          </div>
        )}

        {type === 'optimus' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 01</span>
                <span className={styles.nodeTag}>INTERACTION</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Interaction Interface</strong>
                <p>Streamlined interaction patterns minimizing command friction</p>
              </div>
              <div className={styles.nodeDetail}>Clear visibility into assistant state and actions</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 02</span>
                <span className={styles.nodeTag}>DISPATCH</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Modular Service Core</strong>
                <p>Decoupled capability components with clear API boundaries</p>
              </div>
              <div className={styles.nodeDetail}>Allows testing new integrations without breaking core workflows</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 03</span>
                <span className={styles.nodeTag}>RELIABILITY</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>State & Graceful Fallbacks</strong>
                <p>Predictable error handling and state tracking under evolving tools</p>
              </div>
              <div className={styles.nodeDetail}>Fails gracefully with clear user feedback when actions stall</div>
            </div>
          </div>
        )}

        {type === 'credentials' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 01</span>
                <span className={styles.nodeTag}>AUTHORIZATION</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Dual-Approval Issuance</strong>
                <p>Multi-role authorization workflow (Registrar + Department)</p>
              </div>
              <div className={styles.nodeDetail}>Prevents unauthorized single-admin certificate creation</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 02</span>
                <span className={styles.nodeTag}>FINGERPRINT &amp; IPFS</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>SHA-256 &amp; Decentralized Storage</strong>
                <p>Local document hashing; raw transcripts pinned on IPFS via Pinata</p>
              </div>
              <div className={styles.nodeDetail}>Preserves document privacy by storing only fingerprints on-chain</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 03</span>
                <span className={styles.nodeTag}>SMART CONTRACTS</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Polygon Amoy Registry</strong>
                <p>Solidity contracts mapping cryptographic hashes &amp; authorized issuers</p>
              </div>
              <div className={styles.nodeDetail}>Gas-optimized immutable registry on Polygon Amoy testnet</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>TIER 04</span>
                <span className={styles.nodeTag}>VERIFICATION</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Employer Audit &amp; Revocation</strong>
                <p>Instant status query checking document integrity, issuer, &amp; revocation</p>
              </div>
              <div className={styles.nodeDetail}>Enables third-party verification and ongoing revocation checks</div>
            </div>
          </div>
        )}

        {type === 'welding' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>PHASE 01</span>
                <span className={styles.nodeTag}>IMAGE PREP</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>OpenCV Radiographic Prep</strong>
                <p>Normalization, contrast equalization, bounding box scaling</p>
              </div>
              <div className={styles.nodeDetail}>Trained across 2.4K industrial weld imagery dataset</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>PHASE 02</span>
                <span className={styles.nodeTag}>DETECTION</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>RetinaNet + ResNet-FPN</strong>
                <p>Focal loss down-weights easy background sound weld metal</p>
              </div>
              <div className={styles.nodeDetail}>Directly addresses extreme defect class imbalance</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>PHASE 03</span>
                <span className={styles.nodeTag}>TUNING</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Threshold Calibration</strong>
                <p>Prioritizing 92.7% recall to minimize missed flaws (74.7% precision, 82.7% F1)</p>
              </div>
              <div className={styles.nodeDetail}>Safety-critical domain trade-off intentionally selected</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>PHASE 04</span>
                <span className={styles.nodeTag}>SERVING</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Flask & Hugging Face</strong>
                <p>Interactive web endpoint returning annotated bounding overlays</p>
              </div>
              <div className={styles.nodeDetail}>Live demo on Hugging Face Spaces</div>
            </div>
          </div>
        )}

        {type === 'moviereview' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 01</span>
                <span className={styles.nodeTag}>CLIENT</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>React Single-Page Client</strong>
                <p>Movie catalogue browsing, review submission form, score cards</p>
              </div>
              <div className={styles.nodeDetail}>Async lifecycle handling with loading indicators</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 02</span>
                <span className={styles.nodeTag}>API</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Node.js / Express Server</strong>
                <p>RESTful router endpoints for movie lists, reviews, and updates</p>
              </div>
              <div className={styles.nodeDetail}>Structured HTTP response formats & status codes</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 03</span>
                <span className={styles.nodeTag}>VALIDATION</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Payload Sanitization</strong>
                <p>Rating range checks, text boundaries, and input sanitization</p>
              </div>
              <div className={styles.nodeDetail}>Rejects malformed structures before DB commit</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 04</span>
                <span className={styles.nodeTag}>STORAGE</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>MongoDB Collections</strong>
                <p>Movie document schemas and related review sub-documents</p>
              </div>
              <div className={styles.nodeDetail}>Document persistence practice on MERN stack</div>
            </div>
          </div>
        )}
      </div>

      {caption && <figcaption className={styles.diagramCaption}>{caption}</figcaption>}
    </figure>
  );
}
