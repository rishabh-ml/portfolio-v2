export const portfolioConfig = {
  personal: {
    name: "Rishabh Shukla",
    title: "Full Stack Developer",
    subtitle: "Proposal Writer & Open Source Contributor",
    bio: "Fast-learning Full Stack Developer with a passion for clean, scalable code and real-world impact. Experienced in building end-to-end web applications with modern frameworks and deploying them confidently. Active open-source contributor and public learner, bringing a unique blend of technical skill and business communication.",
    location: "India",
    email: "contact.rishabh.shukla@gmail.com",
    phone: "+91 8738060587",
    avatar: "/rishabh.png",
    resume: "/resume.pdf"
  },
    social: {
    github: "https://github.com/rishabh-ml",
    linkedin: "https://www.linkedin.com/in/rishabh-ml/",
    portfolio: "https://rishabh-ml.vercel.app",
    email: "mailto:contact.rishabh.shukla@gmail.com"
  },

  techStack: {
    frontend: [
      { name: "React.js", level: "Expert", icon: "⚛️" },
      { name: "Next.js", level: "Expert", icon: "▲" },
      { name: "JavaScript (ES6+)", level: "Expert", icon: "🟨" },
      { name: "TypeScript", level: "Advanced", icon: "🔷" },
      { name: "HTML5", level: "Expert", icon: "🔸" },
      { name: "CSS3", level: "Expert", icon: "🎨" },
      { name: "Tailwind CSS", level: "Expert", icon: "💨" },
      { name: "Framer Motion", level: "Advanced", icon: "🎬" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "🟢" },
      { name: "Express.js", level: "Advanced", icon: "⚡" },
      { name: "PHP", level: "Intermediate", icon: "🐘" },
      { name: "Java", level: "Advanced", icon: "☕" },
      { name: "Spring Boot", level: "Intermediate", icon: "🍃" },
      { name: "Python", level: "Basic", icon: "🐍" },
      { name: "RESTful APIs", level: "Advanced", icon: "🔗" }
    ],
    database: [
      { name: "MongoDB", level: "Advanced", icon: "🍃" },
      { name: "MySQL", level: "Advanced", icon: "🐬" },
      { name: "Firebase", level: "Intermediate", icon: "🔥" }
    ],
    tools: [
      { name: "Git", level: "Expert", icon: "🔄" },
      { name: "GitHub", level: "Expert", icon: "🐙" },
      { name: "Vercel", level: "Advanced", icon: "▲" },
      { name: "Postman", level: "Advanced", icon: "📮" },
      { name: "Figma", level: "Intermediate", icon: "🎨" },
      { name: "Canva", level: "Intermediate", icon: "📐" }
    ]
  },
  featuredProjects: [
    {
      id: "chattersphere",
      title: "ChatterSphere",
      description: "A Reddit–Discord-inspired platform with dynamic communities, threaded discussions, and real-time voting",
      image: "/projects/chattersphere.png",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Clerk Auth", "Framer Motion"],
      github: "https://github.com/rishabh-ml/chattersphere",
      live: "https://chattersphere.vercel.app",
      featured: true,
      highlights: ["Role-based access", "Real-time voting", "Content visibility filters", "Scalable backend APIs"]
    },
    {
      id: "healthease",
      title: "HealthEase",
      description: "Doctor consultation mobile app with booking, chat, and secure health records storage",
      image: "/projects/healthease.png",
      tech: ["React Native", "Firebase", "Expo"],
      github: "https://github.com/rishabh-ml/healthease",
      live: "#",
      featured: true,
      highlights: ["Real-time chat", "Firebase integration", "Secure authentication", "Mobile-first design"]
    },
    {
      id: "inkflow",
      title: "InkFlow",
      description: "Real-time collaborative whiteboard tool with drawing sync, chat, and version control (College Hackathon Finalist)",
      image: "/projects/inkflow.png",
      tech: ["React", "Node.js", "Socket.io"],
      github: "https://github.com/rishabh-ml/inkflow",
      live: "#",
      featured: true,
      highlights: ["Real-time collaboration", "WebSocket integration", "Team interaction", "Drawing synchronization"]
    },
    {
      id: "tenda",
      title: "Tenda",
      description: "Smart Tender Management System - Enterprise-grade platform for managing bids, tenders, and contract workflows",
      image: "/projects/tenda.png",
      tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      github: "https://github.com/rishabh-ml/tenda",
      live: "#",
      featured: true,
      highlights: ["Enterprise-grade", "Workflow automation", "Role-based access", "Document management"]
    }
  ],
  projects: [
    {
      id: "excalidraw-contrib",
      title: "Excalidraw - Open Source Contribution",
      description: "Authored official architecture.md documentation for the globally-used whiteboard tool",
      tech: ["TypeScript", "React", "Open Source", "Documentation"],
      github: "https://github.com/excalidraw/excalidraw",
      live: "https://excalidraw.com"
    },
    {
      id: "portfolio-v2",
      title: "Portfolio v2",
      description: "Modern developer portfolio with advanced animations and professional design",
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
      github: "https://github.com/rishabh-ml/portfolio-v2",
      live: "https://rishabh-ml.vercel.app"
    }
  ],

  achievements: [
    {
      id: "react-cert",
      title: "React JS Certification",
      issuer: "Udemy",
      date: "2025-01-01",
      type: "certification",
      icon: "⚛️"
    },
    {
      id: "nextjs-cert",
      title: "Next.js Full Stack Development",
      issuer: "30DaysCoding",
      date: "2024-12-01",
      type: "certification",
      icon: "▲"
    },
    {
      id: "java-cert",
      title: "Java Development",
      issuer: "30DaysCoding",
      date: "2024-11-01",
      type: "certification",
      icon: "☕"
    },
    {
      id: "android-cert",
      title: "Android Development",
      issuer: "Digicoders Technologies",
      date: "2024-10-01",
      type: "certification",
      icon: "📱"
    },
    {
      id: "hackathon-finalist",
      title: "InkFlow - College Hackathon Finalist",
      issuer: "College Hackathon",
      date: "2024-09-01",
      type: "achievement",
      icon: "🏆"
    },
    {
      id: "oss-contributor",
      title: "Open Source Contributor - Excalidraw",
      issuer: "GitHub",
      date: "2024-08-01",
      type: "milestone",
      icon: "🌟"
    }
  ],

  experience: [
    {
      id: "proposal-writer",
      company: "DatamanUSA, LLC",
      role: "Proposal Writer",
      period: "Jun 2024 – Present",
      description: "Drafted and structured RFP responses for multimillion-dollar federal, state, and local government contracts across IT, healthcare, and staffing verticals. Automated parts of the sourcing and pre-bid process using scripts to save 10+ hours weekly.",
      technologies: ["Technical Writing", "RFP Analysis", "Process Automation", "Cross-functional Collaboration"],
      current: true
    },
    {
      id: "business-dev",
      company: "DatamanUSA, LLC",
      role: "Business Development Executive",
      period: "Jun 2023 – Mar 2024",
      description: "Conducted targeted lead research and outreach, resulting in 25% growth in qualified proposal opportunities. Created visually engaging pitch decks and marketing collateral using Canva and Figma.",
      technologies: ["Lead Generation", "Proposal Management", "Canva", "Figma", "Business Development"],
      current: false
    },
    {
      id: "freelance",
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2022 – Present",
      description: "Active freelancer delivering digital and software services on platforms like Upwork and Freelancer.com. Delivered projects across landing pages, admin dashboards, and automation scripts.",
      technologies: ["React", "Next.js", "Node.js", "Full Stack Development", "Client Management"],
      current: true
    }
  ],
  ossContributions: [
    {
      id: "excalidraw",
      project: "Excalidraw",
      description: "Authored official architecture.md documentation to help new contributors understand component structure and internal logic",
      url: "https://github.com/excalidraw/excalidraw",
      type: "Documentation",
      language: "TypeScript"
    }
  ],

  education: {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Government Polytechnic Mohammadi, Uttar Pradesh, India",
    period: "Sep 2022 – Aug 2025 (Expected)",
    focus: "Web Development, Software Engineering, and Backend Systems"
  },

  stats: {
    yearsOfExperience: 2,
    projectsCompleted: 20,
    githubStars: 150,
    contributions: 250,
    achievements: 6
  }
};

export type PortfolioConfig = typeof portfolioConfig;
