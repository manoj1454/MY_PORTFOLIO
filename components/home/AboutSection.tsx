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
          description="Software Developer focused on full-stack development, backend engineering, system architecture, and integrating intelligent systems into practical applications."
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
                &ldquo;I focus on writing clean, efficient code and building robust software that delivers real-world value—from designing microservices architectures to developing responsive user interfaces.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Context & Supported Facts Column */}
          <aside className={styles.sidebarColumn}>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Education</span>
              {siteConfig.educationList.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: idx < siteConfig.educationList.length - 1 ? '0.75rem' : 0 }}>
                  <p className={styles.factValue}>
                    {edu.degree}<br />
                    <span className={styles.factSub}>
                      {edu.institution} · {edu.dates}
                      {edu.board ? ` (${edu.board})` : ''}
                    </span><br />
                    <span className={styles.factSub} style={{ color: 'var(--accent-teal)' }}>{edu.score}</span>
                  </p>
                </div>
              ))}
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
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      title={`Verify ${cert.name}`}
                    >
                      {cert.name} ↗
                    </a>
                  ) : (
                    cert.name
                  )}
                  <br />
                  <span className={styles.factSub}>{cert.issuer} · {cert.date}</span>
                </p>
              ))}
            </div>

            {siteConfig.positionsOfResponsibility && siteConfig.positionsOfResponsibility.length > 0 && (
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Position of Responsibility</span>
                {siteConfig.positionsOfResponsibility.map((pos, i) => (
                  <p key={i} className={styles.factValue}>
                    {pos.role}<br />
                    <span className={styles.factSub}>{pos.institution} · {pos.year}</span>
                  </p>
                ))}
              </div>
            )}

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
