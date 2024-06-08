"use client";

import { usePathname } from "next/navigation";
import { nanumMyeongjo } from "../fonts/fonts";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <section className="w-full h-dvh bg-primary flex flex-col justify-center items-center">
      <main className=" w-fluid-400 z-10">
        <h1 className={`${nanumMyeongjo.className} text-center text-nowrap`}>
          {pathname === "/auth/login" && "おかえり"}
          {pathname === "/auth/register" && "ようこそ"}
        </h1>
        {children}
      </main>
    </section>
  );
}
