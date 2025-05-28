// Core portfolio types
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  tags: string[];
  readTime?: number;
}

export interface Achievement {
  id: string;
  title: string;
  platform: string;
  badgeUrl?: string;
  url?: string;
  achievedAt: string;
  category: 'certification' | 'award' | 'milestone';
}

export interface TechStack {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  iconUrl?: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}



// Component props types
export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

// Animation types
export interface AnimationConfig {
  initial: Record<string, any>;
  animate: Record<string, any>;
  transition?: Record<string, any>;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
}

// GitHub stats types
export interface GitHubStats {
  totalCommits: number;
  currentStreak: number;
  longestStreak: number;
  totalContributions: number;
  publicRepos: number;
  followers: number;
  following: number;
}
