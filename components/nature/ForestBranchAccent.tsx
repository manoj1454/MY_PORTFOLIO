'use client';

import React from 'react';
import styles from './ForestBranchAccent.module.css';

interface ForestBranchAccentProps {
  variant: 'about' | 'approach' | 'contact';
  className?: string;
}

export default function ForestBranchAccent({ variant, className = '' }: ForestBranchAccentProps) {
  if (variant === 'about') {
    return (
      <div
        className={`${styles.accentWrap} ${styles.variantAbout} ${className}`}
        aria-hidden="true"
      >
        <svg
          className={styles.branchSvg}
          viewBox="0 0 220 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="aboutRootGrad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1E231B" />
              <stop offset="60%" stopColor="#2F382A" />
              <stop offset="100%" stopColor="#414D3A" />
            </linearGradient>
            <linearGradient id="aboutMossGrad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#4A5C38" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#768F5B" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#9EBD7D" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Root reaching in from bottom right */}
          <path
            d="M 230,150 Q 180,120 130,95 Q 90,75 55,70"
            stroke="url(#aboutRootGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Moss upper edge */}
          <path
            d="M 225,147 Q 178,118 128,93 Q 88,73 53,68"
            stroke="url(#aboutMossGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Weathered offshoot twig */}
          <path
            d="M 125,93 Q 105,108 85,112"
            stroke="#303A2B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Little green bud */}
          <circle cx="53" cy="68" r="2.2" fill="#9EBD7D" />
          <circle cx="84" cy="113" r="1.8" fill="#BACFA0" />
        </svg>

        {/* Landing perch anchor */}
        <div
          className={styles.perchSpot}
          style={{ left: '26%', top: '44%' }}
          data-butterfly-perch="about-root"
          data-perch-angle="18"
          title="Root resting perch"
        />
      </div>
    );
  }

  if (variant === 'approach') {
    return (
      <div
        className={`${styles.accentWrap} ${styles.variantApproach} ${className}`}
        aria-hidden="true"
      >
        <svg
          className={styles.branchSvg}
          viewBox="0 0 240 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="approachBranchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E231B" />
              <stop offset="50%" stopColor="#323C2C" />
              <stop offset="100%" stopColor="#45533D" />
            </linearGradient>
            <linearGradient id="approachMossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#556942" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#859F67" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ABCA87" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Arching canopy twig entering from top left */}
          <path
            d="M -15,10 Q 50,30 115,38 Q 165,45 205,32"
            stroke="url(#approachBranchGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Moss highlight on arch */}
          <path
            d="M 5,14 Q 55,32 118,36 Q 163,43 203,30"
            stroke="url(#approachMossGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Small twig droop */}
          <path
            d="M 120,38 Q 140,60 160,65"
            stroke="#303A2B"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Forest bud highlights */}
          <circle cx="204" cy="31" r="2.2" fill="#E8F0D4" />
          <circle cx="161" cy="66" r="1.8" fill="#ABCA87" />
        </svg>

        {/* Landing perch anchor */}
        <div
          className={styles.perchSpot}
          style={{ left: '85%', top: '24%' }}
          data-butterfly-perch="approach-branch"
          data-perch-angle="-10"
          title="Canopy resting perch"
        />
      </div>
    );
  }

  // Variant: contact
  return (
    <div
      className={`${styles.accentWrap} ${styles.variantContact} ${className}`}
      aria-hidden="true"
    >
      <svg
        className={styles.branchSvg}
        viewBox="0 0 180 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 190,10 Q 140,25 95,45 Q 65,58 35,55"
          stroke="#2A3326"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 185,9 Q 138,23 93,43 Q 64,56 36,53"
          stroke="#748E59"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="34" cy="54" r="2" fill="#DCE8C6" opacity="0.8" />
      </svg>
    </div>
  );
}
