'use client';

import React from 'react';
import SylvaHeroWrapper from '../threeui/SylvaHeroWrapper';
import GuidedPageTour from './GuidedPageTour';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Hero Scene">
      <SylvaHeroWrapper className={styles.heroFrame} />
      <GuidedPageTour />
    </section>
  );
}


