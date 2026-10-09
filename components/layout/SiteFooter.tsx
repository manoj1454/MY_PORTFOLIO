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
              Computer Science student building full-stack software and exploring applied machine learning.
              Dedicated to clear architectures, honest metrics, and polished implementation.
            </p>
            <div className={styles.academicMeta}>
              <span>{siteConfig.education.degree} in {siteConfig.education.field}</span>
              <span className={styles.metaDivider}>·</span>
              <span>{siteConfig.education.expectedGraduation}</span>
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
                <Link href="/projects/talqs" className={styles.footerLink}>
                  TALQS (Legal QA & Summarization)
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

          {/* Col 4: Verified Profiles & Note */}
          <div className={styles.colProfiles}>
            <h3 className={styles.colHeading}>Connect</h3>
            <ul className={styles.linkList}>
              {siteConfig.verifiedSocials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verifiedLink}
                  >
                    <span>{social.name}</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.verificationNote}>
              External profiles (GitHub, LinkedIn, Email) are pending owner verification in{' '}
              <code>lib/site.ts</code>.
            </p>
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
