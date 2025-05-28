"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: "1",
    title: "React JS Certification",
    platform: "Udemy",
    description: "Advanced React concepts and modern development practices",
    date: "Jan 2025",
    category: "certification",
    url: "#",
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10"
  },
  {
    id: "2",
    title: "Next.js Full Stack Development",
    platform: "30DaysCoding",
    description: "Comprehensive full-stack development with Next.js framework",
    date: "Dec 2024",
    category: "certification",
    url: "#",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10"
  },
  {
    id: "3",
    title: "Java Development",
    platform: "30DaysCoding",
    description: "Enterprise Java development and Spring Boot framework",
    date: "Nov 2024",
    category: "certification",
    url: "#",
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10"
  },
  {
    id: "4",
    title: "Android Development",
    platform: "Digicoders Technologies",
    description: "Mobile app development with Java and Kotlin",
    date: "Oct 2024",
    category: "certification",
    url: "#",
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10"
  },
  {
    id: "5",
    title: "InkFlow - College Hackathon Finalist",
    platform: "College Competition",
    description: "Real-time collaborative whiteboard tool - achieved finalist position",
    date: "Sep 2024",
    category: "achievement",
    url: "#",
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10"
  },
  {
    id: "6",
    title: "Open Source Contributor",
    platform: "Excalidraw",
    description: "Authored official architecture documentation for global whiteboard tool",
    date: "Aug 2024",
    category: "contribution",
    url: "https://github.com/excalidraw/excalidraw",
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10"
  }
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'certification': return Award;
    case 'contribution': return ExternalLink;
    case 'achievement': return Calendar;
    default: return Award;
  }
};

export function Achievements() {
  return (
    <section id="achievements" className="py-6 glass">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <h2 className="text-xl font-semibold text-foreground">Achievements & Certifications</h2>
            <p className="text-sm text-muted-foreground">Professional milestones and continuous learning journey</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {achievements.map((achievement) => {
              const IconComponent = getCategoryIcon(achievement.category);
              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="group"
                >
                  <Card
                    className={`h-auto hover-glow-subtle transition-all duration-300 cursor-pointer group-hover:border-white/30 ${
                      achievement.url !== "#" ? "hover:scale-[1.02]" : ""
                    }`}
                    onClick={() => achievement.url !== "#" && window.open(achievement.url, "_blank")}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-xl ${achievement.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                          </div>
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium text-sm leading-tight group-hover:text-white transition-colors">
                              {achievement.title}
                            </h3>
                            {achievement.url !== "#" && (
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                            )}
                          </div>

                          <p className={`text-sm font-medium ${achievement.color}`}>
                            {achievement.platform}
                          </p>

                          <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                            {achievement.description}
                          </p>

                          <div className="flex items-center justify-between pt-1">
                            <Badge
                              variant="outline"
                              className={`text-xs px-3 py-1 capitalize ${achievement.color} border-current/20 hover:bg-current/10 transition-colors`}
                            >
                              {achievement.category}
                            </Badge>

                            <span className="text-xs text-muted-foreground group-hover:text-white/80 transition-colors font-mono">
                              {achievement.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
