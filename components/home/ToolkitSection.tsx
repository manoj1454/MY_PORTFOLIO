import React from 'react';
import { skillCategories } from '@/lib/site';
import SectionHeading from '../ui/SectionHeading';
import styles from './ToolkitSection.module.css';

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="section" aria-labelledby="toolkit-title">
      {/* Sylva Architectural Guides */}
      <div className="columnGuides" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      {/* Ghost Backdrop Wordmark */}
      <div className={`${styles.ghostWord} ghostWordmark`} aria-hidden="true">
        SYSTEMS
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="TECHNICAL TOOLKIT"
          title="Tools & Technologies"
          description="Technologies grouped by practical project usage. No arbitrary percentage bars or vanity ratings—only tools applied to build systems, train models, and manage data."
        />

        <div className={styles.toolkitLayout}>
          {skillCategories.map((cat, idx) => (
            <div key={cat.category} className={styles.categoryRow}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIndex}>0{idx + 1}</span>
                <div>
                  <h3 className={styles.categoryTitle}>{cat.category}</h3>
                  <p className={styles.categoryDesc}>{cat.description}</p>
                </div>
              </div>

              <div className={styles.itemsGrid}>
                {cat.items.map((item) => (
                  <div key={item.name} className={styles.toolItem}>
                    <span className={styles.toolName}>{item.name}</span>
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
