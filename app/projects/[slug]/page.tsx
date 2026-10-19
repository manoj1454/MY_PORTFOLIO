import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
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
    <div className={styles.pageWrapper} style={{ position: 'relative' }}>
      {/* Sylva Architectural Guides */}
      <div className="columnGuides" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

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

        {/* Live Demo Action if present */}
        {project.links?.demo && (
          <div className={styles.heroActionsRow}>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveDemoBtn}
            >
              <span>Live Demo</span>
              <ExternalLink size={15} />
            </a>
          </div>
        )}

        {/* System Metrics Grid if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.metricsGrid} aria-label="Key system metrics">
            {project.metrics.map((m, idx) => (
              <div key={idx} className={styles.metricCard}>
                <span className={styles.metricLabel}>{m.label}</span>
                <strong className={styles.metricValue}>{m.value}</strong>
                {m.context && <span className={styles.metricContext}>{m.context}</span>}
              </div>
            ))}
          </div>
        )}

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

      {/* Main Narrative Content Layout */}
      <div className={`container ${styles.contentLayout}`}>
        {/* Section 1: Project Overview & Engineering Focus */}
        <section className={styles.sectionBlock} aria-labelledby="overview-heading">
          <h2 id="overview-heading" className={styles.sectionTitle}>
            Project Overview &amp; Engineering Focus
          </h2>
          <p className={styles.sectionIntro}>{project.overview}</p>
          <div className={styles.proseBlock}>
            {project.sections.problem.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <hr className={styles.innerDivider} />

        {/* Section 2: Architecture and Stack */}
        <section className={styles.sectionBlock} aria-labelledby="architecture-heading">
          <h2 id="architecture-heading" className={styles.sectionTitle}>
            System Architecture &amp; Data Pipeline
          </h2>
          <div className={styles.proseBlock}>
            {project.sections.architecture.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <PipelineDiagram type={project.diagramType} caption={project.diagramCaption} />

          {/* Technology Stack Table if present */}
          {project.techStack && project.techStack.length > 0 && (
            <div className={styles.techStackTableWrapper}>
              <table className={styles.techStackTable}>
                <thead>
                  <tr>
                    <th scope="col">Layer</th>
                    <th scope="col">Technologies</th>
                    <th scope="col">Architecture Role &amp; Engineering Details</th>
                  </tr>
                </thead>
                <tbody>
                  {project.techStack.map((item, idx) => (
                    <tr key={idx}>
                      <td className={styles.techStackLayer}>{item.layer}</td>
                      <td className={styles.techStackTech}>{item.technologies}</td>
                      <td className={styles.techStackDetail}>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <hr className={styles.innerDivider} />

        {/* Sections 3 - 10: Modules or Approach */}
        {project.modules && project.modules.length > 0 ? (
          <section className={styles.sectionBlock} aria-labelledby="modules-heading">
            <h2 id="modules-heading" className={styles.sectionTitle}>
              Core Engineering Modules &amp; Subsystems
            </h2>
            <div className={styles.modulesList}>
              {project.modules.map((mod) => (
                <article key={mod.id} id={mod.id} className={styles.moduleCard}>
                  <div className={styles.moduleHeader}>
                    <h3 className={styles.moduleTitle}>{mod.title}</h3>
                    {mod.badge && <span className={styles.moduleBadge}>{mod.badge}</span>}
                  </div>
                  <p className={styles.moduleDesc}>{mod.description}</p>
                  <ul className={styles.pointsList}>
                    {mod.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : (
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
        )}

        <hr className={styles.innerDivider} />

        {/* Section 11: Engineering Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 ? (
          <section className={styles.sectionBlock} aria-labelledby="challenges-heading">
            <h2 id="challenges-heading" className={styles.sectionTitle}>
              Engineering Challenges &amp; Solutions
            </h2>
            <p className={styles.sectionIntro}>
              Real-world engineering challenges encountered during architectural design, state synchronization, and deployment, analyzed using a systematic problem → diagnosis → solution format.
            </p>
            <div className={styles.challengesList}>
              {project.challenges.map((c) => (
                <article key={c.id} className={styles.challengeCard}>
                  <div className={styles.challengeTitleRow}>
                    <h3 className={styles.challengeTitle}>{c.title}</h3>
                  </div>

                  <div className={styles.challengeFlowBox}>
                    <div className={`${styles.challengeRow} ${styles.challengeRowProblem}`}>
                      <span className={styles.challengeSectionLabel}>Problem</span>
                      <p className={styles.challengeSectionText}>{c.problem}</p>
                    </div>

                    <div className={`${styles.challengeRow} ${styles.challengeRowDiagnosis}`}>
                      <span className={styles.challengeSectionLabel}>Technical Diagnosis</span>
                      <p className={styles.challengeSectionText}>{c.diagnosis}</p>
                    </div>

                    <div className={`${styles.challengeRow} ${styles.challengeRowSolution}`}>
                      <span className={styles.challengeSectionLabel}>Implemented Solution</span>
                      <p className={styles.challengeSectionText}>{c.solution}</p>
                    </div>

                    <div className={`${styles.challengeRow} ${styles.challengeRowLesson}`}>
                      <span className={styles.challengeSectionLabel}>Engineering Lesson</span>
                      <p className={styles.challengeSectionText}>{c.lesson}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

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

        {/* Section 12: Deployment & Technical Facts */}
        {project.technicalFacts && project.technicalFacts.length > 0 && (
          <section className={styles.sectionBlock} aria-labelledby="facts-heading">
            <h2 id="facts-heading" className={styles.sectionTitle}>
              Deployment &amp; Technical Facts
            </h2>
            <div className={styles.factsGrid}>
              {project.technicalFacts.map((fact, idx) => (
                <div key={idx} className={styles.factCard}>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <strong className={styles.factValue}>{fact.value}</strong>
                  {fact.detail && <span className={styles.factDetail}>{fact.detail}</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Takeaways & Engineering Lessons */}
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

        {/* Section 13: Live Demo Action Banner */}
        {project.links?.demo && (
          <aside className={styles.liveDemoCtaBlock} aria-label="Explore Live Application">
            <h3 className={styles.liveDemoCtaTitle}>Experience {project.title} Live</h3>
            <p className={styles.liveDemoCtaText}>
              Explore the deployed platform featuring zero-trust edge RBAC, optimistic Kanban state mutations, persistent billable time tracking, and transactional invoicing workflows.
            </p>
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveDemoBtn}
            >
              <span>Launch Live Application</span>
              <ExternalLink size={16} />
            </a>
          </aside>
        )}
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

