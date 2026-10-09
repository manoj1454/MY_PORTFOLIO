'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Terminal,
  Layers,
  Compass,
  Cpu,
  BookOpen,
  Mail,
  ExternalLink,
  Search,
} from 'lucide-react';
import { siteConfig } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';
import CommandPalette from '@/components/search/CommandPalette';
import styles from './SiteHeader.module.css';

interface NavItemMeta {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItemMeta[] = [
  { label: 'Work', href: '#work', icon: <Layers size={14} /> },
  { label: 'About', href: '#about', icon: <Compass size={14} /> },
  { label: 'Toolkit', href: '#toolkit', icon: <Cpu size={14} /> },
  { label: 'Approach', href: '#principles', icon: <BookOpen size={14} /> },
  { label: 'Contact', href: '#contact', icon: <Mail size={14} /> },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const dockRef = useRef<HTMLElement>(null);
  const [activeHash, setActiveHash] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchTriggerRef = useRef<HTMLButtonElement>(null);

  // Global Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        const target = e.target as HTMLElement;
        const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
        if (!isInput || target.closest('[role="dialog"]')) {
          e.preventDefault();
          setIsSearchOpen((prev) => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track hash on client for active dock indicator
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Specular rim highlight & proximity interaction inspired by Sylva
  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = dock.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Distance from dock bounds
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Specular angle pointing back to pointer
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const reach = 220;
      const rawBright = Math.max(0, 1 - dist / reach);
      const brightness = (rawBright * rawBright * (3 - 2 * rawBright)).toFixed(3);

      dock.style.setProperty('--spec-angle', `${angle.toFixed(4)}rad`);
      dock.style.setProperty('--spec-bright', brightness);

      // Proximity magnification for dock items
      const items = dock.querySelectorAll<HTMLElement>('[data-dock-item]');
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const itemDist = Math.abs(e.clientX - itemCenterX);
        const near = dist < 40 && itemDist < 60;
        item.setAttribute('data-near', near ? 'true' : 'false');
      });
    };

    const handlePointerLeave = () => {
      dock.style.setProperty('--spec-bright', '0');
      const items = dock.querySelectorAll<HTMLElement>('[data-dock-item]');
      items.forEach((item) => item.setAttribute('data-near', 'false'));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <header className={styles.headerWrapper}>
      <div className={`container ${styles.headerContainer}`}>
        <nav
          ref={dockRef}
          className={`${styles.dockBar} par-dock`}
          data-spec
          aria-label="Primary navigation"
        >
          {/* Tactile Mark Tile: Solid pale material anchor */}
          <Link
            href="/"
            className={styles.dockMark}
            aria-label="Manoj homepage"
            title="Manoj portfolio home"
          >
            <span className={styles.markGlyph} aria-hidden="true">
              <Terminal size={15} />
            </span>
            <span className={styles.markText}>manoj.dev</span>
          </Link>

          {/* Tactile Pill Navigation */}
          <div className={styles.pillsGroup}>
            {NAV_ITEMS.map((item) => {
              const isTargetActive =
                pathname === '/' && (activeHash === item.href || (!activeHash && item.href === '#work'));

              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-dock-item
                  className={`${styles.dockItem} ${isTargetActive ? styles.isActive : ''}`}
                >
                  <span className={styles.itemGlyph} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className={styles.itemLabel}>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Tactile Utility Cluster */}
          <div className={styles.utilityCluster}>
            {/* Command Palette Search Trigger */}
            <button
              ref={searchTriggerRef}
              type="button"
              className={styles.searchTriggerBtn}
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search portfolio (Cmd+K)"
              title="Search portfolio (Cmd+K)"
              data-dock-item
            >
              <Search size={14} className={styles.searchIcon} />
              <span className={styles.searchText}>Search</span>
              <kbd className={styles.searchKbd}>⌘K</kbd>
            </button>

            {/* LeetCode Verified Activity Link */}
            {siteConfig.verifiedSocials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-dock-item
                className={styles.verifiedPill}
                aria-label={social.ariaLabel}
                title={`Verified profile on ${social.name}`}
              >
                <span className={styles.verifiedDot} />
                <span className={styles.verifiedName}>{social.name}</span>
                <ExternalLink size={11} className={styles.verifiedIcon} />
              </a>
            ))}

            {/* Tactile Theme Pill */}
            <div className={styles.themeToggleWrap}>
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger Drawer Trigger */}
            <MobileNav onOpenSearch={() => setIsSearchOpen(true)} />
          </div>
        </nav>
      </div>

      {/* Accessible Command Palette */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false);
          searchTriggerRef.current?.focus();
        }}
      />
    </header>
  );
}
