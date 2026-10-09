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
          {/* Deep Forest Canopy Atmosphere */}
          <linearGradient id="deepBlueSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#191C18" stopOpacity="0" />
            <stop offset="45%" stopColor="#1E251C" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#252E22" stopOpacity="0.6" />
          </linearGradient>

          {/* Distant Forest Ridge in Muted Deep Olive */}
          <linearGradient id="distantTealRidge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A3326" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1C2219" stopOpacity="0.95" />
          </linearGradient>

          {/* Midground Rolling Hills in Deep Moss-Slate */}
          <linearGradient id="midgroundTealHills" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#303B2B" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#171C15" stopOpacity="1" />
          </linearGradient>

          {/* Foreground Bedrock Surface Blending into Deep Forest Footer */}
          <linearGradient id="foregroundBedrock" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#151913" />
            <stop offset="100%" stopColor="#121510" />
          </linearGradient>

          {/* Subtle Moss-Amber Crest Accent Line */}
          <linearGradient id="tealCrestGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7E9663" stopOpacity="0.15" />
            <stop offset="35%" stopColor="#9EBD7D" stopOpacity="0.38" />
            <stop offset="70%" stopColor="#C4A87C" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#7E9663" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* ============================================================
            LAYER 1: Distant Stars & Celestial Atmosphere
            ============================================================ */}
        <rect x="0" y="0" width="1440" height="220" fill="url(#deepBlueSky)" />

        <g opacity="0.45">
          <circle cx="180" cy="45" r="1.5" fill="#F4F6EE" />
          <circle cx="450" cy="25" r="2" fill="#C4A87C" />
          <circle cx="760" cy="55" r="1.5" fill="#E5ECD9" />
          <circle cx="1080" cy="35" r="2" fill="#F4F6EE" />
          <circle cx="1320" cy="70" r="1.5" fill="#C4A87C" />
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
