export const portfolioConfig = {
  personal: {
    name: "Rishabh Shukla",
    title: "Full Stack Developer",
    subtitle: "IT Proposal Writer",
    bio: "Building scalable web applications with cutting-edge technologies and contributing to open-source innovation",
    location: "Remote",
    email: "contact.rishabh.shukla@gmail.com",
    avatar: "/rishabh.png",
    resume: "/resume.pdf"
  },
  
  social: {
    github: "https://github.com/rishabh-ml",
    linkedin: "https://linkedin.com/in/rishabh-ml",
    twitter: "https://twitter.com/rishabh_ml",
    email: "mailto:contact.rishabh.shukla@gmail.com"
  },

  techStack: {
    frontend: [
      { name: "React.js", level: "Expert", icon: "⚛️" },
      { name: "Next.js", level: "Expert", icon: "▲" },
      { name: "TypeScript", level: "Advanced", icon: "🔷" },
      { name: "Tailwind CSS", level: "Expert", icon: "🎨" },
      { name: "Framer Motion", level: "Advanced", icon: "🎬" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "🟢" },
      { name: "Express.js", level: "Advanced", icon: "⚡" },
      { name: "tRPC", level: "Intermediate", icon: "🔧" },
      { name: "Prisma", level: "Advanced", icon: "🔺" }
    ],
    database: [
      { name: "MongoDB", level: "Advanced", icon: "🍃" },
      { name: "PostgreSQL", level: "Intermediate", icon: "🐘" },
      { name: "Redis", level: "Intermediate", icon: "🔴" }
    ],
    tools: [
      { name: "Git", level: "Expert", icon: "🔄" },
      { name: "Docker", level: "Intermediate", icon: "🐳" },
      { name: "AWS", level: "Intermediate", icon: "☁️" },
      { name: "Vercel", level: "Advanced", icon: "▲" }
    ]
  },

  featuredProjects: [
    {
      id: "chattersphere",
      title: "ChatterSphere",
      description: "Next-gen social platform combining Reddit-style communities with Discord-like real-time messaging",
      image: "/projects/chattersphere.png",
      tech: ["Next.js", "Clerk", "MongoDB", "Socket.io", "TailwindCSS"],
      github: "https://github.com/rishabh-ml/chattersphere",
      live: "https://chattersphere.vercel.app",
      featured: true,
      highlights: ["Real-time messaging", "Community system", "User authentication"]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX and comprehensive admin dashboard",
      image: "/projects/ecommerce.png",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      github: "https://github.com/rishabh-ml/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      featured: true,
      highlights: ["Payment integration", "Admin dashboard", "Inventory management"]
    },
    {
      id: "portfolio-v2",
      title: "Portfolio v2",
      description: "Futuristic developer portfolio with advanced animations and modern design patterns",
      image: "/projects/portfolio.png",
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
      github: "https://github.com/rishabh-ml/portfolio-v2",
      live: "https://rishabh-ml.vercel.app",
      featured: true,
      highlights: ["Advanced animations", "Responsive design", "Performance optimized"]
    }
  ],

  projects: [
    {
      id: "task-manager",
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/rishabh-ml/task-manager",
      live: "https://taskmanager-demo.vercel.app"
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts and animations",
      tech: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com/rishabh-ml/weather-app",
      live: "https://weather-dashboard-demo.vercel.app"
    }
  ],

  achievements: [
    {
      id: "fullstack-cert",
      title: "Full-Stack Development Certification",
      issuer: "30DaysCoding",
      date: "2024-01-01",
      type: "certification",
      icon: "🏆"
    },
    {
      id: "react-cert",
      title: "React.js Complete Guide",
      issuer: "Udemy (Maximilian)",
      date: "2023-12-01",
      type: "certification",
      icon: "⚛️"
    },
    {
      id: "android-cert",
      title: "Android Development",
      issuer: "DigiCoders",
      date: "2023-11-01",
      type: "certification",
      icon: "📱"
    },
    {
      id: "oss-contributor",
      title: "Open Source Contributor",
      issuer: "GitHub",
      date: "2024-02-01",
      type: "milestone",
      icon: "🌟"
    }
  ],

  experience: [
    {
      id: "dataman",
      company: "DatamanUSA",
      role: "IT Proposal Writer",
      period: "June 2023 - Present",
      description: "Specialized in securing government contracts through technical proposal writing. Expert in MERN stack development and active contributor to open-source projects.",
      technologies: ["React", "Node.js", "MongoDB", "Technical Writing"],
      current: true
    },
    {
      id: "freelance",
      company: "Freelance",
      role: "Full Stack Developer",
      period: "Jan 2022 - May 2023",
      description: "Built scalable web applications for various clients, focusing on modern development practices and clean code architecture.",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"],
      current: false
    }
  ],

  ossContributions: [
    {
      id: "excalidraw",
      project: "Excalidraw",
      description: "Contributed to architecture documentation and feature improvements",
      url: "https://github.com/excalidraw/excalidraw",
      type: "Documentation",
      language: "TypeScript"
    },
    {
      id: "nextjs",
      project: "Next.js",
      description: "Bug fixes and performance optimizations",
      url: "https://github.com/vercel/next.js",
      type: "Bug Fix",
      language: "JavaScript"
    }
  ],
  stats: {
    yearsOfExperience: 3,
    projectsCompleted: 15,
    githubStars: 120,
    contributions: 200,
    achievements: 8
  }
};

export type PortfolioConfig = typeof portfolioConfig;
