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
    <header className={styles.headerWrapper}>
      <div className={`container ${styles.headerContainer}`}>
        <nav className={styles.dockBar} aria-label="Main navigation">
          {/* Brand Logo with Tactile Icon */}
          <Link href="/" className={styles.brand} aria-label="Manoj homepage">
            <span className={styles.brandIcon} aria-hidden="true">
              <Terminal size={17} />
            </span>
            <span className={styles.brandText}>manoj.dev</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className={styles.desktopNav}>
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action Utilities */}
          <div className={styles.utilityGroup}>
            {/* Verified External Profile */}
            {siteConfig.verifiedSocials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.verifiedBadge}
                aria-label={social.ariaLabel}
              >
                <span>{social.name}</span>
                <ExternalLink size={12} className={styles.badgeIcon} />
              </a>
            ))}

            {/* Deliberate Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Trigger */}
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
}
