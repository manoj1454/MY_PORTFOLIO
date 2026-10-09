import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          eyebrow="ABOUT & PHILOSOPHY"
          title="Understanding the Whole Path"
          description="A computer science student working between application architecture and applied machine learning."
        />

        <div className={styles.editorialGrid}>
          {/* Main Prose Column */}
          <div className={styles.proseColumn}>
            <p className={styles.lead}>
              I build software with a focus on how data moves from end to end—from how raw inputs
              or documents are parsed, how machine learning models generate proposals or embeddings,
              to how the final user interface behaves under network latency and edge cases.
            </p>

            <p className={styles.paragraph}>
              My coursework and independent projects have centered on computer vision (detecting structural
              flaws in images using PyTorch), retrieval-augmented NLP (structuring dense legal documents
              for query extraction), and full-stack web applications backed by modern document databases.
            </p>

            <p className={styles.paragraph}>
              Rather than treating models as black-box magic or web frameworks as boilerplate templates, I
              care about observable engineering: verifying inputs, isolating failure modes, designing clean API
              boundaries, and making sure the resulting interface responds predictably.
            </p>

            {/* Distinct Engineering Philosophy Statement */}
            <div className={styles.philosophyBlock}>
              <span className={styles.philosophyLabel}>ENGINEERING PHILOSOPHY</span>
              <blockquote className={styles.quoteText}>
                &ldquo;Show evidence instead of making grand claims. Good engineering is observed in how an
                application handles bad inputs, ambiguous edge cases, and unexpected failure modes.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Context & Supported Facts Column */}
          <aside className={styles.sidebarColumn}>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Academic Context</span>
              <p className={styles.factValue}>
                B.Tech in Computer Science &amp; Engineering<br />
                <span className={styles.factSub}>Expected Graduation · 2027</span>
              </p>
            </div>

            <div className={styles.factItem}>
              <span className={styles.factLabel}>Technical Focus</span>
              <p className={styles.factValue}>
                Applied Deep Learning &amp; Computer Vision<br />
                Document Retrieval &amp; Dense Search (RAG)<br />
                Full-Stack Architecture &amp; REST Contracts
              </p>
            </div>

            <div className={styles.factItem}>
              <span className={styles.factLabel}>Continuous Practice</span>
              <p className={styles.factValue}>
                Algorithmic problem solving, data structure optimization, and systems fundamentals on LeetCode.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
