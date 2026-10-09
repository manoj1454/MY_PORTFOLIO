import React from 'react';
import { skillCategories } from '@/lib/site';
import SectionHeading from '../ui/SectionHeading';
import styles from './ToolkitSection.module.css';

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="section" aria-labelledby="toolkit-title">
      <div className="container">
        <SectionHeading
          eyebrow="TECHNICAL TOOLKIT"
          title="Tools & Technologies"
          description="Technologies grouped by practical project usage. No arbitrary percentage bars or vanity ratings—just tools applied to build systems, train models, and query data."
        />

        <div className={styles.toolkitGrid}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className={`${styles.categoryCard} card-surface`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
                <p className={styles.categoryDesc}>{cat.description}</p>
              </div>

              <div className={styles.itemsList}>
                {cat.items.map((item) => (
                  <div key={item.name} className={styles.toolItem}>
                    <div className={styles.toolNameRow}>
                      <span className={styles.toolDot} />
                      <span className={styles.toolName}>{item.name}</span>
                    </div>
                    {item.context && <span className={styles.toolContext}>{item.context}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
