import { Zen_Old_Mincho, Noto_Serif_JP, Poppins } from "next/font/google";

export const zenOld = Zen_Old_Mincho({
  weight: ["400", "600", "900"],
  variable: "--font-zen-old",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "600", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
