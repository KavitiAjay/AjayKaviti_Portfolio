"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Snowflake + dbt ELT Platform",
    description:
      "End-to-end ELT pipeline ingesting 10TB+ of retail data daily via Airbyte into Snowflake, transformed with 50+ dbt models. Reduced data freshness from 24h to under 2h and achieved 99.8%+ uptime.",
    outcomes: ["60% faster pipeline runtime", "99.8% uptime SLA", "10TB+ daily ingestion"],
    tech: ["Snowflake", "dbt", "Airbyte", "Prefect", "Terraform"],
    github: "https://github.com/ajaykaviti",
    live: null,
  },
  {
    number: "02",
    title: "AWS Retail Data Lakehouse",
    description:
      "Architected a petabyte-scale data lakehouse on AWS using Glue, S3, and PySpark for a Fortune 500 retailer. Implemented Delta Lake for ACID transactions and time-travel queries.",
    outcomes: ["40% cost reduction", "Petabyte-scale storage", "Sub-2h data freshness"],
    tech: ["AWS Glue", "S3", "PySpark", "Delta Lake", "Airflow"],
    github: "https://github.com/ajaykaviti",
    live: null,
  },
  {
    number: "03",
    title: "Real-time Streaming Pipeline",
    description:
      "Engineered a Kinesis-based streaming pipeline processing 500K+ market ticks per minute into DynamoDB and Redshift. Implemented CI/CD with AWS CodeBuild for zero-downtime deployments.",
    outcomes: ["500K+ ticks/min", "Zero-downtime deploys", "99.9% SLA adherence"],
    tech: ["AWS Kinesis", "DynamoDB", "Redshift", "Lambda", "CodeBuild"],
    github: "https://github.com/ajaykaviti",
    live: null,
  },
  {
    number: "04",
    title: "MDM Migration to Snowflake",
    description:
      "Led a zero-data-loss Master Data Management migration from a legacy on-prem system to Snowflake. Designed incremental ELT patterns with Streams & Tasks, cutting processing time by 35%.",
    outcomes: ["Zero data loss", "35% faster processing", "Full audit trail"],
    tech: ["Snowflake", "Fivetran", "dbt", "Airflow", "Looker"],
    github: "https://github.com/ajaykaviti",
    live: null,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary">03</span>
            <div className="w-12 h-[1px] bg-border" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-2xl"
          >
            Things I&apos;ve <span className="text-primary">built</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-md"
        >
          A selection of data engineering projects — from real-time streaming to
          petabyte-scale lakehouses.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-px bg-border">
        {projects.map((project, index) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group bg-background p-8 lg:p-10 hover:bg-secondary/30 transition-colors"
          >
            {/* Number & Links */}
            <div className="flex items-start justify-between mb-6">
              <span className="text-sm uppercase tracking-[0.3em] text-primary">{project.number}</span>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/btn"
                >
                  <Github className="w-4 h-4 group-hover/btn:text-primary-foreground transition-colors" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/btn"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:text-primary-foreground transition-colors" />
                  </a>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Outcomes */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.outcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="px-3 py-1 text-xs uppercase tracking-wider text-primary bg-primary/10 border border-primary/20"
                >
                  {outcome}
                </span>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs uppercase tracking-wider bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="https://github.com/ajaykaviti"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 border border-border px-8 py-4 hover:border-primary hover:text-primary transition-all"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wider">View all on GitHub</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
