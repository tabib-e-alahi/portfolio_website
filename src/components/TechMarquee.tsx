"use client";

/* ─── Inline SVG tech logos ─── */
const LogoReact = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10.5" ry="3.8" />
    <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10.5" ry="3.8" transform="rotate(120 12 12)" />
  </svg>
);

const LogoNextJs = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.5 8.5L15 15.5M8.5 15.5V8.5h7" />
  </svg>
);

const LogoTypeScript = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" />
    {/* T */}
    <line x1="6" y1="9.5" x2="13" y2="9.5" />
    <line x1="9.5" y1="9.5" x2="9.5" y2="16" />
    {/* S */}
    <path d="M15 9.5h2.5a1 1 0 010 3H15a1 1 0 000 3h2.5" />
  </svg>
);

const LogoNodeJs = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" />
    <path d="M9 8v8M9 8l6 8M15 8v8" />
  </svg>
);

const LogoMongoDB = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 2 5 6 5 10c0 5 5 9 7 12 2-3 7-7 7-12 0-4-3-8-7-8z" />
    <line x1="12" y1="14" x2="12" y2="22" />
  </svg>
);

const LogoPostgres = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <ellipse cx="12" cy="6" rx="8" ry="3.5" />
    <path d="M4 6v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V6" />
    <path d="M4 11v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5" />
  </svg>
);

const LogoTailwind = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9.5c1-4 3.5-5.5 6-4s3.5 5 2 8c1-4 3.5-5.5 6-4" />
    <path d="M6 15.5c1-4 3.5-5.5 6-4s3.5 5 2 8c1-4 3.5-5.5 6-4" />
  </svg>
);

const LogoGsap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 22,12 13,22 2,12" />
    <polyline points="9,12 12,9 15,12 12,15" />
  </svg>
);

const LogoFramer = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5h14v7H5z" />
    <path d="M5 12l7 7 7-7" />
    <line x1="12" y1="12" x2="12" y2="19" />
  </svg>
);

const LogoGit = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="6"  cy="6" r="2.5" />
    <circle cx="6"  cy="18" r="2.5" />
    <path d="M6 8.5v7M8.5 6h7M16 8c0 4-3 6.5-10 6.5" />
  </svg>
);

const LogoDocker = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="10" width="18" height="7" rx="2" />
    <rect x="5" y="7"  width="3"  height="3" />
    <rect x="9" y="7"  width="3"  height="3" />
    <rect x="13" y="7" width="3"  height="3" />
    <rect x="9" y="4"  width="3"  height="3" />
    <path d="M21 12c1.5 0 2 1 2 2" />
  </svg>
);

const logos = [
  { Logo: LogoReact,      name: "React"          },
  { Logo: LogoNextJs,     name: "Next.js"        },
  { Logo: LogoTypeScript, name: "TypeScript"     },
  { Logo: LogoNodeJs,     name: "Node.js"        },
  { Logo: LogoMongoDB,    name: "MongoDB"        },
  { Logo: LogoPostgres,   name: "PostgreSQL"     },
  { Logo: LogoTailwind,   name: "Tailwind CSS"   },
  { Logo: LogoGsap,       name: "GSAP"           },
  { Logo: LogoFramer,     name: "Framer Motion"  },
  { Logo: LogoGit,        name: "Git"            },
  { Logo: LogoDocker,     name: "Docker"         },
];

export default function TechMarquee() {
  const items = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <div className="border-y border-[var(--border)] bg-[var(--surface)] overflow-hidden py-4">
      <div className="marquee-track">
        {items.map(({ Logo, name }, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 mx-8 flex-shrink-0 text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors duration-300 group"
          >
            <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <Logo />
            </div>
            <span className="font-mono-custom text-[0.65rem] uppercase tracking-widest whitespace-nowrap">
              {name}
            </span>
            <span className="text-[var(--accent-cold)] opacity-40 ml-4">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
