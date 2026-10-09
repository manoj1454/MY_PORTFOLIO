import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs, getAdjacentProjects } from '@/lib/projects';
import Tag from '@/components/ui/Tag';
import PipelineDiagram from '@/components/projects/PipelineDiagram';
import styles from './ProjectDetail.module.css';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} · Engineering Case Study`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className={styles.pageWrapper}>
      {/* Editorial Breadcrumbs & Back Action */}
      <nav className={`container ${styles.breadcrumbNav}`} aria-label="Breadcrumb">
        <Link href="/#work" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Back to selected work</span>
        </Link>
        <span className={styles.breadcrumbDivider} aria-hidden="true">/</span>
        <span className={styles.currentCrumb} aria-current="page">{project.title}</span>
      </nav>

      {/* Case Study Hero */}
      <header className={`container ${styles.projectHero}`}>
        <div className={styles.heroMetaRow}>
          <span className={styles.statusPill}>
            <span className={styles.statusDot} />
            {project.statusBadge}
          </span>
          <span className={styles.docType}>ENGINEERING CASE STUDY</span>
        </div>

        <h1 className={styles.projectTitle}>{project.title}</h1>
        <p className={styles.projectTagline}>{project.tagline}</p>

        {/* Primary Stack Tags */}
        <div className={styles.tagsRow} aria-label="Project technologies">
          {project.tags.primary.map((tag) => (
            <Tag key={tag} label={tag} variant="accent" />
          ))}
          {project.tags.secondary?.map((tag) => (
            <Tag key={tag} label={tag} variant="default" />
          ))}
        </div>

        {/* Disclaimer Callout if present */}
        {project.disclaimer && (
          <aside className={styles.disclaimerBox} role="note" aria-label="Project Disclaimer">
            <AlertTriangle size={18} className={styles.disclaimerIcon} />
            <div className={styles.disclaimerContent}>
              <strong>Project Scope &amp; Context Disclaimer</strong>
              <p>{project.disclaimer}</p>
            </div>
          </aside>
        )}
      </header>

      {/* Main Architecture Diagram & Narrative Content */}
      <div className={`container ${styles.contentLayout}`}>
        {/* Architectural Overview & Pipeline */}
        <section className={styles.sectionBlock} aria-labelledby="architecture-heading">
          <h2 id="architecture-heading" className={styles.sectionTitle}>
            System Architecture &amp; Data Pipeline
          </h2>
          <p className={styles.sectionIntro}>{project.overview}</p>

          <PipelineDiagram type={project.diagramType} caption={project.diagramCaption} />

          <div className={styles.proseBlock}>
            {project.sections.architecture.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <hr className={styles.innerDivider} />

        {/* The Problem / Challenge */}
        <section className={styles.sectionBlock} aria-labelledby="problem-heading">
          <h2 id="problem-heading" className={styles.sectionTitle}>
            {project.sections.problem.title}
          </h2>
          <div className={styles.proseBlock}>
            {project.sections.problem.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <hr className={styles.innerDivider} />

        {/* Technical Approach & Subsections */}
        <section className={styles.sectionBlock} aria-labelledby="approach-heading">
          <h2 id="approach-heading" className={styles.sectionTitle}>
            {project.sections.approach.title}
          </h2>
          <div className={styles.proseBlock}>
            {project.sections.approach.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {project.sections.approach.subsections && (
            <div className={styles.subsectionsList}>
              {project.sections.approach.subsections.map((sub, i) => (
                <div key={i} className={styles.subsectionCard}>
                  <h3 className={styles.subsectionTitle}>{sub.subtitle}</h3>
                  <ul className={styles.pointsList}>
                    {sub.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        <hr className={styles.innerDivider} />

        {/* Engineering Decisions & Trade-offs */}
        <section className={styles.sectionBlock} aria-labelledby="decisions-heading">
          <h2 id="decisions-heading" className={styles.sectionTitle}>
            {project.sections.decisions.title}
          </h2>
          <div className={styles.decisionsList}>
            {project.sections.decisions.content.map((decision, i) => (
              <div key={i} className={styles.decisionItem}>
                <CheckCircle2 size={16} className={styles.decisionIcon} />
                <p>{decision}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.innerDivider} />

        {/* Constraints, Limitations & Evaluation Honesty */}
        <section className={styles.sectionBlock} aria-labelledby="limitations-heading">
          <h2 id="limitations-heading" className={styles.sectionTitle}>
            {project.sections.limitations.title}
          </h2>
          <div className={styles.limitationsBox}>
            <ul className={styles.limitationsList}>
              {project.sections.limitations.content.map((limit, i) => (
                <li key={i}>{limit}</li>
              ))}
            </ul>
          </div>
        </section>

        <hr className={styles.innerDivider} />

        {/* Takeaways & Future Directions */}
        <section className={styles.sectionBlock} aria-labelledby="lessons-heading">
          <h2 id="lessons-heading" className={styles.sectionTitle}>
            {project.sections.lessons.title}
          </h2>
          <div className={styles.proseBlock}>
            {project.sections.lessons.content.map((lesson, i) => (
              <p key={i}>{lesson}</p>
            ))}
          </div>
        </section>
      </div>

      {/* Adjacent Project Navigation */}
      <nav className={`container ${styles.adjacentNav}`} aria-label="Adjacent project case studies">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className={styles.adjacentCard}>
            <span className={styles.adjacentDirection}>
              <ArrowLeft size={14} />
              <span>PREVIOUS PROJECT</span>
            </span>
            <strong className={styles.adjacentTitle}>{prev.title}</strong>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={`/projects/${next.slug}`} className={`${styles.adjacentCard} ${styles.adjacentNext}`}>
            <span className={styles.adjacentDirection}>
              <span>NEXT PROJECT</span>
              <ArrowRight size={14} />
            </span>
            <strong className={styles.adjacentTitle}>{next.title}</strong>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
