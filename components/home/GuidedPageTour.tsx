'use client';

import { useEffect, useRef, useCallback } from 'react';

const TOUR_DURATION = 20000; // 20,000 milliseconds (20 seconds)

export default function GuidedPageTour() {
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);
  const prevScrollBehaviorRef = useRef<string>('');

  const stopTour = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    isRunningRef.current = false;
    document.documentElement.style.scrollBehavior = prevScrollBehaviorRef.current || '';
  }, []);

  const lastTriggerTimeRef = useRef<number>(0);

  const startTour = useCallback(() => {
    const now = performance.now();
    if (now - lastTriggerTimeRef.current < 400) {
      return;
    }
    lastTriggerTimeRef.current = now;

    // If already running, toggle/cancel cleanly
    if (isRunningRef.current) {
      stopTour();
      return;
    }

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const targetMaxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo({
        top: Math.min(window.scrollY + window.innerHeight * 0.8, targetMaxY),
        behavior: 'smooth',
      });
      return;
    }

    // Temporarily disable CSS scroll-behavior: smooth so frame-by-frame rAF is instantaneous and smooth
    prevScrollBehaviorRef.current = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    const startY = window.scrollY || window.pageYOffset;
    const currentMaxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    if (startY >= currentMaxY - 10) {
      // If already at or near bottom, restart from top
      window.scrollTo(0, 0);
      startYRef.current = 0;
    } else {
      startYRef.current = startY;
    }

    startTimeRef.current = performance.now();
    isRunningRef.current = true;

    const step = (now: number) => {
      if (!isRunningRef.current) return;

      const elapsed = now - startTimeRef.current;
      const progress = Math.min(1, elapsed / TOUR_DURATION);

      // Smooth progression from start position to document bottom
      // Using gentle ease-out for calm, readable journey across all sections
      const eased = progress < 1 ? progress * progress * (3 - 2 * progress) : 1;
      const targetMaxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const nextScrollY = startYRef.current + (targetMaxY - startYRef.current) * eased;

      window.scrollTo(0, nextScrollY);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        stopTour();
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, [stopTour]);

  // Cancel promptly on manual user interactions
  useEffect(() => {
    const handleUserCancel = (e?: Event) => {
      if (!isRunningRef.current) return;
      // Protect first 350ms from trailing launch event
      if (performance.now() - startTimeRef.current < 350) return;
      // Ignore clicks/pointer events on the hero shader frame itself
      if (e?.target) {
        const target = e.target as HTMLElement;
        if (target.closest?.('.shader-frame') || target.tagName === 'IFRAME') {
          return;
        }
      }
      stopTour();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isRunningRef.current) return;
      if (
        e.key === 'Escape' ||
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown' ||
        e.key === 'PageUp' ||
        e.key === 'PageDown' ||
        e.key === 'Home' ||
        e.key === 'End' ||
        e.key === ' '
      ) {
        stopTour();
      }
    };

    window.addEventListener('wheel', handleUserCancel, { passive: true });
    window.addEventListener('touchmove', handleUserCancel, { passive: true });
    window.addEventListener('pointerdown', handleUserCancel, { passive: true });
    window.addEventListener('mousedown', handleUserCancel, { passive: true });
    window.addEventListener('click', handleUserCancel, { capture: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleUserCancel);
    window.addEventListener('popstate', handleUserCancel);

    return () => {
      window.removeEventListener('wheel', handleUserCancel);
      window.removeEventListener('touchmove', handleUserCancel);
      window.removeEventListener('pointerdown', handleUserCancel);
      window.removeEventListener('mousedown', handleUserCancel);
      window.removeEventListener('click', handleUserCancel, { capture: true });
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleUserCancel);
      window.removeEventListener('popstate', handleUserCancel);
    };
  }, [stopTour]);

  // Listen for iframe postMessage from play/tour button
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'PORTFOLIO_START_TOUR' || e.data?.type === 'START_PAGE_TOUR') {
        startTour();
      } else if (e.data?.type === 'PORTFOLIO_CANCEL_TOUR') {
        stopTour();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [startTour, stopTour]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.documentElement.style.scrollBehavior = prevScrollBehaviorRef.current || '';
    };
  }, []);

  // No blocking alert or banner popup as specified in Section 4: the page simply scrolls smoothly
  return null;
}
