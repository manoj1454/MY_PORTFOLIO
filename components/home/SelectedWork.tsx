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
          description="Projects are where the interesting engineering decisions happen. Here is an in-depth look at three systems exploring retrieval pipelines, computer-vision inspection, and structured web data flows."
        />

        <div className={styles.editorialWorkList}>
          {/* ============================================================
              CASE STUDY 01: TALQS (Legal QA & Summarization)
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockTalqs}`}>
            <div className={styles.studyNarrative}>
              <div className={styles.studyHeader}>
                <span className={styles.projectIndex}>01 // RETRIEVAL-AUGMENTED GENERATION</span>
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

              <div className={styles.problemBox}>
                <span className={styles.problemLabel}>The Problem:</span>
                <p className={styles.problemText}>
                  Judicial rulings span dozens of unstructured pages with erratic formatting. Standard LLMs
                  truncate context or confidently hallucinate citations without strict grounding.
                </p>
              </div>

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
                <Link href={`/projects/${talqs.slug}`} className={styles.readCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={16} className={styles.ctaArrow} />
                </Link>
              </div>
            </div>

            {/* Bespoke Visual: Retrieval-Augmented Generation Debugger Canvas */}
            <div className={styles.studyVisual} aria-hidden="true">
              <div className={styles.simulatorFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <span className={styles.simLabel}>talqs-retrieval-debugger // v0.2.1</span>
                </div>

                <div className={styles.simQueryArea}>
                  <span className={styles.queryTag}>USER QUERY:</span>
                  <p className={styles.queryContent}>
                    &quot;What bail conditions were imposed under Section 439?&quot;
                  </p>
                </div>

                <div className={styles.simMatchArea}>
                  <div className={styles.matchMeta}>
                    <span className={styles.matchScore}>FAISS EMBEDDING SIMILARITY: 0.884</span>
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
              CASE STUDY 02: Welding Defect Detection (Computer Vision)
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockWelding}`}>
            {/* Visual on the Left for Asymmetric Rhythm */}
            <div className={styles.studyVisual} aria-hidden="true">
              <div className={styles.simulatorFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <span className={styles.simLabel}>torchvision-retinanet // inference-view</span>
                </div>

                <div className={styles.seamCanvas}>
                  <div className={styles.radiographSeam} />
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
                  <span className={styles.metricPill}>NMS IoU: 0.45</span>
                  <span className={styles.metricPill}>Threshold: &gt; 0.50</span>
                </div>
              </div>
            </div>

            <div className={styles.studyNarrative}>
              <div className={styles.studyHeader}>
                <span className={styles.projectIndex}>02 // COMPUTER VISION INSPECTION</span>
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

              <div className={styles.problemBox}>
                <span className={styles.problemLabel}>The Problem:</span>
                <p className={styles.problemText}>
                  Weld flaws (gas porosity, lack of fusion) occupy only dozens of pixels across high-res seams.
                  Object detection with multi-scale feature pyramids is required to isolate anomalies accurately.
                </p>
              </div>

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
                <Link href={`/projects/${welding.slug}`} className={styles.readCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={16} className={styles.ctaArrow} />
                </Link>
              </div>
            </div>
          </article>

          {/* ============================================================
              CASE STUDY 03: Movie Review System (Full-Stack Architecture)
              ============================================================ */}
          <article className={`${styles.caseStudyBlock} ${styles.blockMovie}`}>
            <div className={styles.studyNarrative}>
              <div className={styles.studyHeader}>
                <span className={styles.projectIndex}>03 // FULL-STACK WEB SYSTEMS</span>
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

              <div className={styles.problemBox}>
                <span className={styles.problemLabel}>The Problem:</span>
                <p className={styles.problemText}>
                  Media review platforms require strict API contracts, input sanitization to prevent malformed payloads,
                  and optimistic UI updates so users do not experience jarring page reloads.
                </p>
              </div>

              <p className={styles.projectDescription}>{movieReview.shortDescription}</p>

              <div className={styles.tagsRow}>
                {movieReview.tags.primary.map((t) => (
                  <Tag key={t} label={t} variant="accent" />
                ))}
              </div>

              <div className={styles.ctaRow}>
                <Link href={`/projects/${movieReview.slug}`} className={styles.readCaseStudyLink}>
                  <span>Explore architectural case study</span>
                  <ArrowRight size={16} className={styles.ctaArrow} />
                </Link>
              </div>
            </div>

            {/* Bespoke Visual: REST API & Document Schema Boundary */}
            <div className={styles.studyVisual} aria-hidden="true">
              <div className={styles.simulatorFrame}>
                <div className={styles.simBar}>
                  <div className={styles.simDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <span className={styles.simLabel}>api/reviews/v1 // contract-view</span>
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
                    <CheckCircle2 size={14} className={styles.checkIcon} />
                    <span>Schema Validation Middleware</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={14} className={styles.checkIcon} />
                    <span>Optimistic Feed Updates</span>
                  </div>
                  <div className={styles.checkItem}>
                    <CheckCircle2 size={14} className={styles.checkIcon} />
                    <span>MongoDB Compound Indexing</span>
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
