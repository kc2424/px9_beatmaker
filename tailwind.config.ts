import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          rust: "#cc6437",
        },
        void: {
          black: "#0b0b0b",
        },
        charcoal: {
          surface: "#272a2a",
        },
        bone: {
          DEFAULT: "#edebe7",
          darker: "#dfddd9",
        },
        pure: {
          white: "#ffffff",
        },
        abyss: "#050505",
        steel: "#484848",
        ash: "#cecece",
      },
      fontFamily: {
        brand: ["var(--font-oswald)", "ui-sans-serif", "sans-serif"],
        heading: ["var(--font-oswald)", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        pill: "1440px",
        card: "10px",
        news: "0px",
      },
      maxWidth: {
        page: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
