"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";

// Dummy projects data - will be replaced with Notion data
const projects: Project[] = [
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
    title: "InkFlow",
    description: "Real-time collaborative whiteboard tool for teams with drawing, shapes, and live cursors.",
    tags: ["React", "Canvas API", "WebSockets", "Node.js"],
    githubUrl: "https://github.com/rishabh-ml/inkflow",
    liveUrl: "https://inkflow-demo.vercel.app",
    featured: true,
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    title: "Task Management System",
    description: "MERN stack application with drag-drop kanban boards, team collaboration, and analytics.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/rishabh-ml/task-manager",
    featured: false,
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    title: "HealthEase",
    description: "Doctor consultation app with appointment booking, video calls, and prescription management.",
    tags: ["React Native", "Firebase", "WebRTC"],
    githubUrl: "https://github.com/rishabh-ml/healthease",
    featured: false,
    createdAt: "2024-04-05",
  },
  {
    id: "5",
    title: "Voice Assistant",
    description: "Python-based voice assistant using OpenAI API for natural language processing.",
    tags: ["Python", "OpenAI", "Speech Recognition"],
    githubUrl: "https://github.com/rishabh-ml/voice-assistant",
    featured: false,
    createdAt: "2024-05-12",
  },
  {
    id: "6",
    title: "Portfolio v2",
    description: "This portfolio website built with Next.js, Framer Motion, and Notion CMS integration.",
    tags: ["Next.js", "Framer Motion", "Notion API", "TailwindCSS"],
    githubUrl: "https://github.com/rishabh-ml/portfolio-v2",
    liveUrl: "https://rishabh-ml.vercel.app",
    featured: true,
    createdAt: "2024-06-01",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Projects() {
  return (
    <section id="projects" className="py-8 bg-card/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold text-foreground text-center">Recent Projects</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-auto hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base font-medium leading-tight">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs ml-2">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-tight line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2 pt-1">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-7"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-7"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
