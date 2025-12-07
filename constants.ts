import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Kabilan T",
  contact: {
    location: "Chennai, Tamil Nadu",
    phone: "93458 75316",
    email: "kabilant2005@gmail.com"
  },
  objective: "Dedicated and passionate B.Tech student in Artificial Intelligence and Data Science with a strong foundation in machine learning and deep learning. Seeking to apply academic knowledge in real-time projects and build impactful solutions in AI and full stack development.",
  education: [
    {
      institution: "Saveetha Engineering College",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      period: "2022 – Present"
    }
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      skills: ["Python", "Java", "C", "C++", "SQL"]
    },
    {
      category: "AI/ML",
      skills: ["Machine Learning", "Deep Learning", "CNN", "OpenCV"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Spring Boot"]
    },
    {
      category: "Tools & Platforms",
      skills: ["GitHub", "Jupyter", "Google Colab", "AWS"]
    }
  ],
  projects: [
    {
      title: "Real-Time Emotion Detection System Using Deep Learning",
      description: [
        "Developed a real-time facial emotion detection application using CNN and OpenCV.",
        "Integrated live camera feed to detect multiple faces and classify emotional states.",
        "Achieved high accuracy on a custom-labeled dataset using data augmentation and optimization techniques."
      ],
      techStack: ["Python", "OpenCV", "CNN", "Deep Learning"]
    }
  ],
  experience: [
    {
      role: "Java Full Stack Developer Intern",
      company: "Retech Solutions",
      description: [
        "Gained hands-on experience in full-stack development using Java, Spring Boot, and React.",
        "Contributed to backend REST API creation, frontend UI integration, and SQL database handling.",
        "Collaborated in an Agile team environment for building scalable web applications."
      ],
      techStack: ["Java", "Spring Boot", "React", "SQL", "REST API"]
    }
  ],
  certifications: [
    { name: "AWS Cloud Practitioner Essentials", issuer: "AWS" },
    { name: "Cloud Computing Basics", issuer: "IBM" },
    { name: "Introduction to the Internet of Things", issuer: "NPTEL" }
  ],
  activities: [
    "Participated in inter-college tech symposiums and coding events",
    "Strong team player with effective communication skills",
    "Keen interest in learning emerging AI technologies"
  ]
};

// Data for Chart visualization
export const SKILL_CHART_DATA = [
  { name: 'Python', value: 90 },
  { name: 'Java', value: 85 },
  { name: 'ML/DL', value: 80 },
  { name: 'React', value: 75 },
  { name: 'SQL', value: 80 },
  { name: 'C/C++', value: 70 },
];
