'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Terminal } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        {/* Brand / Logo */}
        <Link href="/" className={styles.brand} aria-label="Manoj homepage">
          <span className={styles.brandIcon} aria-hidden="true">
            <Terminal size={18} />
          </span>
          <span className={styles.brandText}>manoj.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Utility Group */}
        <div className={styles.utilities}>
          {/* Verified LeetCode external badge */}
          {siteConfig.verifiedSocials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalBadge}
              aria-label={social.ariaLabel}
            >
              <span>{social.name}</span>
              <ExternalLink size={12} className={styles.badgeIcon} />
            </a>
          ))}

          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Mobile Drawer Trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
