export interface Meta {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface About {
  short: string;
  long: string;
}

export interface Goals {
  career_short_term: string;
  career_long_term: string;
  english_learning: string;
  future_plan: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  frontend: string[];
  databases: string[];
  cloud_devops: string[];
  architecture_tools: string[];
  soft_skills: string[];
}

export interface Project {
  title: string;
  short: string;
  year: number;
  role: string;
  tech: string[];
  description: string;
  features?: string[];
  links: {
    repo?: string;
    demo?: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  graduation_year: number;
}

export interface Background {
  from: string;
  current_region: string;
}

export interface Contact {
  message: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  link?: string;
}

export interface PortfolioData {
  meta: Meta;
  about: About;
  goals: Goals;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: Education;
  background: Background;
  certificates?: Certificate[];
  contact: Contact;
}
