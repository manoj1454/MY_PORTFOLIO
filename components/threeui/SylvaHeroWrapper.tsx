'use client';

import React from 'react';
import { SylvaHero } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';

interface SylvaHeroWrapperProps {
  className?: string;
  variant?: string;
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string;
  bodyWeight?: string;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
  srcDoc?: string;
  style?: React.CSSProperties;
}

export default function SylvaHeroWrapper({
  className = '',
  variant = 'living-green',
  headingFont = 'lexend',
  bodyFont = 'lexend',
  headingWeight = '300',
  bodyWeight = '300',
  primaryColor = '#ffffff',
  headingSize = 63,
  bodySize = 16.5,
  headingLetterSpacing = -0.006,
  srcDoc,
  style,
}: SylvaHeroWrapperProps) {
  const Component = SylvaHero as React.ComponentType<Record<string, unknown>>;

  return (
    <div
      className={`shader-frame ${className}`.trim()}
      style={{
        width: '100%',
        position: 'relative',
        ...style,
      }}
    >
      <Component
        variant={variant}
        headingFont={headingFont}
        bodyFont={bodyFont}
        headingWeight={headingWeight}
        bodyWeight={bodyWeight}
        primaryColor={primaryColor}
        headingSize={headingSize}
        bodySize={bodySize}
        headingLetterSpacing={headingLetterSpacing}
        srcDoc={srcDoc}
        style={{ width: '100%', height: '100%', background: '#383b34' }}
      />
    </div>
  );
}

