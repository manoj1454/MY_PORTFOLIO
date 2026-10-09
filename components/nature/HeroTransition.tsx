'use client';

import React from 'react';
import styles from './HeroTransition.module.css';

export default function HeroTransition() {
  return (
    <div className={styles.transitionWrap} aria-hidden="true">
      <div className={styles.ambientGlow} />

      <svg
        className={styles.transitionSvg}
        viewBox="0 0 1440 170"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft atmospheric gradient for distant ridge */}
          <linearGradient id="ridgeAtmosphere" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#383B34" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#3B4136" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#45483F" stopOpacity="1" />
          </linearGradient>

          {/* Foreground contour gradient blending into olive environment #45483F */}
          <linearGradient id="forestFloorContour" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E3329" />
            <stop offset="50%" stopColor="#3A3F33" />
            <stop offset="100%" stopColor="#45483F" />
          </linearGradient>

          {/* Branch wood gradient */}
          <linearGradient id="branchWoodGrad" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#2E3529" />
            <stop offset="70%" stopColor="#3C4535" />
            <stop offset="100%" stopColor="#4A5540" />
          </linearGradient>

          {/* Moss cushion tint on branch */}
          <linearGradient id="branchMossGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5E7548" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#7E9663" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A4BE82" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* ── Layer 1: Midground Rolling Moss Ridge Silhouette ────────── */}
        <path
          d="M 0,40 Q 240,10 520,38 T 1080,25 Q 1280,48 1440,30 L 1440,170 L 0,170 Z"
          fill="url(#ridgeAtmosphere)"
        />

        {/* ── Layer 2: Subtle lichen/moss highlight along midground crest ── */}
        <path
          d="M 120,30 Q 320,16 520,38 T 880,28"
          stroke="rgba(164, 190, 130, 0.22)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* ── Layer 3: Foreground Forest Floor Horizon ────────────────── */}
        <path
          d="M 0,85 Q 280,60 640,82 T 1200,72 Q 1340,88 1440,78 L 1440,170 L 0,170 Z"
          fill="url(#forestFloorContour)"
        />

        {/* ── Layer 4: Organic Branch Reaching from Left Margin ───────── */}
        {/* Main curved branch trunk */}
        <path
          d="M -10,30 Q 60,38 120,62 Q 155,75 190,72"
          stroke="url(#branchWoodGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Moss cushion draped over the upper flank of branch */}
        <path
          d="M 10,32 Q 70,39 125,60 Q 152,70 185,69"
          stroke="url(#branchMossGlow)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Subtle twig offshoot with small budding florets */}
        <path
          d="M 95,49 Q 125,40 145,45"
          stroke="rgba(74, 85, 64, 0.85)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Delicate white florets echoing the Sylva moss flora */}
        <circle cx="146" cy="44" r="2.2" fill="#F4F6EE" opacity="0.9" />
        <circle cx="149" cy="47" r="1.6" fill="#F4F6EE" opacity="0.8" />
        <circle cx="187" cy="71" r="2" fill="#E8F0D8" opacity="0.85" />
      </svg>

      {/* Designated butterfly landing perch on the branch tip */}
      <div
        className={styles.perchMarker}
        data-butterfly-perch="hero-ridge"
        data-perch-angle="-14"
        title="Resting branch"
      />
    </div>
  );
}
