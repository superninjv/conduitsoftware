"use client";

import Link from "next/link";
import { Project, statusConfig } from "@/config/projects";

export function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  const content = (
    <div className="card group p-5 h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 shrink-0 ml-3">
          <span className={`w-1.5 h-1.5 rounded-full ${status.color}`} />
          <span className={`text-[11px] font-medium ${status.textColor}`}>
            {status.label}
          </span>
        </div>
      </div>

      <p className="text-sm text-[var(--text-secondary)] mb-3">
        {project.tagline}
      </p>
      <p className="text-sm text-[var(--text-tertiary)] leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--border-color)]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] font-mono text-[var(--text-tertiary)] bg-[var(--surface-tertiary)] rounded"
          >
            {tag}
          </span>
        ))}
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
