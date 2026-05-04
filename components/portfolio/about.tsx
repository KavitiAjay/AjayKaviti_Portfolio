"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary">01</span>
            <div className="w-12 h-[1px] bg-border" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">About</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Building data platforms that{" "}
            <span className="text-primary">power decisions</span>
          </motion.h2>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I&apos;m a Senior Cloud Data Engineer with 5+ years of experience designing 
            and operating cloud-native data platforms. My expertise spans across 
            Snowflake, AWS, and Azure, where I build scalable data solutions that 
            transform raw data into actionable insights.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            From architecting petabyte-scale data lakes to optimizing ETL pipelines 
            that process millions of records daily, I thrive on solving complex data 
            challenges. My work has directly impacted business outcomes, reducing costs 
            by 40% and improving data processing efficiency by 60%.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 gap-6 pt-8 border-t border-border"
          >
            <div>
              <div className="text-3xl font-bold mb-2">M.S.</div>
              <div className="text-sm text-muted-foreground">Computer Engineering</div>
              <div className="text-sm text-muted-foreground">University of Cincinnati</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-sm text-muted-foreground">GPA</div>
              <div className="text-sm text-muted-foreground">Graduate Studies</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-32 overflow-hidden border-y border-border py-8"
      >
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-8">
              {["SNOWFLAKE", "AWS", "AZURE", "DBT", "AIRFLOW", "SPARK", "KAFKA", "PYTHON", "SQL", "TERRAFORM"].map((tech) => (
                <span key={tech} className="text-4xl md:text-6xl font-bold text-muted-foreground/20 hover:text-primary transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
