"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="projects" className="py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number block mb-3">05 — Projects</span>
            <h2 className="font-display font-bold leading-tight text-[var(--text)]"
                style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
              Selected<br />
              <span className="italic font-light gradient-text">work</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono-custom text-xs text-[var(--text-dim)] max-w-xs leading-relaxed uppercase tracking-widest"
          >
            A curated selection of projects built with craft and intentionality.
          </motion.p>
        </div>

        {/* Featured project — full width */}
        {projects[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="mb-12"
          >
            <Link
              href={`/projects/${projects[0].slug}`}
              className="group block border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 overflow-hidden rounded-sm glow-border"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden bg-[var(--surface)]" style={{ aspectRatio: "4/3", minHeight: "280px" }}>
                  <Image
                    src={projects[0].image}
                    alt={projects[0].name}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Accent overlay */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-20 group-hover:opacity-5 transition-opacity duration-500" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between bg-[var(--surface-2)]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono-custom text-xs text-[var(--accent)] uppercase tracking-widest border border-[var(--accent)] px-2 py-0.5 rounded-sm">
                        Featured
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      />
                    </div>
                    <h3 className="font-display font-bold text-3xl lg:text-4xl text-[var(--text)] mb-4 leading-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {projects[0].name}
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-8">{projects[0].shortDesc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].techStack.slice(0, 6).map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Other projects — 2 col */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="project-card"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 overflow-hidden rounded-sm"
              >
                <div className="relative overflow-hidden bg-[var(--surface)]" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-15 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
                <div className="p-6 bg-[var(--surface)]">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-semibold text-2xl text-[var(--text)] leading-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
