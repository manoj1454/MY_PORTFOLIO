import React from 'react';
import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          eyebrow="BACKGROUND & PHILOSOPHY"
          title="About Manoj"
          description="A computer science student working between application architecture and applied machine learning."
        />

        <div className={styles.editorialLayout}>
          {/* Left Column: Portrait & Personal Outpost Vignette */}
          <div className={styles.portraitColumn}>
            <div className={styles.portraitWrapper}>
              <div className={styles.organicGlow} />
              <div className={styles.imageFrame}>
                <Image
                  src="/images/manoj.png"
                  alt="Portrait photo of Manoj"
                  width={340}
                  height={420}
                  className={styles.portraitImg}
                  priority
                />
              </div>
              <div className={styles.portraitBadge}>
                <span className={styles.badgeSignal} />
                <span className={styles.badgeText}>Manoj · CS &amp; Applied ML</span>
              </div>
            </div>

            <div className={styles.quickFacts}>
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Focus</span>
                <span className={styles.factValue}>Full-Stack &amp; Applied Deep Learning</span>
              </div>
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Degree</span>
                <span className={styles.factValue}>B.Tech in CSE (Expected 2027)</span>
              </div>
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Active Practice</span>
                <span className={styles.factValue}>Algorithmic Problem Solving (LeetCode)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className={styles.narrativeColumn}>
            <p className={styles.leadParagraph}>
              I enjoy understanding the complete path of a system—from how unstructured data or PDFs
              are parsed, how neural networks generate proposals or embeddings, to how the final web
              interface responds to edge cases, loading states, and user mistakes.
            </p>

            <p className={styles.paragraph}>
              My coursework and independent projects have centered on computer vision (detecting structural
              anomalies in images using PyTorch), retrieval-augmented NLP (structuring dense legal documents
              for query extraction), and full-stack web applications backed by modern document databases.
            </p>

            <p className={styles.paragraph}>
              Rather than treating models as black-box magic or web frameworks as boilerplate templates, I
              focus on observable engineering: verifying inputs, examining failure modes, writing clean API
              boundaries, and making sure the final interface responds predictably.
            </p>

            {/* Editorial Pull Quote / Working Principle Callout */}
            <div className={styles.pullQuote}>
              <p className={styles.quoteText}>
                &ldquo;Show evidence instead of making grand claims. Good engineering is observed in how an
                application handles bad inputs and ambiguous data.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
