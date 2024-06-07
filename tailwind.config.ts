import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      light: "100",
      normal: "400",
      semibold: "600",
      bold: "900",
    },
    fontSize: {
      headline: "clamp(3rem, 5vw + 1rem, 5rem)",
      subheadline: "clamp(1.85rem, 5vw + 1rem, 2.15rem)",
      caption: "clamp(1.35rem, 1vw + 1rem, 1.5rem)",
      "main-fs": "clamp(1.05rem, 1vw + 1rem, 1.15rem)",
    },
    transitionDuration: {
      fast: ".35s",
      normal: ".5s",
      slow: ".75s",
    },
    extend: {
      fontFamily: {
        "zen-old": ['"var(--font-zen-old)"', ...defaultTheme.fontFamily.sans],
        poppins: ['"var(--font-poppins)"', ...defaultTheme.fontFamily.sans],
      },
      width: {
        "fluid-800": "min(800px, 100% - 1rem)",
        "fluid-1200": "min(1200px, 100% - 1rem)",
        "fluid-1400": "min(1400px, 100% - 1rem)",
      },
      colors: {
        cta: "#FFA500",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: "#DEDEDE",
        secondary: "#101010",
        tertiary: "#ABABAB",
        extra: "#AFC2D5",
      },
      dark: {
        primary: "#101010",
        secondary: "#DEDEDE",
        tertiary: "#707070",
        extra: "#79AEA3",
      },
    }),
  ],
};
export default config;
