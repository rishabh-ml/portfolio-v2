"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, MessageCircle, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/lib/portfolio-config";
import { scrollToElement } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", href: portfolioConfig.social.github, icon: Github },
  { name: "LinkedIn", href: portfolioConfig.social.linkedin, icon: Linkedin },
  { name: "Email", href: portfolioConfig.social.email, icon: Mail },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90" />
      
      {/* Professional grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 195, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="compact-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Professional heading with clean typography */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-white">{portfolioConfig.personal.name}</span>
            </motion.h1>
            
            <motion.div className="space-y-4">
              <h2 className="text-xl sm:text-2xl text-neon-cyan font-medium">
                {portfolioConfig.personal.title}
              </h2>
              <h3 className="text-lg sm:text-xl text-gray-300">
                {portfolioConfig.personal.subtitle}
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                {portfolioConfig.personal.bio}
              </p>
            </motion.div>
          </motion.div>

          {/* Professional info cards */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
              <MapPin className="w-4 h-4 text-neon-cyan" />
              <span className="text-gray-300">{portfolioConfig.personal.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
              <Briefcase className="w-4 h-4 text-neon-purple" />
              <span className="text-gray-300">Available for Projects</span>
            </div>
          </motion.div>

          {/* Professional CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => window.open(portfolioConfig.social.github, "_blank")}
              className="bg-neon-cyan text-black hover:bg-neon-cyan/80 font-medium px-6 py-3 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            
            <Button
              size="lg"
              onClick={() => window.open(portfolioConfig.personal.resume, "_blank")}
              className="border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-medium px-6 py-3 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
            
            <Button
              size="lg"
              onClick={() => scrollToElement("contact")}
              className="bg-gray-800 text-white hover:bg-gray-700 font-medium px-6 py-3 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Clean Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 mb-16 sm:mb-20"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-600 hover:border-neon-cyan hover:bg-gray-800/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator - moved outside main content container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.button
            onClick={() => scrollToElement("about")}
            className="p-2 rounded-full border border-gray-600 hover:border-neon-cyan transition-all duration-300 group"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-neon-cyan transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
