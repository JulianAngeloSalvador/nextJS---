import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { montserrat } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Basic Japanese",
  description: "Learn the Basics of Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
