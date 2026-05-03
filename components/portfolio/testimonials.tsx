"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Ajay consistently delivered complex data pipelines ahead of schedule. His Snowflake expertise and attention to data quality standards made him one of the strongest engineers on our team.",
    name: "Engineering Manager",
    company: "Oncourse Home Solutions",
    initials: "EM",
  },
  {
    quote:
      "His ability to architect scalable ELT solutions while keeping costs under control was exceptional. Ajay reduced our pipeline runtime by 60% within the first quarter.",
    name: "Senior Data Architect",
    company: "CenturyLink",
    initials: "DA",
  },
  {
    quote:
      "Ajay brought deep cloud data engineering expertise to our team. His work on the AWS data lakehouse formed the backbone of our analytics platform.",
    name: "Data Engineering Lead",
    company: "Infosys",
    initials: "DL",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-primary">06</span>
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

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-card p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <span className="text-5xl text-primary font-serif leading-none">&ldquo;</span>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-8">{t.quote}</p>
            </div>
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
