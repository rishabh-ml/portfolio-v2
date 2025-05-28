"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, GitPullRequest, Star, Users } from "lucide-react";
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

const contributionVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const timelineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

export function OSSContributions() {
  const { ossContributions } = portfolioConfig;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Documentation":
        return GitBranch;
      case "Bug Fix":
        return GitPullRequest;
      default:
        return Star;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Documentation":
        return "cyan";
      case "Bug Fix":
        return "purple";
      default:
        return "blue";
    }
  };

  return (
    <section id="oss-contributions" className="compact-section relative">
      <div className="compact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Open Source <span className="text-neon-cyan glow-neon-cyan">Contributions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contributing to the developer community through open source projects
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-blue transform origin-top"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {ossContributions.map((contribution, index) => {
              const Icon = getTypeIcon(contribution.type);
              const color = getTypeColor(contribution.type);

              return (
                <motion.div
                  key={contribution.id}
                  variants={contributionVariants}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Node */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full bg-neon-${color}/20 border-2 border-neon-${color} flex items-center justify-center z-10 relative`}>
                      <Icon className={`w-6 h-6 text-neon-${color}`} />
                    </div>
                    <div className={`absolute inset-0 rounded-full bg-neon-${color}/10 animate-pulse`} />
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 compact-card hover-lift group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-neon-cyan transition-colors duration-300">
                            {contribution.project}
                          </h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-neon-${color}/10 text-neon-${color} mt-2`}>
                            {contribution.type}
                          </span>
                        </div>
                        <a
                          href={contribution.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg bg-gray-800/50 hover:bg-neon-${color}/10 hover:text-neon-${color} transition-colors duration-300`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {contribution.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          Language: <span className="text-white">{contribution.language}</span>
                        </span>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>Open Source</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 compact-card hover-glow-cyan"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  {portfolioConfig.stats.contributions}+
                </div>
                <div className="text-gray-400 text-sm">Contributions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-purple mb-2">
                  {portfolioConfig.stats.githubStars}+
                </div>
                <div className="text-gray-400 text-sm">Stars Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">
                  {ossContributions.length}
                </div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  {portfolioConfig.stats.yearsOfExperience}+
                </div>
                <div className="text-gray-400 text-sm">Years Active</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
