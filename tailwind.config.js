/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        conduit: {
          50: "#f0eaff",
          100: "#d9c9ff",
          200: "#b794ff",
          300: "#9563ff",
          400: "#7c3aed",
          500: "#6d28d9",
          600: "#5b21b6",
          700: "#4c1d95",
          800: "#3b1578",
          900: "#2e1065",
        },
        surface: {
          light: "#ffffff",
          "light-secondary": "#f8f7fc",
          "light-tertiary": "#f0eef5",
          dark: "#0a0a0f",
          "dark-secondary": "#12121a",
          "dark-tertiary": "#1a1a26",
        },
      },
      fontFamily: {
        display: ['"Instrument Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.05) 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, rgba(124,58,237,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,58,237,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
