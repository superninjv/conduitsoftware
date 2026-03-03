"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

/* ---------- tiny SVG illustrations (pure ASCII, no emoji) ---------- */

function AnalyticsGraphic() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-auto" aria-hidden="true">
      <rect x="0" y="0" width="280" height="120" rx="8" fill="rgba(99,102,241,0.06)" />
      {/* bar chart */}
      <rect x="30" y="70" width="18" height="30" rx="3" fill="rgba(99,102,241,0.35)" />
      <rect x="58" y="50" width="18" height="50" rx="3" fill="rgba(99,102,241,0.5)" />
      <rect x="86" y="60" width="18" height="40" rx="3" fill="rgba(99,102,241,0.4)" />
      <rect x="114" y="35" width="18" height="65" rx="3" fill="rgba(99,102,241,0.6)" />
      <rect x="142" y="45" width="18" height="55" rx="3" fill="rgba(99,102,241,0.45)" />
      <rect x="170" y="25" width="18" height="75" rx="3" fill="rgba(99,102,241,0.7)" />
      {/* trend line */}
      <polyline
        points="39,68 67,48 95,58 123,33 151,43 179,23 220,18"
        stroke="rgba(99,102,241,0.9)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="220" cy="18" r="4" fill="#6366f1" />
      {/* label */}
      <text x="210" y="50" fill="rgba(99,102,241,0.5)" fontSize="10" fontFamily="monospace">+24%</text>
    </svg>
  );
}

function DevToolsGraphic() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-auto" aria-hidden="true">
      <rect x="0" y="0" width="280" height="120" rx="8" fill="rgba(16,185,129,0.06)" />
      {/* terminal window */}
      <rect x="20" y="15" width="240" height="90" rx="6" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
      {/* title bar dots */}
      <circle cx="35" cy="28" r="3" fill="rgba(16,185,129,0.3)" />
      <circle cx="46" cy="28" r="3" fill="rgba(16,185,129,0.2)" />
      <circle cx="57" cy="28" r="3" fill="rgba(16,185,129,0.15)" />
      {/* code lines */}
      <rect x="32" y="42" width="80" height="6" rx="2" fill="rgba(16,185,129,0.25)" />
      <rect x="32" y="54" width="120" height="6" rx="2" fill="rgba(16,185,129,0.18)" />
      <rect x="44" y="66" width="95" height="6" rx="2" fill="rgba(16,185,129,0.22)" />
      <rect x="44" y="78" width="60" height="6" rx="2" fill="rgba(16,185,129,0.15)" />
      <rect x="32" y="90" width="40" height="6" rx="2" fill="rgba(16,185,129,0.25)" />
      {/* cursor blink */}
      <rect x="76" y="89" width="2" height="8" fill="rgba(16,185,129,0.7)" />
    </svg>
  );
}

