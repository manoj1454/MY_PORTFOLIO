import React from 'react';
import { ArrowUpRight, Mail, Code } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import SectionHeading from '../ui/SectionHeading';
import styles from './ContactSection.module.css';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection() {
  const contactLinks = [
    {
      title: 'Email',
      value: siteConfig.contact.email,
      url: `mailto:${siteConfig.contact.email}`,
      icon: <Mail size={18} />,
      label: 'Send direct email',
    },
    {
      title: 'GitHub',
      value: 'github.com/manoj1454',
      url: siteConfig.contact.github,
      icon: <GithubIcon size={18} />,
      label: 'Explore code repositories',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/manojchary',
      url: siteConfig.contact.linkedin,
      icon: <LinkedinIcon size={18} />,
      label: 'View professional profile',
    },
    {
      title: 'LeetCode',
      value: 'leetcode.com/u/Manoj_1454',
      url: siteConfig.verifiedSocials[0]?.url || 'https://leetcode.com/u/Manoj_1454/',
      icon: <Code size={18} />,
      label: 'Problem solving activity',
    },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title" style={{ position: 'relative' }}>
      {/* Sylva Architectural Guides */}
      <div className="columnGuides" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      {/* Ghost Backdrop Wordmark */}
      <div className={`${styles.ghostWord} ghostWordmark`} aria-hidden="true">
        CONTACT
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Have a problem worth solving? Let's talk."
          description="I'm interested in software engineering opportunities and projects where thoughtful implementation, reliable systems, and continuous learning matter."
        />

        <div className={styles.contactLayout}>
          <div className={styles.mainInvite}>
            <p className={styles.inviteText}>
              Whether you are looking to discuss full-stack development, multi-service architecture,
              or an engineering opportunity, I welcome the conversation.
            </p>

            <div className={styles.verifiedGroup}>
              {contactLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={styles.primaryLink}
                  aria-label={item.label}
                >
                  <div className={styles.linkInfo}>
                    <span className={styles.linkTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {item.icon}
                      <span>{item.title}</span>
                    </span>
                    <span className={styles.linkUrl}>{item.value}</span>
                  </div>
                  <ArrowUpRight size={20} className={styles.linkArrow} />
                </a>
              ))}
            </div>
          </div>

          <aside className={styles.verificationSidebar}>
            <div className={styles.noteBox}>
              <span className={styles.noteTitle}>Communication Preference</span>
              <p className={styles.noteText}>
                Email is the best channel for direct contact. You can write directly to{' '}
                <code>{siteConfig.contact.email}</code>.
              </p>
              <p className={styles.noteText}>
                In accordance with personal privacy preferences, direct phone contact is withheld from public web display; professional inquiries are managed through email and LinkedIn.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="tag-pill tag-pill-accent"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Mail size={13} />
                  <span>Compose Email</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
