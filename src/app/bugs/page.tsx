"use client";

import { useState, FormEvent } from "react";
import { projects } from "@/config/projects";
import { AnimatedSection } from "@/components/AnimatedSection";

type Severity = "low" | "medium" | "high" | "critical";

interface BugReport {
  project: string;
  title: string;
  severity: Severity;
  description: string;
  steps: string;
  expected: string;
  actual: string;
  environment: string;
  email: string;
}

const severityOptions: { value: Severity; label: string; description: string }[] = [
  { value: "low", label: "Low", description: "Cosmetic issue or minor inconvenience" },
  { value: "medium", label: "Medium", description: "Feature works but with issues" },
  { value: "high", label: "High", description: "Feature is significantly broken" },
  { value: "critical", label: "Critical", description: "App crashes or data loss" },
];

export default function BugsPage() {
  const [form, setForm] = useState<BugReport>({
    project: "",
    title: "",
    severity: "medium",
    description: "",
    steps: "",
    expected: "",
    actual: "",
    environment: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/v1/bugs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({
        project: "",
        title: "",
        severity: "medium",
        description: "",
        steps: "",
        expected: "",
        actual: "",
        environment: "",
        email: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: keyof BugReport, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Report a Bug
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mb-10">
            Found something broken? Let us know and we&apos;ll get it fixed.
            The more detail you can provide, the faster we can resolve it.
          </p>
        </AnimatedSection>

        {status === "sent" ? (
          <AnimatedSection>
            <div className="gradient-border p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="font-display font-semibold text-xl mb-2 text-[var(--text-primary)]">
                Bug report submitted
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Thanks for taking the time to report this. We&apos;ll look into
                it and follow up if you provided an email.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-secondary"
              >
                Submit another
              </button>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project select */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Project *
                </label>
                <select
                  required
                  value={form.project}
                  onChange={(e) => updateField("project", e.target.value)}
                  className="input-field"
                >
                  <option value="">Select a project</option>
                  {projects.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.icon} {p.name}
                    </option>
                  ))}
                  <option value="website">🌐 conduitsoftware.org</option>
                  <option value="other">📦 Other</option>
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Bug Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Brief summary of the issue"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Severity *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {severityOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => updateField("severity", opt.value)}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                        form.severity === opt.value
                          ? "border-conduit-500 bg-conduit-500/10 text-conduit-400"
                          : "border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-secondary)] hover:border-conduit-500/30"
                      }`}
                    >
                      <div className="text-sm font-medium">{opt.label}</div>
                      <div className="text-xs opacity-70 mt-0.5">
                        {opt.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="What happened?"
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  className="input-field resize-y"
                />
              </div>

              {/* Steps to reproduce */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Steps to Reproduce
                </label>
                <textarea
                  rows={3}
                  placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe..."
                  value={form.steps}
                  onChange={(e) => updateField("steps", e.target.value)}
                  className="input-field resize-y"
                />
              </div>

              {/* Expected vs Actual */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Expected Behavior
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What should have happened?"
                    value={form.expected}
                    onChange={(e) => updateField("expected", e.target.value)}
                    className="input-field resize-y"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Actual Behavior
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What actually happened?"
                    value={form.actual}
                    onChange={(e) => updateField("actual", e.target.value)}
                    className="input-field resize-y"
                  />
                </div>
              </div>

              {/* Environment */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Environment
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chrome 120, Windows 11, Minecraft 1.21.4"
                  value={form.environment}
                  onChange={(e) => updateField("environment", e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Your Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="For follow-up questions"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary px-8 py-3.5 disabled:opacity-50"
                >
                  {status === "sending" ? "Submitting..." : "Submit Bug Report"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Failed to send. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
