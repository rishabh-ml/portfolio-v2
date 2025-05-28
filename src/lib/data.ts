import { Project, BlogPost, Achievement, TechStack, Experience } from './types';

// Static Projects Data
export const projects: Project[] = [
  {
    id: "1",
    title: "ChatterSphere",
    description: "A Reddit–Discord-inspired platform with dynamic communities, threaded discussions, and real-time voting. Features role-based access and content visibility filters.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Clerk Auth", "Framer Motion"],
    githubUrl: "https://github.com/rishabh-ml/chattersphere",
    liveUrl: "https://chattersphere.vercel.app",
    featured: true,
    createdAt: "2024-11-15",
  },
  {
    id: "2",
    title: "HealthEase",
    description: "Doctor consultation mobile app with booking, chat with doctors, and secure health records storage. Built with React Native and Firebase.",
    tags: ["React Native", "Firebase", "Expo", "Mobile Development"],
    githubUrl: "https://github.com/rishabh-ml/healthease",
    liveUrl: "#",
    featured: true,
    createdAt: "2024-09-20",
  },
  {
    id: "3",
    title: "InkFlow",
    description: "Real-time collaborative whiteboard tool with drawing sync, chat, and basic version control. College Hackathon Finalist project.",
    tags: ["React", "Node.js", "Socket.io", "WebSockets"],
    githubUrl: "https://github.com/rishabh-ml/inkflow",
    liveUrl: "#",
    featured: true,
    createdAt: "2024-07-10",
  },
  {
    id: "4",
    title: "Tenda",
    description: "Smart Tender Management System - Enterprise-grade platform for managing bids, tenders, and contract workflows with role-based access.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    githubUrl: "https://github.com/rishabh-ml/tenda",
    liveUrl: "#",
    featured: true,
    createdAt: "2024-12-05",
  },
  {
    id: "5",
    title: "Excalidraw Contribution",
    description: "Open source contribution to Excalidraw - authored official architecture.md documentation for new contributors.",
    tags: ["TypeScript", "React", "Open Source", "Documentation"],
    githubUrl: "https://github.com/excalidraw/excalidraw",
    liveUrl: "https://excalidraw.com",
    featured: false,
    createdAt: "2024-08-15",
  },
  {
    id: "6",
    title: "Portfolio v2",
    description: "Modern developer portfolio with advanced animations and professional design patterns using Next.js and Framer Motion.",
    tags: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
    githubUrl: "https://github.com/rishabh-ml/portfolio-v2",
    liveUrl: "https://rishabh-ml.vercel.app",
    featured: false,
    createdAt: "2024-12-01",
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
    title: "React JS Certification",
    platform: "Udemy",
    achievedAt: "2025-01-01",
    category: "certification",
    url: "#"
  },
  {
    id: "2",
    title: "Next.js Full Stack Development",
    platform: "30DaysCoding",
    achievedAt: "2024-12-01",
    category: "certification",
    url: "#"
  },
  {
    id: "3",
    title: "Java Development",
    platform: "30DaysCoding",
    achievedAt: "2024-11-01",
    category: "certification",
    url: "#"
  },
  {
    id: "4",
    title: "Android Development",
    platform: "Digicoders Technologies",
    achievedAt: "2024-10-01",
    category: "certification",
    url: "#"
  },
  {
    id: "5",
    title: "InkFlow - College Hackathon Finalist",
    platform: "College Hackathon",
    achievedAt: "2024-09-01",
    category: "award",
    url: "#"
  },
  {
    id: "6",
    title: "Open Source Contributor - Excalidraw",
    platform: "GitHub",
    achievedAt: "2024-08-01",
    category: "milestone",
    url: "https://github.com/excalidraw/excalidraw"
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
    name: "JavaScript (ES6+)",
    category: "frontend",
    proficiency: "expert"
  },
  {
    id: "4",
    name: "TypeScript",
    category: "frontend",
    proficiency: "advanced"
  },
  {
    id: "5",
    name: "HTML5",
    category: "frontend",
    proficiency: "expert"
  },
  {
    id: "6",
    name: "CSS3",
    category: "frontend",
    proficiency: "expert"
  },
  {
    id: "7",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "expert"
  },
  {
    id: "8",
    name: "Node.js",
    category: "backend",
    proficiency: "advanced"
  },
  {
    id: "9",
    name: "Express.js",
    category: "backend",
    proficiency: "advanced"
  },
  {
    id: "10",
    name: "PHP",
    category: "backend",
    proficiency: "intermediate"
  },
  {
    id: "11",
    name: "Java",
    category: "backend",
    proficiency: "advanced"
  },
  {
    id: "12",
    name: "Python",
    category: "backend",
    proficiency: "beginner"
  },
  {
    id: "13",
    name: "MongoDB",
    category: "database",
    proficiency: "advanced"
  },
  {
    id: "14",
    name: "MySQL",
    category: "database",
    proficiency: "advanced"
  },
  {
    id: "15",
    name: "Firebase",
    category: "database",
    proficiency: "intermediate"
  },
  {
    id: "16",
    name: "Git",
    category: "tools",
    proficiency: "expert"
  },
  {
    id: "17",
    name: "GitHub",
    category: "tools",
    proficiency: "expert"
  },
  {
    id: "18",
    name: "Vercel",
    category: "tools",
    proficiency: "advanced"
  },
  {
    id: "19",
    name: "Postman",
    category: "tools",
    proficiency: "advanced"
  },
  {
    id: "20",
    name: "Figma",
    category: "tools",
    proficiency: "intermediate"
  }
];

// Static Experience Data
export const experience: Experience[] = [
  {
    id: "1",
    company: "DatamanUSA, LLC",
    position: "Proposal Writer",
    startDate: "2024-06-01",
    description: "Drafted and structured RFP responses for multimillion-dollar federal, state, and local government contracts across IT, healthcare, and staffing verticals. Automated parts of the sourcing and pre-bid process using scripts to save 10+ hours weekly.",
    technologies: ["Technical Writing", "RFP Analysis", "Process Automation", "Cross-functional Collaboration"],
    current: true
  },
  {
    id: "2",
    company: "DatamanUSA, LLC",
    position: "Business Development Executive",
    startDate: "2023-06-01",
    endDate: "2024-03-31",
    description: "Conducted targeted lead research and outreach, resulting in 25% growth in qualified proposal opportunities. Created visually engaging pitch decks and marketing collateral using Canva and Figma.",
    technologies: ["Lead Generation", "Proposal Management", "Canva", "Figma", "Business Development"],
    current: false
  },
  {
    id: "3",
    company: "Freelance",
    position: "Full Stack Developer",
    startDate: "2022-01-01",
    description: "Active freelancer delivering digital and software services on platforms like Upwork and Freelancer.com. Delivered projects across landing pages, admin dashboards, and automation scripts under tight deadlines.",
    technologies: ["React", "Next.js", "Node.js", "Full Stack Development", "Client Management"],
    current: true
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
