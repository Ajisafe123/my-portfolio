/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React files
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#6366F1",
        "primary-dark": "#4F46E5",
        secondary: "#8B5CF6",
        accent: "#EC4899",
        "neutral-50": "#F9FAFB",
        "neutral-900": "#111827",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Crimson Text", "serif"],
        display: ["Playfair Display", "serif"],
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["1.875rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" },
          "50%": { boxShadow: "0 0 30px rgba(99, 102, 241, 0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        "elevation-1": "0 2px 8px rgba(0, 0, 0, 0.1)",
        "elevation-2": "0 8px 24px rgba(0, 0, 0, 0.12)",
        "elevation-3": "0 16px 40px rgba(0, 0, 0, 0.15)",
        "glow-primary": "0 0 30px rgba(99, 102, 241, 0.4)",
        "inset-light": "inset 0 1px 2px rgba(255, 255, 255, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
