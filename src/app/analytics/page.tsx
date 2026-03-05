"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const paragonApps = [
  {
    name: "Paragon Royale",
    game: "Clash Royale",
    status: "Live",
    statusColor: "bg-emerald-500 text-emerald-500",
    description: "Advanced match analytics, deck performance tracking, win-rate trends, and competitive insights for Clash Royale players.",
    features: ["Match history analysis", "Deck win-rate tracking", "Performance trends over time", "Competitive ladder insights"],
    href: "https://paragonroyale.com",
    external: true,
  },
  {
    name: "Paragon Rivals",
    game: "Marvel Rivals",
    status: "In Development",
    statusColor: "bg-blue-500 text-blue-500",
    description: "Deep-dive hero statistics, match breakdowns, and meta analysis for Marvel Rivals competitive play.",
    features: ["Hero pick/win rates", "Match breakdown analysis", "Meta tier lists", "Team composition stats"],
  },
  {
    name: "Paragon Overwatch",
    game: "Overwatch 2",
    status: "Planned",
    statusColor: "bg-zinc-400 text-zinc-400",
    description: "Hero performance tracking, SR trends, and team composition analysis for Overwatch 2.",
    features: ["SR trend tracking", "Hero performance metrics", "Team composition analysis", "Session statistics"],
  },
  {
    name: "Paragon Strike",
    game: "CS2",
    status: "Planned",
    statusColor: "bg-zinc-400 text-zinc-400",
    description: "Round-by-round breakdowns, economy tracking, and aim statistics for Counter-Strike players.",
    features: ["Round-by-round analysis", "Economy tracking", "Aim statistics", "Map performance data"],
  },
];

export default function AnalyticsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            Back to home
          </Link>
        </AnimatedSection>

        <AnimatedSection>
          <span className="section-label mb-4 block">Analytics</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Paragon Analytics Engine
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-6 leading-relaxed">
            Real-time performance tracking and competitive insights across
            multiple game titles. Each Paragon app is purpose-built for its
            game, surfacing the stats that actually matter.
          </p>
          <p className="text-base text-[var(--text-tertiary)] max-w-2xl mb-14 leading-relaxed">
            Every Paragon app pulls data from official and community APIs,
            processes it through our analytics pipeline, and presents it in a
            clean, actionable dashboard. No fluff, no clutter — just the
            numbers that help you improve.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {paragonApps.map((app, i) => (
            <AnimatedSection key={app.name} delay={i * 100}>
              <div className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[var(--surface-tertiary)] text-[var(--text-tertiary)]">
                        {app.game}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${app.statusColor.split(" ")[0]}`} />
                        <span className={`text-[11px] font-medium ${app.statusColor.split(" ")[1]}`}>{app.status}</span>
                      </div>
                    </div>
                    <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">
                      {app.name}
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {app.description}
                    </p>
                    {app.external && app.href && (
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-5 py-2 text-sm"
                      >
                        Visit {app.name}
                        <svg className="ml-1.5 w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                      </a>
                    )}
                  </div>
                  <div className="sm:w-64 shrink-0">
                    <div className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Features</div>
                    <ul className="space-y-2">
                      {app.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
