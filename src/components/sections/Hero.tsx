"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Code2, Link2, Globe } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import TechMarquee from "@/components/TechMarquee";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { icon: Code2, href: personalInfo.github,   label: "GitHub"   },
  { icon: Link2, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Globe, href: personalInfo.facebook, label: "Facebook" },
];

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp: Variants = {
  hidden:  { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

function WordReveal({ text, className, italic }: { text: string; className?: string; italic?: boolean }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block overflow-hidden${italic ? " italic font-light" : ""}`}
          style={{ marginRight: "0.22em" }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden:  { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 } },
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgWrapRef.current) {
      gsap.to(imgWrapRef.current, {
        y: 70,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end:   "bottom top",
          scrub: 1.4,
        },
      });
    }
  }, []);

  const skills = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"];

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col overflow-hidden grid-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border)]" />

      {/* Decorative large letters */}
      <div
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-display font-bold select-none pointer-events-none hidden lg:block"
        style={{ fontSize: "clamp(160px, 22vw, 320px)", color: "rgba(108,99,255,0.04)", lineHeight: 1 }}
      >
        FS
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center pt-28 pb-16">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Meta row */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10 flex-wrap">
            <span className="font-mono-custom text-xs tracking-widest text-[var(--text-dim)] uppercase">Full Stack Developer</span>
            <div className="rule flex-1 max-w-[80px]" />
            <span className="font-mono-custom text-xs tracking-widest text-[var(--text-dim)] uppercase">Dhaka, BD</span>
          </motion.div>

          {/* Name */}
          <motion.div variants={container} className="mb-6">
            <h1 className="font-display font-bold leading-none tracking-tight text-[var(--text)] block"
                style={{ fontSize: "clamp(52px, 10vw, 148px)" }}>
              <WordReveal text="Tabib E" />
            </h1>
            <div className="flex items-end gap-6">
              <h1 className="font-display font-bold leading-none tracking-tight text-[var(--text)]"
                  style={{ fontSize: "clamp(52px, 10vw, 148px)" }}>
                <WordReveal text="Alahi" italic />
              </h1>
              <motion.span
                className="inline-block rounded-full flex-shrink-0"
                style={{
                  width: "clamp(12px, 2vw, 28px)",
                  height: "clamp(12px, 2vw, 28px)",
                  background: "var(--accent)",
                  marginBottom: "0.75rem",
                }}
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Bottom row */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-end mt-10">

            {/* Left: tagline + CTA */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-sm font-light">
                {personalInfo.tagline}. Building scalable web apps with care and precision.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* Primary CTA */}
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex items-center gap-2 font-mono-custom text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all duration-300 bg-[var(--accent)] text-white hover:bg-[var(--accent-warm)]"
                >
                  Hire Me
                  <ArrowDownRight size={14} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </button>
                {/* Secondary CTA */}
                <a
                  href={personalInfo.resumeUrl}
                  className="font-mono-custom text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all duration-300 border border-[var(--border-strong)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Download CV
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((s) => (<span key={s} className="tech-tag">{s}</span>))}
              </div>
            </motion.div>

            {/* Center: portrait with styled frame */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="hidden lg:flex justify-center"
            >
              <div ref={imgWrapRef} className="relative">
                {/* Glow corners */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--accent)] z-10" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[var(--accent)] z-10" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[var(--accent)] z-10" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--accent)] z-10" />

                <div
                  className="w-64 h-80 xl:w-72 xl:h-96 overflow-hidden relative"
                  style={{ border: "1px solid var(--border-strong)" }}
                >
                  <Image
                    src="/new.jpeg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top transition-all duration-700"
                    priority
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(108,99,255,0.35) 0%, transparent 60%)" }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono-custom text-xs text-[var(--text-dim)] tracking-widest">© 2025</span>
                  <span className="font-mono-custom text-xs text-[var(--text-dim)] tracking-widest">PORTRAIT</span>
                </div>

                {/* Floating stat */}
                <motion.div
                  className="absolute -right-20 top-8 px-4 py-3 rounded-sm"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--border-strong)" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="font-mono-custom text-xs text-[var(--text-dim)] mb-0.5">Projects</div>
                  <div className="font-display font-bold text-2xl text-[var(--accent)]">10+</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: stats + socials */}
            <motion.div variants={fadeUp} className="flex flex-col gap-8 lg:items-end">
              <div className="flex gap-8 lg:justify-end">
                {[
                  { val: "2+", label: "Years Exp." },
                  { val: "5+", label: "Clients"    },
                ].map(({ val, label }) => (
                  <div key={label} className="text-right">
                    <div className="font-display font-bold text-4xl leading-none gradient-text">{val}</div>
                    <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 lg:justify-end">
                <span className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest">Follow</span>
                <div className="rule w-8" />
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 border border-[var(--border-strong)] rounded-sm flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--glow)] transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-8">
        <div className="rule mb-4" />
        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="font-mono-custom text-xs text-[var(--text-dim)] tracking-widest uppercase">Available for work</span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-center gap-2 font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest"
          >
            Scroll
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDownRight size={12} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech logos marquee */}
      <TechMarquee />
    </section>
  );
}
