export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  subheadline: string;
  status: string;
  education: {
    degree: string;
    field: string;
    expectedGraduation: string;
  };
  navigation: NavItem[];
  verifiedSocials: SocialLink[];
  pendingSocials: {
    name: string;
    description: string;
  }[];
}

export interface ProjectSectionContent {
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    points: string[];
  }[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  statusBadge: string;
  featuredOrder: number;
  tags: {
    primary: string[];
    secondary?: string[];
  };
  disclaimer?: string;
  diagramType: 'talqs' | 'welding' | 'moviereview';
  diagramCaption: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  sections: {
    problem: ProjectSectionContent;
    approach: ProjectSectionContent;
    architecture: ProjectSectionContent;
    decisions: ProjectSectionContent;
    limitations: ProjectSectionContent;
    lessons: ProjectSectionContent;
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    context?: string;
  }[];
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  summary: string;
  example: string;
}
