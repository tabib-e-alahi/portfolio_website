"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { aboutMe } from "@/lib/data";

const fadeUp: Variants = {
  hidden:  { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="about" className="py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number block mb-3">01 — About</span>
            <h2
              className="font-display font-bold leading-tight text-[var(--text)]"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              The story<br />
              <span className="italic font-light gradient-text">behind the code</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:text-right"
          >
            <div className="font-mono-custom text-xs text-[var(--text-dim)] tracking-widest uppercase mb-2">Based in</div>
            <div className="font-display text-2xl text-[var(--text)]">Dhaka, BD</div>
          </motion.div>
        </div>

        {/* Two column layout */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-[1fr_2px_1fr] gap-0 lg:gap-16"
        >
          {/* Col 1 */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <p className="font-display text-2xl lg:text-3xl font-light italic leading-relaxed text-[var(--text-muted)]">
              &ldquo;{aboutMe.personality}&rdquo;
            </p>
            <div className="rule" />
            <p className="text-[var(--text-muted)] leading-relaxed">{aboutMe.intro}</p>
            <p className="text-[var(--text-muted)] leading-relaxed">{aboutMe.journey}</p>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block" style={{ width: "1px", background: "var(--border)", alignSelf: "stretch" }} />

          {/* Col 2 */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8 mt-10 lg:mt-0">
            <p className="text-[var(--text-muted)] leading-relaxed">{aboutMe.workStyle}</p>
            <p className="text-[var(--text-muted)] leading-relaxed">{aboutMe.hobbies}</p>

            {/* Stats */}
            {/* // here increase the col numbers if value increases */}
            <div className="grid grid-cols-1 gap-0 border border-[var(--border)] mt-4 rounded-sm overflow-hidden">
              {[
                // { val: "2+",  label: "Years Exp." },
                { val: "6+", label: "Projects"   },
                // { val: "5+",  label: "Clients"    },
              ].map(({ val, label }, i) => (
                <motion.div
                  key={label}
                  className={`p-6 text-center ${i < 2 ? "border-r border-[var(--border)]" : ""}`}
                  whileHover={{ background: "rgba(108,99,255,0.07)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-display font-bold text-4xl leading-none text-[var(--accent)] mb-2">{val}</div>
                  <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Personality tags */}
            <div className="flex flex-wrap gap-2">
              {["Curious", "Collaborative", "Detail-oriented", "Coffee-fueled", "Always learning"].map((tag) => (
                <span key={tag} className="tech-tag py-1.5">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
