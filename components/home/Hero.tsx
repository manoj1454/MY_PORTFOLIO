import { ArrowDown, Mail, GraduationCap } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import HeroScene from '../illustration/HeroScene';
import ButtonLink from '../ui/ButtonLink';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Editorial Statement & Actions */}
        <div className={styles.heroCopy}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>{siteConfig.role}</span>
          </div>

          <h1 id="hero-title" className={styles.headline}>
            {siteConfig.tagline}
          </h1>

          <p className={styles.subheadline}>{siteConfig.subheadline}</p>

          <div className={styles.academicBadge}>
            <GraduationCap size={16} className={styles.academicIcon} />
            <span>
              {siteConfig.education.degree} in {siteConfig.education.field} ·{' '}
              {siteConfig.education.expectedGraduation}
            </span>
          </div>

          <div className={styles.ctaGroup}>
            <ButtonLink
              href="#work"
              variant="primary"
              icon={<ArrowDown size={16} />}
              ariaLabel="Navigate to selected work"
            >
              Explore selected work
            </ButtonLink>

            <ButtonLink
              href="#contact"
              variant="secondary"
              icon={<Mail size={16} />}
              ariaLabel="Navigate to contact section"
            >
              Get in touch
            </ButtonLink>
          </div>
        </div>

        {/* Right Column: Original Systems-Map Visual Environment */}
        <div className={styles.heroVisual}>
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
