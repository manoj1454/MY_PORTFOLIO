'use client';

import React, { useEffect, useRef } from 'react';
import styles from './LivingButterfly.module.css';

export default function LivingButterfly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftWingRef = useRef<HTMLDivElement>(null);
  const rightWingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion or non-hover devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (prefersReducedMotion || isTouchOnly) {
      return;
    }

    const container = containerRef.current;
    const leftWing = leftWingRef.current;
    const rightWing = rightWingRef.current;
    if (!container || !leftWing || !rightWing) return;

    // Movement state
    const pos = { x: window.innerWidth * 0.45, y: 240 };
    const vel = { x: 0, y: 0 };
    let currentAngle = -15; // Heading degrees
    let bank = 0; // Roll degrees
    let pitch = 0;
    let flapPhase = 0;

    const pointer = { x: pos.x, y: pos.y };
    const lastPointer = { x: pos.x, y: pos.y };
    let lastPointerMoveTime = performance.now();
    let hasMoved = false;

    type State = 'FOLLOWING' | 'APPROACHING_PERCH' | 'PERCHED' | 'HOVERING';
    let state: State = 'FOLLOWING';
    let perchedTime = 0;

    interface PerchTarget {
      element: HTMLElement;
      x: number;
      y: number;
      angle: number;
    }
    let activePerch: PerchTarget | null = null;

    // Pointer move listener
    const onPointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastPointer.x, e.clientY - lastPointer.y);

      pointer.x = e.clientX;
      pointer.y = e.clientY;

      if (dist > 4) {
        lastPointer.x = e.clientX;
        lastPointer.y = e.clientY;
        lastPointerMoveTime = now;
        hasMoved = true;

        if (state === 'PERCHED') {
          // Take off from branch
          state = 'FOLLOWING';
          const rad = ((currentAngle - 90) * Math.PI) / 180;
          vel.x = Math.cos(rad) * 90;
          vel.y = Math.sin(rad) * 90;
          activePerch = null;
        } else if (state === 'APPROACHING_PERCH' || state === 'HOVERING') {
          state = 'FOLLOWING';
          activePerch = null;
        }
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let animationFrameId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      animationFrameId = requestAnimationFrame(tick);
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const idleDuration = (now - lastPointerMoveTime) / 1000;

      // ── State Transitions ──────────────────────────────────────────
      if (state === 'FOLLOWING' && hasMoved && idleDuration > 1.6) {
        // Find closest visible perch in viewport
        const perchElements = document.querySelectorAll<HTMLElement>('[data-butterfly-perch]');
        let closestPerch: PerchTarget | null = null;
        let minDistance = 460; // Max distance for candidate landing

        perchElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          // Check if perch is comfortably visible in viewport
          if (
            rect.bottom > 20 &&
            rect.top < window.innerHeight - 20 &&
            rect.right > 20 &&
            rect.left < window.innerWidth - 20
          ) {
            const px = rect.left + rect.width / 2;
            const py = rect.top + rect.height / 2;
            const d = Math.hypot(px - pos.x, py - pos.y);
            if (d < minDistance) {
              minDistance = d;
              closestPerch = {
                element: el,
                x: px,
                y: py,
                angle: parseFloat(el.getAttribute('data-perch-angle') || '0'),
              };
            }
          }
        });

        if (closestPerch) {
          activePerch = closestPerch;
          state = 'APPROACHING_PERCH';
        } else {
          state = 'HOVERING';
        }
      }

      let wingAngle = 35;

      // ── Physics & State Updates ────────────────────────────────────
      if (state === 'FOLLOWING') {
        // Natural trailing distance: offset behind cursor trajectory
        const speed = Math.hypot(vel.x, vel.y);
        const trailDist = Math.min(38, Math.max(24, speed * 0.16));
        const trailAngle = speed > 5 ? Math.atan2(vel.y, vel.x) + Math.PI : Math.PI * 0.75;
        const targetX = pointer.x + Math.cos(trailAngle) * trailDist;
        const targetY = pointer.y + Math.sin(trailAngle) * trailDist;

        const dx = targetX - pos.x;
        const dy = targetY - pos.y;

        // Smooth spring physics with deceleration
        const spring = 4.2;
        const damping = Math.pow(0.86, dt * 60);

        vel.x = (vel.x + dx * spring * dt) * damping;
        vel.y = (vel.y + dy * spring * dt) * damping;

        pos.x += vel.x * dt;
        pos.y += vel.y * dt;

        // Turn body toward movement direction
        if (speed > 8) {
          const targetHeading = (Math.atan2(vel.y, vel.x) * 180) / Math.PI + 90;
          const diff = (((targetHeading - currentAngle + 540) % 360) - 180);
          currentAngle += diff * Math.min(1, dt * 8.5);
          bank += (Math.max(-28, Math.min(28, diff * 0.65)) - bank) * Math.min(1, dt * 10);
        } else {
          bank += (0 - bank) * Math.min(1, dt * 6);
        }

        // Wing flapping speed: calm, natural flight stroke (~3 cycles/sec)
        const flapRate = Math.min(3.6, Math.max(2.6, 2.9 + speed * 0.003));
        flapPhase += dt * flapRate * Math.PI * 2;
        wingAngle = 18 + 48 * Math.pow(Math.max(0, Math.sin(flapPhase)), 0.85);

      } else if (state === 'APPROACHING_PERCH' && activePerch) {
        // Update perch coordinates in case of scroll
        const rect = activePerch.element.getBoundingClientRect();
        activePerch.x = rect.left + rect.width / 2;
        activePerch.y = rect.top + rect.height / 2;

        const dx = activePerch.x - pos.x;
        const dy = activePerch.y - pos.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 7) {
          // Landed on branch
          pos.x = activePerch.x;
          pos.y = activePerch.y;
          vel.x = 0;
          vel.y = 0;
          currentAngle = activePerch.angle;
          bank = 0;
          pitch = 0;
          state = 'PERCHED';
          perchedTime = now;
        } else {
          // Approach gently
          const ease = Math.min(1, dt * 5);
          pos.x += dx * ease;
          pos.y += dy * ease;

          const targetHeading = activePerch.angle;
          const diff = (((targetHeading - currentAngle + 540) % 360) - 180);
          currentAngle += diff * Math.min(1, dt * 6);

          flapPhase += dt * 3.0 * Math.PI * 2;
          wingAngle = 20 + 35 * Math.sin(flapPhase);
        }

      } else if (state === 'PERCHED' && activePerch) {
        // Track branch position smoothly during scroll
        const rect = activePerch.element.getBoundingClientRect();
        pos.x = rect.left + rect.width / 2;
        pos.y = rect.top + rect.height / 2;

        // Perched wing behavior: resting mostly open/folded with gentle 0.25-0.35 Hz display
        const perchDuration = (now - perchedTime) / 1000;
        const breath = Math.sin(perchDuration * 1.8);
        // Occasional gentle display flick every 4s
        const flickCycle = Math.sin(perchDuration * 1.5);
        const flick = flickCycle > 0.90 ? Math.sin(perchDuration * 8) * 8 : 0;

        wingAngle = 55 + breath * 5 + flick;
        currentAngle = activePerch.angle + Math.sin(perchDuration * 0.8) * 1.2;
        bank = 0;
        pitch = 0;

      } else if (state === 'HOVERING') {
        // Graceful hovering drift near pointer
        const hoverT = (now - lastPointerMoveTime) / 1000;
        const hoverTargetX = pointer.x + 32 + Math.sin(hoverT * 1.3) * 16;
        const hoverTargetY = pointer.y - 24 + Math.cos(hoverT * 2.6) * 10;

        const dx = hoverTargetX - pos.x;
        const dy = hoverTargetY - pos.y;

        pos.x += dx * Math.min(1, dt * 3.5);
        pos.y += dy * Math.min(1, dt * 3.5);

        flapPhase += dt * 2.8 * Math.PI * 2;
        wingAngle = 22 + 38 * Math.pow(Math.max(0, Math.sin(flapPhase)), 0.85);

        const targetHeading = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        const diff = (((targetHeading - currentAngle + 540) % 360) - 180);
        currentAngle += diff * Math.min(1, dt * 4);
        bank += (0 - bank) * Math.min(1, dt * 5);
      }

      // ── Apply Hardware-Accelerated 3D Transforms ───────────────────
      const inHero = window.scrollY < window.innerHeight * 0.55;
      container.style.opacity = inHero ? '0' : '1';
      container.style.transition = 'opacity 0.35s ease';
      container.style.transform = `translate3d(${pos.x - 19}px, ${pos.y - 16}px, 0) rotate(${currentAngle.toFixed(2)}deg) rotateX(${pitch.toFixed(2)}deg) rotateY(${bank.toFixed(2)}deg)`;
      leftWing.style.transform = `rotateY(${wingAngle.toFixed(1)}deg)`;
      rightWing.style.transform = `rotateY(${(-wingAngle).toFixed(1)}deg)`;
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <aside className={styles.butterflyLayer} aria-hidden="true">
      <div ref={containerRef} className={styles.butterflyContainer}>
        <div className={styles.butterflyBody}>
          {/* Left Wing Group */}
          <div ref={leftWingRef} className={`${styles.wingPair} ${styles.wingLeft}`}>
            <svg
              className={styles.wingSvg}
              viewBox="0 0 18 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lwForeGrad" x1="100%" y1="50%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#4A6620" />
                  <stop offset="65%" stopColor="#8DAE46" />
                  <stop offset="100%" stopColor="#D8E8B5" />
                </linearGradient>
                <linearGradient id="lwHindGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3C5418" />
                  <stop offset="70%" stopColor="#7B9E3A" />
                  <stop offset="100%" stopColor="#B8CF85" />
                </linearGradient>
              </defs>

              {/* Forewing */}
              <path
                d="M 18,12 C 15,6 8,1 1,2 C -1,5 2,12 8,15 C 13,17 17,14 18,12 Z"
                fill="url(#lwForeGrad)"
              />
              {/* Forewing dark rim */}
              <path
                d="M 1,2 C 8,1 15,6 18,12"
                stroke="#24281B"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Forewing apex lunule dot */}
              <circle cx="4" cy="3" r="0.8" fill="#F4F8EB" opacity="0.9" />

              {/* Hindwing with swallowtail scalloped contour */}
              <path
                d="M 18,13 C 14,14 9,18 8,22 C 8,24 10,25 12,23 C 15,22 17,17 18,13 Z"
                fill="url(#lwHindGrad)"
              />
              {/* Hindwing rim & amber lunule */}
              <path
                d="M 8,22 C 8,24 10,25 12,23 C 15,22 17,17 18,13"
                stroke="#24281B"
                strokeWidth="1"
              />
              <circle cx="10" cy="23.5" r="0.65" fill="#D4AF5F" />
            </svg>
          </div>

          {/* Slender Thorax & Body */}
          <div className={styles.thorax}>
            <svg
              className={styles.antennae}
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 6,9 Q 3,4 1,1 M 6,9 Q 9,4 11,1"
                stroke="#1B1F17"
                strokeWidth="0.85"
                strokeLinecap="round"
              />
              <circle cx="1" cy="1" r="0.6" fill="#1B1F17" />
              <circle cx="11" cy="1" r="0.6" fill="#1B1F17" />
            </svg>
          </div>

          {/* Right Wing Group */}
          <div ref={rightWingRef} className={`${styles.wingPair} ${styles.wingRight}`}>
            <svg
              className={styles.wingSvg}
              viewBox="0 0 18 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="rwForeGrad" x1="0%" y1="50%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4A6620" />
                  <stop offset="65%" stopColor="#8DAE46" />
                  <stop offset="100%" stopColor="#D8E8B5" />
                </linearGradient>
                <linearGradient id="rwHindGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3C5418" />
                  <stop offset="70%" stopColor="#7B9E3A" />
                  <stop offset="100%" stopColor="#B8CF85" />
                </linearGradient>
              </defs>

              {/* Forewing */}
              <path
                d="M 0,12 C 3,6 10,1 17,2 C 19,5 16,12 10,15 C 5,17 1,14 0,12 Z"
                fill="url(#rwForeGrad)"
              />
              {/* Forewing dark rim */}
              <path
                d="M 17,2 C 10,1 3,6 0,12"
                stroke="#24281B"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Forewing apex lunule dot */}
              <circle cx="14" cy="3" r="0.8" fill="#F4F8EB" opacity="0.9" />

              {/* Hindwing with swallowtail scalloped contour */}
              <path
                d="M 0,13 C 4,14 9,18 10,22 C 10,24 8,25 6,23 C 3,22 1,17 0,13 Z"
                fill="url(#rwHindGrad)"
              />
              {/* Hindwing rim & amber lunule */}
              <path
                d="M 10,22 C 10,24 8,25 6,23 C 3,22 1,17 0,13"
                stroke="#24281B"
                strokeWidth="1"
              />
              <circle cx="8" cy="23.5" r="0.65" fill="#D4AF5F" />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}
