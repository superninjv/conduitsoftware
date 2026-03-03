"use client";

import Link from "next/link";
import { Project, statusConfig } from "@/config/projects";

export function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  const content = (
    <div className="gradient-border card-hover group relative overflow-hidden p-6 h-full flex flex-col">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-conduit-400/0 to-conduit-600/0 group-hover:from-conduit-400/5 group-hover:to-conduit-600/5 transition-all duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{project.icon}</span>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${status.color}`} />
            <span className={`text-xs font-medium ${status.textColor}`}>
              {status.label}
            </span>
          </div>
        </div>

        {/* Body */}
        <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-1">
          {project.name}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          {project.tagline}
        </p>
        <p className="text-sm text-[var(--text-tertiary)] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[var(--border-color)]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono text-[var(--text-tertiary)] bg-[var(--border-color)] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.externalUrl) {
    return (
      <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (project.url) {
    return <Link href={project.url}>{content}</Link>;
  }

  return content;
}
