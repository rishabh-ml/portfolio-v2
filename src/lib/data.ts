import { Project, BlogPost, Achievement, TechStack, Experience } from './types';

// Static Projects Data
export const projects: Project[] = [
  {
    id: "1",
    title: "ChatterSphere",
    description: "Reddit x Discord hybrid app with real-time messaging, communities, and user authentication.",
    tags: ["Next.js", "Clerk", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/rishabh-ml/chattersphere",
    liveUrl: "https://chattersphere.vercel.app",
    featured: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/rishabh-ml/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team collaboration features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/rishabh-ml/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: false,
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    title: "Portfolio v2",
    description: "Modern portfolio website built with Next.js, Framer Motion, and TailwindCSS featuring responsive design and smooth animations.",
    tags: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    githubUrl: "https://github.com/rishabh-ml/portfolio-v2",
    liveUrl: "https://rishabh-ml.vercel.app",
    featured: true,
    createdAt: "2024-04-05",
  },
];

// Static Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    summary: "Best practices for building large-scale React applications with proper architecture.",
    url: "https://dev.to/rishabh-ml/building-scalable-react-applications",
    publishedAt: "2024-01-20",
    tags: ["React", "Architecture", "Best Practices"],
    readTime: 8,
  },
  {
    id: "2",
    title: "Next.js 14 App Router Deep Dive",
    summary: "Comprehensive guide to Next.js 14 App Router and its new features.",
    url: "https://dev.to/rishabh-ml/nextjs-14-app-router",
    publishedAt: "2024-02-15",
    tags: ["Next.js", "React", "Web Development"],
    readTime: 12,
  },
  {
    id: "3",
    title: "Modern State Management in React",
    summary: "Exploring different state management solutions for React applications.",
    url: "https://dev.to/rishabh-ml/modern-state-management-react",
    publishedAt: "2024-03-01",
    tags: ["React", "State Management", "Redux"],
    readTime: 10,
  },
];

// Static Achievements Data
export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Full-Stack Development Certification",
    platform: "30DaysCoding",
    achievedAt: "2024-01-01",
    category: "certification",
    url: "#"
  },
  {
    id: "2",
    title: "React.js Complete Guide",
    platform: "Udemy (Maximilian)",
    achievedAt: "2023-12-01",
    category: "certification",
    url: "#"
  },
  {
    id: "3",
    title: "Android Development",
    platform: "DigiCoders",
    achievedAt: "2023-11-01",
    category: "certification",
    url: "#"
  },
  {
    id: "4",
    title: "Open Source Contributor",
    platform: "GitHub",
    achievedAt: "2024-02-01",
    category: "milestone",
    url: "https://github.com/rishabh-ml"
  },
];

// Static Tech Stack Data
export const techStack: TechStack[] = [
  {
    id: "1",
    name: "React.js",
    category: "frontend",
    proficiency: "expert"
  },
  {
    id: "2",
    name: "Next.js",
    category: "frontend",
    proficiency: "expert"
  },
  {
    id: "3",
    name: "TypeScript",
    category: "frontend",
    proficiency: "advanced"
  },
  {
    id: "4",
    name: "Node.js",
    category: "backend",
    proficiency: "advanced"
  },
  {
    id: "5",
    name: "MongoDB",
    category: "database",
    proficiency: "advanced"
  },
  {
    id: "6",
    name: "PostgreSQL",
    category: "database",
    proficiency: "intermediate"
  },
  {
    id: "7",
    name: "Git",
    category: "tools",
    proficiency: "expert"
  },
  {
    id: "8",
    name: "Docker",
    category: "tools",
    proficiency: "intermediate"
  },
];

// Static Experience Data
export const experience: Experience[] = [
  {
    id: "1",
    company: "DatamanUSA",
    position: "IT Proposal Writer",
    startDate: "2023-06-01",
    description: "Specialized in securing government contracts through technical proposal writing. Expertise in the MERN stack and contributed to open source projects including Excalidraw's architecture documentation.",
    technologies: ["React", "Node.js", "MongoDB", "Technical Writing"],
    current: true
  },
  {
    id: "2",
    company: "Freelance",
    position: "Full Stack Developer",
    startDate: "2022-01-01",
    endDate: "2023-05-31",
    description: "Built scalable web applications for various clients, focusing on modern development practices and clean code architecture.",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
    current: false
  },
];

// Export functions to maintain API compatibility
export const getProjects = async (): Promise<Project[]> => {
  return Promise.resolve(projects);
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  return Promise.resolve(blogPosts);
};

export const getAchievements = async (): Promise<Achievement[]> => {
  return Promise.resolve(achievements);
};

export const getTechStack = async (): Promise<TechStack[]> => {
  return Promise.resolve(techStack);
};

export const getExperience = async (): Promise<Experience[]> => {
  return Promise.resolve(experience);
};
