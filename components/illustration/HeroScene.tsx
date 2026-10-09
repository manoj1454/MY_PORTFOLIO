import React from 'react';
import styles from './HeroScene.module.css';

export default function HeroScene() {
  return (
    <div className={styles.sceneContainer} aria-hidden="true">
      <div className={styles.ambientGlow} />

      <svg
        className={styles.svgCanvas}
        viewBox="0 0 560 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--accent-primary)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-secondary)" stopOpacity="0.3" />
            <stop offset="70%" stopColor="var(--accent-secondary)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="nodeBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--accent-secondary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-warm)" stopOpacity="0.5" />
          </linearGradient>

          <pattern id="topoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="var(--grid-line-color)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Background Grid Plate */}
        <rect x="20" y="20" width="520" height="440" rx="16" fill="url(#topoGrid)" />
        <rect
          x="20"
          y="20"
          width="520"
          height="440"
          rx="16"
          stroke="var(--border-subtle)"
          strokeWidth="1"
        />

        {/* Coordinate tick marks */}
        <g stroke="var(--border-quiet)" strokeWidth="1">
          <line x1="20" y1="120" x2="30" y2="120" />
          <line x1="20" y1="240" x2="30" y2="240" />
          <line x1="20" y1="360" x2="30" y2="360" />
          <line x1="140" y1="20" x2="140" y2="30" />
          <line x1="280" y1="20" x2="280" y2="30" />
          <line x1="420" y1="20" x2="420" y2="30" />
        </g>

        {/* Concentric orbital linework (Systems Map) */}
        <ellipse
          cx="280"
          cy="240"
          rx="210"
          ry="150"
          stroke="url(#orbitGrad1)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          className={styles.slowRotateReverse}
        />
        <ellipse
          cx="280"
          cy="240"
          rx="150"
          ry="105"
          stroke="url(#orbitGrad2)"
          strokeWidth="1.25"
          className={styles.slowRotate}
        />
        <ellipse
          cx="280"
          cy="240"
          rx="90"
          ry="65"
          stroke="var(--border-quiet)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* Interconnected data vector lines */}
        <path
          d="M 110 320 L 210 240 L 280 240 L 370 160 L 460 210"
          stroke="url(#nodeBeamGrad)"
          strokeWidth="1.75"
          strokeDasharray="300"
          className={styles.pulseDash}
        />
        <path
          d="M 150 150 L 210 240 L 320 330 L 430 310"
          stroke="var(--accent-primary)"
          strokeOpacity="0.2"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />

        {/* Central Core Module (Abstract systems hub) */}
        <g transform="translate(280, 240)">
          <circle r="36" fill="var(--surface-higher)" stroke="var(--border-prominent)" strokeWidth="1.5" />
          <circle r="26" fill="var(--surface-raised)" stroke="var(--accent-primary-border)" strokeWidth="1" />
          <circle r="7" fill="var(--accent-primary)" className={styles.corePulse} />
          
          {/* Signal rings around core */}
          <circle
            r="44"
            fill="none"
            stroke="var(--accent-primary)"
            strokeOpacity="0.2"
            strokeWidth="1"
            className={styles.expandRing}
          />
        </g>

        {/* Telemetry Node 1: Ingestion / Data Source */}
        <g transform="translate(110, 320)" className={styles.floatNode1}>
          <rect x="-38" y="-18" width="76" height="36" rx="6" fill="var(--surface-higher)" stroke="var(--border-quiet)" strokeWidth="1" />
          <circle cx="-20" cy="0" r="4" fill="var(--accent-secondary)" />
          <text x="-8" y="4" fill="var(--text-secondary)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.04em">INPUT</text>
        </g>

        {/* Telemetry Node 2: Feature Transformation */}
        <g transform="translate(150, 150)" className={styles.floatNode2}>
          <circle r="16" fill="var(--surface-raised)" stroke="var(--border-quiet)" strokeWidth="1" />
          <polygon points="0,-7 6,5 -6,5" fill="var(--accent-primary)" opacity="0.8" />
        </g>

        {/* Telemetry Node 3: Model Inference Matrix */}
        <g transform="translate(370, 160)" className={styles.floatNode3}>
          <rect x="-42" y="-18" width="84" height="36" rx="6" fill="var(--surface-higher)" stroke="var(--accent-primary-border)" strokeWidth="1" />
          <circle cx="-24" cy="0" r="4" fill="var(--accent-primary)" />
          <text x="-12" y="4" fill="var(--text-main)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.04em">WEIGHTS</text>
        </g>

        {/* Telemetry Node 4: Evaluation / Output */}
        <g transform="translate(460, 210)" className={styles.floatNode1}>
          <rect x="-34" y="-16" width="68" height="32" rx="6" fill="var(--surface-higher)" stroke="var(--accent-warm-border)" strokeWidth="1" />
          <circle cx="-18" cy="0" r="4" fill="var(--accent-warm)" />
          <text x="-7" y="4" fill="var(--text-secondary)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.04em">OUTPUT</text>
        </g>

        {/* Floating Constellation Data Points */}
        <circle cx="210" cy="240" r="3.5" fill="var(--accent-primary)" className={styles.pointFlash1} />
        <circle cx="320" cy="330" r="3" fill="var(--accent-secondary)" className={styles.pointFlash2} />
        <circle cx="430" cy="310" r="3" fill="var(--accent-warm)" className={styles.pointFlash3} />
        <circle cx="230" cy="110" r="2.5" fill="var(--text-muted)" opacity="0.6" />
        <circle cx="390" cy="370" r="2.5" fill="var(--text-muted)" opacity="0.5" />
        <circle cx="100" cy="220" r="2" fill="var(--accent-primary)" opacity="0.4" />
        <circle cx="480" cy="120" r="2" fill="var(--accent-secondary)" opacity="0.4" />

        {/* Signal spark indicators */}
        <line x1="280" y1="60" x2="280" y2="76" stroke="var(--accent-primary)" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="280" y1="404" x2="280" y2="420" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>

      {/* Floating System Status Pill */}
      <div className={styles.statusPill}>
        <span className={styles.statusIndicator} />
        <span className={styles.statusText}>SYS: ACTIVE // APPLIED_ML & FULL_STACK</span>
      </div>
    </div>
  );
}
