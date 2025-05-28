"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, ExternalLink, Calendar } from "lucide-react";
import { portfolioConfig } from "@/lib/portfolio-config";

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

const achievementVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Achievements() {
  const { achievements } = portfolioConfig;

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "certification":
        return Award;
      case "milestone":
        return Star;
      default:
        return Trophy;
    }
  };

  const getAchievementColor = (index: number) => {
    const colors = ["cyan", "purple", "blue"];
    return colors[index % colors.length];
  };

  return (
    <section id="achievements" className="compact-section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-cyan rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-neon-purple rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-neon-blue rounded-full animate-pulse" />
      </div>

      <div className="compact-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block"
          >
            <Trophy className="w-16 h-16 text-neon-cyan glow-neon-cyan mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">
            Achievements & <span className="text-neon-cyan glow-neon-cyan">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones that mark my journey in technology and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = getAchievementIcon(achievement.type);
            const color = getAchievementColor(index);

            return (
              <motion.div
                key={achievement.id}
                variants={achievementVariants}
                className={`compact-card hover-glow-${color} group relative overflow-hidden`}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{ perspective: "1000px" }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-neon-${color}/10 border border-neon-${color}/30 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 text-neon-${color}`} />
                      </div>
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(achievement.date).getFullYear()}
                      </div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-neon-${color}/10 text-neon-${color} mt-1 capitalize`}>
                        {achievement.type}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors duration-300 mb-2">
                      {achievement.title}
                    </h3>
                    <p className={`text-neon-${color} font-medium`}>
                      {achievement.issuer}
                    </p>
                  </div>

                  {/* Progress bar animation */}
                  <div className="relative">
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-neon-${color} rounded-full`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-neon-${color} rounded-full opacity-0 group-hover:opacity-100`}
                    style={{
                      top: `${20 + i * 20}%`,
                      right: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [-10, -20, -10],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-8 p-6 rounded-2xl bg-gray-900/50 border border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan mb-1">
                {achievements.filter(a => a.type === 'certification').length}
              </div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="w-px h-12 bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-purple mb-1">
                {achievements.filter(a => a.type === 'milestone').length}
              </div>
              <div className="text-gray-400 text-sm">Milestones</div>
            </div>
            <div className="w-px h-12 bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-blue mb-1">
                {new Date().getFullYear() - Math.min(...achievements.map(a => new Date(a.date).getFullYear()))}+
              </div>
              <div className="text-gray-400 text-sm">Years Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
