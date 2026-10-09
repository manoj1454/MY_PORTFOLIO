import React from 'react';
import { ExternalLink, CheckCircle, Info } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import SectionHeading from '../ui/SectionHeading';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Connect & Collaborate"
          description="Interested in discussing a software engineering project, applied machine learning work, or problem solving? Feel free to explore my verified activity."
        />

        <div className={styles.contactWrapper}>
          <div className={`${styles.verifiedCard} card-surface`}>
            <div className={styles.cardHeader}>
              <div className={styles.verifiedBadge}>
                <CheckCircle size={16} className={styles.checkIcon} />
                <span>Verified Public Profiles</span>
              </div>
              <p className={styles.cardSubtext}>
                Directly accessible and verified developer profiles.
              </p>
            </div>

            <div className={styles.socialList}>
              {siteConfig.verifiedSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  aria-label={social.ariaLabel}
                >
                  <div className={styles.socialInfo}>
                    <strong className={styles.socialName}>{social.name}</strong>
                    <span className={styles.socialUrl}>{social.url}</span>
                  </div>
                  <ExternalLink size={18} className={styles.actionIcon} />
                </a>
              ))}
            </div>
          </div>

          <div className={`${styles.pendingCard} card-surface`}>
            <div className={styles.pendingHeader}>
              <Info size={18} className={styles.infoIcon} />
              <h3 className={styles.pendingTitle}>Channels Pending Verification</h3>
            </div>
            <p className={styles.pendingText}>
              To maintain absolute credibility and adhere to the project specification, unverified
              external channels (personal email address, GitHub repository links, and LinkedIn) are
              intentionally omitted until Manoj verifies their active URLs.
            </p>
            <div className={styles.pendingGrid}>
              {siteConfig.pendingSocials.map((item) => (
                <div key={item.name} className={styles.pendingItem}>
                  <span className={styles.pendingName}>{item.name}</span>
                  <span className={styles.pendingStatus}>Requires configuration</span>
                </div>
              ))}
            </div>
            <div className={styles.docRef}>
              See <code>CONTENT_TO_VERIFY.md</code> to configure your direct links.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
