"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Link from "next/link";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Education",  href: "#education"  },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
    );
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(4, 4, 8, 0.85)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-xl tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          T.E.A<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button key={link.href} onClick={() => scrollTo(link.href)} className="nav-link">
              {link.label}
            </button>
          ))}
          <a
            href={personalInfo.resumeUrl}
            className="font-mono-custom text-xs uppercase tracking-widest border border-[var(--border-strong)] text-[var(--text-muted)] px-5 py-2 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--glow)] transition-all duration-300 rounded-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-[var(--border)] backdrop-blur-md"
            style={{ background: "rgba(4, 4, 8, 0.95)" }}
          >
            <div className="px-6 pb-8 pt-4 flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="nav-link text-left"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                className="font-mono-custom text-xs uppercase tracking-widest border border-[var(--border-strong)] text-[var(--text-muted)] px-5 py-2.5 text-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 rounded-sm"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
