"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import { getProjects } from "@/lib/data";
import { useEffect, useState } from "react";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-6 glass">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <h2 className="text-xl font-semibold text-foreground">Recent Projects</h2>
            <p className="text-sm text-muted-foreground">A showcase of my latest work and contributions</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group"
              >
                <Card className="h-auto hover-glow-subtle transition-all duration-300 group-hover:border-accent-cyan/30">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-medium leading-tight group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs ml-1 px-2 bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, index) => {
                        const colors = ['text-accent-cyan', 'text-accent-blue', 'text-accent-purple'];
                        const colorClass = colors[index % colors.length];
                        return (
                          <Badge
                            key={tag}
                            variant="outline"
                            className={`text-xs px-2 py-0.5 ${colorClass} border-current/20 hover:bg-current/10 transition-colors`}
                          >
                            {tag}
                          </Badge>
                        );
                      })}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5 text-muted-foreground">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-1">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs h-7 px-3 hover:text-accent-cyan hover:bg-accent-cyan/10"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs h-7 px-3 hover:text-accent-blue hover:bg-accent-blue/10"
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
