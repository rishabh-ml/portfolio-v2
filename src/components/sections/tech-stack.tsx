"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = {
  Frontend: {
    technologies: ["React.js", "Next.js", "JavaScript", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "React Native"],
    color: "text-accent-cyan"
  },
  Backend: {
    technologies: ["Node.js", "Express.js", "Python", "PHP", "Java"],
    color: "text-accent-blue"
  },
  Databases: {
    technologies: ["MongoDB", "Firebase", "MySQL", "PostgreSQL"],
    color: "text-accent-purple"
  },
  Tools: {
    technologies: ["Git", "GitHub", "Figma", "Vercel", "Netlify", "Heroku", "MS Office", "VBA"],
    color: "text-accent-cyan"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-6 glass">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-semibold text-foreground text-center"
          >
            Tech Stack
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {Object.entries(techStack).map(([category, { technologies, color }]) => (
              <motion.div
                key={category}
                variants={categoryVariants}
                className="space-y-3"
              >
                <h3 className={`text-sm font-medium uppercase tracking-wide ${color}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs px-3 py-1 hover-glow-subtle cursor-default"
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
