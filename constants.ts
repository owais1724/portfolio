
import { Project, Internship, Education, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    title: "LinkedIn Post Generator",
    description: "Built using LLaMA 3.2, LangChain, and Groq Cloud. Features few-shot learning on real LinkedIn posts and dynamic tone adjustment with character-limit validation.",
    technologies: ["Python", "LLaMA 3.2", "LangChain", "Streamlit", "Groq Cloud"]
  },
  {
    title: "FastTask",
    description: "Scalable task management backend supporting multi-user collaboration and full lifecycle management with JWT authentication and clean architecture principles.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"]
  },
  {
    title: "FastLink",
    description: "High-performance URL shortener service focused on fast redirection and stateless backend design. Includes expiry handling and click analytics.",
    technologies: ["Python", "FastAPI"]
  },
  {
    title: "BusBuddy Chatbot",
    description: "Transit planning bot for Surat bus transit with NLTK-based natural language interaction, route planning, and fare calculation.",
    technologies: ["Python", "NLTK", "Flask"]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    company: "IndiaMart",
    role: "Backend & ML Intern",
    period: "Oct 2024",
    points: [
      "Conducted ML auditing to evaluate and enhance photo search model performance.",
      "Built object-detection-based cropping for key objects in screenshots.",
      "Optimized image recognition processes to improve search accuracy.",
      "Collaborated to integrate ML solutions into production pipelines."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.E. Artificial Intelligence and Machine Learning",
    institution: "BMS Institute of Technology and Management, Bengaluru",
    period: "2022 — 2026 (Expected)",
    details: "CGPA: 8.2/10"
  },
  {
    degree: "Pre-University Course",
    institution: "SBR PU College of Science",
    period: "2020 — 2022",
    details: "Percentage: 87%"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    skills: ["Python", "C++", "C"]
  },
  {
    name: "AI / ML",
    skills: ["Decision Tree", "KNN", "Random Forest", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Flask", "RESTful API", "JWT Auth", "PostgreSQL", "SQL"]
  },
  {
    name: "Tools & Core",
    skills: ["Git", "GitHub", "Docker", "DSA", "System Design", "Algorithmic Thinking"]
  }
];
