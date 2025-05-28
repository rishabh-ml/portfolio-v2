"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/lib/portfolio-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.05
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const getSkillColor = (index: number) => {
  const colors = ["cyan", "purple", "blue"];
  return colors[index % colors.length];
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "neon-cyan";
    case "Advanced": return "neon-purple";
    case "Intermediate": return "neon-blue";
    default: return "gray-400";
  }
};

export function TechStack() {
  const categories = [
    { name: "Frontend", items: portfolioConfig.techStack.frontend, color: "cyan" },
    { name: "Backend", items: portfolioConfig.techStack.backend, color: "purple" },
    { name: "Database", items: portfolioConfig.techStack.database, color: "blue" },
    { name: "Tools", items: portfolioConfig.techStack.tools, color: "cyan" },
  ];

  return (
    <section id="tech-stack" className="compact-section relative">
      <div className="compact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Tech <span className="text-neon-cyan glow-neon-cyan">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-1 h-8 bg-neon-${category.color} rounded-full glow-neon-${category.color}`} />
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className={`compact-card hover-glow-${getSkillColor(skillIndex)} group cursor-pointer`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-white transition-colors">
                            {skill.name}
                          </h4>
                          <span className={`text-sm text-${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      
                      {/* Skill level indicator */}
                      <div className="flex space-x-1">
                        {[1, 2, 3].map((dot) => (
                          <div
                            key={dot}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              (skill.level === "Expert" && dot <= 3) ||
                              (skill.level === "Advanced" && dot <= 2) ||
                              (skill.level === "Intermediate" && dot <= 1)
                                ? `bg-${getLevelColor(skill.level)}`
                                : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: `${portfolioConfig.stats.yearsOfExperience}+` },
            { label: "Projects Built", value: `${portfolioConfig.stats.projectsCompleted}+` },
            { label: "GitHub Stars", value: `${portfolioConfig.stats.githubStars}+` },
            { label: "Contributions", value: `${portfolioConfig.stats.contributions}+` },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-neon-cyan/50 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-neon-cyan mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
