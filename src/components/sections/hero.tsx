"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypedText, ScrollReveal, HoverScale } from "@/components/ui/motion-wrapper";
import { Section, Container } from "@/components/ui/grid";
import { scrollToElement } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rishabh-ml", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/rishabh-ml", icon: Linkedin },
  { name: "Email", href: "mailto:contact.rishabh.shukla@gmail.com", icon: Mail },
];

export function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="text-center space-y-8">
          {/* Main heading with typed effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Hi, I'm{" "}
              <span className="text-primary">
                <TypedText text="Rishabh" delay={1} speed={0.1} />
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              <TypedText 
                text="Full Stack Developer & Problem Solver" 
                delay={2.5} 
                speed={0.05} 
              />
            </div>
          </motion.div>

          {/* Description */}
          <ScrollReveal delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I craft efficient, scalable web applications using modern technologies. 
              Passionate about clean code, user experience, and turning ideas into reality.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HoverScale>
                <Button
                  size="lg"
                  onClick={() => scrollToElement("projects")}
                  className="min-w-[160px]"
                >
                  View My Work
                </Button>
              </HoverScale>
              
              <HoverScale>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToElement("contact")}
                  className="min-w-[160px]"
                >
                  Get In Touch
                </Button>
              </HoverScale>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={0.5}>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 + index * 0.1 }}
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <ScrollReveal delay={0.6}>
            <motion.button
              onClick={() => scrollToElement("about")}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
              <span className="sr-only">Scroll down</span>
            </motion.button>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
