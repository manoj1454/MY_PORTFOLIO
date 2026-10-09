import { ArrowUpRight } from 'lucide-react';
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
          description="Interested in discussing a software project, applied machine learning work, or algorithmic problem solving? Feel free to reach out or explore my verified activity."
        />

        <div className={styles.contactLayout}>
          <div className={styles.mainInvite}>
            <p className={styles.inviteText}>
              I am always glad to exchange ideas with fellow developers, recruiters, and engineering teams.
              Whether you want to discuss one of the case studies, explore an applied ML workflow, or talk through
              a full-stack implementation, my public activity is accessible below.
            </p>

            <div className={styles.verifiedGroup}>
              {siteConfig.verifiedSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryLink}
                  aria-label={social.ariaLabel}
                >
                  <div className={styles.linkInfo}>
                    <span className={styles.linkTitle}>View Profile on {social.name}</span>
                    <span className={styles.linkUrl}>{social.url}</span>
                  </div>
                  <ArrowUpRight size={20} className={styles.linkArrow} />
                </a>
              ))}
            </div>
          </div>

          <aside className={styles.verificationSidebar}>
            <div className={styles.noteBox}>
              <span className={styles.noteTitle}>Direct Contact Channels</span>
              <p className={styles.noteText}>
                In accordance with portfolio verification standards, external channels (personal email, GitHub, LinkedIn)
                are held pending Manoj&apos;s direct configuration in <code>lib/site.ts</code>.
              </p>
              <div className={styles.pendingList}>
                {siteConfig.pendingSocials.map((s) => (
                  <span key={s.name} className={styles.pendingPill}>
                    {s.name} · Pending URL
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