function ModsGraphic() {
  return (
    <svg viewBox="0 0 280 120" fill="none" className="w-full h-auto" aria-hidden="true">
      <rect x="0" y="0" width="280" height="120" rx="8" fill="rgba(245,158,11,0.06)" />
      {/* block grid -- representing minecraft-style blocks */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5, 6].map((col) => {
          const opacity = Math.abs(Math.sin(row * 3 + col * 2)) * 0.4 + 0.1;
          return (
            <rect
              key={`${row}-${col}`}
              x={40 + col * 30}
              y={15 + row * 20}
              width="24"
              height="16"
              rx="2"
              fill={`rgba(245,158,11,${opacity.toFixed(2)})`}
            />
          );
        })
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* ========== HERO ========== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* mesh background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: [
                "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(99,102,241,0.08), transparent 60%)",
                "radial-gradient(ellipse 60% 80% at 80% 70%, rgba(16,185,129,0.06), transparent 60%)",
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(245,158,11,0.04), transparent 70%)",
              ].join(", "),
            }}
          />
          {/* grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
          <AnimatedSection>
            <p
              className="text-sm font-medium tracking-widest uppercase mb-6"
              style={{ color: "rgba(99,102,241,0.8)" }}
            >
              Software Infrastructure
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1
              className="font-bold leading-[1.05] tracking-tight mb-8"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
              }}
            >
              Tools, analytics, and mods
              <br />
              <span style={{ color: "rgba(99,102,241,0.7)" }}>built for developers</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              Conduit Software builds analytics engines, developer tools, and
              game modifications. Open-source APIs, real-time data pipelines,
              and community-driven projects.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="#analytics"
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: "rgba(99,102,241,0.9)",
                  color: "#fff",
                }}
              >
                Explore Products
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: "var(--card-bg)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--card-border)",
                }}
              >
                API Docs
              </Link>
            </div>
          </AnimatedSection>

          {/* stat bar */}
          <AnimatedSection delay={400}>
            <div
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { value: "3", label: "Product Lines" },
                { value: "Open", label: "Source APIs" },
                { value: "Active", label: "Mod Development" },
                { value: "Growing", label: "Tool Ecosystem" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1 tracking-wide uppercase"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== PARAGON ANALYTICS ENGINE ========== */}
      <section id="analytics" className="relative py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(99,102,241,0.8)" }}
              >
                Analytics
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Paragon Analytics Engine
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Real-time data pipelines and analytics platforms built for
                competitive gaming. Each Paragon product targets a specific
                title with deep stat tracking, match analysis, and performance
                trends.
              </p>
              <div className="space-y-4">
                <div
                  className="p-4 rounded-lg"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      Paragon Royale
                    </h3>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(16,185,129,0.1)", color: "rgba(16,185,129,0.9)" }}
                    >
                      Live
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                    Fortnite analytics -- match breakdowns, performance trends,
                    and competitive insights.
                  </p>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      Paragon Rivals
                    </h3>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(245,158,11,0.1)", color: "rgba(245,158,11,0.9)" }}
                    >
                      In Development
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                    Marvel Rivals hero statistics, meta analysis, and match
                    data.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://paragonroyale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{ color: "rgba(99,102,241,0.8)" }}
                >
                  Visit Paragon Royale &rarr;
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <AnalyticsGraphic />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== DEVELOPER TOOLS ========== */}
      <section id="devtools" className="relative py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <DevToolsGraphic />
            </AnimatedSection>

            <AnimatedSection delay={150} className="order-1 md:order-2">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(16,185,129,0.8)" }}
              >
                Developer Tools
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Conduit DevTools
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                A growing suite of open-source utilities for API testing, data
                transformation, and workflow automation. Built for internal use
                first, then shared with the community.
              </p>
              <div className="space-y-3">
                {["API testing utilities", "Data transformation pipelines", "Workflow automation tools", "Open-source on GitHub"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "rgba(16,185,129,0.6)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/docs"
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{ color: "rgba(16,185,129,0.8)" }}
                >
                  API Documentation &rarr;
                </Link>
                <a
                  href="https://github.com/conduit-software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  GitHub &rarr;
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== GAME MODS ========== */}
      <section id="mods" className="relative py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(245,158,11,0.8)" }}
              >
                Game Mods
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Minecraft Mods
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                A collection of Minecraft mods published on CurseForge and
                Modrinth. From quality-of-life improvements to new gameplay
                mechanics, all open source and community supported.
              </p>
              <div
                className="p-4 rounded-lg mb-6"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="flex items-center gap-4 text-sm" style={{ color: "var(--text-tertiary)" }}>
                  <span>Available on:</span>
                  <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>CurseForge</span>
                  <span style={{ color: "var(--card-border)" }}>|</span>
                  <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>Modrinth</span>
                </div>
              </div>
              <div className="flex gap-4">
                <span
                  className="text-sm font-semibold transition-colors duration-200 cursor-pointer"
                  style={{ color: "rgba(245,158,11,0.8)" }}
                >
                  Browse Mods &rarr;
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <ModsGraphic />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== OPEN SOURCE CTA ========== */}
      <section className="relative py-28">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--text-tertiary)" }}
            >
              Open Source
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Built in the open
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Our APIs and tools are open source. Browse the code, contribute,
              or build your own integrations on top of what we have built.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/docs"
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: "var(--card-bg)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--card-border)",
                }}
              >
                Read the Docs
              </Link>
              <a
                href="https://github.com/conduit-software"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: "var(--card-bg)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--card-border)",
                }}
              >
                View on GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
