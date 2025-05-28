"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Code, Coffee } from "lucide-react";
import Image from "next/image";
import { portfolioConfig } from "@/lib/portfolio-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const quickInfo = [
  { icon: MapPin, label: "Location", value: portfolioConfig.personal.location, color: "cyan" },
  { icon: Briefcase, label: "Experience", value: `${portfolioConfig.stats.yearsOfExperience}+ Years`, color: "purple" },
  { icon: Code, label: "Projects", value: `${portfolioConfig.stats.projectsCompleted}+ Built`, color: "blue" },
];

export function About() {
  return (
    <section id="about" className="compact-section relative">
      <div className="compact-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Avatar Side */}
          <motion.div 
            variants={avatarVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Subtle background ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 blur-md" />
              
              {/* Main avatar container - more professional */}
              <div className="relative w-64 h-64 rounded-full p-1 bg-gradient-to-r from-accent-cyan/30 to-accent-purple/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border border-white/10">
                  <Image
                    src={portfolioConfig.personal.avatar}
                    alt={portfolioConfig.personal.name}
                    width={260}
                    height={260}
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
              
              {/* Static professional icons */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center backdrop-blur-sm">
                <Code className="w-4 h-4 text-accent-cyan" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center backdrop-blur-sm">
                <Coffee className="w-4 h-4 text-accent-purple" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={textVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="text-accent-cyan">Me</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate full-stack developer with over {portfolioConfig.stats.yearsOfExperience} years of experience 
                  building scalable web applications. Currently working as an IT Proposal Writer at DatamanUSA, 
                  I specialize in the MERN stack and modern development practices.
                </p>
                <p>
                  My journey in tech started with a curiosity for how things work, and it evolved into a 
                  deep passion for creating efficient, user-friendly solutions. I believe in writing clean, 
                  maintainable code and staying updated with the latest technologies.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me contributing to open-source projects, writing technical 
                  documentation, or exploring new frameworks and tools that can improve development workflows.
                </p>
              </div>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className={`compact-card hover-glow-${info.color} group cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-neon-${info.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-5 h-5 text-neon-${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="font-semibold text-white">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills highlight */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-neon-purple">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}