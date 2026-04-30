"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="experience" className="py-32 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-number block mb-3">04 — Experience</span>
            <h2
              className="font-display font-bold leading-tight text-[var(--text)]"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Where I&apos;ve<br />
              <span className="italic font-light gradient-text">been working</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex items-center gap-3"
          >
            <div
              className="w-2 h-2 rounded-full bg-[var(--accent-cold)]"
              style={{ animation: "blink 1.2s step-start infinite" }}
            />
            <span className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest">
              Open to opportunities
            </span>
          </motion.div>
        </div>

        {/* Experience list */}
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group"
          >
            <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 py-10 border-b border-[var(--border)] hover:bg-[var(--surface-2)] transition-colors duration-300 cursor-default px-0 hover:px-4 rounded-sm">
              {/* Left */}
              <div>
                <span className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest">
                  {exp.period}
                </span>
                <div className="mt-3">
                  <span
                    className="px-2 py-0.5 font-mono-custom text-xs uppercase tracking-widest rounded-sm"
                    style={{
                      border: `1px solid ${exp.type === "Full-time" ? "rgba(108,99,255,0.5)" : "rgba(108,99,255,0.15)"}`,
                      color:  exp.type === "Full-time" ? "var(--accent)" : "var(--text-dim)",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div>
                <h3 className="font-display font-semibold text-2xl lg:text-3xl text-[var(--text)] mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {exp.role}
                </h3>
                <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-5">
                  {exp.company} — {exp.location}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="text-[var(--accent-cold)] mt-1.5 flex-shrink-0" style={{ fontSize: "0.4rem" }}>■</span>
                      <span className="text-[var(--text-muted)] text-sm leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
