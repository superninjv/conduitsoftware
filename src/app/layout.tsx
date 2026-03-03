import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conduit Software",
  description:
    "Analytics engines, developer tools, and game mods. Open-source infrastructure by Conduit Software.",
};

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(var(--bg-rgb, 10,10,10), 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--card-border)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Conduit
        </Link>

        <div className="flex items-center gap-8">
          {[
            { label: "Analytics", href: "/#analytics" },
            { label: "Tools", href: "/#devtools" },
            { label: "Mods", href: "/#mods" },
            { label: "API", href: "/docs" },
            { label: "Bugs", href: "/bugs" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hidden sm:block"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = "var(--text-tertiary)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer
      className="relative"
      style={{
        borderTop: "1px solid var(--card-border)",
        background: "var(--bg-primary)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Conduit
            </Link>
            <p
              className="text-sm mt-3 leading-relaxed max-w-[220px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Analytics engines, developer tools, and game modifications.
            </p>
          </div>

          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Products
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Paragon Analytics", href: "/#analytics" },
                { label: "Developer Tools", href: "/#devtools" },
                { label: "Minecraft Mods", href: "/#mods" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Developers
            </h4>
            <ul className="space-y-2">
              {[
                { label: "API Documentation", href: "/docs" },
                { label: "Open Source", href: "/docs#open-source" },
                { label: "Status", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Contact", href: "/contact" },
                { label: "Bug Reports", href: "/bugs" },
                { label: "GitHub", href: "https://github.com/conduit-software" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 text-sm"
          style={{
            borderTop: "1px solid var(--card-border)",
            color: "var(--text-tertiary)",
          }}
        >
          &copy; 2026 Conduit Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
