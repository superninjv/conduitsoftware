"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/AnimatedSection";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const updateField = (field: keyof ContactForm, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
                Get in touch
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-10">
                Have a question, want to collaborate, or just want to say hello?
                We&apos;d love to hear from you.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="space-y-6">
                <div className="gradient-border p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-conduit-500/10 flex items-center justify-center text-conduit-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--text-primary)]">
                        Email
                      </div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-conduit-400 hover:text-conduit-300 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                {siteConfig.socials.github && (
                  <div className="gradient-border p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-conduit-500/10 flex items-center justify-center text-conduit-400">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[var(--text-primary)]">
                          GitHub
                        </div>
                        <a
                          href={siteConfig.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-conduit-400 hover:text-conduit-300 transition-colors"
                        >
                          conduit-software
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {status === "sent" ? (
              <AnimatedSection>
                <div className="gradient-border p-10 text-center">
                  <div className="text-4xl mb-4">📬</div>
                  <h2 className="font-display font-semibold text-xl mb-2 text-[var(--text-primary)]">
                    Message sent
                  </h2>
                  <p className="text-[var(--text-secondary)] mb-6">
                    We&apos;ll get back to you as soon as we can.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-secondary"
                  >
                    Send another
                  </button>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection delay={200}>
                <div className="gradient-border p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          placeholder="Your name"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          placeholder="you@example.com"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => updateField("subject", e.target.value)}
                        placeholder="What is this about?"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder="Tell us more..."
                        className="input-field resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full py-3.5 disabled:opacity-50"
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "error" && (
                      <p className="text-sm text-red-500 text-center">
                        Something went wrong. Please try emailing us directly.
                      </p>
                    )}
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
