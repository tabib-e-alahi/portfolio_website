"use client";

import { personalInfo } from "@/lib/data";
import { Code2, Link2, Globe } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: personalInfo.github,   label: "GitHub", src:"/github.png"   },
  { href: personalInfo.linkedin, label: "LinkedIn", src:"/linkedin.png" },
  { href: personalInfo.facebook, label: "Facebook", src:"/facebook.png" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)] py-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Left */}
          <div>
            <div className="font-display font-bold text-3xl mb-2">
              T.E.A<span className="text-[var(--accent)]">.</span>
            </div>
            <p className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest">
              {personalInfo.designation} — {personalInfo.location}
            </p>
          </div>

          {/* Center: socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ src , href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-sm flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--glow)] transition-all duration-300"
              >
                <img src={`${src}`} alt="" />
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col lg:items-end gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-display text-xl text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              {personalInfo.email}
            </a>
            <p className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
