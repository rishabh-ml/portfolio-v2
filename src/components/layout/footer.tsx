"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/motion-wrapper";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rishabh-ml", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/rishabh-ml", icon: Linkedin },
  { name: "Email", href: "mailto:contact.rishabh.shukla@gmail.com", icon: Mail },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Rishabh Shukla</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full Stack Developer passionate about creating efficient, scalable solutions. 
                Building the future with modern web technologies and clean code.
              </p>
              
              {/* GitHub Stats */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Github className="w-3 h-3 mr-1" />
                  500+ Commits
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  🔥 30 Day Streak
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  ⭐ 50+ Stars
                </Badge>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const elementId = link.href.replace("#", "");
                        document.getElementById(elementId)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Connect & Resume */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect
              </h4>
              
              {/* Social Links */}
              <div className="flex flex-col space-y-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground text-sm transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>

              {/* Resume Download */}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    // Replace with actual resume URL
                    window.open("/resume.pdf", "_blank");
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Section */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Rishabh Shukla. Built with Next.js & Notion CMS.
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Made with ❤️ in India</span>
                <span>•</span>
                <motion.a
                  href="https://github.com/rishabh-ml/rishabh-portfolio-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-3 h-3" />
                  <span>View Source</span>
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
