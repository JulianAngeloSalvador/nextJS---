import type { Metadata } from "next";
import "@/app/styles/globals.css";
import MainNav from "./components/MainNav";

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
    <html lang="en" data-theme="dark">
      <body className="antialiased w-fluid-1200 h-full mx-auto">
        <MainNav />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
