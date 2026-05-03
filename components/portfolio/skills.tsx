"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Cloud, Code, BarChart3, Settings, Workflow } from "lucide-react";

const skillCategories = [
  {
    icon: Database,
    title: "Data Platforms",
    skills: ["Snowflake", "Databricks", "Redshift", "Delta Lake", "Iceberg"],
    highlight: "SnowPro Certified",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    skills: ["AWS", "Azure", "GCP", "Terraform", "CloudFormation"],
    highlight: "Azure DP-203",
  },
  {
    icon: Workflow,
    title: "Orchestration",
    skills: ["Apache Airflow", "Prefect", "Step Functions", "dbt"],
    highlight: "dbt Certified",
  },
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "SQL", "PySpark", "Java", "Bash"],
    highlight: "5+ Years",
  },
  {
    icon: Settings,
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "CI/CD", "Git", "Jenkins"],
    highlight: "IaC Expert",
  },
  {
    icon: BarChart3,
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Looker", "QuickSight"],
    highlight: "Tableau Certified",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary">04</span>
            <div className="w-12 h-[1px] bg-border" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Skills</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-2xl"
          >
            My technical <span className="text-primary">toolkit</span>
          </motion.h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group bg-background p-8 lg:p-10 hover:bg-secondary/50 transition-colors"
          >
            {/* Icon & Title */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <category.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <span className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1">
                {category.highlight}
              </span>
            </div>

            {/* Skills List */}
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-4 group/skill"
                >
                  <div className="w-1.5 h-1.5 bg-muted-foreground group-hover/skill:bg-primary transition-colors" />
                  <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">Certifications</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "SnowPro Core", org: "Snowflake", year: "2024", href: "https://www.credly.com/org/snowflake/badge/snowpro-core-certification" },
            { name: "Azure DP-203", org: "Microsoft", year: "2023", href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-engineer/" },
            { name: "dbt Certified Developer", org: "dbt Labs", year: "2023", href: "https://www.getdbt.com/dbt-certification/" },
          ].map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="group border border-border p-6 hover:border-primary transition-colors flex flex-col"
            >
              <div className="text-primary text-sm mb-2">{cert.org}</div>
              <div className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.name}</div>
              <div className="text-sm text-muted-foreground">{cert.year}</div>
              <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider group-hover:text-primary transition-colors">Verify ↗</div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
