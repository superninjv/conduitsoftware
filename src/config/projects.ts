export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "analytics" | "mods" | "tools" | "platforms";
  status: "live" | "beta" | "development" | "planned";
  url?: string;
  externalUrl?: string;
  icon: string; // emoji for now, swap to SVG/image later
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  // ─── Paragon Analytics Suite ───────────────────────────────────
  {
    id: "paragon-royale",
    name: "Paragon Royale",
    tagline: "Fortnite analytics & performance tracking",
    description:
      "Advanced match analytics, performance trends, and competitive insights for Fortnite players looking to improve their game.",
    category: "analytics",
    status: "live",
    externalUrl: "https://paragonroyale.com",
    icon: "🏆",
    tags: ["Fortnite", "Analytics", "Tracking"],
    featured: true,
  },
  {
    id: "paragon-rivals",
    name: "Paragon Rivals",
    tagline: "Marvel Rivals analytics & stats",
    description:
      "Deep-dive hero statistics, match breakdowns, and meta analysis for Marvel Rivals competitive play.",
    category: "analytics",
    status: "development",
    icon: "⚡",
    tags: ["Marvel Rivals", "Analytics", "Stats"],
    featured: true,
  },
  {
    id: "paragon-overwatch",
    name: "Paragon Overwatch",
    tagline: "Overwatch 2 performance insights",
    description:
      "Hero performance tracking, SR trends, and team composition analysis for Overwatch 2.",
    category: "analytics",
    status: "planned",
    icon: "🎯",
    tags: ["Overwatch 2", "Analytics", "Performance"],
  },
  {
    id: "paragon-strike",
    name: "Paragon Strike",
    tagline: "CS2 & CSGO match analytics",
    description:
      "Round-by-round breakdowns, economy tracking, and aim statistics for Counter-Strike players.",
    category: "analytics",
    status: "planned",
    icon: "💥",
    tags: ["CS2", "CSGO", "Analytics"],
  },

  // ─── Minecraft Mods ────────────────────────────────────────────
  {
    id: "mc-mods",
    name: "Minecraft Mods",
    tagline: "Published mods on CurseForge & Modrinth",
    description:
      "A collection of Minecraft mods ranging from quality-of-life improvements to new gameplay mechanics. Available on CurseForge and Modrinth.",
    category: "mods",
    status: "live",
    icon: "⛏️",
    tags: ["Minecraft", "Mods", "CurseForge", "Modrinth"],
    featured: true,
  },
  {
    id: "terraria-tools",
    name: "Terraria Tools",
    tagline: "Terraria utilities & companion tools",
    description:
      "Companion utilities for Terraria players including world analysis and inventory management.",
    category: "mods",
    status: "planned",
    icon: "🌳",
    tags: ["Terraria", "Tools", "Utilities"],
  },

  // ─── Developer Tools ───────────────────────────────────────────
  {
    id: "conduit-devtools",
    name: "Conduit DevTools",
    tagline: "Internal developer tooling",
    description:
      "A suite of developer tools built for internal use and shared with the community. Includes utilities for API testing, data transformation, and workflow automation.",
    category: "tools",
    status: "development",
    icon: "🔧",
    tags: ["Developer", "Tools", "Open Source"],
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "analytics", label: "Paragon Analytics" },
  { id: "mods", label: "Mods & Modding" },
  { id: "tools", label: "Developer Tools" },
  { id: "platforms", label: "Platforms" },
] as const;

export const statusConfig = {
  live: { label: "Live", color: "bg-emerald-500", textColor: "text-emerald-500" },
  beta: { label: "Beta", color: "bg-amber-500", textColor: "text-amber-500" },
  development: { label: "In Development", color: "bg-blue-500", textColor: "text-blue-500" },
  planned: { label: "Planned", color: "bg-zinc-400", textColor: "text-zinc-400" },
};
