"use client";

import { useState, FormEvent } from "react";
import { projects } from "@/config/projects";
import { AnimatedSection } from "@/components/AnimatedSection";

type Severity = "low" | "medium" | "high" | "critical";

const severities: { value: Severity; label: string; desc: string }[] = [
  { value: "low", label: "Low", desc: "Cosmetic" },
  { value: "medium", label: "Medium", desc: "Impaired" },
  { value: "high", label: "High", desc: "Broken" },
  { value: "critical", label: "Critical", desc: "Crash / data loss" },
];

export default function BugsPage() {
  const [form, setForm] = useState({ project: "", title: "", severity: "medium" as Severity, description: "", steps: "", expected: "", actual: "", environment: "", email: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/v1/bugs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch { setStatus("error"); }
  };

  return (
    <div className="pt-32 pb-28">
      <div className="max-w-[680px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 gradient-text">Support</p>
          <h1 className="heading-display text-[clamp(2rem,5vw,3rem)] mb-4" style={{ color: "var(--text-primary)" }}>Report a Bug</h1>
          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--text-secondary)" }}>
            Found something broken? The more detail you provide, the faster we can fix it.
          </p>
        </AnimatedSection>

        {status === "sent" ? (
          <AnimatedSection>
            <div className="card p-12 text-center">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl" style={{ background: "rgba(16,185,129,0.1)" }}>✓</div>
              <h2 className="font-display font-semibold text-xl mb-2" style={{ color: "var(--text-primary)" }}>Report submitted</h2>
              <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>We&apos;ll look into it. Thanks for helping improve Conduit.</p>
              <button onClick={() => { setStatus("idle"); setForm({ project: "", title: "", severity: "medium", description: "", steps: "", expected: "", actual: "", environment: "", email: "" }); }} className="btn-secondary">Submit another</button>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={80}>
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Project *</label>
                  <select required value={form.project} onChange={(e) => set("project", e.target.value)} className="input-field">
                    <option value="">Select a project</option>
                    {projects.map((p) => <option key={p.id} value={p.id}>{p.icon} {p.name}</option>)}
                    <option value="website">🌐 conduitsoftware.org</option>
                    <option value="other">📦 Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Title *</label>
                  <input type="text" required placeholder="Brief summary" value={form.title} onChange={(e) => set("title", e.target.value)} className="input-field" />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Severity</label>
                  <div className="grid grid-cols-4 gap-2">
                    {severities.map((s) => (
                      <button key={s.value} type="button" onClick={() => set("severity", s.value)}
                        className="p-2.5 rounded-xl text-center transition-all duration-200"
                        style={form.severity === s.value ? { background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.3)", color: "rgb(124,58,237)" } : { background: "var(--surface-card)", border: "1px solid var(--border-strong)", color: "var(--text-secondary)" }}>
                        <div className="text-[13px] font-semibold">{s.label}</div>
                        <div className="text-[10px] opacity-70 mt-0.5">{s.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Description *</label>
                  <textarea required rows={4} placeholder="What happened?" value={form.description} onChange={(e) => set("description", e.target.value)} className="input-field resize-y" />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Steps to Reproduce</label>
                  <textarea rows={3} placeholder={"1. Go to...\n2. Click...\n3. Observe..."} value={form.steps} onChange={(e) => set("steps", e.target.value)} className="input-field resize-y" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Expected</label>
                    <textarea rows={3} placeholder="What should happen?" value={form.expected} onChange={(e) => set("expected", e.target.value)} className="input-field resize-y" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Actual</label>
                    <textarea rows={3} placeholder="What happened instead?" value={form.actual} onChange={(e) => set("actual", e.target.value)} className="input-field resize-y" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Environment</label>
                  <input type="text" placeholder="e.g. Chrome 120, Windows 11" value={form.environment} onChange={(e) => set("environment", e.target.value)} className="input-field" />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Your Email <span style={{ color: "var(--text-muted)" }}>(optional)</span></label>
                  <input type="email" placeholder="For follow-up" value={form.email} onChange={(e) => set("email", e.target.value)} className="input-field" />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-3.5 mt-2 disabled:opacity-50">
                  {status === "sending" ? "Submitting..." : "Submit Bug Report"}
                </button>

                {status === "error" && <p className="text-sm text-center" style={{ color: "#ef4444" }}>Failed to send. Try emailing us directly.</p>}
              </form>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
