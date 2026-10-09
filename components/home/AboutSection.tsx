import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          eyebrow="BACKGROUND & FOCUS"
          title="About Manoj"
          description="A computer science student working between application architecture and applied machine learning."
        />

        <div className={styles.editorialLayout}>
          <div className={styles.primaryColumn}>
            <p className={styles.leadParagraph}>
              I enjoy understanding the complete path of a system—from how raw data or PDFs are parsed,
              how machine learning models generate proposals or embeddings, to how the final web interface
              handles edge cases, loading transitions, and user errors.
            </p>
            <p className={styles.paragraph}>
              My coursework and independent projects have centered on computer vision (detecting structural
              anomalies in images using PyTorch), retrieval-augmented NLP (structuring messy legal documents
              for query extraction), and full-stack web applications backed by modern document databases.
            </p>
            <p className={styles.paragraph}>
              Rather than treating models as black-box magic or web frameworks as boilerplate templates, I
              focus on observable engineering: verifying inputs, examining failure modes, writing clean API
              boundaries, and making sure the final interface responds predictably.
            </p>
          </div>

          <aside className={styles.sidebarColumn}>
            <div className={styles.metaBox}>
              <span className={styles.metaLabel}>Academic Context</span>
              <p className={styles.metaValue}>
                B.Tech in Computer Science &amp; Engineering (Expected 2027)
              </p>
            </div>

            <div className={styles.metaBox}>
              <span className={styles.metaLabel}>Primary Interests</span>
              <ul className={styles.metaList}>
                <li>Computer Vision &amp; Object Detection Pipelines</li>
                <li>Retrieval-Augmented Generation (RAG) &amp; Dense Vector Search</li>
                <li>Full-Stack Web Systems &amp; API Contract Hygiene</li>
                <li>Algorithmic Problem Solving (LeetCode practice)</li>
              </ul>
            </div>

            <div className={styles.metaBox}>
              <span className={styles.metaLabel}>Working Philosophy</span>
              <p className={styles.metaValue}>
                Show concrete evidence over marketing claims. Good engineering is observed in how an
                application handles bad inputs and ambiguous data.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
