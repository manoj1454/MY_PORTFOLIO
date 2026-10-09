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

        <div className={styles.principlesList}>
          {engineeringPrinciples.map((principle) => (
            <div key={principle.number} className={styles.principleItem}>
              <div className={styles.numberCol}>
                <span className={styles.numberText}>{principle.number}</span>
              </div>

              <div className={styles.contentCol}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.summaryText}>{principle.summary}</p>

                <div className={styles.practiceNote}>
                  <span className={styles.practiceLabel}>In Practice:</span>
                  <p className={styles.practiceText}>{principle.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
