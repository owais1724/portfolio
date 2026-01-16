
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
