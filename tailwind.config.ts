import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";
import plugin from "tailwindcss/plugin";

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
      headline: "clamp(4rem, 5vw + 1rem, 5rem)",
      subheadline: "clamp(3rem, 5vw + 1rem, 4rem)",
      caption: "clamp(1.35rem, 1vw + 1rem, 1.5rem)",
      "main-fs": "clamp(1.05rem, 1vw + 1rem, 1.15rem)",
    },

    transitionDuration: {
      fast: ".35s",
      normal: ".5s",
      slow: ".75s",
    },
    extend: {
      screens: {
        sm: "540px",
      },
      fontFamily: {
        "zen-old": ['"var(--font-zen-old)"', ...defaultTheme.fontFamily.sans],
        poppins: ['"var(--font-poppins)"', ...defaultTheme.fontFamily.sans],
      },
      width: {
        "fluid-150": "min(150px, 100%)",
        "fluid-200": "min(200px, 100%)",
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
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*");
    }),
    createThemes({
      light: {
        primary: "#DEDEDE",
        secondary: "#101010",
        tertiary: "#8F8F8F",
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
