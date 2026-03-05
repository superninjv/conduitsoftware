"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/AnimatedSection";

const toolCategories = [
  {
    title: "API Testing",
    status: "In Development",
    statusColor: "bg-blue-500 text-blue-500",
    description: "Automated endpoint validation and response monitoring. Define expected responses, set up scheduled health checks, and get notified when something breaks.",
    features: [
      "Endpoint health monitoring",
      "Response schema validation",
      "Scheduled test runs",
      "Failure notifications",
    ],
  },
  {
    title: "Data Pipelines",
    status: "In Development",
    statusColor: "bg-blue-500 text-blue-500",
    description: "Transform and route data between services. Built to handle the data flow between game APIs, our analytics engine, and downstream consumers.",
    features: [
      "JSON/CSV transformation",
      "Multi-source aggregation",
      "Rate limit handling",
      "Retry and error recovery",
    ],
  },
  {
    title: "Workflow Automation",
    status: "Planned",
    statusColor: "bg-zinc-400 text-zinc-400",
    description: "Scriptable tasks and scheduled operations. Automate repetitive developer workflows like deployments, data backups, and report generation.",
    features: [
      "Cron-based scheduling",
      "Webhook triggers",
      "Script runner",
      "Execution logging",
    ],
  },
];

export default function ToolsPage() {
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
          <span className="section-label mb-4 block">Developer Tools</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Conduit DevTools
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-6 leading-relaxed">
            A suite of developer tools built for internal use and shared with
            the community. Everything we build to keep Conduit running, packaged
            up for others to use.
          </p>
          <div className="flex gap-3 mb-14">
            <Link href="/docs" className="btn-primary px-5 py-2.5">
              API Documentation
            </Link>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-5 py-2.5"
            >
              GitHub
            </a>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {toolCategories.map((tool, i) => (
            <AnimatedSection key={tool.title} delay={i * 100}>
              <div className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">
                        {tool.title}
                      </h2>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${tool.statusColor.split(" ")[0]}`} />
                        <span className={`text-[11px] font-medium ${tool.statusColor.split(" ")[1]}`}>{tool.status}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  <div className="sm:w-56 shrink-0">
                    <div className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Capabilities</div>
                    <ul className="space-y-2">
                      {tool.features.map((f) => (
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

        {/* API Preview */}
        <AnimatedSection delay={400}>
          <div className="mt-16">
            <h2 className="font-display font-bold text-2xl tracking-tight mb-6 text-[var(--text-primary)]">
              REST API
            </h2>
            <div className="card-elevated p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border-color)]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                <span className="ml-2 text-[11px] text-[var(--text-tertiary)] font-sans">terminal</span>
              </div>
              <div className="space-y-1 text-xs leading-relaxed">
                <div>
                  <span className="text-[var(--text-tertiary)]">$</span>{" "}
                  <span className="text-cyan-400">curl</span>{" "}
                  <span className="text-[var(--text-secondary)]">conduitsoftware.org/api/v1/projects</span>
                </div>
                <div className="text-[var(--text-tertiary)] mt-2">
                  {"{"} <span className="text-emerald-400">&quot;projects&quot;</span>: [
                </div>
                <div className="text-[var(--text-tertiary)] pl-4">
                  {"{"} <span className="text-emerald-400">&quot;id&quot;</span>: <span className="text-amber-400">&quot;paragon-royale&quot;</span>,
                </div>
                <div className="text-[var(--text-tertiary)] pl-6">
                  <span className="text-emerald-400">&quot;status&quot;</span>: <span className="text-amber-400">&quot;live&quot;</span>,
                </div>
                <div className="text-[var(--text-tertiary)] pl-6">
                  <span className="text-emerald-400">&quot;category&quot;</span>: <span className="text-amber-400">&quot;analytics&quot;</span>
                </div>
                <div className="text-[var(--text-tertiary)] pl-4">{"}"}, ...</div>
                <div className="text-[var(--text-tertiary)]">
                  ], <span className="text-emerald-400">&quot;total&quot;</span>: <span className="text-amber-400">7</span> {"}"}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/docs" className="inline-flex items-center gap-1.5 text-sm font-medium text-conduit-500 hover:text-conduit-400 transition-colors">
                Full API documentation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
