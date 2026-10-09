import React from 'react';
import { projects } from '@/lib/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../projects/ProjectCard';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          eyebrow="ENGINEERING EVIDENCE"
          title="Selected Work"
          description="Projects are where the interesting decisions happen. Here is a closer look at three systems exploring retrieval pipelines, computer-vision inference, and structured web data flows."
        />

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
