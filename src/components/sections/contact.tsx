"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact.rishabh.shukla@gmail.com",
      href: "mailto:contact.rishabh.shukla@gmail.com",
      color: "text-accent-cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8738060587",
      href: "tel:+918738060587",
      color: "text-accent-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, UP, India",
      href: "#",
      color: "text-accent-purple"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section id="contact" className="py-6 glass">
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
            <h2 className="text-xl font-semibold text-foreground">Let&apos;s Work Together</h2>
            <p className="text-sm text-muted-foreground">
              Available for freelance projects and collaborations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="font-medium text-lg text-foreground">Get In Touch</h3>

              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{
                      x: 4,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="group"
                  >
                    <a
                      href={info.href}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                        info.href !== "#"
                          ? "hover:bg-white/10 hover:text-white cursor-pointer hover-glow-subtle"
                          : "cursor-default"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors ${info.color}`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">{info.label}</p>
                        <p className="text-sm font-medium text-foreground group-hover:text-white transition-colors">{info.value}</p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="font-medium text-lg text-foreground">Send a Message</h3>

              <Card className="hover-glow-subtle transition-all duration-300 border-white/10">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm border border-white/20 rounded-xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all placeholder:text-muted-foreground hover:bg-white/10"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm border border-white/20 rounded-xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all placeholder:text-muted-foreground hover:bg-white/10"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 text-sm border border-white/20 rounded-xl bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all placeholder:text-muted-foreground hover:bg-white/10 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-sm h-12 bg-accent-cyan hover:bg-accent-cyan/90 text-black font-medium rounded-xl transition-all hover:scale-[1.02]"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
