"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: "1",
    title: "Full-Stack Development Certification",
    platform: "30DaysCoding",
    description: "Comprehensive program taught by Google/Amazon developers",
    date: "2024",
    category: "certification",
    url: "#"
  },
  {
    id: "2",
    title: "React.js Complete Guide",
    platform: "Udemy (Maximilian)",
    description: "Advanced React concepts and modern development practices",
    date: "2023",
    category: "certification",
    url: "#"
  },
  {
    id: "3",
    title: "Android Development",
    platform: "DigiCoders",
    description: "Mobile app development with Java and Kotlin",
    date: "2023",
    category: "certification",
    url: "#"
  },
  {
    id: "4",
    title: "Open Source Contributor",
    platform: "Excalidraw",
    description: "Architecture documentation for onboarding contributors",
    date: "2024",
    category: "contribution",
    url: "https://github.com/excalidraw/excalidraw"
  },
  {
    id: "5",
    title: "Government Contract Secured",
    platform: "DatamanUSA",
    description: "25+ technical proposals submitted for South Carolina",
    date: "2024",
    category: "achievement",
    url: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export function Achievements() {
  return (
    <section id="achievements" className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold text-foreground text-center">
            Achievements & Certifications
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-auto hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => achievement.url !== "#" && window.open(achievement.url, "_blank")}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Award className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between">
                          <h3 className="font-medium text-sm leading-tight">
                            {achievement.title}
                          </h3>
                          {achievement.url !== "#" && (
                            <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 ml-2" />
                          )}
                        </div>
                        
                        <p className="text-xs text-primary font-medium">
                          {achievement.platform}
                        </p>
                        
                        <p className="text-xs text-muted-foreground leading-tight">
                          {achievement.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-1">
                          <Badge 
                            variant="outline" 
                            className="text-xs capitalize"
                          >
                            {achievement.category}
                          </Badge>
                          
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
