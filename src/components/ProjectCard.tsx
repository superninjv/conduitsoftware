"use client";

import Link from "next/link";
import { Project, statusConfig } from "@/config/projects";

const badgeClass: Record<string, string> = {
  live: "badge badge-live",
  beta: "badge badge-beta",
  development: "badge badge-dev",
  planned: "badge badge-planned",
};

// Visual mockup elements per category
function CardVisual({ project }: { project: Project }) {
  if (project.category === "analytics") {
    return (
      <div className="relative h-32 rounded-xl overflow-hidden" style={{ background: "var(--surface-2)" }}>
        {/* Fake chart bars */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 px-6 pb-4">
          {[40, 65, 50, 80, 60, 90, 72, 55, 85, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t transition-all duration-500"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, rgba(124,58,237,${0.2 + i * 0.06}), rgba(99,102,241,${0.3 + i * 0.05}))`,
                opacity: 0.6 + i * 0.04,
              }}
            />
          ))}
        </div>
        {/* Overlay line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
          <path d="M0,60 Q25,45 50,50 T100,35 T150,20 T200,25" fill="none" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  if (project.category === "mods") {
    return (
      <div className="relative h-32 rounded-xl flex items-center justify-center" style={{ background: "var(--surface-2)" }}>
        <div className="grid grid-cols-4 gap-1.5 p-4 opacity-50">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded"
              style={{
                background: i % 3 === 0
                  ? "rgba(124,58,237,0.3)"
                  : i % 3 === 1
                  ? "rgba(16,185,129,0.3)"
                  : "rgba(245,158,11,0.2)",
              }}
            />
          ))}
        </div>
        <span className="absolute text-4xl opacity-30">{project.icon}</span>
      </div>
    );
  }

  return (
    <div className="relative h-32 rounded-xl flex items-center justify-center overflow-hidden" style={{ background: "var(--surface-2)" }}>
      <div className="font-mono text-xs opacity-20 leading-tight px-4 text-center" style={{ color: "var(--text-tertiary)" }}>
        {"{ }"}<br />
        {"const build = () => {"}<br />
        {"  return <Tool />"}<br />
        {"}"}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-card)] to-transparent" />
    </div>
  );
}

export function ProjectCard({ project, size = "default" }: { project: Project; size?: "default" | "large" }) {
  const status = statusConfig[project.status];
  const isLarge = size === "large";

  const inner = (
    <div className={`card group h-full ${isLarge ? "p-7" : "p-5"}`}>
      {/* Visual */}
      <CardVisual project={project} />

      {/* Content */}
      <div className={`${isLarge ? "mt-6" : "mt-4"}`}>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className={`${isLarge ? "text-2xl" : "text-xl"}`}>{project.icon}</span>
            <h3 className={`font-display font-semibold ${isLarge ? "text-xl" : "text-base"}`} style={{ color: "var(--text-primary)" }}>
              {project.name}
            </h3>
          </div>
          <span className={badgeClass[project.status]}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "currentColor" }} />
            {status.label}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
          {project.tagline}
        </p>

        {isLarge && (
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-tertiary)" }}>
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, isLarge ? 5 : 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[11px] font-mono font-medium rounded-md" style={{ background: "var(--surface-2)", color: "var(--text-tertiary)" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover arrow */}
      {(project.externalUrl || project.url) && (
        <div className="absolute top-5 right-5 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-1" style={{ background: "rgba(124,58,237,0.1)" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(124,58,237,0.8)" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      )}
    </div>
  );

  if (project.externalUrl) return <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">{inner}</a>;
  if (project.url) return <Link href={project.url}>{inner}</Link>;
  return inner;
}
