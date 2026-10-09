'use client';

import React, { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

function subscribe(callback: () => void) {
  if (typeof document === 'undefined') return () => {};
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.attributeName === 'data-theme') {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true });
  return () => observer.disconnect();
}

function getSnapshot(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
}

function getServerSnapshot(): 'dark' | 'light' {
  return 'dark';
}

export default function ThemeToggle() {
  const currentTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme-preference', nextTheme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  };

  const nextActionLabel =
    currentTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label={nextActionLabel}
      title={nextActionLabel}
    >
      {currentTheme === 'dark' ? (
        <Sun size={16} className={styles.icon} />
      ) : (
        <Moon size={16} className={styles.icon} />
      )}
    </button>
  );
}
