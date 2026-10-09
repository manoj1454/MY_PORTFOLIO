import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { siteConfig } from '@/lib/site';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title" style={{ position: 'relative' }}>
      {/* Sylva Architectural Guides */}
      <div className="columnGuides" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      {/* Ghost Backdrop Wordmark */}
      <div className={`${styles.ghostWord} ghostWordmark`} aria-hidden="true">
        ABOUT
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="ABOUT &amp; BACKGROUND"
          title="Building Software End to End"
          description="A Computer Science and Engineering student focused on building dependable software—from clear user interfaces and backend APIs to systems that connect services, data, and intelligent capabilities."
        />

        <div className={styles.editorialGrid}>
          {/* Main Prose Column */}
          <div className={styles.proseColumn}>
            {siteConfig.aboutBio.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? styles.lead : styles.paragraph}>
                {paragraph}
              </p>
            ))}

            {/* Distinct Editorial Philosophy Statement */}
            <div className={styles.philosophyPlate}>
              <span className={styles.philosophyLabel}>ENGINEERING FOCUS</span>
              <blockquote className={styles.quoteText}>
                &ldquo;I enjoy working across the stack, understanding how the pieces fit together, and solving the practical problems that make software reliable in the real world.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Context & Supported Facts Column */}
          <aside className={styles.sidebarColumn}>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Education</span>
              <p className={styles.factValue}>
                {siteConfig.education.degree} in {siteConfig.education.field}<br />
                <span className={styles.factSub}>{siteConfig.education.institution} · {siteConfig.education.dates}</span><br />
                <span className={styles.factSub} style={{ color: 'var(--accent-teal)' }}>CGPA: {siteConfig.education.cgpa}</span>
              </p>
            </div>

            <div className={styles.factItem}>
              <span className={styles.factLabel}>Recognition</span>
              {siteConfig.achievements.map((ach, i) => (
                <p key={i} className={styles.factValue}>
                  {ach.title}<br />
                  <span className={styles.factSub}>{ach.event} · {ach.year}</span>
                </p>
              ))}
            </div>

            <div className={styles.factItem}>
              <span className={styles.factLabel}>Certifications</span>
              {siteConfig.certifications.map((cert, i) => (
                <p key={i} className={styles.factValue} style={{ marginBottom: i < siteConfig.certifications.length - 1 ? '0.5rem' : 0 }}>
                  {cert.name}<br />
                  <span className={styles.factSub}>{cert.issuer} · {cert.date}</span>
                </p>
              ))}
            </div>

            <div className={styles.factItem}>
              <span className={styles.factLabel}>Continuous Practice</span>
              <p className={styles.factValue}>
                Data structures and algorithms, object-oriented design, and problem solving practice on LeetCode.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
