import React from 'react';
import styles from './FooterLandscape.module.css';

export default function FooterLandscape() {
  return (
    <div className={styles.landscapeContainer} aria-hidden="true">
      <svg
        className={styles.landscapeSvg}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="footerSlopeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--border-subtle)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--footer-bg)" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="topoRidgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.25" />
            <stop offset="50%" stopColor="var(--accent-secondary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Topographic Elevation Layer 1 (Distant contour) */}
        <path
          d="M 0,80 Q 240,40 480,70 T 960,45 T 1440,65 L 1440,120 L 0,120 Z"
          fill="var(--surface-raised)"
          opacity="0.5"
        />

        {/* Topographic Elevation Layer 2 (Middle contour) */}
        <path
          d="M 0,90 Q 360,60 720,85 T 1440,75 L 1440,120 L 0,120 Z"
          fill="var(--surface-higher)"
          opacity="0.7"
        />

        {/* Topographic Crest Line (Highlighted Edge) */}
        <path
          d="M 0,98 Q 320,65 680,90 T 1200,75 T 1440,88"
          stroke="url(#topoRidgeGrad)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Constellation Signal Nodes on Ridge */}
        <g fill="var(--accent-secondary)" opacity="0.85">
          <circle cx="320" cy="65" r="2.5" />
          <circle cx="680" cy="90" r="2.5" />
          <circle cx="980" cy="80" r="2" />
          <circle cx="1200" cy="75" r="3" />
        </g>

        {/* Main Base Surface Transition */}
        <path
          d="M 0,105 Q 400,90 800,102 T 1440,98 L 1440,120 L 0,120 Z"
          fill="var(--footer-bg)"
        />
      </svg>
    </div>
  );
}
