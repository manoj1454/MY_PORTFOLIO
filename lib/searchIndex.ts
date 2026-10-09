import { projects } from './projects';
import { skillCategories, engineeringPrinciples, siteConfig } from './site';

export interface SearchItem {
  id: string;
  title: string;
  category: 'Projects' | 'Skills & Toolkit' | 'Engineering Approach' | 'About & Education' | 'Contact & Channels';
  description: string;
  url: string;
  keywords: string[];
  badge?: string;
}

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // 1. Projects
  projects.forEach((proj) => {
    items.push({
      id: `proj-${proj.slug}`,
      title: proj.title,
      category: 'Projects',
      description: proj.tagline || proj.shortDescription,
      url: `/projects/${proj.slug}`,
      keywords: [
        proj.slug,
        proj.category,
        proj.statusBadge,
        ...proj.tags.primary,
        ...(proj.tags.secondary || []),
      ],
      badge: proj.statusBadge,
    });
  });

  // 2. Skills & Technologies
  skillCategories.forEach((cat) => {
    items.push({
      id: `cat-${cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      title: cat.category,
      category: 'Skills & Toolkit',
      description: cat.description,
      url: '#toolkit',
      keywords: [cat.category, ...cat.items.map((i) => i.name)],
    });

    cat.items.forEach((item) => {
      items.push({
        id: `skill-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        title: item.name,
        category: 'Skills & Toolkit',
        description: item.context || `Skill in ${cat.category}`,
        url: '#toolkit',
        keywords: [item.name, cat.category],
      });
    });
  });

  // 3. Engineering Principles & Approach
  engineeringPrinciples.forEach((principle) => {
    items.push({
      id: `principle-${principle.number}`,
      title: `${principle.number}. ${principle.title}`,
      category: 'Engineering Approach',
      description: principle.summary,
      url: '#principles',
      keywords: ['approach', 'principles', principle.title, principle.example],
    });
  });

  // 4. About & Education
  items.push({
    id: 'about-main',
    title: 'About Manoj Chary',
    category: 'About & Education',
    description: 'Computer Science and Engineering student focused on building dependable software.',
    url: '#about',
    keywords: ['about', 'bio', 'philosophy', 'background', 'software developer'],
  });

  items.push({
    id: 'education-degree',
    title: `${siteConfig.education.degree} in ${siteConfig.education.field}`,
    category: 'About & Education',
    description: `${siteConfig.education.institution} (2023–2027) · CGPA: ${siteConfig.education.cgpa}`,
    url: '#about',
    keywords: ['education', 'degree', 'college', 'university', 'gpa', 'cgpa', 'neil gogte'],
  });

  siteConfig.achievements.forEach((ach, idx) => {
    items.push({
      id: `achievement-${idx}`,
      title: ach.title,
      category: 'About & Education',
      description: `${ach.event} · ${ach.year}`,
      url: '#about',
      keywords: ['award', 'hackathon', 'ideathon', 'sankalp', 'recognition'],
    });
  });

  siteConfig.certifications.forEach((cert, idx) => {
    items.push({
      id: `cert-${idx}`,
      title: cert.name,
      category: 'About & Education',
      description: `${cert.issuer} · ${cert.date}`,
      url: '#about',
      keywords: ['certification', 'certificate', 'hackerrank', 'ibm', 'sql'],
    });
  });

  // 5. Contact Channels & Socials
  items.push({
    id: 'contact-email',
    title: 'Email: ' + siteConfig.contact.email,
    category: 'Contact & Channels',
    description: 'Direct email for professional inquiries and opportunities.',
    url: `mailto:${siteConfig.contact.email}`,
    keywords: ['email', 'contact', 'reach out', 'mail'],
  });

  items.push({
    id: 'contact-github',
    title: 'GitHub Profile (@manoj1454)',
    category: 'Contact & Channels',
    description: 'Explore code repositories and open source activity.',
    url: siteConfig.contact.github,
    keywords: ['github', 'code', 'git', 'repositories'],
  });

  items.push({
    id: 'contact-linkedin',
    title: 'LinkedIn Profile (manojchary)',
    category: 'Contact & Channels',
    description: 'Professional experience and network.',
    url: siteConfig.contact.linkedin,
    keywords: ['linkedin', 'network', 'profile', 'resume'],
  });

  siteConfig.verifiedSocials.forEach((soc) => {
    items.push({
      id: `social-${soc.name.toLowerCase()}`,
      title: soc.name,
      category: 'Contact & Channels',
      description: soc.ariaLabel || 'Verified algorithmic problem solving profile.',
      url: soc.url,
      keywords: [soc.name, 'algorithms', 'leetcode', 'practice'],
    });
  });

  return items;
}
