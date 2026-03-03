"use client";

import Link from "next/link";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { ConduitLogo } from "@/components/ConduitLogo";

const featured = projects.filter((p) => p.featured);

const marqueeItems = [
  "Fortnite", "Marvel Rivals", "Overwatch 2", "CS2", "Minecraft", "Terraria",
  "Analytics", "Mods", "Developer Tools", "Open Source", "APIs",
  "Fortnite", "Marvel Rivals", "Overwatch 2", "CS2", "Minecraft", "Terraria",
  "Analytics", "Mods", "Developer Tools", "Open Source", "APIs",
];

export default function HomePage() {
  return (
    <>
      {/* ━━ Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
        <div className="absolute inset-0 grid-bg" />

        {/* Floating orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full -top-48 -right-48 animate-glow-pulse" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full -bottom-32 -left-32 animate-glow-pulse" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1), transparent 70%)", filter: "blur(60px)", animationDelay: "2s" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-32 pb-24">
          <div className="max-w-[820px]">
            {/* Status pill */}
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full" style={{ background: "var(--surface-card)", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-sm)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
                  Paragon Royale is live &mdash; track your Fortnite stats now
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: "var(--text-muted)" }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </AnimatedSection>

            {/* Headline */}
            <AnimatedSection delay={80}>
              <h1 className="heading-display text-[clamp(2.8rem,6.5vw,5.2rem)] mb-6" style={{ color: "var(--text-primary)" }}>
                The infrastructure between{" "}
                <span className="gradient-text">players</span> and{" "}
                <span className="gradient-text">data</span>
              </h1>
            </AnimatedSection>

            {/* Subhead */}
            <AnimatedSection delay={160}>
              <p className="text-lg sm:text-xl leading-relaxed max-w-[600px] mb-10" style={{ color: "var(--text-secondary)" }}>
                Game analytics platforms, mods, developer tools, and open&#8209;source APIs.
                Built for the games you play.
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={240}>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/projects" className="btn-primary gap-2">
                  Explore Projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link href="/docs" className="btn-secondary gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  API Docs
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero visual — abstract dashboard mockup */}
          <AnimatedSection delay={350} className="mt-16 lg:mt-20">
            <div className="card p-1.5" style={{ boxShadow: "var(--shadow-lg), var(--shadow-glow)" }}>
              <div className="rounded-[14px] overflow-hidden" style={{ background: "var(--surface-1)" }}>
                {/* Tab bar */}
                <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(239,68,68,0.7)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(245,158,11,0.7)" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(34,197,94,0.7)" }} />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md text-[11px] font-mono" style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}>
                      conduitsoftware.org/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 grid grid-cols-3 gap-4" style={{ minHeight: "260px" }}>
                  {/* Stat cards */}
                  {[
                    { label: "Matches Tracked", value: "1.2M", change: "+12.4%", color: "#10b981" },
                    { label: "Active Users", value: "8,432", change: "+24.1%", color: "#8b5cf6" },
                    { label: "Mod Downloads", value: "340K", change: "+8.7%", color: "#6366f1" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="rounded-xl p-4" style={{ background: "var(--surface-card)", border: "1px solid var(--border-color)" }}>
                      <div className="text-[11px] font-medium mb-2" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                      <div className="flex items-end justify-between">
                        <span className="font-display font-bold text-2xl" style={{ color: "var(--text-primary)" }}>{stat.value}</span>
                        <span className="text-xs font-semibold" style={{ color: stat.color }}>{stat.change}</span>
                      </div>
                      {/* Mini sparkline */}
                      <svg className="w-full h-8 mt-2" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path
                          d={i === 0 ? "M0,25 Q15,20 30,18 T60,12 T100,5" : i === 1 ? "M0,22 Q20,25 40,15 T70,8 T100,10" : "M0,20 Q25,22 50,15 T80,10 T100,8"}
                          fill="none" stroke={stat.color} strokeWidth="1.5" opacity="0.6"
                        />
                        <path
                          d={`${i === 0 ? "M0,25 Q15,20 30,18 T60,12 T100,5" : i === 1 ? "M0,22 Q20,25 40,15 T70,8 T100,10" : "M0,20 Q25,22 50,15 T80,10 T100,8"} L100,30 L0,30 Z`}
                          fill={stat.color} opacity="0.08"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ Marquee ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="overflow-hidden py-6" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", background: "var(--surface-1)" }}>
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-6 text-sm font-display font-semibold" style={{ color: "var(--text-muted)" }}>
                {item}
              </span>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--text-muted)", opacity: 0.4 }} />
            </span>
          ))}
        </div>
      </section>

      {/* ━━ Featured Projects — Bento Grid ━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-[560px] mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 gradient-text">Products</p>
              <h2 className="heading-section text-[clamp(1.8rem,4vw,2.8rem)] mb-4" style={{ color: "var(--text-primary)" }}>
                What we&apos;re building
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Game analytics, modding tools, and developer infrastructure &mdash; every project solves a real problem for players and builders.
              </p>
            </div>
          </AnimatedSection>

          <div className="bento-grid">
            {featured.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 100} className={i === 0 ? "bento-wide" : i === 1 ? "bento-narrow" : "bento-half"}>
                <ProjectCard project={project} size={i === 0 ? "large" : "default"} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="mt-12 text-center">
            <Link href="/projects" className="accent-link inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200">
              View all projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ Infrastructure Section ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28" style={{ background: "var(--surface-1)" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-[560px] mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 gradient-text">Developers</p>
              <h2 className="heading-section text-[clamp(1.8rem,4vw,2.8rem)] mb-4" style={{ color: "var(--text-primary)" }}>
                Open source at the core
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Our APIs are public, our tools are open. Browse source code, contribute, or build your own integrations on top of Conduit.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "REST API",
                desc: "Public endpoints for project metadata, game analytics, and mod information. No auth required for public data.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                ),
                code: "GET /api/v1/projects",
              },
              {
                title: "Bug Reports",
                desc: "Structured bug reporting that goes straight to our inbox. Track issues across all Conduit projects from one place.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                ),
                code: "POST /api/v1/bugs",
              },
              {
                title: "Extensible",
                desc: "Built on Next.js with a modular architecture. Adding a new project, endpoint, or page takes minutes, not days.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                ),
                code: "config/projects.ts",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="card p-6 h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(124,58,237,0.08)", color: "rgb(124,58,237)" }}>
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-tertiary)" }}>{item.desc}</p>
                  <code className="text-xs font-mono px-2.5 py-1 rounded-md" style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}>
                    {item.code}
                  </code>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="card relative p-12 sm:p-20 text-center overflow-hidden">
              {/* Glow */}
              <div className="absolute w-[500px] h-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)", filter: "blur(60px)" }} />

              <div className="relative z-10">
                <ConduitLogo className="w-12 h-12 mx-auto mb-6" />
                <h2 className="heading-section text-[clamp(1.6rem,3.5vw,2.4rem)] mb-4" style={{ color: "var(--text-primary)" }}>
                  Start building with Conduit
                </h2>
                <p className="text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Explore the API, report a bug, or get in touch. We&apos;re building this in the open and we want to hear from you.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/docs" className="btn-primary gap-2">
                    Read the Docs
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                  <Link href="/contact" className="btn-secondary">Get in Touch</Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
