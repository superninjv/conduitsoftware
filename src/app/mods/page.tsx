"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const mods = [
  {
    name: "Minecraft Mods",
    status: "Live",
    statusColor: "bg-emerald-500 text-emerald-500",
    description:
      "A collection of Minecraft mods ranging from quality-of-life improvements to new gameplay mechanics. Published on CurseForge and Modrinth for easy installation through any mod loader.",
    platforms: ["CurseForge", "Modrinth"],
    details: [
      "Compatible with Fabric and Forge",
      "Quality-of-life improvements",
      "New gameplay mechanics",
      "Regular updates for latest Minecraft versions",
    ],
    curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/nautilusplus",
    modrinthUrl: "",
  },
  {
    name: "Terraria Tools",
    status: "Planned",
    statusColor: "bg-zinc-400 text-zinc-400",
    description:
      "Companion utilities for Terraria players including world analysis and inventory management. Designed to help players plan builds and track progress across worlds.",
    platforms: ["Terraria"],
    details: [
      "World analysis and mapping",
      "Inventory management",
      "Build planning tools",
      "Progress tracking across worlds",
    ],
    curseforgeUrl: "",
    modrinthUrl: "",
  },
];

export default function ModsPage() {
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
          <span className="section-label mb-4 block">Game Mods</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Mods &amp; Modding Tools
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-14 leading-relaxed">
            Minecraft mods published on CurseForge and Modrinth, plus companion
            tools for other titles. Everything is free and open to the community.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {mods.map((mod, i) => (
            <AnimatedSection key={mod.name} delay={i * 100}>
              <div className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">
                        {mod.name}
                      </h2>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${mod.statusColor.split(" ")[0]}`} />
                        <span className={`text-[11px] font-medium ${mod.statusColor.split(" ")[1]}`}>{mod.status}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {mod.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mod.platforms.map((p) => (
                        <span
                          key={p}
                          className="px-2.5 py-1 text-[11px] font-mono font-medium text-[var(--text-tertiary)] bg-[var(--surface-tertiary)] rounded"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    {(mod.curseforgeUrl || mod.modrinthUrl) && (
                      <div className="flex flex-wrap gap-3">
                        {mod.curseforgeUrl && (
                          <a
                            href={mod.curseforgeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-mid)] hover:text-[var(--text-primary)] transition-colors"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            CurseForge
                          </a>
                        )}
                        {mod.modrinthUrl && (
                          <a
                            href={mod.modrinthUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-mid)] hover:text-[var(--text-primary)] transition-colors"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Modrinth
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="sm:w-64 shrink-0">
                    <div className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Details</div>
                    <ul className="space-y-2">
                      {mod.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          {d}
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
