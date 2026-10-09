import React from 'react';
import styles from './PipelineDiagram.module.css';

interface PipelineDiagramProps {
  type: 'talqs' | 'welding' | 'moviereview';
  caption?: string;
}

export default function PipelineDiagram({ type, caption }: PipelineDiagramProps) {
  return (
    <figure className={styles.diagramWrapper}>
      <div className={styles.diagramCanvas} role="img" aria-label={`Technical Architecture Diagram for ${type}`}>
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
                <strong>Context Grounding</strong>
                <p>Top-k semantic passage retrieval with chunk citation indices</p>
              </div>
              <div className={styles.nodeDetail}>Strict boundary to prevent ungrounded claims</div>
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
                <strong>Conditioned QA / Summary</strong>
                <p>Sequence-to-sequence model (T5/Pegasus exploration) synthesis</p>
              </div>
              <div className={styles.nodeDetail}>Educational query response + source citation</div>
            </div>
          </div>
        )}

        {type === 'welding' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 01</span>
                <span className={styles.nodeTag}>INPUT</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Weld Image Ingestion</strong>
                <p>High-res seam radiographs & optical inspection imagery</p>
              </div>
              <div className={styles.nodeDetail}>Contrast tuning & standardized normalization</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 02</span>
                <span className={styles.nodeTag}>BACKBONE</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Feature Pyramid (FPN)</strong>
                <p>ResNet-50 multi-scale feature maps from low to deep layers</p>
              </div>
              <div className={styles.nodeDetail}>Detects small pinholes & elongated seam cracks</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 03</span>
                <span className={styles.nodeTag}>DETECTOR</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>RetinaNet Proposals</strong>
                <p>Focal Loss regression + Non-Maximum Suppression (NMS)</p>
              </div>
              <div className={styles.nodeDetail}>Confidence threshold filtering (&gt; 0.50 score)</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>STAGE 04</span>
                <span className={styles.nodeTag}>SERVING</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>Flask API Response</strong>
                <p>Stateless microservice serving bounding box coordinates & scores</p>
              </div>
              <div className={styles.nodeDetail}>JSON coordinate payload + visual overlay</div>
            </div>
          </div>
        )}

        {type === 'moviereview' && (
          <div className={styles.flowGrid}>
            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 01</span>
                <span className={styles.nodeTag}>CLIENT UI</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>React / Next.js Interface</strong>
                <p>Component-based review forms, filter controls, optimistic updates</p>
              </div>
              <div className={styles.nodeDetail}>Client-side boundaries & instant error states</div>
            </div>

            <div className={styles.flowArrow} aria-hidden="true">
              <span>→</span>
            </div>

            <div className={styles.flowNode}>
              <div className={styles.nodeHeader}>
                <span className={styles.nodeNumber}>LAYER 02</span>
                <span className={styles.nodeTag}>ROUTING</span>
              </div>
              <div className={styles.nodeBody}>
                <strong>REST API Controllers</strong>
                <p>Standardized endpoints for movies catalog and user reviews CRUD</p>
              </div>
              <div className={styles.nodeDetail}>Typed JSON contracts, HTTP status code hygiene</div>
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
                <strong>Schema Sanitization</strong>
                <p>Rating boundaries (1–10), text limits, payload sanitization</p>
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
                <p>Flexible movie document schemas & related review sub-documents</p>
              </div>
              <div className={styles.nodeDetail}>Indexed by movie ID & timestamp</div>
            </div>
          </div>
        )}
      </div>

      {caption && <figcaption className={styles.diagramCaption}>{caption}</figcaption>}
    </figure>
  );
}
