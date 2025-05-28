"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Code, Star, GitBranch, Trophy } from "lucide-react";
import { portfolioConfig } from "@/lib/portfolio-config";

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" }
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.3 }
  }
};

const quickInfo = [
  { icon: MapPin, label: "Location", value: portfolioConfig.personal.location, color: "cyan" },
  { icon: Briefcase, label: "Experience", value: `${portfolioConfig.stats.yearsOfExperience}+ Years`, color: "purple" },
  { icon: Code, label: "Projects", value: `${portfolioConfig.stats.projectsCompleted}+ Built`, color: "blue" },
];

const highlights = [
  { icon: Star, value: portfolioConfig.stats.githubStars, label: "GitHub Stars", color: "cyan" },
  { icon: GitBranch, value: portfolioConfig.stats.contributions, label: "Contributions", color: "purple" },
  { icon: Trophy, value: portfolioConfig.stats.achievements, label: "Achievements", color: "blue" },
];

export function About() {
  return (
    <section id="about" className="compact-section relative">
      <div className="compact-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-10 items-start"
        >
          {/* Left: Avatar and Quick Info */}
          <div className="lg:w-1/3 space-y-6">
            {/* Avatar with Glow Ring */}
            <motion.div
              variants={avatarVariants}
              className="relative mx-auto lg:mx-0 w-48 h-48"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue p-1 animate-pulse-neon">
                <div className="w-full h-full rounded-full bg-black" />
              </div>
              
              {/* Avatar Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={portfolioConfig.personal.avatar}
                  alt={portfolioConfig.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent-cyan rounded-full"
                  style={{
                    top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                    left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Quick Info Cards */}
            <div className="space-y-3">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`compact-card group cursor-pointer border-${info.color}/20 hover:border-accent-${info.color}/40 hover:bg-accent-${info.color}/5`}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      variants={iconVariants}
                      className={`p-2 rounded-lg bg-accent-${info.color}/10 text-accent-${info.color} group-hover:bg-accent-${info.color}/20`}
                    >
                      <info.icon className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className={`font-medium text-accent-${info.color} group-hover:text-white transition-colors`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Bio and Highlights */}
          <div className="lg:w-2/3 space-y-8">
            {/* Section Header */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl font-bold text-white">
                About Me
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
            </motion.div>

            {/* Bio */}
            <div className="space-y-4">
              <motion.p
                variants={paragraphVariants}
                className="text-muted-foreground leading-relaxed"
              >
                {portfolioConfig.personal.bio}
              </motion.p>
              
              <motion.p
                variants={paragraphVariants}
                className="text-muted-foreground leading-relaxed"
              >
                I specialize in building modern web applications using React, Next.js, and TypeScript, 
                with a focus on performance, user experience, and maintainable code architecture.
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                className="text-muted-foreground leading-relaxed"
              >
                When I'm not coding, you'll find me contributing to open-source projects, writing technical 
                articles, or exploring the latest developments in web technologies and AI.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Achievements</h3>
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    variants={cardVariants}
                    whileHover="hover"
                    className={`compact-card text-center group cursor-pointer border-${highlight.color}/20 hover:border-accent-${highlight.color}/40 hover:bg-accent-${highlight.color}/5`}
                  >
                    <motion.div
                      variants={iconVariants}
                      className={`mx-auto mb-2 p-2 w-fit rounded-lg bg-accent-${highlight.color}/10 text-accent-${highlight.color} group-hover:bg-accent-${highlight.color}/20`}
                    >
                      <highlight.icon className="w-5 h-5" />
                    </motion.div>
                    <div className={`text-lg font-bold text-accent-${highlight.color} group-hover:text-white transition-colors`}>
                      {highlight.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {highlight.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioConfig.techStack.frontend.slice(0, 5).map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 text-sm font-mono bg-white/5 border border-white/10 rounded-full hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all cursor-default"
                  >
                    {tech.icon} {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
