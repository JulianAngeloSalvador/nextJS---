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
      headline: "clamp(4.5rem, 5vw + 1rem, 6rem)",
      subheadline: "clamp(3rem, 5vw + 1rem, 4rem)",
      caption: "clamp(2.35rem, 1vw + 1rem, 3rem)",
      title: "clamp(1.35rem, 1vw + 1rem, 1.5rem)",
      "main-fs": "clamp(1.05rem, 1vw + 1rem, 1.15rem)",
      icon: "clamp(2.05rem, 1vw + 1rem, 2.15rem)",
      sm: "clamp(.7rem, 1vw + .8rem, .9rem)",
      xs: "clamp(.25rem, 1vw + .25rem, .5rem)",
    },

    transitionDuration: {
      fast: ".25s",
      normal: ".5s",
      slow: ".75s",
    },
    extend: {
      screens: {
        sm: "540px",
        md: "900px",
      },
      fontFamily: {
        "nanum-myeongjo": [
          '"var(--font-nanum-myeongjo)"',
          ...defaultTheme.fontFamily.sans,
        ],
        poppins: ['"var(--font-poppins)"', ...defaultTheme.fontFamily.sans],
        montserrat: [
          '"var(--font-montserrat)"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      width: {
        "fluid-150": "min(150px, 100%)",
        "fluid-200": "min(200px, 100%)",
        "fluid-300": "min(300px, 100%)",
        "fluid-400": "min(400px, 100%)",
        "fluid-500": "min(500px, 100%)",
        "fluid-600": "min(600px, 100%)",
        "fluid-800": "min(800px, 100%)",
        "fluid-1200": "min(1200px, 100%)",
        "fluid-1300": "min(1300px, 100%)",
        "fluid-1400": "min(1400px, 100%)",
        "fluid-1500": "min(1500px, 100%)",
        "fluid-layout": "var(--fluid-layout)",
      },
      colors: {
        light: "#DEDEDE",
        dark: "#101010",
        cta: "#00AAAA",
      },
      boxShadow: {
        "custom-shadow": "0 .75rem .5rem theme(colors.neutral.400)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*");
      addVariant("grandchildren", "&>*>*");
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("hocus-within", ["&:hover", "&:focus-within"]);
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
