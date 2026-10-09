'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { buildSearchIndex, SearchItem } from '@/lib/searchIndex';
import styles from './CommandPalette.module.css';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Default: show all 6 projects first + key sections
      return searchIndex.filter(
        (item) => item.category === 'Projects' || item.id === 'about-main' || item.id === 'contact-email'
      );
    }

    return searchIndex.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some((kw) => kw.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchCat || matchKeywords;
    });
  }, [query, searchIndex]);

  // Group items by category
  const groupedResults = useMemo(() => {
    const groups: { [key: string]: SearchItem[] } = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  // Flattened array for keyboard index mapping
  const flatItems = useMemo(() => {
    const items: SearchItem[] = [];
    Object.values(groupedResults).forEach((group) => {
      items.push(...group);
    });
    return items;
  }, [groupedResults]);

  const handleClose = () => {
    setQuery('');
    setActiveIndex(0);
    onClose();
  };

  // Focus input when opened & lock scroll
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Navigate to item
  const handleSelect = (item: SearchItem) => {
    handleClose();

    if (item.url.startsWith('mailto:')) {
      window.location.assign(item.url);
    } else if (item.url.startsWith('http')) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.url.startsWith('/projects/')) {
      router.push(item.url);
    } else if (item.url.startsWith('#')) {
      if (window.location.pathname === '/') {
        const el = document.querySelector(item.url);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/' + item.url);
      }
    }
  };

  // Keyboard navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1 < flatItems.length ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : flatItems.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (flatItems[activeIndex]) {
        handleSelect(flatItems[activeIndex]);
      }
    }
  };

  if (!isOpen) return null;

  let currentIndexTracker = 0;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search portfolio content"
    >
      <div className={styles.modal} onKeyDown={handleKeyDown}>
        {/* Search Input Bar */}
        <div className={styles.inputRow}>
          <Search size={18} className={styles.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="Search projects, skills, principles, approach..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            aria-autocomplete="list"
          />
          <kbd className={styles.escKey}>ESC</kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className={styles.resultsList}>
          {flatItems.length === 0 ? (
            <div className={styles.emptyState}>
              <Sparkles size={24} style={{ color: 'var(--accent-sage)', opacity: 0.8 }} />
              <div className={styles.emptyTitle}>No matching results for &ldquo;{query}&rdquo;</div>
              <p className={styles.emptyDesc}>
                Try searching for technologies (e.g. &ldquo;FastAPI&rdquo;, &ldquo;React&rdquo;, &ldquo;ChromaDB&rdquo;) or
                projects (&ldquo;Credentials&rdquo;, &ldquo;Medical&rdquo;, &ldquo;TALQS&rdquo;).
              </p>
            </div>
          ) : (
            Object.entries(groupedResults).map(([category, items]) => (
              <div key={category} className={styles.groupBlock}>
                <div className={styles.groupLabel}>{category}</div>
                {items.map((item) => {
                  const itemIndex = currentIndexTracker++;
                  const isCurrent = itemIndex === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`${styles.itemButton} ${isCurrent ? styles.active : ''}`}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setActiveIndex(itemIndex)}
                    >
                      <div className={styles.itemLeft}>
                        <div className={styles.itemTitleRow}>
                          <span className={styles.itemTitle}>{item.title}</span>
                          {item.badge && <span className={styles.itemBadge}>{item.badge}</span>}
                        </div>
                        <span className={styles.itemDesc}>{item.description}</span>
                      </div>
                      <ArrowRight size={15} className={styles.itemArrow} />
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className={styles.footerBar}>
          <div className={styles.footerShortcuts}>
            <span>
              <kbd>↑</kbd> <kbd>↓</kbd> Navigate
            </span>
            <span>
              <kbd>
                <CornerDownLeft size={10} style={{ display: 'inline', verticalAlign: 'middle' }} />
              </kbd>{' '}
              Select
            </span>
            <span>
              <kbd>ESC</kbd> Close
            </span>
          </div>
          <div>{flatItems.length} available</div>
        </div>
      </div>
    </div>
  );
}
