"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ConduitLogo } from "./ConduitLogo";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Paragon Analytics", href: "/projects#analytics" },
      { label: "Minecraft Mods", href: "/projects#mods" },
      { label: "Developer Tools", href: "/projects#tools" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Documentation", href: "/docs" },
      { label: "Open Source", href: "/docs#open-source" },
      { label: "Status", href: "#" },
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
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface-secondary)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <ConduitLogo className="w-7 h-7" />
              <span className="font-display font-semibold text-base text-[var(--text-primary)]">
                Conduit
              </span>
            </Link>
            <p className="text-sm text-[var(--text-tertiary)] leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-display font-semibold text-sm text-[var(--text-primary)] mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-tertiary)]">
            &copy; {new Date().getFullYear()} Conduit Software. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
