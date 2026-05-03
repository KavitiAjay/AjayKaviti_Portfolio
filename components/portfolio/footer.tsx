"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter"
        >
          AJAY KAVITI<span className="text-primary">.</span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <span>{currentYear} All Rights Reserved</span>
          <span className="hidden md:block">-</span>
          <span>Senior Cloud Data Engineer</span>
        </div>
      </div>
    </footer>
  );
}
