"use client";

import { useState } from "react";
import { projects, categories } from "@/config/projects";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-2xl mb-10">
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
              Projects
            </h1>
            <p className="text-lg text-[var(--text-secondary)]">
              Everything we&apos;re building, from game analytics to developer
              tools. Click through to explore each project.
            </p>
          </div>
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-conduit-500 text-white shadow-lg shadow-conduit-500/25"
                    : "text-[var(--text-secondary)] bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-conduit-500/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--text-tertiary)]">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
