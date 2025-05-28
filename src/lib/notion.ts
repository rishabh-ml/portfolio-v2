import { Client } from '@notionhq/client';
import { 
  Project, 
  BlogPost, 
  Achievement, 
  TechStack, 
  Experience,
  NotionDatabase 
} from './types';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});


// Database IDs - these should be set in environment variables
const DATABASES = {
  PROJECTS: process.env.NOTION_PROJECTS_DB_ID || '',
  BLOG: process.env.NOTION_BLOG_DB_ID || '',
  ACHIEVEMENTS: process.env.NOTION_ACHIEVEMENTS_DB_ID || '',
  TECH_STACK: process.env.NOTION_TECH_STACK_DB_ID || '',
  EXPERIENCE: process.env.NOTION_EXPERIENCE_DB_ID || '',
};

// Helper function to extract text from Notion rich text
function extractText(richText: any[]): string {
  return richText?.map((text: any) => text.plain_text).join('') || '';
}

// Helper function to extract date
function extractDate(date: any): string {
  return date?.start || '';
}

// Helper function to extract select/multi-select
function extractSelect(select: any): string {
  return select?.name || '';
}

function extractMultiSelect(multiSelect: any[]): string[] {
  return multiSelect?.map((item: any) => item.name) || [];
}

// Helper function to extract URL
function extractUrl(url: any): string {
  return url || '';
}

// Helper function to extract checkbox
function extractCheckbox(checkbox: any): boolean {
  return checkbox || false;
}

// Fetch projects from Notion
export async function getProjects(): Promise<Project[]> {
  try {
    if (!DATABASES.PROJECTS) {
      console.warn('NOTION_PROJECTS_DB_ID not configured, returning dummy data');
      return getDummyProjects();
    }

    const response = await notion.databases.query({
      database_id: DATABASES.PROJECTS,
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    }) as NotionDatabase;

    return response.results.map((page: any) => ({
      id: page.id,
      title: extractText(page.properties.Title?.title),
      description: extractText(page.properties.Description?.rich_text),
      tags: extractMultiSelect(page.properties.Tags?.multi_select),
      githubUrl: extractUrl(page.properties.GitHub?.url),
      liveUrl: extractUrl(page.properties.Live?.url),
      imageUrl: extractUrl(page.properties.Image?.url),
      featured: extractCheckbox(page.properties.Featured?.checkbox),
      createdAt: extractDate(page.properties.Created?.created_time),
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return getDummyProjects();
  }
}

// Fetch blog posts from Notion
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!DATABASES.BLOG) {
      console.warn('NOTION_BLOG_DB_ID not configured, returning dummy data');
      return getDummyBlogPosts();
    }

    const response = await notion.databases.query({
      database_id: DATABASES.BLOG,
      sorts: [
        {
          property: 'Published',
          direction: 'descending',
        },
      ],
    }) as NotionDatabase;

    return response.results.map((page: any) => ({
      id: page.id,
      title: extractText(page.properties.Title?.title),
      summary: extractText(page.properties.Summary?.rich_text),
      url: extractUrl(page.properties.URL?.url),
      publishedAt: extractDate(page.properties.Published?.date),
      tags: extractMultiSelect(page.properties.Tags?.multi_select),
      readTime: page.properties.ReadTime?.number || undefined,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return getDummyBlogPosts();
  }
}

// Fetch achievements from Notion
export async function getAchievements(): Promise<Achievement[]> {
  try {
    if (!DATABASES.ACHIEVEMENTS) {
      console.warn('NOTION_ACHIEVEMENTS_DB_ID not configured, returning dummy data');
      return getDummyAchievements();
    }

    const response = await notion.databases.query({
      database_id: DATABASES.ACHIEVEMENTS,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    }) as NotionDatabase;

    return response.results.map((page: any) => ({
      id: page.id,
      title: extractText(page.properties.Title?.title),
      platform: extractText(page.properties.Platform?.rich_text),
      badgeUrl: extractUrl(page.properties.Badge?.url),
      url: extractUrl(page.properties.URL?.url),
      achievedAt: extractDate(page.properties.Date?.date),
      category: extractSelect(page.properties.Category?.select) as any,
    }));
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return getDummyAchievements();
  }
}

// Fetch tech stack from Notion
export async function getTechStack(): Promise<TechStack[]> {
  try {
    if (!DATABASES.TECH_STACK) {
      console.warn('NOTION_TECH_STACK_DB_ID not configured, returning dummy data');
      return getDummyTechStack();
    }

    const response = await notion.databases.query({
      database_id: DATABASES.TECH_STACK,
    }) as NotionDatabase;

    return response.results.map((page: any) => ({
      id: page.id,
      name: extractText(page.properties.Name?.title),
      category: extractSelect(page.properties.Category?.select) as any,
      iconUrl: extractUrl(page.properties.Icon?.url),
      proficiency: extractSelect(page.properties.Proficiency?.select) as any,
    }));
  } catch (error) {
    console.error('Error fetching tech stack:', error);
    return getDummyTechStack();
  }
}

// Dummy data functions for development/fallback
function getDummyProjects(): Project[] {
  return [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Next.js, Stripe integration, and admin dashboard.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/rishabh-ml/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team collaboration features.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com/rishabh-ml/task-manager',
      liveUrl: 'https://taskmanager-demo.vercel.app',
      featured: true,
      createdAt: '2024-02-20',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
      tags: ['Vue.js', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/rishabh-ml/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app',
      featured: false,
      createdAt: '2024-03-10',
    },
  ];
}

function getDummyBlogPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      summary: 'Best practices for building large-scale React applications with proper architecture.',
      url: 'https://dev.to/rishabh-ml/building-scalable-react-applications',
      publishedAt: '2024-01-20',
      tags: ['React', 'Architecture', 'Best Practices'],
      readTime: 8,
    },
    {
      id: '2',
      title: 'Next.js 14 App Router Deep Dive',
      summary: 'Comprehensive guide to Next.js 14 App Router and its new features.',
      url: 'https://dev.to/rishabh-ml/nextjs-14-app-router',
      publishedAt: '2024-02-15',
      tags: ['Next.js', 'React', 'Web Development'],
      readTime: 12,
    },
  ];
}

function getDummyAchievements(): Achievement[] {
  return [
    {
      id: '1',
      title: 'AWS Certified Developer',
      platform: 'Amazon Web Services',
      achievedAt: '2024-01-10',
      category: 'certification',
    },
    {
      id: '2',
      title: 'React Developer Certification',
      platform: 'Meta',
      achievedAt: '2023-12-15',
      category: 'certification',
    },
    {
      id: '3',
      title: 'Hackathon Winner',
      platform: 'TechCrunch Disrupt',
      achievedAt: '2023-11-20',
      category: 'award',
    },
  ];
}

function getDummyTechStack(): TechStack[] {
  return [
    { id: '1', name: 'React', category: 'frontend', proficiency: 'expert' },
    { id: '2', name: 'Next.js', category: 'frontend', proficiency: 'expert' },
    { id: '3', name: 'TypeScript', category: 'frontend', proficiency: 'advanced' },
    { id: '4', name: 'Node.js', category: 'backend', proficiency: 'advanced' },
    { id: '5', name: 'PostgreSQL', category: 'database', proficiency: 'intermediate' },
    { id: '6', name: 'AWS', category: 'cloud', proficiency: 'intermediate' },
    { id: '7', name: 'Docker', category: 'tools', proficiency: 'intermediate' },
  ];
}
