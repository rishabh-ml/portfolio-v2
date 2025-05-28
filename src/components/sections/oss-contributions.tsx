"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, GitPullRequest, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// OSS Contributions data
const ossContributions = [
  {
    id: "1",
    project: "Excalidraw",
    repository: "excalidraw/excalidraw",
    contribution: "Architecture Documentation",
    type: "documentation",
    description: "Authored the official architecture.md to document component structure and internal logic for new contributors. Enhanced project clarity and maintainability through comprehensive architectural documentation.",
    url: "https://github.com/excalidraw/excalidraw",
    status: "merged",
    date: "Aug 2024",
    impact: "Improved developer onboarding",
    technologies: ["TypeScript", "React", "Documentation", "Open Source"]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'merged': return 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20';
    case 'ongoing': return 'text-accent-blue bg-accent-blue/10 border-accent-blue/20';
    case 'active': return 'text-accent-purple bg-accent-purple/10 border-accent-purple/20';
    default: return 'text-muted-foreground bg-muted/10 border-muted/20';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'documentation': return GitBranch;
    case 'mentoring': return Star;
    case 'project': return GitPullRequest;
    default: return GitBranch;
  }
};

export function OSSContributions() {
  return (
    <section id="oss-contributions" className="py-6 glass">
      <div className="max-w-4xl mx-auto px-4">
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
            <h2 className="text-xl font-semibold text-foreground">Open Source Contributions</h2>
            <p className="text-sm text-muted-foreground">Contributing to the developer community through code, documentation, and mentoring</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {ossContributions.map((contribution) => {
              const IconComponent = getTypeIcon(contribution.type);
              return (
                <motion.div
                  key={contribution.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="hover-glow-subtle transition-all duration-300 group-hover:border-accent-cyan/30">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                            <IconComponent className="w-4 h-4 text-accent-cyan" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-sm font-medium text-foreground group-hover:text-accent-cyan transition-colors">
                                {contribution.project}
                              </h3>
                              <p className="text-xs text-muted-foreground font-mono">
                                {contribution.repository}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant="outline" 
                                className={`text-xs px-2 py-0.5 ${getStatusColor(contribution.status)}`}
                              >
                                {contribution.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{contribution.date}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-accent-blue mb-1">
                              {contribution.contribution}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {contribution.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {contribution.technologies.map((tech, index) => {
                                const colors = ['text-accent-cyan', 'text-accent-blue', 'text-accent-purple'];
                                const colorClass = colors[index % colors.length];
                                return (
                                  <Badge 
                                    key={tech} 
                                    variant="outline" 
                                    className={`text-xs px-2 py-0.5 ${colorClass} border-current/20`}
                                  >
                                    {tech}
                                  </Badge>
                                );
                              })}
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs h-7 px-3 hover:text-accent-cyan hover:bg-accent-cyan/10"
                              onClick={() => window.open(contribution.url, "_blank")}
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View
                            </Button>
                          </div>

                          <div className="text-xs text-accent-purple font-medium">
                            Impact: {contribution.impact}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-4"
          >
            <Button
              variant="outline"
              className="hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/30"
              onClick={() => window.open("https://github.com/rishabh-ml", "_blank")}
            >
              <Star className="w-4 h-4 mr-2" />
              View All Contributions on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
