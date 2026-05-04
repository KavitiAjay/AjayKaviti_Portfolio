"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const contactLinks = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ajay-kaviti",
      href: "https://www.linkedin.com/in/ajay-kaviti/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/ajaykaviti",
      href: "https://github.com/ajaykaviti",
      icon: Github,
    },
    {
      label: "Email",
      value: "kaviay0408@gmail.com",
      href: "mailto:kaviay0408@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "(216) 566-4055",
      href: "tel:+12165664055",
      icon: Phone,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary">06</span>
          <div className="w-12 h-[1px] bg-border" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Contact</span>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-balance">
            Ready to build something{" "}
            <span className="text-primary">amazing</span> together?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            I&apos;m always open to discussing new opportunities, data engineering challenges, 
            or just having a conversation about the latest in cloud and data technologies.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {/* Contact Links */}
          <div className="bg-background">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel={link.label !== "Email" && link.label !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                className="group flex items-center justify-between p-6 border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      {link.label}
                    </div>
                    <div className="font-medium">{link.value}</div>
                  </div>
                </div>
                <motion.div
                  animate={{
                    x: hoveredLink === link.label ? 5 : 0,
                    rotate: hoveredLink === link.label ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Location & Availability */}
          <div className="bg-background p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-4 mb-8"
              >
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Location</div>
                  <div className="font-medium">Naperville, IL</div>
                  <div className="text-sm text-muted-foreground mt-1">Open to remote opportunities worldwide</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="w-3 h-3 bg-primary animate-pulse" />
                <span className="text-sm uppercase tracking-wider">Available for new opportunities</span>
              </motion.div>
            </div>

            <motion.a
              href="mailto:kaviay0408@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 mt-8 hover:gap-6 transition-all"
            >
              <span className="text-lg font-bold uppercase tracking-wider">Get In Touch</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
