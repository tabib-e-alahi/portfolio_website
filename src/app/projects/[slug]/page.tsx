import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pb-32">

        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest hover:text-[var(--text)] transition-colors mb-12"
        >
          <ArrowLeft size={12} />
          Back to projects
        </Link>

        {/* Header */}
        <div className="border-b border-[var(--border)] pb-10 mb-10">
          <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-4">Case Study</div>
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-[var(--text)] leading-tight mb-6">{project.name}</h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl">{project.shortDesc}</p>
        </div>

        {/* Hero image */}
        <div className="relative h-72 lg:h-[480px] w-full mb-12 overflow-hidden border border-[var(--border)] rounded-sm">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-[var(--accent)] opacity-10 pointer-events-none" />
        </div>

        {/* Tech stack */}
        <div className="mb-12">
          <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-4 section-line">Technologies</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((t) => (
              <span key={t} className="tech-tag py-1.5">{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-16 flex-wrap">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-widest bg-[var(--accent)] text-white px-6 py-3 rounded-sm hover:bg-[var(--accent-warm)] transition-colors"
            >
              Live Demo <ArrowUpRight size={12} />
            </a>
          )}
          {project.githubClient && (
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-widest border border-[var(--border-strong)] text-[var(--text-muted)] px-6 py-3 rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--glow)] transition-all"
            >
              <Code2 size={12} /> GitHub
            </a>
          )}
        </div>

        {/* Description */}
        <div className="mb-16">
          <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-4 section-line">Overview</div>
          <p className="text-[var(--text-muted)] leading-relaxed text-base mt-6">{project.description}</p>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-6 section-line">Challenges</div>
          <div className="flex flex-col gap-0 mt-4">
            {project.challenges.map((c, i) => (
              <div key={i} className="flex gap-5 py-5 border-b border-[var(--border)] group hover:bg-[var(--surface)] transition-colors rounded-sm px-0 hover:px-3">
                <span className="font-mono-custom text-xs text-[var(--accent)] flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Improvements */}
        <div>
          <div className="font-mono-custom text-xs text-[var(--text-dim)] uppercase tracking-widest mb-6 section-line">Future Improvements</div>
          <div className="flex flex-col gap-0 mt-4">
            {project.improvements.map((imp, i) => (
              <div key={i} className="flex gap-5 py-5 border-b border-[var(--border)] group hover:bg-[var(--surface)] transition-colors rounded-sm px-0 hover:px-3">
                <span className="text-[var(--accent-cold)] flex-shrink-0 mt-1.5" style={{ fontSize: "0.4rem" }}>■</span>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{imp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
