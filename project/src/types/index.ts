export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  type: 'education' | 'experience';
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Web App' | 'Android App' | 'Cross Platform' | 'Website';
  status: 'completed' | 'in-progress';
  demoLink?: string;
  codeLink?: string;
  details: string;
  progress?: number;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Social {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  animation: string;
  skills: string[];
}