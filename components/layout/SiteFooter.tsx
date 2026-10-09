import React from 'react';
import Link from 'next/link';
import { ExternalLink, Terminal, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import FooterLandscape from '../illustration/FooterLandscape';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      {/* Visual Topographic Transition */}
      <FooterLandscape />

      <div className={styles.footerContent}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Col 1: Identity & Ethos */}
          <div className={styles.colIdentity}>
            <div className={styles.brandRow}>
              <span className={styles.brandIcon} aria-hidden="true">
                <Terminal size={16} />
              </span>
              <span className={styles.brandText}>manoj.dev</span>
            </div>
            <p className={styles.bioText}>
              Computer Science and Engineering student focused on building dependable software—from backend APIs to full-stack products.
            </p>
            <div className={styles.academicMeta}>
              <span>{siteConfig.education.degree}</span>
              <span className={styles.metaDivider}>·</span>
              <span>{siteConfig.education.dates}</span>
              <span className={styles.metaDivider}>·</span>
              <span>CGPA {siteConfig.education.cgpa}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className={styles.colNav}>
            <h3 className={styles.colHeading}>Navigation</h3>
            <ul className={styles.linkList}>
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Selected Case Studies */}
          <div className={styles.colProjects}>
            <h3 className={styles.colHeading}>Selected Work</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/projects/verifiable-credentials" className={styles.footerLink}>
                  Verifiable Credentials Platform
                </Link>
              </li>
              <li>
                <Link href="/projects/medical-response-verification" className={styles.footerLink}>
                  Medical Verification Platform
                </Link>
              </li>
              <li>
                <Link href="/projects/talqs" className={styles.footerLink}>
                  TALQS (Legal QA &amp; Summarization)
                </Link>
              </li>
              <li>
                <Link href="/projects/welding-defect-detection" className={styles.footerLink}>
                  Welding Defect Detection
                </Link>
              </li>
              <li>
                <Link href="/projects/movie-review-system" className={styles.footerLink}>
                  Movie Review System
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Profiles & Contact */}
          <div className={styles.colProfiles}>
            <h3 className={styles.colHeading}>Connect</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={styles.verifiedLink}
                >
                  <span>Email: {siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.verifiedLink}
                >
                  <span>GitHub (@manoj1454)</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.verifiedLink}
                >
                  <span>LinkedIn (in/manojchary)</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.verifiedSocials[0]?.url || 'https://leetcode.com/u/Manoj_1454/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.verifiedLink}
                >
                  <span>LeetCode (Manoj_1454)</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className={`container ${styles.bottomBar}`}>
          <div className={styles.copyright}>
            <span>&copy; 2026 Manoj. Built with Next.js, TypeScript &amp; Vanilla CSS.</span>
          </div>

          <a href="#main-content" className={styles.backToTop} aria-label="Back to top of page">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
