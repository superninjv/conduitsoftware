"use client";

import Link from "next/link";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ConduitLogo } from "@/components/ConduitLogo";

const featured = projects.filter((p) => p.featured);

const stats = [
  { value: "6+", label: "Games Supported" },
  { value: "Open", label: "Source APIs" },
  { value: "Active", label: "Mod Development" },
  { value: "Growing", label: "Tool Ecosystem" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-grid opacity-50" />
        <div className="glow-orb w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 animate-pulse-glow" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[var(--border-color)] bg-[var(--surface-card)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-[var(--text-secondary)]">
                Paragon Royale is live
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6">
              Software that connects{" "}
              <span className="gradient-text">players to data</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
              Game analytics platforms, mods, developer tools, and open-source
              APIs. From competitive stat tracking to Minecraft modding — we
              build the infrastructure gamers and developers rely on.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects" className="btn-primary text-base px-8 py-3.5">
                Explore Projects
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/docs" className="btn-secondary text-base px-8 py-3.5">
                API Docs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Stats bar ────────────────────────────────────────────── */}
      <section className="border-y border-[var(--border-color)] bg-[var(--surface-secondary)]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-display font-bold text-3xl gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-tertiary)]">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4 text-[var(--text-primary)]">
                What we&apos;re building
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                From competitive game analytics to modding tools — every project
                is built to solve a real problem for players and developers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-10 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-conduit-400 hover:text-conduit-300 transition-colors"
              >
                View all projects
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Open Source CTA ──────────────────────────────────────── */}
      <section className="py-24 bg-[var(--surface-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="gradient-border p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="glow-orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-conduit-500/10 mb-6">
                  <ConduitLogo className="w-10 h-10" />
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4 text-[var(--text-primary)]">
                  Open source at the core
                </h2>
                <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
                  Our APIs and tools are built in the open. Browse the source,
                  contribute, or build your own integrations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/docs" className="btn-primary px-8 py-3.5">
                    Read the Docs
                  </Link>
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-8 py-3.5"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
