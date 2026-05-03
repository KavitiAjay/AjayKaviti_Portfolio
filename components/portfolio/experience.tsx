"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Oncourse Home Solutions",
    role: "Senior Cloud Data Engineer",
    period: "Dec 2024 - Present",
    location: "Naperville, IL",
    description: "Leading data platform initiatives with Snowflake and dbt, building scalable data warehousing solutions.",
    highlights: [
      "Architected centralized Airbyte + Snowflake ingestion hub",
      "Reduced pipeline runtime by 60% with incremental ELT",
      "Led zero-data-loss MDM migration to Snowflake",
    ],
    tech: ["Snowflake", "Airbyte", "dbt", "Prefect", "Terraform"],
  },
  {
    company: "CenturyLink",
    role: "Data Engineer",
    period: "Aug 2024 - Nov 2024",
    location: "Remote",
    description: "Built and maintained enterprise data infrastructure processing billions of records daily.",
    highlights: [
      "Designed Fivetran-to-Snowflake ingestion pipelines",
      "Reduced processing time by 35% with Streams & Tasks",
      "Achieved 99.9%+ SLA adherence with Airflow",
    ],
    tech: ["Snowflake", "Fivetran", "dbt", "Airflow", "Looker"],
  },
  {
    company: "Infosys",
    role: "AWS & Snowflake Data Engineer",
    period: "Nov 2021 - Dec 2022",
    location: "Hyderabad, India",
    description: "Developed data solutions for Fortune 500 clients across various industries.",
    highlights: [
      "Architected 10TB retail data lakehouse on AWS",
      "Built 50+ dbt model DAGs with 99.8%+ uptime",
      "Improved data freshness from 24h to under 2h",
    ],
    tech: ["Snowflake", "AWS Glue", "dbt", "Airflow", "PySpark"],
  },
  {
    company: "Dhatsol",
    role: "Software Associate",
    period: "Aug 2019 - Oct 2021",
    location: "Hyderabad, India",
    description: "Started my data engineering journey building foundational data infrastructure.",
    highlights: [
      "Engineered Kinesis pipelines for 500K+ ticks/min",
      "Designed Redshift schemas with optimal keys",
      "Implemented CI/CD with AWS CodeBuild",
    ],
    tech: ["AWS Kinesis", "Redshift", "DynamoDB", "Lambda", "Python"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary">02</span>
            <div className="w-12 h-[1px] bg-border" />
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-2xl"
          >
            Where I&apos;ve made <span className="text-primary">impact</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-md"
        >
          From startups to enterprise organizations, I&apos;ve built data 
          infrastructure that scales and delivers value.
        </motion.p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative border-t border-border py-8 cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Company & Role */}
              <div className="lg:w-1/3">
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <p className="text-muted-foreground mt-1">{exp.role}</p>
              </div>

              {/* Period & Location */}
              <div className="lg:w-1/4 flex flex-col gap-1">
                <span className="text-sm uppercase tracking-wider">{exp.period}</span>
                <span className="text-sm text-muted-foreground">{exp.location}</span>
              </div>

              {/* Tech Stack */}
              <div className="lg:w-1/3 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs uppercase tracking-wider bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="lg:w-16 flex justify-end">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{
                height: hoveredIndex === index ? "auto" : 0,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 grid md:grid-cols-2 gap-8">
                <p className="text-muted-foreground">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-1">-</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
