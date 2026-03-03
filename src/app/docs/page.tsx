"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig } from "@/config/site";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/projects",
    description: "List all Conduit Software projects with metadata, status, and links.",
    response: `{
  "projects": [
    {
      "id": "paragon-royale",
      "name": "Paragon Royale",
      "category": "analytics",
      "status": "live",
      "url": "https://paragonroyale.com",
      "tags": ["Fortnite", "Analytics"]
    }
  ]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/projects/:id",
    description: "Get detailed information about a specific project.",
    response: `{
  "id": "paragon-royale",
  "name": "Paragon Royale",
  "tagline": "Fortnite analytics & performance tracking",
  "description": "...",
  "category": "analytics",
  "status": "live",
  "url": "https://paragonroyale.com",
  "tags": ["Fortnite", "Analytics"]
}`,
  },
  {
    method: "POST",
    path: "/api/v1/bugs",
    description: "Submit a bug report for any Conduit Software project.",
    response: `{
  "success": true,
  "message": "Bug report received"
}`,
  },
  {
    method: "POST",
    path: "/api/v1/contact",
    description: "Send a contact message to the Conduit Software team.",
    response: `{
  "success": true,
  "message": "Message sent"
}`,
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  POST: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  PUT: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  DELETE: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function DocsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            API Documentation
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mb-4">
            Open-source REST API for accessing Conduit Software project data.
            All endpoints are available at{" "}
            <code className="font-mono text-conduit-400 bg-conduit-500/10 px-1.5 py-0.5 rounded text-sm">
              {siteConfig.url}/api/v1
            </code>
          </p>
          <p className="text-sm text-[var(--text-tertiary)] mb-12">
            No authentication required for public endpoints. Rate limited to 100
            requests per minute.
          </p>
        </AnimatedSection>

        {/* Base URL */}
        <AnimatedSection delay={100}>
          <div className="gradient-border p-5 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-medium text-[var(--text-tertiary)] uppercase">
                Base URL
              </span>
              <code className="font-mono text-sm text-[var(--text-primary)]">
                {siteConfig.url}/api/v1
              </code>
            </div>
          </div>
        </AnimatedSection>

        {/* Endpoints */}
        <div className="space-y-6">
          {endpoints.map((ep, i) => (
            <AnimatedSection key={ep.path + ep.method} delay={150 + i * 80}>
              <div className="gradient-border overflow-hidden">
                {/* Header */}
                <div className="p-5 flex items-start gap-3">
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${methodColors[ep.method]}`}
                  >
                    {ep.method}
                  </span>
                  <div className="flex-1">
                    <code className="font-mono text-sm text-[var(--text-primary)]">
                      {ep.path}
                    </code>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {ep.description}
                    </p>
                  </div>
                </div>

                {/* Response */}
                <div className="border-t border-[var(--border-color)] bg-[var(--surface-secondary)] p-5">
                  <div className="text-xs font-mono text-[var(--text-tertiary)] mb-2 uppercase">
                    Response
                  </div>
                  <pre className="font-mono text-xs text-[var(--text-secondary)] overflow-x-auto leading-relaxed">
                    {ep.response}
                  </pre>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Coming soon */}
        <AnimatedSection delay={500}>
          <div className="mt-16 text-center">
            <h2 className="font-display font-semibold text-xl mb-3 text-[var(--text-primary)]">
              More endpoints coming soon
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              We&apos;re actively building out the API. Game-specific analytics
              endpoints, mod metadata, and webhook integrations are all on the
              roadmap.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
