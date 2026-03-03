"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ConduitLogo } from "./ConduitLogo";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Paragon Analytics", href: "/projects" },
      { label: "Minecraft Mods", href: "/projects" },
      { label: "Developer Tools", href: "/projects" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs" },
      { label: "Open Source", href: siteConfig.socials.github },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Bug Reports", href: "/bugs" },
      { label: "GitHub", href: siteConfig.socials.github },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-color)", background: "var(--surface-1)" }}>
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-16">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <ConduitLogo className="w-7 h-7" />
              <span className="font-display font-bold text-sm" style={{ color: "var(--text-primary)" }}>Conduit Software</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: "var(--text-tertiary)" }}>
              Building the infrastructure between players and data.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link text-sm transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid var(--border-color)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Conduit Software. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {siteConfig.socials.github && (
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="footer-icon transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
