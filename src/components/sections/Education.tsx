"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="education" className="py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="section-number block mb-3">03 — Education</span>
          <h2
            className="font-display font-bold leading-tight text-[var(--text)]"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Academic<br />
            <span className="italic font-light gradient-text">background</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="grid lg:grid-cols-[180px_1fr_auto] gap-6 lg:gap-12 py-10 border-b border-[var(--border)] group cursor-default hover:bg-[var(--surface)] transition-all duration-300 px-0 hover:px-4 rounded-sm"
            >
              {/* Period */}
              <div className="flex flex-col justify-start">
                <span className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest">{edu.period}</span>
              </div>

              {/* Main info */}
              <div>
                <h3 className="font-display font-semibold text-2xl text-[var(--text)] mb-1 leading-snug group-hover:text-[var(--accent)] transition-colors duration-300">
                  {edu.degree}
                </h3>
                <div className="font-mono-custom text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3">
                  {edu.institution} — {edu.location}
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-lg">{edu.details}</p>
              </div>

              {/* GPA */}
              <div className="flex flex-col items-start lg:items-end justify-start">
                <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-1">GPA</div>
                <div className="font-display font-bold text-3xl text-[var(--accent-cold)]">{edu.gpa}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
