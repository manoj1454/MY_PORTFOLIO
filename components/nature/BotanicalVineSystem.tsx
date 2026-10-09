'use client';

import React from 'react';
import styles from './BotanicalVineSystem.module.css';

/**
 * BotanicalVineSystem — Continuous organic climbing stem and leaf network.
 * Extends naturally from the hero horizon down through the lower page,
 * winding gracefully alongside content gutters and providing natural
 * resting perches for the page-level living butterfly.
 */
export default function BotanicalVineSystem() {
  return (
    <div className={styles.vineWrapper} aria-hidden="true">
      <svg
        className={styles.vineSvg}
        viewBox="0 0 1600 5200"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wood Stem Gradient */}
          <linearGradient id="vineWoodStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3C4436" />
            <stop offset="35%" stopColor="#55624B" />
            <stop offset="70%" stopColor="#4A5641" />
            <stop offset="100%" stopColor="#343C2E" />
          </linearGradient>

          {/* Stem Highlight / Lichen Gradient */}
          <linearGradient id="vineStemHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8E9E80" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#A6AF99" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6C7C5F" stopOpacity="0.4" />
          </linearGradient>

          {/* Leaf Fill Gradient */}
          <linearGradient id="leafGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E9071" />
            <stop offset="60%" stopColor="#5B6A50" />
            <stop offset="100%" stopColor="#44503B" />
          </linearGradient>

          {/* Leaf Secondary Tint */}
          <linearGradient id="leafGradSage" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A6AF99" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#718264" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4F5D44" stopOpacity="0.75" />
          </linearGradient>

          {/* Bud / Bloom Tint */}
          <radialGradient id="budGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5F6EE" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#DDE4CF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A6AF99" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* =================================================================
            SECTION 1: HERO TO UPPER WORK (Left Gutter: y 0 -> 1200)
            Enters from left margin at y=20, descends along x=60..130
            ================================================================= */}
        <g className={styles.mainStem}>
          {/* Main primary stem spline */}
          <path
            d="M -20,30
               C 50,80 110,220 85,420
               C 60,620 125,840 95,1080
               C 70,1260 140,1480 280,1680"
            stroke="url(#vineWoodStem)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Subtle moss crest line */}
          <path
            d="M -15,32
               C 52,82 112,218 88,418
               C 62,618 127,838 97,1078
               C 72,1258 142,1478 282,1678"
            stroke="url(#vineStemHighlight)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Left offshoot & leaves around y = 280 */}
          <g className={styles.leafGroup}>
            <path d="M 98,280 Q 140,250 175,270" stroke="url(#vineWoodStem)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Leaf 1 */}
            <path d="M 175,270 C 190,255 215,260 220,278 C 205,288 185,282 175,270 Z" fill="url(#leafGradMain)" />
            <path d="M 175,270 Q 200,268 218,276" stroke="#A6AF99" strokeWidth="0.8" opacity="0.7" />
            {/* Small leaf pair */}
            <path d="M 145,255 C 155,240 172,242 175,252 C 165,260 152,258 145,255 Z" fill="url(#leafGradSage)" />
          </g>

          {/* Offshoot at y = 620 with butterfly perch */}
          <g className={styles.leafGroup}>
            <path d="M 75,620 Q 30,640 15,680" stroke="url(#vineWoodStem)" strokeWidth="3" strokeLinecap="round" />
            <path d="M 15,680 C 5,695 -5,690 -12,680 C -5,670 10,665 15,680 Z" fill="url(#leafGradMain)" />
            {/* Florets */}
            <circle cx="22" cy="675" r="3" fill="url(#budGlow)" />
            <circle cx="28" cy="670" r="2.2" fill="url(#budGlow)" />
          </g>

          {/* Foliage cluster along left at y = 920 */}
          <g className={`${styles.leafGroup} ${styles.leafDense}`}>
            <path d="M 110,920 Q 155,910 185,935" stroke="url(#vineWoodStem)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 185,935 C 205,920 228,930 230,948 C 210,955 192,946 185,935 Z" fill="url(#leafGradMain)" />
            <path d="M 185,935 Q 210,935 228,946" stroke="#A6AF99" strokeWidth="0.8" opacity="0.6" />
            <path d="M 150,912 C 162,898 178,902 180,915 C 170,922 158,918 150,912 Z" fill="url(#leafGradSage)" />
          </g>
        </g>

        {/* =================================================================
            SECTION 2: MID-PAGE CROSSING (Between Work & About: y 1600 -> 2400)
            Travels gracefully across the background from left to right gutter
            ================================================================= */}
        <g className={styles.mainStem}>
          <path
            d="M 280,1680
               C 440,1900 780,2020 1050,2120
               C 1260,2200 1480,2300 1510,2520"
            stroke="url(#vineWoodStem)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 282,1678
               C 442,1898 782,2018 1052,2118
               C 1262,2198 1482,2298 1512,2518"
            stroke="url(#vineStemHighlight)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Tendrils and leaf offshoots along the transition crossing */}
          <g className={`${styles.leafGroup} ${styles.lateralBranch}`}>
            <path d="M 680,1980 Q 720,1950 760,1965" stroke="url(#vineWoodStem)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 760,1965 C 780,1950 802,1956 805,1974 C 788,1982 770,1976 760,1965 Z" fill="url(#leafGradMain)" />
            <path d="M 760,1965 Q 785,1962 803,1972" stroke="#A6AF99" strokeWidth="0.8" opacity="0.6" />
            <circle cx="762" cy="1960" r="2.8" fill="url(#budGlow)" />
          </g>

          <g className={`${styles.leafGroup} ${styles.lateralBranch}`}>
            <path d="M 1180,2170 Q 1230,2150 1265,2175" stroke="url(#vineWoodStem)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 1265,2175 C 1285,2160 1308,2168 1310,2186 C 1292,2194 1276,2186 1265,2175 Z" fill="url(#leafGradSage)" />
          </g>
        </g>

        {/* =================================================================
            SECTION 3: RIGHT GUTTER (About & Toolkit: y 2400 -> 3600)
            Descends down the right gutter alongside content (x ≈ 1470..1540)
            ================================================================= */}
        <g className={styles.mainStem}>
          <path
            d="M 1510,2520
               C 1530,2700 1485,2920 1515,3140
               C 1540,3340 1470,3560 1380,3780"
            stroke="url(#vineWoodStem)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 1512,2518
               C 1532,2698 1487,2918 1517,3138
               C 1542,3338 1472,3558 1382,3778"
            stroke="url(#vineStemHighlight)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Foliage cluster at y = 2780 (Right Gutter / About) */}
          <g className={styles.leafGroup}>
            <path d="M 1500,2780 Q 1450,2765 1420,2785" stroke="url(#vineWoodStem)" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 1420,2785 C 1400,2770 1378,2778 1375,2795 C 1392,2804 1410,2796 1420,2785 Z" fill="url(#leafGradMain)" />
            <path d="M 1420,2785 Q 1395,2782 1377,2793" stroke="#A6AF99" strokeWidth="0.8" opacity="0.6" />
            <path d="M 1455,2768 C 1445,2752 1430,2755 1425,2768 C 1438,2774 1448,2772 1455,2768 Z" fill="url(#leafGradSage)" />
            {/* Florets */}
            <circle cx="1422" cy="2780" r="3" fill="url(#budGlow)" />
            <circle cx="1418" cy="2785" r="2.2" fill="url(#budGlow)" />
          </g>

          {/* Foliage cluster at y = 3280 (Toolkit Gutter) */}
          <g className={`${styles.leafGroup} ${styles.leafDense}`}>
            <path d="M 1525,3280 Q 1480,3295 1445,3280" stroke="url(#vineWoodStem)" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 1445,3280 C 1425,3268 1402,3274 1400,3292 C 1418,3300 1436,3292 1445,3280 Z" fill="url(#leafGradMain)" />
            <circle cx="1448" cy="3276" r="2.8" fill="url(#budGlow)" />
          </g>
        </g>

        {/* =================================================================
            SECTION 4: APPROACH & CONTACT (y 3600 -> 5200)
            Weaves across to left gutter and settles into grounded roots
            ================================================================= */}
        <g className={styles.mainStem}>
          <path
            d="M 1380,3780
               C 1250,4050 880,4180 580,4320
               C 340,4440 160,4650 140,4900
               C 120,5100 110,5180 100,5220"
            stroke="url(#vineWoodStem)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 1382,3778
               C 1252,4048 882,4178 582,4318
               C 342,4438 162,4648 142,4898
               C 122,5098 112,5178 102,5218"
            stroke="url(#vineStemHighlight)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Foliage cluster at y = 4380 (Principles / Approach) */}
          <g className={styles.leafGroup}>
            <path d="M 480,4360 Q 430,4340 395,4365" stroke="url(#vineWoodStem)" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 395,4365 C 375,4350 352,4358 350,4376 C 368,4384 386,4376 395,4365 Z" fill="url(#leafGradMain)" />
            <path d="M 395,4365 Q 370,4362 352,4373" stroke="#A6AF99" strokeWidth="0.8" opacity="0.6" />
            <circle cx="396" cy="4360" r="3" fill="url(#budGlow)" />
          </g>

          {/* Grounding foliage near Contact / Footer (y = 4850) */}
          <g className={`${styles.leafGroup} ${styles.leafDense}`}>
            <path d="M 145,4850 Q 190,4865 220,4850" stroke="url(#vineWoodStem)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 220,4850 C 238,4836 260,4842 262,4860 C 246,4868 230,4860 220,4850 Z" fill="url(#leafGradSage)" />
          </g>
        </g>
      </svg>

      {/* Butterfly Landing Perches stationed along the vine */}
      {/* Perch 1: Left gutter near Selected Work (top) */}
      <div
        className={styles.perchMarker}
        data-butterfly-perch="vine-work-upper"
        data-perch-angle="-15"
        style={{ top: '12%', left: '7%' }}
        title="Vine branch"
      />

      {/* Perch 2: Mid-page transition crossing */}
      <div
        className={styles.perchMarker}
        data-butterfly-perch="vine-mid-transition"
        data-perch-angle="18"
        style={{ top: '38%', right: '12%' }}
        title="Vine offshoot"
      />

      {/* Perch 3: Right gutter near About / Toolkit */}
      <div
        className={styles.perchMarker}
        data-butterfly-perch="vine-about-right"
        data-perch-angle="12"
        style={{ top: '56%', right: '7%' }}
        title="Vine foliage"
      />

      {/* Perch 4: Left gutter near Approach */}
      <div
        className={styles.perchMarker}
        data-butterfly-perch="vine-approach-left"
        data-perch-angle="-22"
        style={{ top: '82%', left: '8%' }}
        title="Vine bud"
      />
    </div>
  );
}
