import React from 'react';
import styles from './HeroScene.module.css';

export default function HeroScene() {
  return (
    <div className={styles.sceneContainer} aria-hidden="true">
      {/* Ambient Atmospheric Radial Glows */}
      <div className={styles.ambientNebula} />
      <div className={styles.ambientBeaconGlow} />

      <svg
        className={styles.svgCanvas}
        viewBox="0 0 640 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for celestial backdrop & island strata */}
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#818CF8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <linearGradient id="crescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E0E7FF" />
            <stop offset="100%" stopColor="#A5B4FC" />
          </linearGradient>

          <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0" />
            <stop offset="35%" stopColor="#334155" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#475569" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="cloudGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0" />
            <stop offset="40%" stopColor="#4338CA" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#6366F1" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0" />
          </linearGradient>

          {/* Island Grass & Terrain Gradients */}
          <linearGradient id="grassPlains" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="25%" stopColor="#15803D" />
            <stop offset="75%" stopColor="#166534" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>

          <linearGradient id="hillShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#0F3D1F" />
          </linearGradient>

          <linearGradient id="rockStrata" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="35%" stopColor="#172554" />
            <stop offset="70%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="crystalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A3E635" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          <linearGradient id="outpostDome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="warmWindow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>

        {/* ============================================================
            LAYER 1: Celestial Sky, Distant Stars & Crescent Moon
            ============================================================ */}
        {/* Soft Moon Orb & Glow */}
        <g transform="translate(480, 100)">
          <circle cx="0" cy="0" r="54" fill="url(#moonGlow)" />
          {/* Stylized Crescent Moon */}
          <path
            d="M 12,-26 A 28,28 0 1 0 12,26 A 22,22 0 1 1 12,-26 Z"
            fill="url(#crescentGrad)"
            opacity="0.95"
            filter="drop-shadow(0 0 12px rgba(199, 210, 254, 0.6))"
          />
        </g>

        {/* Constellation Star Points */}
        <g className={styles.starCluster}>
          <circle cx="90" cy="80" r="1.75" fill="#E0E7FF" className={styles.starBlink1} />
          <circle cx="160" cy="50" r="2.2" fill="#FFFFFF" className={styles.starBlink2} />
          <circle cx="240" cy="95" r="1.5" fill="#C7D2FE" className={styles.starBlink3} />
          <circle cx="340" cy="60" r="2" fill="#FDE047" className={styles.starBlink1} />
          <circle cx="420" cy="110" r="1.5" fill="#E0E7FF" className={styles.starBlink2} />
          <circle cx="110" cy="190" r="2" fill="#A3E635" className={styles.starBlink3} />
          <circle cx="560" cy="170" r="1.75" fill="#E0E7FF" className={styles.starBlink1} />
          <circle cx="520" cy="40" r="1.5" fill="#F472B6" className={styles.starBlink2} />
          <circle cx="280" cy="140" r="1.25" fill="#C7D2FE" className={styles.starBlink3} />

          {/* Faint Constellation Linework */}
          <line x1="90" y1="80" x2="160" y2="50" stroke="#818CF8" strokeOpacity="0.25" strokeDasharray="3 3" />
          <line x1="160" y1="50" x2="240" y2="95" stroke="#818CF8" strokeOpacity="0.25" strokeDasharray="3 3" />
          <line x1="340" y1="60" x2="420" y2="110" stroke="#818CF8" strokeOpacity="0.25" strokeDasharray="3 3" />
        </g>

        {/* Ethereal Floating Cloud Bank 1 (Background drift) */}
        <path
          d="M 60,160 Q 140,135 220,155 T 380,145 T 490,165"
          fill="none"
          stroke="url(#cloudGrad2)"
          strokeWidth="28"
          strokeLinecap="round"
          className={styles.cloudDriftSlow}
        />

        {/* ============================================================
            LAYER 2: Mini Orbiting Satellite Islet (Upper Left)
            ============================================================ */}
        <g className={styles.miniIslet1}>
          {/* Rock mass */}
          <path
            d="M 100,210 Q 135,200 170,212 Q 155,250 135,270 Q 115,245 100,210 Z"
            fill="url(#rockStrata)"
            stroke="rgba(255,255,255,0.08)"
          />
          {/* Grassy crest */}
          <path
            d="M 100,210 Q 135,198 170,212 Q 155,218 135,220 Q 115,218 100,210 Z"
            fill="url(#grassPlains)"
          />
          {/* Glowing Crystal Obelisk */}
          <polygon
            points="135,188 140,208 135,214 130,208"
            fill="url(#crystalGlow)"
            filter="drop-shadow(0 0 6px rgba(163, 230, 53, 0.8))"
          />
        </g>

        {/* ============================================================
            LAYER 3: The Main Organic Floating Island (Centerpiece)
            ============================================================ */}
        <g className={styles.floatingIslandGroup}>
          {/* Lower Geological Rock Spire / Roots */}
          <path
            d="M 160,335 
               C 170,390 200,450 250,490 
               C 285,520 320,535 345,510 
               C 380,470 420,410 440,360 
               C 475,340 480,335 480,335 
               Z"
            fill="url(#rockStrata)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
          />

          {/* Geological strata layers & embedded raw crystals */}
          <path
            d="M 220,380 Q 280,410 370,390 L 350,440 Q 275,450 230,420 Z"
            fill="#1E1B4B"
            opacity="0.6"
          />
          <path
            d="M 270,445 Q 315,465 355,445 L 340,480 Q 305,495 280,470 Z"
            fill="#0F172A"
          />

          {/* Glowing crystalline veins in the rock roots */}
          <polygon
            points="285,460 292,450 296,465 290,472"
            fill="url(#crystalGlow)"
            filter="drop-shadow(0 0 8px rgba(129, 140, 248, 0.7))"
          />
          <polygon
            points="360,405 368,396 372,410 365,416"
            fill="#A3E635"
            opacity="0.9"
            filter="drop-shadow(0 0 6px rgba(163, 230, 53, 0.8))"
          />
          <polygon
            points="225,365 232,358 235,370 228,375"
            fill="#818CF8"
            opacity="0.85"
            filter="drop-shadow(0 0 6px rgba(129, 140, 248, 0.8))"
          />

          {/* Main Rolling Grassy Plateau with Organic Curvature */}
          <path
            d="M 140,330 
               C 180,310 230,315 280,305 
               C 330,295 380,285 430,300 
               C 470,312 505,325 500,345 
               C 490,365 440,370 380,375 
               C 310,380 240,375 180,365 
               C 145,355 130,342 140,330 
               Z"
            fill="url(#grassPlains)"
            filter="drop-shadow(0 4px 16px rgba(0,0,0,0.4))"
          />

          {/* Secondary Layered Rolling Hill (Foreground hill with depth) */}
          <path
            d="M 210,335 
               Q 275,310 345,325 
               Q 415,340 475,335 
               Q 435,372 345,375 
               Q 260,370 210,335 
               Z"
            fill="url(#hillShade)"
            opacity="0.85"
          />

          {/* Winding Cobblestone Trail */}
          <path
            d="M 335,290 Q 345,320 320,345 T 305,370"
            fill="none"
            stroke="#64748B"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2 6"
            opacity="0.75"
          />

          {/* ============================================================
              LAYER 4: The Outpost Architecture & Antenna Beacon
              ============================================================ */}
          {/* Modern Observatory Dome */}
          <g transform="translate(330, 280)">
            {/* Outpost Foundation Ring */}
            <ellipse cx="0" cy="12" rx="42" ry="14" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <ellipse cx="0" cy="10" rx="38" ry="12" fill="#1E293B" />

            {/* Observatory Hemisphere Dome */}
            <path
              d="M -32,10 A 32,32 0 0 1 32,10 Z"
              fill="url(#outpostDome)"
              stroke="#64748B"
              strokeWidth="1.5"
            />

            {/* Glowing Observation Bay Window (The heart of the outpost) */}
            <path
              d="M -16,6 A 16,16 0 0 1 16,6 Z"
              fill="url(#warmWindow)"
              className={styles.windowGlow}
              filter="drop-shadow(0 0 12px rgba(251, 146, 60, 0.9))"
            />
            {/* Window muntins / division line */}
            <line x1="0" y1="-10" x2="0" y2="6" stroke="#475569" strokeWidth="1.5" />

            {/* Dome Slit Shutter */}
            <path d="M -6,-22 L -6,10 L 6,10 L 6,-22 Z" fill="#334155" opacity="0.4" />

            {/* High-Gain Telemetry Mast / Communications Antenna */}
            <line x1="0" y1="-22" x2="0" y2="-65" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="-65" r="4.5" fill="#A3E635" className={styles.beaconSignalDot} />

            {/* Signal Transmission Pulse Rings (Animated radio ripples) */}
            <circle
              cx="0"
              cy="-65"
              r="14"
              fill="none"
              stroke="#A3E635"
              strokeWidth="1.5"
              className={styles.signalPulse1}
            />
            <circle
              cx="0"
              cy="-65"
              r="26"
              fill="none"
              stroke="#818CF8"
              strokeWidth="1.2"
              className={styles.signalPulse2}
            />
            <circle
              cx="0"
              cy="-65"
              r="40"
              fill="none"
              stroke="#818CF8"
              strokeWidth="0.9"
              className={styles.signalPulse3}
            />
          </g>

          {/* Stylized Modular Tech Elements on Plateau */}
          {/* Left Solar Collector Array */}
          <g transform="translate(245, 305)">
            <line x1="0" y1="12" x2="0" y2="0" stroke="#475569" strokeWidth="2" />
            <polygon points="-16,-6 16,-12 16,0 -16,6" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
            <line x1="-5" y1="-9" x2="-5" y2="3" stroke="#38BDF8" strokeWidth="0.8" />
            <line x1="6" y1="-11" x2="6" y2="1" stroke="#38BDF8" strokeWidth="0.8" />
          </g>

          {/* Right Weather Sensor Pole */}
          <g transform="translate(425, 310)">
            <line x1="0" y1="18" x2="0" y2="-12" stroke="#475569" strokeWidth="1.5" />
            <circle cx="0" cy="-12" r="3" fill="#FB923C" />
            <line x1="-6" y1="-6" x2="6" y2="-6" stroke="#94A3B8" strokeWidth="1" />
          </g>

          {/* Organic Stylized Pines & Flora */}
          <g transform="translate(195, 320)">
            <polygon points="0,-16 6,0 -6,0" fill="#052E16" />
            <polygon points="0,-10 8,6 -8,6" fill="#047857" />
          </g>
          <g transform="translate(220, 325)">
            <polygon points="0,-12 5,0 -5,0" fill="#052E16" />
            <polygon points="0,-7 7,5 -7,5" fill="#10B981" />
          </g>
          <g transform="translate(460, 328)">
            <polygon points="0,-14 6,0 -6,0" fill="#052E16" />
            <polygon points="0,-8 7,5 -7,5" fill="#047857" />
          </g>
        </g>

        {/* ============================================================
            LAYER 5: Mini Orbiting Satellite Islet (Lower Right)
            ============================================================ */}
        <g className={styles.miniIslet2}>
          <path
            d="M 480,395 Q 520,385 550,400 Q 535,435 515,455 Q 495,430 480,395 Z"
            fill="url(#rockStrata)"
            stroke="rgba(255,255,255,0.06)"
          />
          <path
            d="M 480,395 Q 520,382 550,400 Q 535,406 515,408 Q 495,406 480,395 Z"
            fill="url(#grassPlains)"
          />
          {/* Glowing Beacon on mini islet */}
          <line x1="515" y1="405" x2="515" y2="390" stroke="#E2E8F0" strokeWidth="1.5" />
          <circle cx="515" cy="388" r="3" fill="#F472B6" filter="drop-shadow(0 0 6px #F472B6)" />
        </g>

        {/* ============================================================
            LAYER 6: Foreground Ethereal Drifting Clouds
            ============================================================ */}
        <path
          d="M 120,440 Q 240,410 380,435 T 560,420"
          fill="none"
          stroke="url(#cloudGrad1)"
          strokeWidth="38"
          strokeLinecap="round"
          className={styles.cloudDriftForeground}
        />
      </svg>

      {/* Floating Status Indicator Tag (Crafted reference touch) */}
      <div className={styles.environmentTag}>
        <span className={styles.beaconDot} />
        <span className={styles.tagText}>ORBITAL OUTPOST // APPLIED ML &amp; SOFTWARE</span>
      </div>
    </div>
  );
}
