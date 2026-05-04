"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail, Download } from "lucide-react";
import Image from "next/image";

const roles = ["Data Engineer", "Cloud Architect", "ETL Specialist", "Platform Builder"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-32 pb-28 md:pb-16">

        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-primary" />
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Senior Cloud Data Engineer
          </span>
        </motion.div>

        {/* Photo — centered on mobile, hidden on desktop (shown in bottom row) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex md:hidden justify-center mb-10"
        >
          <div className="relative w-36 h-36 border border-border overflow-hidden rounded-full">
            <Image
              src="/avatar.jpg"
              alt="Ajay Kaviti"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <div className="space-y-1 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.85] tracking-tighter"
          >
            AJAY
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.85] tracking-tighter"
          >
            KAVITI<span className="text-primary">.</span>
          </motion.h1>
        </div>

        {/* Animated Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="px-4 py-2 border border-border text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all cursor-default"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom row — Stats + Photo (desktop) + Social links */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-10 md:gap-12"
          >
            <div>
              <div className="text-4xl md:text-6xl font-bold text-primary">5+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">Years Exp</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold">50+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold">3</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">Certifications</div>
            </div>
          </motion.div>

          {/* Photo — desktop only, sits between stats and social */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block relative w-48 h-48 lg:w-56 lg:h-56 border border-border overflow-hidden rounded-full flex-shrink-0"
          >
            <Image
              src="/avatar.jpg"
              alt="Ajay Kaviti"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </motion.div>

          {/* Social Links + Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://www.linkedin.com/in/ajay-kaviti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="group p-3 md:p-4 border border-border hover:bg-primary hover:border-primary transition-all"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://github.com/ajaykaviti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="group p-3 md:p-4 border border-border hover:bg-primary hover:border-primary transition-all"
            >
              <Github className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="mailto:kaviay0408@gmail.com"
              aria-label="Send email"
              className="group p-3 md:p-4 border border-border hover:bg-primary hover:border-primary transition-all"
            >
              <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="/resume.pdf"
              download
              aria-label="Download Resume PDF"
              className="group flex items-center gap-2 px-4 md:px-5 py-3 md:py-4 bg-primary text-primary-foreground hover:opacity-90 transition-all"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm uppercase tracking-wider font-medium">Resume</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — hidden on mobile to avoid overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}