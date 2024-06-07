import { Poppins, Nanum_Myeongjo, Montserrat } from "next/font/google";

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["100", "400", "600", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  weight: ["100", "400", "600", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});
