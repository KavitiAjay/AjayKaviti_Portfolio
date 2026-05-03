"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Github, Mail, Download } from "lucide-react";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <motion.a href="#" className="text-xl font-bold tracking-tight" whileHover={{ scale: 1.05 }}>
            AK<span className="text-primary">.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              aria-label="Download Resume PDF"
              className="flex items-center gap-2 text-sm uppercase tracking-widest border border-border px-4 py-2 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm uppercase tracking-widest border border-foreground px-6 py-3 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
            >
              Let&apos;s Talk
            </motion.a>
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden p-2" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">AK<span className="text-primary">.</span></span>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold hover:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/resume.pdf"
                  download
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 text-lg border border-border px-6 py-3 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </div>
              <div className="flex justify-center gap-6 py-8">
                <a href="https://www.linkedin.com/in/ajay-kaviti/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-3 border border-border hover:border-primary hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/ajaykaviti" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-3 border border-border hover:border-primary hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:kaviay0408@gmail.com" aria-label="Send email" className="p-3 border border-border hover:border-primary hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
