"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: Mail,   label: "Email",    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: Phone,  label: "WhatsApp", value: personalInfo.whatsapp, href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  return (
    <section ref={ref} id="contact" className="py-32 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="section-number block mb-3">06 — Contact</span>
          <h2
            className="font-display font-bold leading-tight text-[var(--text)]"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Let&apos;s build<br />
            <span className="italic font-light gradient-text">something great</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-0 lg:gap-16 items-start">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            <p className="font-display text-2xl font-light italic leading-relaxed text-[var(--text-muted)]">
              Open to freelance projects, full-time roles, and interesting collaborations.
            </p>
            <div className="flex flex-col gap-0">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 py-5 border-b border-[var(--border)] group">
                  <div className="w-9 h-9 border border-[var(--border-strong)] rounded-sm flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--glow)] transition-all duration-300">
                    <Icon size={14} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-[var(--text)] text-sm hover:text-[var(--accent)] transition-colors duration-200">{value}</a>
                    ) : (
                      <span className="text-[var(--text)] text-sm">{value}</span>
                    )}
                  </div>
                  {href && <ArrowUpRight size={14} className="text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors duration-300" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block" style={{ width: "1px", background: "var(--border)", alignSelf: "stretch" }} />

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 border border-[var(--accent)] rounded-full flex items-center justify-center mb-4 bg-[var(--glow)]"
                >
                  <span className="text-[var(--accent)] text-2xl">✓</span>
                </motion.div>
                <h3 className="font-display text-2xl font-semibold text-[var(--text)]">Message sent.</h3>
                <p className="text-[var(--text-muted)] text-sm">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest block mb-2">Name</label>
                    <input type="text" required placeholder="Your name" className="contact-input" />
                  </div>
                  <div>
                    <label className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest block mb-2">Email</label>
                    <input type="email" required placeholder="your@email.com" className="contact-input" />
                  </div>
                </div>
                <div>
                  <label className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest block mb-2">Subject</label>
                  <input type="text" required placeholder="Project inquiry, collaboration..." className="contact-input" />
                </div>
                <div>
                  <label className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest block mb-2">Message</label>
                  <textarea required rows={5} placeholder="Tell me about your project..." className="contact-input resize-none" />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-3 font-mono-custom text-xs uppercase tracking-widest bg-[var(--accent)] text-white px-8 py-4 rounded-sm hover:bg-[var(--accent-warm)] transition-colors duration-300 self-start"
                >
                  Send Message
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
