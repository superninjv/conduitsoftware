"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { siteConfig } from "@/config/site";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/projects",
    desc: "List all projects. Supports ?category= and ?status= filters.",
    response: `{
  "projects": [
    {
      "id": "paragon-royale",
      "name": "Paragon Royale",
      "category": "analytics",
      "status": "live",
      "tags": ["Fortnite", "Analytics"]
    }
  ],
  "total": 7
}`,
  },
  {
    method: "GET",
    path: "/api/v1/projects?id=:id",
    desc: "Get a single project by ID.",
    response: `{
  "id": "paragon-royale",
  "name": "Paragon Royale",
  "tagline": "Fortnite analytics",
  "category": "analytics",
  "status": "live"
}`,
  },
  {
    method: "POST",
    path: "/api/v1/bugs",
    desc: "Submit a bug report. Requires: project, title, description.",
    response: `{ "success": true, "message": "Bug report received" }`,
  },
  {
    method: "POST",
    path: "/api/v1/contact",
    desc: "Send a contact message. Requires: name, email, subject, message.",
    response: `{ "success": true, "message": "Message sent" }`,
  },
];

const methodStyle: Record<string, { bg: string; text: string; border: string }> = {
  GET: { bg: "rgba(16,185,129,0.08)", text: "#10b981", border: "rgba(16,185,129,0.15)" },
  POST: { bg: "rgba(99,102,241,0.08)", text: "#818cf8", border: "rgba(99,102,241,0.15)" },
};

export default function DocsPage() {
  return (
    <div className="pt-32 pb-28">
      <div className="max-w-[800px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 gradient-text">Developers</p>
          <h1 className="heading-display text-[clamp(2rem,5vw,3rem)] mb-4" style={{ color: "var(--text-primary)" }}>API Documentation</h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            Open REST API for Conduit Software project data. No authentication required for public endpoints.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="card p-4 mb-12 flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Base URL</span>
            <code className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>{siteConfig.url}/api/v1</code>
          </div>
        </AnimatedSection>

        <div className="space-y-5">
          {endpoints.map((ep, i) => {
            const ms = methodStyle[ep.method];
            return (
              <AnimatedSection key={ep.path + ep.method} delay={120 + i * 80}>
                <div className="card overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold shrink-0" style={{ background: ms.bg, color: ms.text, border: `1px solid ${ms.border}` }}>
                        {ep.method}
                      </span>
                      <div>
                        <code className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>{ep.path}</code>
                        <p className="text-[13px] mt-1.5" style={{ color: "var(--text-tertiary)" }}>{ep.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4" style={{ borderTop: "1px solid var(--border-color)", background: "var(--surface-1)" }}>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Response</div>
                    <pre className="font-mono text-xs leading-relaxed overflow-x-auto" style={{ color: "var(--text-tertiary)" }}>{ep.response}</pre>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={500} className="mt-20 text-center">
          <h2 className="font-display font-semibold text-lg mb-3" style={{ color: "var(--text-primary)" }}>More coming soon</h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: "var(--text-tertiary)" }}>
            Game-specific analytics endpoints, mod metadata APIs, and webhook integrations are all on the roadmap.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
