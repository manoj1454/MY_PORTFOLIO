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

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  dates: string;
  score: string;
  board?: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  role: string;
  tagline: string;
  subheadline: string;
  aboutBio: string[];
  status: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    dates: string;
    cgpa: string;
  };
  educationList: EducationItem[];
  achievements: {
    title: string;
    event: string;
    year: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }[];
  positionsOfResponsibility: {
    role: string;
    institution: string;
    year: string;
  }[];
  navigation: NavItem[];
  verifiedSocials: SocialLink[];
  contact: {
    headline: string;
    subheadline: string;
    email: string;
    github: string;
    linkedin: string;
  };
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
  category: string;
  statusBadge: string;
  featuredOrder: number;
  tags: {
    primary: string[];
    secondary?: string[];
  };
  metrics?: { label: string; value: string; context?: string }[];
  disclaimer?: string;
  diagramType: 'erp' | 'medical' | 'talqs' | 'optimus' | 'credentials' | 'welding' | 'moviereview';
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
