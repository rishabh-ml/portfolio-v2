"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-8 bg-card/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-6 items-start"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Rishabh Shukla"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 space-y-3"
          >
            <h2 className="text-xl font-semibold text-foreground">About Me</h2>
            
            <div className="space-y-2 text-sm text-muted-foreground leading-tight">
              <p>
                Full Stack Developer with expertise in MERN stack and modern web technologies. 
                Currently working as IT Proposal Writer at DatamanUSA, where I've secured government 
                contracts for South Carolina by submitting 25+ technical proposals.
              </p>
              <p>
                Passionate about building scalable applications and contributing to open source. 
                Active contributor to Excalidraw and maintainer of several React/Next.js projects.
              </p>
              <p>
                When not coding, I'm exploring new technologies, writing technical content, 
                or working on freelance projects that solve real-world problems.
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Lucknow, UP, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                <span>IT Proposal Writer @ DatamanUSA</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Available for freelance</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
