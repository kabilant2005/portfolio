export interface Project {
  title: string;
  description: string[];
  techStack: string[];
}

export interface Experience {
  role: string;
  company: string;
  period?: string;
  description: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface ResumeData {
  name: string;
  contact: {
    location: string;
    phone: string;
    email: string;
  };
  objective: string;
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  activities: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}