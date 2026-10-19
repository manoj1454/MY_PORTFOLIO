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
          <div className={styles.erpArchContainer}>
            {/* Tier 01: Client Access Boundaries */}
            <div className={styles.erpArchTier}>
              <div className={styles.erpArchTierHeader}>
                <div className={styles.erpTierLabelGroup}>
                  <span className={styles.erpTierNumber}>TIER 01</span>
                  <span className={styles.erpTierTitle}>Access Boundaries &amp; User Personas</span>
                </div>
                <span className={styles.erpTierBadge}>Multi-Role Browser Interface</span>
              </div>
              <div className={`${styles.erpTierGrid} ${styles.erpTierGrid3}`}>
                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Superadmin Console</span>
                    <span className={`${styles.erpRolePill} ${styles.erpRoleSuper}`}>SUPERADMIN</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Unrestricted access to studio financial ledgers, billing rates, CRM customer master, project allocations, and audit logs.
                  </p>
                  <div className={styles.erpCardMeta}>Full CRUD · Financial Ledger · Rate Config</div>
                </div>

                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Employee Workspace</span>
                    <span className={`${styles.erpRolePill} ${styles.erpRoleEmployee}`}>EMPLOYEE</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Operational execution tools: drag-and-drop Kanban board, sub-task status updates, and persistent billable time tracker. Financial areas restricted.
                  </p>
                  <div className={styles.erpCardMeta}>Kanban · Task Tree · Zustand Timer</div>
                </div>

                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>External Client Portal</span>
                    <span className={`${styles.erpRolePill} ${styles.erpRoleClient}`}>CLIENT</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Quarantined external view: assigned project milestones, authorized deliverables download, invoice review, and simulated payment testing.
                  </p>
                  <div className={styles.erpCardMeta}>Isolated Scope · Asset Vault · Invoice Sim</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.erpArchConnector} aria-hidden="true">
              <span className={styles.erpConnectorLine} />
              <span className={styles.erpConnectorText}>↓ EDGE PERIMETER ROUTING (SESSION COOKIES &amp; JWT ROLES) ↓</span>
              <span className={styles.erpConnectorLine} />
            </div>

            {/* Tier 02: Edge Perimeter Security */}
            <div className={styles.erpArchTier}>
              <div className={styles.erpArchTierHeader}>
                <div className={styles.erpTierLabelGroup}>
                  <span className={styles.erpTierNumber}>TIER 02</span>
                  <span className={styles.erpTierTitle}>Edge Perimeter &amp; Session Authorization</span>
                </div>
                <span className={styles.erpTierBadge}>Next.js Edge Middleware</span>
              </div>
              <div className={`${styles.erpTierGrid} ${styles.erpTierGrid2}`}>
                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Next.js Edge Middleware</span>
                    <span className={styles.nodeTag}>PERIMETER RBAC</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Intercepts incoming requests at the network edge before protected routes or server actions render. Enforces zero-trust route boundaries without cold-start database queries.
                  </p>
                  <div className={styles.erpCardMeta}>Route Interception · Path Guards · Edge Defense</div>
                </div>

                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>NextAuth.js Session Management</span>
                    <span className={styles.nodeTag}>JWT CLAIMS</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Augments encrypted session tokens with role data (SUPERADMIN / EMPLOYEE / CLIENT), enabling stateless verification across middleware and downstream server actions.
                  </p>
                  <div className={styles.erpCardMeta}>JWT Augmentation · Encrypted Cookie · Zero DB Hop</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.erpArchConnector} aria-hidden="true">
              <span className={styles.erpConnectorLine} />
              <span className={styles.erpConnectorText}>↓ SERVER ACTIONS &amp; STATE SYNCHRONIZATION ↓</span>
              <span className={styles.erpConnectorLine} />
            </div>

            {/* Tier 03: Application & State Engine */}
            <div className={styles.erpArchTier}>
              <div className={styles.erpArchTierHeader}>
                <div className={styles.erpTierLabelGroup}>
                  <span className={styles.erpTierNumber}>TIER 03</span>
                  <span className={styles.erpTierTitle}>Application Server &amp; Dual-State Engine</span>
                </div>
                <span className={styles.erpTierBadge}>Next.js 14 App Router</span>
              </div>
              <div className={`${styles.erpTierGrid} ${styles.erpTierGrid2}`}>
                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Client State &amp; Optimistic UI</span>
                    <span className={styles.nodeTag}>ZUSTAND + TANSTACK</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    TanStack Query v5 powers optimistic drag-and-drop Kanban updates with automated rollback handlers. Zustand manages the persistent global billable timer surviving page refreshes.
                  </p>
                  <div className={styles.erpCardMeta}>Immediate Perceived Response · Cache Rollback · Timer Persistence</div>
                </div>

                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Next.js Server Actions</span>
                    <span className={styles.nodeTag}>ASYNC MUTATIONS</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Secure server-side procedures executing CRM logging, Kanban status transitions, time entry writes, and invoice aggregation with defense-in-depth authorization.
                  </p>
                  <div className={styles.erpCardMeta}>Server Actions · Route Handlers · Input Validation</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.erpArchConnector} aria-hidden="true">
              <span className={styles.erpConnectorLine} />
              <span className={styles.erpConnectorText}>↓ ATOMIC DATABASE TRANSACTIONS ($TRANSACTION) ↓</span>
              <span className={styles.erpConnectorLine} />
            </div>

            {/* Tier 04: Relational Domain Modules */}
            <div className={styles.erpArchTier}>
              <div className={styles.erpArchTierHeader}>
                <div className={styles.erpTierLabelGroup}>
                  <span className={styles.erpTierNumber}>TIER 04</span>
                  <span className={styles.erpTierTitle}>Relational Domain Engines</span>
                </div>
                <span className={styles.erpTierBadge}>Prisma ORM ACID Boundaries</span>
              </div>
              <div className={`${styles.erpTierGrid} ${styles.erpTierGrid4}`}>
                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Project Hierarchy</span>
                    <span className={styles.nodeTag}>4-LEVEL</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Project → Phase → Task → Sub-task. Automatically promotes phase to COMPLETED when all sub-tasks finish.
                  </p>
                  <div className={styles.erpCardMeta}>Relational Tree · Auto-Promotion</div>
                </div>

                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Financial Pipeline</span>
                    <span className={styles.nodeTag}>ATOMIC ACID</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Timer → TimeEntry → Invoice → Payment. Prisma $transaction binds line items and marks entries billed atomically.
                  </p>
                  <div className={styles.erpCardMeta}>Zero Double-Billing · Zero Partial Writes</div>
                </div>

                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>Immutable Vault</span>
                    <span className={styles.nodeTag}>NON-DESTRUCTIVE</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Uploads create immutable AssetVersion records with uploader, timestamp, and change rationale audit trails.
                  </p>
                  <div className={styles.erpCardMeta}>Version History · Change Attribution</div>
                </div>

                <div className={styles.erpArchCard}>
                  <div className={styles.erpCardTitleRow}>
                    <span className={styles.erpCardTitle}>CRM Master Directory</span>
                    <span className={styles.nodeTag}>TOUCHPOINT LOG</span>
                  </div>
                  <p className={styles.erpCardDesc}>
                    Client directory with status filtering (Leads, Active, Retainer) + interaction history (Calls, Emails, Meetings).
                  </p>
                  <div className={styles.erpCardMeta}>Centralized Master · Account History</div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.erpArchConnector} aria-hidden="true">
              <span className={styles.erpConnectorLine} />
              <span className={styles.erpConnectorText}>↓ SERVERLESS CONNECTION POOL (IPV4 COMPATIBLE) ↓</span>
              <span className={styles.erpConnectorLine} />
            </div>

            {/* Tier 05: Persistence Layer */}
            <div className={styles.erpArchTier}>
              <div className={styles.erpArchTierHeader}>
                <div className={styles.erpTierLabelGroup}>
                  <span className={styles.erpTierNumber}>TIER 05</span>
                  <span className={styles.erpTierTitle}>Persistence Layer &amp; Schema Integrity</span>
                </div>
                <span className={styles.erpTierBadge}>Neon Serverless PostgreSQL</span>
              </div>
              <div className={styles.erpArchCard}>
                <div className={styles.erpCardTitleRow}>
                  <span className={styles.erpCardTitle}>Neon.tech Serverless PostgreSQL Backend</span>
                  <span className={styles.nodeTag}>14 NORMALIZED TABLES</span>
                </div>
                <p className={styles.erpCardDesc}>
                  Normalized relational database schema enforcing foreign key cascades, unique invoice number sequences, and indexed query patterns. Migrated to Neon.tech to provide managed, serverless PostgreSQL with robust IPv4 connectivity, resolving Vercel deployment timeouts.
                </p>
                <div className={styles.erpCardMeta}>
                  14 Normalized Tables · Serverless Pool · IPv4 Compatible · Automated Branching
                </div>
              </div>
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
