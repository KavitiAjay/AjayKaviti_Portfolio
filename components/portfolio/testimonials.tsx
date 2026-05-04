"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "I have had the privilege of working closely with Ajay Kaviti at Oncourse Home Solutions, and he has been one of the strongest engineers on my team. He builds and maintains production ELT pipelines using dbt and Prefect, optimizes warehouse performance, and consistently delivers clean, reliable data that the business depends on. He also played a key role in our migration from legacy SQL-based workflows to Snowflake, which significantly improved our data processing speed and scalability. What makes Ajay stand out is not just his technical ability, he communicates clearly with both the engineering team and business stakeholders, understands what the data needs to solve, and delivers without needing constant direction. He is the kind of engineer you can rely on completely, and any team would be lucky to have him.",
    name: "T.L.",
    role: "Principal Cloud Data Engineer",
    company: "Oncourse Home Solutions",
    initials: "TL",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-primary">05</span>
        <div className="w-12 h-[1px] bg-border" />
        <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Testimonials</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-20"
      >
        What people <span className="text-primary">say</span>
      </motion.h2>

      {/* Testimonials */}
      <div className="space-y-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * index }}
            className="border border-border hover:border-primary/40 transition-colors p-8 lg:p-12"
          >
            {/* Quote mark */}
            <span className="text-6xl text-primary font-serif leading-none block mb-6">&ldquo;</span>

            {/* Quote text */}
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-10 max-w-4xl text-justify">
              {t.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-8 border-t border-border">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-primary mt-0.5">{t.role}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{t.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LinkedIn CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10"
      >
        <a
          href="https://www.linkedin.com/in/ajay-kaviti/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-border px-6 py-3 text-sm uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary transition-all"
        >
          View all recommendations on LinkedIn ↗
        </a>
      </motion.div>

    </section>
  );
}
