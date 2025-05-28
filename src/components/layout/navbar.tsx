"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "OSS", href: "#oss-contributions" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rishabh-ml", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/rishabh-ml", icon: Linkedin },
  { name: "Email", href: "mailto:contact.rishabh.shukla@gmail.com", icon: Mail },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll handling can be added here if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const elementId = href.replace("#", "");
    scrollToElement(elementId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Dock-style Navbar */}
      <motion.header
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="glass-strong rounded-full px-4 py-2 shadow-lg border border-white/10 hover:border-accent-cyan/30 transition-all duration-300">
          <div className="flex items-center space-x-1">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToElement("hero")}
              className="text-lg font-bold text-foreground hover:text-accent-cyan px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-accent-cyan/10 hover:shadow-neon-cyan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RS
            </motion.button>

            {/* Divider */}
            <div className="w-px h-6 bg-white/20 mx-1 hidden md:block" />

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-accent-blue px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 hover:bg-accent-blue/10"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-white/20 mx-1 hidden lg:block" />

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Social Links - Show only 2 on medium screens */}
              {socialLinks.slice(0, 2).map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground p-2 rounded-full transition-all duration-300 ${
                    index === 0 ? 'hover:text-accent-purple hover:bg-accent-purple/10' : 'hover:text-accent-cyan hover:bg-accent-cyan/10'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}

              {/* Resume Download - Hidden on smaller screens */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-blue hover:bg-accent-blue/10 p-2 rounded-full transition-all duration-300 hidden lg:block"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="h-4 w-4" />
                <span className="sr-only">Download Resume</span>
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted-foreground hover:text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Menu className="h-4 w-4" />
                    )}
                  </motion.div>
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-72 max-w-[85vw]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-strong rounded-xl p-4 shadow-xl">
                {/* Navigation Items */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent-blue hover:bg-accent-blue/10 rounded-lg transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-white/10" />

                {/* Mobile Actions */}
                <div className="flex items-center justify-center space-x-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        index === 0 ? 'text-muted-foreground hover:text-accent-purple hover:bg-accent-purple/10' :
                        index === 1 ? 'text-muted-foreground hover:text-accent-cyan hover:bg-accent-cyan/10' :
                        'text-muted-foreground hover:text-accent-blue hover:bg-accent-blue/10'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <link.icon className="h-4 w-4" />
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
                  ))}

                  {/* Mobile Resume Download */}
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent-blue hover:bg-accent-blue/10 p-2 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download Resume</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
