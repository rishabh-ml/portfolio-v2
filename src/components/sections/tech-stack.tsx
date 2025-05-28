"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = {
  Frontend: [
    "React.js", "Next.js", "JavaScript", "TypeScript", "TailwindCSS", 
    "HTML5", "CSS3", "React Native"
  ],
  Backend: [
    "Node.js", "Express.js", "Python", "PHP", "Java"
  ],
  Databases: [
    "MongoDB", "Firebase", "MySQL", "PostgreSQL"
  ],
  Tools: [
    "Git", "GitHub", "Figma", "Vercel", "Netlify", "Heroku", "MS Office", "VBA"
  ]
};

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
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold text-foreground text-center">Tech Stack</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {Object.entries(techStack).map(([category, technologies]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-2"
              >
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
