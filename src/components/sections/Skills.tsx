"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categories = [
  { key: "frontend" as const, label: "Frontend",      index: "01" },
  { key: "backend"  as const, label: "Backend",       index: "02" },
  { key: "tools"    as const, label: "Tools & DevOps", index: "03" },
];

function SkillRow({ name, level, i, inView }: { name: string; level: number; i: number; inView: boolean }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[var(--border)] group">
      <span className="font-mono-custom text-xs text-[var(--text-dim)] w-5">{String(i + 1).padStart(2, "0")}</span>
      <span className="font-sans text-sm text-[var(--text-muted)] flex-1 group-hover:text-[var(--text)] transition-colors duration-200">{name}</span>
      <span className="font-mono-custom text-xs text-[var(--text-dim)] w-8 text-right group-hover:text-[var(--accent-cold)] transition-colors duration-200">{level}%</span>
      <div className="w-24 skill-track">
        <motion.div
          className="skill-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.08 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="skills" className="py-32 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number block mb-3">02 — Skills</span>
            <h2
              className="font-display font-bold leading-tight text-[var(--text)]"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              What I<br />
              <span className="italic font-light gradient-text">work with</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono-custom text-xs text-[var(--text-dim)] max-w-xs leading-relaxed uppercase tracking-widest"
          >
            Proficiency measured through real production projects and daily usage.
          </motion.p>
        </div>

        {/* Three columns */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: ci * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-strong)]">
                <span className="font-mono-custom text-xs text-[var(--accent)]">{cat.index}</span>
                <h3 className="font-display font-semibold text-xl text-[var(--text)]">{cat.label}</h3>
              </div>
              {skills[cat.key].map((skill, i) => (
                <SkillRow key={skill.name} name={skill.name} level={skill.level} i={i} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
