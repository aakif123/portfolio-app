export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    repoUrl: string;
}

export interface Experience {
    id: string;
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
}

export interface Skill {
    id: string;
    name: string;
    level: string; // e.g., "beginner", "intermediate", "advanced"
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}