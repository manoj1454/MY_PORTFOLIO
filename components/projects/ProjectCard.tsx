import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Cpu, Database, AlertCircle, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/types';
import Tag from '@/components/ui/Tag';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getIcon = () => {
    switch (project.diagramType) {
      case 'talqs':
        return <Layers size={20} className={styles.categoryIcon} />;
      case 'welding':
        return <Cpu size={20} className={styles.categoryIcon} />;
      case 'moviereview':
        return <Database size={20} className={styles.categoryIcon} />;
      default:
        return <Layers size={20} className={styles.categoryIcon} />;
    }
  };

  return (
    <article className={`${styles.card} card-surface`}>
      <div className={styles.cardHeader}>
        <div className={styles.iconBadge} aria-hidden="true">
          {getIcon()}
        </div>
        <span className={styles.statusBadge}>
          <span className={styles.statusDot} />
          {project.statusBadge}
        </span>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>
          <Link href={`/projects/${project.slug}`} className={styles.titleLink}>
            {project.title}
          </Link>
        </h3>

        <p className={styles.tagline}>{project.tagline}</p>

        <p className={styles.description}>{project.shortDescription}</p>

        {project.disclaimer && (
          <div className={styles.disclaimerBox}>
            <AlertCircle size={14} className={styles.disclaimerIcon} />
            <span>{project.disclaimer}</span>
          </div>
        )}

        <div className={styles.tagsGroup} aria-label="Key technologies">
          {project.tags.primary.map((tag) => (
            <Tag key={tag} label={tag} variant="default" />
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <Link href={`/projects/${project.slug}`} className={styles.ctaLink}>
          <span>Read technical case study</span>
          <ArrowRight size={16} className={styles.ctaArrow} />
        </Link>
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
            style={{ color: '#166534', fontWeight: 650 }}
          >
            <span>Live Demo</span>
            <ExternalLink size={14} className={styles.ctaArrow} />
          </a>
        )}
      </div>
    </article>
  );
}
