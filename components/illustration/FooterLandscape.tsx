import React from 'react';
import styles from './FooterLandscape.module.css';

export default function FooterLandscape() {
  return (
    <div className={styles.landscapeContainer} aria-hidden="true">
      <svg
        className={styles.landscapeSvg}
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Twilight Horizon Atmosphere */}
          <linearGradient id="twilightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#080E18" stopOpacity="0" />
            <stop offset="50%" stopColor="#1E1B4B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#312E81" stopOpacity="0.4" />
          </linearGradient>

          {/* Distant Mountain Ridge */}
          <linearGradient id="distantRidge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
          </linearGradient>

          {/* Midground Rolling Hills */}
          <linearGradient id="midgroundHills" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#080D1A" stopOpacity="1" />
          </linearGradient>

          {/* Foreground Organic Edge */}
          <linearGradient id="foregroundHill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#05080E" />
            <stop offset="100%" stopColor="#020408" />
          </linearGradient>

          {/* Luminous Ridge Highlight Line */}
          <linearGradient id="ridgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#A3E635" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#818CF8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* ============================================================
            LAYER 1: Distant Stars & Celestial Atmosphere
            ============================================================ */}
        <rect x="0" y="0" width="1440" height="220" fill="url(#twilightSky)" />

        <g opacity="0.6">
          <circle cx="210" cy="40" r="1.5" fill="#E0E7FF" />
          <circle cx="480" cy="25" r="2" fill="#A3E635" />
          <circle cx="780" cy="50" r="1.5" fill="#C7D2FE" />
          <circle cx="1120" cy="30" r="2" fill="#FDE047" />
          <circle cx="1340" cy="65" r="1.5" fill="#E0E7FF" />
        </g>

        {/* ============================================================
            LAYER 2: Distant Alpine Mountain Ridge (Bézier curves)
            ============================================================ */}
        <path
          d="M 0,130 
             Q 180,85 360,115 
             T 720,95 
             T 1080,110 
             T 1440,85 
             L 1440,220 L 0,220 Z"
          fill="url(#distantRidge)"
        />

        {/* ============================================================
            LAYER 3: Midground Rolling Terrain with Silhouetted Trees
            ============================================================ */}
        <path
          d="M 0,150 
             C 240,110 420,135 600,120 
             C 800,105 1020,140 1200,125 
             C 1340,115 1400,130 1440,140 
             L 1440,220 L 0,220 Z"
          fill="url(#midgroundHills)"
        />

        {/* Cozy Observatory Beacon on the Hillcrest */}
        <g transform="translate(600, 120)">
          {/* Beacon outpost cabin */}
          <rect x="-8" y="-10" width="16" height="10" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="0.8" />
          {/* Warm glowing window */}
          <rect x="-3" y="-7" width="6" height="5" rx="1" fill="#FDE047" />
          {/* Signal Antenna */}
          <line x1="0" y1="-10" x2="0" y2="-24" stroke="#E2E8F0" strokeWidth="1" />
          <circle cx="0" cy="-24" r="2.5" fill="#A3E635" className={styles.footerBeaconSpark} />
          {/* Signal ripple */}
          <circle cx="0" cy="-24" r="7" fill="none" stroke="#A3E635" strokeOpacity="0.4" strokeWidth="1" />
        </g>

        {/* Silhouetted Evergreen Pines on Crest */}
        <g fill="#080D1A">
          <polygon points="280,125 285,140 275,140" />
          <polygon points="295,122 301,138 289,138" />
          <polygon points="310,126 315,140 305,140" />
          <polygon points="880,122 886,138 874,138" />
          <polygon points="898,118 905,137 891,137" />
          <polygon points="915,124 921,139 909,139" />
          <polygon points="1260,128 1266,144 1254,144" />
        </g>

        {/* ============================================================
            LAYER 4: Foreground Rolling Contour & Highlight Edge
            ============================================================ */}
        {/* Luminous Ridge Accent Line */}
        <path
          d="M 0,165 
             Q 280,130 560,150 
             T 1120,145 
             T 1440,160"
          stroke="url(#ridgeGlow)"
          strokeWidth="2"
          fill="none"
        />

        {/* Deep Foreground Bedrock Base */}
        <path
          d="M 0,168 
             Q 280,133 560,153 
             T 1120,148 
             T 1440,163 
             L 1440,220 L 0,220 Z"
          fill="url(#foregroundHill)"
        />
      </svg>
    </div>
  );
}
