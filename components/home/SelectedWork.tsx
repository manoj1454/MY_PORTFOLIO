import React from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { projects } from '@/lib/projects';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  const talqs = projects.find((p) => p.slug === 'talqs') || projects[0];
  const welding = projects.find((p) => p.slug === 'welding-defect-detection') || projects[1];
  const movieReview = projects.find((p) => p.slug === 'movie-review-system') || projects[2];

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          eyebrow="ENGINEERING EVIDENCE"
          title="Selected Work"
          description="Projects are where the interesting decisions happen. Here is an editorial look at three systems exploring retrieval pipelines, computer-vision inference, and structured full-stack data flows."
        />

        <div className={styles.editorialWorkList}>
          {/* ============================================================
              SHOWCASE 1: TALQS (Flagship Legal QA & Summarization)
              ============================================================ */}
          <article className={`${styles.showcaseItem} ${styles.showcaseTalqs}`}>
            <div className={styles.showcaseDetails}>
              <div className={styles.headerMeta}>
                <span className={styles.projectNumber}>01 // RETRIEVAL-AUGMENTED GENERATION</span>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {talqs.statusBadge}
                </span>
              </div>

              <h3 className={styles.projectTitle}>
                <Link href={`/projects/${talqs.slug}`} className={styles.titleLink}>
                  {talqs.title}
                </Link>
              </h3>

              <p className={styles.projectTagline}>{talqs.tagline}</p>

              <p className={styles.projectDescription}>{talqs.shortDescription}</p>

              {talqs.disclaimer && (
                <div className={styles.disclaimerCallout}>
                  <AlertTriangle size={15} className={styles.disclaimerIcon} />
                  <span>{talqs.disclaimer}</span>
                </div>
              )}

              <div className={styles.tagsRow}>
                {talqs.tags.primary.map((t) => (
                  <Tag key={t} label={t} variant="accent" />
                ))}
              </div>

              <div className={styles.ctaRow}>
                <Link href={`/projects/${talqs.slug}`} className={styles.readCaseStudyBtn}>
                  <span>Read full case study</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Bespoke Visual Vignette: Document Ingestion & Dense Retrieval Canvas */}
            <div className={styles.visualVignette} aria-hidden="true">
              <div className={styles.ragSimulator}>
                <div className={styles.simHeader}>
                  <div className={styles.simDots}>
                    <span className={styles.simDot} />
                    <span className={styles.simDot} />
                    <span className={styles.simDot} />
                  </div>
                  <span className={styles.simTitle}>talqs-retrieval-debugger // v0.2.1</span>
                </div>

                <div className={styles.simQueryBox}>
                  <span className={styles.simPromptLabel}>QUERY:</span>
                  <span className={styles.simQueryText}>&quot;What bail conditions were imposed under Section 439?&quot;</span>
                </div>

                <div className={styles.simPassageCard}>
                  <div className={styles.passageHeader}>
                    <span className={styles.passageTag}>FAISS MATCH // SCORE: 0.884</span>
                    <span className={styles.passageSource}>Cr.Misc.No. 4082, Para 14</span>
                  </div>
                  <p className={styles.passageSnippet}>
                    &ldquo;...The petitioner shall furnish personal bond of ₹50,000/- with two local sureties,
                    surrender travel documents before the trial court, and appear bi-weekly until conclusion of trial...&rdquo;
                  </p>
                  <div className={styles.passageFooter}>
                    <span className={styles.statusIndicator}>● Grounded in Chunk #24</span>
                    <span className={styles.encoderLabel}>Model: all-MiniLM-L6-v2</span>
                  </div>
                </div>

                <div className={styles.simSynthesisBox}>
                  <span className={styles.synthTag}>SYNTHESIS (T5 / PEGASUS):</span>
                  <p className={styles.synthText}>
                    Bail was granted subject to: 1) ₹50,000 personal bond with two local sureties, 2) passport surrender, 3) bi-weekly court attendance.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================
              SHOWCASE 2: Welding Defect Detection (Computer Vision)
              ============================================================ */}
          <article className={`${styles.showcaseItem} ${styles.showcaseWelding}`}>
            {/* Visual Vignette on the Left for Asymmetric Rhythm */}
            <div className={styles.visualVignette} aria-hidden="true">
              <div className={styles.visionSimulator}>
                <div className={styles.simHeader}>
                  <div className={styles.simDots}>
                    <span className={styles.simDot} />
                    <span className={styles.simDot} />
                    <span className={styles.simDot} />
                  </div>
                  <span className={styles.simTitle}>torchvision-retinanet // inference-view</span>
                </div>

                <div className={styles.seamCanvas}>
                  {/* Simulated Radiographic Seam Background */}
                  <div className={styles.radiographSeam} />

                  {/* Bounding Box 1: Porosity */}
                  <div className={styles.defectBox1}>
                    <span className={styles.boxTag}>Porosity: 0.89</span>
                  </div>

                  {/* Bounding Box 2: Crack */}
                  <div className={styles.defectBox2}>
                    <span className={styles.boxTag}>Lack of Fusion: 0.93</span>
                  </div>

                  {/* Crosshair telemetry lines */}
                  <div className={styles.crosshairH} />
                  <div className={styles.crosshairV} />
                </div>

                <div className={styles.visionMetaRow}>
                  <span className={styles.visionPill}>Backbone: ResNet-50-FPN</span>
                  <span className={styles.visionPill}>NMS IoU: 0.45</span>
                  <span className={styles.visionPill}>Threshold: &gt; 0.50</span>
                </div>
              </div>
            </div>

            <div className={styles.showcaseDetails}>
              <div className={styles.headerMeta}>
                <span className={styles.projectNumber}>02 // COMPUTER VISION INSPECTION</span>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {welding.statusBadge}
                </span>
              </div>

              <h3 className={styles.projectTitle}>
                <Link href={`/projects/${welding.slug}`} className={styles.titleLink}>
                  {welding.title}
                </Link>
              </h3>

              <p className={styles.projectTagline}>{welding.tagline}</p>

              <p className={styles.projectDescription}>{welding.shortDescription}</p>

              {welding.disclaimer && (
                <div className={styles.disclaimerCallout}>
                  <AlertTriangle size={15} className={styles.disclaimerIcon} />
                  <span>{welding.disclaimer}</span>
                </div>
              )}

              <div className={styles.tagsRow}>
                {welding.tags.primary.map((t) => (
                  <Tag key={t} label={t} variant="accent" />
                ))}
              </div>

              <div className={styles.ctaRow}>
                <Link href={`/projects/${welding.slug}`} className={styles.readCaseStudyBtn}>
                  <span>Read full case study</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>

          {/* ============================================================
              SHOWCASE 3: Movie Review System (Full-Stack Architecture)
              ============================================================ */}
          <article className={`${styles.showcaseItem} ${styles.showcaseMovie}`}>
            <div className={styles.showcaseDetails}>
              <div className={styles.headerMeta}>
                <span className={styles.projectNumber}>03 // FULL-STACK WEB SYSTEMS</span>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {movieReview.statusBadge}
                </span>
              </div>

              <h3 className={styles.projectTitle}>
                <Link href={`/projects/${movieReview.slug}`} className={styles.titleLink}>
                  {movieReview.title}
                </Link>
              </h3>

              <p className={styles.projectTagline}>{movieReview.tagline}</p>

              <p className={styles.projectDescription}>{movieReview.shortDescription}</p>

              <div className={styles.tagsRow}>
                {movieReview.tags.primary.map((t) => (
                  <Tag key={t} label={t} variant="accent" />
                ))}
              </div>

              <div className={styles.ctaRow}>
                <Link href={`/projects/${movieReview.slug}`} className={styles.readCaseStudyBtn}>
                  <span>Read full case study</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Bespoke Visual Vignette: Document Schema & API Boundary Canvas */}
            <div className={styles.visualVignette} aria-hidden="true">
              <div className={styles.stackSimulator}>
                <div className={styles.simHeader}>
                  <div className={styles.simDots}>
                    <span className={styles.simDot} />
                    <span className={styles.simDot} />
                    <span className={styles.simDot} />
                  </div>
                  <span className={styles.simTitle}>api/reviews/v1 // contract-view</span>
                </div>

                <div className={styles.schemaCard}>
                  <div className={styles.schemaRow}>
                    <span className={styles.schemaKey}>POST /api/reviews</span>
                    <span className={styles.schemaStatus}>201 Created</span>
                  </div>
                  <pre className={styles.schemaCode}>
{`{
  "movieId": "66f4b2e18d9...",
  "rating": 8.5,
  "comment": "Exceptional pacing...",
  "author": "verified_critic"
}`}
                  </pre>
                </div>

                <div className={styles.schemaFeatures}>
                  <div className={styles.featurePill}>
                    <CheckCircle2 size={13} className={styles.pillIcon} />
                    <span>Schema Validation Boundary</span>
                  </div>
                  <div className={styles.featurePill}>
                    <CheckCircle2 size={13} className={styles.pillIcon} />
                    <span>Optimistic State Updates</span>
                  </div>
                  <div className={styles.featurePill}>
                    <CheckCircle2 size={13} className={styles.pillIcon} />
                    <span>MongoDB Indexing</span>
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
