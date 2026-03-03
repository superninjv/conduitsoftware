"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/v1/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch { setStatus("error"); }
  };

  return (
    <div className="pt-32 pb-28">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 gradient-text">Contact</p>
              <h1 className="heading-display text-[clamp(2rem,5vw,3rem)] mb-4" style={{ color: "var(--text-primary)" }}>
                Get in touch
              </h1>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                Questions, feedback, or collaboration ideas &mdash; we&apos;d love to hear from you.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <div className="space-y-4">
                <div className="card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(124,58,237,0.08)", color: "rgb(124,58,237)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium accent-link">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                {siteConfig.socials.github && (
                  <div className="card p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(124,58,237,0.08)", color: "rgb(124,58,237)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>GitHub</div>
                        <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium accent-link">
                          conduit-software
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3">
            {status === "sent" ? (
              <AnimatedSection>
                <div className="card p-12 text-center">
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl" style={{ background: "rgba(124,58,237,0.08)" }}>📬</div>
                  <h2 className="font-display font-semibold text-xl mb-2" style={{ color: "var(--text-primary)" }}>Message sent</h2>
                  <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>We&apos;ll get back to you as soon as we can.</p>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }} className="btn-secondary">Send another</button>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection delay={160}>
                <div className="card p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Name *</label>
                        <input type="text" required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Subject *</label>
                      <input type="text" required value={form.subject} onChange={(e) => set("subject", e.target.value)} placeholder="What's this about?" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Message *</label>
                      <textarea required rows={6} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us more..." className="input-field resize-y" />
                    </div>
                    <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-3.5 disabled:opacity-50">
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "error" && <p className="text-sm text-center" style={{ color: "#ef4444" }}>Something went wrong. Try emailing us directly.</p>}
                  </form>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
