import React from 'react';
import { engineeringPrinciples } from '@/lib/site';
import SectionHeading from '../ui/SectionHeading';
import styles from './ApproachSection.module.css';

export default function ApproachSection() {
  return (
    <section id="principles" className="section" aria-labelledby="principles-title">
      <div className="container">
        <SectionHeading
          eyebrow="ENGINEERING PRINCIPLES"
          title="How I Approach Engineering"
          description="Working guidelines cultivated from building prototypes, debugging data transformations, and evaluating models."
        />

        <div className={styles.principlesGrid}>
          {engineeringPrinciples.map((principle) => (
            <div key={principle.number} className={`${styles.principleCard} card-surface`}>
              <div className={styles.cardHeader}>
                <span className={styles.numberBadge}>{principle.number}</span>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
              </div>

              <p className={styles.summary}>{principle.summary}</p>

              <div className={styles.exampleBox}>
                <span className={styles.exampleLabel}>In Practice:</span>
                <p className={styles.exampleText}>{principle.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
