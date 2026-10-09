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
          {/* Deep Blue & Muted Teal Atmosphere */}
          <linearGradient id="deepBlueSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#080B10" stopOpacity="0" />
            <stop offset="45%" stopColor="#0C1929" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#11263C" stopOpacity="0.5" />
          </linearGradient>

          {/* Distant Alpine Ridge in Deep Indigo-Blue */}
          <linearGradient id="distantTealRidge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#132B3A" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0B1A24" stopOpacity="0.9" />
          </linearGradient>

          {/* Midground Rolling Hills in Dark Slate-Teal */}
          <linearGradient id="midgroundTealHills" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0E2230" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#08141D" stopOpacity="1" />
          </linearGradient>

          {/* Foreground Bedrock Surface Blending into Near-Black Footer */}
          <linearGradient id="foregroundBedrock" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#060C12" />
            <stop offset="100%" stopColor="#05070A" />
          </linearGradient>

          {/* Subtle Muted Teal / Blue Crest Accent Line */}
          <linearGradient id="tealCrestGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.15" />
            <stop offset="35%" stopColor="#2DD4BF" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* ============================================================
            LAYER 1: Distant Stars & Celestial Atmosphere
            ============================================================ */}
        <rect x="0" y="0" width="1440" height="220" fill="url(#deepBlueSky)" />

        <g opacity="0.5">
          <circle cx="180" cy="45" r="1.5" fill="#E2E8F0" />
          <circle cx="450" cy="25" r="2" fill="#2DD4BF" />
          <circle cx="760" cy="55" r="1.5" fill="#38BDF8" />
          <circle cx="1080" cy="35" r="2" fill="#E2E8F0" />
          <circle cx="1320" cy="70" r="1.5" fill="#2DD4BF" />
        </g>

        {/* ============================================================
            LAYER 2: Distant Alpine Mountain Ridge
            ============================================================ */}
        <path
          d="M 0,130 
             Q 180,85 360,115 
             T 720,95 
             T 1080,110 
             T 1440,85 
             L 1440,220 L 0,220 Z"
          fill="url(#distantTealRidge)"
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
          fill="url(#midgroundTealHills)"
        />

        {/* Observatory Beacon on the Hillcrest */}
        <g transform="translate(600, 120)">
          <rect x="-8" y="-10" width="16" height="10" rx="2" fill="#132B3A" stroke="#1E3A4B" strokeWidth="0.8" />
          <rect x="-3" y="-7" width="6" height="5" rx="1" fill="#FDE047" />
          <line x1="0" y1="-10" x2="0" y2="-24" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="0" cy="-24" r="2.5" fill="#14B8A6" className={styles.footerBeaconSpark} />
          <circle cx="0" cy="-24" r="7" fill="none" stroke="#14B8A6" strokeOpacity="0.4" strokeWidth="1" />
        </g>

        {/* Silhouetted Evergreen Pines on Crest */}
        <g fill="#060F16">
          <polygon points="280,125 285,140 275,140" />
          <polygon points="295,122 301,138 289,138" />
          <polygon points="310,126 315,140 305,140" />
          <polygon points="880,122 886,138 874,138" />
          <polygon points="898,118 905,137 891,137" />
          <polygon points="915,124 921,139 909,139" />
          <polygon points="1260,128 1266,144 1254,144" />
        </g>

        {/* ============================================================
            LAYER 4: Foreground Rolling Contour & Crest Accent Line
            ============================================================ */}
        <path
          d="M 0,165 
             Q 280,130 560,150 
             T 1120,145 
             T 1440,160"
          stroke="url(#tealCrestGlow)"
          strokeWidth="1.75"
          fill="none"
        />

        <path
          d="M 0,168 
             Q 280,133 560,153 
             T 1120,148 
             T 1440,163 
             L 1440,220 L 0,220 Z"
          fill="url(#foregroundBedrock)"
        />
      </svg>
    </div>
  );
}
