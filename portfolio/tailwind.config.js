/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        ink: "#F1F5F9",
        muted: "#94A3B8",
        cyan: {
          glow: "#22D3EE",
        },
        violet: {
          glow: "#8B5CF6",
        },
      },
      backgroundImage: {
        "space-gradient":
          "radial-gradient(circle at 15% 10%, rgba(139,92,246,0.25), transparent 45%), radial-gradient(circle at 85% 20%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 50% 90%, rgba(139,92,246,0.15), transparent 45%), linear-gradient(180deg, #0B0F1E 0%, #14102B 55%, #1A1533 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        "glass-inset": "inset 0 1px 0 rgba(255,255,255,0.12)",
      },
    },
  },
  plugins: [],
};
