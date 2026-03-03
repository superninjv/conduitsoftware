"use client";

import { useState } from "react";
import { projects, categories } from "@/config/projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-32 pb-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 gradient-text">All Projects</p>
          <h1 className="heading-display text-[clamp(2.2rem,5vw,3.5rem)] mb-4" style={{ color: "var(--text-primary)" }}>
            What we&apos;re building
          </h1>
          <p className="text-lg max-w-[520px] leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>
            Game analytics, mods, developer tools, and more. Filter by category to find what you&apos;re looking for.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className="px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300"
                style={active === cat.id ? {
                  background: "var(--gradient-primary)",
                  color: "#fff",
                  boxShadow: "0 2px 12px rgba(124,58,237,0.3)",
                } : {
                  background: "var(--surface-card)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="bento-grid">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 80} className={i === 0 && filtered.length > 2 ? "bento-wide" : i === 1 && filtered.length > 2 ? "bento-narrow" : "bento-half"}>
              <ProjectCard project={project} size={i === 0 && filtered.length > 2 ? "large" : "default"} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-base" style={{ color: "var(--text-muted)" }}>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
