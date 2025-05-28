"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHubStats } from "@/lib/useGitHubStats";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rishabh-ml",
    icon: Github,
    color: "hover:text-accent-cyan"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rishabh-ml",
    icon: Linkedin,
    color: "hover:text-accent-blue"
  },
  {
    name: "Email",
    href: "mailto:contact.rishabh.shukla@gmail.com",
    icon: Mail,
    color: "hover:text-accent-purple"
  },
];

// GitHub stats (these would typically come from GitHub API)
// Commenting out static stats since we now use real GitHub API data
/*
const githubStats = {
  totalCommits: "500+",
  currentStreak: "45 days",
  totalRepos: "25+",
  contributions: "1.2k+"
};
*/

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

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export function Footer() {
  // Use real GitHub stats from API
  const githubStats = useGitHubStats('rishabh-ml');

  return (
    <footer className="py-6 pb-20 md:pb-16 glass border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* GitHub Stats Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-sm font-medium text-foreground">GitHub Activity</h3>
              {githubStats.isLoading && (
                <div className="w-3 h-3 border border-accent-cyan/30 border-t-accent-cyan rounded-full animate-spin" />
              )}
            </div>
            {githubStats.lastUpdated && (
              <p className="text-xs text-muted-foreground font-mono">
                Last updated: {githubStats.lastUpdated.toLocaleTimeString()}
              </p>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                variants={itemVariants}
                className="text-center space-y-1"
              >
                <div className="text-lg font-bold text-accent-cyan">{githubStats.totalCommits}</div>
                <div className="text-xs text-muted-foreground font-mono">Total Commits</div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center space-y-1"
              >
                <div className="text-lg font-bold text-accent-blue">{githubStats.currentStreak}</div>
                <div className="text-xs text-muted-foreground font-mono">Current Streak</div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center space-y-1"
              >
                <div className="text-lg font-bold text-accent-purple">{githubStats.totalRepos}</div>
                <div className="text-xs text-muted-foreground font-mono">Repositories</div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-center space-y-1"
              >
                <div className="text-lg font-bold text-accent-cyan">{githubStats.contributions}</div>
                <div className="text-xs text-muted-foreground font-mono">Contributions</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          {/* Main Footer Content */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* Left: Name and tagline */}
            <div className="text-center md:text-left">
              <h4 className="text-sm font-medium text-foreground">Rishabh Shukla</h4>
              <p className="text-xs text-muted-foreground font-mono">
                Building the future, one commit at a time
              </p>
            </div>

            {/* Center: Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${link.color} transition-colors p-2 rounded-lg hover:bg-current/10`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Right: Resume Download */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="text-xs h-8 px-3 hover:bg-accent-cyan/10 hover:text-accent-cyan hover:border-accent-cyan/30"
            >
              <Download className="w-3 h-3 mr-1" />
              Resume
            </Button>
          </motion.div>

          {/* Bottom: Copyright and Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-2 pt-4 border-t border-white/5"
          >
            <p className="text-xs text-muted-foreground font-mono">
              © 2025 Rishabh Shukla. Built with Next.js & ❤️
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <motion.a
                href="https://github.com/rishabh-ml/portfolio-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-cyan transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-3 h-3" />
                Source Code
              </motion.a>
              <span>•</span>
              <span className="font-mono">v2.0.0</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
